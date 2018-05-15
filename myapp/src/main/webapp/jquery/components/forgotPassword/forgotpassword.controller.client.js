(function () {
    var $usernameFld,$btn;
    var userService = new UserServiceClient();
    $(main);

    function main() {
        $usernameFld = $('#usernameFld');
        $btn=$('#btn');
        $btn.click(forgotpassword);
    }
    function forgotpassword()
    {
    console.log($usernameFld.val());
        window.open('mailto:test@example.com');
    }
}());