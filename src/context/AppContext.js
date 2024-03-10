import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const Contexts = ({ children }) => {
  const [listMovie, setListMovie] = useState([]);
  useEffect(() => {
    const data = async () => {
      try {
        const res = await axios.get(
          "https://be-movie-lake.vercel.app/v1/movies"
        );
        setListMovie(res.data.allMovies);
      } catch (error) {
        console.log(error);
      }
    };
    data();
  }, []);

  return (
    <AppContext.Provider value={{ listMovie }}>{children}</AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { Contexts, useAppContext };
