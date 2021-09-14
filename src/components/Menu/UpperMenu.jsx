import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { useState } from "react";
import Modal from "components/Modal";
import Login from "components/Login";

export default function UpperMenu() {
  const [login, setLogin] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <>
      <Modal
        modalOpened={open}
        setModalOpened={setOpen}
        content={<Login />}
        header={"Login"}
      />
      <Menubar
        className="w-100"
        start={
          <div className="p-d-flex p-flex-column p-ai-center">
            <i className="pi pi-thumbs-up" style={{ fontSize: "2em" }}></i>
            <span>Super 3D</span>
          </div>
        }
        end={
          <div className="p-d-flex" style={{ gap: "5px" }}>
            {login ? (
              <Button label="Logout" icon="pi pi-power-off" />
            ) : (
              <>
                <Button
                  onClick={() => setOpen(true)}
                  label="Login"
                  icon="pi pi-power-off"
                />
                <Button label="Register" icon="pi pi-power-off" />
              </>
            )}
          </div>
        }
      />
    </>
  );
}
