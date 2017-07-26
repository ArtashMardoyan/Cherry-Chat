'use strict';

(function ($) {

    // const user = {
    //     fullName: 'Artash Mardoyan Gevorgi',
    //     email: 'artashmardoyan@gmail.com',
    //     gender: 'female',
    //     password: 'chemmorana666',
    //     date: {
    //         year: '1998',
    //         month: '02',
    //         day: '5'
    //     },
    //     photo: {}
    // };

    let profileFullName = $('#profileFullName');
    let profileEmail = $('#profileEmail');
    let profileGender = $('#profileGender');
    let profileYears = $('#profileYears');
    let profileMonths = $('#profileMonths');
    let profileDays = $('#profileDays');
    let avatar = $('#avatar');

    class User {
        constructor(user) {
            this.username = user.fullName;
            this.email = user.email;
            this.gender = user.gender;
            this.password = user.password;
            this.year = user.date.year;
            this.month = user.date.month;
            this.day = user.date.day;
        }

        setUserValue() {
            profileFullName.val(this.username);
            profileEmail.val(this.email);
            profileGender.val(this.gender);
            updateNumberOfYears(profileYears);
            updateDaysInMonth(profileMonths);
            profileYears.val(this.year).selectpicker('refresh');
            profileMonths.val(this.month).selectpicker('refresh');
            updateNumberOfDays(profileDays, profileMonths, profileYears);
            profileDays.val(this.day).selectpicker('refresh');
        }

        setUserPhoto() {
            User.defaultImage();
            $('#imageSrc').on('change', function () {
                let file = this.files[0];
                if (file.type !== 'image/jpg' &&
                    file.type !== 'image/jpeg' &&
                    file.type !== 'image/png') {
                    User.defaultImage();
                    return $(this).val("");
                }
                let img = URL.createObjectURL(file);
                avatar.css({
                    'background': `url(${img}) top center / cover no-repeat`
                })
            })
        }

        static defaultImage() {
            if (user.gender === 'male') {
                avatar.css({
                    'background': 'url(../../img/icon/male-user-img.png)' +
                    'top center / cover no-repeat',
                })
            } else {
                avatar.css({
                    'background': 'url(../../img/icon/female-user-img.png)' +
                    'top center / cover no-repeat',
                })
            }
        }
    }

    $('.profile-data-value-addon').on('click', function () {
        $(this).prev('input').attr('disabled', false);
    });

    let newUser = new User(user);

    newUser.setUserValue();
    newUser.setUserPhoto();

}(jQuery));
