$(function () {
    var nowTime = new Date();
    var nowDay = nowTime.getDay();

    if (nowDay >= 1 && nowDay <= 5) {
        var nowHours = nowTime.getHours();
        var nowMinutes = nowTime.getMinutes();
        var nowSeconds = nowTime.getSeconds();

        if (nowHours < 10) {
            nowHours = '0' + String(nowHours);
        }

        if (nowMinutes < 10) {
            nowMinutes = '0' + String(nowMinutes);
        }

        if (nowSeconds < 10) {
            nowSeconds = '0' + String(nowSeconds);
        }

        nowTime = nowHours + ':' + nowMinutes + ':' + nowSeconds;

        var upTimeRangeStart = '08:50:00';
        var upTimeRangeEnd = '09:10:00';

        var downTimeRangeStart = '18:00:00';

        var upBB = $('input.clock_enabled[value="0900"]');
        var downBB = $('input.clock_enabled[value="1830"]');

        if (nowTime > upTimeRangeStart && nowTime < upTimeRangeEnd && upBB.parents('td').next().text().trim() == '') {
            upBB.click();
        }

        if (nowTime > downTimeRangeStart && downBB.parents('td').next().text().trim() == '') {
            downBB.click();
        }
    }
});