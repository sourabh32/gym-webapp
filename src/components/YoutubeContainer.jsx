import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { youtubeOptions } from '../utils/apiOptions'
import YouTubeVideoCard from './YoutubeVideoCard'
import { Container, Heading, Stack } from '@chakra-ui/react'


const YoutubeContainer = ({query}) => {
    const [videos,setVideos] = useState([])
   
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(youtubeOptions(query));
        console.log(response.data.items);
        setVideos(response.data.items)
        
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
    <Container my="10" maxW={"container.lg"}>
        <Heading my={5}>{query } Tutorial's</Heading>
    <Stack direction={["column","row"]}>
    {
        videos.slice(0,3).map(e => <YouTubeVideoCard key={e.views} video={e} />)
    }
    </Stack>
    </Container>
    </>
  )
}

export default YoutubeContainer