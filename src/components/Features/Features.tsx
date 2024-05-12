import { GoodsType } from "../../redux/types/initialEntity";

import ButtonList from "../../components/ButtonList/ButtonList";
import BookingForm from "../../components/BookingForm/BookingForm";

type Props = {
  goodsData: GoodsType;
};

const Features = ({ goodsData }: Props) => {
  return (
    <div className="mt-[44px] flex flex-row justify-center gap-[20px] ">
      <div>
        <div className="w-[430px]">
          <ButtonList
            details={goodsData.details}
            width={20}
            height={20}
            count={10}
          />
        </div>

        <div className="mt-[44px] w-[430px]">
          <h2 className="border-text pb-[24px] text-primaryBlack text-[20px] font-[600] leading-[1.2] ">
            Vehicle details
          </h2>
          <ul className="mt-[24px] flex flex-col gap-[14px] ">
            <li className="flex justify-between">
              <h4 className="text-primaryBlack text-[18px] font-[500] leading-[1.3] ">
                Form
              </h4>
              <p className="text-primaryBlack text-[18px] font-[500] leading-[1.3] ">
                {goodsData.form}
              </p>
            </li>
            <li className="flex justify-between">
              <h4 className="text-primaryBlack text-[18px] font-[500] leading-[1.3] ">
                Length
              </h4>
              <p className="text-primaryBlack text-[18px] font-[500] leading-[1.3] ">
                {goodsData.length}
              </p>
            </li>
            <li className="flex justify-between">
              <h4 className="text-primaryBlack text-[18px] font-[500] leading-[1.3] ">
                Width
              </h4>
              <p className="text-primaryBlack text-[18px] font-[500] leading-[1.3] ">
                {goodsData.width}
              </p>
            </li>
            <li className="flex justify-between">
              <h4 className="text-primaryBlack text-[18px] font-[500] leading-[1.3] ">
                Height
              </h4>
              <p className="text-primaryBlack text-[18px] font-[500] leading-[1.3] ">
                {goodsData.height}
              </p>
            </li>
            <li className="flex justify-between">
              <h4 className="text-primaryBlack text-[18px] font-[500] leading-[1.3] ">
                Tank
              </h4>
              <p className="text-primaryBlack text-[18px] font-[500] leading-[1.3] ">
                {goodsData.tank}
              </p>
            </li>
            <li className="flex justify-between">
              <h4 className="text-primaryBlack text-[18px] font-[500] leading-[1.3] ">
                Consumption
              </h4>
              <p className="text-primaryBlack text-[18px] font-[500] leading-[1.3] ">
                {goodsData.consumption}
              </p>
            </li>
          </ul>
        </div>
      </div>

      <BookingForm />
    </div>
  );
};
export default Features;
