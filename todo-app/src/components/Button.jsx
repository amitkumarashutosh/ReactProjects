const Button = ({ children, size, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`text-white bg-[#4eb570]  rounded-md ${
        size === "big" ? "text-md py-2 px-4" : "text-sm py-1 px-3"
      } 
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
