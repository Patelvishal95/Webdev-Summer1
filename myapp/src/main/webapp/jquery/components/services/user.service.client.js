function UserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.url = '/api/user';
    var self = this;

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
        })
            .then(function(response){
                if(response.bodyUsed) {
                    return response.json();
                } else {
                    return null;
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
