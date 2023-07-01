import { Box, Image } from '@chakra-ui/react';
import back from "../assets/muscle.png"
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

const AnimatedImage = motion(Image)
function Header() {
  return (
    <Box
      pos="fixed"
      top={0}
      left={0}
      w="100%"
      p={2}
     
      zIndex={10}
    >
      <Link to="/">
      <AnimatedImage 
      animate={{opacity:1}}
      initial={{opacity:0.5}}
       transition="0.3s"
       className='shadow'
      borderRadius={"50%"} src={back} alt="Logo" h={8}
       />
      </Link>
      
    </Box>
  );
}

export default Header;