import React,{useState} from "react";
import "./style.css";
import Tiger from './Tiger'
import usersList from "./data";
import Pagination from "./Pagination";
export default function App() {
  const [tableData,setTableData] = useState(usersList);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Pagination record={usersList} pageSize="3" setTable={setTableData}/>
<table>
<th>Id</th><th>Name</th><th>Email</th>
{
  tableData.map((rec)=>{
    return <tr>
<td>{rec.id}</td>
<td>{rec.name}</td>
<td>{rec.email}</td>
    </tr>
  })
}
</table>
    </div>
  );
}
