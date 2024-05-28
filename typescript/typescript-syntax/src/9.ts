// 9.ts

type TProfile2 = {
  name: string;
  age: number;
  isRich?: boolean;
};

type TJob = {
  job: string;
};

type TJobProfile = TProfile2 & TJob;

//   type TJobProfile = TProfile2 & {
//     job: string;
//   };

const threeProfile: TJobProfile = {
  name: "baekki",
  age: 30,
  isRich: false,
  job: "Programmer",
};

console.log(threeProfile);
