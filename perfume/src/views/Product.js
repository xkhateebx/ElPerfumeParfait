import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import { FaSearch } from 'react-icons/fa'
import styled from 'styled-components'

    
const Product = () => {
const [perfumes, setPerfumes] = useState([])

    useEffect( () => {
        axios.get('http://localhost:8000/api/allPerfumes')
            .then(response => setPerfumes((response.data)))
            .catch(error => console.log("There was an issue: ", error))
    },[])

        return (
          
<Wrapper  >
                {perfumes.length > 0 && perfumes.map((item,index)=>
                {
                    return(
                      <div key={index} >
                        
                        <div className='container'   >
                          <center>
                          <img src={`../images/${item.image}.jpg`} alt={item.image}/>
                          </center>
                          <Link to={`/products/${item.id}`} className='link'>
                            <FaSearch />
                          </Link>
                        </div>
                        <footer>
                          <h3>{item.name}</h3>
                          <p>{item.company}</p>
                        </footer>
                        </div>
                        
                    )
                    
                    
                }
                
                
                                                )
                                                
                }
                
                
                </Wrapper>
                
    )
    
}

const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-white);
    border-radius: var(--radius);
  }
  img {
    width: 230px;
    heigh:230px;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  .footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .footer h5,
  .footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

  .footer p {
    color: var(--clr-primary-10);
    letter-spacing: var(--spacing);
  }
`
export default Product;
