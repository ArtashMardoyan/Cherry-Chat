'use strict';

const month = moment().localeData('us').months(),
    year = moment().year(),
    fullName = $('#fullName'),
    gender = $('#gender'),
    avatar = $('#avatar'),
    months = $('#month'),
    email = $('#email'),
    years = $('#year'),
    days = $('#day');
let minAge = year - 12,
    maxAge = year - 80;

let updateNumberOfYears = () => {
    for (let i = minAge; i > maxAge; i -= 1) {
        years.append($('<option />').val(i).html(i));
    }
    years.selectpicker('refresh');

};

let updateDaysInMonth = () => {
    for (let i = 1; i < month.length + 1; i += 1) {
        months.append($('<option />').val(`0${i}`).html(month[i - 1]));
    }
    months.selectpicker('refresh');
};

let updateNumberOfDays = () => {
    days.html('');
    let month = months.val();
    let year = years.val();
    let day = daysInMonth(month, year);
    days.append($('<option />').val('0').html('Day'));
    for (let i = 1; i < day + 1; i += 1) {
        days.append($('<option />').val(i).html(i));
    }
    days.selectpicker('refresh');
};

let daysInMonth = (month, year) => {
    if (year !== '0' && month !== '0') {
        return moment(`${year}-${month}`, "YYYY-MM").daysInMonth();
    }
};

$('#year, #month').change(() => {
    updateNumberOfDays();
});

updateNumberOfYears();
updateDaysInMonth();
