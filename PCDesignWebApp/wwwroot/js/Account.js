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

    // Sign Out Stuff
    let SignoutBtn = document.getElementById('signoutButton');
    let Signout = () => {
        location.href = "/login";
        sessionStorage.removeItem("user-creds");
        sessionStroage.removeItem("user-info");
    }
    SignoutBtn.addEventListener('click', Signout);

    // Delete User Stuff (doesn't work)
    let ConfirmDeleteBtn = document.getElementById('confirmdeletebtn');
    let DeleteUserBtn = document.getElementById('deleteuserbtn');

    let DeleteUser = () => {
        const user = auth.currentUser;

        const credentials = EmailAuthProvider.credentials(
            user.email,
            PasswordInp.value
        );

        reauthenticateWithCredential(user, credentials)
            .then(() => {
                deleteDoc(ref(db, 'UserAuthList/' + user.uid));
                deleteUser(user).then(() => {
                    location.href = "/login";
                    sessionStroage.removeItem("user-creds");
                    sessionStorage.removeItem("user-info");
                }).catch(error => {
                    alert(error.message);
                    console.log(error.code);
                    console.log(error.message);
                })
            }).catch(error => {
                alert(error.message);
                console.log(error.code);
                console.log(error.message);
            })
    }

    ConfirmDeleteBtn.addEventListener('click', DeleteUser)
});