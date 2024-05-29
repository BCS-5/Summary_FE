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
