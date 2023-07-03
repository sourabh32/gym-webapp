import { createContext, useState, useEffect } from "react";

import axios from "axios";
import { exerciseOptions } from "../utils/apiOptions";
export const exreciseContext = createContext({
  fetchedExercise: [],
  setInputTerm: "",
  displayExercise: [],
  exerciseToDisplay:[],
  exerciseId:0,
  loading:true,
  filterExercises:()=>{}
});

export const ExreciseProvider = ({ children }) => {
  const [fetchedExercise, setFetchedExrecise] = useState([]);
  const [inputTerm, setInputTerm] = useState("");
  const [displayExercise, setDisplayExercise] = useState(fetchedExercise);
 const [loading,setLoading] = useState(true)
  



 const filterExercises = () => {
  if (inputTerm === "") {
    setDisplayExercise(fetchedExercise);
    setLoading(false);
    return;
  }
  setLoading(true);
  const searchedItem = fetchedExercise.filter(
    (exercise) =>
      exercise.name.toLowerCase().includes(inputTerm) ||
      exercise.target.toLowerCase().includes(inputTerm) ||
      exercise.equipment.toLowerCase().includes(inputTerm) ||
      exercise.bodyPart.toLowerCase().includes(inputTerm)
  );
  setDisplayExercise(searchedItem);
  setLoading(false);
};
  
  // const handleSearch = () => {
  //   if (inputTerm === "") {
     
  //     setDisplayExercise(fetchedExercise);
  //     setLoading(false)
  //   }
  //   setLoading(true)
  //   const searchedItem = fetchedExercise.filter(
  //     (exercise) =>
  //       exercise.name.toLowerCase().includes(inputTerm) ||
  //       exercise.target.toLowerCase().includes(inputTerm) ||
  //       exercise.equipment.toLowerCase().includes(inputTerm) ||
  //       exercise.bodyPart.toLowerCase().includes(inputTerm)
  //   );
  //   setDisplayExercise(searchedItem);
  //   setLoading(false)
  // };

 useEffect(()=>{
filterExercises()
 },[inputTerm])

 


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
 

  

 
  const value = { fetchedExercise, setInputTerm, displayExercise,loading,filterExercises };
  return (
    <exreciseContext.Provider value={value}>
      {children}
    </exreciseContext.Provider>
  );
};
