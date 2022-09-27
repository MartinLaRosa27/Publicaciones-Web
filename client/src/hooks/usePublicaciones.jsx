import { useContext } from "react";
import PublicacionesProvider from "../context/PublicacionesProvider";

export const usePublicaciones = () => {
  return useContext(PublicacionesProvider);
};
