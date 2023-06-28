import { Box,Image } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { exreciseContext } from '../context/ExerciseContext'

const MenuCard = ({img,title}) => {
  const {setInputTerm} = useContext(exreciseContext)
  return (
    <Box onClick={()=>setInputTerm(title)} borderRadius={"lg"} transition={"0.3s"} cursor={"pointer"} bgColor={"gray.200"}
    _hover={{
        transform: 'scale(1.05)',
        border:"1px solid gray"
      }}  w="6rem" h="6rem" >
  <Image src={img} />
</Box>
  )
}

export default MenuCard