import React, {useEffect, useContext} from 'react'
import Smurf from './Smurf';
import { SmurfContext } from '../contexts/SmurfContext'

const SmurfList = () => {
  const { smurfs } = useContext(SmurfContext);

	return (
		<div>
      <h1>Smurf List</h1>
      {console.log('list', smurfs)}
      {smurfs.map(smurf => (
        <Smurf key={smurf.id} smurf={smurf}/>
      ))}
		</div>
	);
};

export default SmurfList;
