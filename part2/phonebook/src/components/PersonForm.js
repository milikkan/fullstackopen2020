import React, { useState } from "react";

const PersonForm = (props) => {
  const {
    handleSubmit,
    nameValue,
    numberValue,
    handleNameChange,
    handleNumberChange,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        Name: <input value={nameValue} onChange={handleNameChange} />
      </div>
      <div>
        Number: <input value={numberValue} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
