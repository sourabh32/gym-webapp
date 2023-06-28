import { createContext, useState, useEffect } from "react";
import { exercises } from "../utils/exercisesData";
import axios from "axios";
import { exerciseOptions } from "../utils/apiOptions";
export const exreciseContext = createContext({
  fetchedExercise: exercises,
  setInputTerm:""
});

export const ExreciseProvider = ({ children }) => {
  const [fetchedExercise, setFetchedExrecise] = useState(exercises);
  const [inputTerm,setInputTerm] = useState("")

  useEffect(()=>{
console.log(inputTerm)
  },[inputTerm])

  useEffect(() => {
    const fetchExrecise = async (options) => {
      try {
        const { data } = await axios.request(options);
        setFetchedExrecise(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchExrecise(exerciseOptions);
  }, []);
  const value = { fetchedExercise,setInputTerm };
  return (
    <exreciseContext.Provider value={value}>
      {children}
    </exreciseContext.Provider>
  );
};
