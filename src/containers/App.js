import React,{Component} from 'react';
import CardList from '../components/CardList';
import Values from './Values';
import Searchbox from '../components/Searchbox';
import { connect } from 'react-redux';
import Scrolll from '../components/Scrolll';
import { setSearchField } from '../actions';



const mapStateToProps = state => {
	return {
		searchField: state.searchField
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onsearchchange: (event)=> dispatch( setSearchField(event.target.value))
	}
}

class App extends Component
{
	
	constructor()
	{   
		super()
		
		this.state={
	        Values :[],
			searchField : ""
		}
	}

	componentDidMount(){
		fetch("https://jsonplaceholder.typicode.com/users")
		.then(response=>{return response.json()})
		.then(users=>{
			console.log(users[0]);
			this.setState({Values:users})})
		.catch(err=>console.log(err));
      }


	// onsearchchange=(event)=>{
	// 	this.setState({searchField:event.target.value})
	// }
 
   render()

	  {
       const { Values }=this.state;
       const {onsearchchange,searchField}=this.props;
       const filteredrobots=Values.filter(
                   (Values)=>{
                   	return Values.name.toLowerCase().includes(searchField.toLowerCase());
                   }


	  	          	)
// if(Values.length===0)
// {
// 	return <h1 className='tc'>Loading</h1>
// }
// else
	  { 
	  	console.log(Values);
	  	return( 
	  	  	          
	  	  	   	 <q className = 'tc bg-green shadow-20'>
	  	  			  
	  	  			  	<h1>Robofriends</h1>
	  	  			    <Searchbox searchchange={onsearchchange}/>
	  	  			    <Scrolll>
	  	  			    <CardList Values={filteredrobots} />
	  	  			    </Scrolll>
	  	  			   
	  	  		      </q>
	  	  	          );
	  }
	  }
     

 }



export default connect(mapStateToProps,mapDispatchToProps)(App);