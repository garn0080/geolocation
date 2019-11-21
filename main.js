// let map;
document.addEventListener('DOMContentLoaded', init )

function init(){
if(navigator.geolocation){

    let time = 1000 * 3600;
    let age = 1000 * 3600;

    let options = {

        enableHighAccuracy: true,
        timeout: time,
        maximumAge: age,
        
    }
    
    navigator.geolocation.getCurrentPosition(mymap, failed, options)

}else{
    alert('your Browser is too old, you need an update');
}
}
function mymap(data) {
    let spans = document.querySelectorAll('p span');
    spans[0].textContent = data.coords.latitude;
    spans[1].textContent = data.coords.longitude;
    console.log(data);
    BuildMap(data)
    
}

function failed(err) {
    alert('Not allowed to know your Adress, Displaying now default Location')
    console.log(err)
    let positions = {
         latitude: 3.900749,
         longitude: -73.073215
    }
    let failedcoordinates = {lat: positions.latitude, lng: positions.longitude }
    map = new google.maps.Map(
    document.getElementById('map'), {zoom: 5, center: failedcoordinates});
    marker = new google.maps.Marker({
        animation: google.maps.Animation.DROP,
        position: failedcoordinates,
        map: map
    });
    let spans = document.querySelectorAll('p span');
    spans[0].textContent = positions.latitude;
    spans[1].textContent = positions.longitude;
}


function BuildMap(position){
    let coordinates = {lat: position.coords.latitude, lng: position.coords.longitude}
    map = new google.maps.Map(document.getElementById('map'), {
        center: coordinates,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    marker = new google.maps.Marker({
        animation: google.maps.Animation.BOUNCE,
        position: coordinates,
        map: map
    });

}

