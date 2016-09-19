$(function () {
    var nowTime = new Date();
    nowTime = nowTime.getHours() + ':' + nowTime.getMinutes() + ':' + nowTime.getSeconds();

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
});