import { Box, Container, Heading } from '@chakra-ui/react'
import React, { useContext } from 'react'
import ExerciseCard from './ExerciseCard'

import { exreciseContext } from '../context/ExerciseContext'
import SpinnerComp from './Spinner'

const ExercisesMenu = ({refe}) => {
const {loading,displayExercise} = useContext(exreciseContext)
  return (
    <div ref={refe}  >
      {
        loading? (<Box h="100vh" display={"grid"} placeContent={"center"} bg="gray.100"  w="100%">
          <SpinnerComp />
        </Box>
        ): displayExercise.length >0 ?( <Box h={ 'auto'} bg="gray.100" py={16} px={[2, 6]}>
        <Heading mb={"10"} color="#435B66" textAlign={"center"}>Showing Exercises...</Heading>
          <Container  gap={10} display={"grid"} gridTemplateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(4,1fr)"]}  maxW="container.lg">
          
              {
          displayExercise.slice(0,20).map(({id,gifUrl,name,equipment,bodyPart}) => <ExerciseCard id={id} key={id} img={gifUrl} name={name} equipment={equipment} bodyPart={bodyPart} />)
              }
           
          </Container>
      </Box>):(
      <Text>Api request's exhausted 😭</Text>)
      }
 
    </div>
  )
}

export default ExercisesMenu