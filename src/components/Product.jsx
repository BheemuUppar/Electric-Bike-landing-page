import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { seo3Lite } from "../assets/config";

export default function Product() {
  const location = useLocation();
  let bike = seo3Lite;
  useEffect(() => {
    console.log(location);
    console.log(seo3Lite);
    
  }, [location]);
  return (
    <>
      <div>product works</div>
      <img src={bike.images[0].path} alt="" />
    </>
  );
}
