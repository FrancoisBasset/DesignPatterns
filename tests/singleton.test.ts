import { describe, it } from 'mocha';
import assert from 'assert';

import Earth from '../singleton/Earth';

describe('Singleton', function() {
	it('should have same references', function() {
		const earth1: Earth = Earth.getInstance();
		const earth2: Earth = Earth.getInstance();

		assert.equal(earth1, earth2);
	});

	it('should have same toString', function() {
		const earth1: Earth = Earth.getInstance();
		const earth2: Earth = Earth.getInstance();

		assert.equal(earth1 + '', earth2 + '');
	});
});
