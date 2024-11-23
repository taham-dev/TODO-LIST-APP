let todoInput = document.getElementById("listValue");
let addBtn = document.getElementById("add");
let ul = document.getElementById("list");

addBtn.addEventListener("click", () => {
	let liValue = document.createElement("li");
	liValue.textContent = todoInput.value;
    liValue.style.backgroundColor = "rgb(13, 84, 100)";
    liValue.style.marginBottom = "10px"
    liValue.style.borderRadius = "5px";
    liValue.style.textAlign = "center"
    liValue.style.paddingLeft = "5px"
	document.getElementById("listValue").value = " ";

	let deleteBtn = document.createElement("button");
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.style.backgroundColor = "rgb(224, 5, 24)"
	deleteBtn.textContent = "❌";
    deleteBtn.classList.add("deleteBtn")

	let checkBtn = document.createElement("button");
	checkBtn.textContent = "✔️";
    checkBtn.classList.add("checkBtn")

	function removeList() {
		ul.removeChild(liValue);
	}

	function checkList() {
		liValue.style.textDecoration = "line-through";
		liValue.style.paddingRight = "5px";
		checkBtn.textContent = "Un-check";
        checkBtn.style.backgroundColor = ""
        
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

	listValue.appendChild(deleteBtn);
	listValue.appendChild(checkBtn);
	listValue.appendChild(liValue);
});

addBtn.addEventListener("click", addList);
