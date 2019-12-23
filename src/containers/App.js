import React,{Component} from 'react';
import CardList from '../components/CardList';
//import {Values} from '../Values';
import Searchbox from '../components/Searchbox';

import Scrolll from '../components/Scrolll';


class App extends Component
{
	
	constructor()
	{   
		super()
		console.log("it's working ");
		this.state={
	        Values :[],
			searchfield : ""
		}
	}
	onsearchchange=(event)=>
	{
		
		this.setState({ searchfield: event.target.value })
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(users=>this.setState({Values:users}));
	}

   render()

	  {
       const { Values,searchfield }=this.state;
       const filteredrobots=Values.filter(
                   Values=>{
                   	return Values.name.toLowerCase().includes(searchfield.toLowerCase());
                   }


	  	          	)
if(Values.length===0)
{
	return <h1 className='tc'>Loading</h1>
}
else
	  { return( 
	  	  	          
	  	  	   	 <q className = 'tc bg-green shadow-20'>
	  	  			  
	  	  			  	<h1>Robofriends</h1>
	  	  			    <Searchbox searchchange={this.onsearchchange}/>
	  	  			    <Scrolll>
	  	  			    <CardList Values={filteredrobots} />
	  	  			    </Scrolll>
	  	  			   
	  	  		      </q>
	  	  	          );}
	  }
     

 }



export default App;