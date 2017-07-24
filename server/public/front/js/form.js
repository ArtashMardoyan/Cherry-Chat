'use strict';

(function ($) {
    const loginForm = $('#loginForm');
    const changePassword = $('#changePasswordForm');

    const validate = {
        rules: {
            fullName: {
                fullName: true,
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            password: {
                checkPassword: true,
                required: true,
                minlength: 6
            },
            rePassword: {
                equalTo: '#password',
                required: true
            },
            gender: {
                checkGender: true
            },
            day: {
                checkDate: true
            }
        },
        message: {
            rePassword: {
                equalTo: 'Please enter the same value.'
            }
        },
        errorPlacement: function (err, elem) {
            if (elem.attr('name') === 'day') {
                err.appendTo('.error-date')
            } else {
                err.insertAfter(elem)
            }
        },
        submitHandler: function () {
            $('#myModal').modal('hide');
        }
    };

    const changePasswordValidate = {
        rules: {
            currentPassword: {
                rightPassword: true
            },
            password: {
                checkPassword: true,
                required: true,
                minlength: 6
            },
            rePassword: {
                equalTo: '#password',
                required: true
            }
        },
        messages: {
            rePassword: {
                equalTo: 'Please enter the same value.'
            }
        }
    }

    $.validator.addMethod('fullName', function (value) {
        return /^[a-z,'-._]+((\s)[a-z,'-._]+((\s)[a-z,'-._]+)?)?$/i.test(value);
    }, 'Please enter your name correctly');

    $.validator.addMethod('email', function (value) {
        return /^\w+([_.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
    }, 'Please enter correct email');

    $.validator.addMethod('checkGender', function (value) {
        return value !== 'Gender';
    }, 'Please choose your gender');

    $.validator.addMethod('checkPassword', function (value) {
        return /^[a-z,'-_.]+$/i.test(value);
    }, 'Please enter correct password');

    $.validator.addMethod('checkDate', function (value) {
        return value !== '0';
    }, 'Please choose day of birth');

    $.validator.addMethod('rightPassword', function (value) {
        return $('#currentPassword').val() === 'chemmorana666';
    }, 'Please enter a right password');

    loginForm.validate(Object.assign(validate));
    changePassword.validate(Object.assign(changePasswordValidate));

}(jQuery));
