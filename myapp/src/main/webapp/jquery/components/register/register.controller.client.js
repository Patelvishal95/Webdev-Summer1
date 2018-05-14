(function () {
    var $usernameFld, $passwordFld, $verifyPasswordFld;
    var $registerBtn;
    var userService = new UserServiceClient();
    $(main);

    function main() {
        $usernameFld = $('#usernameFld');
        $passwordFld = $('#passwordFld');
        $verifyPasswordFld=$('#verifyPasswordFld');
        $registerBtn = $('#registerBtn');

        $registerBtn.click(register);
    }
    function register() {
        if ($passwordFld.val() === $verifyPasswordFld.val()) {
            var userpromise = userService.register(new User($usernameFld.val(), $passwordFld.val()));
           userpromise.then(function (res){
               console.log("returned");
               console.log(res.json().then(function (value) { printstatus(value)}));
           })
        }
        else
        {
            alert("Password does not match");
        }

    }

    function printstatus(user){
        if (user.username===null){
            alert("Username is already taken");
        }
        else{
            window.location.replace("../profile/profile.template.client.html?id="+user.id);
        }
    }
})();
