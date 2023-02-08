import Circle from './Circle';
import Color from './Color';
import Rectangle from './Rectangle';

export default function prototype() {
	const rectangle1: Rectangle = new Rectangle(1, 1, Color.GREEN, 100, 50);
	const rectangle2: Rectangle = rectangle1.clone();
	console.log(rectangle1 + '');
	console.log(rectangle2 + '');

	const circle1: Circle = new Circle(100, 100, Color.RED, 10);
	const circle2: Circle = circle1.clone();
	console.log(circle1 + '');
	console.log(circle2 + '');
}
