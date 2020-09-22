
function validate(){
    const first = document.getElementById("first").value;
    const middle =  document.getElementById("middle").value;
    const last =  document.getElementById("last").value;
    const number = document.getElementById("number").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value; 
    

    const namecheck = /^[A-Za-z]{3,30}$/;
    const emailcheck = /^[A-Za-z_.]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    const phonecheck = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    const addresscheck = /^[#.0-9a-zA-Z\s,-]+$/;
   

    if (namecheck.test(first)){
        document.getElementById('firsterror').innerHTML=" ";
    }else {
        document.getElementById('firsterror').innerHTML="First name is Invalid";
        return false;
    }
    if (namecheck.test(middle)){
        document.getElementById('middleerror').innerHTML=" ";
    }else {
        document.getElementById('middleerror').innerHTML="Middle name is Invalid";
        return false;
    }
    if (namecheck.test(last)){
        document.getElementById('lasterror').innerHTML=" ";
    }else {
        document.getElementById('lasterror').innerHTML="Last name is Invalid";
        return false;
    }
    if (addresscheck.test(address)){

        document.getElementById('addresserror').innerHTML=" ";
     }else {
         document.getElementById('addresserror').innerHTML="Address name is Invalid";
         return false;
     }
    if (phonecheck.test(number)){
        document.getElementById('numbererror').innerHTML=" ";
    }else {
        document.getElementById('numbererror').innerHTML="Number is Invalid";
        return false;
    }
    if (emailcheck.test(email)){
        document.getElementById('emailerror').innerHTML=" ";
    }else {
        document.getElementById('emailerror').innerHTML="Email is Invalid";
        return false;
    }
     
    
}





















