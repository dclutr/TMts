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

function addMinutesToTimeString(minutes, timeString) {

	let time = {
		hours:
			parseInt(timeString.slice(0,2)),
		minutes:
			parseInt(timeString.slice(3))
	};

	time.minutes += minutes;

	// {hours: 13, minutes: 70} ===> {hours: 14, minutes: 10}
	while (time.minutes >= 60) {
		time.minutes -= 60;
		time.hours += 1;
	}

	// {hours: 26, minutes: 10} ===> {hours: 2, minutes: 10}
	while (time.hours >= 24) {
		time.hours -= 24;
	}

	// {hours: 1, minutes: 1} ===> '01:01'
	const result = (
		zeroFill(time.hours, 2) +
		':' +
		zeroFill(time.minutes, 2)
	);

	console.log(timeString + ' + ' + minutes + ' = ' + result);
	return result;
}
// addMinutesToTimeString(5, '13:05') === '13:10'

function subtractMinutesFromTimeString(minutes, timeString) {

	let time = {
		hours:
			parseInt(timeString.slice(0,2)),
		minutes:
			parseInt(timeString.slice(3))
	};

	time.minutes -= minutes;

	// {hours: 13, minutes: -10} ===> {hours: 12, minutes: 50}
	while (time.minutes < 0) {
		time.minutes += 60;
		time.hours -= 1;
	}

	// {hours: -10, minutes: 10} ===> {hours: 14, minutes: 10}
	while (time.hours < 0) {
		time.hours += 24;
	}

	// {hours: 1, minutes: 1} ===> '01:01'
	const result = (
		zeroFill(time.hours, 2) +
		':' +
		zeroFill('' + time.minutes, 2)
	);

	console.log(timeString + ' - ' + minutes + ' = ' + result);
	return result;
}

// subtractMinutesFromTimeString(5, '13:05') === '13:00'

function timeStringDifferenceInMinutes(timeA, timeB) {

	const hourDifference =
			parseInt(timeA.slice(0,2)) - parseInt(timeB.slice(0,2));

	const minuteDifference =
			parseInt(timeA.slice(3)) - parseInt(timeB.slice(3));

	const result =
		(60 * hourDifference + minuteDifference);

	console.log(timeA + ' - ' + timeB + ' = ' + result);
	return result;
}

// timeStringDifferenceInMinutes('13:24', '12:14') === 70
