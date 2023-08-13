import { Link } from "react-router-dom";
import { getLocation } from "../../helper/SessionHelper";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";
import Categories from "../Categories/Categories";

const NavBar = () => {
  const { user, token } = useAuthContext();
  const { logout } = useLogout();

  return (
    <>
      <div className="container-lg header">
        <div className="row py-3 px-0 align-items-center">
          <div className="col-md-8">
            <div className="header-content d-flex align-items-center lg:gap-2">
              <div className="logo">
                <img src="/images/food_delivery_logo.png" alt="logo" />
              </div>
              <div className="location d-flex align-items-center ms-2">
                {getLocation() ? (
                  <p>{`${getLocation().suburb} ${getLocation().city}-${
                    getLocation().postcode
                  }`}</p>
                ) : (
                  <p>Your Location</p>
                )}
              </div>
              <div className="main-menu">
                <ul className="d-flex lg:gap-3">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li className="categorie-link">
                    <a href="#category">Category</a>
                    <Categories />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            {!user && !token ? (
              <div className="signin-area">
                <Link to={"/login"} className="btn me-3">
                  Sign In
                </Link>

                <Link to={"/registration"} className="btn">
                  Sign Up
                </Link>
              </div>
            ) : (
              <div className="signin-area">
                <button className="btn" onClick={logout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
