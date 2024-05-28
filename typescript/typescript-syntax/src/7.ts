type TProfile = {
  name: string;
  age: number;
  isRich?: boolean;
};

let oneProfile: TProfile = {
  name: "h662",
  age: 20,
  isRich: true,
};

console.log(oneProfile);

let twoProfile: TProfile = {
  name: "h663",
  age: 99,
};

console.log(twoProfile);
