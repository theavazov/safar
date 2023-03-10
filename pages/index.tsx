import { CustomHead } from "../components/utils/head";
import { Layout } from "../components/utils/layout";
import { URL } from "./_app";

export default function HomePage() {
  return (
    <>
      <CustomHead title={"Safar"} desc={`home desc`} canonical={URL} />
      <Layout>
        <p>Home</p>
      </Layout>
    </>
  );
}
