function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result
     
    //regular expression
    const regex =/^pet_\d{4}[a-zA-Z]*$/;
     
    //validates the input aginst the regular expression 
    if(regex.test(input)) {
        result = "Valid syntax";
    } else {
        result = "Invalid Syntax";
    }

//display the results 
            document.getElementById('result').innerText = result;
}


