(function () {
    var userService = new UserServiceClient();
    console.log(userService.url);
    $(afterhtmlloads);
    var template;
    var tbody;
    function afterhtmlloads() {
        tbody = $('#tbody');
        template = $('.template');

        $("#create").click(createUser);
        findAllUsers();
    }

    function findAllUsers(){
        userService.findAllUsers().then(renderusers);
    }
    function createUser(){
            var user = {
                firstName: $('#firstname').val(),
                lastName: $('#lastname').val(),
                password: $('#password').val(),
                username: $('#username').val()
            };
            userService.createUser(user).then(findAllUsers);
    }

    function renderusers(users){
        tbody.empty();
        for (var i=0;i<users.length;i++){

            var user = users[i];
            var clone = template.clone();
            console.log(user.username);
            clone.find('#usernametemp')
                .html(user.username);
            clone.find('#firstnametemp')
                .html(user.firstName);
            clone.find('#lastnametemp')
                .html(user.lastName);
            clone.find('#passwordtemp')
                .html(user.password);

            tbody.append(clone);
        }
    }
})();

