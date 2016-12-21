// Home Page
FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render("AppLayout", {main: "Home"});
    }
});

// Home Page
FlowRouter.route('/dashboard', {
    name: 'dashboard',
    action() {
        BlazeLayout.render("AppLayout", {main: "Dashboard"});
    }
});
FlowRouter.route('/monstermanual', {
    name: 'monstermanual',
    action() {
        BlazeLayout.render("AppLayout", {main: "monstermanual"});
    }
});
FlowRouter.route('/charctercreate', {
    name: 'charactercreate',
    action() {
        BlazeLayout.render("AppLayout", {main: "charactercreate"});
    }
});
FlowRouter.route('/localhistory', {
    name: 'localhistory',
    action() {
        BlazeLayout.render("AppLayout", {main: "history"});
    }
});
