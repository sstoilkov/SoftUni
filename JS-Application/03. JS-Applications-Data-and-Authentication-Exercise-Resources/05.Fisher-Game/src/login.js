window.addEventListener('DomContentLoaded', () => {
    const form = document.getElementById('login-form');
    form.addEventListener('submit', onLogin);
});

async function onLogin(event) {
    console.log('here')
    event.preventDefault();
    const formData = new FormData(event.target);

    const email = formData.get('email');
    const password = formData.get('password');

    // try {
    //     const res = await fetch('http://localhost:3030/users/login', {
    //         method: 'post',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ email, password })
    //     });
    //     if (res.ok != true) {
    //         const error = await res.json();
    //         throw new Error(error.message);
    //     }

    //     const data = await res.json();
    //     const token = data.accessToken;

    // } catch (err) {

    // }

}