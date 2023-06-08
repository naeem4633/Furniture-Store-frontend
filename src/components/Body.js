import React from 'react';
import { Link } from 'react-router-dom';

const Body = () => {

  return (
    <>
    <div className='flex flex-col items-center mt-20'>
        <div className='mb-8 text-2xl underline'>
            <p>SHOP BY CATEGORIES</p>
        </div>

        <div class="flex justify-center items-center text-xl">
            <Link to={'/beds'}>
                <div class="mx-16 border border-black w-64 h-64 flex flex-col items-center justify-center">
                    <img src="../images/bed.png"></img>
                    <p class="mt-2">Beds</p>
                </div>
            </Link>
            <Link to={'/dining'}>
            <div class="mx-16 border border-black w-64 h-64 flex flex-col items-center justify-center">
                <img src="../images/dining.png"></img>
                <p class="mt-2">Dining</p>
            </div>
            </Link>
            <Link to={'/wardrobes'}>
            <div class="mx-16 border border-black w-64 h-64 flex flex-col items-center justify-center">
                <img src="../images/closet.png"></img>
                <p class="mt-2">Wardrobe</p>
            </div>
            </Link>
        </div>
    </div>

    <div className='flex flex-col'>
        <div className='mt-20'>
            <img src='../images/sample-image-3.jpg'></img>
        </div>
        <div className='flex flex-row justify-between'>
            <img className='p-6' src='../images/sample-image-4-half.jpg'></img>
            <img className='p-6' src='../images/sample-image-5-half.jpg'></img>
        </div>
    </div>
</>
  );
};

export default Body;
