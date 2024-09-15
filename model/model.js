export function loadPage(pageId) {
    if (pageId != '') {
        $.get(`pages/${pageId}.html`, function (data) {
        // /console.log('data ' + data);
        $('#app').html(data);
            });
        } else {
            $.get(`pages/home.html`, function (data) {
            // console.log('data ' + data);
            $('#app').html(data);
        });
        }
}