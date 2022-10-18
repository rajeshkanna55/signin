function validate(){
    var uname=document.getElementById("name").value;
    var pword=document.getElementById("password").value;
    var Arr=JSON.parse(localStorage.getItem('userData'));
    // var Array=JSON.parse(localStorage.getItem('password'));

    if(uname != '' && pword != '')
    { 
      var i=0;
        // var j=0;
      do{
        
      if(Arr[i]==undefined){
        alert('invalid username or password')
        break;
      }
        if(Arr[i].name==uname && Arr[i].pass){
          // var user=Arr[i].name;
          // var pass=Arr[i].pass;
          sessionStorage.setItem('login',uname);
          window.location.replace('dash.html');

          break;
        }
     
        i++;
        // j++;
        
      }while(i<=Arr.length);
           
     

      }

      //  for(var i=0;i<=Arr.length;i++)
      //     {
      //         for(var j=0;j<=Array.length;j++)
      //            {
      //              if(uname==Arr[i] && pword==Array[j])
      //               {
      //                alert('succes');
      //               }
      //             }
      //           }  
      //              {
      //                   alert('invalid username or password')
      //               }
                               
    
      //   } 
    else 
       {
        alert('please enter the username & password..!');
       }
       
  }