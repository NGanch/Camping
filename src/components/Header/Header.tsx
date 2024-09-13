import { Logo } from "../../assets/Social";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="pt-[28px] pb-[28px] flex flex-column justify-between items-center lg:gap-[450px]">
          <Logo />
          <div className="flex items-center gap-[16px] md:gap-[32px]">
            <NavLink
              to="/"
              className="text-primaryBlack text-[16px] font-[500] leading-[1.5] text-center"
            >
              Home
            </NavLink>
            <NavLink
              to="/campers"
              className="text-primaryBlack text-[16px] font-[500] leading-[1.5] text-center"
            >
              Catalog
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
