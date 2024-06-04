function store() {

    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if (name.value.length == 0) {
        alert('Vui lòng điền email');

    } else if (pw.value.length == 0) {
        alert('Vui lòng điền mật khẩu');

    } else if (name.value.length == 0 && pw.value.length == 0) {
        alert('Vui lòng điền email và mật khẩu');

    } else if (pw.value.length > 8) {
        alert('Tối đa 8 ký tự');

    } else if (!pw.value.match(numbers)) {
        alert('Vui lòng điền ít nhất 1 số');

    } else if (!pw.value.match(upperCaseLetters)) {
        alert('Vui lòng điền ít nhất 1 chữ in hoa');

    } else if (!pw.value.match(lowerCaseLetters)) {
        alert('Vui lòng điền ít nhất 1 chữ in thường');

    } else {
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        alert('Tài khoản của bạn đã được tạo');
    }


}

//checking
function check() {
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    var userRemember = document.getElementById("rememberMe");

    if (userName.value == storedName && userPw.value == storedPw) {
        alert('Bạn đã đăng nhập.');
        login = true;
        localStorage.setItem('user',JSON.stringify(users[i]));
        window.location.href = "./index.html"
    } else {
        alert('Lỗi không đăng nhập được.');
    }




}

// function myFunction() {
//     var x = document.getElementById("pw");
//     if (x.type === "password") {
//       x.type = "text";
//     } else {
//       x.type = "password";
//     }
//   }

const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#pw");

togglePassword.addEventListener("click", function (e) {
    // toggle the type attribute
    const type = pw.getAttribute("type") === "password" ? "text" : "password";
    pw.setAttribute("type", type);

    // toggle the icon
    this.classList.toggle("fa-eye-slash");
});




