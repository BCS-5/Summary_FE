// components/Count.tsx

import { Box, Button, Flex } from "@chakra-ui/react";
import { FC, useState } from "react";

const Count: FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <Flex gap={4} alignItems="center">
      <Box fontSize={60} bgColor="red.100" color="blue">
        {count}
      </Box>
      <Button
        size="lg"
        fontSize={32}
        colorScheme="green"
        onClick={() => setCount(count + 1)}
      >
        +
      </Button>
    </Flex>
  );
};

export default Count;
