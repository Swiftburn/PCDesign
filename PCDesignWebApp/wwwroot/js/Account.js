document.addEventListener("DOMContentLoaded", function () {
    function loadUserData() {
        return new Promise((resolve) => {
            let UserCreds = JSON.parse(sessionStorage.getItem("user-creds"));
            let UserInfo = JSON.parse(sessionStorage.getItem("user-info"));

            if (UserCreds && UserInfo) {
                resolve({ UserCreds, UserInfo });
            } else {
                setTimeout(() => loadUserData().then(resolve), 100);
            }
        });
    }

    function updateProfile() {
        loadUserData().then(({ UserCreds, UserInfo }) => {
            let EmailHead = document.getElementById('emaildiv');
            EmailHead.innerText = `Email: ${UserCreds.email}`;

            let FirstNameHead = document.getElementById('firstnamediv');
            FirstNameHead.innerText = `First Name: ${UserInfo.firstName}`;

            let LastNameHead = document.getElementById('lastnamediv');
            LastNameHead.innerText = `Last Name: ${UserInfo.lastName}`;
        });
    }

    // Initial update
    updateProfile();

    // Update on hash change
    window.onhashchange = updateProfile;

    function loadSavedBuilds() {

    }

    loadSavedBuilds();

    let SignoutBtn = document.getElementById('signoutButton');

    let Signout = () => {
        location.href = "/login";
        sessionStorage.removeItem("user-creds");
        sessionStroage.removeItem("user-info");
    }

    SignoutBtn.addEventListener('click', Signout);
});