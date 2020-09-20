class board{
	constructor(game){
		this.game = game;
		this.data = [
				[_,_,_,_,_,_,_,_,_,_],
				[_,_,_,_,_,_,_,_,_,_],
				[_,_,_,_,_,_,_,_,_,_],
				[_,_,_,_,_,_,_,_,_,_],
				[_,_,_,_,_,_,_,_,_,_],
				[_,_,_,_,_,_,_,_,_,_],
				[_,_,_,_,_,_,_,_,_,_],
				[_,_,_,_,_,_,_,_,_,_],
				[_,_,_,_,_,_,_,_,_,_],
				[_,_,_,_,_,_,_,_,_,_],
				[_,_,_,_,_,_,_,_,_,_],
				[_,_,_,_,_,_,_,_,_,_],
				[_,_,_,_,_,_,_,_,_,_],
				[_,_,_,_,_,_,_,_,_,_],
				[_,_,_,_,_,_,_,_,_,_],
				[_,_,_,_,_,_,_,_,_,_],
				[_,_,_,_,_,_,_,_,_,_],
				[_,_,_,_,_,_,_,_,_,_],
				[_,_,_,_,_,_,_,_,_,_],
				[_,_,_,_,_,_,_,_,_,_]
			];
		this.nextData =[ 
			[_,_,_,_,_,_],
			[_,_,_,_,_,_],
			[_,_,_,_,_,_],
			[_,_,_,_,_,_],
			[_,_,_,_,_,_]
		];
	}
	drawBackground(){
		this.drawMainScreen();
		this.drawNextScreen();
	}
	drawMainScreen(){
		for(let r = 0; r < this.data.length; r++){
			for(let c = 0; c < this.data[0].length; c++){
				let cl = _colorBr;
				if(this.data[r][c] === x){
					cl = _colorBl;
				}
				let bl = new block(this.game, c, r, cl);
				bl.drawMainScreen();				
			}
		}
	}
	drawNextScreen(){
		for(let r = 0; r < this.nextData.length; r++){
			for(let c = 0; c < this.nextData[0].length; c++){
				let cl = _colorBr;
				if(this.nextData[r][c] === x){
					cl = _colorBl;
				}
				let bl = new block(this.game, c, r, cl);
				bl.drawNextScreen();				
			}
		}
	}
}