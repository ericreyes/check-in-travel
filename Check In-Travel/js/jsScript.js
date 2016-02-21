var myFirebaseRef = new Firebase("https://check-n-travel.firebaseio.com/");




function saveAdmin(){
  var leader_name = document.getElementById("admin_name").value;
  var trip_name = document.getElementById("event_name").value;
  var travel_code =  document.getElementById("trip_code").value;

  var another_child = myFirebaseRef.child(travel_code);
  another_child.update({
    the_trip_name: trip_name,
    administrator: leader_name
  });

}
function saveTraveler(){
  var traveler_name = document.getElementById("traveler_name").value;
  var code_trip =  document.getElementById("code_trip").value;
  var travel_code = myFirebaseRef.equalTo(code_trip);

  trip_ref = myFirebaseRef.child(code_trip).child("userList").child(traveler_name);
  trip_ref.setWithPriority({
    userTrip: traveler_name
  }, code_trip);
}

var referencia = myFirebaseRef.child(code_trip);




function handleNames(){
  referencia.on('child_added', function(snapshot){
  var message = snapshot.val();
  alert("name: " + message.name +"  val: " + message.text);
  });
  var newRow = document.getElementById("content");
  content.innerHTML = message.name;
  alert(content);
  var x = document.createElement("INPUT");
  x.setAttribute("type", "checkbox");

  var message2 = prevSnap.val();

  newRow.append(document.getElementById("<td/>").text(snapshot.val())); //userTrip
  newRow.append(document.getElementById("<td/>").x)

}

function changeImage() {
    var image = document.getElementById('check');
    if (image.src.match("bulbon")) {
        image.src = "assets/check1.png";
    } else {
        image.src = "assets/check.png";
    }
}

handleNames();
