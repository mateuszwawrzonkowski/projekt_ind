import { useQuery, gql } from "@apollo/client";
import { GET_USER } from "queries/gqlQueries";
import { ProgressBar } from "primereact/progressbar";

export default function Profile() {
  const id = parseInt(localStorage.getItem("userId"));

  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id: id },
  });
  const user = data?.getUser;
  return (
    <>
      {loading ? (
        <ProgressBar mode="indeterminate" />
      ) : (
        <>
          <h1>Twoje dane:</h1>
          <div
            className="p-d-flex p-jc-between"
            style={{ width: "300px", fontSize: "22px" }}
          >
            <div className="p-d-flex p-flex-column">
              <span>Email:</span>
              <span>Imię:</span>
              <span>Nazwisko:</span>
              <span>Płeć:</span>
            </div>
            <div className="p-d-flex p-flex-column">
              <span>{user?.email}</span>
              <span>{user?.firstName}</span>
              <span>{user?.lastName}</span>
              <span>{user?.gender}</span>
            </div>
          </div>
        </>
      )}
    </>
  );
}
