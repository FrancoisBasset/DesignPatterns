import Earth from './Earth';

export default function singleton() {
	const earth: Earth = Earth.getInstance();
	console.log(earth + '');

	const earth2: Earth = Earth.getInstance();
	console.log(earth2 + '');

	const earth3: Earth = Earth.getInstance();
	console.log(earth3 + '');
}
