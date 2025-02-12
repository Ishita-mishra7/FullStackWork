import React from 'react'
import './studentstyle.css';
function Student(props) {
  return (
    <div className='icard'>
        <table>
            <tbody>
                <tr><td colspan={2}>{props.college}</td></tr>
                <tr><td colspan={2}>{props.pic}</td></tr>
                <tr><td>Roll:</td><td>{props.roll}</td></tr>
                <tr><td>Name:</td><td colspan={2}>{props.name}</td></tr>
                <tr><td>Branch:</td><td colspan={2}>{props.branch}</td></tr>
                
                </tbody></table> 
    <br></br>
     
    </div>

  )
}

export default Student