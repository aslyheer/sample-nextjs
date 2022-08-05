import type { NextPage } from "next";
import { TestService } from "../services/test.service";
export async function getStaticProps() {
  let data = await new TestService().get();
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
          return (
            <li key={_data.id}> {new Date(_data.created).toDateString()}</li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
