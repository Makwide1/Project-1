function validateCredentials(email,password){
    const validEmail = "desmond.amari@gmail.com";
    const validPassword = "//Amari=boolean";
    if (email ===validEmail && password ===validPassword){
        console.log("correct user Credential");
    }
else{
    console.log("incorrect user Credential try later");
}
}
validateCredentials("desmond.amari@gmail.com","//Amari=boolean")