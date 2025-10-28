
import { PlusIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { MinusIcon } from "@heroicons/react/24/solid";
import Test from "./Test";

function Zamfolia() {
  const [cart, setCart] = useState([]);
  const [testcard, setTestcard] = useState([]);
  const [show, setShow] = useState(false);

  const BuyZamfolia = (e) => {
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


  // useEffect(() => {
  //   if (cart.length === 0) return;
  //   setTestcard([...cart]);
  //   setShow(true);
  // }, [cart]);

  return (
    <>



      <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-items-center W-[90%]  gap-y-16 md:gap-x-3   px-4">

        {/* <div className="bg-gray-400">
                        {show &&
                            <div>{cart.map((items,index)=>(
                                <div key={index}>{items.id},{items.count}</div>
                                
                            ))}</div>
                        }
                    </div> */}

        <div className="  rounded-lg shadow-md w-[18rem] h-[23rem]  mt-10">
          <div className="flex bg-green-300 w-[100%] h-[73%] " > <img src="/public/img/z1.jpg" className="w-full h-full" alt="" /></div>
          <div className="bg-gray-300/50 h-[20%]  ">
            <p className="text-center truncate ">زامفولیا سبز کوچک (۲ شاخه)</p>
            <div className="mt-4 w-full text-center flex items-center justify-evenly "  >
              <button id="001" onClick={Delet}><MinusIcon className="w-5 text-black z-50" />

              </button>

              <button id="001" className="mt-1 z-50" onClick={BuyZamfolia} ><PlusIcon className="w-5 text-black z-50" /></button>
              <p>1.500.00</p>



            </div>
              <button className="w-full  bg-teal-700/90   rounded-lg mt-2"><Link className="" to="/Test">basket</Link>
                <span>
                  {
                    cart.find((item) => item.id === "001")?.count || 0
                  }
                </span></button>
          </div>
        </div>
        <div className="  rounded-lg shadow-md w-[18rem] h-[23rem] mt-10">
          <div className="flex bg-green-300 w-[100%] h-[73%] "> <img src="/public/img/z2.jpg" className="w-full h-full" alt="" /></div>
          <div className="bg-gray-300/50 h-[20%] ">
            <p className="text-center truncate ">زامفولیا مشکی</p>
            <div className="mt-4 w-full text-center flex items-center justify-evenly"  >
              <button id="002" onClick={Delet}><MinusIcon className="w-5 text-black z-50" />

              </button>

              <button id="002" className="mt-1 z-50" onClick={BuyZamfolia} ><PlusIcon className="w-5 text-black z-50" /></button>
              <p>1.500.00</p>



            </div>
              <button className="w-full  bg-teal-700/90   rounded-lg mt-2"><Link className="" to="/Test">basket</Link>
                <span>
                  {
                    cart.find((item) => item.id === "002")?.count || 0
                  }
                </span></button>
          </div>
        </div>




        <div className="  rounded-lg shadow-md w-[18rem] h-[23rem] mt-10">
          <div className="flex bg-green-300 w-[100%] h-[73%] "> <img src="/public/img/z3.jpg" className="w-full h-full" alt="" /></div>
          <div className="bg-gray-300/50 h-[20%] ">
         <p className="text-center truncate ">گیاه زاموفیلیا سایز متوسط</p>
            <div className="mt-4 w-full text-center flex items-center justify-evenly"  >
              <button id="003" onClick={Delet}><MinusIcon className="w-5 text-black z-50" />

              </button>

              <button id="003" className="mt-1 z-50" onClick={BuyZamfolia} ><PlusIcon className="w-5 text-black z-50" /></button>
              <p>1.500.00</p>



            </div>
              <button className="w-full  bg-teal-700/90   rounded-lg mt-2"><Link className="" to="/Test">basket</Link>
                <span>
                  {
                    cart.find((item) => item.id === "003")?.count || 0
                  }
                </span></button>
          </div>
        </div>
        <div className="  rounded-lg shadow-md w-[18rem] h-[23rem] mt-10">
          <div className="flex bg-green-300 w-[100%] h-[73%] "> <img src="/public/img/z4.webp" className="w-full h-full" alt="" /></div>
          <div className="bg-gray-300/50 h-[20%] ">
            <p className="text-center truncate ">زاموفیلیا بلک متوسط (4 شاخه)</p>
            <div className="mt-4 w-full text-center flex items-center justify-evenly"  >
              <button id="004" onClick={Delet}><MinusIcon className="w-5 text-black z-50" />

              </button>

              <button id="004" className="mt-1 z-50" onClick={BuyZamfolia} ><PlusIcon className="w-5 text-black z-50" /></button>
              <p>1.500.00</p>



            </div>
              <button className="w-full  bg-teal-700/90   rounded-lg mt-2"><Link className="" to="/Test">basket</Link>
                <span>
                  {
                    cart.find((item) => item.id === "004")?.count || 0
                  }
                </span></button>
          </div>
        </div>
        <div className="  rounded-lg shadow-md w-[18rem] h-[23rem] mt-10">
          <div className="flex bg-green-300 w-[100%] h-[73%] "> <img src="/public/img/z5.webp" className="w-full h-full" alt="" /></div>
          <div className="bg-gray-300/50 h-[20%] ">
            <p className="text-center truncate ">زاموفیلیا سبز سایز 4</p>
            <div className="mt-4 w-full text-center flex items-center justify-evenly"  >
              <button id="005" onClick={Delet}><MinusIcon className="w-5 text-black z-50" />

              </button>

              <button id="005" className="mt-1 z-50" onClick={BuyZamfolia} ><PlusIcon className="w-5 text-black z-50" /></button>
              <p>1.500.00</p>



            </div>
              <button className="w-full  bg-teal-700/90   rounded-lg mt-2"><Link className="" to="/Test">basket</Link>
                <span>
                  {
                    cart.find((item) => item.id === "005")?.count || 0
                  }
                </span></button>
          </div>
        </div>
        <div className="  rounded-lg shadow-md w-[18rem] h-[23rem]">
          <div className="flex bg-green-300 w-[100%] h-[73%] "> <img src="/public/img/z6.jpg" className="w-full h-full" alt="" /></div>
          <div className="bg-gray-300/50 h-[20%] ">
            <p className="text-center truncate ">زامفولیا 6 شاخه</p>
            <div className="mt-4 w-full text-center flex items-center justify-evenly"  >
              <button id="006" onClick={Delet}><MinusIcon className="w-5 text-black z-50" />

              </button>

              <button id="006" className="mt-1 z-50" onClick={BuyZamfolia} ><PlusIcon className="w-5 text-black z-50" /></button>
              <p>1.500.00</p>



            </div>
              <button className="w-full  bg-teal-700/90   rounded-lg mt-2"><Link className="" to="/Test">basket</Link>
                <span>
                  {
                    cart.find((item) => item.id === "006")?.count || 0
                  }
                </span></button>
          </div>
        </div>
        <div className="  rounded-lg shadow-md w-[18rem] h-[23rem]">
          <div className="flex bg-green-300 w-[100%] h-[73%] "> <img src="/public/img/z7.jpg" className="w-full h-full" alt="" /></div>
          <div className="bg-gray-300/50 h-[20%] ">
            <p className="text-center truncate ">زامفولیا پهن</p>
            <div className="mt-4 w-full text-center flex items-center justify-evenly"  >
              <button id="007" onClick={Delet}><MinusIcon className="w-5 text-black z-50" />

              </button>

              <button id="007" className="mt-1 z-50" onClick={BuyZamfolia} ><PlusIcon className="w-5 text-black z-50" /></button>
              <p>1.500.00</p>



            </div>
              <button className="w-full  bg-teal-700/90   rounded-lg mt-2"><Link className="" to="/Test">basket</Link>
                <span>
                  {
                    cart.find((item) => item.id === "007")?.count || 0
                  }
                </span></button>
          </div>
        </div>
        <div className="  rounded-lg shadow-md w-[18rem] h-[23rem]">
          <div className="flex bg-green-300 w-[100%] h-[73%] "> <img src="/public/img/z8.jpg" className="w-full h-full" alt="" /></div>
          <div className="bg-gray-300/50 h-[20%] ">
            <p className="text-center truncate ">زامفولیا تزِینی</p>
            <div className="mt-4 w-full text-center flex items-center justify-evenly"  >
              <button id="008" onClick={Delet}><MinusIcon className="w-5 text-black z-50" />

              </button>

              <button id="008" className="mt-1 z-50" onClick={BuyZamfolia} ><PlusIcon className="w-5 text-black z-50" /></button>
              <p>1.500.00</p>



            </div>
              <button className="w-full  bg-teal-700/90   rounded-lg mt-2"><Link className="" to="/Test">basket</Link>
                <span>
                  {
                    cart.find((item) => item.id === "008")?.count || 0
                  }
                </span></button>
          </div>
        </div>
        <div className="  rounded-lg shadow-md w-[18rem] h-[23rem]">
          <div className="flex bg-green-300 w-[100%] h-[73%] "> <img src="/public/img/z9.jpg" className="w-full h-full" alt="" /></div>
          <div className="bg-gray-300/50 h-[20%] ">
            <p className="text-center truncate ">زامفولیا چند شاخه</p>
            <div className="mt-4 w-full text-center flex items-center justify-evenly"  >
              <button id="009" onClick={Delet}><MinusIcon className="w-5 text-black z-50" />

              </button>

              <button id="009" className="mt-1 z-50" onClick={BuyZamfolia} ><PlusIcon className="w-5 text-black z-50" /></button>
              <p>1.500.00</p>



            </div>
              <button className="w-full  bg-teal-700/90   rounded-lg mt-2"><Link className="" to="/Test">basket</Link>
                <span>
                  {
                    cart.find((item) => item.id === "009")?.count || 0
                  }
                </span></button>
          </div>
        </div>
        <div className="  rounded-lg shadow-md w-[18rem] h-[23rem]">
          <div className="flex bg-green-300 w-[100%] h-[73%] "> <img src="/public/img/z10.jpg" className="w-full h-full" alt="" /></div>
          <div className="bg-gray-300/50 h-[20%] ">
            <p className="text-center truncate ">زامفولیا 2 شاخه</p>
            <div className="mt-4 w-full text-center flex items-center justify-evenly"  >
              <button id="010" onClick={Delet}><MinusIcon className="w-5 text-black z-50" />

              </button>

              <button id="010" className="mt-1 z-50" onClick={BuyZamfolia} ><PlusIcon className="w-5 text-black z-50" /></button>
              <p>1.500.00</p>



            </div>
              <button className="w-full  bg-teal-700/90   rounded-lg mt-2"><Link className="" to="/Test">basket</Link>
                <span>
                  {
                    cart.find((item) => item.id === "010")?.count || 0
                  }
                </span></button>
          </div>
        </div>
        <div className="  rounded-lg shadow-md w-[18rem] h-[23rem]">
          <div className="flex bg-green-300 w-[100%] h-[73%] "> <img src="/public/img/z11.webp" className="w-full h-full" alt="" /></div>
          <div className="bg-gray-300/50 h-[20%] ">
            <p className="text-center truncate ">زامفولیا پهن 10 شاخه</p>
            <div className="mt-4 w-full text-center flex items-center justify-evenly"  >
              <button id="011" onClick={Delet}><MinusIcon className="w-5 text-black z-50" />

              </button>

              <button id="011" className="mt-1 z-50" onClick={BuyZamfolia} ><PlusIcon className="w-5 text-black z-50" /></button>
              <p>1.500.00</p>



            </div>
              <button className="w-full  bg-teal-700/90   rounded-lg mt-2"><Link className="" to="/Test">basket</Link>
                <span>
                  {
                    cart.find((item) => item.id === "011")?.count || 0
                  }
                </span></button>
          </div>
        </div>
        <div className="  rounded-lg shadow-md w-[18rem] h-[23rem]">
          <div className="flex bg-green-300 w-[100%] h-[73%] "> <img src="/public/img/z12.jpg" className="w-full h-full" alt="" /></div>
          <div className="bg-gray-300/50 h-[20%] ">
            <p className="text-center truncate ">زامفولیات با گلدان طلایی</p>
            <div className="mt-4 w-full text-center flex items-center justify-evenly"  >
              <button id="012" onClick={Delet}><MinusIcon className="w-5 text-black z-50" />

              </button>

              <button id="012" className="mt-1 z-50" onClick={BuyZamfolia} ><PlusIcon className="w-5 text-black z-50" /></button>
              <p>1.500.00</p>



            </div>
              <button className="w-full  bg-teal-700/90   rounded-lg mt-2"><Link className="" to="/Test">basket</Link>
                <span>
                  {
                    cart.find((item) => item.id === "012")?.count || 0
                  }
                </span></button>
          </div>
        </div>
        <div className="  rounded-lg shadow-md w-[18rem] h-[23rem]">
          <div className="flex bg-green-300 w-[100%] h-[73%] "> <img src="/public/img/z13.webp" className="w-full h-full" alt="" /></div>
          <div className="bg-gray-300/50 h-[20%] ">
            <p className="text-center truncate ">زامفولیا دورنگ</p>
            <div className="mt-4 w-full text-center flex items-center justify-evenly"  >
              <button id="013" onClick={Delet}><MinusIcon className="w-5 text-black z-50" />

              </button>

              <button id="013" className="mt-1 z-50" onClick={BuyZamfolia} ><PlusIcon className="w-5 text-black z-50" /></button>
              <p>1.500.00</p>



            </div>
              <button className="w-full  bg-teal-700/90   rounded-lg mt-2"><Link className="" to="/Test">basket</Link>
                <span>
                  {
                    cart.find((item) => item.id === "013")?.count || 0
                  }
                </span></button>
          </div>
        </div>
        <div className="  rounded-lg shadow-md w-[18rem] h-[23rem]">
          <div className="flex bg-green-300 w-[100%] h-[73%] "> <img src="/public/img/z14.webp" className="w-full h-full" alt="" /></div>
          <div className="bg-gray-300/50 h-[20%] ">
            <p className="text-center truncate ">زامفولیت سایز کوچک</p>
            <div className="mt-4 w-full text-center flex items-center justify-evenly"  >
              <button id="014" onClick={Delet}><MinusIcon className="w-5 text-black z-50" />

              </button>

              <button id="014" className="mt-1 z-50" onClick={BuyZamfolia} ><PlusIcon className="w-5 text-black z-50" /></button>
              <p>1.500.00</p>



            </div>
              <button className="w-full  bg-teal-700/90   rounded-lg mt-2"><Link className="" to="/Test">basket</Link>
                <span>
                  {
                    cart.find((item) => item.id === "014")?.count || 0
                  }
                </span></button>
          </div>
        </div>
        <div className="  rounded-lg shadow-md w-[18rem] h-[23rem]">
          <div className="flex bg-green-300 w-[100%] h-[73%] "> <img src="/public/img/z15.avif" className="w-full h-full" alt="" /></div>
          <div className="bg-gray-300/50 h-[20%] ">
            <p className="text-center truncate ">زامفولیا بلند 6 شاخه</p>
            <div className="mt-4 w-full text-center flex items-center justify-evenly"  >
              <button id="015" onClick={Delet}><MinusIcon className="w-5 text-black z-50" />

              </button>

              <button id="015" className="mt-1 z-50" onClick={BuyZamfolia} ><PlusIcon className="w-5 text-black z-50" /></button>
              <p>1.500.00</p>



            </div>
              <button className="w-full  bg-teal-700/90   rounded-lg mt-2"><Link className="" to="/Test">basket</Link>
                <span>
                  {
                    cart.find((item) => item.id === "015")?.count || 0
                  }
                </span></button>
          </div>
        </div>
        <div className="  rounded-lg shadow-md w-[18rem] h-[23rem]">
          <div className="flex bg-green-300 w-[100%] h-[73%] "> <img src="/public/img/z16.jpg" className="w-full h-full" alt="" /></div>
          <div className="bg-gray-300/50 h-[20%] ">
            <p className="text-center truncate ">زامفولیا چند شاخه</p>
            <div className="mt-4 w-full text-center flex items-center justify-evenly"  >
              <button id="016" onClick={Delet}><MinusIcon className="w-5 text-black z-50" />

              </button>

              <button id="016" className="mt-1 z-50" onClick={BuyZamfolia} ><PlusIcon className="w-5 text-black z-50" /></button>
              <p>1.500.00</p>



            </div>
              <button className="w-full  bg-teal-700/90   rounded-lg mt-2"><Link className="" to="/Test">basket</Link>
                <span>
                  {
                    cart.find((item) => item.id === "016")?.count || 0
                  }
                </span></button>
          </div>
        </div>
        <div className="  rounded-lg shadow-md w-[18rem] h-[23rem]">
          <div className="flex bg-green-300 w-[100%] h-[73%] "> <img src="/public/img/z17.webp" className="w-full h-full" alt="" /></div>
          <div className="bg-gray-300/50 h-[20%] ">
            <p className="text-center truncate ">زامفولیا با گلدان شیک</p>
            <div className="mt-4 w-full text-center flex items-center justify-evenly"  >
              <button id="017" onClick={Delet}><MinusIcon className="w-5 text-black z-50" />

              </button>

              <button id="017" className="mt-1 z-50" onClick={BuyZamfolia} ><PlusIcon className="w-5 text-black z-50" /></button>
              <p>1.500.00</p>



            </div>
              <button className="w-full  bg-teal-700/90   rounded-lg mt-2"><Link className="" to="/Test">basket</Link>
                <span>
                  {
                    cart.find((item) => item.id === "017")?.count || 0
                  }
                </span></button>
          </div>
        </div>
        <div className="  rounded-lg shadow-md w-[18rem] h-[23rem]">
          <div className="flex bg-green-300 w-[100%] h-[73%] "> <img src="/public/img/z18.png" className="w-full h-full" alt="" /></div>
          <div className="bg-gray-300/50 h-[20%] ">
            <p className="text-center truncate ">زامفولیا سایز کوجک</p>
            <div className="mt-4 w-full text-center flex items-center justify-evenly"  >
              <button id="018" onClick={Delet}><MinusIcon className="w-5 text-black z-50" />

              </button>

              <button id="018" className="mt-1 z-50" onClick={BuyZamfolia} ><PlusIcon className="w-5 text-black z-50" /></button>
              <p>1.500.00</p>



            </div>
              <button className="w-full  bg-teal-700/90   rounded-lg mt-2"><Link className="" to="/Test">basket</Link>
                <span>
                  {
                    cart.find((item) => item.id === "018")?.count || 0
                  }
                </span></button>
          </div>
        </div>
        <div className="  rounded-lg shadow-md w-[18rem] h-[23rem]">
          <div className="flex bg-green-300 w-[100%] h-[73%] "> <img src="/img/z19.webp" className="w-full h-full" alt="" /></div>
          <div className="bg-gray-300/50 h-[20%] ">
            <p className="text-center truncate ">زامفولیا پهن</p>
            <div className="mt-4 w-full text-center flex items-center justify-evenly"  >
              <button id="019" onClick={Delet}><MinusIcon className="w-5 text-black z-50" />

              </button>

              <button id="019" className="mt-1 z-50" onClick={BuyZamfolia} ><PlusIcon className="w-5 text-black z-50" /></button>
              <p>1.500.00</p>



            </div>
              <button className="w-full  bg-teal-700/90   rounded-lg mt-2"><Link className="" to="/Test">basket</Link>
                <span>
                  {
                    cart.find((item) => item.id === "019")?.count || 0
                  }
                </span></button>
          </div>
        </div>
        <div className="  rounded-lg shadow-md w-[18rem] h-[23rem]">
          <div className="flex bg-green-300 w-[100%] h-[73%] "> <img src="/img/z20.webp" className="w-full h-full" alt="" /></div>
          <div className="bg-gray-300/50 h-[20%] ">
            <p className="text-center truncate ">زامفولیا سایز بزرگ با گلدان</p>
            <div className="mt-4 w-full text-center flex items-center justify-evenly"  >
              <button id="020" onClick={Delet}><MinusIcon className="w-5 text-black z-50" />

              </button>

              <button id="020" className="mt-1 z-50" onClick={BuyZamfolia} ><PlusIcon className="w-5 text-black z-50" /></button>
              <p>1.500.00</p>



            </div>
              <button className="w-full  bg-teal-700/90   rounded-lg mt-2"><Link className="" to="/Test">basket</Link>
                <span>
                  {
                    cart.find((item) => item.id === "020")?.count || 0
                  }
                </span></button>
          </div>
        </div>
      </div>

      {show &&
        <Test cart={testcard.filter((item) => item && item.id && item.count)} />}
    </>
  )
}

export default Zamfolia;