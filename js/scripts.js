  var primeFinder = function(n) {
    var array = [], upperLimit = Math.sqrt(n), output = [];

    // Make an array from 2 to (n - 1)
    for (var i = 0; i < n; i++) {
        array.push(true);
        console.log(array)
    }

    // Remove multiples of primes starting from 2, 3, 5,...
    for (var i = 2; i <= upperLimit; i++) {
        if (array[i]) {
          console.log(array[i]);
            for (var j = i * i; j < n; j += i) {
              console.log(j);
                array[j] = false;

            }
        }
    }

    // All array[i] set to true are primes
    for (var i = 2; i < n; i++) {
        if(array[i]) {
            output.push(i);
        }
    }

    return output;
};



$(document).ready(function(){
  $("button").click(function(event){
    event.preventDefault();
    var userNumber = parseInt($("#userNumber").val());
    $("#output").text(primeFinder(userNumber));

  });
});
