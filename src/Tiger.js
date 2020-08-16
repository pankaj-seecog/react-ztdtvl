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
  console.log("*** ",startRecord-1,pageSize)
tmp=tmp.splice(startRecord-1,pageSize);
console.log('tmp is ',tmp)
// tableData(tmp)
}

  return (
 
<div>
Total page length : {calPageSize} | {currentPage} <br/>
page {startRecord} to {lastrecord} from {users.length} &nbsp;
{/* disabled={currentPage==0} */}
<button  onClick={()=>{
 
  setPage(currentPage-1)
   tableCalData();
}}>Pre</button> | &nbsp;
{/*. disabled={calPageSize==currentPage}*/}
<button  onClick={()=>{
  
  setPage(currentPage+1)
  tableCalData();
}}>Next</button>
</div>
  )
}

export default Tiger;

