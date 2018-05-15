function UserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.login=login;
    this.register = register;
    this.url = '/api/user';
    this.urlLogin ='/api/login';

    this.urlRegister ='/api/register';
    var self = this;

    function findUserByUserName(userName){
        return fetch(self.urlRegister + '/' + userName)
            .then(function(response){
                return response.json();
            });
    }
    function register(user){
        return fetch(self.urlRegister,{
            method:"post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

    }

    function login(username,password){
//add user model class here

        var user = {
            username:username,
            password:password
        };//new User(userName,password);
        return fetch(this.urlLogin,{
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
    }
function createUser(user){
    return fetch(self.url,{
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });


}
    function findAllUsers (){
        return fetch(this.url)
            .then(function (response){
                return response.json();
            });
    }

    function deleteUser(userid){
    console.log(userid);
    return fetch(self.url+'/'+userid,{
        method : "delete"

    });
    }
    function updateUser(userId, user) {
        return fetch(self.url + '/' + userId, {
            method: 'put',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        });
    }
    function findUserById(userId) {
        return fetch(self.url + '/' + userId)
            .then(function(response){
                return response.json();
            });
    }
}
