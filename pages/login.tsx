import { CustomHead } from "../components/utils/head";
import { URL } from "./_app";

export default function LoginPage() {
  <>
    <CustomHead title={"Login"} desc={"Login"} canonical={`${URL}/login`} />
    <div>Hello</div>
  </>;
}
