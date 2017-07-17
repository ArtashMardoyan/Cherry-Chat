'use strict';

$(function () {

    const month = moment().localeData('us').months();
    let years = $('#year'),
        months = $('#month'),
        days = $('#day'),
        year = moment().year(),
        minAge = year - 12,
        maxAge = year - 80;

    for (let i = minAge; i > maxAge; i -= 1) {
        years.append($('<option />').val(i).html(i));
    }
    years.selectpicker('refresh');

    for (let i = 1; i < month.length + 1; i += 1) {
        months.append($('<option />').val(`0${i}`).html(month[i - 1]));
    }
    months.selectpicker('refresh');

    function updateNumberOfDays() {
        days.html('');
        let month = months.val();
        let year = years.val();
        let day = daysInMonth(month, year);
        days.append($('<option />').val('0').html('Day'));
        for (let i = 1; i < day + 1; i += 1) {
            days.append($('<option />').val(i).html(i));
        }
        days.selectpicker('refresh');
    }

    function daysInMonth(month, year) {
        if (year !== '0' && month !== '0') {
            return moment(`${year}-${month}`, "YYYY-MM").daysInMonth();
        }
    }

    $('#year, #month').change(function () {
        updateNumberOfDays();
    });

    updateNumberOfDays();

});
