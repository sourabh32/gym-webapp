import { Box, Image } from "@chakra-ui/react";
import React, { useContext } from "react";
import { exreciseContext } from "../context/ExerciseContext";
import { motion } from "framer-motion";


const AnimatedBox = motion(Box);
const MenuCard = ({ img, title, refe }) => {
  const { setInputTerm } = useContext(exreciseContext);
  const handleClick = () => {
    setInputTerm(title);

    refe.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <AnimatedBox
    initial={{ y:100,opacity: 0 }}
    whileInView={{y:0 ,opacity: 1 }}
 
      p={5}
      className="shadow"
      onClick={handleClick}
      borderRadius={10}
      transition="0.3s"
      cursor={"pointer"}
      bgColor={"gray.200"}
      w="6rem"
      h="6rem"
    >
      <Image src={img} />
    </AnimatedBox>
  );
};

export default MenuCard;
