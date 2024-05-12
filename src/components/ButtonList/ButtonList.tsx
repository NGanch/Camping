
import {
    Users,
    Vertical,
    Automatic,
    Kitchen,
    Beds,
    Petrol,
    Conditioner,
    CD,
    Radio,
    Hob
  } from "../../assets/Icons";
  
  type Props = {
    details: {
      bathroom: number;
      kitchen: number;
      beds: number;
      adults: number;
      children: number;
      engine: string;
      transmission: string;
      airConditioner: number;
      CD: number;
      radio: number;
      hob: number;
    };
    count?: number; // Додано параметр count
    width?: number; // Доданий параметр width
    height?: number; // Доданий параметр height
  };
  
  const ButtonList = ({ details, count, width, height }: Props) => {
    // Використовуйте slice для відображення різної кількості елементів в залежності від значення count
    const buttonsToShow = [
      { icon: <Users  />, text: `${details.adults} adults` },
      { icon: <Automatic  width={width} height={height} />, text: details.transmission },
      { icon: <Petrol />, text: details.engine },
      { icon: <Kitchen width={width} height={height} />, text: "Kitchen" },
      { icon: <Beds />, text: `${details.beds} Beds` },
      { icon: <Vertical width={width} height={height} />, text: "Vertical" },
      { icon: <Conditioner />, text: `${details.airConditioner} air conditioner` },
      { icon: <CD />, text: details.CD },
      { icon: <Radio />, text: `${details.radio} Radio` },
      { icon: <Hob />, text: `${details.hob} hob` },
    ].slice(0, count);
  
    return (
      <ul className="flex flex-wrap gap-[8px] w-[430px] ">
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
  