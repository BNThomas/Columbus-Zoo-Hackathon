var dayName = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var today = new Date();
today.setTime(today.getTime());

//Ages 0-2
var zoo_age_tier_1 = "Under Age 3";
//Frankin County Residents
var zoo_fcr_price_tier_1 = new Array("Free", "Free", "Free", "Free", "Free", "Free", "Free");
//Non-Frankin County Residents
var zoo_nfcr_price_tier_1 = new Array("Free", "Free", "Free", "Free", "Free", "Free", "Free");
//Reciprocal Memberships
var zoo_rm_price_tier_1 = new Array("Free", "Free", "Free", "Free", "Free", "Free", "Free");

//Ages 3-9
var zoo_age_tier_2 = "Ages 3-9";
//Frankin County Residents
var zoo_fcr_price_tier_2 = new Array("$11.99", "$5.99", "$5.99", "$5.99", "$11.99", "$11.99", "$11.99");
//Non-Frankin County Residents
var zoo_nfcr_price_tier_2 = new Array("$16.99", "$16.99", "$16.99", "$16.99", "$16.99", "$16.99", "$16.99");
//Reciprocal Memberships
var zoo_rm_price_tier_2 = new Array("$8.49", "$8.49", "$8.49", "$8.49", "$8.49", "$8.49", "$8.49");

//Ages 10-59
var zoo_age_tier_3 = "Ages 10-59";
//Frankin County Residents
var zoo_fcr_price_tier_3 = new Array("$16.99", "$8.49", "$8.49", "$8.49", "$16.99", "$16.99", "$16.99");
//Non-Frankin County Residents
var zoo_nfcr_price_tier_3 = new Array("$21.99", "$21.99", "$21.99", "$21.99", "$21.99", "$21.99", "$21.99");
//Reciprocal Memberships
var zoo_rm_price_tier_3 = new Array("$10.99", "$10.99", "$10.99", "$10.99", "$10.99", "$10.99", "$10.99");

//Ages 60+
var zoo_age_tier_4 = "Ages 60+";
//Frankin County Residents
var zoo_fcr_price_tier_4 = new Array("$11.99", "$5.99", "$5.99", "$5.99", "$11.99", "$11.99", "$11.99");
//Non-Frankin County Residents
var zoo_nfcr_price_tier_4 = new Array("$16.99", "$16.99", "$8.49", "$16.99", "$16.99", "$16.99", "$16.99");
//Reciprocal Memberships
var zoo_rm_price_tier_4 = new Array("$8.49", "$8.49", "$8.49", "$8.49", "$8.49", "$8.49", "$8.49");

var today_zoo_admission_value = [
	{ "Age": zoo_age_tier_1, "Franklin County Residents": zoo_fcr_price_tier_1[today.getDay()], "Non-Franklin County Residents": zoo_nfcr_price_tier_1[today.getDay()], "Reciprocal Memberships": zoo_rm_price_tier_1[today.getDay()] },
	{ "Age": zoo_age_tier_2, "Franklin County Residents": zoo_fcr_price_tier_2[today.getDay()], "Non-Franklin County Residents": zoo_nfcr_price_tier_2[today.getDay()], "Reciprocal Memberships": zoo_rm_price_tier_2[today.getDay()] },
	{ "Age": zoo_age_tier_3, "Franklin County Residents": zoo_fcr_price_tier_3[today.getDay()], "Non-Franklin County Residents": zoo_nfcr_price_tier_3[today.getDay()], "Reciprocal Memberships": zoo_rm_price_tier_3[today.getDay()] },
	{ "Age": zoo_age_tier_4, "Franklin County Residents": zoo_fcr_price_tier_4[today.getDay()], "Non-Franklin County Residents": zoo_nfcr_price_tier_4[today.getDay()], "Reciprocal Memberships": zoo_rm_price_tier_4[today.getDay()] }
];
var sunday_zoo_admission_value = [
	{ "Age": zoo_age_tier_1, "Franklin County Residents": zoo_fcr_price_tier_1[0], "Non-Franklin County Residents": zoo_nfcr_price_tier_1[0], "Reciprocal Memberships": zoo_rm_price_tier_1[0] },
	{ "Age": zoo_age_tier_2, "Franklin County Residents": zoo_fcr_price_tier_2[0], "Non-Franklin County Residents": zoo_nfcr_price_tier_2[0], "Reciprocal Memberships": zoo_rm_price_tier_2[0] },
	{ "Age": zoo_age_tier_3, "Franklin County Residents": zoo_fcr_price_tier_3[0], "Non-Franklin County Residents": zoo_nfcr_price_tier_3[0], "Reciprocal Memberships": zoo_rm_price_tier_3[0] },
	{ "Age": zoo_age_tier_4, "Franklin County Residents": zoo_fcr_price_tier_4[0], "Non-Franklin County Residents": zoo_nfcr_price_tier_4[0], "Reciprocal Memberships": zoo_rm_price_tier_4[0] }
];
var monday_zoo_admission_value = [
	{ "Age": zoo_age_tier_1, "Franklin County Residents": zoo_fcr_price_tier_1[1], "Non-Franklin County Residents": zoo_nfcr_price_tier_1[1], "Reciprocal Memberships": zoo_rm_price_tier_1[1] },
	{ "Age": zoo_age_tier_2, "Franklin County Residents": zoo_fcr_price_tier_2[1], "Non-Franklin County Residents": zoo_nfcr_price_tier_2[1], "Reciprocal Memberships": zoo_rm_price_tier_2[1] },
	{ "Age": zoo_age_tier_3, "Franklin County Residents": zoo_fcr_price_tier_3[1], "Non-Franklin County Residents": zoo_nfcr_price_tier_3[1], "Reciprocal Memberships": zoo_rm_price_tier_3[1] },
	{ "Age": zoo_age_tier_4, "Franklin County Residents": zoo_fcr_price_tier_4[1], "Non-Franklin County Residents": zoo_nfcr_price_tier_4[1], "Reciprocal Memberships": zoo_rm_price_tier_4[1] }
];
var tuesday_zoo_admission_value = [
	{ "Age": zoo_age_tier_1, "Franklin County Residents": zoo_fcr_price_tier_1[2], "Non-Franklin County Residents": zoo_nfcr_price_tier_1[2], "Reciprocal Memberships": zoo_rm_price_tier_1[2] },
	{ "Age": zoo_age_tier_2, "Franklin County Residents": zoo_fcr_price_tier_2[2], "Non-Franklin County Residents": zoo_nfcr_price_tier_2[2], "Reciprocal Memberships": zoo_rm_price_tier_2[2] },
	{ "Age": zoo_age_tier_3, "Franklin County Residents": zoo_fcr_price_tier_3[2], "Non-Franklin County Residents": zoo_nfcr_price_tier_3[2], "Reciprocal Memberships": zoo_rm_price_tier_3[2] },
	{ "Age": zoo_age_tier_4, "Franklin County Residents": zoo_fcr_price_tier_4[2], "Non-Franklin County Residents": zoo_nfcr_price_tier_4[2], "Reciprocal Memberships": zoo_rm_price_tier_4[2] }
];
var wednesday_zoo_admission_value = [
	{ "Age": zoo_age_tier_1, "Franklin County Residents": zoo_fcr_price_tier_1[3], "Non-Franklin County Residents": zoo_nfcr_price_tier_1[3], "Reciprocal Memberships": zoo_rm_price_tier_1[3] },
	{ "Age": zoo_age_tier_2, "Franklin County Residents": zoo_fcr_price_tier_2[3], "Non-Franklin County Residents": zoo_nfcr_price_tier_2[3], "Reciprocal Memberships": zoo_rm_price_tier_2[3] },
	{ "Age": zoo_age_tier_3, "Franklin County Residents": zoo_fcr_price_tier_3[3], "Non-Franklin County Residents": zoo_nfcr_price_tier_3[3], "Reciprocal Memberships": zoo_rm_price_tier_3[3] },
	{ "Age": zoo_age_tier_4, "Franklin County Residents": zoo_fcr_price_tier_4[3], "Non-Franklin County Residents": zoo_nfcr_price_tier_4[3], "Reciprocal Memberships": zoo_rm_price_tier_4[3] }
];
var thursday_zoo_admission_value = [
	{ "Age": zoo_age_tier_1, "Franklin County Residents": zoo_fcr_price_tier_1[4], "Non-Franklin County Residents": zoo_nfcr_price_tier_1[4], "Reciprocal Memberships": zoo_rm_price_tier_1[4] },
	{ "Age": zoo_age_tier_2, "Franklin County Residents": zoo_fcr_price_tier_2[4], "Non-Franklin County Residents": zoo_nfcr_price_tier_2[4], "Reciprocal Memberships": zoo_rm_price_tier_2[4] },
	{ "Age": zoo_age_tier_3, "Franklin County Residents": zoo_fcr_price_tier_3[4], "Non-Franklin County Residents": zoo_nfcr_price_tier_3[4], "Reciprocal Memberships": zoo_rm_price_tier_3[4] },
	{ "Age": zoo_age_tier_4, "Franklin County Residents": zoo_fcr_price_tier_4[4], "Non-Franklin County Residents": zoo_nfcr_price_tier_4[4], "Reciprocal Memberships": zoo_rm_price_tier_4[4] }
];
var friday_zoo_admission_value = [
	{ "Age": zoo_age_tier_1, "Franklin County Residents": zoo_fcr_price_tier_1[5], "Non-Franklin County Residents": zoo_nfcr_price_tier_1[5], "Reciprocal Memberships": zoo_rm_price_tier_1[5] },
	{ "Age": zoo_age_tier_2, "Franklin County Residents": zoo_fcr_price_tier_2[5], "Non-Franklin County Residents": zoo_nfcr_price_tier_2[5], "Reciprocal Memberships": zoo_rm_price_tier_2[5] },
	{ "Age": zoo_age_tier_3, "Franklin County Residents": zoo_fcr_price_tier_3[5], "Non-Franklin County Residents": zoo_nfcr_price_tier_3[5], "Reciprocal Memberships": zoo_rm_price_tier_3[5] },
	{ "Age": zoo_age_tier_4, "Franklin County Residents": zoo_fcr_price_tier_4[5], "Non-Franklin County Residents": zoo_nfcr_price_tier_4[5], "Reciprocal Memberships": zoo_rm_price_tier_4[5] }
];
var saturday_zoo_admission_value = [
	{ "Age": zoo_age_tier_1, "Franklin County Residents": zoo_fcr_price_tier_1[6], "Non-Franklin County Residents": zoo_nfcr_price_tier_1[6], "Reciprocal Memberships": zoo_rm_price_tier_1[6] },
	{ "Age": zoo_age_tier_2, "Franklin County Residents": zoo_fcr_price_tier_2[6], "Non-Franklin County Residents": zoo_nfcr_price_tier_2[6], "Reciprocal Memberships": zoo_rm_price_tier_2[6] },
	{ "Age": zoo_age_tier_3, "Franklin County Residents": zoo_fcr_price_tier_3[6], "Non-Franklin County Residents": zoo_nfcr_price_tier_3[6], "Reciprocal Memberships": zoo_rm_price_tier_3[6] },
	{ "Age": zoo_age_tier_4, "Franklin County Residents": zoo_fcr_price_tier_4[6], "Non-Franklin County Residents": zoo_nfcr_price_tier_4[6], "Reciprocal Memberships": zoo_rm_price_tier_4[6] }
];

//Ages 0-2
var bay_age_tier_1 = "Under Age 3";
//Zoo Members
var bay_zm_price_tier_1 = new Array("Free", "Free", "Free", "Free", "Free", "Free", "Free");
//Non-Zoo Members
var bay_nzm_price_tier_1 = new Array("Free", "Free", "Free", "Free", "Free", "Free", "Free");

//Ages 3-9
var bay_age_tier_2 = "Ages 3-9";
//Zoo Members
var bay_zm_price_tier_2 = new Array("$23.99", "$23.99", "$23.99", "$23.99", "$23.99", "$23.99", "$23.99");
//Non-Zoo Members
var bay_nzm_price_tier_2 = new Array("$26.99", "$26.99", "$26.99", "$26.99", "$26.99", "$26.99", "$26.99");

//Ages 10-59
var bay_age_tier_3 = "Ages 10-59";
//Zoo Members
var bay_zm_price_tier_3 = new Array("$25.99", "$25.99", "$25.99", "$25.99", "$25.99", "$25.99", "$25.99");
//Non-Zoo Members
var bay_nzm_price_tier_3 = new Array("$34.99", "$34.99", "$34.99", "$34.99", "$34.99", "$34.99", "$34.99");

//Ages 60+
var bay_age_tier_4 = "Ages 60+";
//Zoo Members
var bay_zm_price_tier_4 = new Array("$23.99", "$23.99", "$23.99", "$23.99", "$23.99", "$23.99", "$23.99");
//Non-Zoo Members
var bay_nzm_price_tier_4 = new Array("$26.99", "$26.99", "$26.99", "$26.99", "$26.99", "$26.99", "$26.99");

var today_bay_admission_value = [
	{ "Age": bay_age_tier_1, "Zoo Members": bay_zm_price_tier_1[today.getDay()], "Non-Zoo Members": bay_nzm_price_tier_1[today.getDay()] },
	{ "Age": bay_age_tier_2, "Zoo Members": bay_zm_price_tier_2[today.getDay()], "Non-Zoo Members": bay_nzm_price_tier_2[today.getDay()] },
	{ "Age": bay_age_tier_3, "Zoo Members": bay_zm_price_tier_3[today.getDay()], "Non-Zoo Members": bay_nzm_price_tier_3[today.getDay()] },
	{ "Age": bay_age_tier_4, "Zoo Members": bay_zm_price_tier_4[today.getDay()], "Non-Zoo Members": bay_nzm_price_tier_4[today.getDay()] }
];

//add transportation and locker fees here too
//add safari golf admission
//add wilds admission
//add package admission

//DISCOUNTS
/*
Zoo-It-All	Under Age 3	Ages 3-9	Ages 10-59	Ages 60+
Franklin County	Free	$26.98 	$31.98 	$26.98 
Outside of Franklin County	Free	$31.98 	$36.98 	$31.98 
				
Zoo + Zoombezi Bay (2 days)	Under Age 3	Ages 3-9	Ages 10-59	Ages 60+
Franklin County	Free	$31.99 	$43.99 	$31.99 
Outside of Franklin County	Free	$36.99 	$48.99 	$36.99 

Group Discount (15+ tickets)	Under Age 3	Ages 3-9	Ages 10-59	Ages 60+		
Franklin County	Free	$11.00 	$16.00 	$11.00 		
Outside of Franklin County	Free	$16.00 	$21.00 	$16.00 		
						
School Discount (15+ tickets)						Rates valid only Mon-Fri 9 a.m. to 3 p.m.
Franklin County	$3.00 					Reservations must be made at least 10 days in advance or rates will not apply.
Outside of Franklin County	$5.00 					All groups must enter before 3:30 p.m. during Wildlights to qualify.
						Rates NOT VALID June 15 - August 14, 2020.
						Minimum of 15 guests required.
						Bus drivers are free.
						
COTA Discount						
Zoo Only	$3 off					
Zoombezi Bay	$10 off					
						
Military Discount (Up to 6 tickets)	$2 off					
						
Community Organization Discount (15+ tickets)	Under Age 3	Ages 3-9	Ages 10-59	Ages 60+		Guests from Franklin County visiting Monday - Wednesday receive
Franklin County	Free	$7.00 	$14.00 	$7.00 		the Franklin County rate of $8.50 per adult and $6 for seniors/children.
Outside of Franklin County	Free	$10.00 	$17.00 	$10.00 	
*/

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

/*var admission_tables = new Array(today_zoo_admission_table, sunday_zoo_admission_table, monday_zoo_admission_table, tuesday_zoo_admission_table, wednesday_zoo_admission_table, thursday_zoo_admission_table, friday_zoo_admission_table, saturday_zoo_admission_table);
var admission_values = new Array(today_zoo_admission_value, sunday_zoo_admission_value, monday_zoo_admission_value, tuesday_zoo_admission_value, wednesday_zoo_admission_value, thursday_zoo_admission_value, friday_zoo_admission_value, saturday_zoo_admission_value);
for (i = 0; i < admission_tables.length; i++) {
	var table = document.getElementById(admission_tables[i]);
	var data = Object.keys(admission_values[i][0]);
	generateTable(table, admission_values[i]);
	generateTableHead(table, data);
}*/
//above will replace below once i find the logic bug
//Zoo
let today_zoo_admission_table = document.getElementById('today_zoo_admission_table');
let today_zoo_admission_data = Object.keys(today_zoo_admission_value[0]);
generateTable(today_zoo_admission_table, today_zoo_admission_value);
generateTableHead(today_zoo_admission_table, today_zoo_admission_data);

let sunday_zoo_admission_table = document.getElementById('sunday_zoo_admission_table');
let sunday_zoo_admission_data = Object.keys(sunday_zoo_admission_value[0]);
generateTable(sunday_zoo_admission_table, sunday_zoo_admission_value);
generateTableHead(sunday_zoo_admission_table, sunday_zoo_admission_data);

let monday_zoo_admission_table = document.getElementById('monday_zoo_admission_table');
let monday_zoo_admission_data = Object.keys(monday_zoo_admission_value[0]);
generateTable(monday_zoo_admission_table, monday_zoo_admission_value);
generateTableHead(monday_zoo_admission_table, monday_zoo_admission_data);

let tuesday_zoo_admission_table = document.getElementById('tuesday_zoo_admission_table');
let tuesday_zoo_admission_data = Object.keys(tuesday_zoo_admission_value[0]);
generateTable(tuesday_zoo_admission_table, tuesday_zoo_admission_value);
generateTableHead(tuesday_zoo_admission_table, tuesday_zoo_admission_data);

let wednesday_zoo_admission_table = document.getElementById('wednesday_zoo_admission_table');
let wednesday_zoo_admission_data = Object.keys(wednesday_zoo_admission_value[0]);
generateTable(wednesday_zoo_admission_table, wednesday_zoo_admission_value);
generateTableHead(wednesday_zoo_admission_table, wednesday_zoo_admission_data);

let thursday_zoo_admission_table = document.getElementById('thursday_zoo_admission_table');
let thursday_zoo_admission_data = Object.keys(thursday_zoo_admission_value[0]);
generateTable(thursday_zoo_admission_table, thursday_zoo_admission_value);
generateTableHead(thursday_zoo_admission_table, thursday_zoo_admission_data);

let friday_zoo_admission_table = document.getElementById('friday_zoo_admission_table');
let friday_zoo_admission_data = Object.keys(friday_zoo_admission_value[0]);
generateTable(friday_zoo_admission_table, friday_zoo_admission_value);
generateTableHead(friday_zoo_admission_table, friday_zoo_admission_data);

let saturday_zoo_admission_table = document.getElementById('saturday_zoo_admission_table');
let saturday_zoo_admission_data = Object.keys(saturday_zoo_admission_value[0]);
generateTable(saturday_zoo_admission_table, saturday_zoo_admission_value);
generateTableHead(saturday_zoo_admission_table, saturday_zoo_admission_data);

//Zoombezi Bay
let today_bay_admission_table = document.getElementById('today_bay_admission_table');
let today_bay_admission_data = Object.keys(today_bay_admission_value[0]);
generateTable(today_bay_admission_table, today_bay_admission_value);
generateTableHead(today_bay_admission_table, today_bay_admission_data);