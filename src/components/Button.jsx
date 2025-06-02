import React from "react";

const Button = ({ text, variant = "primary", onClick }) => {
  const baseClasses = "px-4 py-2 rounded-3xl font-normal text-sm transition duration-300";

  const variants = {
    primary: "bg-[#142F32] text-white hover:opacity-90",
    secondary: "bg-white text-[#142F32] border border-[#142F32] hover:bg-[#142F32] hover:text-white",
  };

  return (
    <button className={`${baseClasses} ${variants[variant]}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;