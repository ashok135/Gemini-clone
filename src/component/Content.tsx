import React, { use } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

function Content() {
  const textdata = useSelector((state: RootState) => state.inputValue);
  return (
    <div className="pt-20  ">
      {!textdata ? (
        <div>
          <h1 className="gemini-text text-[30px] md:text-[50px] font-semibold">
            Hello,Dev.
          </h1>
          <h2 className="text-[22px] md:text-[60px] text-gray-400 capitalize">
            how can i help you today ?
          </h2>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto">
          <h2 className="text-right">
            <span className="inline-block bg-gray-200 px-2 py-1 rounded-xl">
              {textdata}
            </span>
          </h2>

          <p>Answer</p>
        </div>
      )}
    </div>
  );
}

export default Content;
