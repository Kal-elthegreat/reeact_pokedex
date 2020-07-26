import React from 'react';
import Proptypes from 'prop-types';
import "./index.css"


function MoveList (props) {
    const {moves} = props;
    return (
      <div className="moves-container">
          {moves.map((move) => {
            return <div className="move-list"><li>{move.move.name}</li></div>;
          })}
      </div>
    );
}
    MoveList.propTypes = {
        moves: Proptypes.array.isRequired,
    }

export default MoveList;