import { createContext, useState, useEffect } from "react";
import { exercises } from "../utils/exercisesData";
import axios from "axios";
import { exerciseOptions } from "../utils/apiOptions";
export const exreciseContext = createContext({
  fetchedExercise: [],
  setInputTerm: "",
  displayExercise: [],
  exerciseToDisplay:[],
  exerciseId:0
});

export const ExreciseProvider = ({ children }) => {
  const [fetchedExercise, setFetchedExrecise] = useState([]);
  const [inputTerm, setInputTerm] = useState("");
  const [displayExercise, setDisplayExercise] = useState(fetchedExercise);
 
  

  
  const handleSearch = () => {
    if (inputTerm === "") {
      setDisplayExercise(fetchedExercise);
    }
    const searchedItem = fetchedExercise.filter(
      (exercise) =>
        exercise.name.toLowerCase().includes(inputTerm) ||
        exercise.target.toLowerCase().includes(inputTerm) ||
        exercise.equipment.toLowerCase().includes(inputTerm) ||
        exercise.bodyPart.toLowerCase().includes(inputTerm)
    );
    setDisplayExercise(searchedItem);
  };

 

 


  useEffect(() => {
    const fetchExrecise = async (options) => {
      try {
        const { data } = await axios.request(options);
        setFetchedExrecise(data);
        setDisplayExercise(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchExrecise(exerciseOptions);
  }, []);
  useEffect(() => {
    if (inputTerm !== "") {
      handleSearch();
    }
  }, [inputTerm]);

  

 
  const value = { fetchedExercise, setInputTerm, displayExercise, };
  return (
    <exreciseContext.Provider value={value}>
      {children}
    </exreciseContext.Provider>
  );
};
