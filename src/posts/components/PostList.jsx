import React from "react";
import PostItem from "./PostItem";

const PostList = props => {
    if(props.items.length === 0) {
        return <div className="bg-black rounded-lg shadow-md p-4 my-4 flex items-center">
            <h2 className="text-center w-full text-lg font-semibold text-white">No Posts Found</h2>
            <button className=" text-white">Create one?</button>
        </div>
    }

    return (<ul>
        {props.items.map(post => (
        <PostItem 
            key={post.id} 
            id={post.id} 
            image={post.imageUrl} 
            title={post.title} 
            description={post.description} 
            creatorId={post.creatorId}/>
        ))}
    </ul>)
}

export default PostList;