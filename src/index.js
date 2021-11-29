import "./styles.css";

const onClickAdd = () => {
  // 追加テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // pタグを生成
  const p = document.createElement("p");
  p.innerText = inputText;

  // divタグを生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグを生成
  const li = document.createElement("li");

  div.appendChild(p);
  li.appendChild(div);
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
