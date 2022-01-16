import React from "react";

function Button({ text, className, href }) {
  return (
    <div>
      <a href={href} target={true && "_blank"} className={className}>
        {text}
      </a>
    </div>
  );
}

export default Button;
