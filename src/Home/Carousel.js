import React from 'react';
import { Link } from 'react-router-dom';
import img from '../Image/1_iAu65xDmvpVdBJgps6EDEw.png'

const Carousel = () => {
    return (
        <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={img} className="max-w-sm rounded-lg shadow-3xl" alt=''/>
          <div className='mr-20'>
            <h1 className="text-5xl font-bold">P_Commerce</h1>
            <p className="py-6 ">Bangladesh's best <br /> online shopping store with 17+ million products at resounding discounts in dhaka, ctg & All across <br /> Bangladesh with cash on delivery <br /> (COD)</p>
            <button className="btn btn-primary"><Link to={'/'}>Get Started</Link></button>
          </div>
        </div>
      </div>
    );
};

export default Carousel;