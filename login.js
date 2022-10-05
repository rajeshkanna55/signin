function validate(){
    var uname=document.getElementById("name").value;
    var pword=document.getElementById("password").value;
    var Arr=JSON.parse(localStorage.getItem('username'));
    var Array=JSON.parse(localStorage.getItem('password'));
    if(uname != '' && pword != '')
    {
      var i=0;
        var j=0;
        console.log(i);
      do{
        
        if(Arr[i]==uname && Array[j]==pword){
          var user=Arr[i]
          var pass=Array[j]
          alert('success')
        }
      // else{
          // alert('invalid username or password')
      // }
        i++;
        j++;
        
      }while(i<=Arr.length,j<=Array.length);
           
      

      
      if(user!=uname && pass!=pword){
        alert('invalid username or password')
      }

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