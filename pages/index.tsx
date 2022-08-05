import type { NextPage } from "next";
export async function getStaticProps() {
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
          return <li key={_data.name}> {_data.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Home;
