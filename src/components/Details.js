import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from "axios";

const Details = () => {
    let {id} = useParams();
    const [furniture, setFurniture] = useState([]);
    const [similarFurniture , setSimilarFurniture] = useState([]);
    let [savedItems, setSavedItems] = useState([]);
    let [quantity, setQuantity] = useState(1);

    useEffect(() => {
        fetchfurnitureItem();
    }, []);

    const fetchfurnitureItem = async () => {
        try {
          const furnitureResponse = await axios.get(`http://127.0.0.1:8000/api/single-item/${id}`);
          const furnitureData = furnitureResponse.data;
          setFurniture(furnitureData);
          fetchSimilarItems();
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    };
    // console.log(furniture);

    const fetchSimilarItems = async () => {
        try {
            console.log(furniture.category)
            const similarFurnitureResponse = await axios.get(`http://127.0.0.1:8000/api/similar-items/${furniture.category}`);
            const similarFurnitureData = similarFurnitureResponse.data;
            setSimilarFurniture(similarFurnitureData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    // console.log(similarFurniture);


    const handleSavedItemCreation = (is_cart, is_wishlist) => {
        const newSavedItem = {
          furniture: furniture,
          quantity: 1,
          is_cart: is_cart,
          is_wishlist: is_wishlist,
        };
      
        fetch(`http://127.0.0.1:8000/api/save-item/`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newSavedItem)
        })
          .then(response => {
            if (response.ok) {
              // Handle successful response here
              console.log("Saved item created successfully.");
            } else {
              // Handle error response here
              console.error("Failed to create saved item.");
            }
          })
          .catch(error => {
            // Handle fetch error here
            console.error("An error occurred while creating saved item:", error);
          });
      };


      

  return (
    <>
        <div className='w-full border border-gray-300 border-t-1 border-l-0 border-r-0 border-b-0'></div>
        <div className='w-3/4 mx-auto flex flex-col justify-between py-24'>
            <div className='grid grid-cols-2 gap-4 justify-between w-full mx-auto'>
                <div className='w-fit border borer-gray-300 mr-8'>
                    <img src={`${furniture.image_path}`}></img>
                </div>
                <div className='w-fit ml-8 mt-16'>
                    <div className='flex flex-col'>
                        <div className='flex flex-col'>
                            <p className='text-3xl'>{furniture.name}</p>
                            <p className='text-2xl'>${furniture.price}</p>
                            <p className='text-xl'>Design: Woodson</p>
                            <p>SKU: {furniture.sku}</p>
                            <p>Size:Single</p>
                            <p>Delivered in : 04 - 06 Working Days</p>
                        </div>
                        <div className='flex flex-col border-gray-200 my-6'>
                            <div className='flex flex-row'>
                                <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} className='w-12 h-12 bg-green-500'>
                                    <img className='w-6 m-3' src='../images/minus.png'></img>
                                </button>
                                <p className='border border-green-500 w-24 h-12 mx-2 px-11 pt-2.5 text-lg'>{quantity}</p>
                                <button onClick={() => setQuantity(quantity + 1)} className='w-12 h-12 bg-green-500'>
                                    <img className='w-6 m-3' src='../images/plus.png'></img>
                                </button>
                                <Link onClick={() => handleSavedItemCreation(false, true)} className='w-12 h-12 p-3 border border-gray-300 mx-2'>
                                    <img src='../images/heart.png'></img>
                                </Link>
                            </div>
                        </div> 
                        <Link onClick={() => handleSavedItemCreation(true, false)} className='w-52 h-12 bg-green-500'>
                            <p className='text-xl text-white'>Add To Cart</p>
                        </Link>
                        <div className='border border-gray-200 my-4'></div>
                        <div className='flex flex-col border-gray-200'>
                            <ul>
                                <li><p className='text-xl'>Installment Plans Available</p></li>
                                <li><p className='text-red-500 underline'>Starting as low as USD 76</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-3/4 mx-auto flex flex-col justify-between'>
            <p className='text-xl ml-16 mb-2'>PRODUCT DESCRIPTION</p>
            <div className='w-full px-16 py-12 border border-gray-200 text-xl'>
                <p className='mb-6 font-medium'>{furniture.description}</p>
            </div>
        </div>
        <div className='w-3/4 mx-auto flex flex-col justify-between mt-24'>
            <p className='text-2xl'>Products similar to this item</p>
            <div className="grid grid-rows-1 grid-cols-3 gap-x-16 gap-y-8 my-8 ">
                    {similarFurniture.map((furniture) => (
                        <Link key={furniture.id} to={`/details/${furniture.id}`}>
                            <div className="w-[27rem] mx-auto">
                                <img className='w-full' src={`${furniture.image_path}`}></img>
                                <div className='flex flex-col justify-between my-6 h-14'>
                                    <p>{furniture.name}</p>
                                    <p className='font-bold'>{furniture.price}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    </>
  )
}

export default Details