import { describe, it } from 'mocha';
import assert from 'assert';
import House from '../factory/House';
import HouseFactory from '../factory/HouseFactory';

describe('factory', function() {
	it('should create simple house', function() {
		const simple: House = HouseFactory.createSimpleHouse();

		assert.equal(simple + '', 'simple house');
	});

	it('should create medium house', function() {
		const medium: House = HouseFactory.createMediumHouse();

		assert.equal(medium + '', 'medium house');
	});

	it('should create fancy house', function() {
		const fancy: House = HouseFactory.createFancyHouse();

		assert.equal(fancy + '', 'fancy house');
	});
});
