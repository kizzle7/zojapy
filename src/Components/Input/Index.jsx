import { forwardRef } from "react";
import "./index.css"
export const Input = forwardRef((props, ref) => {
  const style = {
    ...props.style,
    background: "#ffffff",
    borderRadius: "6px",
    border: !props.isDisabled ? "1px solid #FF8600" : "1px solid #DDE2E4",
    padding: "9px 47px",
    marginTop: "-.6rem",
    color: '#5B6871',
    fontWeight: "400",
    letterSpacing: '-0.45%',
    outline: 'none',
    fontSize: '15px',
    '::placeholder': {
      color: '#5B6871 !important',
      opacity: 1,
    }

  };
  return (
    <div>
      {!props.isDisabled &&
        <label
          className="d-block label-text pb-1"
          htmlFor={props.name}
        >
          {props.label}
        </label>}
      <div>
        <input
          {...props}
          ref={ref}
          style={
            props.error
              ? {
                ...style,
                border: "1px solid #ff5b5b",
                boxShadow: "none",
                background: "#fff",
              }
              : {
                ...style,
              }
          }
        />
      </div>
    </div>
  );
});
