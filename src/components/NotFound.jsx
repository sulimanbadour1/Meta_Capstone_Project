import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="p-48 flex flex-col justify-center items-center">
      <h1 className="text-9xl font-extrabold text-[#495E57] tracking-widest">
        404
      </h1>
      <div className="bg-[#F4CE14] px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button className="mt-5">
        <a className="relative inline-block text-sm font-medium text-[#495E57]  group active:text-[#F4CE14] focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 rounded-lg bg-[#F4CE14] group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative block px-8 py-3 bg-[white] border border-current rounded-lg">
            <Link to="/">Go Home</Link>
          </span>
        </a>
      </button>
    </main>
  );
};

export default NotFound;
