"use client";

import { MovieInterfaceDB } from "@/interfaces/MovieInterfaceDB";
import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";

type MoviesContextType = {
  userMovies: MovieInterfaceDB[] | never[];
  setUserMovies: any;
};

const initialState = {
  userMovies: [],
  setUserMovies: () => {},
};

export const MoviesContext = createContext<MoviesContextType>(initialState);

const MoviesContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [userMovies, setUserMovies] = useState([]);

  return (
    <MoviesContext.Provider value={{ userMovies, setUserMovies }}>
      {children}
    </MoviesContext.Provider>
  );
};

export const useMoviesContext = () => {
  const context = useContext(MoviesContext);
  if (!context) {
    throw new Error(
      "useMoviesContext must be used within a ThemeContextProvider",
    );
  }
  return context;
};

export default MoviesContextProvider;
