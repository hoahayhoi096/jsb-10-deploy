document.getElementById("register-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.querySelector(".inp-username").value.trim();
    const email = document.querySelector(".inp-email").value.trim();
    const password = document.querySelector(".inp-pwd").value;
    const confirmPassword = document.querySelector(".inp-cf-pw").value;

    // 1. Kiểm tra dữ liệu
    if (!username || !email || !password || !confirmPassword) {
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
    }
    if (password !== confirmPassword) {
        alert("Mật khẩu xác nhận không khớp");
        return;
    }

    // 2. Lấy danh sách user hiện có từ localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // 3. Kiểm tra trùng email
    if (users.some(user => user.email === email)) {
        alert("Email này đã được đăng ký");
        return;
    }

    // 4. Thêm user mới
    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Đăng ký thành công! Hãy đăng nhập.");
    window.location.href = "./login.html";
});
