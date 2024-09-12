(function () {
	const winingScoreEle = document.querySelector("#winingScoreEle");
	const winingScoreInp = document.querySelector("#winingScoreInp");
	const submit = document.querySelector("#submit");
	const playerOneBtn = document.querySelector("#playerOneBtn");
	const playerOneEle = document.querySelector("#playerOneEle");
	const playerTwoBtn = document.querySelector("#playerTwoBtn");
	const playerTwoEle = document.querySelector("#playerTwoEle");
	const resetBtn = document.querySelector("#reset");
	const resultElt = document.querySelector("#resultElt");

	const notice = document.querySelector(".notice");

	submit.setAttribute("disabled", "disabled");
	resetBtn.setAttribute("disabled", "disabled");
	playerTwoBtn.setAttribute("disabled", "disabled");
	playerOneBtn.setAttribute("disabled", "disabled");

	const instructionDiv = document.querySelector(".instruction");
	const instructionsBtn = document.querySelector("#instructionsBtn");
	const closeBtn = document.querySelector("#closeBtn");

	instructionsBtn.addEventListener("click", (e) => {
		if (instructionDiv.classList.contains("d-none") === true) {
			instructionDiv.classList.remove("d-none");
			instructionsBtn.classList.add("d-none");
		}
	});

	closeBtn.addEventListener("click", (e) => {
		instructionDiv.classList.add("d-none");
		instructionsBtn.classList.remove("d-none");
	});

	// console.log(instructionDiv.classList.contains("d-none"));
	// console.log(instructionDiv.classList.remove("d-none"));
	// console.log(instructionDiv.classList.remove("d-none"));

	function getWiningValue() {
		winingScoreInp.addEventListener("keydown", (event) => {
			let value = event.key;
			if (isNaN(parseInt(value)) != true && parseInt(value) >= 1) {
				submit.removeAttribute("disabled", "disabled");
				resetBtn.removeAttribute("disabled", "disabled");
				playerTwoBtn.removeAttribute("disabled", "disabled");
				playerOneBtn.removeAttribute("disabled", "disabled");
			} else {
				submit.setAttribute("disabled", "disabled");
				resetBtn.setAttribute("disabled", "disabled");
				playerTwoBtn.setAttribute("disabled", "disabled");
				playerOneBtn.setAttribute("disabled", "disabled");
			}
		});
		let value = winingScoreInp.value;
		winingScoreEle.textContent = `Wining Score: ${value}`;
		return value;
	}
	getWiningValue();
	submit.addEventListener("click", (e) => {
		getWiningValue();
		// player turn will be activate here
		let getRandom = Math.round(Math.random() * 19);
		if (getRandom % 2 === 0) {
			playerTwoBtn.setAttribute("disabled", "disabled");
			playerOneBtn.removeAttribute("disabled", "disabled");
		} else {
			playerOneBtn.setAttribute("disabled", "disabled");
			playerTwoBtn.removeAttribute("disabled", "disabled");
		}
	});

	let counter = 0;
	function getPlayerOneInput() {
		playerOneBtn.addEventListener("click", (e) => {
			if (getWiningValue() > 0) {
				counter = counter + 1;
				playerOneEle.textContent = `Player One Score: ${counter}`;
				if (getWiningValue() == counter) {
					playerOneBtn.setAttribute("disabled", "disabled");
					playerTwoBtn.setAttribute("disabled", "disabled");
					resultElt.textContent = "Player One Have Won This Round";
					resetBtn.removeAttribute("disabled", "disabled");
					submit.setAttribute("disabled", "disabled");
					winingScoreInp.value = [];
				} else {
					playerOneBtn.setAttribute("disabled", "disabled");
					playerTwoBtn.removeAttribute("disabled", "disabled");
				}
			} else {
				notice.textContent = "Please set the wining score first!";
			}
		});
	}

	getPlayerOneInput();

	function getPlayerTowInput() {
		playerTwoBtn.addEventListener("click", (e) => {
			if (getWiningValue() > 0) {
				counter = counter + 1;
				playerTwoEle.textContent = `Player One Score: ${counter}`;
				if (getWiningValue() == counter) {
					playerOneBtn.setAttribute("disabled", "disabled");
					playerTwoBtn.setAttribute("disabled", "disabled");
					resultElt.textContent = "Player Two Have Won This Round";
					resetBtn.removeAttribute("disabled", "disabled");
					submit.setAttribute("disabled", "disabled");
					winingScoreInp.value = [];
				} else {
					playerTwoBtn.setAttribute("disabled", "disabled");
					playerOneBtn.removeAttribute("disabled", "disabled");
				}
			} else {
				notice.textContent = "Please set the wining score first!";
			}
		});
	}
	getPlayerTowInput();

	resetBtn.addEventListener("click", () => {
		window.location.reload();
	});
})();
