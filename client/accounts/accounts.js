var myLogoutFunc = function() {
  Session.set('nav-toggle', '');
  FlowRouter.go('/');
}

var myLoginFunc = function() {
  FlowRouter.go('/dashboard');
}

AccountsTemplates.configure({
  confirmPassword: false,
  onLogoutHook: myLogoutFunc,
  onSubmitHook: myLoginFunc
});


AccountsTemplates.addFields([
{
  _id: 'firstName',
  type: 'text',
  displayName: 'First Name',
  required: true,
  re: /(?=.*[a-z])/,
  errStr: 'must have lowercase letters'
},
{
  _id: 'role',
  type: 'select',
  displayName: 'role',
  select: [
    {
      text: 'GM',
      value: 'gm'
    }, {
      text: 'Player',
      value: 'player'
    }
  ]
}
]);
