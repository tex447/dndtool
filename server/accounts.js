

var postSignUp = function(userId,info) {
  var playerrole = info.profile.role;
    if ( playerrole == 'gm' ) {
       Roles.addUsersToRoles( userId, 'gamemaster');
     }
      else
    {
    Roles.addUsersToRoles( userId, 'player' );
    }
};

AccountsTemplates.configure({
  postSignUpHook: postSignUp
});
