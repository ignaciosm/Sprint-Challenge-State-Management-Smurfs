import React, {useState, useEffect, useContext} from 'react';
import { SmurfContext } from '../contexts/SmurfContext';
import axios from 'axios';

const AddSmurf = () => {
  const [smurfs, setSmurfs] = useContext(SmurfContext);
  const [input,setInput] = useState({});
  
  const handleInputChange = e => {
    const name = e.target.name;
    console.log('e.target', e.target);
    setInput({
      ...input,
      [name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    setSmurfs([...smurfs, input ]);

    axios.post('http://localhost:3333/smurfs', {
      name: input.name,
      age: input.age,
      height: input.height
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  // console.log('input', input)
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name: <input type="text" name="name" value={input.name} onChange={handleInputChange}/></label>
        <label>Age: <input type="number" name="age" value={input.age} onChange={handleInputChange}/></label>
        <label>Height: <input type="text" name="height" value={input.height} onChange={handleInputChange}/></label>
        {/* <input type="number" name="id" value={input.id} onChange={handleInputChange}/> */}
        <button>Add Smurf</button>
      </form>
    </div>
  )
}

export default AddSmurf
