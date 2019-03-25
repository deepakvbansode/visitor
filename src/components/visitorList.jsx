import React from "react";
const VisitorList = ({ visitors, onOutVisitor }) => {
  return (
    <div>
      <div className="visitorRow">
        <span> id</span>
        <span> name</span>
        <span> in time</span>
        <span> Operation</span>
      </div>
      {visitors.map((visitor, key) => {
        return (
          <div key={visitor.id} className="visitorRow">
            <span>{visitor.id}</span>
            <span>{visitor.name}</span>
            <span>{visitor.intime}</span>
            <span>
              <button onClick={onOutVisitor.bind(null, visitor.id)}>out</button>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default VisitorList;
