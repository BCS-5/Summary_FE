// components/AvatarComp.tsx

import { Avatar, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

const nickName = "baekki";

const AvatarComp: FC = () => {
  return (
    <Flex alignItems="center" gap={2}>
      <Avatar name={nickName} />
      <Text fontSize={48} fontWeight="semibold">
        {nickName}
      </Text>
    </Flex>
  );
};

export default AvatarComp;
