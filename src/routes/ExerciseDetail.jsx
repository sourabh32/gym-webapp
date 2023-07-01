import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { exreciseContext } from "../context/ExerciseContext";
import { Badge, Box, Container, HStack, Image, Text } from "@chakra-ui/react";
import Blogs from "../components/Blogs";
import YoutubeContainer from "../components/YoutubeContainer";
import { motion } from "framer-motion";

const AnimatedImage = motion(Image);
const ExerciseDetail = () => {
  const { fetchedExercise } = useContext(exreciseContext);
  const [exercise, setExercise] = useState([]);
  const { id } = useParams();

  const exerciseDetail = (id) => {
    if (fetchedExercise.length > 0) {
      const searchedItem = fetchedExercise.filter(
        (exercise) => id === exercise.id
      );
      setExercise(searchedItem);
    }
  };

  useEffect(() => {
    if (fetchedExercise.length > 0) {
      exerciseDetail(id);
    }
  }, [id]);

  return (
    <>
      {exercise.length > 0 && (
        <Box bgColor="gray.100" minW="100vw" py={20}>
          <Container
            display="flex"
            flexDirection={["column", "row"]}
            justifyContent="center"
            alignItems={["center", "flex-start"]}
            gap={10}
            maxW="container.lg"
          >
            <Box w={["100%", "30%"]}>
              <Text
                my={[10, 2]}
                textAlign={["center", "left"]}
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
                fontFamily="poppins"
                as="h1"
                textTransform="capitalize"
              >
                {exercise[0].name}
              </Text>
              <AnimatedImage
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition="0.3s"
                className="shadow"
                borderRadius={10}
                src={exercise[0].gifUrl}
                alt={exercise[0].name}
                w="100%"
                h="auto"
                maxH={["300px", "none"]}
              />
              <HStack
                width="full"
                justifyContent={["center", "flex-start"]}
                gap={2}
                wrap="wrap"
                mt={6}
              >
                <Badge colorScheme="red">{exercise[0].target}</Badge>
                <Badge colorScheme="green">{exercise[0].equipment}</Badge>
                <Badge colorScheme="purple">{exercise[0].bodyPart}</Badge>
              </HStack>
            </Box>

            <Box w={["100%", "70%"]}>
              <Blogs search={exercise[0].name} />
            </Box>
          </Container>
          <YoutubeContainer query={exercise[0].name} />
        </Box>
      )}
    </>
  );
};

export default ExerciseDetail;
