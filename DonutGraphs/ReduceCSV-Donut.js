

let uniqueCategory = {};
let uniqueDistricts = {};
let uniqueResolutions = {};


function reduceCSV() {
	d3.csv('../data/Police_Department_Incidents.csv', function (file) {
		file.forEach(function (row) {

			// Unique Categories
			if (!uniqueCategory[row.Category]) {
				uniqueCategory[row.Category] = 1;
			} else {
				uniqueCategory[row.Category]++;
			}

			// Unique Districts
			if (!uniqueDistricts[row.PdDistrict]) {
				uniqueDistricts[row.PdDistrict] = 1;
			} else {
				uniqueDistricts[row.PdDistrict]++;
			}

			// Unique Resolutions
			if (!uniqueResolutions[row.Resolution]) {
				uniqueResolutions[row.Resolution] = 1;
			} else {
				uniqueResolutions[row.Resolution]++;
			}



		});

		let combined = {};
		combined["Districts"] = uniqueDistricts;
		combined["Category"] = uniqueCategory;
		combined["Resolutions"] = uniqueResolutions;

		saveText(JSON.stringify(combined), "uniquesDonut.json");
	});


}


function saveText(text, filename){
	let a = document.createElement('a');
	a.setAttribute('href', 'data:text/plain;charset=utf-u,'+encodeURIComponent(text));
	a.setAttribute('download', filename);
	a.click()
}

reduceCSV();