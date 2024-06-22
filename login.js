document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    

    const users = {
        RaI: 'Ari#120474',
        ArI: 'Rai#050802'
    };

    if (users[username] && users[username] === password) {
        localStorage.setItem('currentUser', username);
        
        window.location.href = 'study.html';
    } else {
        alert('Invalid username or password');
    }

});

const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", ()=>{
    window.open("ece.html", "_blank");
})