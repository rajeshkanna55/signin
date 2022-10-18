function verify(){
    var userName=document.getElementById('userName').value;
    var passWord=document.getElementById('pass').value;
    var confirm=document.getElementById('confirm').value;
    var gender=document.getElementById('gender').value;
    var country=document.getElementById('country').value;
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
    
    var Arr=JSON.parse(localStorage.getItem('userData'));
   
    // var Array=JSON.parse(localStorage.getItem('password'));
    const obj={
        name: userName,
        pass: passWord,
        gender: gender,
        country: country
    };
    
    if(Arr==null)
    {    
        localStorage.setItem('userData',JSON.stringify([obj]));
    //     localStorage.setItem('password',JSON.stringify([passWord]));  
    }
    else{
        Arr.push(obj);
        // Array.push(passWord);
        localStorage.setItem('userData',JSON.stringify(Arr));
        // localStorage.setItem('password',JSON.stringify(Array));   
    }
    }
    