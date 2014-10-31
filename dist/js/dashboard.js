(function(){ 
($.widget("bisone.progressbar", {
    options: {
        value: 0
    },

    _create: function() {
        this.element.addClass("progressbar");
        this._update();
    },

    _setOption: function(key, value) {
        this.options[key] = value;
        this._update();
    },

    _update: function() {
        var progress = this.options.value + "%";
        this.element.text(progress);
        //trigger a event when progressbar is complate
        if(this.options.value == 100){
            this._trigger('complete',null,{value:100});
        }
    },

    _destroy:function(){
        this.element
            .removeClass('progressbar')
            .text("");
        $.Widget.prototype.destroy.call(this);

    }
})
)(jQuery);

})();