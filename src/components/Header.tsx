// Project files
import logo from "../assets/images/logo.svg";

export const Header: React.FC<{}> = () => {
  return (
    <header>
      <img className="logo" src={logo} alt="EIKA logo" />
    </header>
  );
};
