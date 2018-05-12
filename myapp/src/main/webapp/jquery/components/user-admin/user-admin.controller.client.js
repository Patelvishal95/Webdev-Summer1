(function () {
    var userService = new UserServiceClient();
    var $template;
    var $tbody;
    var $usernameFld, $passwordFld;
    var $removeBtn, $editBtn, $createBtn,$updateBtn;
    var $firstNameFld, $lastNameFld ,$roleFld;

    $(main);

    function main() {
        $tbody = $('.wbdv-tbody');
        $template = $('.wbdv-template');

        $createBtn=$(".wbdv-create");
        $editBtn=$(".wbdv-edit");
        $updateBtn=$(".wbdv-update");
        $firstNameFld =$('#firstNameFld');
        $lastNameFld=$('#lastNameFld');
        $passwordFld=$('#passwordFld');
        $usernameFld=$('#usernameFld');
        $roleFld=$('#roleFld');


        $createBtn.click(createUser);
        $updateBtn.click(updateUser);
        findAllUsers();
    }

    function updateUser (){
        var user = new User($usernameFld.val(),$passwordFld.val(),$firstNameFld.val(),$lastNameFld.val(),$roleFld.val());
        userService.updateUser($updateBtn.attr('id'),user).then(findAllUsers);
    }
    function findAllUsers(){
        userService.findAllUsers().then(renderusers);
    }
    function createUser(){

        var user = new User($usernameFld.val(),$passwordFld.val(),$firstNameFld.val(),$lastNameFld.val(),$roleFld.val());
            userService.createUser(user).then(findAllUsers);
    }

    function renderusers(users){
        $tbody.empty();
        for (var i=0;i<users.length;i++){

            var user = users[i];
            var clone = $template.clone();
            clone.attr('id', user.id);
            clone.find('#wbdv-remove').click(deleteUser);
            clone.find('#wbdv-edit').click(selectUser);

            clone.find('.wbdv-username')
                .html(user.username);
            clone.find('.wbdv-first-name')
                .html(user.firstName);
            clone.find('.wbdv-last-name')
                .html(user.lastName);
            clone.find('.wbdv-role')
                .html(user.role);

            $tbody.append(clone);
        }
    }
    function deleteUser(event) {
        var userId = $(event.currentTarget)
            .parent()
            .parent()
            .parent()
            .attr('id');
        userService
            .deleteUser(userId)
            .then(findAllUsers);
    }
    //this function is when pencil is clicked
    //it populates the first row and sets id
    //actual edit happens when right check button is pressed in that row
    function selectUser(event) {
        var editBtn = $(event.currentTarget);
        var maindiv = editBtn.parent().parent().parent();
        $updateBtn.attr('id',maindiv.attr('id'));
        var user = new User($('.wbdv-username',maindiv).html(),"password",
            $('.wbdv-first-name',maindiv).html(),
            $('.wbdv-last-name',maindiv).html(),
            $('.wbdv-role',maindiv).html());

        renderUser(user);

    }
    function renderUser(user){
        $firstNameFld.val(user.getfirstname());
        $lastNameFld.val(user.getlastname());
        $passwordFld.val(user.getpassword());
        $roleFld.val(user.getrole());
        $usernameFld.val(user.getUsername());
    }


    function findUserById(userId) {
        userService
            .findUserById(userId)
            .then(renderUser);
    }

})();

