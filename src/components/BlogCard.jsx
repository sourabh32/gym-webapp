import React from 'react'
import muscle from "../assets/muscle.png"
import {HStack, Heading, Image,Box,Text} from "@chakra-ui/react"
import {motion} from "framer-motion"

const AnimatedStack = motion(HStack)


const BlogCard = ({url,desc,title}) => {
  return (
    <AnimatedStack
    initial={{ y: 100, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    
    className='shadow' transition="0.3s"    borderWidth="1px" borderRadius="md" p={4} mb={4}>
    <Image w="10" h="10" src={muscle} alt="Featured" />
    <a href={`${url}`} target='_blank'>
    <Box>
    <Heading   as="h2" size="md" my={2}>{title}</Heading>
    <Text lineHeight={1}>{desc}</Text>
    </Box>
    </a>
  </AnimatedStack>
  )
}

export default BlogCard