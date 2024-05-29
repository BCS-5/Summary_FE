# To Do List

이번에는 Chakra-ui 를 사용해서 To-Do-List를 만들어봅시다!

## 기본 셋팅

### Installation

> npm create vite@latest . -- --template react-ts

> npm install

> npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion

```typescript
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

디자인 먼저 작성할 건데, 모바일 사이즈로 작성해보죠!

> npm run dev

개발자 도구를 열어서 모바일 사이즈로 확인해보면서 합시다!

<img
  src="public/readme/mobile.png"
  width="718"
  alt="check mobile size"
/>

## 컴포넌트 (CreateTodo.tsx, TodoList.tsx)

아래와 같이 CreateTodo.tsx, TodoList.tsx 컴포넌트를 만들어주고 임포트 합니다.

```typescript
import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";

const App: FC = () => {
  return (
    <Flex flexDir="column" minH="100vh">
      <CreateTodo />
      <TodoList />
    </Flex>
  );
};

export default App;
```

```typescript
// components/CreateTodo.tsx

import { Box } from "@chakra-ui/react";
import { FC } from "react";

const CreateTodo: FC = () => {
  return (
    <Box bgColor="teal.100" h={32}>
      CreateTodo
    </Box>
  );
};

export default CreateTodo;
```

```typescript
// components/TodoList.tsx

import { Box } from "@chakra-ui/react";
import { FC } from "react";

const TodoList: FC = () => {
  return (
    <Box bgColor="red.100" flexGrow={1}>
      TodoList
    </Box>
  );
};

export default TodoList;
```

위 코드를 실행하면 아래와 같은 이미지를 확인 할 수 있습니다.

<img
  src="public/readme/todo1.png"
  width="718"
  alt="todo1"
/>

그럼 버튼을 만들어볼까요?

```typescript
// components/CreateTodo.tsx

import { Button, Flex, Input } from "@chakra-ui/react";
import { FC } from "react";

const CreateTodo: FC = () => {
  return (
    <Flex
      px={8}
      bgColor="teal.200"
      h={32}
      justifyContent="center"
      alignItems="center"
    >
      <Input />
      <Button ml={2} colorScheme="teal">
        만들기
      </Button>
    </Flex>
  );
};

export default CreateTodo;
```

Box태그를 Flex로 변경 후, 가운데 정렬 해줍니다.

그리고 Input 태그와 Button태그를 작성해줍니다.

<img
  src="public/readme/todo2.png"
  width="718"
  alt="todo2"
/>

그럼 위 이미지처럼 Input 박스와, 만들기 버튼이 생겼습니다!

TodoList.tsx도 아래와 같이 정렬해줍니다.

```typescript
// components/TodoList.tsx

import { Flex } from "@chakra-ui/react";
import { FC } from "react";

const TodoList: FC = () => {
  return (
    <Flex
      bgColor="red.100"
      flexGrow={1}
      flexDir="column"
      alignItems="center"
      pt={8}
    >
      TodoList
    </Flex>
  );
};

export default TodoList;
```

<img
  src="public/readme/todo3.png"
  width="718"
  alt="todo3"
/>

## 컴포넌트 (TodoCard.tsx)

TodoCard.tsx 컴포넌트를 만들어줍니다.

```typescript
import { Button } from "@chakra-ui/button";
import { Flex, Text } from "@chakra-ui/layout";
import { FC } from "react";

const TodoCard: FC = () => {
  return (
    <Flex bgColor="gray.50" px={4} py={2} rounded="lg" gap={1}>
      <Text fontSize={20} bgColor="blue.100" w={48} isTruncated={true}>
        🍚 밥먹기
        aasdasdasdasdadasdasdasdasdasdasdasdasdasdasdasdadasdadasdadasdadassd
      </Text>
      <Button>수정</Button>
      <Button>삭제</Button>
    </Flex>
  );
};

export default TodoCard;
```

Text 속성 중 isTruncated는 글자수가 넓이인 w={48}을 넘어간다면, ... 으로 처리합니다.

그리고 TodoList에서 임포트 합니다.

```typescript
// components/TodoList.tsx

import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import TodoCard from "./Todocard";

const TodoList: FC = () => {
  return (
    <Flex
      bgColor="red.100"
      flexGrow={1}
      flexDir="column"
      alignItems="center"
      pt={8}
    >
      <TodoCard />
    </Flex>
  );
};

export default TodoList;
```

<img
  src="public/readme/todo4.png"
  width="718"
  alt="todo4"
/>

### react-icons

> npm install react-icons --save

react-icons 설치 후 원하는 아이콘을 골라서 임포트 해줍니다.

https://react-icons.github.io/react-icons/

```typescript
// components/TodoCard.tsx

import { Button, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { FiEdit3, FiTrash2 } from "react-icons/fi";

const TodoCard: FC = () => {
  return (
    <Flex bgColor="white" px={4} py={2} rounded="lg" gap={1}>
      <Text fontSize={20} w={48} isTruncated={true}>
        🍚 밥먹기
      </Text>
      <Button colorScheme="blue">
        <FiEdit3 />
      </Button>
      <Button colorScheme="red">
        <FiTrash2 />
      </Button>
    </Flex>
  );
};

export default TodoCard;
```

위 코드를 TodoList.tsx 컴포넌트에 여러개 삽입해봅시다.

```typescript
import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import TodoCard from "./TodoCard";

const TodoList: FC = () => {
  return (
    <Flex
      bgColor="gray.50"
      flexGrow={1}
      flexDir="column"
      alignItems="center"
      pt={8}
      gap={2}
    >
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
    </Flex>
  );
};

export default TodoList;
```

그럼 아래와 같은 결과를 볼 수 있습니다.

<img
  src="public/readme/todo5.png"
  width="718"
  alt="todo3"
/>
