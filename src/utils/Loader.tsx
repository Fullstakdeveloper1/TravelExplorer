import { Oval } from "react-loader-spinner";
import "./Loader.css"
function Loader() {
  return (
    <>
     <Oval
        height="30"
        width="40"
        color="#4fa94d"
        ariaLabel="oval-loading"
        wrapperClass="loader"
        />
    </>
  )
}

export default Loader