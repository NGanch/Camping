import { GoodsType } from "../../redux/types/initialEntity";

import BookingForm from "../BookingForm/BookingForm";

import StarRating from "../StarRating/StarRating";

type Props = {
  goodsData: GoodsType;
};

const Reviews = ({ goodsData }: Props) => {
  const array = goodsData.reviews;
  console.log(array);
  return (
    <div className="mt-[44px] flex flex-row justify-center gap-[20px] ">
      <ul className="w-[430px] flex flex-col gap-[24px] ">
        {array.map(({ reviewer_name, reviewer_rating, comment }) => (
            <li className="flex flex-col gap-[16px]">
              <div className="flex items-center gap-[16px] ">
                <div
                  className="flex items-center w-[60px] h-[60px] bg-tritiaryPurpleGray rounded-[60px] 
                  text-secondaryExoticPink text-[24px] font-[600] leading-[1.5] "
                >
                  {reviewer_name}
                </div>
                <div className="flex flex-col gap-[4px]">
                  <h4 className="text-primaryBlack text-[18px] font-[500] leading-[1.3] ">
                    {reviewer_name}
                  </h4>
                  <StarRating rate={reviewer_rating} />
                </div>
              </div>

              <p className="text-tritiaryGray text-[16px] font-[400] leading-[1.5]">
                {comment}
              </p>
            </li>
          ))
        }
      </ul>

      <BookingForm />
    </div>
  );
};
export default Reviews;
