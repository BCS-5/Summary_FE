// index.d.ts

interface ISentences {
  english: string;
  korean: string;
}

interface IWords {
  day: number;
  title: string;
  sentences: ISentences[];
}
