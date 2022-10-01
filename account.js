function verify(){
    var userName=document.getElementById('userName').value;
    var passWord=document.getElementById('pass').value;
    var confirm=document.getElementById('confirm').value;
    if(passWord=='' && confirm==''){
        alert('please enter the details');
    }
    else if(passWord!=confirm){
        alert('enter the same passWord');
    }
    else if(passWord==confirm){
        window.location='greet.html';
    }
    else{
        alert('please enter the details...!');
    }
    var Arr=JSON.parse(localStorage.getItem('username'));
    var Array=JSON.parse(localStorage.getItem('password'));
    
    if(Arr==null && Array==null)
    {
        localStorage.setItem('username',JSON.stringify([userName]));
        localStorage.setItem('password',JSON.stringify([passWord]));  
    }
    else{
       
        Arr.push(userName);
        Array.push(passWord);
        localStorage.setItem('username',JSON.stringify(Arr));
        localStorage.setItem('password',JSON.stringify(Array));   
    }
    }
    