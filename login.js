function validate(){
    var uname=document.getElementById("name").value;
    var pword=document.getElementById("password").value;
    var Arr=JSON.parse(localStorage.getItem('username'));
    var Array=JSON.parse(localStorage.getItem('password'));
    if(uname != '' && pword != '')
    {
        // alert('password correct');
       for(var i=0;i<=Arr.length;i++)
          {
              for(var j=0;j<=Array.length;j++)
                 {
                  if(uname==Arr[i] && pword==Array[j])
                  {
                   alert('succes');
                  }
                 
                 }
                }
                  if(uname!=Arr[i] && pword !=Array[j])
                  {
                    alert('invalid username or password');
                  }
                    
             
    } 
    else
       {
        alert('please enter the username & password..!')
       }
  }