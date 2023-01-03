import React from "react";

import {data} from "../data/data";

const Content = () => {
  return (
    <div className=" z-20 w-full h-full ">
      <div className="sm:max-w-[1190px] sm:ml-[350px] rtl">
        <p className=" text-[40px] text-center font-bold text-[#F89E1B] py-8">
          EPOCH STAKING
        </p>

        
        
          {/* card */}
        <div className="max-w-[800px] mx-auto p-4 py-12 grid md:grid-cols-2 gap-6">
          {data.map((item,key)=>(
            <div key={key} className="rounded-xl ">
            {/* overlay */}
            <div className=" w-full h-full bg-black/50 rounded-xl text-white">
              <p className="font-bold text-2xl px-2 pt-4">
                {item.title}
              </p>
              <p className="px-2">{item.para}</p>
            </div>
            </div>
          ))}
          </div>

          

      </div>
    </div>
  );
};

export default Content;
