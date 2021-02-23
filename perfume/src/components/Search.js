import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import '../App.css';


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
     
      <input className='search'
        type="text"
        placeholder="Search Perfumes"
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredPerfumes.map((perfume, idx) => (
        <PerfumeList key={idx} {...perfume} />
      ))}
    </div>
  );
}

const PerfumeList = (props) => {
  const { name, image } = props;

  return (
    <>
      <p>
        <h1>{name} <img src={`../images/${image}.jpg`} width='10%'  height='10%'/></h1>
        <hr></hr>
      </p>
    </>
  );
};

const rootElement = document.getElementById("root");
export default Search;