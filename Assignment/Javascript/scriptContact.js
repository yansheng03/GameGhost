/* Function to handle form submissions */
function handleSubmit(formId) {
    const form = document.getElementById(formId);

    console.log(`Form submitted: ${formId}`);

    form.reset();

    alert('Your feedback has been submitted successfully and is greatly appreciated! A copy of your response will be sent to your e-mail.');
}

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    handleSubmit('contactForm');
});