class game{
	constructor(){
		console.log('khoi tao game');
		this.canvas = null;
		this.context = null;

		this.nextCanvas = null;
		this.nextContext = null;

		this.init();		
		this.eventListener();
		this.loop();
		this.startGame();
	}
	eventListener(){
		document.addEventListener('keydown', (event)=>{
			switch(event.key) {
				case 'ArrowUp':
					console.log('up');
					break;
				case 'ArrowDown':
					console.log('down');
					break;
				case 'ArrowLeft':
					console.log('Left');
					this.block.moveLeft();									
					break;
				case 'ArrowRight':
					this.block.moveRight();
					console.log('Right');
					break;
			};
		} );
	}
	init(){
		//create canvas main screen
		this.canvas = document.createElement('canvas');
		this.canvas.width = _WIDTH;
		this.canvas.height = _HEIGHT;
		this.context = this.canvas.getContext('2d');
		document.getElementById('mainScreeen').appendChild(this.canvas);

		//create canvas next screen
		this.nextCanvas = document.createElement('canvas');
		this.nextCanvas.width = _NEXTWIDTH;
		this.nextCanvas.height = _NEXTHEIGHT;
		this.nextContext = this.nextCanvas.getContext('2d');
		document.getElementById('nextScreen').appendChild(this.nextCanvas);

		this.board = new board(this);
		this.board.drawBackground();

		this.block = new block(this, 3, 3, _colorBl);
		this.block.drawMainScreen();
		
	}
	startGame(){
		return setInterval(()=>{
			this.block.fall();			
		}, 1000);
	}
	clearScreen(){
		this.context.clearRect(0, 0, _WIDTH, _HEIGHT);
		this.board.drawBackground();
	}
	draw(){
		this.clearScreen();		
		//this.block.drawMainScreen();		
	}
	loop(){
		console.log('loop');
		this.draw();
		setTimeout(()=>this.loop(), 30);
	}

}
var g = new game();