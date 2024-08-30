function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result
     
    //regular expression
    const regex =/^pet_[a-zA-Z0-9]+$/;
    

            document.getElementById('result').innerText = result;
}


