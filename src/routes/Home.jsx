import React, { useRef } from "react";

import SearchExercises from "../components/SearchExercises";
import ExercisesMenu from "../components/ExercisesMenu";

const Home = () => {
  const exerciseMenu = useRef(null);
  return (
    <>
      <SearchExercises refe={exerciseMenu} />
      <ExercisesMenu refe={exerciseMenu} />
    </>
  );
};

export default Home;
