var clickCount = 1;

  function myFunction() {

    if (clickCount == 1) {

        document.getElementById("demo").style.fontFamily = "Roboto";

        clickCount++;

    } else if(clickCount == 2) {

        document.getElementById("demo").style.fontFamily = "Manslava";

        clickCount++;

    } else if(clickCount == 3) {

        document.getElementById("demo").style.fontFamily = "Grenze";

        clickCount++;

    } else if(clickCount == 4) {

        document.getElementById("demo").style.fontFamily = "Turret Road";

        clickCount++;

    } else {

        document.getElementById("demo").style.fontFamily = "Courier New";

        clickCount = 1;

    }

    document.getElementById("result").innerHTML = "Font style now: " +  document.getElementById("demo").style.fontFamily;

    console.log(document.getElementById("demo").style.fontFamily);

  }