function handleSubmit(formId) {
    const form = document.getElementById(formId);
    console.log(`Form submitted: ${formId}`);
    form.reset();
    alert('You have successfully signed up.');
}


document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();
    handleSubmit('signupForm');
});