


// inpul sensors script
$(document).ready(function() {  
      
    $('#longitude').on('keyup', function() {
      var amountWater = +$(this).val();
      $('#totallongitude').text((amountWater / 17).toFixed(2));
    });
    
    $('#latitude').on('keyup', function() {
      var amountCoffee = +$(this).val();
      $('#totallatitude').text((amountCoffee * 17).toFixed(2));
    });

    $('#ph').on('keyup', function() {
        var amountCoffee = +$(this).val();
        $('#totalph').text((amountCoffee * 17).toFixed(2));
      });

      $('#tds').on('keyup', function() {
        var amountCoffee = +$(this).val();
        $('#totaltds').text((amountCoffee * 17).toFixed(2));
      });

      $('#temp').on('keyup', function() {
        var amountCoffee = +$(this).val();
        $('#totaltemp').text((amountCoffee * 17).toFixed(2));
      });
    
  });  