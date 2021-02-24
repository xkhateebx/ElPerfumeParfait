import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Like = () => {
    // const[like, setLike] = useState(0);
    const [likes,setLikes] = useState("");

    useEffect( () => {
        axios.get('http://localhost:8000/api/getAllLikes')
            .then(response => setLikes((response.data)))
            .catch(error => console.log("There was an issue: ", error))

    },[])

    
    const onSubmitHandler = e =>{
        axios.put('http://localhost:8000/api/updateLike',{
            likes: likes
        })
        .then(res=>console.log(res))
        .catch(error => console.log("There was an issue: ", error))
    }
    return (
        <div>
            <form  onSubmit={ onSubmitHandler }>
            <button type="submit" onChange ={() =>setLikes(likes+1)}>Like</button>
            <p>{likes.length > 0 && likes.map((item,index)=>
                {
                    return(
                        <div key={index}>
                            <p>{item.like}</p>
                        </div>
                    )
                }
                )
                }</p>
            </form>
        </div>
    )
}
// const Like = () => {
//     const [like,setLike] = useState(0);
    
//     const onSubmitHandler = e =>{
//         axios.post('http://localhost:8000/api/addLike',{
//             like: like
//         })
//         .then(res=>console.log(res))
//     }
//     useEffect( () => {
//         axios.get('http://localhost:8000/api/getAllLikes')
//             .then(response => setLike((response.data)))
//     },[])

//     return (
//         <div>
//             <form  onSubmit={ onSubmitHandler }>
//             <button type="submit" onClick ={() =>setLike(like+1)}>Like
//             {like.length > 0 && like.map((item,index)=>
//                 {
//                     return(
//                         <div key={index}>
//                             <p>{item.like}</p>
                            
//                         </div>
//                     )
//                 }
//                 )
//                 }</button>
//             </form>
//         </div>
//     )
// }

export default Like
