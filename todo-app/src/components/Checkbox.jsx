const Checkbox = ({ label, checked, onChange }) => {
  return (
    <div
      className={`flex items-center h-7 text-lg ${checked && "line-through"} `}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className=" mr-2 w-4 h-4"
      />
      {label}
    </div>
  );
};

export default Checkbox;
