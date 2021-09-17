import { useState, useEffect } from "react";

import { PanelMenu } from "primereact/panelmenu";

import { items } from "data/menuItems";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { IS_LOGGED_IN } from "store";
import { GET_USER } from "queries/gqlQueries";

export default function Menu() {
  const history = useHistory();
  const [userType, setUserType] = useState(null);
  const isLoggedIn = useQuery(IS_LOGGED_IN);
  const isLogin = isLoggedIn.data.isLoggedIn;
  const id = parseInt(localStorage.getItem("userId"));
  const { data } = useQuery(GET_USER, {
    variables: { id: id },
  });

  useEffect(() => {
    data && setUserType(data.getUser.type);
  }, [data]);

  return (
    <>
      <PanelMenu
        model={items(history, isLogin, userType)}
        style={{ width: "300px" }}
      />
    </>
  );
}
