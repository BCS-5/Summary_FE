interface IProfile2 {
  name: string;
  age: number;
  isRich?: boolean;
}

interface IJobProfile extends IProfile2 {
  job: string;
}

const fourProfile: IJobProfile = {
  name: "baekki",
  age: 30,
  isRich: false,
  job: "Programmer",
};

console.log(fourProfile);
