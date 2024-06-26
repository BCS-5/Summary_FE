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
  width="512"
  height="756"
  alt="todo3"
/>

## CRUD

이제 Todo 생성(Create), 읽기(Read), 수정(Update), 삭제(Delete)를 구현해봅시다.

먼저 Todo에서 사용 할 타입을 인터페이스로 만들어봅시다.

### 읽기 (Read)

src폴더 하위에 index.d.ts 파일을 만들어 주세요.

index.d.ts 파일은 TypeScript 프로젝트에서 주로 타입 선언을 저장하는 데 사용되는 파일입니다. 이 파일은 프로젝트 내의 타입 정의를 중앙에서 관리하고, 다른 파일에서 사용할 수 있도록 하기 위해 존재합니다.

```typescript
// src/index.d.ts

interface ITodo {
  id: number;
  content: string;
  isDone: boolean;
}
```

```typescript
import { Flex } from "@chakra-ui/react";
import { FC, useState } from "react";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";

const sampleData: ITodo[] = [
  {
    id: 1,
    content: "🍚 밥먹기",
    isDone: false,
  },
  {
    id: 2,
    content: "🍔 햄버거",
    isDone: false,
  },
];

const App: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>(sampleData);

  return (
    <Flex flexDir="column" minH="100vh">
      <CreateTodo />
      <TodoList todos={todos} />
    </Flex>
  );
};

export default App;
```

> ‼️ setTodos([...todos, newTodo]);  
> 추후 위 처럼 setTodos에 기존 todos배열에 추가 될 수 있는 로직으로 작성 할 예정입니다.

위 코드는 todos에서 에러가 발생합니다.

TodoList에 props를 받아야 하는데 타입이 정의되어 있지 않기 때문입니다.

따라서 TodoList에 타입을 정의해줍시다.

```typescript
import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import TodoCard from "./TodoCard";

interface TodoListProps {
  todos: ITodo[];
}

const TodoList: FC<TodoListProps> = ({ todos }) => {
  return (
    <Flex
      bgColor="gray.50"
      flexGrow={1}
      flexDir="column"
      alignItems="center"
      pt={8}
      gap={2}
    >
      {todos.map((v) => (
        <TodoCard />
      ))}
    </Flex>
  );
};

export default TodoList;
```

TodoList 컴포넌트에서 받은 todos의 타입은 ITodo 타입으로 정의합니다.

그리고 index.d.ts에서 ITodo의 타입에서 id: number값이 있기 때문에, map함수에 key 값으로 사용했던 (i)는 없어도 됩니다.

하지만 아직 TodoCard에 데이터(v)를 전달하지 않았습니다. 전달해주고 랜더링해봅시다!

```typescript
// components/TodoList.tsx

import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import TodoCard from "./TodoCard";

interface TodoListProps {
  todos: ITodo[];
}

const TodoList: FC<TodoListProps> = ({ todos }) => {
  return (
    <Flex
      bgColor="gray.50"
      flexGrow={1}
      flexDir="column"
      alignItems="center"
      pt={8}
      gap={2}
    >
      {todos.map((v) => (
        <TodoCard key={v.id} todo={v} />
      ))}
    </Flex>
  );
};

export default TodoList;
```

TodoCard에도 내려줬으니, TodoCard에서도 타입을 정의해줍시다.

```typescript
// components/TodoCard.tsx

import { Button, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { FiEdit3, FiTrash2 } from "react-icons/fi";

interface TodoCardProps {
  todo: ITodo;
}

const TodoCard: FC<TodoCardProps> = ({ todo }) => {
  return (
    <Flex bgColor="white" px={4} py={2} rounded="lg" gap={1}>
      <Text fontSize={20} w={48} isTruncated={true}>
        {todo.content}
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

이제 받아온 todo의 content로 나타낼 수 있습니다.

<img
  src="public/readme/todo6.png"
  width="718"
  alt="todo6"
/>

### 생성 (Create)

이제 sampleData에서 가져오는게 아닌, 데이터 생성이 되도록 해봅시다.

그리고 todos, setTodos도 CreateTodo에 props로 전달합니다.

```typescript
import { Flex } from "@chakra-ui/react";
import { FC, useState } from "react";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";

const sampleData: ITodo[] = [
  {
    id: 1,
    content: "🍚 밥먹기",
    isDone: false,
  },
  {
    id: 2,
    content: "🍔 햄버거",
    isDone: false,
  },
  {
    id: 3,
    content: "🍕 피자",
    isDone: false,
  },
];

const App: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>(sampleData);

  return (
    <Flex flexDir="column" minH="100vh">
      <CreateTodo todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </Flex>
  );
};

export default App;
```

```typescript
// components/CreateTodo.tsx

import { Button, Flex, Input } from "@chakra-ui/react";
import { Dispatch, FC, SetStateAction } from "react";

interface CreateTodoProps {
  todos: ITodo[];
  setTodos: Dispatch<SetStateAction<ITodo[]>>;
}

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

CreateTodoProps의 setTodos 타입은 setTodos에 마우스를 올려보시면 이중제네릭으로 타입이 확인가능합니다.

그럼 CreateTodo에서 타입을 정의했으니 props를 받아볼까요?

```typescript
// components/CreateTodo.tsx

import { Button, Flex, Input } from "@chakra-ui/react";
import { Dispatch, FC, SetStateAction, useState } from "react";

interface CreateTodoProps {
  todos: ITodo[];
  setTodos: Dispatch<SetStateAction<ITodo[]>>;
}

const CreateTodo: FC<CreateTodoProps> = ({ todos, setTodos }) => {
  const [currentTodoId, setCurrentTodoId] = useState<number>(
    todos[todos.length - 1].id
  );

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

생성할 때, content뿐만 아니라 id값도 필요하기 때문에 현재 id값을 알 수 있는 currentTodoId useState훅도 하나 만들어줍니다.

이제 사용자로부터 CreateTodo의 Input에서 값을 받아야겠죠?

```typescript
// components/CreateTodo.tsx

import { Button, Flex, Input } from "@chakra-ui/react";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";

interface CreateTodoProps {
  todos: ITodo[];
  setTodos: Dispatch<SetStateAction<ITodo[]>>;
}

const CreateTodo: FC<CreateTodoProps> = ({ todos, setTodos }) => {
  const [currentTodoId, setCurrentTodoId] = useState<number>(
    todos[todos.length - 1].id
  );

  const [content, setContent] = useState<string>("");

  useEffect(() => {
    console.log(content);
  }, [content]);

  return (
    <Flex
      px={8}
      bgColor="teal.200"
      h={32}
      justifyContent="center"
      alignItems="center"
    >
      <Input value={content} onChange={(e) => setContent(e.target.value)} />
      <Button ml={2} colorScheme="teal">
        만들기
      </Button>
    </Flex>
  );
};

export default CreateTodo;
```

위 코드를 실행시켜서 Input에 값이 잘 들어오는지 확인해보세요!

<img
  src="public/readme/todo7.png"
  width="718"
  alt="check input data"
/>

이제 Button에 onClick을 작성해서 setTodos에 추가 될 수 있도록 해봅시다.

```typescript
// components/CreateTodo.tsx

import { Button, Flex, Input } from "@chakra-ui/react";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";

interface CreateTodoProps {
  todos: ITodo[];
  setTodos: Dispatch<SetStateAction<ITodo[]>>;
}

const CreateTodo: FC<CreateTodoProps> = ({ todos, setTodos }) => {
  const [currentTodoId, setCurrentTodoId] = useState<number>(
    todos[todos.length - 1].id
  );

  const [content, setContent] = useState<string>("");

  const onClickCreateTodo = () => {
    if (!content) return;

    setTodos([...todos, { id: currentTodoId, content, isDone: false }]);
    // content: content이기 때문에, key = value가 같다면 생략 가능.
  };

  return (
    <Flex
      px={8}
      bgColor="teal.200"
      h={32}
      justifyContent="center"
      alignItems="center"
    >
      <Input value={content} onChange={(e) => setContent(e.target.value)} />
      <Button ml={2} colorScheme="teal" onClick={onClickCreateTodo}>
        만들기
      </Button>
    </Flex>
  );
};

export default CreateTodo;
```

<img
  src="public/readme/todo8.png"
  width="718"
  alt="check mobile size"
/>

Input 에 데이터를 넣고 버튼을 클릭하면 생성되는 것을 확인 할 수 있습니다. 데이터 들어오는건 확인 했으니 useEffect는 삭제합니다.

두 가지 문제점이 있죠? 먼저 key값이 중복된다는 오류가 발생합니다.

> Warning: Encountered two children with the same key, `3`. Keys should be unique so that components maintain their identity across updates.

위 이미지에서 '🍕피자'와 '생성 되나요?'의 키 값이 현재 3으로 동일하기 때문입니다.

그리고, 만들기 버튼을 누르면 content부분이 사라지지 않죠.

```typescript
// components/CreateTodo.tsx

import { Button, Flex, Input } from "@chakra-ui/react";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";

interface CreateTodoProps {
  todos: ITodo[];
  setTodos: Dispatch<SetStateAction<ITodo[]>>;
}

const CreateTodo: FC<CreateTodoProps> = ({ todos, setTodos }) => {
  const [currentTodoId, setCurrentTodoId] = useState<number>(
    todos[todos.length - 1].id
  );

  const [content, setContent] = useState<string>("");

  const onClickCreateTodo = () => {
    if (!content) return;

    setTodos([...todos, { id: currentTodoId + 1, content, isDone: false }]);
    setCurrentTodoId(currentTodoId + 1);
    setContent("");
  };

  return (
    <Flex
      px={8}
      bgColor="teal.200"
      h={32}
      justifyContent="center"
      alignItems="center"
    >
      <Input value={content} onChange={(e) => setContent(e.target.value)} />
      <Button ml={2} colorScheme="teal" onClick={onClickCreateTodo}>
        만들기
      </Button>
    </Flex>
  );
};

export default CreateTodo;
```

setTodos, setCurrentTodoId에 currenTodoId + 1을 해주고, 만들기 버튼을 누르면 content를 초기화 시켜주는 setContent("")도 추가했습니다.

<img
  src="public/readme/todo9.png"
  width="718"
  alt="fix error"
/>

위 코드를 실행하면 에러가 더 이상 발생하지 않습니다😁

### 완료 (Update)

완료 처리를 표현하기 위해서 `textDecorationLine="line-through"` 속성을 이용해 봅시다.

```typescript
// components/TodoCard.tsx

import { Button, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { FiEdit3, FiTrash2 } from "react-icons/fi";

interface TodoCardProps {
  todo: ITodo;
}

const TodoCard: FC<TodoCardProps> = ({ todo }) => {
  return (
    <Flex bgColor="white" px={4} py={2} rounded="lg" gap={1}>
      <Text
        fontSize={20}
        w={48}
        isTruncated={true}
        textDecorationLine="line-through"
      >
        {todo.content}
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

<img
  src="public/readme/todo10.png"
  width="718"
  alt="fix error"
/>

위 처럼 line-through 가 적용된 것을 볼 수 있습니다. 위 효과와 삼항연사자를 사용해서 완료처리 해봅시다.

isDone 값이 true일 경우 line-through가 되도록 해봅시다.

먼저 isDone 값을 true로 바꾸는 기능은 안 만들었기 때문에, sampleData에서 1개만(햄버거) true로 바꾸겠습니다.

```typescript
import { Flex } from "@chakra-ui/react";
import { FC, useState } from "react";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";

const sampleData: ITodo[] = [
  {
    id: 1,
    content: "🍚 밥먹기",
    isDone: false,
  },
  {
    id: 2,
    content: "🍔 햄버거",
    isDone: true,
  },
  {
    id: 3,
    content: "🍕 피자",
    isDone: false,
  },
];

const App: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>(sampleData);

  return (
    <Flex flexDir="column" minH="100vh">
      <CreateTodo todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </Flex>
  );
};

export default App;
```

```typescript
// components/TodoCard.tsx

import { Button, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { FiEdit3, FiTrash2 } from "react-icons/fi";

interface TodoCardProps {
  todo: ITodo;
}

const TodoCard: FC<TodoCardProps> = ({ todo }) => {
  return (
    <Flex bgColor="white" px={4} py={2} rounded="lg" gap={1}>
      <Text
        fontSize={20}
        w={48}
        isTruncated={true}
        textDecorationLine={`${todo.isDone ? "line-through" : ""}`}
      >
        {todo.content}
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

실행해보면 햄버거만 line-through가 젹용 된 것을 볼 수 있습니다.

<img
  src="public/readme/todo11.png"
  width="718"
  alt="line-through"
/>

이제 완료처리 기능을 만들어봅시다.

todos의 값을 변경해야 하니 App.tsx에서 setTodos를 전달합니다.

```typescript
import { Flex } from "@chakra-ui/react";
import { FC, useState } from "react";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";

const sampleData: ITodo[] = [
  {
    id: 1,
    content: "🍚 밥먹기",
    isDone: false,
  },
  {
    id: 2,
    content: "🍔 햄버거",
    isDone: true,
  },
  {
    id: 3,
    content: "🍕 피자",
    isDone: false,
  },
];

const App: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>(sampleData);

  return (
    <Flex flexDir="column" minH="100vh">
      <CreateTodo todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </Flex>
  );
};

export default App;
```

그럼 TodoList에서 받아줘야겠죠?

```typescript
// components/TodoList.tsx

import { Flex } from "@chakra-ui/react";
import { Dispatch, FC, SetStateAction } from "react";
import TodoCard from "./TodoCard";

interface TodoListProps {
  todos: ITodo[];
  setTodos: Dispatch<SetStateAction<ITodo[]>>;
}

const TodoList: FC<TodoListProps> = ({ todos, setTodos }) => {
  return (
    <Flex
      bgColor="gray.50"
      flexGrow={1}
      flexDir="column"
      alignItems="center"
      pt={8}
      gap={2}
    >
      {todos.map((v) => (
        <TodoCard key={v.id} todo={v} todos={todos} setTodos={setTodos} />
      ))}
    </Flex>
  );
};

export default TodoList;
```

받은 데이터를 TodoCard에도 전달해야 합니다.

```typescript
// components/TodoCard.tsx

import { Button, Flex, Text } from "@chakra-ui/react";
import { Dispatch, FC, SetStateAction } from "react";
import { FiEdit3, FiTrash2 } from "react-icons/fi";

interface TodoCardProps {
  todo: ITodo;
  todos: ITodo[];
  setTodos: Dispatch<SetStateAction<ITodo[]>>;
}

const TodoCard: FC<TodoCardProps> = ({ todo, todos, setTodos }) => {
  const onClickIsDone = () => {
    const temp = todos.map((v) => {
      if (v.id === todo.id) {
        // 기존 값을 교체
        return { id: todo.id, content: todo.content, isDone: !todo.isDone };
      } else {
        // 기존 값 유지
        return v;
      }
    });

    setTodos(temp);
  };
  return (
    <Flex bgColor="white" px={4} py={2} rounded="lg" gap={1}>
      <Text
        fontSize={20}
        w={48}
        isTruncated={true}
        textDecorationLine={`${todo.isDone ? "line-through" : ""}`}
        onClick={onClickIsDone}
      >
        {todo.content}
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

todo, todos, setTodos를 받았으니 interface로 타입을 정의해줍니다.

onClickDone 함수는 todos를 map함수로 순회하는데, v.id(전체 목록의 todo의 id 값) === todo.id(현재 클릭한 todo의 id값) 일치 할 경우 isDone을 true/false로 변환합니다.

위 코드를 실행해해서, 완료처리가 안된 todo를 클릭하면 완료처리가 됩니다.

<img
  src="public/readme/todo12.png"
  width="718"
  alt="onClickDone"
/>

### 삭제 (Delete)

이제 삭제하는 기능을 filter함수를 사용해서 만들어 봅시다.

맵함수가 아닌 필터 함수를 사용하는 이유를 아라볼까요?

<img
  src="public/readme/map.png"
  width="718"
  alt="map"
/>

맵 함수는 banana를 걸러주지만, 배열의 길이는 그대로고 undefined가 반환됩니다.

<img
  src="public/readme/filter.png"
  width="718"
  alt="filter"
/>

반면 filter함수는 배열에서 제외시키는 것을 볼 수 있습니다.

따라서 TodoCard에서 onClickDelete 함수를 아래처럼 작성할 수 있습니다.

```typescript
// components/TodoCard.tsx

import { Button, Flex, Text } from "@chakra-ui/react";
import { Dispatch, FC, SetStateAction } from "react";
import { FiEdit3, FiTrash2 } from "react-icons/fi";

interface TodoCardProps {
  todo: ITodo;
  todos: ITodo[];
  setTodos: Dispatch<SetStateAction<ITodo[]>>;
}

const TodoCard: FC<TodoCardProps> = ({ todo, todos, setTodos }) => {
  const onClickIsDone = () => {
    const temp = todos.map((v) => {
      if (v.id === todo.id) {
        // 기존 값을 교체
        return { id: todo.id, content: todo.content, isDone: !todo.isDone };
      } else {
        // 기존 값 유지
        return v;
      }
    });

    setTodos(temp);
  };

  const onClickDelete = () => {
    const temp = todos.filter((v) => {
      if (v.id !== todo.id) {
        return v;
      }
    });

    setTodos(temp);
  };

  return (
    <Flex bgColor="white" px={4} py={2} rounded="lg" gap={1}>
      <Text
        fontSize={20}
        w={48}
        isTruncated={true}
        textDecorationLine={`${todo.isDone ? "line-through" : ""}`}
        onClick={onClickIsDone}
      >
        {todo.content}
      </Text>
      <Button colorScheme="blue">
        <FiEdit3 />
      </Button>
      <Button colorScheme="red" onClick={onClickDelete}>
        <FiTrash2 />
      </Button>
    </Flex>
  );
};

export default TodoCard;
```

코드를 실행해서 삭제가 잘 작동하는지 확인해보세요!

### 수정 (Update)

수정하려면 content는 isDone처럼 true/false 토글처리가 안되기 때문에, 수정 창이 열려있는지의 여부를 확인해서 수정이 가능하도록 useState를 만들어봅시다.

```typescript
// components/TodoCard.tsx

import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { FiEdit3, FiTrash2, FiX } from "react-icons/fi";

interface TodoCardProps {
  todo: ITodo;
  todos: ITodo[];
  setTodos: Dispatch<SetStateAction<ITodo[]>>;
}

const TodoCard: FC<TodoCardProps> = ({ todo, todos, setTodos }) => {
  const [isUpdateOpen, setIsUpdateOpen] = useState<boolean>(false);

  const onClickIsDone = () => {
    const temp = todos.map((v) => {
      if (v.id === todo.id) {
        // 기존 값을 교체
        return { id: todo.id, content: todo.content, isDone: !todo.isDone };
      } else {
        // 기존 값 유지
        return v;
      }
    });

    setTodos(temp);
  };

  const onClickDelete = () => {
    const temp = todos.filter((v) => {
      if (v.id !== todo.id) {
        return v;
      }
    });

    setTodos(temp);
  };

  return (
    <Flex bgColor="white" px={4} py={2} rounded="lg" gap={1}>
      {isUpdateOpen ? (
        <Flex>
          <Input />
          <Button>수정</Button>
        </Flex>
      ) : (
        <Text
          fontSize={20}
          w={48}
          isTruncated={true}
          textDecorationLine={`${todo.isDone ? "line-through" : ""}`}
          onClick={onClickIsDone}
        >
          {todo.content}
        </Text>
      )}
      <Button colorScheme="blue" onClick={() => setIsUpdateOpen(!isUpdateOpen)}>
        {isUpdateOpen ? <FiX /> : <FiEdit3 />}
      </Button>
      <Button colorScheme="red" onClick={onClickDelete}>
        <FiTrash2 />
      </Button>
    </Flex>
  );
};

export default TodoCard;
```

isUpdateOpen이 true일 경우 수정이 가능하고, true일 경우, Button의 아이콘이 FiX로 표현됩니다.

<img
  src="public/readme/todo13.png"
  width="718"
  alt="filter"
/>

```typescript
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { FiEdit3, FiTrash2, FiX } from "react-icons/fi";

interface TodoCardProps {
  todo: ITodo;
  todos: ITodo[];
  setTodos: Dispatch<SetStateAction<ITodo[]>>;
}

const TodoCard: FC<TodoCardProps> = ({ todo, todos, setTodos }) => {
  const [isUpdateOpen, setIsUpdateOpen] = useState<boolean>(false);
  const [content, setContent] = useState<string>("");

  const onClickIsDone = () => {
    const temp = todos.map((v) => {
      if (v.id === todo.id) {
        return { id: todo.id, content: todo.content, isDone: !todo.isDone };
      } else {
        return v;
      }
    });

    setTodos(temp);
  };

  const onClickUpdate = () => {
    if (!content) return;

    const temp = todos.map((v) => {
      if (v.id === todo.id) {
        return { id: todo.id, content, isDone: todo.isDone };
      } else {
        return v;
      }
    });

    setTodos(temp);
    setIsUpdateOpen(false);
  };

  const onClickDelete = () => {
    const temp = todos.filter((v) => {
      if (v.id !== todo.id) {
        return v;
      }
    });

    setTodos(temp);
  };

  return (
    <Flex bgColor="white" px={4} py={2} rounded="lg" gap={1}>
      {isUpdateOpen ? (
        <Flex>
          <Input value={content} onChange={(e) => setContent(e.target.value)} />
          <Button colorScheme="green" ml={1} onClick={onClickUpdate}>
            <FiEdit3 />
          </Button>
        </Flex>
      ) : (
        <Text
          fontSize={20}
          w={48}
          isTruncated={true}
          textDecorationLine={`${todo.isDone ? "line-through" : ""}`}
          onClick={onClickIsDone}
        >
          {todo.content}
        </Text>
      )}
      <Button colorScheme="blue" onClick={() => setIsUpdateOpen(!isUpdateOpen)}>
        {isUpdateOpen ? <FiX /> : <FiEdit3 />}
      </Button>
      <Button colorScheme="red" onClick={onClickDelete}>
        <FiTrash2 />
      </Button>
    </Flex>
  );
};

export default TodoCard;
```

onClickUpdate 함수도 onClickIsDone 함수와 비슷합니다.

코드를 작성 후, 실행해보면 수정이 잘 됩니다! 😃

추가로 수정 버튼을 눌렀을 때 기존의 todo가 유지되어 수정이 가능하도록 해봅시다!

content useState에 초기값을 빈 값("")이 아닌, todo.content로 수정해주면 됩니다.

```typescript
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { FiEdit3, FiTrash2, FiX } from "react-icons/fi";

interface TodoCardProps {
  todo: ITodo;
  todos: ITodo[];
  setTodos: Dispatch<SetStateAction<ITodo[]>>;
}

const TodoCard: FC<TodoCardProps> = ({ todo, todos, setTodos }) => {
  const [isUpdateOpen, setIsUpdateOpen] = useState<boolean>(false);
  const [content, setContent] = useState<string>(todo.content);

  const onClickIsDone = () => {
    const temp = todos.map((v) => {
      if (v.id === todo.id) {
        return { id: todo.id, content: todo.content, isDone: !todo.isDone };
      } else {
        return v;
      }
    });

    setTodos(temp);
  };

  const onClickUpdate = () => {
    if (!content) return;

    const temp = todos.map((v) => {
      if (v.id === todo.id) {
        return { id: todo.id, content, isDone: todo.isDone };
      } else {
        return v;
      }
    });

    setTodos(temp);
    setIsUpdateOpen(false);
  };

  const onClickDelete = () => {
    const temp = todos.filter((v) => {
      if (v.id !== todo.id) {
        return v;
      }
    });

    setTodos(temp);
  };

  return (
    <Flex bgColor="white" px={4} py={2} rounded="lg" gap={1}>
      {isUpdateOpen ? (
        <Flex>
          <Input value={content} onChange={(e) => setContent(e.target.value)} />
          <Button colorScheme="green" ml={1} onClick={onClickUpdate}>
            <FiEdit3 />
          </Button>
        </Flex>
      ) : (
        <Text
          fontSize={20}
          w={48}
          isTruncated={true}
          textDecorationLine={`${todo.isDone ? "line-through" : ""}`}
          onClick={onClickIsDone}
        >
          {todo.content}
        </Text>
      )}
      <Button colorScheme="blue" onClick={() => setIsUpdateOpen(!isUpdateOpen)}>
        {isUpdateOpen ? <FiX /> : <FiEdit3 />}
      </Button>
      <Button colorScheme="red" onClick={onClickDelete}>
        <FiTrash2 />
      </Button>
    </Flex>
  );
};

export default TodoCard;
```

<img
  src="public/readme/todo14.png"
  width="718"
  alt="update"
/>

⚠️ 현재 sampleData에 todo 3개가 있는데, 만약 3개를 다 삭제한다면 아래와 같은 오류가 발생합니다.

<img
  src="public/readme/error.png"
  width="718"
  alt="error"
/>

CreateTodo.tsx컴포넌트의 currentTodoId useState에 초기값을 옵셔널로 수정해줍니다.

> const [currentTodoId, setCurrentTodoId] = useState<number>(todos[todos.length - 1]?.id);

```typescript
// components/CreateTodo.tsx

import { Button, Flex, Input } from "@chakra-ui/react";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";

interface CreateTodoProps {
  todos: ITodo[];
  setTodos: Dispatch<SetStateAction<ITodo[]>>;
}

const CreateTodo: FC<CreateTodoProps> = ({ todos, setTodos }) => {
  const [currentTodoId, setCurrentTodoId] = useState<number>(
    todos[todos.length - 1]?.id
  );

  const [content, setContent] = useState<string>("");

  const onClickCreateTodo = () => {
    if (!content) return;

    setTodos([...todos, { id: currentTodoId + 1, content, isDone: false }]);
    setCurrentTodoId(currentTodoId + 1);
    setContent("");
  };

  return (
    <Flex
      px={8}
      bgColor="teal.200"
      h={32}
      justifyContent="center"
      alignItems="center"
    >
      <Input
        // maxW={328} 사이즈 조정해보기
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button ml={2} colorScheme="teal" onClick={onClickCreateTodo}>
        만들기
      </Button>
    </Flex>
  );
};

export default CreateTodo;
```

<img
  src="public/readme/error2.png"
  width="718"
  alt="error"
/>

이제 todo를 모두 삭제하더라도 에러가 발생하지 않습니다 🙂
