import { Box,Image,Text,Badge } from '@chakra-ui/react'
import React from 'react'

const ExerciseCard = ({name,img,bodyPart,equipment}) => {
  return (
    <Box
    position="relative"
    borderRadius={10}
    transition="0.3s"
    cursor="pointer"
    bgColor="gray.300"
    _hover={{
      transform: 'scale(1.05)',
      border: "1px solid blue"
    }}
    w="full"
    h="auto"
    
  >
    <Image
    loading='lazy'
      mixBlendMode="color-burn"
      src={img}
      alt="Exercise Image"
    />
    <Text
      position="absolute"
      bottom={0}
      left={0}
      right={0}
      textAlign="center"
      px={2}
      py={1}
      
      style={{
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }}
      fontWeight={"600"}
      textTransform={"capitalize"}
      color={"#0A6EBD"}
    >
        {
            name
        }
    </Text>
    <Badge variant="solid" colorScheme="green" position="absolute" top={[4,2]} right={[4,2]}
    style={{
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }}>
      {bodyPart}
    </Badge>
    <Badge variant="solid" colorScheme="red" position="absolute" top={[4,2]} left={[4,2]}>
      {equipment}
    </Badge>
  </Box>
  )
}

export default ExerciseCard