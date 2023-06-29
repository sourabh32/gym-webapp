import React, { useEffect } from 'react'
import { blogOptions } from '../utils/apiOptions'
import axios from 'axios'
import { Box, HStack, Heading, Image,Text } from '@chakra-ui/react'
import { useState } from 'react'
import muscle from "../assets/muscle.png"
const Blogs = ({search}) => {
const [blogs,setBlogs] = useState([])
    useEffect( async ()=>{
        try {
            const {data} = await axios.request(blogOptions(search));
            setBlogs(data.data.organic_results)
            console.log(data.data.organic_results)
        } catch (error) {
            console.error(error);
        }
    },[])
console.log(search)
  return (
    <Box w="full">
              {blogs.slice(0,2).map((blog) => (
        <HStack key={blog.id} borderWidth="1px" borderRadius="md" p={4} mb={4}>
          <Image w="10" h="10" src={muscle} alt="Featured" />
          <Box>
          <Heading as="h2" size="md" my={2}>{blog.title}</Heading>
          <Text>{blog.desc}</Text>
          </Box>
        </HStack>
      ))}
    </Box>

  )
}

export default Blogs