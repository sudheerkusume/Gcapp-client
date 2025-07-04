import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const Babycare = () => {
    const [Products, setProducts] = useState([])
useEffect(() => {
    axios.get(`https://gcapp-server.onrender.com/babycare`)
    .then((res) => setProducts(res.data))
    .catch((err) => console.log(err))
}, [])
const firstFiveImages = Products.slice(0,5)

  return (
    <div className='container-fluid'>
    <div className='row p-5'>
        <h2>Petcare</h2>
        <div className='proSection'>
        {
            firstFiveImages.map((item, index) => {
                return(
                    <div className='imgBox'>
                    <div key={index} className='col-md-3 mb-4'>
                        <div className='card h-100'>
                            <img className='proImage card-img-top p-5' src={item.image} alt='error'/>
                        </div>
                    </div>
                    </div>
                )
            })
        }
        </div>
    </div>
</div>

  )
}

export default Babycare