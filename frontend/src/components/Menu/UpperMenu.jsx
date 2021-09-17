import { useRef } from "react";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { useState } from "react";
import Modal from "components/Modal";
import { Badge } from "primereact/badge";
import Login from "components/Login";
import Register from "components/Register";
import { useQuery } from "@apollo/client";
import { IS_LOGGED_IN } from "store";
import { isLoggedInVar } from "store";
import { useHistory } from "react-router-dom";
import { GET_USER } from "queries/gqlQueries";

export default function UpperMenu() {
  const toast = useRef(null);
  const isLoggedIn = useQuery(IS_LOGGED_IN);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const id = parseInt(localStorage.getItem("userId"));

  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id: id },
  });
  const userName = data?.getUser.firstName;
  console.log(userName);

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
        content={
          <Register setRegisterModalOpen={setRegisterModalOpen} toast={toast} />
        }
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
          <div className="p-d-flex p-ai-center ">
            {isLoggedIn.data.isLoggedIn && (
              <>
                <h3 className="p-mr-4">{`Witaj ${userName}`}</h3>
                <i
                  className="pi pi-shopping-cart p-mr-4"
                  style={{ fontSize: "2em", cursor: "pointer" }}
                  onClick={() => history.push("/cart")}
                >
                  <Badge value="0"></Badge>
                </i>
              </>
            )}
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
          </div>
        }
      />
    </>
  );
}
