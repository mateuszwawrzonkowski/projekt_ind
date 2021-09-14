import { Dialog } from "primereact/dialog";

export default function Modal({
  content,
  modalOpened,
  setModalOpened,
  onHide,
  header,
}) {
  return (
    <Dialog
      visible={modalOpened}
      onHide={onHide ? onHide : () => setModalOpened(false)}
      header={header}
    >
      {content}
    </Dialog>
  );
}
