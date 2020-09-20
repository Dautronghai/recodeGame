class block{
	constructor(game, col, row, color){
		console.log('khoi block');		
		this.game = game;
		this.col = col;
		this.row = row;
		this.color = color;
	}
	drawMainScreen(){
		let _x = this.col * _SIZE;
		let _y = this.row * _SIZE;
		this.game.context.beginPath();
		this.game.context.strokeStyle = this.color;
		this.game.context.rect(_x, _y, _SIZE, _SIZE);
		this.game.context.stroke();

		this.game.context.fillStyle = this.color;
		this.game.context.fillRect(_x + 2, _y + 2, _SIZE - 4, _SIZE - 4);
	}
	drawNextScreen(){
		let _x = this.col * _NEXTSIZE;
		let _y = this.row * _NEXTSIZE;
		this.game.nextContext.beginPath();
		this.game.nextContext.strokeStyle = this.color;
		this.game.nextContext.rect(_x, _y, _NEXTSIZE, _NEXTSIZE);
		this.game.nextContext.stroke();

		this.game.nextContext.fillStyle = this.color;
		this.game.nextContext.fillRect(_x + 2, _y + 2, _NEXTSIZE - 4, _NEXTSIZE - 4);	
	}
	moveLeft(){
		this.col--;
		this.drawMainScreen();		
	}
	moveRight(){
		this.col++;
		this.drawMainScreen();		
	}
	fall(){
		this.row+=1;
		this.drawMainScreen();		
	}
		
}