function validate(){
    var uname=document.getElementById("name").value;
    var pword=document.getElementById("password").value;
    if(uname == 'rajesh' && pword == 0000)
    {
        alert('password correct');
    }
    else if(uname=='' && pword=='')
    {
        alert('please enter username & password')
    }
     else{
    alert('incorrect..!')
     }
}