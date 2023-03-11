import { CustomHead } from "../../components/utils/head";
import { Layout } from "../../components/utils/layout";
import { Location } from "../../components/utils/location/location";
import { URL } from "../_app";

export default function AboutPage() {
  return (
    <>
      <CustomHead
        title={"Safar | Корзина"}
        desc={`Корзина`}
        canonical={`${URL}/cart`}
      />
      <Layout>
        <section>
          <div className={`box`}>
            <Location location={"Корзина"} title={"Корзина"} />
          </div>
        </section>
      </Layout>
    </>
  );
}
