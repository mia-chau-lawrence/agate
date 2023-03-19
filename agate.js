document.addEventListener('DOMContentLoaded', (event) => {
//(function () {

    var myAdventure = {
        
        theBeginning: {
            "title": "Welcome",
            "statement": "Welcome to my game. Let's Play!",

            "background_image": "..some..image",    
            "choices": [
                { 
                    "label": "Click me",
                    "moveto": "StartPlaying"
                }
            ]
        },

        startPlaying: { 
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
                        <div class="button-box">
                            <button class="answer-button center">${state.choices[0].label}</button>
                        </div>
                    </div>
                </div>
            </div>
            `;
        
            tileHtml += tileTemplate;   

        document.getElementById('text-tile').innerHTML = tileHtml;  
    }    
    
    console.log('HERE I AM '+(Date.UTC()));

    let start = "theBeginning";
    renderState("theBeginning");

    function nextState(e) { renderState(e.data["next"]); }



    //}());
//    //the event occurred
  })
