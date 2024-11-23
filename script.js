let todoInput = document.getElementById("listValue");
let addBtn = document.getElementById("add");
let ul = document.getElementById("list");

addBtn.addEventListener("click", () => {
	let liValue = document.createElement("li");
	liValue.textContent = todoInput.value;

	document.getElementById("listValue").value = " ";

	let deleteBtn = document.createElement("button");
	deleteBtn.style.marginLeft = "10px";
	deleteBtn.textContent = "❌";

	let checkBtn = document.createElement("button");
	checkBtn.textContent = "✔️";

	function removeList() {
		ul.removeChild(liValue);
	}

	function checkList() {
		liValue.style.textDecoration = "line-through";
		liValue.style.paddingRight = "5px";
		checkBtn.textContent = "Un-check";
		checkBtn.removeEventListener("click", checkList);
		checkBtn.addEventListener("click", unCheck);
	}

	function unCheck() {
		liValue.style.textDecoration = "none";
		checkBtn.textContent = "✔";
		checkBtn.removeEventListener("click", unCheck);
		checkBtn.addEventListener("click", checkList);
	}

	deleteBtn.addEventListener("click", removeList);
	checkBtn.addEventListener("click", checkList);

	liValue.appendChild(deleteBtn);
	liValue.appendChild(checkBtn);
	ul.appendChild(liValue);
});

addBtn.addEventListener("click", addList);
