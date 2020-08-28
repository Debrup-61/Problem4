
function addrow()
{ var table=document.getElementById("datatable");
  var rowcount=table.rows.length;
  var row=table.insertRow(rowcount);
  var cell1=row.insertCell(0);
  var cell2=row.insertCell(1);
  var sub=document.getElementById("d1");
  var mname=sub.value;
  cell1.innerHTML=mname;
  var rat=document.getElementById("rating");
  cell2.innerHTML=rat.value;
}
