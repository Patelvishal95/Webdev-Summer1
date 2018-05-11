(function () {
    $(afterhtmlloads);
    var template;
    var tbody;
    function afterhtmlloads() {
        tbody = $('#tbody');


        $("#create").click(function(){
            console.log('inonclick');
            var firstName =$('#firstname').val();
            var lastName=$('#lastname').val();
            var password=$('#password').val();
            var username =$('#username').val();

            var user = {
                'firstName':firstName,
                'lastName':lastName,
                'password':password,
                'username':username
            };
            console.log(user);
            var promise = fetch("/api/user",{
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            promise.then(function (){console.log(promise);});
            });



    }
    function renderusers(){
        var promise = fetch('/api/user');
        promise.then(function (response){
            return response.json();
        }).then(renderusers);

        template = $('.template');

        //console.log(template.find('.username').toString());
    for (var i=0;i<users.length;i++){
        var user = users[i];
        var user = users[i];
        var clone = template.clone();
    console.log(user.username);
        clone.find('#usernametemp')
            .html(user.username);
        clone.find('#firstnametemp')
            .html(user.firstName);
        clone.find('#lastnametemp')
            .html(user.lastName);
        clone.find('#passwordtemp')
            .html(user.password);

        tbody.append(clone);
        }
    }

})();
