riot.tag('e-form',
    '<form id="log" onsubmit="{ submit }">' +
        '<inner-html></inner-html>' +
    '<input type="submit" value="submit form">' +
    '</form>',

    function(opts) {

        this.submit = function () {
        }
    });

