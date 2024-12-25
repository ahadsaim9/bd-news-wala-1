import logo from "../../assets/logo.png";
import moment from "moment";
const Header = () => {
  return (
    <div>
      <img className="mx-auto py-3 px-6" src={logo} alt="" />

      <p className="text-center">Journalism Without Fear or Favour</p>
      <p className="text-center my-3">
        {moment().format("dddd, MMMM D,  YYYY")}{" "}
      </p>
    </div>
  );
};

export default Header;
