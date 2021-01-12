document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
navigator.accelerometer.getCurrentAcceleration(onSuccess,onError);

function onSuccess(acc){
document.getElementById('x-axis').value= acc.x;
document.getElementById('y-axis').value= acc.y;
document.getElementById('z-axis').value= acc.z;
}

function onError(params){

}
}
