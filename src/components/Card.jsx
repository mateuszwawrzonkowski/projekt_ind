import { Card } from "primereact/card";
import { Button } from "primereact/button";

export default function CardModels({ title, description }) {
  const header = (
    <img
      alt="Card"
      src="showcase/demo/images/usercard.png"
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
    />
  );
  const footer = (
    <div className="p-d-flex p-flex-column p-jc-between p-ai-start gap-1">
      <Button label="Buy" icon="pi pi-check" />
      <Button
        label="Add to favorites"
        icon="pi pi-times"
        className="p-button-secondary"
      />
    </div>
  );
  return (
    <div className="p-mb-5">
      <Card
        subTitle={title}
        style={{ width: "15em" }}
        footer={footer}
        header={header}
      >
        <p className="p-m-0" style={{ lineHeight: "1.5" }}>
          {description}
        </p>
      </Card>
    </div>
  );
}
