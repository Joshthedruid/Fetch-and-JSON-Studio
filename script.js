// TODO: add code here
window.addEventListener('load',function(){
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(myJson){
            //sort elements from myJson into new array
            myJson.sort(function(a,b){return a.hoursInSpace - b.hoursInSpace})

            const container = document.getElementById("container");
            let myString=`<h2>Number of Astronauts: ${myJson.length}`;
            myJson.forEach(function(profile){
                //preload skills section
                let skillString = "";
                for(let i=0; i<profile.skills.length; i++){
                    if(i != 0){
                        skillString += ", ";
                    }
                    skillString += profile.skills[i];
                }

                //if active logic
                let activeCol = "black"
                if(profile.active){
                    activeCol = "green"
                }
                let plugInCol = `style="color:${activeCol};"`

                //build HTML with JSON data
                myString += `<div class="astronaut">
                <div class="bio">
                   <h3>${profile.firstName} ${profile.lastName}</h3>
                   <ul>
                      <li>Hours in space: ${profile.hoursInSpace}</li>
                      <li ${plugInCol}>Active: ${profile.active}</li>
                      <li>Skills: ${skillString}</li>
                   </ul>
                </div>
                <img class="avatar" src=${profile.picture}>
             </div>`
            }); 
            container.innerHTML=myString;
        });
    });
});