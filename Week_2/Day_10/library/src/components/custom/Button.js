import React from "react";
import Spinner from "./Spinner";

export default function Button({
  className,
  children,
  format,
  onClick,
  loading,
  disabled = false,
  ...other
}) {
  return (
    <button
      {...other}
      style={{ position: "relative" }}
      onClick={onClick}
      disabled={disabled || loading}
      className={"btn btn-" + format + " " + className}
    >
      {children}

      {loading ? (
        <div
          style={{
            position: "absolute",
            right: "2px",
            top: "2px",
          }}
        >
          <Spinner />
        </div>
      ) : (
        <></>
      )}
    </button>
  );
}
