import { useContext } from "react";
import { WorkoutContext } from "../context/WorkoutContextProvider";

export const useWorkoutContext = () => {
  const context = useContext(WorkoutContext);
  if(!context) {
    throw new Error('Out of bounds')
  }

  return context;
};