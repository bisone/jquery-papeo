$.widget("mynamespace.progressbar",{

    _create:function(){
        var progress = this.options.value +'%';
        this.element
            .addClass('progressbar')
            .text(progress);

    }

});
