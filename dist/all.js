(function(){

	SmoothElement = function(dom,type,delay){
	this.dom = dom;
	this.type = type;
	this.delay = delay;

	window.onscroll = function(){
		if(this.checkScroll()){
			this.appear();
		}
		else{
			this.disappear();
		}
	}.bind(this);

	this.dom.addClass('smooth');
	if(this.checkScroll())this.appear();
};

SmoothElement.prototype.appear = function() {
	setTimeout(function(){this.dom.addClass('appearOpacity');}.bind(this),this.delay);

};

SmoothElement.prototype.disappear = function() {
	setTimeout(function(){this.dom.removeClass('appearOpacity');}.bind(this),this.delay);

};

SmoothElement.prototype.checkScroll = function() {

    elem = this.dom;
    var win = $(window);
    var docViewTop = win.scrollTop();
    var docViewBottom = docViewTop + win.height();
    var elemTop = elem.offset().top;
    var elemBottom = elemTop + elem.height();

    var a = (elemTop > docViewBottom - 500);
    if (a) { return false; }
    var b = (elemBottom > docViewTop +500);
    if (!b) { return false; }
    return !(a && b);

};

})();
var headerH1 = new SmoothElement($('header h1'),"opacity",100);
var ccUl =  new SmoothElement($('#courtcircuit .textLeft'),"opacity",500);