import { PanelMenu } from "primereact/panelmenu";
import { items } from "data/menuItems";
import { useHistory } from "react-router-dom";

export default function Menu() {
  const history = useHistory();
  return (
    <>
      <PanelMenu model={items(history)} style={{ width: "300px" }} />
    </>
  );
}
