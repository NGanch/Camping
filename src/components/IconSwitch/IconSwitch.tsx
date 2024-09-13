import {
  Vertical,
  Automatic,
  Kitchen,
  TV,
  Bathroom,
  Van,
  Integrated,
  Alcove,
} from "../../assets/Icons";

type Props = {
  name: string;
  width?: number;
  height?: number;
};

const IconSwitch = ({ name, width, height }: Props) => {
  const style = {
    display: "flex",
    border: "none",
    // background: "transparent",
  };

  const obj: { [key: string]: JSX.Element } = {
    ac: <Vertical width={width} height={height} />,
    automatic: <Automatic width={width} height={height} />,
    kitchen: <Kitchen width={width} height={height} />,
    tv: <TV width={width} height={height} />,
    bathroom: <Bathroom width={width} height={height} />,
    van: <Van width={width} height={height} />,
    fullyintegrated: <Integrated width={width} height={height} />,
    alcove: <Alcove width={width} height={height} />,
  };

  return <div style={style}>{obj[name]}</div>;
};
export default IconSwitch;
