import React from 'react';
import Proptypes from 'prop-types';


function MoveList (props) {
    const {moves} = props;
// console.log(moveArray)
    // moves.forEach((move) => {
    //     let li = document.createElement('LI');
    //     li.innerHTML = move.move.name;
    //     document.body.appendChild(li)
    // })


    return (
       <ul>
         {moves.forEach((move) => {
         return <li>{move.move.name}</li>
        })}
           
       </ul>
    )
}
    MoveList.propTypes = {
        moves: Proptypes.array.isRequired,
    }

export default MoveList;