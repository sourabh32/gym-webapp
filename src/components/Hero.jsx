import React from 'react'
import herobg from "../assets/herobg.jpg"
import { Box, Button, Heading, Text } from '@chakra-ui/react'
const Hero = () => {
  return (
    <Box
      bgImage={herobg}
      bgSize="cover"
      bgPosition={"top"}
      h="100vh"
      position="relative"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        bg="rgba(0, 0, 0, 0.5)" 
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        px={6}
      >
        <Heading as="h1" fontSize={["2.2rem","3rem"]} w={"70%"} color="white" textAlign="center" mb={4}>
        "1300+ Exercises at Your Fingertips!"
        </Heading>
        <Text color="white" fontSize={"1rem"}  textAlign="center" mb={6}>
          Start your journey with our comprehensive exercise library.
        </Text>
        <Button  colorScheme="blue" size="sm">
          Get Started
        </Button>
      </Box>
    </Box>
  )
}

export default Hero