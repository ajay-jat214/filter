import React from 'react';
import Cards from './Cards';
//import Values from './Values';

const CardList=({Values}) => {
  
	return(
		<div>
          {
          	Values.map((users,i)=>{
          	                    	return(
          	                    		<Cards
          	                    		key={i} 
          	                    		id={Values[i].id} 
          	                    		name={Values[i].name} 
          	                    		email={Values[i].email} 
          	                    		/>
          	          
          	          
          	                    		  );
          	                      }
          	           )
                                   
           }
         </div>

          );

}

export default CardList;