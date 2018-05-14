(function () {
    var $usernameFld, $passwordFld;
    var $loginBtn,$signup;
    var userService = new UserServiceClient();
    $(main);

    function main() {
        $usernameFld=$('#usernameFld');
        $passwordFld=$('#passwordFld');
        $loginBtn=$('.btn-primary');
        $signup=$('#signup');
        $signup.click(redirectsignup);
        $loginBtn.click(login);
    }
    function login() {
        if($passwordFld.val()==="") {
            alert("Please Enter Password");
        }else{
           promise= userService.login($usernameFld.val(), $passwordFld.val());//.then(function (response){



                promise.then(function (response) {
                    if (response.status === 409) {
                        alert("invalid username and password");
                    }
                    else if(response.status === 400){window.alert("Invalid Password");}
                    else {

                    response.json().then(function (value1) {
                        console.log(value1);
                        window.location.replace("../profile/profile.template.client.html?id=" + value1.id);

                    });
                }
                });

        }



    }
    function redirectsignup(){
        window.location.replace("../register/register.template.client.html");
    }
})();
