import { createContext, useState, useEffect } from "react";
import { exercises } from "../utils/exercisesData";
import axios from "axios";
import { exerciseOptions } from "../utils/apiOptions";
export const exreciseContext = createContext({
  fetchedExercise: exercises,
  setInputTerm:"",
  displayExercise:exercises
});

export const ExreciseProvider = ({ children }) => {
  const [fetchedExercise, setFetchedExrecise] = useState(exercises);
  const [inputTerm,setInputTerm] = useState("")
  const [displayExercise,setDisplayExercise] = useState(fetchedExercise)


  const handleSearch = () => {
    if(inputTerm === ""){
      setDisplayExercise(fetchedExercise)
    }
    const searchedItem = fetchedExercise.filter(
      (exercise) =>
        exercise.name.toLowerCase().includes(inputTerm) ||
        exercise.target.toLowerCase().includes(inputTerm) ||
        exercise.equipment.toLowerCase().includes(inputTerm) ||
        exercise.bodyPart.toLowerCase().includes(inputTerm)
    );
    setDisplayExercise(searchedItem)
  
  }


  

  useEffect(()=>{
    if(inputTerm !== ""){
      handleSearch()
    }

  },[inputTerm])

  useEffect(() => {
    const fetchExrecise = async (options) => {
      try {
        const { data } = await axios.request(options);
        setFetchedExrecise(data);
        setDisplayExercise(data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchExrecise(exerciseOptions);
  }, []);
  const value = { fetchedExercise,setInputTerm,displayExercise };
  return (
    <exreciseContext.Provider value={value}>
      {children}
    </exreciseContext.Provider>
  );
};
