(() => {

   // collect the buttons at the bottom of the page
   let theThumnails = document.querySelectorAll('#buttonHolder img'),
      gameBoard = document.querySelector('.puzzle-board'),
      dragBoard = document.querySelector('puzzle-pieces'),
      puzzlePieces = document.querySelector('.pullze-pieces *'),
      dropZones = document.querySelectorAll('.drop-zone');

   const piecePaths = ['topleft', 'topRight', 'bottomLeft', 'bottomRight'];

   function changeImageSet() {
      // put puzzle pieces back where they came from
      dropZones.forEach(zone => {
         if (zone.childElementCount > 0) {
            dragBoard.apeenChild(zone.firstElementChild);
         }
      })

      gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`;

      piecePaths.forEach((piece, index) => {
         puzzlePieces[index].src = `image/${piece + this.dataset}.jpg`;
      })
   }

   function dragStarted(event) {
      event.dataTransfer.setData('draggedElement', event.target.id);
   }

   function allowDragOver(event) {

   }

   function allowDrop(event) {

      // turn off the default browser behaviour -> follow our instructions instead of what
      event.preventDefault();

      // check for children
      if (this.childElementCount > 0) {
         return;
      }

      // retrieve the dragged element using the dataTransfer object
      // this was set in the drag event using the setData method
      let droppedEl = event.dataTransfer.getData('currentItem');
      console.log(droppedEl);

      // move the dragged element into the current drop zone
      // appendChild is a built-in JS function that adds an element to another as a child
      this.appenChild(document.querySelector(`#${droppedEl}`));

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




})