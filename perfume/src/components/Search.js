import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Link } from '@reach/router';
import '../App.css';
import SearchIcon from '@material-ui/icons/Search';

function Search() {
  const [perfume, setPerfume] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredPerfumes, setFilteredPerfumes] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8000/api/allPerfumes")
      .then((res) => {
        setPerfume(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setFilteredPerfumes(
      perfume.filter((perfume) =>
        perfume.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, perfume]);

  if (loading) {
    return <p>Loading Perfumes...</p>;
  }

  return (
    <div className="App">
      <SearchIcon style={{color: "silver",fontSize: "extraLarge"}}/>
      <input className='search'
        type="text"
        placeholder="Search Perfumes ..."
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredPerfumes.map((perfume, idx) => (
        <PerfumeList key={idx} {...perfume} />
      ))}
    </div>
  );
}

const PerfumeList = (props) => {
  const { id, name, image } = props;

  return (
    <>
      <p>
        <h2><Link to={"/products/"+id}>{name}</Link><img src={`../images/${image}.jpg`} width='8%'  height='8%'/></h2>
        <hr></hr>
      </p>
    </>
  );
};

const rootElement = document.getElementById("root");
export default Search;