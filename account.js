function verify(){
    var password=document.getElementById('pass').value;
    var confirm=document.getElementById('confirm').value;
    if(password=='' && confirm==''){
        alert('please enter the details');
    }
    else if(password!=confirm){
        alert('enter the same password');
    }
    else if(password==confirm){
        window.location='greet.html';
    }
    else{
        alert('please enter the details...!');
    }
    }
function clear(){
    Set.clear;
}