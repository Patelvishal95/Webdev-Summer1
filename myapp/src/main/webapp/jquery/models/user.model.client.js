function User(username, password, firstName, lastName, role,date) {
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
    this.date = date;

    this.setDate = setDate;
    this.getDate = getDate;
    this.setUsername = setUsername;
    this.getUsername = getUsername;
    this.setpassword = setpassword;
    this.getpassword = getpassword;
    this.setfirstname = setfirstname;
    this.getfirstname = getfirstname;
    this.setlastname = setlastname;
    this.getlastname = getlastname;
    this.setrole = setrole;
    this.getrole = getrole;

    function setDate(date) {
        this.date = date;
    }
    function getDate() {
        return this.date;
    }

    function setrole(role) {
        this.role = role;
    }
    function getrole() {
        return this.role;
    }
    function setUsername(username) {
        this.username = username;
    }
    function getUsername() {
        return this.username;
    }

    function setpassword(password) {
        this.password = password;
    }
    function getpassword() {
        return this.password;
    }
    function setfirstname(firstName) {
        this.firstName = firstName;
    }
    function getfirstname() {
        return this.firstName;
    }
    function setlastname(lastName) {
        this.lastName = lastName;
    }
    function getlastname() {
        return this.lastName;
    }
}
