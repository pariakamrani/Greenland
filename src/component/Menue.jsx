import {    MagnifyingGlassIcon  } from '@heroicons/react/24/solid' 
import {    ShoppingCartIcon  } from '@heroicons/react/24/solid'
import {    ChatBubbleLeftEllipsisIcon  } from '@heroicons/react/24/solid' 
import {    ChevronDownIcon  } from '@heroicons/react/24/solid'
import {    Bars3Icon  } from '@heroicons/react/24/solid' 
import { Link } from "react-router-dom";
import { useState } from 'react'
// import Zamfolia from './component/Zamfolia'






function Menue(){
    const[Menue,setMenue]=useState(false)
    const[Subnav,setSubnav]=useState(false)

    const Openmenue=()=>{
        setMenue(prev => !prev)
    }

    const subnavbtn=()=>{
      setSubnav(prev=>!prev)
    }

    return(
        <>
            <header className="bg-gray-100  relative top-0 right-0 left-0 w-full h-[100px] flex justify-start items-center px-5 overflow-hidden">

                  {/* بخش وسط (لوگو + سرچ) */}
                  {/* کلاس هایی که به حالت کوچیک و میدیوم دادم باعث میشه وقتی صفحه سایزش عوض شد اینا تغیر نکنن و جابجا نشن */}
                  <div className="lg:flex lg:gap-x-64   lg:items-center lg:justify-between  lg:left-3/5  sm:absolute md:absolute md:left-3/5 sm:left-3/6 sm:-translate-x-1/2  ">
                    {/* لوگو */}

                    <div className="w-[150px]  gap-x-9 ">
                      <img src="/public/img/logo.png" className="rounded-2xl w-full h-[90px] " alt="logo" />
                    </div>

                    {/* سرچ */}
                    <div className="lg:flex items-center hidden">
                      <input
                        type="search"
                        name="search"
                        placeholder="search..."
                        className="pr-5 bg-gray-200  2xl:w-[420px] xl:w-[350px]  md:w-[280px] sm:w-[160px] h-10 rounded-3xl"
                      />
                      <MagnifyingGlassIcon className="w-8 h-8 text-teal-600 ml-2" />
                    </div>
                  </div>

                  {/* بخش آیکون‌ها (سمت چپ) */}
                  <div className="flex items-center gap-x-12 ml-auto absolute left-30 md:left-1/12 sm:left-10">
                    <Link to="/Test"><ShoppingCartIcon className="w-8 h-8 text-teal-600 hidden sm:flex" /></Link>
                    <a href="#"><ChatBubbleLeftEllipsisIcon className="w-8 h-8 text-teal-600 hidden sm:flex" /></a>
                  </div>

                    {/* اون سه نقطه بالا سمت چپ که با کلیک روش منوی ایل باز میشه  */}
                  <div className='bg-green-400 lg:hidden mr-20 sm:relative sm:left-0 absolute left-10'>
                    <button href="" onClick={Openmenue}><Bars3Icon className="bg-withe x-8 h-8" /></button>
                  </div>
                    {/* اون مستطیل بزرگی که با زدن رو دکمه 3 نقطه ظاهر میشه */}
                  <div className='lg:hidden fixed  bg-white  z-50'>
                    { Menue && 
                    <div className=' block w-[320px] min-h-screen top-15 right-0 left-30 fixed mt-10 bg-white border-t-2 rounded-xl border-teal-500 shadow-xl shadow-teal-700/100'>
                      <a href="#" className='block my-5 px-4'>صفحه اصلی</a>
                        <button href="" className='block my-5 px-4  text-center' onClick={subnavbtn}> محصولات

                            <div className=' '>
                                {
                                  Subnav &&
                                  <div className=' '>
                                    <Link to="/Begonia" className='block  my-1 shadow-lg shadow-teal-600/15 inset-shadow-sm inset-shadow-teal-600/25 py-2 '>بگونیا </Link>
                                    <a href="#" className='block  my-1 shadow-lg shadow-teal-600/15 inset-shadow-sm inset-shadow-teal-600/25 py-2 '>فیکوس</a>
                                    <a href="#" className='block  my-1 shadow-lg shadow-teal-600/15 inset-shadow-sm inset-shadow-teal-600/25 py-2 '>بابمو</a>
                                    <Link to="/Bonsay" className='block  my-1 shadow-lg shadow-teal-600/15 inset-shadow-sm inset-shadow-teal-600/25 py-2 '>بونسای</Link>
                                    <a href="#" className='block  my-1 shadow-lg shadow-teal-600/15 inset-shadow-sm inset-shadow-teal-600/25 py-2 '>برگ انجیری</a>
                                    <a href="#" className='block  my-1 shadow-lg shadow-teal-600/15 inset-shadow-sm inset-shadow-teal-600/25 py-2 '>سانسوزیا</a>
                                    <a href="#" className='block  my-1 shadow-lg shadow-teal-600/15 inset-shadow-sm inset-shadow-teal-600/25 py-2 '>آگاو </a>
                                    <a href="#" className='block  my-1 shadow-lg shadow-teal-600/15 inset-shadow-sm inset-shadow-teal-600/25 py-2 '>آفت کش</a>
                                    <Link to="/Zamfolia" className='block  my-1 shadow-lg shadow-teal-600/15 inset-shadow-sm inset-shadow-teal-600/25 py-2 '>گیاه سایز بزرگ</Link>
                                    <a href="#" className='block  my-1 shadow-lg shadow-teal-600/15 inset-shadow-sm inset-shadow-teal-600/25 py-2 '>زاموفیلیا</a>
                                    <a href="#" className='block  my-1 shadow-lg shadow-teal-600/15 inset-shadow-sm inset-shadow-teal-600/25 py-2 '> کاکتوس</a>
                                    <a href="#" className='block  my-1 shadow-lg shadow-teal-600/15 inset-shadow-sm inset-shadow-teal-600/25 py-2 '>انواع کود</a>
                                  </div>

                                }
                            </div>
                        </button>
                        {/* <a href="" className='block my-5 px-4'></a> */}
                        <Link to='/' className='block my-5 px-4'>وبلاگ</Link>
                        <Link to="/" className='block my-5 px-4'>درباره ما</Link>
                        <Link to="/" className='block my-5 px-4'>گیاهان تخفیف خورده</Link>
                    </div>
                

                    }
                  </div>

            </header>
                




                
            


            <section className=' shadow-lg shadow-teal-600/20 h-[5rem]   justify-center   hidden lg:flex lg:gap-y-3 mt-2.5 '>
                            <nav className='flex '>
                                <ul className='flex gap-x-12 justify-center items-center'>
                                    <li className='text-2xl'><Link to='/' className='hover:text-teal-700 transition ' >صفحه اصلی</Link></li>
                                    <li className='relative text-2xl group flex'> <a className='hover:text-teal-700/    flex  justify-start ' href="" >محصولات<ChevronDownIcon className="text-gray-500 w-4 h-3 flex justify-end mt-4 mr-2"/> </a>
                                    
                                        <div className='bg-white grid grid-cols-3 z-50 justify-center items-center rounded-2xl border-gray-300 border-2  w-[600px] h-[19rem] absolute  top-14 tracking-normal   transition-all duration-400 invisible group-hover:visible  opacity-0 group-hover:opacity-100'>
                                               
                                           
                                                <Link to="/Begonia" className='inline-block  mx-3 mt-1 pb-5 pt-3 pr-4 hover:text-teal-800  transition duration-300 whitespace-nowrap' >بگونیا </Link>
                                                <Link to="/Bonsay" className='inline-block  mx-3 mt-1 pb-5 pt-3 pr-4 hover:text-teal-800  transition duration-300 whitespace-nowrap' href="">بونسای</Link>
                                                <a className='inline-block  mx-3 mt-1 pb-5 pt-3 pr-4 hover:text-teal-800  transition duration-300 whitespace-nowrap' href="">بابمو</a>
                                                <a className='inline-block  mx-3 mt-1 pb-5 pt-3 pr-4 hover:text-teal-800  transition duration-300 whitespace-nowrap' href="">فیکوس</a>
                                                <a className='inline-block  mx-3 mt-1 pb-5 pt-3 pr-4 hover:text-teal-800  transition duration-300 whitespace-nowrap' href="">برگ انجیری</a>
                                                <a className='inline-block  mx-3 mt-1 pb-5 pt-3 pr-4 hover:text-teal-800  transition duration-300 whitespace-nowrap' href="">سانسوزیا</a>
                                                <a className='inline-block  mx-3 mt-1 pb-5 pt-3 pr-4 hover:text-teal-800  transition duration-300 whitespace-nowrap' href="">آگاو </a>
                                                <a className='inline-block  mx-3 mt-1 pb-5 pt-3 pr-4 hover:text-teal-800  transition duration-300 whitespace-nowrap' href="">آفت کش</a>
                                                <a className='inline-block  mx-3 mt-1 pb-5 pt-3 pr-4 hover:text-teal-800  transition duration-300 whitespace-nowrap' href="">گیاه سایز بزرگ </a>
                                                <Link to='/Zamfolia' className='inline-block  mx-3 mt-1 pb-5 pt-3 pr-4 hover:text-teal-800  transition duration-300 whitespace-nowrap' >زاموفیلیا</Link>
                                                <a className='inline-block  mx-3 mt-1 pb-5 pt-3 pr-4 hover:text-teal-800  transition duration-300 whitespace-nowrap' href=""> کاکتوس</a>
                                                <a className='inline-block  mx-3 mt-1 pb-5 pt-3 pr-4 hover:text-teal-800  transition duration-300 whitespace-nowrap' href="">انواع کود</a>
                                                
                                           
                                        </div>
                                    </li>

                                    
                                    
                                    <li className='text-2xl'><Link to='/Zamfolia'  className='hover:text-green-500 transition ' >وبلاگ</Link></li>
                                    <li className='text-2xl'><a className='hover:text-green-500 transition ' href="">درباره ما</a></li>
                                    <li className='text-2xl'><a className='hover:text-green-500 transition ' href="">تماس با ما</a></li>
                                    <li className='text-2xl'><a className='hover:text-green-500 transition ' href="">گیاهان تخفیف خورده</a></li>
                                </ul>
                            </nav>
                        </section>

            <div >


            </div>

             {/* <div className='bg-red-500'>dddddddddd</div> */}
                   
                  
                   
        </>
    )
}
export default Menue;