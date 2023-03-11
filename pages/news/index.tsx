import { CustomHead } from "../../components/utils/head";
import { Layout } from "../../components/utils/layout";
import { Location } from "../../components/utils/location/location";
import { URL } from "../_app";

export default function AboutPage() {
  return (
    <>
      <CustomHead
        title={"Safar | Новости"}
        desc={`Новости`}
        canonical={`${URL}/news`}
      />
      <Layout>
        <section>
          <div className={`box`}>
            <Location location={"Новости"} title={"Новости"} />
          </div>
        </section>
      </Layout>
    </>
  );
}
