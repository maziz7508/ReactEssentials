import { useRef } from "react";
import Button from "./Button";
import { forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    },
    close() {
      onClose();
    },
  }));

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  );
});
export default Modal;
