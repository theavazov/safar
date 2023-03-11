import { CustomHead } from "../components/utils/head";
import { Layout } from "../components/utils/layout";
import { Location } from "../components/utils/location/location";
import { URL } from "./_app";

export default function AboutPage() {
  return (
    <>
      <CustomHead
        title={"Safar | Gallery"}
        desc={`about desc`}
        canonical={`${URL}/gallery`}
      />
      <Layout>
        <section>
          <div className={`box`}>
            <Location location={"Галерея"} title={"samar Галерея"} />
          </div>
        </section>
      </Layout>
    </>
  );
}
