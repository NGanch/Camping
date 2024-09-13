import {
  // Users,
  Vertical,
  Automatic,
  Kitchen,
  // Beds,
  Petrol,
  // Conditioner,
  // CD,
  Radio,
  // Hob
} from "../../assets/Icons";

type Props = {
  count?: number;
  width?: number;
  height?: number;
};

const ButtonList = ({ count, width, height }: Props) => {
  // Використовуйте slice для відображення різної кількості елементів в залежності від значення count
  const buttonsToShow = [
    // { icon: <Users  />, text: `${details.adults} adults` },
    { icon: <Automatic width={width} height={height} />, text: "Automatic" },
    { icon: <Petrol />, text: "Petrol" },
    { icon: <Kitchen width={width} height={height} />, text: "Kitchen" },
    // { icon: <Beds />, text: `${details.beds} Beds` },
    { icon: <Vertical width={width} height={height} />, text: "AC" },
    // { icon: <Conditioner />, text: AC },
    // { icon: <CD />, text: "details.CD" },
    { icon: <Radio />, text: `Radio` },
    // { icon: <Hob />, text: `hob` },
  ].slice(0, count);

  return (
    <ul className="flex flex-wrap items-center gap-[8px] w-full ">
      {buttonsToShow.map((button, index) => (
        <li
          key={index}
          
          className="p-[11px_18px] flex items-center gap-[8px] bg-tritiaryPurpleGray rounded-[100px] "
        >
          {button.icon}
          <p className="text-primaryBlack h-[20px] text-[16px] font-[500] leading-[1.25] ">
            {button.text}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ButtonList;
