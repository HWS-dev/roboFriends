//this component set up the list of cards. 
import React from 'react';
import Card from './Card';

//passes robots as the 'props'
const CardList = ({ robots }) => {
   
    return (
        <div>
            {
            //loops through array assigns robot parameters to robot object
            robots.map((user, i) => {
                return (
                <Card 
                     key={i} 
                     id={robots[i].id} 
                     name={robots[i].name} 
                      email={robots[i].email}
                      />  
                      );
                  })
            }
        </div>

    );
}

//always export
export default CardList;