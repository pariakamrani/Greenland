

function Iconlikeimg(){


    return(
        <>
        {/*  این کامپوننت همون عکس های دایره ایه */}
            <div className="  flex justify-center items-center relative top-40 ">
                <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center w-[60%] ">
                    <div  className=" mx-4 mt-2 w-[70%] h-[17rem] justify-items-center">
                        <a className="block w-[100%] h-[78%] rounded-[50%] overflow-hidden shadow-2xl shadow-teal-700/50 hover:rotate-12 transition-all duration-400" href="\"><img src="/public/img/f5.jpg" className="w-full h-full" alt="" /></a>
                        <a className=" text-center block mt-5 w-[100%] font-bold " href="">انواع کود</a>
                      
                    </div>
                    <div  className=" mx-4 mt-2 w-[70%] h-[17rem] justify-items-center">
                        <a className=" block w-[100%] h-[78%] rounded-[50%] overflow-hidden shadow-2xl shadow-teal-700/50 hover:rotate-12 transition-all duration-400" href="\"><img src="/public/img/f3.jpg" className="w-full h-full " alt="" /></a>
                        <a className=" text-center block mt-5 w-[100%] font-bold" href="">گیاهان تصفیه کننده هوا</a>
                        
                    </div>
                    <div  className=" mx-4 mt-2 w-[70%] h-[17rem] justify-items-center">
                        <a className=" block w-[100%] h-[78%] rounded-[50%] overflow-hidden shadow-2xl shadow-teal-700/50 hover:rotate-12 transition-all duration-400" href="\"><img src="/public/img/f2.jpg2.jpg" className="w-full h-full" alt="" /></a>
                        <a className="text-center block mt-5 w-[100%] font-bold" href="">گیاهان مقاوم به نور</a>
                      
                    </div>
                    <div  className=" mx-4 mt-2 w-[70%] h-[17rem] justify-items-center">
                        <a className=" block w-[100%] h-[78%] rounded-[50%] overflow-hidden shadow-2xl shadow-teal-700/50 hover:rotate-12 transition-all duration-400" href="\"><img src="/public/img/f1.jpg2.jpg" className="w-full h-full" alt="" /></a>
                        <a className=" text-center block mt-5 w-[100%] font-bold" href="">گیاهان محیط کار</a>
                      
                    </div>
                </div>
            </div>
        </>
    )
}
export default Iconlikeimg;