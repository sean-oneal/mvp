import React from 'react'
import { ListItem } from './listItem.jsx'

function WaitList(props) {

  return (<ul>
      {props.list.map((entry)=> {
       return (<ListItem entry={entry} key={entry.userId} deleteUser={props.deleteUser}/>)
      })}
    </ul>
  )
}
export { WaitList };