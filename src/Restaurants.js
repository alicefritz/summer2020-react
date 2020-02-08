import React from 'react'

export default function Restaurants({restaurants}) {


    function isOnline(restaurant){
        if(restaurant.online === true){
            return 'online open';
        }else{
            return 'online closed';
        }
    }

    function setOnlineText(restaurant){
        if(restaurant.online === true){
            return 'Online';
        }else{
            return 'Closed';
        }
    }

    function setTags(tags){
        let stringOfTags = "";
        tags.forEach((tag, i) => {
            if(i < tags.length-1){
                stringOfTags+= tag + ", ";
            }else{
                stringOfTags+= tag;
            }
           
        });
        return stringOfTags;
    }
    return (
        <div id="restaurants">
            {restaurants.map(restaurant => (
                <div className="restaurantCard" key={restaurant.name}>
                    <img className="restaurantImage" src={restaurant.image} alt=""/>
                    <h3 className="restaurantTitle">{restaurant.name}</h3>
                    <div className="tags">{setTags(restaurant.tags)}</div>
                    <div className={isOnline(restaurant)}>{setOnlineText(restaurant)}</div>
                </div>
            ))}
        </div>
    )
}
