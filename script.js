function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result
     
    //regular expression
    const regex =/^pet_[a-zA-Z0-9]+$/;
     
    //validates the input aginst the regular expression 
    if(regex.test(input)) {
        result = "Valid syntax";
    } else {
        result = "Invalid Syntax";
    }

//display the results 
            document.getElementById('result').innerText = result;
}


