// Project files
import logo from "../assets/images/logo.svg";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <img className="logo" src={logo} alt="EIKA logo" />
    </header>
  );
};
