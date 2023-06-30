import { Box ,Image} from '@chakra-ui/react'
import React from 'react'
import linkedin from "../assets/linkedin-logo.png"
const Footer = () => {
  return (
    <Box bg="#f2f2f2" py={4} px={6} textAlign="center">
      <Box display="flex" alignItems="center" justifyContent="center">
        <Box fontFamily={"poppins"} mr={2} fontSize="md" fontWeight="bold">
          Created by Sourabh32
        </Box>
        <a href="https://www.linkedin.com/in/sourabhbharadwaj/" target="_blank" rel="noopener noreferrer">
          <Image w={5} h={5} src={linkedin} />
        </a>
      </Box>
    </Box>

  )
}

export default Footer