(function () {
    var userService = new UserServiceClient();

    $(main);
    var template;
    var tbody;
    function main() {
        tbody = $('.wbdv-tbody');
        template = $('.wbdv-template');
        $(".wbdv-create").click(createUser);
        $(".wbdv-update").click(updateUser);
        findAllUsers();
    }

    function updateUser (){
        console.log($(".wbdv-update").attr('id'));
        var user = {
            firstName: $('#firstNameFld').val(),
            lastName: $('#lastNameFld').val(),
            password: $('#passwordFld').val(),
            role: $('#roleFld').val(),
            username: $('#usernameFld').val()

        };
        userService.updateUser($(".wbdv-update").attr('id'),user).then(findAllUsers);
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
            clone.attr('id', user.id);
            clone.find('#wbdv-remove').click(deleteUser);
            clone.find('#wbdv-edit').click(editUser);

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
    function deleteUser(event) {
        var deleteBtn = $(event.currentTarget);
        console.log(deleteBtn);
        var userId = deleteBtn
            .parent()
            .parent()
            .parent()
            .attr('id');
        userService
            .deleteUser(userId)
            .then(findAllUsers);
    }
    function editUser(event) {
        var editBtn = $(event.currentTarget);
        var maindiv = editBtn.parent().parent().parent();
        $(".wbdv-update").attr('id',editBtn.parent().parent().parent().attr('id'));
        $('#firstNameFld').val(jQuery('.wbdv-first-name',maindiv).html());
        $('#lastNameFld').val(jQuery('.wbdv-last-name',maindiv).html());
        $('#passwordFld').val(jQuery('.wbdv-username',maindiv).html());
        $('#roleFld').val(jQuery('.wbdv-role',maindiv).html());
        $('#usernameFld').val(jQuery('.wbdv-username',maindiv).html());

    }
})();

