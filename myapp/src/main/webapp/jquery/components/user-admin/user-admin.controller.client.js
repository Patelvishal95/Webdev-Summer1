(function () {
    var userService = new UserServiceClient();
    console.log(userService.url);
    $(afterhtmlloads);
    var template;
    var tbody;
    function afterhtmlloads() {
        tbody = $('.wbdv-tbody');
        template = $('.wbdv-template');

        $("#create").click(createUser);
        findAllUsers();
    }

    function findAllUsers(){
        userService.findAllUsers().then(renderusers);
    }
    function createUser(){
            var user = {
                firstName: $('#firstNameFld').val(),
                lastName: $('#lastNameFld').val(),
                password: $('#passwordFld').val(),
                role: $('#roleFld').val(),
                username: $('#usernameFld').val()
            };
            userService.createUser(user).then(findAllUsers);
    }

    function renderusers(users){
        tbody.empty();
        for (var i=0;i<users.length;i++){

            var user = users[i];
            var clone = template.clone();
            clone.find('.wbdv-username')
                .html(user.username);
            clone.find('.wbdv-first-name')
                .html(user.firstName);
            clone.find('.wbdv-last-name')
                .html(user.lastName);
            clone.find('.wbdv-role')
                .html(user.role);

            tbody.append(clone);
        }
    }
})();

