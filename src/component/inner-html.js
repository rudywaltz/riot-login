riot.tag('inner-html', '',

    function(opts) {
        var self = this;
        var p = self.parent.root;
        while (p.firstChild) {
            this.root.appendChild(p.firstChild);
        }
    });
