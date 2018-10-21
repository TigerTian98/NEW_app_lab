// variables in JavaScript

let totalSubmissions = 0;
let dull = 0;
let mbs = 0;
let dull_mb = 0;
let bright_mb = 0;

let bright = 0;
let nmb = 0;
let dull_nmb = 0;
let bright_nmb = 0;

let p = 0;
let chi_square = 0;

// components in HTML

const cl_output = document.getElementsByName("color");
const mbs_output = document.getElementsByName("membership");

const p1 = document.getElementById('page1');
const p2 = document.getElementById('page2');
const tt_sms = document.getElementById('tt_sms');
const statistics = document.getElementById('statistics');

function back() {
	p2.style.display = "none";
	p1.style.display = "block";
}

function clearAll() {
	console.log ("The Fuck?");
	totalSubmissions = 0;

	dull = 0;
	mbs = 0;
	dull_mb = 0;
	bright_mb = 0;

	tt_sms.innerHTML = "Total submissions: 0";
	statistics.innerHTML = `<br>
	Bright color: 0;
	<br>
	Dull color: 0;
	<br>
	Members: 0;
	<br>
	Non-members: 0`
}

function manageSubmission() {
	p1.style.display = "none";
	p2.style.display = "block";

}

function submit() {

	totalSubmissions ++;

	if (cl_output[0].checked == true) {
		dull ++;
		if (mbs_output[0].checked == true) {
			dull_mb ++;
			mbs ++;
		}
	} else {
		if (mbs_output[0].checked == true) {
			bright_mb ++;
			mbs ++;
		}
	}

	bright = totalSubmissions - dull;
	nmb = totalSubmissions - mbs;
	dull_nmb = dull - dull_mb;
	bright_nmb = nmb - bright_mb;

	chi_square = totalSubmissions * (dull_mb * bright_nmb - dull_nmb * bright_mb) * (dull_mb * bright_nmb - dull_nmb * bright_mb) / ((dull_mb + dull_nmb) * (bright_mb + bright_nmb) * (dull_mb + bright_mb) * (dull_nmb + bright_nmb));

	if (chi_square < 0.455) {
		p = 50;
	} else if (chi_square < 0.708) {
		p = 40;
	} else if (chi_square < 1.323) {
		p = 25;
	} else if (chi_square < 2.072) {
		p = 15;
	} else if (chi_square < 2.706) {
		p = 10;
	} else if (chi_square < 3.841) {
		p = 5;
	} else if (chi_square < 5.024) {
		p = 2.5;
	} else if (chi_square < 6.635) {
		p = 1;
	} else if (chi_square < 7.879) {
		p = 0.5;
	} else {
		p = 0.1;
	}

	tt_sms.innerHTML = "Total submissions: " + totalSubmissions;

	statistics.innerHTML = 
			`<br>
			Bright color: ${bright};
			<br>
			Dull color: ${dull};
			<br>
			Members: ${mbs};
			<br>
			Non-members: ${nmb}.
			<br>
			There is a possibility of ${100 - p}% that the two variables are related.`

}