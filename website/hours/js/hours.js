var dayName = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var today = new Date();
today.setTime(today.getTime());

//Normal hours
/*
var zoo_jan_normal_hours = new Array("10AM", "4PM");
var zoo_feb_normal_hours = new Array("10AM", "4PM");
var zoo_mar_normal_hours = new Array("10AM", "5PM");
var zoo_apr_normal_hours = new Array("9AM", "5PM");
var zoo_may_normal_hours = new Array("9AM", "5PM");
var zoo_jun_normal_hours = new Array("9AM", "7PM");
var zoo_jul_normal_hours = new Array("9AM", "7PM");
var zoo_aug_normal_hours = new Array("9AM", "7PM");
var zoo_sep_normal_hours = new Array("9AM", "5PM");
var zoo_oct_normal_hours = new Array("10AM", "5PM");
var zoo_nov_normal_hours = new Array("10AM", "5PM");
var zoo_dec_normal_hours = new Array("10AM", "5PM");
*/

//Holiday hours
/*
var zoo_memorial_holiday_hours = new Array("9AM", "7PM");
var zoo_labor_holiday_hours = new Array("9AM", "7PM");
var zoo_thanksgiving_holiday_hours = new Array("CLOSED");
var zoo_christmas_eve_holiday_hours = new Array("10AM", "5PM");
var zoo_christmas_holiday_hours = new Array("CLOSED");
*/

//Event hours
/*
var zoo_zoofari_event_hours = new Array("9AM", "3PM");
var zoo_boo_fri_event_hours = new Array("5PM", "9PM");
var zoo_boo_sat_event_hours = new Array("10AM", "9PM");
var zoo_boo_sun_event_hours = new Array("10AM", "8PM");
var zoo_wild_sun_thu_event_hours = new Array("5PM", "9PM");
var zoo_wild_fri_sat_event_hours = new Array("5PM", "10PM");
*/

//poc just for hackathon demo
var hackathon_day_open = "10AM";
var hackathon_day_close = "5PM";
var today_zoo_hours_value = [
	{ "Open": hackathon_day_open, "Close": hackathon_day_close }
];

/*
var today_zoo_hours_value = [
	{ "Open at": zoo_age_tier_1, "Close at": zoo_fcr_price_tier_1[today.getDay()] },
	{ "Age": zoo_age_tier_2, "Franklin County Residents": zoo_fcr_price_tier_2[today.getDay()], "Non-Franklin County Residents": zoo_nfcr_price_tier_2[today.getDay()], "Reciprocal Memberships": zoo_rm_price_tier_2[today.getDay()] },
	{ "Age": zoo_age_tier_3, "Franklin County Residents": zoo_fcr_price_tier_3[today.getDay()], "Non-Franklin County Residents": zoo_nfcr_price_tier_3[today.getDay()], "Reciprocal Memberships": zoo_rm_price_tier_3[today.getDay()] },
	{ "Age": zoo_age_tier_4, "Franklin County Residents": zoo_fcr_price_tier_4[today.getDay()], "Non-Franklin County Residents": zoo_nfcr_price_tier_4[today.getDay()], "Reciprocal Memberships": zoo_rm_price_tier_4[today.getDay()] }
];
var sunday_zoo_hours_value = [
	{ "Age": zoo_age_tier_1, "Franklin County Residents": zoo_fcr_price_tier_1[0], "Non-Franklin County Residents": zoo_nfcr_price_tier_1[0], "Reciprocal Memberships": zoo_rm_price_tier_1[0] },
	{ "Age": zoo_age_tier_2, "Franklin County Residents": zoo_fcr_price_tier_2[0], "Non-Franklin County Residents": zoo_nfcr_price_tier_2[0], "Reciprocal Memberships": zoo_rm_price_tier_2[0] },
	{ "Age": zoo_age_tier_3, "Franklin County Residents": zoo_fcr_price_tier_3[0], "Non-Franklin County Residents": zoo_nfcr_price_tier_3[0], "Reciprocal Memberships": zoo_rm_price_tier_3[0] },
	{ "Age": zoo_age_tier_4, "Franklin County Residents": zoo_fcr_price_tier_4[0], "Non-Franklin County Residents": zoo_nfcr_price_tier_4[0], "Reciprocal Memberships": zoo_rm_price_tier_4[0] }
];
var monday_zoo_hours_value = [
	{ "Age": zoo_age_tier_1, "Franklin County Residents": zoo_fcr_price_tier_1[1], "Non-Franklin County Residents": zoo_nfcr_price_tier_1[1], "Reciprocal Memberships": zoo_rm_price_tier_1[1] },
	{ "Age": zoo_age_tier_2, "Franklin County Residents": zoo_fcr_price_tier_2[1], "Non-Franklin County Residents": zoo_nfcr_price_tier_2[1], "Reciprocal Memberships": zoo_rm_price_tier_2[1] },
	{ "Age": zoo_age_tier_3, "Franklin County Residents": zoo_fcr_price_tier_3[1], "Non-Franklin County Residents": zoo_nfcr_price_tier_3[1], "Reciprocal Memberships": zoo_rm_price_tier_3[1] },
	{ "Age": zoo_age_tier_4, "Franklin County Residents": zoo_fcr_price_tier_4[1], "Non-Franklin County Residents": zoo_nfcr_price_tier_4[1], "Reciprocal Memberships": zoo_rm_price_tier_4[1] }
];
var tuesday_zoo_hours_value = [
	{ "Age": zoo_age_tier_1, "Franklin County Residents": zoo_fcr_price_tier_1[2], "Non-Franklin County Residents": zoo_nfcr_price_tier_1[2], "Reciprocal Memberships": zoo_rm_price_tier_1[2] },
	{ "Age": zoo_age_tier_2, "Franklin County Residents": zoo_fcr_price_tier_2[2], "Non-Franklin County Residents": zoo_nfcr_price_tier_2[2], "Reciprocal Memberships": zoo_rm_price_tier_2[2] },
	{ "Age": zoo_age_tier_3, "Franklin County Residents": zoo_fcr_price_tier_3[2], "Non-Franklin County Residents": zoo_nfcr_price_tier_3[2], "Reciprocal Memberships": zoo_rm_price_tier_3[2] },
	{ "Age": zoo_age_tier_4, "Franklin County Residents": zoo_fcr_price_tier_4[2], "Non-Franklin County Residents": zoo_nfcr_price_tier_4[2], "Reciprocal Memberships": zoo_rm_price_tier_4[2] }
];
var wednesday_zoo_hours_value = [
	{ "Age": zoo_age_tier_1, "Franklin County Residents": zoo_fcr_price_tier_1[3], "Non-Franklin County Residents": zoo_nfcr_price_tier_1[3], "Reciprocal Memberships": zoo_rm_price_tier_1[3] },
	{ "Age": zoo_age_tier_2, "Franklin County Residents": zoo_fcr_price_tier_2[3], "Non-Franklin County Residents": zoo_nfcr_price_tier_2[3], "Reciprocal Memberships": zoo_rm_price_tier_2[3] },
	{ "Age": zoo_age_tier_3, "Franklin County Residents": zoo_fcr_price_tier_3[3], "Non-Franklin County Residents": zoo_nfcr_price_tier_3[3], "Reciprocal Memberships": zoo_rm_price_tier_3[3] },
	{ "Age": zoo_age_tier_4, "Franklin County Residents": zoo_fcr_price_tier_4[3], "Non-Franklin County Residents": zoo_nfcr_price_tier_4[3], "Reciprocal Memberships": zoo_rm_price_tier_4[3] }
];
var thursday_zoo_hours_value = [
	{ "Age": zoo_age_tier_1, "Franklin County Residents": zoo_fcr_price_tier_1[4], "Non-Franklin County Residents": zoo_nfcr_price_tier_1[4], "Reciprocal Memberships": zoo_rm_price_tier_1[4] },
	{ "Age": zoo_age_tier_2, "Franklin County Residents": zoo_fcr_price_tier_2[4], "Non-Franklin County Residents": zoo_nfcr_price_tier_2[4], "Reciprocal Memberships": zoo_rm_price_tier_2[4] },
	{ "Age": zoo_age_tier_3, "Franklin County Residents": zoo_fcr_price_tier_3[4], "Non-Franklin County Residents": zoo_nfcr_price_tier_3[4], "Reciprocal Memberships": zoo_rm_price_tier_3[4] },
	{ "Age": zoo_age_tier_4, "Franklin County Residents": zoo_fcr_price_tier_4[4], "Non-Franklin County Residents": zoo_nfcr_price_tier_4[4], "Reciprocal Memberships": zoo_rm_price_tier_4[4] }
];
var friday_zoo_hours_value = [
	{ "Age": zoo_age_tier_1, "Franklin County Residents": zoo_fcr_price_tier_1[5], "Non-Franklin County Residents": zoo_nfcr_price_tier_1[5], "Reciprocal Memberships": zoo_rm_price_tier_1[5] },
	{ "Age": zoo_age_tier_2, "Franklin County Residents": zoo_fcr_price_tier_2[5], "Non-Franklin County Residents": zoo_nfcr_price_tier_2[5], "Reciprocal Memberships": zoo_rm_price_tier_2[5] },
	{ "Age": zoo_age_tier_3, "Franklin County Residents": zoo_fcr_price_tier_3[5], "Non-Franklin County Residents": zoo_nfcr_price_tier_3[5], "Reciprocal Memberships": zoo_rm_price_tier_3[5] },
	{ "Age": zoo_age_tier_4, "Franklin County Residents": zoo_fcr_price_tier_4[5], "Non-Franklin County Residents": zoo_nfcr_price_tier_4[5], "Reciprocal Memberships": zoo_rm_price_tier_4[5] }
];
var saturday_zoo_hours_value = [
	{ "Age": zoo_age_tier_1, "Franklin County Residents": zoo_fcr_price_tier_1[6], "Non-Franklin County Residents": zoo_nfcr_price_tier_1[6], "Reciprocal Memberships": zoo_rm_price_tier_1[6] },
	{ "Age": zoo_age_tier_2, "Franklin County Residents": zoo_fcr_price_tier_2[6], "Non-Franklin County Residents": zoo_nfcr_price_tier_2[6], "Reciprocal Memberships": zoo_rm_price_tier_2[6] },
	{ "Age": zoo_age_tier_3, "Franklin County Residents": zoo_fcr_price_tier_3[6], "Non-Franklin County Residents": zoo_nfcr_price_tier_3[6], "Reciprocal Memberships": zoo_rm_price_tier_3[6] },
	{ "Age": zoo_age_tier_4, "Franklin County Residents": zoo_fcr_price_tier_4[6], "Non-Franklin County Residents": zoo_nfcr_price_tier_4[6], "Reciprocal Memberships": zoo_rm_price_tier_4[6] }
];

var holidays = { // keys are formatted as month,week,day
    "0,0,0": "Wildlight End",
    "4,-1,1": "Memorial Day",
    "5,3,6": "Zoofari",
    "8,0,1": "Labor Day",
    "9,1,5": "Boo 1 Start",
    "9,2,0": "Boo 1 End",
    "9,2,5": "Boo 2 Start",
    "9,3,0": "Boo 2 End",
    "9,3,5": "Boo 2 Start",
    "9,4,0": "Boo 2 End",
    "10,3,5": "Wildlight Start",
    "10,3,4": "Thanksgiving Day"
};
function getDate(year, month, week, day) {
    var firstDay = 1;
    if (week < 0) {
        month++;
        firstDay--;
    }
    var date = new Date(year, month, (week * 7) + firstDay);
    if (day < date.getDay()) {
        day += 7;
    }
    date.setDate(date.getDate() - date.getDay() + day);
    return date;
}
function getHoliday(month, week, day) {
    return holidays[month + "," + week + "," + day];
}
function getDateString(year, month, week, day) {
    var date = getDate(year, month, week, day);
    var holiday = getHoliday(month, week, day);
    var dateString = date.toLocaleDateString();
    if (holiday) {
        dateString += " \xa0\xa0\xa0" + holiday;
    }
    return dateString;
}
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

//Zoo
let today_zoo_hours_table = document.getElementById('today_zoo_hours_table');
let today_zoo_hours_data = Object.keys(today_zoo_hours_value[0]);
generateTable(today_zoo_hours_table, today_zoo_hours_value);
generateTableHead(today_zoo_hours_table, today_zoo_hours_data);

/*
let sunday_zoo_hours_table = document.getElementById('sunday_zoo_hours_table');
let sunday_zoo_hours_data = Object.keys(sunday_zoo_hours_value[0]);
generateTable(sunday_zoo_hours_table, sunday_zoo_hours_value);
generateTableHead(sunday_zoo_hours_table, sunday_zoo_hours_data);

let monday_zoo_hours_table = document.getElementById('monday_zoo_hours_table');
let monday_zoo_hours_data = Object.keys(monday_zoo_hours_value[0]);
generateTable(monday_zoo_hours_table, monday_zoo_hours_value);
generateTableHead(monday_zoo_hours_table, monday_zoo_hours_data);

let tuesday_zoo_hours_table = document.getElementById('tuesday_zoo_hours_table');
let tuesday_zoo_hours_data = Object.keys(tuesday_zoo_hours_value[0]);
generateTable(tuesday_zoo_hours_table, tuesday_zoo_hours_value);
generateTableHead(tuesday_zoo_hours_table, tuesday_zoo_hours_data);

let wednesday_zoo_hours_table = document.getElementById('wednesday_zoo_hours_table');
let wednesday_zoo_hours_data = Object.keys(wednesday_zoo_hours_value[0]);
generateTable(wednesday_zoo_hours_table, wednesday_zoo_hours_value);
generateTableHead(wednesday_zoo_hours_table, wednesday_zoo_hours_data);

let thursday_zoo_hours_table = document.getElementById('thursday_zoo_hours_table');
let thursday_zoo_hours_data = Object.keys(thursday_zoo_hours_value[0]);
generateTable(thursday_zoo_hours_table, thursday_zoo_hours_value);
generateTableHead(thursday_zoo_hours_table, thursday_zoo_hours_data);

let friday_zoo_hours_table = document.getElementById('friday_zoo_hours_table');
let friday_zoo_hours_data = Object.keys(friday_zoo_hours_value[0]);
generateTable(friday_zoo_hours_table, friday_zoo_hours_value);
generateTableHead(friday_zoo_hours_table, friday_zoo_hours_data);

let saturday_zoo_hours_table = document.getElementById('saturday_zoo_hours_table');
let saturday_zoo_hours_data = Object.keys(saturday_zoo_hours_value[0]);
generateTable(saturday_zoo_hours_table, saturday_zoo_hours_value);
generateTableHead(saturday_zoo_hours_table, saturday_zoo_hours_data);
*/