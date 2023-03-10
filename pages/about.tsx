import { CustomHead } from "../components/utils/head";
import { Layout } from "../components/utils/layout";
import { Location } from "../components/utils/location/location";
import { URL } from "./_app";

export default function AboutPage() {
  return (
    <>
      <CustomHead
        title={"Safar | About"}
        desc={`about desc`}
        canonical={`${URL}/about`}
      />
      <Layout>
        <section>
          <div className={`box`}>
            <Location location={"О нас"} title={"О компании"} />
          </div>
        </section>
      </Layout>
    </>
  );
}
