import axios from 'axios';
import { useState,useEffect,useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet'

export default function Shooter() {
    let params =useParams();

  const [all, setAll] = useState([]);
  const [visibale, setVisibale] = useState(20);
  const [isLoading, setIsLodaing] = useState(true);


  const tempOptions = useRef()

   
  const dataOptions=()=>{

    const options = {
        method: 'GET',
        url: `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${params.categories}`,

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
        tempOptions.current()

      }, [params.categories])

      const showMorePages = ()=>{
        setVisibale((prevValue)=>prevValue+20);
    }

  return (
    <>

        <Helmet>
         <meta charSet="utf-8" />
        <title>Platform</title>
      
      </Helmet>
<div className="container py-4">
    <div className="row pt-5">
        {isLoading && 
        (      <div className="col-md-12">
        <div className="d-felx justify-content-center align-item-center">
          <div className='text-center text-white'>
          <span className="loader"></span>
          </div>
        </div>
      </div>)}
    </div>
    <div className="row g-3 ">



      {all?.filter((all)=>all.thumbnail !==null).slice(0,visibale).map((item,index)=>    
      <div key={index} className="col-xl-3 col-md-6">
  <Link to={`/details/${item.id}`} className=' nav-link'>
  <div className='card-info'>

      <div className="card bg-dark border-0" >
    <img src={item.thumbnail} className="card-img-top" alt="..."/>

  <div className="card-body ">
      <div className='d-flex justify-content-between'>
      <h5 className="h6 card-title">{item.title?.split(" ").splice(0,3).join(" ")} </h5>
      <span className=' px-1 btn btn-sm btn-primary'>Free</span>
      </div>
      <p className="card-text">{item.short_description?.split(" ").splice(0,2).join(" ")}</p>
        <div className='d-flex justify-content-between'>
        <i className="fa-solid fa-square-plus "></i>
        <div >
        <span className='bg-secondary rounded-pill px-1 mx-1'>{item.genre}</span> 
      
      {item.platform ==='PC (Windows)'?<i className=" fa-brands fa-windows"></i>
              :<i className=" fa-solid fa-window-maximize"></i>}
        </div>
        </div>

    

    </div> 
  </div>
  </div>
  </Link>

      </div>)}
      <div className='m-auto d-flex py-4'>
          <button onClick={showMorePages} className='btn btn-outline-secondary m-auto' >Load more</button>

          </div>
    </div>

  </div>
    </>

    )
}
