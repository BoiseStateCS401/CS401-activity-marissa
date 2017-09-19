// Wait for entire page to load before adding event listeners.
window.onload = function () {

  // Select by the page header by id.
  var pageHeader = document.getElementById("page-header");
  console.log(pageHeader); /* debug statement */
  var text = "Hello";
  
  // Add click event listener to header.
  pageHeader.addEventListener("click", function() {
    var h1 = this.querySelector("h1");
    var origText = h1.textContent; 
    h1.textContent = text;
    text = origText;
  });


  // Select paragraphs by tag name
  var paras = document.getElementsByTagName("p");

  // Change color on mouse over. What is a better way to do this?
  for(var i = 0; i < paras.length; i++) {
    paras[i].onmouseover = function() {
      this.style.color = "red";
    }
    paras[i].onmouseleave = function() {
      this.style.color = "blue";
    }
  }
  
  // Select all collabsible sections using CSS selector
  var sections = document.querySelectorAll('section.collapsible');

  // Add click listener to each section
  for (var i = 0; i < sections.length; i++) {
    sections[i].addEventListener("click", function() {
      console.log(this); /* debug statement */
      toggleCollapsibleSection(this);
    });
  }

  function toggleCollapsibleSection(element) {
    // toggle css class to change icon.
    element.classList.toggle("collapsed");

    // find all the children of the element
    var children = element.children;
    
    // hide content. start loop at one to skip over h3
    for(var j = 1; j < children.length; j++) {
      if(children[j].style.display == 'none') {
        children[j].style.display = 'block';
      } else {
        children[j].style.display = 'none';
      }
    }
  }

  function initMap() {
    var boise = {lat: 43.6187, lng: -116.2146};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: boise 
    });
    var marker = new google.maps.Marker({
    position: boise,
    map: map
    });
  }
}




/* jQuery */
// $(document).ready(function() {
//   $('section').click(function() {
//       $(this).toggleClass("collapsed");
//     $(this).children().not("h3").toggle();
//   });
// });
