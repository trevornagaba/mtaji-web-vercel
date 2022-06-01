import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

/**
 * This component is used to protect the routes.
 * It checks whether the user is logged in or not.
 * If not, it redirects the user to the login page.
 * If the user is logged in, it renders the component.
 * 
 * @param child component.
 * @returns child components.
 */

const withAuth = (Component) => {
  const AuthenticatedComponent = () => {
    const [data, setData] = useState();
    const router = useRouter();

    useEffect(() => {
      const getUser = async () => {
        // fetch current user from backend

        // if current user is null redirect to login page

        // else set user data

        const isLoggedIn = Cookies.get("myCookieName");
        if (!isLoggedIn) {
          router.push("/login");
        }
        setData("user");
      };
      getUser();
    }, []);

    return !!data ? <Component data={data} /> : null;
  };

  return AuthenticatedComponent;
};

export default withAuth;
