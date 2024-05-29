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
