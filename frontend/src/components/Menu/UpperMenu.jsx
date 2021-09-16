import { useRef } from "react";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { useState } from "react";
import Modal from "components/Modal";
import Login from "components/Login";
import Register from "components/Register";
import { useQuery } from "@apollo/client";
import { IS_LOGGED_IN } from "store";
import { isLoggedInVar } from "store";
import { useHistory } from "react-router-dom";

export default function UpperMenu() {
  const toast = useRef(null);
  const isLoggedIn = useQuery(IS_LOGGED_IN);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);

  const history = useHistory();

  return (
    <>
      <Toast ref={toast} />
      <Modal
        modalOpened={loginModalOpen}
        setModalOpened={setLoginModalOpen}
        content={<Login setLoginModalOpen={setLoginModalOpen} toast={toast} />}
        header={"Login"}
      />
      <Modal
        modalOpened={registerModalOpen}
        setModalOpened={setRegisterModalOpen}
        content={<Register setRegisterModalOpen={setRegisterModalOpen} />}
        header={"Register"}
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
            {isLoggedIn.data.isLoggedIn ? (
              <Button
                label="Logout"
                icon="pi pi-power-off"
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("userId");
                  isLoggedInVar(false);
                  history.push("/");
                  window.location.reload();
                }}
              />
            ) : (
              <>
                <Button
                  onClick={() => setLoginModalOpen(true)}
                  label="Login"
                  icon="pi pi-power-off"
                />
                <Button
                  onClick={() => setRegisterModalOpen(true)}
                  label="Register"
                  icon="pi pi-power-off"
                />
              </>
            )}
          </div>
        }
      />
    </>
  );
}
