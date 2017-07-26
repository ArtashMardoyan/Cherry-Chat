'use strict';

const months = $('#month'),
    years = $('#year'),
    days = $('#day');


let updateNumberOfYears = (yearInput) => {
    let year = moment().year(),
        minAge = year - 12,
        maxAge = year - 80;

    for (let i = minAge; i > maxAge; i -= 1) {
        yearInput.append($('<option />').val(i).html(i));
    }

    yearInput.selectpicker('refresh');


};

let updateDaysInMonth = (monthInput) => {
    let month = moment().localeData('us').months();

    for (let i = 1; i < month.length + 1; i += 1) {
        monthInput.append($('<option />').val(`0${i}`).html(month[i - 1]));
    }

    monthInput.selectpicker('refresh');
};

let daysInMonth = (month, year) => {
    if (year !== '0' && month !== '0') {
        return moment(`${year}-${month}`, "YYYY-MM").daysInMonth();
    }
};

let updateNumberOfDays = (days, month, year) => {
    days.html('');
    let month = month.val();
    let year = year.val();
    let day = daysInMonth(month, year);
    days.append($('<option />').val('0').html('Day'));
    for (let i = 1; i < day + 1; i += 1) {
        days.append($('<option />').val(i).html(i));
    }
    days.selectpicker('refresh');
};

$('#year, #month').change(() => {
    updateNumberOfDays(days, months, years);
});

updateNumberOfYears(years);
updateDaysInMonth(months);
