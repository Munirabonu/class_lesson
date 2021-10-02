export default function PostList (post) {
    const {callbackpost,name,deletePost,id}=post
    return (
        <div>
            <p onClick={callbackpost}>{name}</p>
            <button onClick={()=>deletePost(id)} >ochirish</button>
        </div>
    )

}