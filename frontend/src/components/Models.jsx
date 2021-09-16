import CardModels from "components/Card";
import { modelsItems } from "data/modelsItems";

export default function Models() {
  return (
    <div className="p-d-flex p-flex-wrap p-jc-around">
      {modelsItems.map((model) => (
        <CardModels description={model.description} title={model.label} />
      ))}
    </div>
  );
}
