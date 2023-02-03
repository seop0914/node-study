const id = document.querySelector("#id");
const password = document.querySelector("#password");
const loginBtn = document.querySelector("#login-btn");

loginBtn.addEventListener("click", login);

function login() {
  const req = {
    id: id.value,
    password: password.value,
  };
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      if (res.success) {
        location.href = "/";
      } else {
        alert("로그인 실패");
      }
    })
    .catch((err) => {
      console.error(new Error("로그인 에러 발생"));
    });
}
