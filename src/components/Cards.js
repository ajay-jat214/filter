import React from 'react';
  
const Cards=({name,email,id})=>{
	
return(

<div className=' tc grow pa3 ma2 br3  bg-light-green dib shadow-5 bw2'>
<img  src={`https://robohash.org/${id}?100x100`} alt='robots'/>

<div>
<h5>{name}</h5>
<p>{email}</p>
</div>

</div>
);

}

export default Cards;