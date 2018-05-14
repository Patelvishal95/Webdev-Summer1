(function () {
    var $usernameFld, $passwordFld;
    var $loginBtn;
    var userService = new UserServiceClient();
    $(main);

    function main() {
        $usernameFld=$('#usernameFld');
        $passwordFld=$('#passwordFld');
        $loginBtn=$('.btn-primary');
        $loginBtn.click(login);
    }
    function login() {
        userService.login($usernameFld.val(),$passwordFld.val()).then(function (response){console.log(response.json());});
    }
})();
