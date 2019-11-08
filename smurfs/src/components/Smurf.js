import React, {useContext} from 'react'
import { SmurfContext } from '../contexts/SmurfContext'

const Smurf = (props) => {
  const { smurfs } = useContext(SmurfContext);

  return (
    <div>
      <h2>{props.smurf.name}</h2>
    </div>
  )
}

export default Smurf
