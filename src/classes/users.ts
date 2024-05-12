class Users {
  name:string;
  email:string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
  addUser(user: string) {
    return user.concat(" is added!");
  }
}

let user1 = new Users("Abhinav", "email@email.com");

let added = user1.addUser("Abhinav");
console.warn(added);
