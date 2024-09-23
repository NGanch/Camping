import Modal from "../Modal/Modal";
import { GoodsType } from "../../redux/types/initialEntity";
import Gallery from "../Gallery/Gallery";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";

import { Outlet } from "react-router-dom";

import { MapPin } from "../../assets/Social";
import { useState } from "react";

import "../components.scss";


type Props = {
  goodsData: GoodsType;
  isOpen: boolean;
  handleClose: () => void;
};

const InfoinModal = ({ goodsData, isOpen, handleClose }: Props) => {
  const [activeTab, setActiveTab] = useState("");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <div className="w-[902px] h-[600px] overflow-scroll">
        <div className="flex gap-[24px] " key={goodsData.id}>
          <div>
            <div className="flex flex-col items-start">
              <h2 className="text-primaryBlack text-[24px] font-[600] leading-[1.25] ">
                {goodsData.name}
              </h2>

              <div className="mt-[8px] flex gap-[16px]">
                <div>
                  <p className="text-primaryBlack text-[16px] font-[400] leading-[1.5] ">
                    {goodsData.rating}(Reviews)
                  </p>
                </div>
                <div className="flex">
                  <MapPin />
                  <p className="text-primaryBlack text-[16px] font-[400] leading-[1.5] ">
                    {goodsData.location}
                  </p>
                </div>
              </div>

              <div className="mt-[8px] mb-[20px] flex items-center gap-[10px]">
                <p className="text-primaryBlack text-[24px] font-[600] leading-[1.25] ">
                  €{goodsData.price}
                </p>
              </div>
            </div>
            <Gallery gallery={goodsData.gallery} count={3} />

            <p className="mt-[24px] h-[100px] text-tritiaryGray text-[16px] font-[400] leading-[1.5] overflow-scroll">
              {goodsData.description}
            </p>
          </div>
        </div>

        <ul className="border-text mt-[24px] flex gap-[40px] ">
          <li>
            <button
              className={`pb-[24px] bg-transparent text-primaryBlack text-[20px] font-[600] leading-[1.2] ${
                activeTab === "features" ? "active" : ""
              }`}
              onClick={() => handleTabChange("features")}
            >
              Features
            </button>
          </li>
          <li>
            <button
              className={`pb-[24px] bg-transparent text-primaryBlack text-[20px] font-[600] leading-[1.2] ${
                activeTab === "reviews" ? "active" : ""
              }`}
              onClick={() => handleTabChange("reviews")}
            >
              Reviews
            </button>
          </li>
        </ul>
        {activeTab === "features" && <Features goodsData={goodsData} />}
        {activeTab === "reviews" && <Reviews goodsData={goodsData} />}
        <Outlet />
      </div>
    </Modal>
  );
};
export default InfoinModal;
