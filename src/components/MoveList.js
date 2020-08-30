import React from 'react';
import Proptypes from 'prop-types';
import "./index.css"


function MoveList (props) {
    const {moves} = props;
    return (
      <div className="moves-container">
        <ul className="moves-list">
          {moves.map((move) => {
            return <div className="individual-move"><li>{move.move.name}</li></div>;
          })}
        </ul>
      </div>
    );
}
    MoveList.propTypes = {
        moves: Proptypes.array.isRequired,
    }

export default MoveList;