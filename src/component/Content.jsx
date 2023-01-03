import React from "react";

import {data} from "../data/data";

const Content = () => {
  return (
    <div className=" z-20 w-full h-full ">
      <div className="sm:max-w-[1190px] sm:ml-[350px] rtl">
        <p className=" text-[40px] text-center font-bold text-[#F89E1B] pt-8 pb-4">
          EPOCH STAKING
        </p>

        
        
          {/* card */}
        <div className="max-w-[800px] mx-auto py-4 px-2 grid md:grid-cols-2 gap-6">
          {data.map((item,key)=>(
            <div key={key} className="rounded-xl border-2 border-white/30 py-2">
            {/* overlay */}
            <div className=" w-full h-full bg-black/30 backdrop-blur-sm rounded-xl text-white text-center">
              <p className=" text-[18px] px-2 pt-4">
                {item.title}
              </p>
              <p className="px-2 text-[30px] font-bold">{item.para}</p>
            </div>
            </div>
          ))}
          </div>

          

      </div>
    </div>
  );
};

export default Content;
