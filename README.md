<img src="http://meteortips.com/images/first-meteor-tutorial/databases-part-1/1.png">

// Inserting  a MongoDB Collection with this setup

Your "GameList = new Mongo.Collection('gamelist');" statement has to be in 2 places!
#1 A server side .js file
#2 The client side .js file you are creating it in

For example in the swtool code, in order to create a collection for the game names to go in that the gamemaster creates, I have
"GameList = new Mongo.Collection('gamelist');" in the gamelist.js server side file, and in the GameNameModal.js under client > game folder.

Now both server and client side know about the collection. To allow the client side to insert into that collection, 
I have a submit form event on the appropriate template, in this case:

Client > Game > GameNameModal.js<br>

  'submit form': function(event){<br>
    event.preventDefault();<br>
    var gameNameVar = event.target.gamename.value;<br>
    Meteor.call('createnewgamelist', gameNameVar);<br>
    var gameNameVar = event.target.gamename.value = "";<br>
  },<br>

and you'll notice the meteor.call.  This is the client calling the server side.  The call goes to the method in gamelist.js on the server side, example below:<br>

server > gamelist.js<br>

Meteor.methods({<br>
    'createnewgamelist': function(gameNameVar) 
      var creatorVar = Meteor.user().profile.firstName;<br>
          GameList.insert({
            name: gameNameVar,<br>
            createdby: creatorVar<br>
            });<br>
      }<br>
});<br>

Now, In order to read and display from the collections on the server we have to do some more craziness.<br>

In the publish.js under the server folder, you will notice our collection of Meteor.publish's , examplbe below:<br>

server > publish.js<br>

Meteor.publish('gamelist', function()<br>
  var currentUserId = this.userId;<br>
  if(Roles.userIsInRole(this.userId, 'gamemaster')) <br>
  return GameList.find({});<br>
}<br>
});<br>

This allows for any gamemaster to see the results of GameList.find.  Thats the server side, onto the client side, we have to subscribe to the collection.  In order to do that, from my GameModule.js file I utilize an onCreated function<br>

Client > GameModule.js<br>

Template.GameModule.onCreated(function()<br>
  this.autorun(() => 
    this.subscribe('gamelist');<br><br>
  });<br>
});<br>

Which allows us to subscribe to the appropriate collection. Then in combination with the html, i utilize a helper to list the documents or "games" from the mongodb <br>

Client > GameModule.js<br>

Template.GameModule.helpers(<br>
  game: function() <br><br>
    return GameList.find();<br>
  }<br>
});
<br>
Client > GameModule.html<br>

template name="GameModule"<br>
  {{#if isInRole 'gamemaster'}}<br>
Game List:<br>
{{#each game}}<br>
{{name}}<br>
{{/each}}<br><br>
{{/if}}<br>
/template<br>

///////////////////////////////////////////////





Under .meteor folder > packages, you will notice a file with all the packages that are installed and used in case you need to research documentation, especially with useraccounts:core or the roles stuff.

alanning:roles allows for user roles and some easy references to them such as client>pages>Dashboard.html
{{#if isInRole 'gamemaster'}}

The "isInRole" allows us to show only the templates for the users logged in with that role.

2 Roles
'gamemaster'
'player'

The code to understand that is under server > accounts.js

For the module, I would just make a new folder under Clients > "player module" or something and throw the html and .js file in there

# rpgtool
