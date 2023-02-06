const id = document.querySelector("#id");
const name = document.querySelector("#name");
const password = document.querySelector("#password");
const passwordCheck = document.querySelector("#password-check");
const registerBtn = document.querySelector("#register-btn");

registerBtn.addEventListener("click", update);

function update() {
  const req = {
    id: id.innerText,
    name: name.value,
    password: password.value,
  };
  if (equalCheck()) {
    fetch("/update", {
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
          alert("정보 수정 완료!");
          location.href = "/";
        } else {
          alert("정보 수정 실패...");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  } else {
    alert("비밀번호가 일치하지 않습니다.");
  }
}

function equalCheck() {
  if (password.value === passwordCheck.value) return true;
  else return false;
}
