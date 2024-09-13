import { Logo } from "../../assets/Icons";
import { NavLink } from "react-router-dom";
import { Container } from "../../components/Container/Container.styled";

const Header = () => {
  return (
    <header>
      <Container>
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
      </Container>
    </header>
  );
};
export default Header;
