function UserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    //this.findUserById = findUserById;
    //this.deleteUser = deleteUser;
    //this.updateUser = updateUser;
    this.url = '/api/user';
    //var self = this;

function createUser(user){
    return fetch(this.url,{
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
}