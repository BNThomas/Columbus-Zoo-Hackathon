var dayName = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var today = new Date();
today.setTime(today.getTime());

//Ages 0-2
var age_tier_1 = "Under Age 3";
//Frankin County Residents
var fcr_price_tier_1 = new Array("Free", "Free", "Free", "Free", "Free", "Free", "Free");
//Non-Frankin County Residents
var nfcr_price_tier_1 = new Array("Free", "Free", "Free", "Free", "Free", "Free", "Free");
//Reciprocal Memberships
var rm_price_tier_1 = new Array("Free", "Free", "Free", "Free", "Free", "Free", "Free");

//Ages 3-9
var age_tier_2 = "Ages 3-9";
//Frankin County Residents
var fcr_price_tier_2 = new Array("$11.99", "$5.99", "$5.99", "$5.99", "$11.99", "$11.99", "$11.99");
//Non-Frankin County Residents
var nfcr_price_tier_2 = new Array("$16.99", "$16.99", "$16.99", "$16.99", "$16.99", "$16.99", "$16.99");
//Reciprocal Memberships
var rm_price_tier_2 = new Array("$8.49", "$8.49", "$8.49", "$8.49", "$8.49", "$8.49", "$8.49");

//Ages 10-59
var age_tier_3 = "Ages 10-59";
//Frankin County Residents
var fcr_price_tier_3 = new Array("$16.99", "$8.49", "$8.49", "$8.49", "$16.99", "$16.99", "$16.99");
//Non-Frankin County Residents
var nfcr_price_tier_3 = new Array("$21.99", "$21.99", "$21.99", "$21.99", "$21.99", "$21.99", "$21.99");
//Reciprocal Memberships
var rm_price_tier_3 = new Array("$10.99", "$10.99", "$10.99", "$10.99", "$10.99", "$10.99", "$10.99");

//Ages 60+
var age_tier_4 = "Ages 60+";
//Frankin County Residents
var fcr_price_tier_4 = new Array("$11.99", "$5.99", "$5.99", "$5.99", "$11.99", "$11.99", "$11.99");
//Non-Frankin County Residents
var nfcr_price_tier_4 = new Array("$16.99", "$16.99", "$8.49", "$16.99", "$16.99", "$16.99", "$16.99");
//Reciprocal Memberships
var rm_price_tier_4 = new Array("$8.49", "$8.49", "$8.49", "$8.49", "$8.49", "$8.49", "$8.49");

var today_admission_value = [
	{ "Age": age_tier_1, "Franklin County Residents": fcr_price_tier_1[today.getDay()], "Non-Franklin County Residents": nfcr_price_tier_1[today.getDay()], "Reciprocal Memberships": rm_price_tier_1[today.getDay()] },
	{ "Age": age_tier_2, "Franklin County Residents": fcr_price_tier_2[today.getDay()], "Non-Franklin County Residents": nfcr_price_tier_2[today.getDay()], "Reciprocal Memberships": rm_price_tier_2[today.getDay()] },
	{ "Age": age_tier_3, "Franklin County Residents": fcr_price_tier_3[today.getDay()], "Non-Franklin County Residents": nfcr_price_tier_3[today.getDay()], "Reciprocal Memberships": rm_price_tier_3[today.getDay()] },
	{ "Age": age_tier_4, "Franklin County Residents": fcr_price_tier_4[today.getDay()], "Non-Franklin County Residents": nfcr_price_tier_4[today.getDay()], "Reciprocal Memberships": rm_price_tier_4[today.getDay()] }
];
var sunday_admission_value = [
	{ "Age": age_tier_1, "Franklin County Residents": fcr_price_tier_1[0], "Non-Franklin County Residents": nfcr_price_tier_1[0], "Reciprocal Memberships": rm_price_tier_1[0] },
	{ "Age": age_tier_2, "Franklin County Residents": fcr_price_tier_2[0], "Non-Franklin County Residents": nfcr_price_tier_2[0], "Reciprocal Memberships": rm_price_tier_2[0] },
	{ "Age": age_tier_3, "Franklin County Residents": fcr_price_tier_3[0], "Non-Franklin County Residents": nfcr_price_tier_3[0], "Reciprocal Memberships": rm_price_tier_3[0] },
	{ "Age": age_tier_4, "Franklin County Residents": fcr_price_tier_4[0], "Non-Franklin County Residents": nfcr_price_tier_4[0], "Reciprocal Memberships": rm_price_tier_4[0] }
];
var monday_admission_value = [
	{ "Age": age_tier_1, "Franklin County Residents": fcr_price_tier_1[1], "Non-Franklin County Residents": nfcr_price_tier_1[1], "Reciprocal Memberships": rm_price_tier_1[1] },
	{ "Age": age_tier_2, "Franklin County Residents": fcr_price_tier_2[1], "Non-Franklin County Residents": nfcr_price_tier_2[1], "Reciprocal Memberships": rm_price_tier_2[1] },
	{ "Age": age_tier_3, "Franklin County Residents": fcr_price_tier_3[1], "Non-Franklin County Residents": nfcr_price_tier_3[1], "Reciprocal Memberships": rm_price_tier_3[1] },
	{ "Age": age_tier_4, "Franklin County Residents": fcr_price_tier_4[1], "Non-Franklin County Residents": nfcr_price_tier_4[1], "Reciprocal Memberships": rm_price_tier_4[1] }
];
var tuesday_admission_value = [
	{ "Age": age_tier_1, "Franklin County Residents": fcr_price_tier_1[2], "Non-Franklin County Residents": nfcr_price_tier_1[2], "Reciprocal Memberships": rm_price_tier_1[2] },
	{ "Age": age_tier_2, "Franklin County Residents": fcr_price_tier_2[2], "Non-Franklin County Residents": nfcr_price_tier_2[2], "Reciprocal Memberships": rm_price_tier_2[2] },
	{ "Age": age_tier_3, "Franklin County Residents": fcr_price_tier_3[2], "Non-Franklin County Residents": nfcr_price_tier_3[2], "Reciprocal Memberships": rm_price_tier_3[2] },
	{ "Age": age_tier_4, "Franklin County Residents": fcr_price_tier_4[2], "Non-Franklin County Residents": nfcr_price_tier_4[2], "Reciprocal Memberships": rm_price_tier_4[2] }
];
var wednesday_admission_value = [
	{ "Age": age_tier_1, "Franklin County Residents": fcr_price_tier_1[3], "Non-Franklin County Residents": nfcr_price_tier_1[3], "Reciprocal Memberships": rm_price_tier_1[3] },
	{ "Age": age_tier_2, "Franklin County Residents": fcr_price_tier_2[3], "Non-Franklin County Residents": nfcr_price_tier_2[3], "Reciprocal Memberships": rm_price_tier_2[3] },
	{ "Age": age_tier_3, "Franklin County Residents": fcr_price_tier_3[3], "Non-Franklin County Residents": nfcr_price_tier_3[3], "Reciprocal Memberships": rm_price_tier_3[3] },
	{ "Age": age_tier_4, "Franklin County Residents": fcr_price_tier_4[3], "Non-Franklin County Residents": nfcr_price_tier_4[3], "Reciprocal Memberships": rm_price_tier_4[3] }
];
var thursday_admission_value = [
	{ "Age": age_tier_1, "Franklin County Residents": fcr_price_tier_1[4], "Non-Franklin County Residents": nfcr_price_tier_1[4], "Reciprocal Memberships": rm_price_tier_1[4] },
	{ "Age": age_tier_2, "Franklin County Residents": fcr_price_tier_2[4], "Non-Franklin County Residents": nfcr_price_tier_2[4], "Reciprocal Memberships": rm_price_tier_2[4] },
	{ "Age": age_tier_3, "Franklin County Residents": fcr_price_tier_3[4], "Non-Franklin County Residents": nfcr_price_tier_3[4], "Reciprocal Memberships": rm_price_tier_3[4] },
	{ "Age": age_tier_4, "Franklin County Residents": fcr_price_tier_4[4], "Non-Franklin County Residents": nfcr_price_tier_4[4], "Reciprocal Memberships": rm_price_tier_4[4] }
];
var friday_admission_value = [
	{ "Age": age_tier_1, "Franklin County Residents": fcr_price_tier_1[5], "Non-Franklin County Residents": nfcr_price_tier_1[5], "Reciprocal Memberships": rm_price_tier_1[5] },
	{ "Age": age_tier_2, "Franklin County Residents": fcr_price_tier_2[5], "Non-Franklin County Residents": nfcr_price_tier_2[5], "Reciprocal Memberships": rm_price_tier_2[5] },
	{ "Age": age_tier_3, "Franklin County Residents": fcr_price_tier_3[5], "Non-Franklin County Residents": nfcr_price_tier_3[5], "Reciprocal Memberships": rm_price_tier_3[5] },
	{ "Age": age_tier_4, "Franklin County Residents": fcr_price_tier_4[5], "Non-Franklin County Residents": nfcr_price_tier_4[5], "Reciprocal Memberships": rm_price_tier_4[5] }
];
var saturday_admission_value = [
	{ "Age": age_tier_1, "Franklin County Residents": fcr_price_tier_1[6], "Non-Franklin County Residents": nfcr_price_tier_1[6], "Reciprocal Memberships": rm_price_tier_1[6] },
	{ "Age": age_tier_2, "Franklin County Residents": fcr_price_tier_2[6], "Non-Franklin County Residents": nfcr_price_tier_2[6], "Reciprocal Memberships": rm_price_tier_2[6] },
	{ "Age": age_tier_3, "Franklin County Residents": fcr_price_tier_3[6], "Non-Franklin County Residents": nfcr_price_tier_3[6], "Reciprocal Memberships": rm_price_tier_3[6] },
	{ "Age": age_tier_4, "Franklin County Residents": fcr_price_tier_4[6], "Non-Franklin County Residents": nfcr_price_tier_4[6], "Reciprocal Memberships": rm_price_tier_4[6] }
];

//add transportation and locker fees here too
//add zoombezi bay admission
//add safari golf admission
//add wilds admission
//add package admission

function generateTable(table, data) {
	for (let element of data) {
		let row = table.insertRow();
		for (key in element) {
			let cell = row.insertCell();
			let text = document.createTextNode(element[key]);
			cell.appendChild(text);
		}
	}
}

function generateTableHead(table, data) {
	let thead = table.createTHead();
	let row = thead.insertRow();
	for (let key of data) {
		let th = document.createElement("th");
		let text = document.createTextNode(key);
		th.appendChild(text);
		row.appendChild(th);
	}
}

/*var admission_tables = new Array(today_admission_table, sunday_admission_table, monday_admission_table, tuesday_admission_table, wednesday_admission_table, thursday_admission_table, friday_admission_table, saturday_admission_table);
var admission_values = new Array(today_admission_value, sunday_admission_value, monday_admission_value, tuesday_admission_value, wednesday_admission_value, thursday_admission_value, friday_admission_value, saturday_admission_value);
for (i = 0; i < admission_tables.length; i++) {
	var table = document.getElementById(admission_tables[i]);
	var data = Object.keys(admission_values[i][0]);
	generateTable(table, admission_values[i]);
	generateTableHead(table, data);
}*/
//above will replace below once i find the logic bug
let today_admission_table = document.getElementById('today_admission_table');
let today_admission_data = Object.keys(today_admission_value[0]);
generateTable(today_admission_table, today_admission_value);
generateTableHead(today_admission_table, today_admission_data);

let sunday_admission_table = document.getElementById('sunday_admission_table');
let sunday_admission_data = Object.keys(sunday_admission_value[0]);
generateTable(sunday_admission_table, sunday_admission_value);
generateTableHead(sunday_admission_table, sunday_admission_data);

let monday_admission_table = document.getElementById('monday_admission_table');
let monday_admission_data = Object.keys(monday_admission_value[0]);
generateTable(monday_admission_table, monday_admission_value);
generateTableHead(monday_admission_table, monday_admission_data);

let tuesday_admission_table = document.getElementById('tuesday_admission_table');
let tuesday_admission_data = Object.keys(tuesday_admission_value[0]);
generateTable(tuesday_admission_table, tuesday_admission_value);
generateTableHead(tuesday_admission_table, tuesday_admission_data);

let wednesday_admission_table = document.getElementById('wednesday_admission_table');
let wednesday_admission_data = Object.keys(wednesday_admission_value[0]);
generateTable(wednesday_admission_table, wednesday_admission_value);
generateTableHead(wednesday_admission_table, wednesday_admission_data);

let thursday_admission_table = document.getElementById('thursday_admission_table');
let thursday_admission_data = Object.keys(thursday_admission_value[0]);
generateTable(thursday_admission_table, thursday_admission_value);
generateTableHead(thursday_admission_table, thursday_admission_data);

let friday_admission_table = document.getElementById('friday_admission_table');
let friday_admission_data = Object.keys(friday_admission_value[0]);
generateTable(friday_admission_table, friday_admission_value);
generateTableHead(friday_admission_table, friday_admission_data);

let saturday_admission_table = document.getElementById('saturday_admission_table');
let saturday_admission_data = Object.keys(saturday_admission_value[0]);
generateTable(saturday_admission_table, saturday_admission_value);
generateTableHead(saturday_admission_table, saturday_admission_data);