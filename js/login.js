document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.querySelector(".inp-email").value.trim();
    const password = document.querySelector(".inp-pwd").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Tìm user khớp thông tin
    const foundUser = users.find(user => user.email === email && user.password === password);

    if (foundUser) {
        localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
        alert("Đăng nhập thành công!");
        
        const homeUrl = new URL('index.html', window.location.href).href;
        window.location.replace(homeUrl);
    } else {
        alert("Sai email hoặc mật khẩu");
    }
});



