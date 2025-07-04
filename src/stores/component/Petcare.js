import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import mainbanner from '../Accets/petCareBaner.avif'
import mainbanner2 from '../Accets/babycare-WEB.avif'
import mainbanner3 from '../Accets/Medical_img1.PNG'
const Petcare = () => {

    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://gcapp-server.onrender.com/Petcare`)
        .then((res) => setProducts(res.data))
        .catch((err) => console.log(err))
    }, [])
    const firstFiveImages = products.slice(0,5)
    
  return (
    <div className='container my-4'>
      <div
         className='row p-sm-5 p-lg-3'
  >
  <div className='col-md-6 col-lg-3 col-xl-4  justify-content-center'
         onClick={() => navigate('/petcare')}
         style={{
         borderRadius: '15px',
         overflow: 'hidden'
    }}>
    <div className='card'>
      <img src={mainbanner} alt='error' className='img-fluid'/>
    </div>
  </div>
    <div className='col-md-6 col-lg-4 col-xl-4  justify-content-center'
         onClick={() => navigate('/babycare')}
         style={{
         borderRadius: '15px',
         overflow: 'hidden'
    }}>
    <div className='card'>
      <img src={mainbanner2} alt='error' className='img-fluid'/>
    </div>
  </div>
        <div className='col-md-6 col-lg-3 col-xl-4  justify-content-center'
         onClick={() => navigate('/pharmacy')}
         style={{
          borderRadius:'40px',
         overflow: 'hidden',
    }}>
    <div className='card'>
      <img src={mainbanner3}  style={{borderRadius:'20px'}}alt='error' className='img-fluid'/>
    </div>
  </div>

  </div>
</div>
  )
}

export default Petcare