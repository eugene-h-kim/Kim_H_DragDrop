(() => {
	// make the connections to the elements on the page
	// that we want the user to interact with
	const theButtons = document.querySelectorAll("#buttonHolder img"),
				theGameBoard = document.querySelector(".puzzle-board");

	// theButtons becomes this:
	// [
	//  <img>
	//  <img>
	//  <img>
	//  <img>
	// ]
	//

	function changeBgImg () {
		// debugger; // pause our code execusion at this point
		// let key = this.dataset.bgref;
		// console.log(key);

		// theGameBoard.style.backgroundImage = `url(images/backGround${key}.jpg)`;
		theGameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`;

		// `` => this is a javascript template string. You can use it to write a bit of 
		// inline backgroundImage which will be interpreted at runtime 
		// search for MDN JavaScript Template String
	}

	// these are the "triggers" we want the user to use to fire off events
	theButtons.forEach(button => button.addEventListener("click", changeBgImg));
	
})();
