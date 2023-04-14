import React from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
// import { robots } from './robots';
import './App.css';
import Scroll from '../Components/Scroll';

//Since app is the core of application, make it a class and a react component, and then make constructor declaring two variables as states because they change state. 
class App extends React.Component {
    constructor () {
     super()
     this.state = {
        robots: [], //array of robots
         searchfield: '' //search field in search box
     }
    }
    //lifecycle method. happens after DOM is created
    componentDidMount () { 
        fetch('https://jsonplaceholder.typicode.com/users') //gets dummy data from url
        .then(response=> response.json()) 
        .then(users=> this.setState({ robots: users}));    //set robots variables to user from dummy data
       
    }
    //function to set search box data searchfield
    onSearchChange = (event) => {  
        this.setState({ searchfield: event.target.value })

    }
    //lifecycle method, happens after componentdidmount. 
    render() {  
      const { robots, searchfield } = this.state;  //set robots and search variables to state type variables because they change
        //filter robots array according to searchfield, and set everything to lower case
        const roboFilter = robots.filter(roboSearch => {
            return roboSearch.name.toLowerCase().includes(searchfield.toLowerCase());  //set robot name to lowercase, and filter by searchfield data
        })
        return !robots.length ? //if no robots
            <h1>Loading Robots</h1> :

        //return html data and searchbox, scroll, and cardlist component. Cardlist is a child class of scroll. 
       (
            <div className='tc'>
              <h1 className='f1'>RoboFriends</h1>
              <SearchBox searchChange={this.onSearchChange}/>  
              <Scroll>
                <CardList robots={roboFilter}/>
              </Scroll>
             
            </div>
             );
    }
  
}

//always export. 
export default App;