async function loginFormHandler(event) {
    event.preventDefault();
    const userName = document.querySelector('.username-login').value.trim();
    const password = document.querySelector('.password-login').value.trim();
    if(userName && password){
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                userName,
                password
            }),
            headers: {"Content-Type": "application/json"}
        })
        if(response.ok){
            document.location.replace('/')
        } else {
            alert(response.statusText);
        }
    }
}

document.addEventListener('submit', loginFormHandler);