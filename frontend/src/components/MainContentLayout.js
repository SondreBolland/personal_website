import React from "react";
import "./MainContentLayout.css";

export default function MainContentLayout({ children }) {
  return (
    <>
    <div className="main-content-layout">
      {children}
    </div>
    </>
  );
}