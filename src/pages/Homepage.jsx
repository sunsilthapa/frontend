import React, {useEffect} from "react";
import { testApi } from "../apis/Api";

const Homepage = () => {
  //* Auto run when page loads
  useEffect(()=>{
    testApi().then((res) => {
      console.log(res.data)
    })
  })
  return (
    <div>
      <h1>Welcome to Homepage folder</h1>
    </div>
  );
};

export default Homepage;
