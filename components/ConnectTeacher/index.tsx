import Image from "next/image";
import { forwardRef } from "react";
import ReactDOM from "react-dom";

const ConnectTeacher = (props: any) => {
  const { visible, close } = props;

  if (!visible) {
    return null;
  }

  return ReactDOM.createPortal(
    <div
      className="w-screen h-screen fixed top-0 left-0 z-10 text-center"
      style={{
        background: "rgba(0,0,0,0.7)",
      }}
      onClick={() => {
        close();
      }}
    >
      <img
        className="w-60 mt-24 mx-auto"
        src="../img/teacher_bian.jpg"
        alt="边老师"
        onClick={(e) => {
          e.preventDefault();
        }}
      />
    </div>,
    document.body
  );
};

ConnectTeacher.displayName = "ConnectTeacher";

export default ConnectTeacher;
