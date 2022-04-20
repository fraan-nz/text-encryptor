const encryptBtn = document.querySelector("#encryptBtn");
const decryptBtn = document.querySelector("#decryptBtn");
const copyBtn = document.querySelector("#copyBtn");
const cleanBtn = document.querySelector("#cleanBtn");
const encryptText = document.querySelector(".form__textArea");
const decryptText = document.querySelector(".message__text");
const msgPicture = document.querySelector("#msg--waiting");
const msgText = document.querySelector("#msg");

encryptText.focus();

const encrypt = (text) => {
	const regex = /^[a-zA-Z\s]+$/;
	if (regex.test(text)) {
		return text
			.toLowerCase()
			.split("")
			.map((letter) => {
				if (letter === "a") return "ai";
				else if (letter === "e") return "enter";
				else if (letter === "i") return "imes";
				else if (letter === "o") return "ober";
				else if (letter === "u") return "ufat";
				else return letter;
			})
			.join("");
	} else {
		return "Los carácteres especiales no son admitidos";
	}
};

const decrypt = (text) => {
	const regex = /^[a-zA-Z\s]+$/;
	if (regex.test(text)) {
		return text
			.replaceAll("ai", "a")
			.replaceAll("enter", "e")
			.replaceAll("imes", "i")
			.replaceAll("ober", "o")
			.replaceAll("ufat", "u");
	} else {
		return "Los carácteres especiales no son admitidos";
	}
};

encryptBtn.addEventListener("click", (e) => {
	e.preventDefault();
	msgPicture.classList.add("hide");
	msgText.classList.remove("hide");
	const text = encryptText.value;
	const message = encrypt(text);
	decryptText.textContent = message;
});

decryptBtn.addEventListener("click", (e) => {
	e.preventDefault();
	msgPicture.classList.add("hide");
	msgText.classList.remove("hide");
	const text = encryptText.value;
	const message = decrypt(text);
	decryptText.textContent = message;
});

cleanBtn.addEventListener("click", () => {
	encryptText.value = "";
	cleanBtn.classList.add("hide");
	encryptText.focus();
});

encryptText.addEventListener("input", () => {
	if (encryptText.value !== "") {
		cleanBtn.classList.remove("hide");
	} else {
		cleanBtn.classList.add("hide");
	}
});

copyBtn.addEventListener("click", () => {
	navigator.clipboard.writeText(decryptText.textContent);
});
