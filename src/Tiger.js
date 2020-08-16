import React from 'react';


const Tiger = ({users,currentPage,pageSize,setPage,tableData})=>{
  console.log('-->',users)
  console.log('::',currentPage,pageSize)
   //start logic start-end
let startRecord = currentPage*pageSize+1;

let lastrecord = (startRecord + pageSize)-1;
console.log('&& ',startRecord,pageSize,lastrecord)
    //end logic

    //page size start
     let calPageSize = parseInt((users.length)/pageSize)-1
    //page size end


const tableCalData = ()=>{
  console.log('First')
  let tmp = users;
tmp.splice(startRecord-1,lastrecord-1);
tableData(tmp)
}

  return (
 
<div>
Total page length : {calPageSize} | {currentPage} <br/>
page {startRecord} to {lastrecord} from {users.length} &nbsp;
<button disabled={currentPage==0} onClick={()=>{
  tableCalData();
  setPage(currentPage-1)
}}>Pre</button> | &nbsp;
<button disabled={calPageSize==currentPage} onClick={()=>{
  tableCalData();
  setPage(currentPage+1)
}}>Next</button>
</div>
  )
}

export default Tiger;

