window.addEventListener('DOMContentLoaded', function() {
    var text = document.getElementById("sh");
    const currentUser = localStorage.getItem('currentUser');

    if (currentUser === 'ArI') {
        text.innerHTML = 'Aritra Karar';
    }

    if (currentUser === 'RaI'){
        text.innerHTML = 'Sharanya Mukherjee';
    }

    const btn1 = document.getElementById("btn1");
    btn1.addEventListener("click", () => {
        window.open("ece.html", "_blank");
    });
});
