// script.js

document.getElementById("submitButton").addEventListener("click", function() {
    // Validate and collect form data
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var dob = document.getElementById("dob").value;
    var country = document.getElementById("country").value;
    var genderCheckboxes = document.querySelectorAll('input[name="gender"]:checked');
    var gender = Array.from(genderCheckboxes).map(input => input.value).join(", ");
    var profession = document.getElementById("profession").value;
    var email = document.getElementById("email").value;
    var mobileNumber = document.getElementById("mobileNumber").value;

    // Display the collected data in the popup
    var popupContent = document.getElementById("popupContent");
    popupContent.innerHTML = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
    `;

    // Show the popup
    document.getElementById("popup").style.display = "block";
});

document.getElementById("closePopup").addEventListener("click", function() {
    // Close the popup and reset the form
    document.getElementById("popup").style.display = "none";
    document.getElementById("surveyForm").reset();
});

document.getElementById("resetButton").addEventListener("click", function() {
    // Reset the form
    document.getElementById("surveyForm").reset();
});
