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
        if($passwordFld.val()==="") {
            alert("Please Enter Password");
        }else{
           promise= userService.login($usernameFld.val(), $passwordFld.val());//.then(function (response){



                promise.then(function (response) {
                    if (response.status == 409) {
                        alert("invalid credentials");
                    }
                    else {

                    value.json().then(function (value1) {
                        window.location.replace("../profile/profile.template.client.html?id=" + value1.id);

                    });
                }
                });

        }



    }
})();
