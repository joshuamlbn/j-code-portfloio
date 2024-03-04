document.addEventListener('DOMContentLoaded', function() {
    var backgroundPositionX = 0;

    function moveBackground() {
        backgroundPositionX -= 1;
        document.body.style.backgroundPositionX = backgroundPositionX + 'px';
    }

    setInterval(moveBackground, 50);
});

function validateForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  if (name == '' || email == '' || message == '') {
      alert('Please fill in all fields');
      return false;
  }

  var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (!emailPattern.test(email)) {
      alert('Please enter a valid email address');
      return false;
  }

  return true;
}

function initMap() {
    var address = { lat: 14.431135, lng: 120.999867 }; // Coordinates for Las Piñas, Philippines
  
    // The map, centered at the address
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 17, 
      center: address,
    });
  
    var markerIcon = {
      url: "marker-icon.png",
      scaledSize: new google.maps.Size(50, 50),
    };
  
    var marker = new google.maps.Marker({
      position: address,
      map: map,
      icon: markerIcon,
      title: "2F, Earn Building, Alabang-Zapote Rd., Pamplona Uno, Las Piñas, Philippines",
    });
  }