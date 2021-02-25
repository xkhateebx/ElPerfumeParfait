import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';
import _ from 'lodash';
import ReactImageMagnify from 'react-image-magnify';
import '../../../src/components/style.css';
import LikeButton from '../../components/LikeButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Icon } from '@material-ui/core';

//Tabs Imports
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

export default props => {
    const [perfume, setPerfume] = useState({})
    const [likes, setLikes] = useState(0)

    //Array of All Perfumes
    const [perfumes, setPerfumes] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/perfume/" + props.id)
            .then(res => {
              setPerfume(res.data);
              setLikes(res.data.likes);
            })
    }, [])

  const addLikes = (e) =>{
    e.preventDefault();
    alert(`You Liked"${perfume.name}"`); 
    let likesCount = likes + 1;
    axios.put('http://localhost:8000/api/updateLike/'+ props.id,{
      likes: likesCount
    })
    .then(res=> {
        console.log(res)
        setLikes(res.data.likes);
        console.log(res)
        
        
    })
    .catch(error => console.log("There was an issue: ", error))
}

  //Tabs Start//
    const [store, setStore] = React.useState({ test1: "", test2: "", test3: "" });
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
      setValue(newValue);
    };
    const onSubmit = (
      data: Partial<{ test1: string; test2: string; test3: string }>
    ) => {
      setStore({
        ...store,
        ...data
      });
    };
    console.log(store);
  //Tabs End//

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
                      <span className="currency" ><h1>{perfume.name}</h1></span>
                      <span className="num"></span>
                    </var>
                  </div>
                  <dl>
                  </dl>
                  <center>
                  <dl className="row">
                  {/* <center> */}
                    <dt className="col-sm-12">
                      <AppBar position="static" style={{backgroundColor: "#49a6e9",color: "white-smoke"}}>
                        <Tabs
                          value={value}
                          onChange={handleChange}
                          aria-label="simple tabs example"
                        >
                          <Tab label="Company" />
                          <Tab label="Describtion" />
                          <Tab label="Content" />
                          <Tab label="" />
                        </Tabs>
                      </AppBar>
                      <TabPanel value={value} index={0}>
                        {perfume.company}
                        {/* <Form1 onSubmit={onSubmit} store={store} /> */}
                      </TabPanel>
                      <TabPanel value={value} index={1}>
                        {perfume.description}
                        {/* <Form2 onSubmit={onSubmit} store={store} /> */}
                      </TabPanel>
                      <TabPanel value={value} index={2}>
                        {perfume.content}
                        {/* <Form3 onSubmit={onSubmit} store={store} /> */}
                      </TabPanel>
                      </dt>
                      {/* </center> */}
                    {/* <dt className="col-sm-3">Company</dt> */}
                  </dl>
                  </center>
                  <hr />
                  <h4><p>Where to buy</p></h4>
                  <div className="row">
                    <div className="col-sm-5">
                      <dl className="dlist-inline">
                        <a href={perfume.wheretobuy}><dt> <img src={`../images/amazon.png`} width='100px'/> </dt></a>
                        <dd className="pl-2">
                          <span className="form-check-label"></span>
                        </dd>
                      </dl>
                    </div>
                    <div className="col-sm-7">
                      <dl className="dlist-inline">
                        <a href={perfume.wheretobuy2}><dt> <img src={`../images/ebay.png`} width='100px'/> </dt></a>
                        <dd>
                            <span className="form-check-label"></span>
                        </dd>
                        </dl>
                    </div>
                    </div>
                    <hr />
                    <LikeButton perfumeId={perfume._id} addLikesHandler={addLikes} />
                    <p style={{color:"#f50057"}}>{likes}<FavoriteIcon className="heart"/></p>
                </article>
                </aside>
            </div>
            </div>
        
    );
    };

