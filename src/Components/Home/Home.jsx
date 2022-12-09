import axios from 'axios';
import { useState,useEffect , useRef} from 'react';
import { Link } from 'react-router-dom'
import {Helmet} from "react-helmet";

import './Home.css'
export default function Home() {

  const [all, setAll] = useState([]);
  const [isLoading, setIsLodaing] = useState(true);
  const tempOptions = useRef()
const dataOptions=()=>{
    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
      params: {'sort-by': 'popularity'},
      headers: {
        'X-RapidAPI-Key': '4f1c54e50dmshf91ed5579504681p1d01aajsna895d78fad75',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    axios.request(options).then(function (response) {
      console.log(response.data);
      setAll(response.data);
      setIsLodaing(false)
    }).catch(function (error) {
      console.error(error);
      setIsLodaing(true)

    });
  }
  
  tempOptions.current=dataOptions



    useEffect(() => {
      // axios.request(options).then(function (response) {
      //   console.log(response.data);
      //   setAll(response.data);
      //   setIsLodaing(false)
      // }).catch(function (error) {
      //   console.error(error);
      //   setIsLodaing(true)
  
      // });
      tempOptions.current()
    }, [])




  return (
      <>
                  <Helmet>
         <meta charSet="utf-8" />
        <title>SortBy</title>
      
         </Helmet>
    <section className='w-100 '>
      <div className='HomebgPage '>
      <div className='layerHome py-2'>
        <div className='m-auto text-center py-5 '>
        <h1 className='pt-4'>Find & track the best <span className='text-info'>free-to-play</span> games!</h1>
        <p className=''>Track what you've played and search for what to play next! Plus get free premium loot!</p>
        <Link to="/All" className='btn btn-outline-secondary'>Browse Game</Link>
        </div>
        </div>
      </div>
    </section>

     



    <div className="container py-4">
    {isLoading && (<div className="d-felx justify-content-center align-item-center">
          <div className='text-center text-white'>
          <span className="loader"></span>
          </div>
        </div>
    )}
      <div className='d-flex justify-content-start py-3'>

      <i className="fa-solid fa-robot fs-4 my-auto pe-2"></i>
      <h2>Personalized Recommendations</h2>

      </div>
      
    <div className="row g-3 ">

   

      {all?.filter((all)=>all.thumbnail !==null).slice(0,3).map((item,index)=>    
      <div key={index} className="col-xl-4 col-md-6">

<Link to={`/details/${item.id}`} className=' nav-link'>
  <div className='card-info'>

      <div className="card bg-dark border-0" >
    <img src={item.thumbnail} className="card-img-top" alt="..."/>

  <div className="card-body ">
      <div className='d-flex justify-content-between'>
      <h5 className="h6 card-title">{item.title?.split(" ").splice(0,5).join(" ")} </h5>
      <span className=' px-1 btn btn-sm btn-primary'>Free</span>
      </div>
      <p className="card-text">{item.short_description?.split(" ").splice(0,3).join(" ")}</p>
        <div className='d-flex justify-content-between'>
        <i className="fs-4 fa-solid fa-square-plus "></i>
        <div >
        <span className='bg-secondary rounded-pill px-1 mx-1'>{item.genre}</span> 
      
      {item.platform ==='PC (Windows)'?<i className="fs-4  fa-brands fa-windows"></i>
              :<i className="fs-4  fa-solid fa-window-maximize"></i>}
        </div>
        </div>

    

    </div> 
  </div>
  </div>
  </Link>


      </div>)} 
      

    </div>
    
  </div>
      </>

    )
}
