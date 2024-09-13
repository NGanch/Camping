import {
  Vertical,
  Automatic,
  Kitchen,
  Petrol,
  Radio,
} from "../../assets/Icons";

type Props = {
  count?: number;
  width?: number;
  height?: number;
};

const ButtonList = ({ count, width, height }: Props) => {
  // Використовуйте slice для відображення різної кількості елементів в залежності від значення count
  const buttonsToShow = [
    { icon: <Automatic width={width} height={height} />, text: "Automatic" },
    { icon: <Petrol />, text: "Petrol" },
    { icon: <Kitchen width={width} height={height} />, text: "Kitchen" },
    { icon: <Vertical width={width} height={height} />, text: "AC" },
    { icon: <Radio />, text: `Radio` },
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
