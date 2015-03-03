riot.tag('e-input',
    '<div class="field {field-error : error}"><label for="input-{opts.inputname}" if="{opts.labelname}">{opts.labelname}</label> ' +
    '<input type="{opts.type}" name="{opts.inputname}" id="i{opts.inputname}" ><br>' +
    '<inner-html></inner-html>' +
    '<span show="{error}">{error}</span>' +
    '<div if="{opts.showpswrd}"><label for="{opts.inputname}-show" ><input type="checkbox" id="{opts.inputname}-show" onclick="{showPw}">Show password</label></div>' +
    '</div>',

    function(opts) {
        var self = this;

        if(opts.pattern) {
        $(function() {
            $('#i' + opts.inputname).on('keyup', function() {
                validate(this.value);
            });
        });

        var validate = function(value) {
            var re = new RegExp(opts.pattern);
            var valid = re.test(value);
            var error_message;
            if(!valid) {
                error_message = 'hola';
            }
            self.update({ error: error_message });
        };

        }

        if(opts.showpswrd) {
            self.showPw = function(e) {
                var $pswrdInput = $('#ipswrd');
                if($pswrdInput.attr('type') === 'password' ) {
                    $pswrdInput.attr('type', 'text');
                } else {
                    $pswrdInput.attr('type', 'password');
                }
                return true;
            };
        }
    });

