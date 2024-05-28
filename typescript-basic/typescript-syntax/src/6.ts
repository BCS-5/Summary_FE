interface IProfile {
  name: string;
  age: number;
  isRich: boolean;
}

let myProfile: IProfile = {
  name: "baekki",
  age: 30,
  isRich: true,
};

console.log(myProfile);

let yourProfile: IProfile = {
  name: "h663",
  age: 99,
  isRich: false,
};

console.log(yourProfile);
