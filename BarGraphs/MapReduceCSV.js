let allDaysOfWeek = {};
d3.csv('data/Police_Department_Incidents.csv', function (file) {
	file.forEach(function (row) {
		if (!allDaysOfWeek[row.DayOfWeek]) {
			allDaysOfWeek[row.DayOfWeek] = 1;
		} else {
			allDaysOfWeek[row.DayOfWeek]++;
		}
	});
	console.log(allDaysOfWeek);
});