
require(['./main'], function (main) {
    require(['app/a','app/c'], function (a,c) {
        a();
        c();
    });
})