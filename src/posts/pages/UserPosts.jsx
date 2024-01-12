import React from "react";
import { useParams } from "react-router-dom";
import PostList from "../components/PostList";

const DUMMY_POSTS = [
    {
        id:'p1',
        title:'Visited the eiffiel tower today',
        description:'Today, I took a train from hamburg where to live to paris just to witness this beauty, if you\' should take the route number 6 train to witness the tower enroute!',
        imageUrl:'https://i.pinimg.com/564x/3a/f3/49/3af3493876130e9ad38d1a9e93c66a2f.jpg',
        creatorId:'u1',
    },
    {
        id:'p2',
        title:'Visited the Twin Towers today',
        description:'There wasn\'t anything left to see all thanks to the maksud guys :(',
        imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/800px-Empire_State_Building_%28aerial_view%29.jpg',
        creatorId:'u2',
    }
];

const UserPosts = () => {
    const {creatorId} = useParams();
    const loadedPosts = DUMMY_POSTS.filter(post => post.creatorId==creatorId)
    return <PostList items={loadedPosts} />;
}

export default UserPosts;