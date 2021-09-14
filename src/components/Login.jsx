import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Controller, useForm } from "react-hook-form";
export default function Login() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-d-flex p-flex-column">
        <h5>Username</h5>
        <Controller
          name="login"
          control={control}
          defaultValue=""
          render={({ value, onChange }) => (
            <InputText id="login" value={value} onChange={onChange} />
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
        <Button type="submit" className="p-mt-5">
          Login
        </Button>
      </div>
    </form>
  );
}
