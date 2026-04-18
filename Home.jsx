import React, {useEffect, useState} from "react";
import {fetchTrending, fetchTopRated} from "../Services/api"; 
import MovieRow from "../Components/MovieRow"; 
import { useNavigate } from "react-router-dom";


function HomePage() { 
  const [trending, setTrending] = useState([]); 
  const [topRated, setTopRated] = useState([]); 
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    
  const loadData = async () => {
    const trendingRes = await fetchTrending();
    const topRatedRes = await fetchTopRated();

    console.log("Trending:", trendingRes.data);
    console.log("TopRated:", topRatedRes.data);

    setTrending(trendingRes.data);
    setTopRated(topRatedRes.data);
  };

  loadData();
    }, []); 
    return (
       <div>
         <MovieRow title="Trending" movies={trending} /> 
         <MovieRow title="TopRated" movies={topRated} /> 
         </div> ); 
         }

export default HomePage;