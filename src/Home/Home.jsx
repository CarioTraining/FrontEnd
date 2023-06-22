import { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import Banner from "./Banner/Banner";
import Body from "./Body/Body";
import Brand from "./Body/Brand";
import Footer from "../Footer/Footer";
export default function Home() {
  const [brand, setBrand] = useState([0, 0, 0]);
  const headers = {
    "Content-Type": "application/json",
  };
  async function getBrands() {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_NAME}/Brand`,
      headers
    );
    const data = await response.json();
    setBrand(data);
  }
  useEffect(() => {
    getBrands();
  }, [setBrand]);
  return (
    <>
      <NavBar />
      <Banner />
      <Body />
      {brand && <Brand brand={brand[0]} />}
      {brand && <Brand brand={brand[1]} />}
      {brand && <Brand brand={brand[2]} />}
      <Footer />
    </>
  );
}
