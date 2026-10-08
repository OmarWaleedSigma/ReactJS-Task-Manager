import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export default function ErrorModal({ ref }) {
  const dialogRef = useRef(null);

  useImperativeHandle(ref, () => ({
    open() {
      dialogRef.current.showModal();
    },
  }));

  return createPortal(
    <dialog
      ref={dialogRef}
      className="m-auto backdrop:bg-stone-900/90 rounded-md p-4 shadow-md"
    >
      <h2 className="font-bold text-stone-700 text-xl my-4">Invalid Input</h2>
      <p className="text-stone-600 mb-4">
        Oops...look like you forget to enter a <code>value</code>
      </p>
      <p className="text-stone-600 mb-4">
        Please make sure you enter a valid data for each input
      </p>
      <form method="dialog" className="mt-4 text-right">
        <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
          Okay
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
}
