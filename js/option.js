$(function () {
    chrome.storage.local.get(['username', 'password'], function (data) {
        $('input[name=username]').val(data.username);
        $('input[name=password]').val(data.password);
    });

    $('#submit').click(function(){
        var username = $('input[name=username]').val();
        var password = $('input[name=password]').val();

        chrome.storage.local.set({
            'username': username,
            'password': password
        }, function () {
            $('.alert-success').removeClass('hidden');

            setTimeout(function(){
                $('.alert-success').addClass('hidden');
            }, 2000)
        });
    });
});