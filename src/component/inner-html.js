riot.tag('inner-html', '',

    function(opts) {
        var self = this;
        var p = this.parent.root;
        while (p.firstChild) {
            this.root.appendChild(p.firstChild);
        }
    });

