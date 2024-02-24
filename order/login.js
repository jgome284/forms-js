window.Parsley.addValidator('password', {
    validateString: function(value) {
        var strongRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*_])(?=.{8,12}$)');
        return strongRegex.test(value);
    },
    messages: {
        en: 'Your password must contain at least one lowercase letter, one uppercase letter, one numeric digit, one special character, and be 8-12 characters in length.'
    }
});

$(document).ready(function() {
    $('#credentials-form').parsley();
});