import React from "react";

const VisitorForm = ({
  name,
  intime,
  onFormInputChange,
  onFormSubmitClick
}) => {
  return (
    <div>
      <input
        type="text"
        value={name}
        name="name"
        onChange={onFormInputChange}
      />
      <input
        type="text"
        value={intime}
        name="intime"
        onChange={onFormInputChange}
      />
      <button onClick={onFormSubmitClick}>Add Visitor</button>
    </div>
  );
};

export default VisitorForm;
