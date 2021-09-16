import { useEffect } from "react";

import { PanelMenu } from "primereact/panelmenu";
import { items } from "data/menuItems";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { IS_LOGGED_IN } from "store";

export default function Menu() {
  const history = useHistory();

  const isLoggedIn = useQuery(IS_LOGGED_IN);
  const isLogin = isLoggedIn.data.isLoggedIn;

  return (
    <>
      <PanelMenu model={items(history, isLogin)} style={{ width: "300px" }} />
    </>
  );
}
