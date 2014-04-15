/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

 		document.body.style.background = '#4B946A';


        setTimeout(function() {
    		$('#backgroundTitle').fadeOut('fast');
    		$('#Cent-Div').show();
    		$('#Farenheit-Div').show();
			$('#Kelvin-Div').show();
    		$('#tabs').show();
    		$('#txtTitle').show();
    		$('body').animate({
    			backgroundColor : "white"
			}, 5000);
    		
    		//kelvinCalc();
    		//farenheitCalc();
    		//centCalc();
		}, 2000); // <-- time in milliseconds


		$("body").append("");
        console.log('Received Event: ' + id);
    }
};
		function Cent_click(){
			$('#Cent-Div').show();
			$('#Farenheit-Div').hide();
			$('#Kelvin-Div').hide();
		}

		function centCalc(){
			var result = 274.15;
			var getCent = parseFloat($('#centInput').val());
			if (isNaN(getCent))
				getCent=1;
			var resCent = (273.15 + getCent);
			var resFar = (getCent * 1.8) + 32;
			//$('p#centResult').html (getCent+"°C"+ "<font size='2'>("+ resFar.toFixed(2) +"°F)</font>"+"= " + resCent.toFixed(2) +"°K");
			
			$('#kelvinInput').val(resCent.toFixed(2));
			$('#farenheitInput').val(resFar.toFixed(2));
			console.log("Calculating " + getCent);
		}
		
		function kelvinCalc(){
			var getKelvin = parseFloat($('#kelvinInput').val());
			if (isNaN(getKelvin))
				getKelvin=1;
			var resKelvin = (getKelvin - 273.15);
			var resFar = (resKelvin * 1.8) + 32;
			//$('p#kelvinResult').html (resKelvin.toFixed(2)+"°C"+ "<font size='2'>("+ resFar.toFixed(2) +"°F)</font>"+"= " + getKelvin.toFixed(2) +"°K");
			
			$('#centInput').val(resKelvin.toFixed(2));
			$('#farenheitInput').val(resFar.toFixed(2));
			console.log("Calculating 2" + getKelvin);
		}
		function farenheitCalc(){
			var getFar = parseFloat($('#farenheitInput').val());
			if (isNaN(getFar))
				getFar=1;
			var resFar = (getFar - 32) / 1.8;
			var resKelvin = (resFar + 273.15);
			//$('p#farenheitResult').html (resFar.toFixed(2)+"°C"+ "<font size='2'>("+ getFar.toFixed(2) +"°F)</font>"+"= " + resKelvin.toFixed(2) +"°K");
			$('#centInput').val(resFar.toFixed(2));
			$('#kelvinInput').val(resKelvin.toFixed(2));
			console.log("Calculating 3" + getFar);
		}

		function setupUI(){
			$('#backgroundTitle').show();
			$('#Cent-Div').hide();
			//$('#centInput').val("1.00");
        	$('#tabs').hide();
        	$('#deviceready').hide();
			$('#txtTitle').hide();
			$("#centInput").attr("placeholder", "Celsius").blur();
			$("#kelvinInput").attr("placeholder", "Kelvin").blur();
			$("#farenheitInput").attr("placeholder", "Fahrenheit").blur();
		}
		function clearcentInput(){
			$('#centInput').val("");
		}
		function clearfarInput(){
			$('#farenheitInput').val("");
		}
		function clearkelvinInput(){
			$('#kelvinInput').val("");
		}
	function isNumberKey(evt)
       {
          var charCode = (evt.which) ? evt.which : event.keyCode;
          if (charCode != 46 && charCode > 31 
            && (charCode < 48 || charCode > 57))
             return false;

          return true;
       }
       function validate(evt) {
			  var theEvent = evt || window.event;
			  var key = theEvent.keyCode || theEvent.which;
			  key = String.fromCharCode( key );
			  var regex = /[0-9]|\.|-/;
			  if( !regex.test(key) ) {
			    theEvent.returnValue = false;
			    if(theEvent.preventDefault) theEvent.preventDefault();
			  }
		}