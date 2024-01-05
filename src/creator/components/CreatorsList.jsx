import React from "react";
import CreatorsItem from "./CreatorItem";
const CreatorsList = props =>{
    if(props.items.length == 0){
        return <div className="center" ><h2>No Creators Found</h2></div>
    }

    return <ul className="creator-list">
        {props.items.map(creator => {
            return <CreatorsItem 
            key={creator.id} 
            id={creator.id} 
            image={creator.image} 
            name={creator.name}
            title={creator.title}
            />
        })}
    </ul>
}

export default CreatorsList