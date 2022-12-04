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

// dom elements

const tabs =
	document.querySelectorAll('.tab');

const tabSelector =
	document.querySelector('#page_footer select');

const editButton =
	document.querySelectorAll('#page_footer button')[0];

// switch to tab selected by default

switchToSelectedEditTab();

// switch to tab selected

editButton.onclick = switchToSelectedEditTab;
tabSelector.onchange = switchToSelectedEditTab;

// switching to the tab selected

function switchToSelectedEditTab() {

	// hide all tabs

	for (tab of tabs) {
		tab.style.display = 'none';
	}

	// change stop preview button to start preview button

	if (agendaPreviewButton.style.display !== 'inline') {
		agendaPreviewButton.style.display = 'inline';
	}

	// show selected tab

	const selectedTabName = tabSelector.value;

	const selectedTab =
		document.querySelector('#' + selectedTabName);

	selectedTab.style.display = 'block';
}
