import React, {useContext} from 'react'
import Smurf from './Smurf';
import { SmurfContext } from '../contexts/SmurfContext'

const SmurfList = () => {
  const [smurfs, setSmurfs] = useContext(SmurfContext);

	return (
		<div>
      {console.log('list', smurfs)}
      {smurfs.map(smurf => (
        <Smurf key={smurf.id} smurf={smurf}/>
      ))}
		</div>
	);
};

export default SmurfList;
