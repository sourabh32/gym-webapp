import React, { useEffect } from 'react'
import { blogOptions } from '../utils/apiOptions'
import axios from 'axios'
import { Box, HStack, Heading, Image,Text } from '@chakra-ui/react'
import { useState } from 'react'
import muscle from "../assets/muscle.png"
const Blogs = ({search}) => {
const [blogs,setBlogs] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(blogOptions(search));
        const data = response.data;
        console.log(data.data.organic_results)
        setBlogs(data.data.organic_results);
        
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [search]);
console.log(blogs)
  return (
    <Box  w="full">

      <Text ml={5} fontSize={"1rem"} >Related article's</Text>

        { blogs.length>0 &&     blogs.slice(1,3).map((blog) => (
                
        <HStack  key={blog.url} borderWidth="1px" borderRadius="md" p={4} mb={4}>
          <Image w="10" h="10" src={muscle} alt="Featured" />
          <a href={`${blog.url}`} target='_blank'>
          <Box>
          <Heading   as="h2" size="md" my={2}>{blog.title}</Heading>
          <Text lineHeight={1}>{blog.desc}</Text>
          </Box>
          </a>
        </HStack>
      ))
        }
    </Box>

  )
}

export default Blogs