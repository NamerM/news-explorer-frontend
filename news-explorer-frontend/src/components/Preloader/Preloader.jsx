import React, { useState} from "react";


function Preloader() {
  // const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="preloader">
      <p className="preloader__icon rotation" alt="preloader animation" />
      <h2 className="preloader__title">Searching for news...</h2>
    </div>
  )
}


export default Preloader;
