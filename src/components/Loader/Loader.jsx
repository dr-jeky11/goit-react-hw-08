import { BounceLoader } from "react-spinners";

import s from "./Loader.module.css";

export default function Loader() {
  return (
    <>
      <BounceLoader size={22} className={s.loader} />
    </>
  );
}
