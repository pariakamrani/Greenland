function pic1undermenye(){



    return(
        <>

        {/* کامپوننت دوتا عکس مربعی بزرگ زیر منو و 4 تا عکس مربعی زیرش */}
            <div className="lg:flex sm:block  bg-gray-100 justify-between mt-10 items-start w-full overflow-hidden">
                <div className="md:w-full lg:w-[50%] h-[40rem]    overflow-hidden"><img src="/public/img/c1.jpg"  className="object-fit rounded-2xl w-full h-full px-2 hover:scale-110 transition-all  duration-500 " alt="logo" /></div>
               
                <div className="sm:w-full lg:w-[50%] h-[40rem] relative  lg:bottom-0 shadow-md inset-shadow-sm shadow-teal-700/35 inset-shadow-teal-700/35 ">
                    <p className="text-gray-600 px-4 block w-[100%]  font-bold text-2xl relative sm:right-3/12 lg:right-2/12 top-10 bottom-1/2  my-15  mx-5">سفارش انواع گل و گیاه</p>
                    <p className="text-teal-700 px-4 block w-[100%]  font-bold text-3xl relative sm:right-3/12 lg:right-2/12 top-10 bottom-1/2  my-15  mx-5">از معتبر ترین گل فروشی آنلاین</p>
                    <p className="text-black px-4 block w-[100%]  font-bold text-4xl relative sm:right-3/12 lg:right-2/12 top-10 bottom-1/2  my-15  mx-5">گل های آپارتمانی منحصر به فرد</p>

                    <div className="relative w-full bg-gray-100 "> 
                        <a className="bg-teal-700 relative mx-4 hover:w-[40%] hover:h-[4rem] hover:py-4 transition-all duration-400 sm:right-3/12 lg:right-2/12  sm:top-30   top-10  truncate  inline-block text-center text-lg font-bold py-2 rounded-3xl h-[3rem] w-[33%]" href="">مشاهده محصولات</a>
                        <a className="bg-gray-300 relative mx-5  sm:right-3/12 lg:right-2/12  sm:top-30   top-10  truncate  inline-block text-center py-2  rounded-3xl text-black font-bold h-[3rem] w-[15%] transition-all duration-400 hover:w-[20%] hover:h-[3.5rem] hover:py-3" href="">تماس با ما</a>
                    </div>
                </div>
            </div>


                {/*  (عکس گل  و گیاه زیر بخش (خرید انواع گل و گیاه */}
                {/* همون که عکس چنند تا گل زیر همه */}

            <div className="  flex items-center justify-center mt-20">
                <p className="   w-[100%] text-center font-bold text-teal-800 text-3xl">   پرفروش ترین ها </p>
                
            </div>

            <div className=" flex justify-center items-center gap-x-10 mt-10 "> 
                
                <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 w-[50%] gap-x-15  gap-y-4 justify-items-center   rounded-xl ">
                    <div className=" shadow-2xl  w-[100%] h-[15rem] rounded-3xl overflow-hidden ">
                        <div className=" w-full h-[85%] overflow-hidden "> <img src="/public/img/zamo.jpeg" alt=" " className="w-full h-full hover:scale-125 transition-all duration-400 " /></div>
                        <div className="  h-[15%] text-center pt-2 font-bold"><a href="">زامفولیا</a></div>
                    </div>
                    <div className=" shadow-2xl  w-[100%] h-[15rem]  rounded-3xl overflow-hidden">
                        <div className=" h-[85%] overflow-hidden"> <img src="/public/img/fikos.jpg " alt="" className="w-full h-full hover:scale-125 transition-all duration-400"/></div>
                        <div className=" h-[15%] text-center pt-2 font-bold"><a href="">فیکوس</a></div>
                    </div>
                    <div className=" shadow-2xl  w-[100%] h-[15rem]  rounded-3xl overflow-hidden">
                        <div className=" h-[85%] overflow-hidden"> <img src="/public/img/bonsay.jpg " alt="" className="w-full h-full hover:scale-125 transition-all duration-400"/></div>
                        <div className=" h-[15%] text-center pt-2 font-bold"><a href="">بونسای</a></div>
                    </div>
                    <div className=" shadow-2xl  w-[100%] h-[15rem]  rounded-3xl overflow-hidden ">
                        <div className=" h-[85%] overflow-hidden"> <img src="/public/img/bargangiri.jpg" alt="" className="w-full h-full hover:scale-125 transition-all duration-400"/></div>
                        <div className="h-[15%] text-center pt-2 font-bold"> <a href="">برگ انجیری</a></div>
                    </div>
                    <div className=" shadow-2xl  w-[100%] h-[15rem]  rounded-3xl overflow-hidden ">
                        <div className=" h-[85%] overflow-hidden"> <img src="/public/img/bargangiri.jpg" alt="" className="w-full h-full hover:scale-125 transition-all duration-400"/></div>
                        <div className="h-[15%] text-center pt-2 font-bold"> <a href="">برگ انجیری</a></div>
                    </div>
                </div>
            </div>


             
        </>
    )
}
export default pic1undermenye;