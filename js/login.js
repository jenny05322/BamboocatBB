$(function () {
    chrome.storage.local.get(['username', 'password'], function (data) {
        $('#username').val(data.username);
        $('#password').val(data.password);
        $('#login-form').submit();
    });
});