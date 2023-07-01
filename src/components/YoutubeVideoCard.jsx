import React from 'react';
import { Box, Image, Flex, Text } from '@chakra-ui/react';
import {motion} from "framer-motion"
const AnimatedBox = motion(Box)

const YouTubeVideoCard = ({ video }) => {
    
  return (
    <AnimatedBox
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    maxW="sm"  transition="0.3s" className='shadow' borderWidth="1px" borderRadius="lg" overflow="hidden">
        <a href={video.url} target='_blank'>
      <Image src={video.bestThumbnail.url} alt={video.title} />

      <Box p="4">
        <Flex align="baseline" mt={2}>
          <Text
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
          >
            {video.duration}
          </Text>
        </Flex>
        

        <Text mt={2} fontWeight="semibold" lineHeight="short">
          {video.title}
        </Text>
      </Box>
      </a>
    </AnimatedBox>
  );
};

export default YouTubeVideoCard;
