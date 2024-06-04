# Word App

## setting

> npm create vite@latest . -- --template react-ts

> npm install

> npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion

> 불필요한 파일 삭제(App.css, public/vite.svg)

> ChakraProvider 적용하기

```typescript
// main.tsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
```

```typescript
// App.tsx

import { Flex } from "@chakra-ui/react";
import { FC } from "react";

const App: FC = () => {
  return <Flex>Hello, React!</Flex>;
};

export default App;
```

> src/assets/sampleData.json 샘플 데이터 생성하기.

```json
[
  {
    "day": 1,
    "title": "Exploring a new hobby.",
    "sentences": [
      {
        "english": "Today, I'm diving into the world of photography. Capturing moments seems like a fascinating skill to develop.",
        "korean": "오늘은 사진 촬영의 세계로 뛰어들어봐요. 순간을 담아내는 것은 매력적인 기술인 것 같아요."
      },
      {
        "english": "Decided to give gardening a shot. Growing my own herbs sounds like a therapeutic experience.",
        "korean": "정원 가꾸기를 시도하기로 했어요. 나만의 허브를 키우는 것은 치유적인 경험일 것 같아요."
      },
      {
        "english": "Attempting to learn a new language today. Communication is key, and multilingual skills can open up new horizons.",
        "korean": "오늘은 새로운 언어를 배워보려고 해요. 소통은 중요하고 다국어 능력은 새로운 지평을 열 수 있어요."
      },
      {
        "english": "Embarking on a DIY furniture project. Let's see if I have a hidden talent for craftsmanship.",
        "korean": "DIY 가구 프로젝트에 착수했어요. 손재주에 대한 숨은 재능이 있는지 확인해봅시다."
      },
      {
        "english": "Trying my hand at meditation today. The hectic pace of life makes it essential to find moments of inner calm.",
        "korean": "오늘은 명상에 도전해봐요. 바쁜 삶 속에서 내적 평온을 찾는 것이 중요하니까요."
      }
    ]
  },
  {
    "day": 2,
    "title": "Rediscovering the joy of reading.",
    "sentences": [
      {
        "english": "Picked up a classic novel that I haven't read in years. Excited to rediscover the magic within its pages.",
        "korean": "여러 해 동안 읽지 않은 고전 소설을 다시 읽기로 했어요. 그 페이지 안의 마법을 다시 발견하는 것이 기대돼요."
      },
      {
        "english": "Exploring a new genre today. Non-fiction might offer insights I've been missing out on.",
        "korean": "오늘은 새로운 장르를 탐험해봐요. 비소설은 놓쳐왔던 통찰력을 제공할지도 모르겠어요."
      },
      {
        "english": "Diving into poetry, a realm I've seldom explored. Words have a unique way of painting emotions.",
        "korean": "거의 탐험하지 않은 시의 세계로 뛰어들어봐요. 말은 감情을 그릴 때 독특한 방식을 가지고 있어요."
      },
      {
        "english": "Reading a self-help book to gain new perspectives on personal growth. Every book has the potential to be transformative.",
        "korean": "자기 계발에 대한 새로운 시각을 얻기 위해 자기 도움서를 읽어보고 있어요. 모든 책은 변화의 가능성을 가지고 있어요."
      },
      {
        "english": "Choosing a book at random from the library, embracing the surprise element of literary exploration.",
        "korean": "도서관에서 무작위로 책을 골라, 문학적 탐험의 놀라움을 받아들이고 있어요."
      }
    ]
  },
  {
    "day": 3,
    "title": "Connecting with nature.",
    "sentences": [
      {
        "english": "Taking a nature walk to appreciate the beauty of the changing seasons.",
        "korean": "자연을 걷어다니며 변화하는 계절의 아름다움을 감상하고 있어요."
      },
      {
        "english": "Planning a weekend camping trip to escape the hustle and bustle of city life.",
        "korean": "주말 캠핑 여행을 계획하고 있어요. 도시 생활의 소란에서 벗어나려고 해요."
      },
      {
        "english": "Stargazing tonight to marvel at the vastness of the universe.",
        "korean": "오늘 밤에는 별을 보며 우주의 광활함에 놀랄 것이에요."
      },
      {
        "english": "Visiting a botanical garden to immerse myself in the diversity of plant life.",
        "korean": "식물의 다양성에 푹 빠져들기 위해 식물원을 방문하고 있어요."
      },
      {
        "english": "Sitting by a lake, enjoying the tranquility and the sounds of nature.",
        "korean": "호수 옆에 앉아 평온함과 자연의 소리를 즐기고 있어요."
      }
    ]
  },
  {
    "day": 4,
    "title": "Culinary adventures.",
    "sentences": [
      {
        "english": "Experimenting with a fusion recipe, combining flavors from different cuisines.",
        "korean": "다양한 요리에서 맛을 결합시켜 퓨전 레시피 실험 중이에요."
      },
      {
        "english": "Baking homemade bread from scratch, embracing the therapeutic process of kneading dough.",
        "korean": "제처로 빵을 만들어보고 있어요. 반죽을 빚는 치유과정을 즐기고 있어요."
      },
      {
        "english": "Attending a cooking class to learn the art of sushi-making.",
        "korean": "초밥 만드는 기술을 배우기 위해 요리 수업에 참석하고 있어요."
      },
      {
        "english": "Trying my hand at growing herbs and incorporating them into everyday meals.",
        "korean": "허브를 키우고 그것을 일상 식사에 통합해보려고 해요."
      },
      {
        "english": "Exploring a vegetarian diet for the week to discover new flavors and nutritional benefits.",
        "korean": "이번 주에는 채식 식단을 탐험해보고 새로운 맛과 영양상의 이점을 발견하려고 해요."
      }
    ]
  },
  {
    "day": 5,
    "title": "Mindfulness and relaxation.",
    "sentences": [
      {
        "english": "Starting the day with a mindfulness meditation session to set a positive tone.",
        "korean": "긍정적인 분위기를 설정하기 위해 하루를 정신적 명상 세션으로 시작하고 있어요."
      },
      {
        "english": "Practicing deep breathing exercises during the day to stay grounded and focused.",
        "korean": "하루 동안 깊은 호흡 운동을 실천하여 미래에 집중하고 머무를 수 있도록 하고 있어요."
      },
      {
        "english": "Creating a cozy reading nook at home for moments of relaxation and reflection.",
        "korean": "편안한 독서 공간을 만들어 집에서 휴식과 반성의 순간을 즐기고 있어요."
      },
      {
        "english": "Taking a technology detox day to unplug and recharge mentally.",
        "korean": "기술의 중독에서 벗어나 정신을 충전하기 위해 기술 끊기 날을 갖고 있어요."
      },
      {
        "english": "Attending a yoga class to combine physical exercise with mindfulness and relaxation.",
        "korean": "유산소 운동을 정신적 명상과 휴식과 결합하기 위해 요가 수업에 참석하고 있어요."
      }
    ]
  }
]
```

## Routing

일자별로 동적 라우팅을 적용하기 위해 react-router-dom 을 설치합니다.

> npm i react-router-dom

설치 후 Home, DailyWord페이지를 만들어 줍니다.

```typescript
// src/pages/Home.tsx

import { Flex } from "@chakra-ui/react";
import { FC } from "react";

const Home: FC = () => {
  return <Flex>Home</Flex>;
};

export default Home;
```

```typescript
// src/pages/DailyWord.tsx

import { Flex } from "@chakra-ui/react";
import { FC } from "react";

const DailyWord: FC = () => {
  return <Flex>DailyWord</Flex>;
};

export default DailyWord;
```

```typescript
// App.tsx

import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DailyWord from "./pages/DailyWord";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/daily-word/:day" element={<DailyWord />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
```

만들어 놓은 Home, DailyWord 페이지를 BrowserRouter, Routes, Route로 감싸줍니다.

## Layout

```typescript
// index.d.ts

interface IWords {
  day: number;
  title: string;
  sentences: {
    english: string;
    korean: string;
  }[];
}
```

```typescript
// src/pages/Home.tsx

import { Button, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import sampleData from "../assets/sampleData.json";

const Home: FC = () => {
  return (
    <Flex flexDir="column" maxW={768} mx="auto" minH="100vh">
      <Text fontSize={48} fontWeight="bold" textAlign="center" mt={8}>
        Word App
      </Text>
      <Flex flexDir="column" mt={8} gap={4} px={4}>
        {sampleData.map((v: IWords) => (
          <Button
            key={v.day}
            variant="outline"
            colorScheme="teal"
            justifyContent="start"
          >
            <Text fontWeight="bold" isTruncated={true}>
              Day {v.day}
            </Text>{" "}
            - {v.title}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};

export default Home;
```

결과는 아래와 같습니다.

<img
  src="public/readme/home1.png"
  width="718"
  alt="home1"
/>

이제 페이지 이동을 구현해봅시다.

## 페이지 이동

useNavigate와 useParams 훅을 사용해봅시다.

```typescript
// src/pages/Home.tsx

import { Button, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import sampleData from "../assets/sampleData.json";
import { useNavigate } from "react-router-dom";

const Home: FC = () => {
  const navigate = useNavigate();

  return (
    <Flex flexDir="column" maxW={768} mx="auto" minH="100vh">
      <Text fontSize={48} fontWeight="bold" textAlign="center" mt={8}>
        Word App
      </Text>
      <Flex flexDir="column" mt={8} gap={4} px={4}>
        {sampleData.map((v: IWords) => (
          <Button
            key={v.day}
            variant="outline"
            colorScheme="teal"
            justifyContent="start"
            onClick={() => navigate(`/daily-word/${v.day}`)}
          >
            <Text fontWeight="bold" isTruncated={true}>
              Day {v.day}
            </Text>
            - {v.title}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};

export default Home;
```

DailyWord에서 sampleData.json을 임포트해서 useParams 훅을 같이 사용해서 day 1, 2, 3... 을 받을 수 있습니다.

또는 아래 처럼 page이동 할 때, 데이터를 같이 넘겨주는 방법이 있습니다.

```typescript
// src/pages/Home.tsx

import { Button, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import sampleData from "../assets/sampleData.json";
import { useNavigate } from "react-router-dom";

const Home: FC = () => {
  const navigate = useNavigate();

  return (
    <Flex flexDir="column" maxW={768} mx="auto" minH="100vh">
      <Text fontSize={48} fontWeight="bold" textAlign="center" mt={8}>
        Word App
      </Text>
      <Flex flexDir="column" mt={8} gap={4} px={4}>
        {sampleData.map((v: IWords) => (
          <Button
            key={v.day}
            variant="outline"
            colorScheme="teal"
            justifyContent="start"
            onClick={() =>
              navigate(`/daily-word/${v.day}`, {
                state: {
                  wordData: v,
                },
              })
            }
          >
            <Text fontWeight="bold" isTruncated={true}>
              Day {v.day}
            </Text>{" "}
            - {v.title}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};

export default Home;
```

```typescript
// src/pages/DailyWord.tsx

import { Flex } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";

const DailyWord: FC = () => {
  const { state } = useLocation();

  useEffect(() => {
    console.log(state);
  }, []);

  return <Flex>DailyWord</Flex>;
};

export default DailyWord;
```

그럼 console에서 값을 확인해봅시다.

<img
  src="public/readme/console1.png"
  width="718"
  alt="sampleData console"
/>

하지만 위 방법은 문제가 생길 수 있습니다.

⚠️Button 태그에 onClick으로 데이터를 전달하는데, url에 직접 접근하게 되면, 데이터를 전달해주지 못합니다.(null)

즉, 클릭해서 들어갈 때만 정상적으로 데이터를 전달합니다. ‼️따라서 예외처리 해주어야 합니다.

```typescript
// src/pages/DailyWord.tsx

import { Flex } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const DailyWord: FC = () => {
  const navigate = useNavigate();

  const { day } = useParams();

  const { state } = useLocation();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }

    console.log(state);
  }, []);

  return <Flex>DailyWord</Flex>;
};

export default DailyWord;
```

state가 없다면, 홈 주소로 돌려보냅니다.

그런데 console.log(state)를 보면, state안에 wordData라는 객체가 있습니다.

따라서 아래처럼 구조분해를 해줍니다.

```typescript
// src/pages/DailyWord.tsx

import { Flex } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const DailyWord: FC = () => {
  const navigate = useNavigate();

  const { day } = useParams();

  const { state } = useLocation();
  const { wordData }: { wordData: IWords } = state;

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, []);

  return <Flex>DailyWord</Flex>;
};

export default DailyWord;
```

Home과 같이 디자인해봅시다.

```typescript
// src/pages/DailyWord.tsx

import { Flex, Text } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const DailyWord: FC = () => {
  const navigate = useNavigate();

  const { day } = useParams();

  const { state } = useLocation();
  const { wordData }: { wordData: IWords } = state;

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, []);

  return (
    <Flex flexDir="column" maxW={768} mx="auto" minH="100vh">
      <Text fontSize={24} fontWeight="bold" textAlign="center" mt={8}>
        <Text display="inline-block" fontWeight="bold">
          Day {wordData.day}
        </Text>
        - {wordData.title}
      </Text>
    </Flex>
  );
};

export default DailyWord;
```

### Chakra ui - Accordion

https://v2.chakra-ui.com/docs/components/accordion/usage

```typescript
// src/pages/DailyWord.tsx

// src/pages/DailyWord.tsx

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const DailyWord: FC = () => {
  const navigate = useNavigate();

  const { day } = useParams();

  const { state } = useLocation();
  const { wordData }: { wordData: IWords } = state;

  useEffect(() => {
    if (!state) {
      navigate("/");
    }

    console.log(state);
  }, []);

  return (
    <Flex flexDir="column" maxW={768} mx="auto" minH="100vh">
      <Text fontSize={24} fontWeight="bold" textAlign="center" mt={8}>
        <Text display="inline-block" fontWeight="bold">
          Day {wordData.day}
        </Text>
        - {wordData.title}
      </Text>
      <Accordion mt={8} allowMultiple>
        {wordData.sentences.map((v, i) => (
          <AccordionItem key={i}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  {v.english}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>{v.korean}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Flex>
  );
};

export default DailyWord;
```

적용하면 아래와 같습니다.

<img
  src="public/readme/accordion.png"
  width="718"
  alt="accordion"
/>

### react-icons

> npm i react-icons

```typescript
// src/pages/DailyWord.tsx

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiVolume2 } from "react-icons/fi";

const DailyWord: FC = () => {
  const navigate = useNavigate();

  //   const { day } = useParams();

  const { state } = useLocation();
  const { wordData }: { wordData: IWords } = state;

  useEffect(() => {
    if (!state) {
      navigate("/");
    }

    console.log(state);
  }, []);

  return (
    <Flex flexDir="column" maxW={768} mx="auto" minH="100vh">
      <Text fontSize={24} fontWeight="bold" textAlign="center" mt={8}>
        <Text display="inline-block" fontWeight="bold">
          Day {wordData.day}
        </Text>
        - {wordData.title}
      </Text>
      <Accordion mt={8} allowMultiple>
        {wordData.sentences.map((v, i) => (
          <AccordionItem key={i}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  {v.english}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <Button
                variant="ghost"
                size="xs"
                mb={2}
                ml={2}
                colorScheme="teal"
              >
                <FiVolume2 />
              </Button>
            </h2>
            <AccordionPanel pb={4}>{v.korean}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Flex>
  );
};

export default DailyWord;
```

## 에러 수정

state값이 null일 경우는 에러가 발생합니다. 그리고 Chakra ui에서 Text컴포넌트 안에 Text를 사용해도 에러가 발생합니다.

> TypeError: Cannot destructure property 'wordData' of 'state' as it is null.

> `validateDOMNesting(...): <p> cannot appear as a descendant of <p>.`

일단 아래와 같이 주석처리합니다.

```typescript
// src/pages/DailyWord.tsx

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiVolume2 } from "react-icons/fi";

const DailyWord: FC = () => {
  const navigate = useNavigate();

  //   const { day } = useParams();

  const { state } = useLocation();
  // const { wordData }: { wordData: IWords } = state;

  useEffect(() => {
    if (!state) {
      navigate("/");
    }

    console.log(state);
  }, []);

  if (!state) return <div>Loading...</div>;

  return (
    <Flex flexDir="column" maxW={768} mx="auto" minH="100vh">
      <Flex
        fontSize={24}
        fontWeight="bold"
        textAlign="center"
        mt={8}
        justifyContent="center"
      >
        <Text fontWeight="bold">Day {state.wordData.day}</Text> -{" "}
        {state.wordData.title}
      </Flex>
      <Accordion mt={8} allowMultiple>
        {state.wordData.sentences.map((v, i) => (
          <AccordionItem key={i}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  {v.english}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <Button
                variant="ghost"
                size="xs"
                mb={2}
                ml={2}
                colorScheme="teal"
              >
                <FiVolume2 />
              </Button>
            </h2>
            <AccordionPanel pb={4}>{v.korean}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Flex>
  );
};

export default DailyWord;
```

그리고 sentences의 맵함수에서 v, i값의 타입도 정의해야 합니다.

Sentence는 아래와 같이 타입을 구분해줍니다.

```typescript
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
```

수정된 코드는 아래와 같습니다.

```typescript
// src/pages/DailyWord.tsx

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiVolume2 } from "react-icons/fi";

const DailyWord: FC = () => {
  const navigate = useNavigate();

  const { state } = useLocation();
  const wordData = state.wordData ?? null;
  // const { wordData }: { wordData: IWords } = state;

  useEffect(() => {
    if (!state) {
      navigate("/");
    }

    console.log(state);
  }, []);

  if (!state) return <div>Loading...</div>;

  return (
    <Flex flexDir="column" maxW={768} mx="auto" minH="100vh">
      <Flex
        fontSize={24}
        fontWeight="bold"
        textAlign="center"
        mt={8}
        justifyContent="center"
      >
        <Text fontWeight="bold">Day {state.wordData.day}</Text> -{" "}
        {state.wordData.title}
      </Flex>
      <Accordion mt={8} allowMultiple>
        {state.wordData.sentences.map((v: ISentences, i: number) => (
          <AccordionItem key={i}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  {v.english}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <Button
                variant="ghost"
                size="xs"
                mb={2}
                ml={2}
                colorScheme="teal"
              >
                <FiVolume2 />
              </Button>
            </h2>
            <AccordionPanel pb={4}>{v.korean}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Flex>
  );
};

export default DailyWord;
```

코드를 간단하게 살펴볼까요?

> const wordData = state.wordData ?? null;

널 병합 연산자 (nullish coalescing operator) ??를 사용하여 state.wordData가 null 또는 undefined인 경우 wordData 변수를 null로 설정합니다.

state.wordData가 null 또는 undefined가 아니면 wordData에 state.wordData의 값을 할당합니다.

state.wordData가 null 또는 undefined이면 wordData에 null을 할당합니다.

?? 연산자는 왼쪽 피연산자가 null 또는 undefined일 때만 오른쪽 피연산자를 반환합니다.

## TTS (Text To Speech)

> npm i axios

WordCard.tsx 컴포넌트를 만들어주세요.

AccordingItem부분을 컴포넌트화 시켜줍니다.

```typescript
// components/WordCard.tsx

import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
} from "@chakra-ui/react";
import { FC } from "react";
import { FiVolume2 } from "react-icons/fi";

interface WordCardProps {
  sentence: ISentences;
}

const WordCard: FC<WordCardProps> = ({ sentence }) => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left">
            {sentence.english}
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <Button variant="ghost" colorScheme="green" size="sm" mb={2} ml={2}>
          <FiVolume2 />
        </Button>
      </h2>
      <AccordionPanel pb={4}>{sentence.korean}</AccordionPanel>
    </AccordionItem>
  );
};

export default WordCard;
```

```typescript
// src/pages/DailyWord.tsx

import { Accordion, Flex, Text } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import WordCard from "../conponents/WordCard";

const DailyWord: FC = () => {
  const navigate = useNavigate();

  const { state } = useLocation();
  const wordData = state.wordData ?? null;

  useEffect(() => {
    if (!state) {
      navigate("/");
    }

    console.log(state);
  }, []);

  if (!state) return <div>Loading...</div>;

  return (
    <Flex flexDir="column" maxW={768} mx="auto" minH="100vh">
      <Flex
        fontSize={24}
        fontWeight="bold"
        textAlign="center"
        mt={8}
        justifyContent="center"
      >
        <Text fontWeight="bold">Day {state.wordData.day}</Text> -{" "}
        {state.wordData.title}
      </Flex>
      <Accordion mt={8} allowMultiple>
        {state.wordData.sentences.map((v: ISentences, i: number) => (
          <WordCard key={i} sentence={v} />
        ))}
      </Accordion>
    </Flex>
  );
};

export default DailyWord;
```

이제 onClickAutio 함수를 만들어 봅시다.

```typescript
// components/WordCard.tsx

import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { FC } from "react";
import { FiVolume2 } from "react-icons/fi";

interface WordCardProps {
  sentence: ISentences;
}

const WordCard: FC<WordCardProps> = ({ sentence }) => {
  const onClickAudio = async () => {
    try {
      const response = await axios.post(
        "https://texttospeech.googleapis.com/v1/text:synthesize?key=AIzaSyCXdV9VlnVIIJEdXAHT2C3fcGwY5qKLbl8",
        {
          input: {
            text: sentence.english,
          },
          voice: {
            languageCode: "en-US",
            ssmlGender: "NEUTRAL",
          },
          audioConfig: {
            audioEncoding: "MP3",
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left">
            {sentence.english}
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <Button
          variant="ghost"
          colorScheme="green"
          size="sm"
          mb={2}
          ml={2}
          onClick={onClickAudio}
        >
          <FiVolume2 />
        </Button>
      </h2>
      <AccordionPanel pb={4}>{sentence.korean}</AccordionPanel>
    </AccordionItem>
  );
};

export default WordCard;
```

axios.post의 api요청부분에서 키 값은 수정해서 사용해주세요.

오디오 버튼의 onClick을 실행하면 아래와 같은 응답을 받을 수 있습니다.

<img
  src="public/readme/audio1.png"
  width="718"
  alt="audio"
/>

이제 response.data.audioContent를 오디오로 변환해봅시다.

### audioContent

```typescript
// components/WordCard.tsx

import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { FC } from "react";
import { FiVolume2 } from "react-icons/fi";

interface WordCardProps {
  sentence: ISentences;
}

const WordCard: FC<WordCardProps> = ({ sentence }) => {
  const onClickAudio = async () => {
    try {
      const response = await axios.post(
        "https://texttospeech.googleapis.com/v1/text:synthesize?key=AIzaSyCXdV9VlnVIIJEdXAHT2C3fcGwY5qKLbl8",
        {
          input: {
            text: sentence.english,
          },
          voice: {
            languageCode: "en-US",
            ssmlGender: "NEUTRAL",
          },
          audioConfig: {
            audioEncoding: "MP3",
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const binaryData = atob(response.data.audioContent);

      console.log(response);
      console.log(binaryData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left">
            {sentence.english}
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <Button
          variant="ghost"
          colorScheme="green"
          size="sm"
          mb={2}
          ml={2}
          onClick={onClickAudio}
        >
          <FiVolume2 />
        </Button>
      </h2>
      <AccordionPanel pb={4}>{sentence.korean}</AccordionPanel>
    </AccordionItem>
  );
};

export default WordCard;
```

binaryData를 확인해보면 아래와 같은 결과가 나옵니다.

<img
  src="public/readme/audio2.png"
  width="718"
  alt="binaryData"
/>

그리고 binaryData ➡️ byteArray 바꿔줍니다.

```typescript
// components/WordCard.tsx

import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { FC } from "react";
import { FiVolume2 } from "react-icons/fi";

interface WordCardProps {
  sentence: ISentences;
}

const WordCard: FC<WordCardProps> = ({ sentence }) => {
  const onClickAudio = async () => {
    try {
      const response = await axios.post(
        "https://texttospeech.googleapis.com/v1/text:synthesize?key=AIzaSyCXdV9VlnVIIJEdXAHT2C3fcGwY5qKLbl8",
        {
          input: {
            text: sentence.english,
          },
          voice: {
            languageCode: "en-US",
            ssmlGender: "NEUTRAL",
          },
          audioConfig: {
            audioEncoding: "MP3",
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const binaryData = atob(response.data.audioContent);
      const byteArray = new Uint8Array(binaryData.length);

      console.log(response);
      console.log(binaryData);
      console.log(byteArray);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left">
            {sentence.english}
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <Button
          variant="ghost"
          colorScheme="green"
          size="sm"
          mb={2}
          ml={2}
          onClick={onClickAudio}
        >
          <FiVolume2 />
        </Button>
      </h2>
      <AccordionPanel pb={4}>{sentence.korean}</AccordionPanel>
    </AccordionItem>
  );
};

export default WordCard;
```

<img
  src="public/readme/audio3.png"
  width="718"
  alt="byteArray"
/>

byteArray는 음성의 길이만큼의 0으로만 이루어진 배열의 길이가 생성됩니다.

이제 배열에 값을 넣어줘야 합니다.

```typescript
// components/WordCard.tsx

import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { FC } from "react";
import { FiVolume2 } from "react-icons/fi";

interface WordCardProps {
  sentence: ISentences;
}

const WordCard: FC<WordCardProps> = ({ sentence }) => {
  const onClickAudio = async () => {
    try {
      const response = await axios.post(
        "https://texttospeech.googleapis.com/v1/text:synthesize?key=AIzaSyCXdV9VlnVIIJEdXAHT2C3fcGwY5qKLbl8",
        {
          input: {
            text: sentence.english,
          },
          voice: {
            languageCode: "en-US",
            ssmlGender: "NEUTRAL",
          },
          audioConfig: {
            audioEncoding: "MP3",
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const binaryData = atob(response.data.audioContent);
      const byteArray = new Uint8Array(binaryData.length);

      for (let i = 0; i < binaryData.length; i++) {
        byteArray[i] = binaryData.charCodeAt(i);
      }
      console.log(byteArray);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left">
            {sentence.english}
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <Button
          variant="ghost"
          colorScheme="green"
          size="sm"
          mb={2}
          ml={2}
          onClick={onClickAudio}
        >
          <FiVolume2 />
        </Button>
      </h2>
      <AccordionPanel pb={4}>{sentence.korean}</AccordionPanel>
    </AccordionItem>
  );
};

export default WordCard;
```

<img
  src="public/readme/audio4.png"
  width="718"
  alt="byteArray repeat"
/>

byteArray에 uint8값이 채워진 것을 볼 수 있습니다.

### blob

byteArray를 blob형태로 변환합니다.

```typescript
// components/WordCard.tsx

import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { FC } from "react";
import { FiVolume2 } from "react-icons/fi";

interface WordCardProps {
  sentence: ISentences;
}

const WordCard: FC<WordCardProps> = ({ sentence }) => {
  const onClickAudio = async () => {
    try {
      const response = await axios.post(
        "https://texttospeech.googleapis.com/v1/text:synthesize?key=AIzaSyCXdV9VlnVIIJEdXAHT2C3fcGwY5qKLbl8",
        {
          input: {
            text: sentence.english,
          },
          voice: {
            languageCode: "en-US",
            ssmlGender: "NEUTRAL",
          },
          audioConfig: {
            audioEncoding: "MP3",
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const binaryData = atob(response.data.audioContent);
      const byteArray = new Uint8Array(binaryData.length);

      for (let i = 0; i < binaryData.length; i++) {
        byteArray[i] = binaryData.charCodeAt(i);
      }

      const blob = new Blob([byteArray.buffer], { type: "audio/mp3" });
      console.log(blob);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left">
            {sentence.english}
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <Button
          variant="ghost"
          colorScheme="green"
          size="sm"
          mb={2}
          ml={2}
          onClick={onClickAudio}
        >
          <FiVolume2 />
        </Button>
      </h2>
      <AccordionPanel pb={4}>{sentence.korean}</AccordionPanel>
    </AccordionItem>
  );
};

export default WordCard;
```

### blob to audio

```typescript
// components/WordCard.tsx

import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { FC } from "react";
import { FiVolume2 } from "react-icons/fi";

interface WordCardProps {
  sentence: ISentences;
}

const WordCard: FC<WordCardProps> = ({ sentence }) => {
  const onClickAudio = async () => {
    try {
      const response = await axios.post(
        "https://texttospeech.googleapis.com/v1/text:synthesize?key=AIzaSyCXdV9VlnVIIJEdXAHT2C3fcGwY5qKLbl8",
        {
          input: {
            text: sentence.english,
          },
          voice: {
            languageCode: "en-US",
            ssmlGender: "NEUTRAL",
          },
          audioConfig: {
            audioEncoding: "MP3",
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const binaryData = atob(response.data.audioContent);
      const byteArray = new Uint8Array(binaryData.length);

      for (let i = 0; i < binaryData.length; i++) {
        byteArray[i] = binaryData.charCodeAt(i);
      }

      const blob = new Blob([byteArray.buffer], { type: "audio/mp3" });

      const newAudio = new Audio(URL.createObjectURL(blob));

      console.log(newAudio);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left">
            {sentence.english}
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <Button
          variant="ghost"
          colorScheme="green"
          size="sm"
          mb={2}
          ml={2}
          onClick={onClickAudio}
        >
          <FiVolume2 />
        </Button>
      </h2>
      <AccordionPanel pb={4}>{sentence.korean}</AccordionPanel>
    </AccordionItem>
  );
};

export default WordCard;
```

<img
  src="public/readme/audio5.png"
  width="718"
  alt="audio"
/>

이제 실행하면 위와같은 결과가 나옵니다. 위 audio를 사용하면 됩니다!

```typescript
// components/WordCard.tsx

import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { FC } from "react";
import { FiVolume2 } from "react-icons/fi";

interface WordCardProps {
  sentence: ISentences;
}

const WordCard: FC<WordCardProps> = ({ sentence }) => {
  const onClickAudio = async () => {
    try {
      const response = await axios.post(
        "https://texttospeech.googleapis.com/v1/text:synthesize?key=AIzaSyCXdV9VlnVIIJEdXAHT2C3fcGwY5qKLbl8",
        {
          input: {
            text: sentence.english,
          },
          voice: {
            languageCode: "en-US",
            ssmlGender: "NEUTRAL",
          },
          audioConfig: {
            audioEncoding: "MP3",
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const binaryData = atob(response.data.audioContent);
      const byteArray = new Uint8Array(binaryData.length);

      for (let i = 0; i < binaryData.length; i++) {
        byteArray[i] = binaryData.charCodeAt(i);
      }

      const blob = new Blob([byteArray.buffer], { type: "audio/mp3" });

      const newAudio = new Audio(URL.createObjectURL(blob));

      document.body.appendChild(newAudio);
      newAudio.play();

      console.log(newAudio);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left">
            {sentence.english}
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <Button
          variant="ghost"
          colorScheme="green"
          size="sm"
          mb={2}
          ml={2}
          onClick={onClickAudio}
        >
          <FiVolume2 />
        </Button>
      </h2>
      <AccordionPanel pb={4}>{sentence.korean}</AccordionPanel>
    </AccordionItem>
  );
};

export default WordCard;
```

## Layout

```typescript
import { Accordion, Button, Flex, Text } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import WordCard from "../conponents/WordCard";

const DailyWord: FC = () => {
  const navigate = useNavigate();

  const { state } = useLocation();
  // const wordData = state.wordData ?? null;

  useEffect(() => {
    if (!state) {
      navigate("/");
    }

    console.log(state);
  }, []);

  if (!state) return <div>Loading...</div>;

  return (
    <Flex
      position="relative"
      flexDir="column"
      maxW={768}
      mx="auto"
      minH="100vh"
    >
      <Button
        m={4}
        position="absolute"
        variant="ghost"
        colorScheme="transparent"
        onClick={() => navigate("/")}
      >
        <FiArrowLeft />
      </Button>
      <Flex
        fontSize={24}
        fontWeight="bold"
        textAlign="center"
        mt={8}
        justifyContent="center"
      >
        Day {state.wordData.day} - {state.wordData.title}
      </Flex>
      <Accordion mt={8} allowMultiple>
        {state.wordData.sentences.map((v: ISentences, i: number) => (
          <WordCard key={i} sentence={v} />
        ))}
      </Accordion>
    </Flex>
  );
};

export default DailyWord;
```

또는 아래와 같은 UI로도 변경 할 수 있습니다.

2개를 비교해 봅시다.

AnotherDailyWord.tsx 페이지를 만들어줍니다.

```typescript
// App.tsx

import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DailyWord from "./pages/DailyWord";
import AnotherDailyWord from "./pages/AnotherDailyWord";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/daily-word/:day" element={<DailyWord />} />
        <Route path="/another-daily-word/:day" element={<AnotherDailyWord />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
```

```typescript
// src/pages/Home.tsx

import { Button, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import sampleData from "../assets/sampleData.json";
import { useNavigate } from "react-router-dom";

const Home: FC = () => {
  const navigate = useNavigate();

  return (
    <Flex flexDir="column" maxW={768} mx="auto" minH="100vh">
      <Text fontSize={48} fontWeight="bold" textAlign="center" mt={8}>
        Word App
      </Text>
      <Flex flexDir="column" mt={8} gap={4} px={4}>
        {sampleData.map((v: IWords) => (
          <Button
            key={v.day}
            variant="outline"
            colorScheme="teal"
            justifyContent="start"
            onClick={() =>
              navigate(`/daily-word/${v.day}`, {
                state: {
                  wordData: v,
                },
              })
            }
          >
            <Text fontWeight="bold" isTruncated={true}>
              Day {v.day}
            </Text>
            - {v.title}
          </Button>
        ))}
      </Flex>
      <Flex flexDir="column" mt={16} gap={4} px={4}>
        {sampleData.map((v: IWords) => (
          <Button
            key={v.day}
            variant="outline"
            colorScheme="green"
            justifyContent="start"
            isTruncated={true}
            onClick={() =>
              navigate(`/another-daily-word/${v.day}`, {
                state: {
                  wordData: v,
                },
              })
            }
          >
            <Text fontWeight="bold">Day {v.day}</Text> - {v.title}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};

export default Home;
```

```typescript
import { Button, Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight, FiVolume2 } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";

const AnotherDailyWord: FC = () => {
  const [currentSentenceNumber, setCurrentSentenceNumber] = useState<number>(0);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const navigate = useNavigate();

  const { state } = useLocation();

  const onClickAudio = async () => {
    try {
      const response = await axios.post(
        "https://texttospeech.googleapis.com/v1/text:synthesize?key=AIzaSyDTOET8PjC5osQiGI6V-W9m-upA9ri_1bo",
        {
          input: {
            text: state.wordData.sentences[currentSentenceNumber]?.english,
          },
          voice: {
            languageCode: "en-US",
            ssmlGender: "NEUTRAL",
          },
          audioConfig: {
            audioEncoding: "MP3",
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const binaryData = atob(response.data.audioContent);

      const byteArray = new Uint8Array(binaryData.length);

      for (let i = 0; i < binaryData.length; i++) {
        byteArray[i] = binaryData.charCodeAt(i);
      }

      const blob = new Blob([byteArray.buffer], { type: "audio/mp3" });

      const newAudio = new Audio(URL.createObjectURL(blob));

      document.body.appendChild(newAudio);

      newAudio.play();
    } catch (error) {
      console.error(error);
    }
  };

  const onClickPrev = () => {
    if (currentSentenceNumber === 0) {
      setCurrentSentenceNumber(state.wordData.sentences.length - 1);
    } else {
      setCurrentSentenceNumber(currentSentenceNumber - 1);
    }
  };

  const onClickNext = () => {
    if (currentSentenceNumber === state.wordData.sentences.length - 1) {
      setCurrentSentenceNumber(0);
    } else {
      setCurrentSentenceNumber(currentSentenceNumber + 1);
    }
  };

  useEffect(() => {
    if (!state) {
      navigate("/");
    }

    console.log(state);
  }, []);

  if (!state) return <div>Loading...</div>;

  return (
    <Flex
      position="relative"
      flexDir="column"
      maxW={768}
      mx="auto"
      minH="100vh"
    >
      <Button
        m={4}
        position="absolute"
        variant="ghost"
        colorScheme="transparent"
        onClick={() => navigate("/")}
      >
        <FiArrowLeft />
      </Button>
      <Flex
        fontSize={24}
        fontWeight="bold"
        textAlign="center"
        mt={8}
        justifyContent="center"
      >
        Day {state.wordData.day} - {state.wordData.title}
      </Flex>
      <Flex mt={8} flexDirection="column" px={4}>
        <Text>{state.wordData.sentences[currentSentenceNumber]?.english}</Text>
        <Text
          bgColor={isClicked ? "" : "black"}
          mt={2}
          cursor="pointer"
          onClick={() => setIsClicked(!isClicked)}
        >
          {state.wordData.sentences[currentSentenceNumber]?.korean}
        </Text>
        <Flex mt={2} gap={2}>
          <Button
            variant="ghost"
            colorScheme="green"
            size="sm"
            mb={2}
            ml={2}
            onClick={onClickPrev}
          >
            <FiArrowLeft />
          </Button>
          <Button
            variant="ghost"
            colorScheme="green"
            size="sm"
            mb={2}
            ml={2}
            onClick={onClickNext}
          >
            <FiArrowRight />
          </Button>
          <Button
            variant="ghost"
            colorScheme="green"
            size="sm"
            mb={2}
            ml={2}
            onClick={onClickAudio}
          >
            <FiVolume2 />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AnotherDailyWord;
```

실행해보고 위 코드와 DailyWord.tsx을 비교해보세요 🙂
