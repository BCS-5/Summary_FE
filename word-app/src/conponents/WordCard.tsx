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
        `https://texttospeech.googleapis.com/v1/text:synthesize?key=${
          import.meta.env.VITE_API_KEY
        }`,
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
