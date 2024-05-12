type Props = {
  onClick?: () => void;
  label: string;
  type: "submit" | "reset" | "button" | undefined;

};

const MainButton = ({ onClick, label, type }: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="mt-[24px] w-[166px] p-[16px_40px] bg-secondaryExoticPink hover:bg-primaryBrightPurple focus:bg-primaryBrightPurple rounded-[200px] text-[16px] text-primaryWhite font-[500] leading-[1.3] cursor-default"
    >
      {label}
    </button>
  );
};

export default MainButton;
