const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const subjectError = document.getElementById("subjectError");
    const messageError = document.getElementById("messageError");
    const successMessage = document.getElementById("successMessage");

    nameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    if (name === "") {
      nameError.textContent = "Full name is required.";
      isValid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
      emailError.textContent = "Email is required.";
      isValid = false;
    } else if (!emailPattern.test(email)) {
      emailError.textContent = "Enter a valid email address.";
      isValid = false;
    }

    if (subject === "") {
      subjectError.textContent = "Subject is required.";
      isValid = false;
    }

    if (message === "") {
      messageError.textContent = "Message is required.";
      isValid = false;
    } else if (message.length < 10) {
      messageError.textContent = "Message must be at least 10 characters.";
      isValid = false;
    }

    if (isValid) {
      successMessage.textContent = "Form submitted successfully!";
      contactForm.reset();
    }
  });
}
