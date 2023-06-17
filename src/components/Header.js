import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({savedItems, onChange}) => {
  const [cartIsHovered, setCartIsHovered] = useState(false);
  const [wishlistIsHovered, setWishlistIsHovered] = useState(false);

  let cartItems = savedItems.filter(item => item.is_cart === true);
  let wishlistItems = savedItems.filter(item => item.is_wishlist === true);

  const handleDelete = (id) => {
    fetch(`http://127.0.0.1:8000/api/delete-item/${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(() => {
        const updatedSavedItems = savedItems.filter(item => item.id !== id);
        onChange(updatedSavedItems);
      })
      .catch(error => console.error(error));

    // Update savedItems state locally to reflect the deletion
    const updatedSavedItems = savedItems.filter(item => item.id !== id);
    onChange(updatedSavedItems);
  };


  return (
    <>
    <nav class="bg-white border-gray-200 dark:bg-gray-900 border border-gray">
      <div class="max-w-screen flex flex-wrap items-center justify-between mr-80 p-1">
        <p class="flex items-center mx-28">
            <span class="self-center text-2xl whitespace-nowrap dark:text-white">111-222-333</span>
        </p>
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div class="hidden w-full md:block md:w-16 mr-16" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen flex flex-wrap items-center justify-between mr-64 p-4">
        <Link to={'/'} class="flex items-center mx-24">
            <img src="../images/sofa.png" class="h-8 mr-3" alt="..." />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">IKEA Home</span>
        </Link>
        <div class="flex md:order-1">
            <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Search</span>
            </button>
            <div class="relative hidden md:block">
            <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{'width': '600px', 'margin-left': '-40px'}} placeholder="Search for products..."/>
            </div>
            <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
            <span class="sr-only">Open menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
        </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
            <div class="relative mt-3 md:hidden">
                <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{'width': '200%', 'margin-left': '-50px'}} placeholder="Search..."/>
            </div>
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                <Link to={'/login'} class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">
                    <img className='h-8' src='../images/user.png'></img>
                </Link>
                </li>
                <li>
                <Link
                    onClick={() => setWishlistIsHovered(true)}
                    onMouseLeave={() => setWishlistIsHovered(false)}
                    className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    <img className="h-8" src="../images/heart.png" alt="cart" />
                    { (
                      <div className="popover absolute w-80 max-h-[75vh] bg-white rounded flex-col transform -translate-x-1/3 mt-3 drop-shadow-lg z-10">
                        <div className="flex flex-col">
                          <p className="m-4 text-lg">Your Wishlist</p>
                          {wishlistItems.length > 0 && (
                            <div
                              className={`cart-items-container ${
                                wishlistItems.length > 5 ? 'overflow-y-scroll overflow-x-hidden' : ''
                              }`}
                              style={{ maxHeight: 'calc(75vh - 120px)' }}
                            >
                              {wishlistItems.map((item) => (
                                <>
                                  <div className="w-3/4 mx-auto border border-gray-200 mb-2"></div>
                                  <div className="flex flex-row text-sm mx-6 mt-3 mb-5">
                                    <img
                                      className="w-20 h-20"
                                      src={item.furniture.image_path}
                                      alt={item.furniture.name}
                                    />
                                    <div className="flex flex-col text-left justify-between">
                                      <div className="flex flex-row w-64">
                                        <p className="ml-4 w-3/5">
                                          {item.furniture.name} ({item.quantity})
                                        </p>
                                        <img
                                          src="../images/delete.png"
                                          className="h-4 mt-2"
                                          onClick={() => handleDelete(item.id)}
                                          alt="delete"
                                        />
                                      </div>
                                      <p className="mx-4 mb-2">USD {item.furniture.price}</p>
                                    </div>
                                  </div>
                                </>
                              ))}
                            </div>
                          )}
                          <Link to="/checkout" className="w-40 h-12 bg-green-500 mx-auto my-2">
                            <p className="text-lg text-white my-2">Checkout</p>
                          </Link>
                        </div>
                      </div>
                    )}
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setCartIsHovered(true)}
                    onMouseLeave={() => setCartIsHovered(false)}
                    className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    <img className="h-8" src="../images/cart.png" alt="cart" />
                    { (
                      <div className="popover absolute w-80 max-h-[75vh] bg-white rounded flex-col transform -translate-x-1/3 mt-3 drop-shadow-lg z-10">
                        <div className="flex flex-col">
                          <p className="m-4 text-lg">Your Cart</p>
                          {cartItems.length > 0 && (
                            <div
                              className={`cart-items-container ${
                                cartItems.length > 5 ? 'overflow-y-scroll overflow-x-hidden' : ''
                              }`}
                              style={{ maxHeight: 'calc(75vh - 120px)' }}
                            >
                              {cartItems.map((item) => (
                                <>
                                  <div className="w-3/4 mx-auto border border-gray-200 mb-2"></div>
                                  <div className="flex flex-row text-sm mx-6 mt-3 mb-5">
                                    <img
                                      className="w-20 h-20"
                                      src={item.furniture.image_path}
                                      alt={item.furniture.name}
                                    />
                                    <div className="flex flex-col text-left justify-between">
                                      <div className="flex flex-row w-64">
                                        <p className="ml-4 w-3/5">
                                          {item.furniture.name} ({item.quantity})
                                        </p>
                                        <img
                                          src="../images/delete.png"
                                          className="h-4 mt-2"
                                          onClick={() => handleDelete(item.id)}
                                          alt="delete"
                                        />
                                      </div>
                                      <p className="mx-4 mb-2">USD {item.furniture.price}</p>
                                    </div>
                                  </div>
                                </>
                              ))}
                            </div>
                          )}
                          <Link to="/checkout" className="w-40 h-12 bg-green-500 hover:bg-green-700 mx-auto my-2">
                            <p className="text-lg text-white my-2">Checkout</p>
                          </Link>
                        </div>
                      </div>
                    )}
                  </Link>
                </li>
              </ul>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Header;
