function greet(user: { name: string }): void {
  console.log("Hello, " + user.name);
}

let myProfile: { name: string } = {
  name: "h662",
};

greet(null);
