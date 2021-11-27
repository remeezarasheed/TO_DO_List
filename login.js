
function validate(){
    console.log(typeof typeof typeof true);
    let username  = document.forms["form"]["uname"].value;
    let password  = document.forms["form"]["psw"].value;
    
    if (username === "admin" && password === "12345"){
        // alert("login successfull");
        return true;
    }
    else{
        alert("invalid login");
        return false;
    }
}

