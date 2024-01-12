import React from "react";
import CreatorsList from "../components/CreatorsList";
const Creators = () =>{
    const CREATORS = [{
    id: 'u1', 
    name: 'Sharvari Mahurkar', 
    image: "https://footwearnews.com/wp-content/uploads/2022/04/travis-scott.jpg",
    title:"Youtuber",
    },
    {
    id: 'u2', 
    name: 'Prathamesh Rathore', 
    image: "https://footwearnews.com/wp-content/uploads/2022/04/travis-scott.jpg",
    title:"Influencer",
    }
    
    ];
    return <CreatorsList items={CREATORS}/>
    
};

export default Creators;