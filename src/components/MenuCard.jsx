import { Box,Image } from '@chakra-ui/react'
import React, { useContext,  } from 'react'
import { exreciseContext } from '../context/ExerciseContext'

const MenuCard = ({img,title,refe}) => {

  const {setInputTerm} = useContext(exreciseContext)
  const handleClick = () =>{
    setInputTerm(title)
   
    refe.current.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <Box p={5} className='shadow' onClick={handleClick} borderRadius={10}  transition="0.3s" cursor={"pointer"} bgColor={"gray.200"}
      w="6rem" h="6rem" >
  <Image src={img} />
</Box>
  )
}

export default MenuCard