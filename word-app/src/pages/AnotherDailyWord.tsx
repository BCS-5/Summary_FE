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
