/*
MIT No Attribution

Copyright 2022 Akshansh Manchanda

Permission is hereby granted, free of charge, to any person obtaining a copy of this
software and associated documentation files (the "Software"), to deal in the Software
without restriction, including without limitation the rights to use, copy, modify,
merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/


function numberPostfix(n) {

	let digits = ('' + n).split('');

	if (digits.size >= 2) {

		const tenthDigit =
			digits[digits.length - 2];

		if (tenthDigit === '1') { return 'th'; }
	}

	const unitDigit =
		digits[digits.length - 1];

	switch (unitDigit) {
		case '1': return 'st';
		case '2': return 'nd';
		case '3': return 'rd';
	}

	return 'th';
}

// numberPostfix(11) === 'th'
// numberPostfix(21) === 'st'
// numberPostfix(22) === 'nd'
// numberPostfix(23) === 'rd'
// numberPostfix(24) === 'th'

function zeroFill(n1, n2) {

	let string = '' + n1;

	for(let i = 0; string.length < n2; i++) {
		string = '0' + string;
	}

	return string;
}

// zeroFill(32, 5) === '00035'
