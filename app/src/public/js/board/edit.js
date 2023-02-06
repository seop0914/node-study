const id = document.querySelector("#id");
const title = document.querySelector("#title");
const content = document.querySelector("#content");
const button = document.querySelector("#complete-btn");

button.addEventListener("click", () => {
  const req = {
    id: id.value,
    title: title.value,
    content: content.value,
  };
  fetch("/board/edit", {
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
        alert("게시글이 수정되었습니다.");
        location.href = "/board";
      } else {
        alert("수정 실패!");
      }
    });
});
