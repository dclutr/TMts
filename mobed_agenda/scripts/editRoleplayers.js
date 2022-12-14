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

let roleplayers = [
	{
		role: 'Sergeant-at-arms',
		name: 'TM Frodo'
	},
	{
		role: 'Presiding Officer',
		name: 'TM Aragon'
	},
	{
		role: 'Toastmaster of the Day',
		name: 'TM Eowyn'
	},
	{
		role: 'Timer',
		name: 'TM Gandalf'
	},
	{
		role: 'Ah counter',
		name: 'TM Pippin'
	},
	{
		role: 'Grammarian',
		name: 'TM Boromir'
	},
	{
		role: 'General Evaluator',
		name: 'TM Galadriel'
	},
	{
		role: 'Table Topics Master',
		name: 'TM Merry'
	},,
	{
		role: 'Evaluator 1',
		name: 'TM Elrond'
	},
	{
		role: 'Speaker 1',
		name: 'TM Bilbo'
	},
	{
		role: 'Evaluator 2',
		name: 'TM Gollum'
	},
	{
		role: 'Speaker 2',
		name: 'TM Gollum'
	}

];

// get name for role

function getRoleplayerName(role) {

	const trimRole = r => r.replaceAll(' ','').replaceAll('-','').toLowerCase();

	const filteredRoleplayers =
		roleplayers.filter(
			roleplayer => (trimRole(roleplayer.role) === trimRole(role))
		);

	if (filteredRoleplayers.length > 0) {
		return filteredRoleplayers[0].name;
	}

	return null;
}

// view

const roleplayersTable =
	document.querySelector('#roleplayers .tab_main table');

const [
	roleplayersIncreaseButton,
	roleplayersDecreaseButton
] =
	document.querySelectorAll('#roleplayers .tab_footer button');

// add roleplayer to model and update view

roleplayersIncreaseButton.onclick = () => {

	const newRoleplayer = {
		name:
			DEFAULTS.ROLEPLAYER_NAME,
		role:
			DEFAULTS.ROLEPLAYER_ROLE
	};

	roleplayers.push(newRoleplayer);
	roleplayersToTable();
}

// if at least 2 roleplayers, remove roleplayer from model and update view

roleplayersDecreaseButton.onclick = () => {

	if (roleplayers.length >= 2) {
		roleplayers.pop();
		roleplayersToTable();
	}
}

// model to view

roleplayersToTable();

function roleplayersToTable() {

	roleplayersTable.innerHTML = roleplayers.reduce((html, roleplayer, index) => (
			html +
			((index > 0) ? '<tr> <td style="opacity:0"> </td> </tr>' : '') +
			roleplayerRoleToRow(index) +
			roleplayerNameToRow(index)
		),
		''
	);
}

function roleplayerNameToRow(i) {

	return (
		'<tr> <td> <input class="roleplayer_name" onchange="rowToRoleplayerName(' + i + ')" value="' + roleplayers[i].name + '"/> </td> </tr>'
	);
}

function roleplayerRoleToRow(i) {

	if (roleplayers[i].role === undefined) {
		roleplayers[i].role = '<roleplayer role>';
	}

	return (
		'<tr> <td> <input class="roleplayer_role" onchange="rowToRoleplayerRole(' + i + ')" value="' + roleplayers[i].role + '"/> </td> </tr>'
	);
}

// view to model

function rowToRoleplayerName(i) {
	roleplayers[i].name =
		document.querySelectorAll('.roleplayer_name')[i].value;
}

function rowToRoleplayerRole(i) {
	roleplayers[i].role =
		document.querySelectorAll('.roleplayer_role')[i].value;
}
