import React, {useState, useEffect} from 'react';
import Restaurants from './Restaurants';
import './style.css';

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [sortedAsc, setSortedAsc] = useState(false);

  useEffect(() => {
    fetch('https://alicefritz.github.io/summer2020/restaurants.json')
    .then(data => data.json())
    .then(data =>
      setRestaurants(data.restaurants.map(restaurant => restaurant)))
  }, []);

  function sortRestaurants(){
    const sortButton = document.getElementById('sortByAscButton');
    if(sortedAsc === false){
        restaurants.sort((a, b) => {
            if (a.name < b.name){
                return -1;
            } else if (a.name > b.name){
                return 1;
            } else{
                return 0;
            }
        });
        setSortedAsc(true);
        sortButton.innerHTML = "Sort by Z-A";
    }else if(sortedAsc === true){
        restaurants.sort((a, b) => {
            if (a.name > b.name){
                return -1;
            } else if (a.name < b.name){
                return 1;
            } else{
                return 0;
            }
        });
        setSortedAsc(false);
        sortButton.innerHTML = "Sort by A-Z";
    }
    setRestaurants(restaurants.map(restaurant => restaurant))
  }

  return (
    <div id="main">
      <button className="sortButton"  id="sortByAscButton"onClick={() => sortRestaurants()}>Sort by A-Z</button>
      <Restaurants restaurants={restaurants}/>
    </div>
  );
}

export default App;
