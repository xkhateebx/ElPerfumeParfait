import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';
import _ from 'lodash';
import ReactImageMagnify from 'react-image-magnify';
import '../../src/components/style.css';
import LikeButton from '../components/LikeButton';

export default props => {
    const [perfume, setPerfume] = useState({})
    const [likes, setLikes] = useState(0)

    //Array of All Perfumes
    const [perfumes, setPerfumes] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/perfume/" + props.id)
            .then(res => {
              setPerfume(res.data);
              setLikes(res.data);
            })
    }, [])

    const addLikes = (perfumeId,perfumeName) => {
      setLikes(perfumes.filter(perfume => perfume._id == perfumeId))
      setLikes(perfumes.filter(perfume => perfume.name == perfumeName))
      alert(`You liked "${perfumeName}"`);
  }
    return (
          <div className="card mb-3">
            <div className="row no-gutters">
              <aside className="col-sm-5 border-right">
                <div>
                <img src={`../images/${perfume.image}.jpg`} alt={perfume.image} width="65%"/>
                </div>
              </aside>
              <aside className="col-sm-7">
                <article className="p-5">
                  <h2 className="title mb-2"></h2>
                  <div className="mb-3">
                    <var className="price h3 text-success">
                      <span className="currency" ><h1>{perfume.name} </h1></span>
                      <span className="num"></span>
                    </var>
                  </div>
                  <dl>
                  </dl>
                  <dl className="row">
                    <dt className="col-sm-3">Company</dt>
                    <dd className="col-sm-9">{perfume.company}</dd>
                  </dl>
                  <hr />
                  <div className="row">
                    <div className="col-sm-5">
                      <dl className="dlist-inline">
                        <a href={perfume.wheretobuy}><dt>Where to buy <img src={`../images/amazon.png`} width='100px'/> </dt></a>
                        <dd className="pl-2">
                          <span className="form-check-label"></span>
                        </dd>
                      </dl>
                    </div>
                    <div className="col-sm-7">
                      <dl className="dlist-inline">
                        <a href={perfume.wheretobuy}><dt> <img src={`../images/ebay.png`} width='100px'/> </dt></a>
                        <dd>
                          <span className="form-check-label"></span>
                        </dd>
                      </dl>
                    </div>
                  </div>
                  <hr />
                  <h2>{perfume.description}</h2>
                  <LikeButton perfumeId={perfume._id} successCallback={()=>addLikes(perfume._id,perfume.name)} />
                  From Data Base
                  <p>Number of Likes: {perfume.likes}</p>
                  ---------
                </article>
              </aside>
            </div>
          </div>
        
      );
    };

