Meteor based tool for DnD players<br><br>

meteor.com - Javascript based framework the app is constructed in<br>
mongodb.com - Database that Meteor uses on both client and server side<br><br><br>

Meteor version is 1.4<br>
Utilizes Blaze for templates<br>
Flowrouter for routing<br><br>


Documentation to come!<br>

File Structure

/client
-/accounts
--accounts.js
--LoginModal.html
--overrid-atPwdFormBTN.html
--override-atPwdFormBtn.js

-/layouts
--AppLayout.html
--HomeLayout.html
--MainLayout.html

-/modules
--/dm module
---battleorder.html
---battleorder.js
---gmModule.html
---gmModule.js

--/player module
---addPcModal.html
---addPcModal.js
---charactercreate.html
---charactercreate.js
---playermodule.html
---playermodule.js

--/spelltracking
---spelltracking.html
---spelltracking.js

-/pages
--Dashboard.html
--Dashboard.js
--Home.html

-/partials
--Header.html
--MainNav.html
--MainNav.js

/collections
-barbarianslots.js
-battleorder.js
-casterslots.js
-Characters.js
-clericslots.js
-monstermanual.js
-rangerslots.js
-sorcererslots.js
-wizardslots.js

/public
/sass
/server
-accounts.js
-fixtures.js
-methods.js
-publish.js

"In bottom directory"
routes.js
index.html
settings.json
style.scss



