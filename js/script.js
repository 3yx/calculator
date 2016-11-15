var x = null;
var y = null;
var googleAPI = '';
var a = null;
var result = null;
var d = '';
var f ='';
var e = null;
$(function(){

	//locate
	$('.locate').on('click', function getLocate() {
		navigator.geolocation.getCurrentPosition(
			function(position) {
				x = position.coords.latitude;
				y = position.coords.longitude;
				var coordsAPI = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + x + ',' + y + '&key=AIzaSyBe71JKODGXWRgD8wdiL-4USKIG76o5pfk';
				googleAPI = coordsAPI;
				
				$.ajax({
				url: googleAPI,
					success: function(data) {
						result = data;
						alert(result.results[0].formatted_address);
					}
				});				
			}
		);
	});

    $('.close').on('click', function(){
    if ($('.locate').is(':visible')){
            $('.locate').fadeOut(3000);
            $('.close img').css('transform','rotate(-45deg)');
        }
        else {
            $('.locate').fadeIn(3000);
            $('.close img').css('transform','rotate(0deg)');
    }
});

    var calc = $('.calculator');
    var calcDisplay = calc.find('.display');
    var calcDisplayResult = calc.find('.display_result');
    var calcKeys = calc.find('.key');
    var operand = calc.find('.operand');
    var calcButton = calc.find('.button');
    var calcClear = calc.find('.clear');
    var calcEqual = calc.find('.key--equal');
    var calcpercent = calc.find('.percent');
    var calcPower2 = calc.find('.power2');
    var calcPower3 = calc.find('.power3');
    var calcSqrt = calc.find('.sqrt');
    var calcSpace = calc.find('.backspace');
    var music = calc.find('.music'); 

    calcButton.on('click', function(){
        calcDisplay.val(calcDisplay.val() + $(this).attr('value'));
    });

    calcClear.on('click', function(){
        calcDisplay.val('');
        calcDisplayResult.val('');
        a = null;
        result = null;
        d = '';
        f ='';
        e = null;
    });

    calcPower2.on('click', function(){
        calcDisplay.val(Math.pow(calcDisplay.val(),2));
    });

    calcPower3.on('click', function(){
        calcDisplay.val(Math.pow(calcDisplay.val(),3));
    });

    calcSqrt.on('click', function(){
        e = Math.sqrt(calcDisplay.val());
        calcDisplay.val(e.toFixed(3));
    });


    calcSpace.on('click', function(){ 
        calcDisplay.val( calcDisplay.val().substring(0, calcDisplay.val().length-1));
        });

    calcEqual.on('click', function(){
        a = calcDisplay.val();
        if (a[(a.length-1)] == '%') {
            calcDisplay.val('');
        }
        calcDisplayResult.val(calcDisplayResult.val() + calcDisplay.val());
        calcDisplay.val(eval( calcDisplayResult.val()));
        calcDisplayResult.val('');
        a = null;
        result = null;
        d = '';
        f ='';
        e = null;
    });

    operand.on('click', function(){
        calcDisplayResult.val(calcDisplayResult.val() + calcDisplay.val());
        calcDisplay.val('');
    });

    calcpercent.on('click', function(){
        calcDisplayResult.val(calcDisplayResult.val() + calcDisplay.val());
        a = calcDisplayResult.val();
        b = a.split('');
        for (i=b.length;i>0;i--){
            if  (b[i] == '%') {
            percentPosition = i;
            }
            if (b[i] == '-' || b[i] == '+'|| b[i] == '/'|| b[i] == '*') {
            operatorPosition = i;
            }  
        }
        for (i=operatorPosition+1;i<=percentPosition-1;i++){
            d = d + b[i];

        }
        for (i=0;i<operatorPosition;i++) {
            f = f +b[i];
        }
        e = (d/100)*f;
        b.splice(operatorPosition+1,percentPosition-1,e.toFixed(2));
        b = b.join('');
        calcDisplayResult.val(b);

    });

    $('.music').on('click', function(){
    if ($('#kiss').is(':visible')){
        $('#kiss').fadeOut(2000);
    }
    else {
        $('#kiss').fadeIn(2000);
    }
    });
});	