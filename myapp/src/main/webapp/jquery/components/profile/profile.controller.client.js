(function() {
    $(init);

    var $updateBtn,$phoneFld,$emailFld,$roleFld,$dobFld,$updateBtn,$logoutBtn,$userNameFld;
    var id;
    var $alert;
    var userService = new UserServiceClient();

    function init() {

        id = getUrlVars()["id"];
        $alert=$('#alert').hide();
        $userNameFld=$('#usernameFld');
        $phoneFld=$('#phoneFld');
        $emailFld=$('#emailFld');
        $roleFld=$('#roleFld');
        $dobFld=$('#dobFld');

        findUserById(id);
        $logoutBtn=$('#logoutBtn').click(logout);
        $updateBtn = $("#updateBtn")
            .click(updateUser);


    }
    function logout() {
        window.location.replace("../login/login.template.client.html");
    }
    function updateUser() {

var user = {
    phone:$phoneFld.val(),
    dateOfBirth:$dobFld.val(),
    email:$emailFld.val(),
    username:$userNameFld.val(),
    role:$roleFld.val()
};
        // new User($userNameFld.val(),'','','',$roleFld.val(),$dobFld.val(),$phoneFld.val())
        userService
            .updateUser(id, user).then(function (value) { value.json().then(function (value1) {
                console.log(value1);
            if(value1.id!=''){alert("Update sucessfull");$alert.show();}
            }) });
    }

    function findUserById(userId) {
        userService
            .findUserById(userId)
            .then(renderUser);
    }

    function renderUser(user) {
console.log(user);
        $userNameFld.val(user.username);
        $roleFld.val(user.role);
        $emailFld.val(user.email);
        $phoneFld.val(user.phone);
        var d = user.dateOfBirth;
        d=d.substring(0,d.indexOf('T'));
        $dobFld.val(d);
        //comment
    }

    function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });
        return vars;
    }

})();