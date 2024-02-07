'use client';

import { useEffect } from "react";

const Load = () => {
  useEffect(()=>{
    Load();
  })

    return (
      <div>
        <span className="loading loading-ball loading-xs"></span>
        <span className="loading loading-ball loading-sm"></span>
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-lg"></span>
      </div>
    );
  };

  export default Load;