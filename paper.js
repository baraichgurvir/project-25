class Paper {
	constructor(x, y, r) {
		var options = {
			isStatic: false,
			restitution: 0.3,
			friction: 0.5,
			density: 1.2
		}

		this.x = x;
		this.y = y;
		this.r = r;
		this.image = loadImage("paper.png")
		this.body = Bodies.circle(x, y, r/2, options);
		World.add(world, this.body);
	}

	display() {
		push();
		translate(this.body.position.x, this.body.position.y);
		rectMode(CENTER)
		strokeWeight(3);
		fill(255, 0, 255)
		image(this.image, -12.5, -18.5, this.r, this.r)
		pop();
	}
}