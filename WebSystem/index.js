var attempt = 3;


// if state for id = sgn_content_log
function validate(){
    var usr = document.getElementById(`usr`).value;
    var psw = document.getElementById(`psw`).value;
    if(usr == `admin` && psw == `admin`){
        window.alert(`SignIn Succesfully`);
        window.location = `home.html`; // will redirect to home page
        return false;
    }else{
        attempt --; // decrementation of attemp by one..
        window.alert(`Invalid SignIn Please Try Again..`)
        // if statement, if the number of attempt is reach
        if (attempt == 0){
        document.getElementById(`usr`).disabled = true;
        document.getElementById(`psw`).disabled = true;
        document.getElementById(`email`).disabled = true;
        document.getElementById(`sgn_up_btn`).disabled = true;
        return false;
    }
    }  
}
