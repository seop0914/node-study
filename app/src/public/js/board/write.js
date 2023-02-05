const title = document.querySelector("#title");
const content = document.querySelector("#content");
const writer = document.querySelector("#writer");
const button = document.querySelector("#complete-btn");

button.addEventListener("click", () => {
  const req = {
    title: title.value,
    content: content.value,
    writer: writer.value,
  };
  fetch("/board/write", {
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
        alert("게시글이 성공적으로 등록되었습니다.");
        location.href = "/board/list";
      }
    });
});
