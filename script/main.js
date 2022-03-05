(() => {
	// collect the buttons at the bottom of the page
	let theThumbnails = document.querySelectorAll('#buttonHolder img'),
				puzzlePieces = document.querySelectorAll('.puzzle-pieces *'),
				dropZones = document.querySelectorAll('.drop-zone'),
				gameBoard = document.querySelector('.puzzle-board');

	const piecePaths = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	// theThumbnails collects alll of the image elements into an array-like container
	// [
	// 	<img src="images/buttonZero.jpg" alt="thumbnail">
	// 	<img src="images/buttonOne.jpg" alt="thumbnail">
	// 	<img src="images/buttonTwo.jpg" alt="thumbnail">
	// 	<img src="images/buttonThree.jpg" alt="thumbnail">
	// ]

	function changeImageSet () {

		// debugger; // pause our code execusion at this point
		// let key = this.dataset.bgref;
		// console.log(key);

		// theGameBoard.style.backgroundImage = `url(images/backGround${key}.jpg)`;
		gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`;

		// `` => this is a javascript template string. You can use it to write a bit of 
		// inline backgroundImage which will be interpreted at runtime 
		// search for MDN JavaScript Template String

		piecePaths.forEach((piece, index) => {

			puzzlePieces[index].src = `images/${piece + this.dataset.bgref}.jpg`;

		})
	}


	// the "this" keyword refers to the elements that triggers this function (the nav button)

	function startDrag (event) {
		// save a reference to the element we're dragging
		event.dataTransfer.setData('draggedElement', event.target.id);
	}



	function draggedOver (event) {
		// event is the user event (a click, a drag, a drop)
		// some elements have default behaviour (like an anchor tag) -> we need to block that behaviour
		// and script our own
		// that's what event.preventDefault() does -> override the default behaviour (block it)
		event.preventDefault();
	}


	function handleDrop (event) {
		event.preventDefault();
		// console.log(gameBoardChildren);

		let currentEl = event.dataTransfer.getData('draggedElement');
		// console.log(`dropped this element:`, currentEl);

		// appendChild (add child) is a built-in JavaScript method that 
		// adds an element to a containing (parent) element

		if (this.children.length > 0) {
			return;
		}  // added return here for the first problem!


		// the "this" keyword is a reference to the element you're dropping onto (or into)
		this.appendChild(document.querySelector(`#${currentEl}`));
	}

	// add event handling here -> loop through theThumbnails array and add event handling to each image
	theThumbnails.forEach(item => item.addEventListener('click', changeImageSet));

	// listen for the dragstarted event on the puzzle puzzlePieces
	puzzlePieces.forEach(piece => piece.addEventListener('dragstart', startDrag));

	// add event handling for the drop zones (dragover and drop)
	dropZones.forEach(zone => {
		zone.addEventListener('dragover', draggedOver);
		zone.addEventListener('drop', handleDrop);
	});
})();
