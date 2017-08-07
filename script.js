//Inheritance Practice
// Create a `User` class.
//It should have the following properties...
//`username`, determined by some input
// `password`, determined by some input
class User{
  constructor() {
    this.username = name ;
    this.password = '';
    }

//It should have the following methods...
//`changePassword`, which allows a user to change his password to some other string
    function changePassword(newPassword) {
    this.password = newPassword;
    }
    get username() {
        return this._username;
    }

    set username(newusername) {
        this._name = newusername;
      }
    }


//Create an `Admin` class.
//It should inherit from `User`. An admin has the same properties and can run the same methods a user can.
class Admin extends User {
    constructor(username, password) {
    super (username, password)
    this.accessLevel = 0;
    }
  }

//It should also have the following methods...
//* `overridePassword`, which should take another user and a new password as an argument. When executed, this method changes the password for the passed-in user.
    function overridePassword(newUser, newPassword) {
      super.username =  newUser;
      super.password = newPassword;
    }
  }







