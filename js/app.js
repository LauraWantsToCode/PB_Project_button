

 const FakebuttonHeight = 50;
 const FakebuttonWidth = 150; 

 const maxWidth = window.innerWidth - FakebuttonWidth; 
 const maxHeight = window.innerHeight - FakebuttonHeight; 
 
const FakeButton = document.getElementById('FakeButton'); 

FakeButton.addEventListener('mouseover', () => {
 FakeButton.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px'; 
 FakeButton.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px'; 
}) 

document.getElementById("formbutton").onclick = function(){
var name = document.getElementById("input1").value 
var place = document.getElementById("input2").value 
document.getElementById("TripInfo").innerHTML=`Hello, ${name}. You would like to visit ${place}`
}
