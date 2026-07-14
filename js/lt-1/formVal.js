document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault();
    let valid = true;

    
    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value.trim();
    const pass = document.getElementById("pass").value;
    const conPass = document.getElementById("conPass").value;
    const maleRB = document.getElementById("male");
    const femaleRB = document.getElementById("female");
    const cricketCB = document.getElementById("cricket");
    const footballCB = document.getElementById("football");
    const country = document.getElementById("country").value;
    // const proPic = document.getElementById("proPic");

    let fabSports = "";
    let gender = "";

    const nameErr = document.getElementById("nameErr");
    nameErr.innerHTML=" ";

    const ageErr = document.getElementById("ageErr");
    ageErr.innerHTML ="";

    const emailErr= document.getElementById("emailErr");
    emailErr.innerHTML ="";
    
    const passErr = document.getElementById("passErr");
    passErr.innerHTML = "";

    const conPassErr = document.getElementById("conPassErr");
    conPassErr.innerHTML ="";

    const genderErr = document.getElementById("genderErr");
    genderErr.innerHTML ="";

    const fabSportsErr = document.getElementById("fabSportsErr");
    fabSportsErr.innerHTML = "";

    const countryErr = document.getElementById("countryErr");
    countryErr.innerHTML = "";

    // const proPicErr = document.getElementById("proPicErr");
    // proPicErr.innerHTML = "";



    const success = document.getElementById("success");
    success.innerHTML ="";


    let nameRegex = /^[A-Za-z ]+$/;
    if(name === ""){
        nameErr.innerHTML ="Name cannot be Empty"
        valid = false;
    }
    else if(name.length <3){
        nameErr.innerHTML ="Name must be greater than 3 character";
        valid = false;
    }
    else if(!nameRegex.test(name)){
        nameErr.innerHTML ="name can contain only letters"
        valid = false;
    }
    // age vald
    if(age == ""){
        ageErr.innerHTML = "age cannot be empty";
        valid = false;
    }
    else{
        if(age<=18){
            ageErr.innerHTML ="Age must be greater than or equal 18"
            valid = false;
        }
    }

    // emial validation
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(email ===""){
        emailErr.innerHTML = "email cannot be empty";
        valid = false;
    }
    else{
        if(!emailRegex.test(email)){
            emailErr.innerHTML ="invalid email format";
            valid= false;
        }
    }

    // pass vlidation
     let passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (pass === "") {
        passErr.innerHTML = "password cannot be empty";
        valid = false;
    }

    else {
        if (!passPattern.test(pass)) {
            passErr.innerHTML = "password must be minimum 8 char long, should contain at least one small and one cap letter and one number and one special char";
            valid= false;
        }
    }
    
    //con pass vllid
     if (conPass !== pass) {
        conPassErr.innerHTML = "Confirm Pass should match with pass";
        valid = false;

    }

    // genderval
    if(!maleRB.checked && !femaleRB.checked){
        genderErr.innerHTML = "gender must be selected";
        valid = false;
    }
    else{
         if (maleRB.checked) {
            gender = maleRB.value;
        }
        else {
            gender = femaleRB.value;
        }
    }

    // checkbox validation
    if (!cricketCB.checked && !footballCB.checked) {
        fabSportsErr.innerHTML = "Fab Sports must be selected";
        valid = false;
    }

    else {
        if (cricketCB.checked) {
            fabSports += cricketCB.value;
        }
        if (footballCB.checked) {
            fabSports += " " + footballCB.value;
        }

    }

    // country validation
    if (country === "") {
        countryErr.innerHTML = "country must be selected";
        valid = false;
    }

    if(valid){
        success.innerHTML ="Login successfully";
    }
});