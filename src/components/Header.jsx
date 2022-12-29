import { useLocation, useNavigate } from "react-router-dom";
export default function Header() {
  //return <div>Header</div>;
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname);
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className=" flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            className="h-5 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/offers")}>Offers</li>
            <li onClick={() => navigate("/sign-in")}>Sign In</li>
          </ul>
        </div>
      </header>
    </div>
  );
}
