$(function () {
    chrome.storage.local.get(['username', 'password'], function (data) {
        $('#user_username').val(data.username);
        $('#user_passwd').val(data.password);
        $('form').submit();
    });
});