import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MainButton from "../components/Button/MainButton";


import "../components/components.scss";

const Main = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/campers`);
  };

  return (
    <div className="bg-[url('./assets/picture.jpg')] bg-cover bg-center h-[696px] w-full">
      <div className="container">
        <div className="pt-[260px] pb-[260px] flex items-center xl:items-start flex-col ">
          <h1 className="mb-[16px] text-secondaryWhite text-[36px] md:text-[48px] font-[600] leading-[1.25] ">
            Campers of your dreams
          </h1>
          <p className="mb-[40px] text-secondaryWhite text-[16px] md:text-[24px] font-[600] leading-[1.25] ">
            You can find everything you want in our catalog
          </p>
          <MainButton
            type={"button"}
            label={"View Now"}
            onClick={handleClick}
          />
        </div>

        <ToastContainer />
      </div>
    </div>
  );
};
export default Main;
