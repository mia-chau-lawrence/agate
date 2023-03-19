document.addEventListener('DOMContentLoaded', (event) => {
//(function () {

    var myAdventure = {
        
        theBeginning: {
            //"background_image": "chihuahua.jpg", 
            "title": "Welcome",
            "statement": "Welcome to my game. Let's Play! Welcome to my game. Let's Play! Welcome to my game. Let's Play! Welcome to my game. Let's Play! Welcome to my game. Let's Play!  ", 
            "choices": [
                { 
                    "id": "theBeginningStart",
                    "label": "Click me",
                    "moveto": "startPlaying"
                }
            ]
        },

        startPlaying: { 
            //"background_image": "chihuahua.jpg", 
            "title": "Begin playing",
            "statement": "You are broke and must get a job. Do you become a fisherman or get a job in a canning factory?",
            "choices": [
                { 
                    "label": "Become a fisherman",
                    "moveto": "becomeFisherman",
                },
                { 
                    "label": "Get a job in a canning factory",
                    "moveto": "becomeCanMan"
                },
                
            ]
        },

        becomeFisherman: { 
           // "background_image": "chihuahua.jpg", 
            "title": "Fisherman",
            "statement": "You have become a fisherman. However, it does not take you long to realize that there is only money in big scale fishing. However, you are already beginning to see the toll it is taking on the Monterrey bay . . .",
            "choices": [
                { 
                    "label": "Your family must eat, they are more important than sardines",
                    "moveto": "bigScaleFishing",
                },
                {
                    "label": "No, you will stick to your morals",
                    "moveto": "smallScaleFishing",
                }
                
            ]
        },

        becomeCanMan: { 
            //"background_image": "chihuahua.jpg", 
            "title": "Cannery Worker",
            "statement": "While undesirable, the family must eat. The hours and conditions are terrible, do you dare complain?",
            "choices": [
                { 
                    "label": "Complain to boss",
                    "moveto": "complainToBoss",
                },
                {
                    "label": "No, you cannot lose your job",
                    "moveto": "ignoreProblems",
                },
                
            ]
        },
    
    /*end*/ 
    };

    const states = [];
    //new code
    function renderState (next) {
        let state = myAdventure[next];
        
        let tileHtml = '';
        
            let tileTemplate = `
            <div class="content-display">
                <div class="main-enclose">
                    <div class="question">
                        <h2 style="text-align:center">${state["title"]}</h2>
                        <p>${state["statement"]}</p>
                    </div>
                    <div class="button-box">`;
                        for(let i=0;i<state.choices.length;i+=1) {
                            tileTemplate += 
                            `<button id="${state.choices[i].id}" class="answer-button" ` +
                            `data-next="${state.choices[i].moveto}">` +
                            `${state.choices[i].label}</button>`;
                        }
                    tileTemplate += `</div>
                </div>
            </div> 
            `;
        
            tileHtml += tileTemplate;   

        document.getElementById('text-tile').innerHTML = tileHtml;  
        document.getElementById(state.choices[0].id).onclick = function(e) { 
            //console.log(e);  
            renderState(e.target.dataset["next"]); 
            states.push(state["title"]);
            console.log(states)
        }
    }    
    
    console.log('HERE I AM '+(Date.UTC()));

    let start = "theBeginning";
    renderState("theBeginning");

    //function nextState(e) { renderState(e.data["next"]); }

    //}());
  })
