import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ThemeButton from './ThemeButton'
import { useTheme } from '../context/ThemeContext'

const Header = () => {
    const cartSelector = useSelector((state) => state.cart.items) //for items value
    // console.log(cartSelector.length);
      const {theme, handleTheme} = useTheme()
  return (
    <>
      <div className='flex justify-between'>
        <div className='font-bold text-3xl'><Link to="/">Header</Link></div>
        <ThemeButton theme={theme} handleTheme={handleTheme}/>
        <div className='font-bold text-2xl'><Link to="/cartlist">Cart {cartSelector.length ? cartSelector.length : 0}</Link></div>
      </div>
    </>
  )
}

export default Header

// For Sidebar 

// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import ThemeButton from './ThemeButton';
// import { useTheme } from '../context/ThemeContext';

// const Header = () => {
//   const cartSelector = useSelector((state) => state.cart.items);
//   const { theme, handleTheme } = useTheme();

//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   return (
//     <>
//       Header
//       <div className="flex justify-between items-center p-4 border-b">
//         <div className="font-bold text-3xl cursor-pointer">Header</div>
//         <ThemeButton theme={theme} handleTheme={handleTheme} />
//         <div
//           className="font-bold text-2xl cursor-pointer"
//           onClick={() => setIsSidebarOpen(true)}
//         >
//           Cart {cartSelector.length || 0}
//         </div>
//       </div>

//       Sidebar
//       {isSidebarOpen && (
//         <div className="fixed top-0 right-0 w-80 h-full bg-white dark:bg-gray-900 shadow-lg z-50 transition-transform">
//           <div className="flex justify-between items-center p-4 border-b">
//             <h2 className="text-xl font-bold">Your Cart</h2>
//             <button
//               className="text-gray-500 hover:text-gray-800"
//               onClick={() => setIsSidebarOpen(false)}
//             >
//               ✕
//             </button>
//           </div>

//           Cart Items
//           <div className="p-4 space-y-2 overflow-y-auto h-[calc(100%-4rem)]">
//             {cartSelector.length > 0 ? (
//               cartSelector.map((item, idx) => (
//                 <div
//                   key={idx}
//                   className="flex justify-between items-center border-b pb-2"
//                 >
//                   <span>{item.title}</span>
//                   <span className="font-semibold">x{item.quantity}</span>
//                 </div>
//               ))
//             ) : (
//               <p className="text-gray-500">Your cart is empty.</p>
//             )}
//           </div>
//         </div>
//       )}

//       Overlay (for closing sidebar when clicking outside)
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 z-40"
//           onClick={() => setIsSidebarOpen(false)}
//         ></div>
//       )}
//     </>
//   );
// };

// export default Header;
