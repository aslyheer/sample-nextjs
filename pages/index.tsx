import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
export async function getServerSideProps() {
  let data = await (
    await fetch(
      "https://hub.dummyapis.com/products?noofRecords=10&idStarts=1001&currency=usd"
    )
  ).json();
  return {
    props: {
      data,
    },
  };
}
const Home: NextPage = (params: any) => {
  return (
    <div>
      <h1>Server Side Rendering</h1>
      <ul>
        {params.data.map((_data: any) => {
          return <li> {_data.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Home;
