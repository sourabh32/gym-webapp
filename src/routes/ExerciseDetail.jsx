import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { exreciseContext } from '../context/ExerciseContext';
import { Box, Image, Text } from '@chakra-ui/react';

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
    <div>
      {exercise.length > 0 && (
        <Box>
          <h2>Exercise Detail</h2>
          <Image src={exercise[0].gifUrl} alt={exercise[0].name} />
          <Text>{exercise[0].name}</Text>
        </Box>
      )}
    </div>
  );
};

export default ExerciseDetail;
