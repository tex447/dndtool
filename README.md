Meteor based tool for DnD players<br><br>

meteor.com - Javascript based framework the app is constructed in<br>
mongodb.com - Database that Meteor uses on both client and server side<br><br><br>

Meteor version is 1.4<br>
Utilizes Blaze for templates<br>
Flowrouter for routing<br><br>


Documentation to come!<br>

File Structure<br><br>

/client<br>
-/accounts<br>
--accounts.js - Customizes Accounts package with dndtool specific options<br>
--LoginModal.html - Template for the Login Modal<br>
--override-atPwdFormBTN.html <br>
--override-atPwdFormBtn.js<br><br>

-/layouts<br>
--AppLayout.html - Simple app layout with the dynamic template<br>
--HomeLayout.html - Layout for the "home" page or front page prior to login<br><br>

-/modules<br>
--/dm module<br>
---battleorder.html - Battleorder template used by DM, only contains the code for the Initiative list and monster manual<br>
---battleorder.js - JS File for the battleorder template<br>
---gmModule.html - Template for the DM's homepage<br>
---gmModule.js - Associated JS file for DM's homepage template<br><br> -

--/player module<br>
---addPcModal.html<br>
---addPcModal.js<br>
---charactercreate.html<br>
---charactercreate.js<br>
---playermodule.html<br>
---playermodule.js<br><br>

--/spelltracking<br>
---spelltracking.html<br>
---spelltracking.js<br><br>

-/pages<br>
--Dashboard.html<br>
--Dashboard.js<br>
--Home.html<br><br>

-/partials<br>
--Header.html<br>
--MainNav.html<br>
--MainNav.js<br><br>

/collections<br>
-barbarianslots.js - Creates Barbarian Slots collection<br>
-battleorder.js- Creates Battleorder collection<br>
-casterslots.js- Creates Caster Slots collection<br>
-Characters.js- Creates Characters collection<br>
-clericslots.js- Creates Cleric Slots collection<br>
-monstermanual.js- Creates monstermanual collection<br>
-rangerslots.js- Creates Ranger Slots collection<br>
-sorcererslots.js- Creates Sorcerer Slots collection<br>
-wizardslots.js- Creates Wizard Slots collection<br><br>

/public<br>
/sass<br>
/server<br>
-accounts.js<br>
-fixtures.js<br>
-methods.js<br>
-publish.js<br><br>

"In bottom directory"<br>
routes.js<br>
index.html<br>
settings.json<br>
style.scss<br>



