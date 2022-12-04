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

// view

const agendaPreviewTab =
	document.querySelector('#agenda_preview');

const agendaPreviewCanvas =
	document.querySelector('#agenda_preview .tab_main canvas');

const agendaDownloadLink =
	document.querySelector('#agenda_preview .tab_footer a');

const agendaPreviewButton =
	document.querySelectorAll('#page_footer button')[1];


// canvas

const AGENDA_MARGIN = 16;

// agenda preview button

agendaPreviewButton.onclick = startAgendaPreview;

function startAgendaPreview() {

	// hide start preview button

	agendaPreviewButton.style.display = 'none';

	// load agenda preview

	switchToAgendaPreviewTab();
	drawAgendaPreviewCanvas();

	// load agenda download link
	agendaDownloadLink.href = agendaPreviewCanvas.toDataURL('image/jpeg', 1.0);;
}

// switch to agenda preview tab

function switchToAgendaPreviewTab() {

	// hide all tabs

	const tabs =
		document.querySelectorAll('.tab');

	for (tab of tabs) {
		tab.style.display = 'none';
	}

	// show agenda preview tab

	agendaPreviewTab.style.display = 'block';
}
