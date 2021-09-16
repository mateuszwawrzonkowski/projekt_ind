import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "mutations/gqlQueriesMutations";

export default function Register({ setRegisterModalOpen, toast }) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const [registerUser] = useMutation(REGISTER_USER, {
    onCompleted: (data) => {
      toast.current.show({
        severity: "success",
        summary: "Sukces",
        detail: "Użytkownik został zarejestrowany",
        life: 4000,
      });
      setRegisterModalOpen(false);
    },
    onError: (err) => {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: err,
        life: 6000,
      });
    },
  });

  const onSubmit = (data) => {
    registerUser({
      variables: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        gender: data.gender,
        type: 1,
      },
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-d-flex p-flex-column">
          <h5>First name</h5>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            render={({ value, onChange }) => (
              <InputText
                id="firstName"
                value={value}
                onChange={onChange}
                required
              />
            )}
          ></Controller>
          <h5>Last name</h5>
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            render={({ value, onChange }) => (
              <InputText
                id="lastName"
                value={value}
                onChange={onChange}
                required
              />
            )}
          ></Controller>
          <h5>Email</h5>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ value, onChange }) => (
              <InputText
                id="email"
                type="email"
                value={value}
                onChange={onChange}
                required
              />
            )}
          ></Controller>
          <h5>Password</h5>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ value, onChange }) => (
              <Password
                value={value}
                onChange={onChange}
                feedback={false}
                required
              />
            )}
          ></Controller>
          <h5>Gender</h5>
          <Controller
            name="gender"
            control={control}
            defaultValue=""
            render={({ value, onChange }) => (
              <Dropdown
                value={value}
                options={["Male", "Female"]}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Select a gender"
                id="gender"
                required
              />
            )}
          ></Controller>
          <Button type="submit" className="p-d-flex p-jc-center p-mt-5">
            Register
          </Button>
        </div>
      </form>
    </>
  );
}
