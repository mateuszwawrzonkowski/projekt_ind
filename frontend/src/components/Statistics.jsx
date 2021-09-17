import { useEffect, useState } from "react";

import { Chart } from "primereact/chart";
import { useQuery, gql } from "@apollo/client";
import { GET_ALL_USERS } from "queries/gqlQueries";

export default function Statistics() {
  const { loading, error, data } = useQuery(GET_ALL_USERS);
  const [gender, setGender] = useState({
    male: 0,
    female: 0,
  });

  console.log(data);

  useEffect(() => {
    data?.allUsers.forEach((user) =>
      user.gender.toLowerCase() === "male"
        ? setGender((prevState) => ({
            ...prevState,
            male: prevState.male + 1,
          }))
        : setGender((prevState) => ({
            ...prevState,
            female: prevState.female + 1,
          }))
    );
  }, [data]);

  const chartData = {
    labels: [`Mężczyźni - ${gender.male}`, `Kobiety - ${gender.female}`],
    datasets: [
      {
        data: [
          ((gender.male / (gender.male + gender.female)) * 100).toFixed(1),
          ((gender.female / (gender.male + gender.female)) * 100).toFixed(1),
        ],
        backgroundColor: ["#42A5F5", "#66BB6A"],
        hoverBackgroundColor: ["#64B5F6", "#81C784"],
      },
    ],
  };

  const lightOptions = {
    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
    },
  };

  return (
    <div className="card p-d-flex p-jc-center">
      <Chart
        type="pie"
        data={chartData}
        options={lightOptions}
        style={{ position: "relative", width: "40%" }}
      />
    </div>
  );
}
