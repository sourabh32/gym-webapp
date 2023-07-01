import React, { useContext } from 'react'
import {Box,Container,Heading,Input,Grid} from "@chakra-ui/react"
import {motion} from "framer-motion"
import thigh from "../assets/thigh.png"
import bicep from "../assets/bicep.png"
import chest from "../assets/chest.png"
import leg from "../assets/leg.png"
import shoulder from "../assets/shoulder.png"
import triceps from "../assets/triceps.png"
import back from "../assets/back.png"
import cardio from "../assets/cardio.png"
import MenuCard from './MenuCard'
import { exreciseContext } from '../context/ExerciseContext'

const menu = [
    { id: 1, img: thigh,title:"upper legs" },
    { id: 2, img: bicep,title:"bicep" },
    { id: 3, img: chest,title:"chest" },
    { id: 4, img: leg,title:"leg" },
    { id: 5, img: shoulder,title:"shoulder" },
    { id: 6, img: triceps,title:"triceps" },
    { id: 7, img: back,title:"back" },
    { id: 8, img: cardio,title:"cardio" },
  ];


  const AnimatedInput = motion(Input);


const SearchExercises = ({refe}) => {

const {setInputTerm} = useContext(exreciseContext)
 
  return (
    <Box  bg="gray.100" >
    <Container placeItems={"center"} maxW="container.lg" display={"grid"}>
      <Heading  my={10} color="#435B66" as="h2" size="xl" mb={4}>
        Search Exercises
      </Heading>
      <AnimatedInput  initial={{ y:-100,opacity: 0 }}
    whileInView={{y:0 ,opacity: 1 }} my="5" transition="0.3s" className='shadow' bgColor={"gray.200"} w={"100%"} placeholder="Search for an exercise..." size="sm" mb={6} onChange={(e) => setInputTerm(e.target.value.toLowerCase())} />
     
    </Container>

    <Container mt={10}  maxW="container.lg">
      <Grid placeItems={"center"} templateColumns={['repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']} gap={6}>
        {menu.map(({id,img,title}) => (
          <MenuCard key={id} title={title} refe={refe}  img={img} />
        ))}
      </Grid>
    </Container>
    
  </Box>


  )
}

export default SearchExercises