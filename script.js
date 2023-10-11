document.getElementById('survey-form').addEventListener('submit', function (e) {
    e.preventDefault();
    // Validate the form fields here
    // You can add validation logic for each field
    
    // If all validations pass, show the popup
    showPopup();
});

document.getElementById('reset').addEventListener('click', function () {
    document.getElementById('survey-form').reset();
});

function showPopup() {
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popup-content');
    const form = document.getElementById('survey-form');
    
    // Collect form data
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const dateOfBirth = document.getElementById('date-of-birth').value;
    const country = document.getElementById('country').value;
    const genderElements = document.querySelectorAll('input[name="gender"]:checked');
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobileNumber = document.getElementById('mobile-number').value;

    // Create the content for the popup
    const popupContentHTML = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dateOfBirth}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${[...genderElements].map(g => g.value).join(', ')}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
    `;

    popupContent.innerHTML = popupContentHTML;
    popup.style.display = 'block';

    // Close the popup when the "Close" button is clicked
    document.getElementById('close-popup').addEventListener('click', function () {
        popup.style.display = 'none';
        form.reset();
    });
}