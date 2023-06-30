import React, { useEffect } from 'react'
import { blogOptions } from '../utils/apiOptions'
import axios from 'axios'
import { Box, Heading, Text } from '@chakra-ui/react'
import { useState } from 'react'

import SpinnerComp from './Spinner'
import BlogCard from './BlogCard'



const Blogs = ({search}) => {
const [blogs,setBlogs] = useState([])
const [loading,setLoading] = useState(true)



  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await axios.request(blogOptions(search));
        const data = response.data;
        
        setBlogs(data.data.organic_results);
        setLoading(false)
        
      } catch (error) {
        console.error(error);
        setLoading(false)
      }
    };

    fetchData();
  }, [search]);

  return (
    <Box  w="full">

      <Heading color="#435B66" mx={5}  my={5} fontFamily={"poppins"} >Related article's</Heading>



{
loading ? (<SpinnerComp />) : blogs.length >0 ? (blogs.slice(1,3).map(({url,desc,title}) => (
                
  <BlogCard url={url} key={desc} desc={desc} title={title} />
))) : (<Text mx={5}>Api request's exhausted 😭</Text>)
}
       
    </Box>

  )
}

export default Blogs