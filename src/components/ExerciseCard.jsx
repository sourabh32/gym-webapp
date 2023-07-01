import { Box, Image, Text, Badge } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import muscle from "../assets/muscle.png";
import {motion} from "framer-motion"

const AnimatedImage = motion(Image);
const AnimatedBox = motion(Box);
const ExerciseCard = ({ name, img, bodyPart, equipment, id }) => {
  return (
    <Link to={`/exercise/${id}`}>
      <AnimatedBox
 initial={{ y:50,opacity: 0 }}
 whileInView={{y:0 ,opacity: 1 }}

        position="relative"
        borderRadius={10}
        transition="0.3s"
        cursor="pointer"
        className="shadow"
        w="full"
        
      >
        <AnimatedImage
          borderRadius={10}
          style={{ aspectRatio: '16/9',loading: "lazy"}  }
          initial={{ opacity: 0.8 }}
         whileInView={{ opacity: 1 }}
          h={[60,40]}
          src={img ? img : muscle}
          alt="Exercise Image"
        />
        <Text
        fontFamily={"poppins"}
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          textAlign="center"
          px={2}
          py={1}
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          fontWeight={"600"}
          textTransform={"capitalize"}
          color={"#0A6EBD"}
        >
          {name}
        </Text>
        <Badge
          fontFamily={"poppins"}
          variant="subtle"
          colorScheme="purple"
          position="absolute"
          top={[4, 2]}
          right={[4, 2]}
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {bodyPart}
        </Badge>
        <Badge
          fontFamily={"poppins"}
          variant="subtle"
          colorScheme="green"
          position="absolute"
          top={[4, 2]}
          left={[4, 2]}
        >
          {equipment}
        </Badge>
      </AnimatedBox>
    </Link>
  );
};

export default ExerciseCard;
