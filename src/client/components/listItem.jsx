import React from 'react';

function ListItem(props) {

  return (
    <ul className='item' onClick={function() {props.deleteUser(props.entry.name)}}>
      <div> {props.entry.name} </div>

    </ul>
  )
}

export { ListItem }