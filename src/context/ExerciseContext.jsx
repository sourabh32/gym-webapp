import { createContext, useState, useEffect } from "react";

import axios from "axios";
import { exerciseOptions } from "../utils/apiOptions";
export const exreciseContext = createContext({
  fetchedExercise: [],
  setInputTerm: "",
  displayExercise: [],
  exerciseToDisplay:[],
  exerciseId:0,
  loading:true
});

export const ExreciseProvider = ({ children }) => {
  const [fetchedExercise, setFetchedExrecise] = useState([]);
  const [inputTerm, setInputTerm] = useState("");
  const [displayExercise, setDisplayExercise] = useState(fetchedExercise);
 const [loading,setLoading] = useState(true)
  

  
  const handleSearch = () => {
    if (inputTerm === "") {
     
      setDisplayExercise(fetchedExercise);
      setLoading(false)
    }
    setLoading(true)
    const searchedItem = fetchedExercise.filter(
      (exercise) =>
        exercise.name.toLowerCase().includes(inputTerm) ||
        exercise.target.toLowerCase().includes(inputTerm) ||
        exercise.equipment.toLowerCase().includes(inputTerm) ||
        exercise.bodyPart.toLowerCase().includes(inputTerm)
    );
    setDisplayExercise(searchedItem);
    setLoading(false)
  };

 

 


  useEffect(() => {
    const fetchExrecise = async (options) => {
      try {
        const { data } = await axios.request(options);
        setFetchedExrecise(data);
        setDisplayExercise(data);
        setLoading(false)
      } catch (error) {
        console.error(error);
      }
    };

    fetchExrecise(exerciseOptions(import.meta.env.VITE_REACT_APP_EXERCISE));
  }, []);
  useEffect(() => {
    if (inputTerm !== "") {
      
      handleSearch();
    }
  }, [inputTerm]);

  

 
  const value = { fetchedExercise, setInputTerm, displayExercise,loading };
  return (
    <exreciseContext.Provider value={value}>
      {children}
    </exreciseContext.Provider>
  );
};
