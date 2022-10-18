    var user=sessionStorage.getItem('login');
    document.getElementById("s").innerHTML= user;
    var Arr=JSON.parse(localStorage.getItem('userData'));
       Arr.reverse();
       for(var i=0;i<Arr.length;i++)
       {
         var table=document.getElementById("mytable");
         var row=table.insertRow(1);
         var cell1=row.insertCell(0);
         var cell2=row.insertCell(1);
         var cell3=row.insertCell(2);
         var cell4=row.insertCell(3);
         var cell5=row.insertCell(4);
         cell1.innerHTML=Arr[i].name;
         cell2.innerHTML=Arr[i].pass;
         cell3.innerHTML=Arr[i].gender;
         cell4.innerHTML=Arr[i].country;
         cell5.innerHTML= '<button id="upd">Update</button> <button id="del">Delete</button>'
         
       } 
       