let isLoggedIn = false;

function handleSubmit(formId) {
    const form = document.getElementById(formId);
    form.reset();
    alert('You have successfully logged in.');
    isLoggedIn = true;
    updateNavigationLinks();
    window.location.href = 'LoggedInGameGhost.html';
}

function updateNavigationLinks() {
    const loginLink = document.getElementById('loginLink');
    const logoutLink = document.getElementById('logoutLink');

    if (isLoggedIn) {
        loginLink.style.display = 'none';
        logoutLink.style.display = 'inline';
    } else {
        loginLink.style.display = 'inline';
        logoutLink.style.display = 'none';
    }
}

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    handleSubmit('loginForm');
});