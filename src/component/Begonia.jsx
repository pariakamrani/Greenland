import { useState, useEffect } from "react";
import { MinusIcon } from "@heroicons/react/24/solid";
import { PlusIcon } from "@heroicons/react/24/solid";
import Test from "./Test";
import { Link } from "react-router-dom";
function Begonia(){

const [cart, setCart] = useState([]);
  const [testcard, setTestcard] = useState([]);
  const [show, setShow] = useState(false);

  const Bybonay = (e) => {
    const id = e.currentTarget.id.trim();
    setCart((prev) => {
      const existing = prev.find((item) => item.id === id);
      return existing
        ? prev.map((item) =>
            item.id === id ? { ...item, count: item.count + 1 } : item
          )
        : [...prev, { id, count: 1 }];

        
    });

    console.log("cart inside Zamfolia:", cart);
console.log("testcard before Test:", testcard);
  };

  const Delet = (e) => {
    const id = e.currentTarget.id.trim();
    setCart((prev) => {
      const existing = prev.find((item) => item.id === id);
      if (!existing) return prev;
      if (existing.count > 1) {
        return prev.map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        );
      }
      return prev.filter((item) => item.id !== id);
    });

    console.log("cart inside Zamfolia:", cart);
console.log("testcard before Test:", testcard);
  };

  // ✅ وقتی cart تغییر کرد، testcard و show را sync کن
  useEffect(() => {
    if (cart.length > 0) {
      setTestcard(cart);
      setShow(true);
    } else {
      setShow(false);
    }
  }, [cart]);


  
    return(
        <>
        <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-items-center W-[90%]  gap-y-16 md:gap-x-1 md:py-10   px-10">
                                
            <div className="  w-[18rem] h-[23rem] mt-10 rounded-lg shadow-md">
                        <div className="flex bg-green-300 w-[100%]  h-[77%] overflow-hidden  "> <img src="/public/img/bego1.jpg" className="w-full h-full" alt="" /></div>
                         <p className="text-center truncate pt-4"></p>
                        <div className="bg-gray-300/50 w-full text-center flex items-center justify-evenly rounded-lg mt-3"  >
                                <button id="0001" onClick={Delet}><MinusIcon  className="w-5 text-black z-50"/>
                                    
                                </button>
                                
                                <button id="0001" className=" z-50" onClick={Bybonay} ><PlusIcon  className="w-5 text-black z-50"/></button>
                                <p>1.500.00</p>

                                
                                
                            </div>
                            <button className="w-full  bg-teal-700/90  rounded-lg mt-1"><Link className="" to="/Test">basket</Link> <span>
                                      {
                                        cart.find((item) => item.id === "0001")?.count || 0
                                      }
                                </span></button>
            </div>

            <div className="  w-[18rem] h-[23rem] mt-10 rounded-lg shadow-md ">
                        <div className="flex bg-green-300 w-[100%] h-[77%] "> <img src="/public/img/bego2.jpg" className="w-full h-full" alt="" /></div>
                            <p className="text-center truncate pt-4"></p>
                        <div className="bg-gray-300/50 w-full text-center flex items-center justify-evenly rounded-lg mt-3"  >
                                <button id="0002" onClick={Delet}><MinusIcon  className="w-5 text-black z-50"/>
                                    
                                </button>
                                
                                <button id="0002" className=" z-50" onClick={Bybonay} ><PlusIcon  className="w-5 text-black z-50"/></button>
                                
                                <p>1.200.000</p>

                            </div>
                            <button className="w-full  bg-teal-700/90  rounded-lg mt-1"><Link className="" to="/Test">basket</Link> <span>
                                      {
                                        cart.find((item) => item.id === "0002")?.count || 0
                                      }
                                </span></button>
            </div>

            <div className=" w-[18rem] h-[23rem] mt-10 rounded-lg shadow-md">
                        <div className="flex bg-green-300 w-[100%] h-[77%] "> <img src="/public/img/bego3.jpg" className="w-full h-full" alt="" /></div>
                            <p className="text-center truncate pt-4"></p>
                        <div className="bg-gray-300/50 w-full text-center flex items-center justify-evenly rounded-lg mt-3"  >
                                <button id="0003" onClick={Delet}><MinusIcon  className="w-5 text-black z-50"/>
                                    
                                </button>
                                
                                <button id="0003" className="bg-gray-300/50 z-50" onClick={Bybonay} ><PlusIcon  className="w-5 text-black z-50"/></button>
                                <p>500.000</p>

                                
                            </div>
                            <button className="w-full  bg-teal-700/90  rounded-lg mt-1"><Link className="" to="/Test">basket</Link> <span>
                                      {
                                        cart.find((item) => item.id === "0003")?.count || 0
                                      }
                                </span></button>
            </div>

            <div className=" w-[18rem] h-[23rem] mt-10 rounded-lg shadow-md">
                        <div className="flex bg-green-300 w-[100%] h-[77%] "> <img src="/public/img/bego4.jpg" className="w-full h-full" alt="" /></div>
                            <p className="text-center truncate pt-4"></p>
                        <div className="bg-gray-300/50 w-full text-center flex items-center justify-evenly rounded-lg mt-3"  >
                                <button id="0004" onClick={Delet}><MinusIcon  className="w-5 text-black z-50"/>
                                    
                                </button>
                                
                                <button id="0004" className=" z-50" onClick={Bybonay} ><PlusIcon  className="w-5 text-black z-50"/></button>
                                <p>1.100.000</p>

                                
                            </div>
                            <button className="w-full  bg-teal-700/90  rounded-lg mt-1"><Link className="" to="/Test">basket</Link> <span>
                                      {
                                        cart.find((item) => item.id === "0004")?.count || 0
                                      }
                                </span></button>
            </div>

            <div className=" w-[18rem] h-[23rem] mt-10 rounded-lg shadow-md">
                        <div className="flex bg-green-300 w-[100%] h-[77%] "> <img src="/public/img/bego5.jpg" className="w-full h-full" alt="" /></div>
                            <p className="text-center truncate pt-4"></p>
                        <div className="bg-gray-300/50 w-full text-center flex items-center justify-evenly rounded-lg mt-3"  >
                                <button id="0005" onClick={Delet}><MinusIcon  className="w-5 text-black z-50"/>
                                    
                                </button>
                                
                                <button id="0005" className="bg-gray-300/50 z-50" onClick={Bybonay} ><PlusIcon  className="w-5 text-black z-50"/></button>
                                
                                <p>2.500.000</p>

                            </div>
                            <button className="w-full  bg-teal-700/90  rounded-lg mt-1"><Link className="" to="/Test">basket</Link> <span>
                                      {
                                        cart.find((item) => item.id === "0005")?.count || 0
                                      }
                                </span></button>
            </div>

            <div className=" w-[18rem] h-[23rem] mt-10 rounded-lg shadow-md">
                        <div className="flex bg-green-300 w-[100%] h-[77%] "> <img src="/public/img/bego6.jpg" className="w-full h-full" alt="" /></div>
                            <p className="text-center truncate pt-4"></p>
                        <div className="bg-gray-300/50 w-full text-center flex items-center justify-evenly rounded-lg mt-3"  >
                                <button id="0006" onClick={Delet}><MinusIcon  className="w-5 text-black z-50"/>
                                    
                                </button>
                                
                                <button id="0006" className=" z-50" onClick={Bybonay} ><PlusIcon  className="w-5 text-black z-50"/></button>
                                
                                <p>300.000</p>

                            </div>
                            <button className="w-full  bg-teal-700/90  rounded-lg mt-1"><Link className="" to="/Test">basket</Link> <span>
                                      {
                                        cart.find((item) => item.id === "0006")?.count || 0
                                      }
                                </span></button>
            </div>

            <div className=" w-[18rem] h-[23rem] mt-10 rounded-lg shadow-md">
                        <div className="flex bg-green-300 w-[100%] h-[77%] "> <img src="/public/img/bagomia77.jpg" className="w-full h-full" alt="" /></div>
                            <p className="text-center truncate pt-4"></p>
                        <div className="bg-gray-300/50 w-full text-center flex items-center justify-evenly rounded-lg mt-3"  >
                                <button id="0007" onClick={Delet}><MinusIcon  className="w-5 text-black z-50"/>
                                    
                                </button>
                                
                                <button id="0007" className=" z-50" onClick={Bybonay} ><PlusIcon  className="w-5 text-black z-50"/></button>
                                
                                <p>1.200.000</p>

                            </div>
                            <button className="w-full  bg-teal-700/90  rounded-lg mt-1"><Link className="" to="/Test">basket</Link> <span>
                                      {
                                        cart.find((item) => item.id === "0007")?.count || 0
                                      }
                                </span></button>
            </div>
 
            <div className=" w-[18rem] h-[23rem] mt-10 rounded-lg shadow-md">
                        <div className="flex bg-green-300 w-[100%] h-[77%] "> <img src="/public/img/bego8.jpg" className="w-full h-full" alt="" /></div>
                            <p className="text-center truncate pt-4"></p>
                        <div className="bg-gray-300/50 w-full text-center flex items-center justify-evenly rounded-lg mt-3"  >
                                <button id="0008" onClick={Delet}><MinusIcon  className="w-5 text-black z-50"/>
                                    
                                </button>
                                
                                <button id="0008" className=" z-50" onClick={Bybonay} ><PlusIcon  className="w-5 text-black z-50"/></button>
                                <p>3.200.000</p>

                                
                            </div>
                            <button className="w-full  bg-teal-700/90  rounded-lg mt-1"><Link className="" to="/Test">basket</Link> <span>
                                      {
                                        cart.find((item) => item.id === "0008")?.count || 0
                                      }
                                </span></button>
            </div>
        </div>
        {show&& 
          <Test cart={testcard.filter((item) => item && item.id && item.count)} />}
        </>
    )
}
export default Begonia;