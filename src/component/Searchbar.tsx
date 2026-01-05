import { ImagePlus, Mic, Send } from "lucide-react";
import React from "react";

function Searchbar() {
    function handleChange(e:any){
        e.preventDefault()

    }
  return (
    <div>
      <form action="" onClick={(e)=>handleChange(e)}>
        <div className=" shadow flex px-4 py-3 rounded-4xl border gap-4">
          <input type="text" className="w-full border-none outline-none focus:outline-none pl-4"  placeholder="Enter here..."/> <ImagePlus />
          <Mic />
          <button type="submit">
            <Send />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Searchbar;
