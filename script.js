// Write your JavaScript code here!
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then( function(json) {
         let mission = document.getElementById("missionTarget");
         let destination = Math.floor(Math.random()*json.length);
         mission.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[destination].name}</li>
            <li>Diameter: ${json[destination].diameter}</li>
            <li>Star: ${json[destination].star}</li>
            <li>Distance from Earth: ${json[destination].distance}</li>
            <li>Number of Moons: ${json[destination].moons}</li>
         </ol>
         <img src="${json[destination].image}"></img>`
      });
   });
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event){
      let pilotNameInput = document.querySelector("input[name=pilotName");     
      let copilotNameInput = document.querySelector("input[name=copilotName");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      // if(pilotNameInput.value==='' || copilotNameInput.value==='' || fuelLevelInput.value==='' || cargoMassInput.value===''){
      //    alert("All fields are required!");
      //    event.preventDefault();
      // } else if (isNaN(pilotNameInput.value)!== true || isNaN (copilotNameInput.value)!==true) {
      //    alert("Pilot or copilot name must be a string!");
      //    event.preventDefault();
      // } else if (isNaN(fuelLevelInput.value)!== false || isNaN(cargoMassInput.value)!== false) {
      //    alert("Fuel level and cargo mass must be numbers!");
      //    event.preventDefault();
      // }

      let output = document.getElementById("faultyItems");
      let launchStatus = document.getElementById("launchStatus");
      if (fuelLevelInput.value < 10000 ) {
         output.style.visibility = "visible";
         document.getElementById("fuelStatus").innerHTML = 'fuel level is too low for launch';
         launchStatus.innerHTML = 'Shuttle not ready for launch';
         launchStatus.style.color = 'red';
      } 
      if (cargoMassInput.value > 10000) {
         output.style.visibility = "visible";
         document.getElementById("cargoStatus").innerHTML = 'cargo mass is too high for launch';
         launchStatus.innerHTML = 'Shuttle not ready for launch';
         launchStatus.style.color = 'red';
      }
      if (cargoMassInput.value <= 10000 && fuelLevelInput.value >= 10000) {
         output.style.visibility = "visible";
         launchStatus.innerHTML = 'Shuttle is ready for launch';
         launchStatus.style.color = 'green';
      }

      document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
      document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotNameInput.value} is ready for launch`;
      event.preventDefault();
   });
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
