
type Props = {
    onClick?: () => void;
    label: string;
    type: "submit" | "reset" | "button" | undefined;
  
  };
  
  const SecondButton = ({ onClick, label, type }: Props) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className="flex self-center ml-auto mt-[50px] w-[166px] p-[16px_40px] bg-transparent border-tritiaryGray hover:border-secondaryExoticPink focus:border-secondaryExoticPink border-solid border-[1px] rounded-[200px] text-[16px] text-primaryBlack font-[500] leading-[1.3] "
      >
        {label}
      </button>
    );
  };
  
  export default SecondButton;