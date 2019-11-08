import React, {useState, useContext} from 'react'
import { SmurfContext } from '../contexts/SmurfContext'

const AddSmurf = () => {
  const {setSmurfs} = useContext(SmurfContext);
  const [input,setInput] = useState({
    name: '',
    age: '',
    height: '',
    id: ''
  });
  
  const handleInputChange = e => {
    const name = e.target.name;
    console.log('e.target', e.target);
    setInput({
      [name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    setSmurfs([{name: 'ignacio', age: '20', height: '188', id: 2}]);
  }

  // console.log('smurfs', smurfs)
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input type="text" name="name" value={input.name} onChange={handleInputChange}/>
        <input type="text" name="age" value={input.age} onChange={handleInputChange}/>
        <input type="text" name="height" value={input.height} onChange={handleInputChange}/>
        <input type="text" name="id" value={input.id} onChange={handleInputChange}/> */}
        <button>Add Smurf</button>
      </form>
    </div>
  )
}

export default AddSmurf
