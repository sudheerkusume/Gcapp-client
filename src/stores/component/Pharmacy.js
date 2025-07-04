import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import slide from '../Accets/Carosel1.jpg'
import slide1 from '../Accets/Carosel2.jpg'
import slide2 from '../Accets/Carosel3.jpg'
import slide3 from '../Accets/Carosel4.jpg'
import slide4 from '../Accets/Carosel5.jpg'
// const Pharmacy = () => {

//     const [products, setProducts] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         axios.get(`http://localhost:4000/Pharmacy`)
//         .then((res) => setProducts(res.data))
//         .catch((err) => console.log(err))
//     }, [])
//     const firstFiveImages = products.slice(0,5)
    
//   return (
//     <div className='container my-4 '>
//       <div
//          className='row  justify-content-center'
//          onClick={() => navigate('/pharmacy')}
//          style={{
//          backgroundColor: '#48B05A', // Light promo color
//          borderRadius: '12px',
//          overflow: 'hidden'
//     }}
//   >
//     <div className='col-12 col-mb-11 px-0'>
//     <img
//       src={MainImg} // Or any static image
//       alt='Pharmacy Promo'
//       className='img-fluid w-100'
//       style={{ height: '100%', width:'100%', objectFit:'cover' }}
//     />
//     </div>
//   </div>
// </div>
//   )
// }

const Pharmacy = () => {
  return (
    <div>
      <section className='container-fluid p-0'>
        <div id='mainslide' className='carousel slide' data-bs-ride="carousel" data-bs-interval="3000">
          <div className='carousel-indicators'>
            <button data-bs-target="#mainslide" data-bs-slide-to="0" className='active'></button>
            <button data-bs-target="#mainslide" data-bs-slide-to="1"></button>
            <button data-bs-target="#mainslide" data-bs-slide-to="2"></button>
            <button data-bs-target="#mainslide" data-bs-slide-to="3"></button>
            <button data-bs-target="#mainslide" data-bs-slide-to="4"></button>

          </div>
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <img src={slide} alt='error' className='img-fluid w-100'/>
            </div>
            <div className='carousel-item '>
              <img src={slide1} alt='error' className='img-fluid w-100'/>
            </div>
            <div className='carousel-item '>
              <img src={slide2} alt='error' className='img-fluid w-100'/>
            </div>
            <div className='carousel-item '>
              <img src={slide3} alt='error' className='img-fluid w-100'/>
            </div>
            <div className='carousel-item '>
              <img src={slide4} alt='error' className='img-fluid w-100'/>
            </div>

          </div>
          <button data-bs-target="#mainslide" data-bs-slide="prev" className='carousel-control-prev'>
            <span className='carousel-control-prev-icon'></span>
          </button>
          <button data-bs-target="#mainslide" data-bs-slide="next" className='carousel-control-next'>
            <span className='carousel-control-next-icon'></span>
          </button>

        </div>
      </section>
    </div>
  )
}

export default Pharmacy

