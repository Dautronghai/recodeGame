class game{
	constructor(){
		console.log('khoi tao game');
		this.canvas = null;
		this.context = null;

		this.nextCanvas = null;
		this.nextContext = null;

		this.init();
	}
	init(){
		//create canvas main screen
		this.canvas = document.createElement('canvas');
		this.canvas.width = 200;
		this.canvas.height = 400;
		this.context = this.canvas.getContext('2d');
		document.getElementById('mainScreeen').appendChild(this.canvas);

		//create canvas next screen
		this.nextCanvas = document.createElement('canvas');
		this.nextCanvas.width = 92;
		this.nextCanvas.height = 75;
		this.nextContext = this.nextCanvas.getContext('2d');
		document.getElementById('nextScreen').appendChild(this.nextCanvas);

		this.context.beginPath();
		this.context.strokeStyle = 'red';
		this.context.rect(0,0,20,20);
		this.context.stroke();

		this.context.fillStyle = 'red';
		this.context.fillRect(2, 2, 16, 16);
	}
}
var g = new game();