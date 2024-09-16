import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Gallery from "../components/Gallery/Gallery";
import Features from "../components/Features/Features";
import Reviews from "../components/Reviews/Reviews";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getCatalogue } from "../redux/catalogue/catalogue-operation";
import { CatalogueState, GoodsType } from "../redux/types/initialEntity";

import { MapPin } from "../assets/Social";

const CampersItem = () => {
    const dispatch = useAppDispatch();
    const [activeTab, setActiveTab] = useState("");
    const { id } = useParams(); 
    const catalogue: CatalogueState[] = useAppSelector((state) => {
        return state.catalogue.catalogueList;
      });

      useEffect(() => {
        dispatch(getCatalogue());
      }, [dispatch]);
      
  const goodsData: GoodsType | null = id
    ? (catalogue.find(
        (category) => category.id === id
      ) as GoodsType)
    : null;
  
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  if (!goodsData) {
    return <div>Data is missing!</div>; // Додайте перевірку на випадок відсутності даних
  }
  return (
    <section className="section">
      <div className="container">
      <div className="">
        <div className="flex flex-col items-center justify-center md:items-start md:justify-start gap-[24px] " key={goodsData.id}>
 
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


      </div>
      </div>
    </section>
  );
};
export default CampersItem;