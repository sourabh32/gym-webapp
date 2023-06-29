import { Box, Image } from '@chakra-ui/react';
import back from "../assets/muscle.png"
import { Link } from 'react-router-dom';
function Header() {
  return (
    <Box
      pos="fixed"
      top={0}
      left={0}
      w="100%"
      p={2}
     
      boxShadow="sm"
      zIndex={10}
    >
      <Link to="/">
      <Image
      borderRadius={"50%"} src={back} alt="Logo" h={8}
       />
      </Link>
      
    </Box>
  );
}

export default Header;