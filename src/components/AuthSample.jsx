import { useAuth } from "./context";
const App = () => {
  const [auth, handleAuth] = useAuth(useAuth);
  return (
    <div>
      <h3>Is authenticated?</h3>
      <h1>{auth === false ? "Not authenticated!" : "Authenticated!"} </h1>
      <button onClick={handleAuth}>Change auth</button>
    </div>
  );
};
