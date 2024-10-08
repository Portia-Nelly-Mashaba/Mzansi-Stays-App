import React, { useState, useEffect } from 'react';
import Hotel from './Hotel';
import { SpinnerDotted } from 'spinners-react';

// Import Link for navigation
import { Link } from 'react-router-dom'; 

//import images
import Img1 from '../assets/img/heroSlider/1.jpg';
import Img2 from '../assets/img/heroSlider/2.jpg';
import Img3 from '../assets/img/heroSlider/3.jpg';


const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = [
        { id: 1, name: 'Hotel A', image: Img1, size: 30, maxPerson: 2, description: 'Description A', price: 100 },
        { id: 2, name: 'Hotel B', image: Img2, size: 40, maxPerson: 4, description: 'Description B', price: 200 },
        { id: 3, name: 'Hotel C', image: Img3, size: 50, maxPerson: 3, description: 'Description C', price: 150 },
      ];
      setHotels(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <section className='py-24'>
      {loading && (
        <div className='h-screen fixed bottom-0 top-0 bg-black/90 w-full z-50 flex justify-center items-center'>
          <SpinnerDotted />
        </div>
      )}
      <div className='container mx-auto lg:px-0'>
        <div className='text-center'>
          <div className='font-tertiary uppercase text-[15px] tracking-[6px]'>Explore South Africa</div>
          <h2 className='font-primary text-[35px] mb-4'>Popular Hotels</h2>
        </div>
        <div className='grid grid-cols-1 max-w-sm max-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0'>
          {hotels.map((hotel) => (
            <Link to={`/hotel/${hotel.id}`} key={hotel.id}>
              <Hotel hotel={hotel} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hotels;


// import React, { useContext } from 'react';
// import { HotelContext } from '../context/HotelContext.js';
// import Hotel from './Hotel';
// //loader
// import { SpinnerDotted } from 'spinners-react';

// const Hotels = () => {
//   const { hotels, loading } = useContext(HotelContext);

//   return (
//     // <div>
//     //   <h1>Deals for the weekend</h1>
//     //   <p>Save on stays for September 27 - September 29</p>
//     // </div>
//     <section className='py-24'>
//       {/* overlay & spinner */}
//       {loading && (
//         <div className='h-screen fixed bottom-0 top-0 bg-black/90 w-full z-50 flex justify-center items-center'>
//           <SpinnerDotted />
//         </div>
//       )}
//       <div className='container mx-auto lg:px-0'>
//         <div className='text-center'>
//           <div className='font-tertiary uppercase text-[15px] tracking-[6px]'>Explore South Africa</div>
//           <h2 className='font-primary text-[35px] mb-4'>Popular Hotels</h2>
//         </div>
//         {/* grid */}
//         <div className='grid grid-cols-1 max-w-sm max-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0'>
//         { hotels.map((hotel) => {
//           // console.log(hotel);
//           return <Hotel hotel={hotel} key={hotel.id}/>;
//         })}
//         </div>
        
//       </div>
//     </section>
//   )
// };

// export default Hotels;
