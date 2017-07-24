'use strict';

(function ($) {

    const user = {
        fullName: 'Artash Mardoyan Gevorgi',
        email: 'artashmardoyan@gmail.com',
        gender: 'female',
        password: 'chemmorana666',
        date: {
            year: '1998',
            month: '02',
            day: '5'
        },
        photo: {}
    };

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
            fullName.val(this.username);
            email.val(this.email);
            gender.val(this.gender);
            years.val(this.year).selectpicker('refresh');
            months.val(this.month).selectpicker('refresh');
            updateNumberOfDays();
            days.val(this.day).selectpicker('refresh');
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

    let newUser = new User(user);

    $('.profile-data-value-addon').on('click', function () {
        $(this).prev('input').attr('disabled', false);
    });

    newUser.setUserValue();
    newUser.setUserPhoto();

}(jQuery));
