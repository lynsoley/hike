function validateForm() {
    var fname = document.forms["myForm"]["fname"].value;
    var femail = document.forms["myForm"]["femail"].value;
    var message = document.forms["myForm"]["message"].value;

    // Regular expression pattern for a valid name (letters and spaces)
    var namePattern = /^[A-Za-z\s]+$/;

    // Regular expression patter for a valid email (letters -> point -> letters -> @ -> letters -> point -> letters (only 2 or 3))
    var emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    // Regular expression pattern for a valid message (allow any characters)
    var messagePattern = /^[\s\S]*$/;

    if (!namePattern.test(fname)) {
      alert("Invalid name format. Please use letters and spaces only.");
      return false; 
    }

    if (!emailPattern.test(femail)) {
      alert("Invalid email format. Please enter a valid email.")
      return false;
    }

    if (!messagePattern.test(message)) {
      alert("Invalid message format. Please enter a valid message.");
      return false; 
    }

    return true; 
  }



   /* --------------------- Winter ---------------------- */
  var winterSlideIndex = 1;
  showWinterDivs(winterSlideIndex);
  
  function plusWinterDivs(n) {
    showWinterDivs(winterSlideIndex += n);
  }
  
  function showWinterDivs(n) {
    var i;
    var x = document.getElementsByClassName("myWinterSlides");
    if (n > x.length) {winterSlideIndex = 1}
    if (n < 1) {winterSlideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[winterSlideIndex-1].style.display = "block";  
  }


  /* --------------------- Spring ---------------------- */
  var springSlideIndex = 1;
  showSpringDivs(springSlideIndex);
  
  function plusSpringDivs(n) {
    showSpringDivs(springSlideIndex += n);
  }
  
  function showSpringDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySpringSlides");
    if (n > x.length) {springSlideIndex = 1}
    if (n < 1) {springSlideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[springSlideIndex-1].style.display = "block";  
  }



  /* --------------------- Summer ---------------------- */
  var summerSlideIndex = 1;
  showSummerDivs(summerSlideIndex);
  
  function plusSummerDivs(n) {
    showSummerDivs(summerSlideIndex += n);
  }
  
  function showSummerDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySummerSlides");
    if (n > x.length) {summerSlideIndex = 1}
    if (n < 1) {summerSlideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[summerSlideIndex-1].style.display = "block";  
  }


  /* --------------------- Autumn ---------------------- */
  var autumnSlideIndex = 1;
  showAutumnDivs(autumnSlideIndex);
  
  function plusAutumnDivs(n) {
    showAutumnDivs(autumnSlideIndex += n);
  }
  
  function showAutumnDivs(n) {
    var i;
    var x = document.getElementsByClassName("myAutumnSlides");
    if (n > x.length) {autumnSlideIndex = 1}
    if (n < 1) {autumnSlideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[autumnSlideIndex-1].style.display = "block";  
  }