import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "mutations/gqlQueriesMutations";
import { GET_USER, isLoggedInVar } from "store";
import { useQuery } from "@apollo/client";
export default function Login({ setLoginModalOpen, toast }) {
  const { handleSubmit, control } = useForm({
    mode: "onChange",
  });
  const getUser = useQuery(GET_USER);

  const [loginUser] = useMutation(LOGIN_USER, {
    onCompleted: (data) => {
      if (data) {
        toast.current.show({
          severity: "success",
          summary: "Sukces",
          detail: "Użytkownik został zalogowany",
          life: 4000,
        });
        localStorage.setItem("token", data.loginUser.token);
        localStorage.setItem("userId", data.loginUser.user.id);
        isLoggedInVar(true);
        setLoginModalOpen(false);
      }
    },
    onError: (err) => {
      isLoggedInVar(false);
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: err,
        life: 6000,
      });
    },
  });

  const onSubmit = (data) => {
    loginUser({
      variables: {
        email: data.email,
        password: data.password,
      },
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-d-flex p-flex-column">
          <h5>Username</h5>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ value, onChange }) => (
              <InputText id="email" value={value} onChange={onChange} />
            )}
          ></Controller>
          <h5>Password</h5>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ value, onChange }) => (
              <Password value={value} onChange={onChange} feedback={false} />
            )}
          ></Controller>
          <Button type="submit" className="p-d-flex p-jc-center p-mt-5">
            Login
          </Button>
        </div>
      </form>
    </>
  );
}
