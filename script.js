function submitForm() {

  var validRegex = "[a-z0-9]+@[a-z]+\.[a-z]{2,3}";

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
  
    const maleCheckbox = document.getElementById('maleCheckbox').checked;
    const femaleCheckbox = document.getElementById('femaleCheckbox').checked;


  
    // Checking if all fields are filled
    if (firstName && lastName && dob && country && profession && email && mobile) {
      let gender = '';

      if (!email.match(validRegex)) {
        alert("Invalid email address!");
        return;
      }

      if (maleCheckbox) {
        gender = 'Male';
      } else if (femaleCheckbox) {
        gender = 'Female';
      }

      // Displaying values in a popup
      const message = `First Name: ${firstName}\nLast Name: ${lastName}\nDate of Birth: ${dob}\nCountry: ${country}\nGender: ${gender}\nProfession: ${profession}\nEmail: ${email}\nMobile Number: ${mobile}`;
      alert(message);
  
      // Resetting the form
      resetForm();
    } else {
      alert('Please fill in all fields.');
    }
  }
  
  function resetForm() {
    document.getElementById('surveyForm').reset();
  }
  