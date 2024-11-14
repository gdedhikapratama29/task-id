class User {

    constructor() {
       this.users = this.getUsers() || [];
    }

   saveUser(userData) {
    const newUser = {
       id: Date.now(),
       ...userData,
    };

    this.users.push(newUser);
    localStorage.setItem('users', JSON.stringify(this.users)); 

    // return  window.location.href = '../signin.html';  

    return {
      success: true,
    };
   }
 
   signInUser(usernameByInput) {

   const userExists = this.users.some(user => user.username.toLowerCase() === usernameByInput.toLowerCase());

   if(userExists) {
     return {
       success: true,
       username, 
     };
   } else {
    return {
      success: false,
      message: 'data tidak d temukan', 
    };
   }

  }

   getUsers() {
      return JSON.parse(localStorage.getItem('users'))  || [];
   }
}