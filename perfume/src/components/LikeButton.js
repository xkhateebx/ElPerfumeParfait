import React, {useState, useEffect} from 'react'
import axios from 'axios';
import styled from 'styled-components'

const LikeButton = (props) => {
    const { perfumeId } =props;
    const [likes,setLikes] = useState(0);
    const [perfume, setPerfume] = useState({})
    
    //Array of All Perfumes
    const [perfumes, setPerfumes] = useState([])
    
    return (
        <div>
            {/* <form onSubmit={ onLikeHandler }> */}
                <Wrapper >
                <button onClick={props.addLikesHandler} className='btn hero-btn'>
                <i className="fa fa-shopping-cart">Like</i>
                </button>
                </Wrapper>
            {/* </form> */}
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

export default LikeButton;