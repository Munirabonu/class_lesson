import PostList from "./PostList";

export default function Posts(post) {
    const {callback,delet} =post
    return (
        <div>
            {post.post.map((props)=>(
                <PostList key={props.id} name={props.name} id={props.id} callbackpost={callback} deletePost={delet}/>

            ))}
        </div>
    )
}
