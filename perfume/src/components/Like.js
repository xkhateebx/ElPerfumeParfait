import React, {useState, useEffect} from 'react'
import axios from 'axios';
import styled from 'styled-components'

const Like = () => {
    const [likes,setLikes] = useState();

    useEffect( () => {
        axios.get('http://localhost:8000/api/getAllLikes')
            .then(response => setLikes((response.data)))
            .catch(error => console.log("There was an issue: ", error))

    },[])

    const onSubmitHandler = e =>{
        axios.put('http://localhost:8000/api/updateLike/:id',{
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
                        <>
                        <Wrapper >
                        <button className='btn hero-btn'>
                        <i className="fa fa-shopping-cart"><Like/></i>
                        </button>
                        </Wrapper>
                        <div key={index}>
                            <p>{item.like}</p>
                        </div>
                        </>
                    )
                }
                )
                }</p>
            </form>
        </div>
    )
}

const Wrapper = styled.section`
.btn {
  text-transform: uppercase;
  background: var(--clr-primary-5);
  color: var(--clr-primary-10);
  padding: 0.375rem 0.75rem;
  letter-spacing: var(--spacing);
  display: inline-block;
  font-weight: 400;
  transition: var(--transition);
  font-size: 0.875rem;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
  border-color: transparent;
}
.btn:hover {
  color: var(--clr-primary-1);
  background: var(--clr-primary-7);
}
`
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
