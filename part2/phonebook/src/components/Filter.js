import React from "react";

const Filter = ({ filter, handleChange }) => {
  return (
    <div>
      filter shown with:
      <input value={filter} onChange={handleChange} />
    </div>
  );
};

export default Filter;
