import React, {useState, createContext} from 'react';

export const SmurfContext = createContext();

export const SmurfProvider = (props) => {
  const [smurfs, setSmurfs] = useState([]);

  return (
    <SmurfContext.Provider value={{smurfs}}>
      {props.children}
    </SmurfContext.Provider>
  )
}

