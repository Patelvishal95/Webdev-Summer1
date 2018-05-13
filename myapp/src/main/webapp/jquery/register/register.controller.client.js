(function () {
    var $usernameFld, $passwordFld, $verifyPasswordFld;
    var $registerBtn;
    var userService = new UserServiceClient();
    $(main);

    function main() {
        console.log("in main");
        $usernameFld = $('#usernameFld');
        $passwordFld = $('#passwordFld');
        $verifyPasswordFld=$('#verifyPasswordFld');
        $registerBtn = $('#registerBtn');

        $registerBtn.click(register);
    }
    function register() {
        if($passwordFld.val()===$verifyPasswordFld.val()) {
            var user = new User($usernameFld, $passwordFld);
            console.log(user);
            userService.createUser(user);
        }
        else{
            console.log("passwords dont match");
        }
    }
})();
