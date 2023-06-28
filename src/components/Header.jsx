import { Box, Image } from '@chakra-ui/react';
import back from "../assets/muscle.png"
function Header() {
  return (
    <Box
      pos="fixed"
      top={0}
      left={0}
      w="100%"
      p={4}
     
      boxShadow="sm"
      zIndex={10}
    >
      <Image
      borderRadius={"50%"} src={back} alt="Logo" h={12}
       />
    </Box>
  );
}

export default Header;