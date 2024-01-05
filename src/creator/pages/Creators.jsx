import React from "react";
import CreatorsList from "../components/CreatorsList";
const Creators = () =>{
    const CREATORS = [{
    id: 'c1', 
    name: 'Casey Neistat', 
    image: "https://footwearnews.com/wp-content/uploads/2022/04/travis-scott.jpg",
    title:"Youtuber",
    },
    {
        id: 'c2', 
        name: 'Nathaniel Drew', 
        image: "https://footwearnews.com/wp-content/uploads/2022/04/travis-scott.jpg",
        title:"Influencer",
    }
    
    ];
    return <CreatorsList items={CREATORS}/>
    
};

export default Creators;