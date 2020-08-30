import React, { useState } from "react";

function Controls(props) {
    const {isLoading} = props;
    const [id, setId] = useState(props.id);
    const [loading, setLoading] = useState(isLoading);
  return (
    <div className="controls">
      <button
        style={{ width: 100 }}
        onClick={() => {
        console.log({id},props.id)
          setLoading(true);
          id > 1 ? setId(id - 1) : setId(151);
        }}
      >
        Previous
      </button>
      <button
        style={{ width: 100 }}
        onClick={() => {
          setLoading(true);
          id > 150 ? setId(1) : setId(id + 1);
        }}
      >
        Next
      </button>
    </div>
  );
}

export default Controls;