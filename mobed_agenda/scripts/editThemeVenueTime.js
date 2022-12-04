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

// model

const meeting = {
	theme:
		DEFAULTS.THEME,
	venue:
		DEFAULTS.VENUE,
	date:
		DEFAULTS.DATE,
	joinByTime:
		DEFAULTS.JOIN_BY_TIME,
	startTime:
		DEFAULTS.START_TIME,
	stopTime:
		DEFAULTS.STOP_TIME,
}

// view

const meetingInputs = {};

let i = 0;

for (let property of ['theme', 'venue', 'date', 'joinByTime', 'startTime', 'stopTime']) {


	meetingInputs[property] =
		document.querySelectorAll('#theme_venue_time .tab_main table tr td input')[i];

	meetingInputs[property].onchange =
		() => inputToMeeting(property);

	i++;
}

// view to model

function inputToMeeting(property) {
	meeting[property] = meetingInputs[property].value
}
