import React,{useState} from "react";
import "./style.css";
import Tiger from './Tiger'
import usersData from './data'
const Pagination = ({record,pageSize})=>{
  
  const [users,setUsers] = useState(record);
  const [currentPage,setCurrentPage] = useState(0);
  const [pageSize,setPageSize] = useState(parseInt(pageSize));
  console.log('App data 8',users);

const setPageM = (currentPage)=>{
setCurrentPage(currentPage);
}

const selectTableRecord = (arr)=>{
console.log('The table data isn ',arr)
}

  return (
    <div>
    <Tiger users={users} currentPage={currentPage} pageSize={pageSize} setPage={setPageM} tableData={selectTableRecord}/>
 
    </div>
  );
}
export default Pagination;
