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
