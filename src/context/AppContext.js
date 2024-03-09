import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const Contexts = ({ children }) => {
  const [listMovie, setListMovie] = useState([]);
  useEffect(() => {
    const data = async () => {
      try {
        const res = await axios.get(
          "https://teachingk18.github.io/WF_Test_ver2/data.json"
        );
        setListMovie(res.data);
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
