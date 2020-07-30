import React from 'react';


const searchbox=({searchchange})=>{
return(
	<div>
	<input
	 className='tc bg-lightest-blue ma3 pa3 dib' 
	 type='search' 
	 placeholder='Search Robots'
	 onChange={searchchange}
	 />

	 </div>
	 );

}
export default searchbox;