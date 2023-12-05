import React from 'react'
import janm from '../assets/janmastami1.jpeg'
import inde from '../assets/independent4.jpeg'
import mela from '../assets/three.jpeg'


const Someactive = () => {
    return (
        <div>
            <div className='active' >
                <h1 className='heading d-flex justify-content-center p-3 '> Activities...</h1>
                <div className='cardcontainer d-flex justify-content-around flex-wrap' >
                    <div class="card m-2 " >
                        <img src={janm} class="card-img-top" alt="..." />
                        <div class="card-body d-flex justify-content-center">
                            <p class="card-text">NCC Programs</p>
                        </div>
                    </div>
                    <div class="card m-2">
                        <img src={inde} class="card-img-top" alt="..." />
                        <div class="card-body d-flex justify-content-center">
                            <p class="card-text">National Day Celebration</p>
                        </div>
                    </div>
                    <div class="card m-2" >
                        <img src={mela} class="card-img-top" alt="..." />
                        <div class="card-body d-flex justify-content-center">
                            <p class="card-text">Science Day Celebration </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Someactive