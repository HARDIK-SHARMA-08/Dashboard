import React from "react";

export const Modal = ({ isOpen, onClose, children }: any) => {
  if (!isOpen) return null;

  return (
    <div className="flex flex-col items-center justify-center w-screen fixed top-0 left-0 z-20 h-screen bg-black/20">
      {children}
    </div>
  );
  //  style={{
  //   position: "fixed",
  //   top: 0,
  //   left: 0,
  //   zIndex: 20,
  //   width: "100%",
  //   height: "100%",
  //   background: "rgba(0, 0, 0, 0.5)",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  // }}
};
