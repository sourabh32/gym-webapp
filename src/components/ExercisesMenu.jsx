import { Box, Container, Heading } from '@chakra-ui/react'
import React, { useContext } from 'react'
import ExerciseCard from './ExerciseCard'
import { exercises } from '../utils/exercisesData'
import { exreciseContext } from '../context/ExerciseContext'

const ExercisesMenu = () => {
const {fetchedExercise,displayExercise} = useContext(exreciseContext)
  return (
    <Box  h={['100vh', 'auto']} bg="gray.100" py={16} px={[2, 6]}>
      <Heading mb={"10"} textAlign={"center"}>Showing Exercises...</Heading>
        <Container  gap={10} display={"grid"} gridTemplateColumns={["repeat(1,1fr)","repeat(4,1fr)"]} maxW="container.lg">
            {
        displayExercise.slice(0,20).map(({id,gifUrl,name,equipment,bodyPart}) => <ExerciseCard id={id} key={id} img={gifUrl} name={name} equipment={equipment} bodyPart={bodyPart} />)
            }
         
        </Container>
    </Box>
  )
}

export default ExercisesMenu