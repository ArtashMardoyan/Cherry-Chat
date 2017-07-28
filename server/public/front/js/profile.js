'use strict';

(function ($) {

    let profileYears = $('#profileYears');
    let profileMonths = $('#profileMonths');
    let profileDays = $('#profileDays');
    let avatar = $('#avatar');

    $('.profile-data-value-addon').on('click', function () {
        $(this).prev('input').attr('disabled', false);
    });

    $('#imageSrc').on('change', function () {
        let file = this.files[0];
        if (file.type !== 'image/jpg' &&
            file.type !== 'image/jpeg' &&
            file.type !== 'image/png') {
            return $(this).val("");
        }
        let img = URL.createObjectURL(file);
        avatar.css({
            'background': `url(${img}) top center / cover no-repeat`
        })
    });

    $('#profileYears, #profileMonths').change(() => {
        updateNumberOfDays(profileDays, profileMonths, profileYears);
    });

    updateNumberOfYears(profileYears);
    updateDaysInMonth(profileMonths);

}(jQuery));
