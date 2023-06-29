import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { exreciseContext } from '../context/ExerciseContext';
import { Badge, Box, Container, HStack, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { blogOptions } from '../utils/apiOptions';
import axios from 'axios';
import Blogs from './Blogs';
const ExerciseDetail = () => {
  const {  fetchedExercise } = useContext(exreciseContext);
  const [exercise, setExercise] = useState([]);
  const { id } = useParams();
console.log(fetchedExercise.length)
  const exerciseDetail =  (id) => {
    if(fetchedExercise.length >0){
    const searchedItem =  fetchedExercise.filter((exercise) => id === exercise.id);
    setExercise(searchedItem);
    }
  };

  useEffect(() => {
    if(fetchedExercise.length>0){
      exerciseDetail(id);
    }
   
  }, [id,fetchedExercise]);

  console.log(exercise[0]);

  return (
    <>
      {exercise.length > 0 && (
        <Box minW={"100vw"} minH={"100vh"}   >
    
      <Container marginTop={"20"} bgColor={"blackAlpha.200"} display={"flex"}  flexDirection={["column","row"]}  maxW={"container.lg"}>
      
           <Box  w={["100%","30%"]}  >
           <Image mixBlendMode={"color-burn"} src={exercise[0].gifUrl} alt={exercise[0].name} />
           </Box>
        
        <Box w={["100%","70%"]}>
          <Heading  textAlign={"center"} style={{
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }} fontFamily={"poppins"} as="h1" textTransform={"capitalize"}>{exercise[0].name}</Heading>

          <HStack width={"full"} justifyContent={"center"}  gap={"2"}  wrap={"wrap"} mt="6">
          <Badge colorScheme="red">{exercise[0].target}</Badge>
          <Badge colorScheme="green">{exercise[0].equipment}</Badge>
          <Badge colorScheme="purple">{exercise[0].bodyPart}</Badge>
           
          </HStack>
          <Blogs search={exercise[0].name} />
          </Box>
      </Container>
        
        </Box>
      )}
    </>
  );
};

export default ExerciseDetail;
