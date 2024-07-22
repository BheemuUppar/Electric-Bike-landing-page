import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { seo3, seo3Lite } from "../assets/config";
import { seo3Max } from "../assets/config";
import ProductDetails from "./ProductDetails";
import ComparisonTable from "./CompareTable";

export default function Product() {
  const location = useLocation();
  let [bike, setBike] = useState(undefined);
  useEffect(() => {
    if (location.pathname.endsWith("seo3_lite")) {
      setBike(seo3Lite);
    } else if (location.pathname.endsWith("seo3")) {
      setBike(seo3);
    } else if (location.pathname.endsWith("seo3_max")) {
      setBike(seo3Max);
    } else if (location.pathname.endsWith("all")) {
      setBike(undefined);
    }
    console.log(bike);
  }, [location]);
  return (
    <>
      {/* <div>{bike.name}</div> */}
      {/* {bike && <img src={bike.images[0].path} alt="" />} */}
      {bike ? (
        <ProductDetails bike={bike} />
      ) : (
        <ComparisonTable products={[seo3Lite, seo3, seo3Max]} />
      )}
    </>
  );
}
