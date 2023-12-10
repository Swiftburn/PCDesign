document.addEventListener('DOMContentLoaded', function () {
    document.body.addEventListener('click', function (event) {
        if (event.target.closest('#navbarCollapse')) {
            updateLoginAccountLink();
        }
    });

    document.addEventListener('userLogin', updateLoginAccountLink);
    document.addEventListener('userLogout', updateLoginAccountLink);
    updateLoginAccountLink();
});

window.updateLoginAccountLink = function () {
    let userCreds = JSON.parse(sessionStorage.getItem("user-creds"));
    let loginAccountReturn = document.getElementById('loginAccountReturn');

    if (userCreds !== null) {
        loginAccountReturn.innerHTML = (
            '<a class="nav-link" href="Account">' +
            '<div>' +
            '<div class="nav-link-icon-padding"><span class="oi oi-person" aria-hidden="true"></span></div>' +
            '<div>Account</div>' +
            '</div>' +
            '</a>'
        );
    } else {
        loginAccountReturn.innerHTML = (
            '<a class="nav-link" href="Login">' +
            '<div>' +
            '<div class="nav-link-icon-padding"><span class="oi oi-person" aria-hidden="true"></span></div>' +
            '<div>Login</div>' +
            '</div>' +
            '</a>'
        );
    }
};