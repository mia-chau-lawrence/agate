document.addEventListener('DOMContentLoaded', (event) => {
//(function () {

    var myAdventure = {
        
        theBeginning: {
            // "image": "", 
            "title": "Diary Entry #1",
            "statement": `
            <i><span style="float:right; font-size:14px;">August 4, 1929</span>
            <br><br>
            Dear diary,
            <br><br>
            Earlier this afternoon, I arrived in Monterey to live with <span class="tooltip">Zia<span class="tooltiptext">Sicilian for maternal aunt. Pronounced "tsia"</span></span> and her family. I must say, after living in Salinas for the past
            few years, I was surprised by the amount of bustle in what I had assumed to be a simple fishing town. Of course, I had heard that the canneries had attracted immigrants from all over the world (especially my own Sicilian people) but I was
            completely unprepared huge variety of foreign cultures, dress, and speech that I saw around me. 
            <br><br>
            I myself was drawn to live here with Zia Cecilia and her myself so I could work in the canneries. They say the Sicilian community is stronger here than anywhere else and now that Papa is dead, it 
            would be comforting to surround myself with my own people. Why, Signora Russo, Zia Cecilia's friend, managed to get me a job at <a href="" class="discover">San Carlos</a> through a friend and has already promised to send her niece over
            when the <a href="" class="discover">cannery whistles</a> call in the morning. Apparently the sardine catches come in at very unpredictable times but when they do, everybody knows because the whistles can be heard 
            screaming across town.
            <br><br>
            Anyhow, I ought to go to sleep now if I am to be rested tomorrow. Goodnight!
            <br><br>
            Sincerely,
            <br>
            Giuliana Peretti 
            `, 
            "choices": [
                { 
                    "id": "theBeginning",
                    "label": "Continue",
                    "moveto": "firstDayGoToWork1",
                },
            ]
        },

        firstDayGoToWork1: { 
            // "image":"coffee.webp",
            "title": "Breakfast",
            "statement": `
                Zia Cecilia was right. It is not even daylight when the shrill, single-toned screaming of the cannery whistles are heard across town.
                However, after spending two years as a field hand, stooping for hours the hot sun to pick fruit in order to support myself and my "sick" father, 
                the opportunity for change is cause enough for excitement. 
                <br><br>
                After dressing, I rush into the kitchen where Zia Cecilia has already arisen and is making a pot of hot coffee. However, I have hardly entered the room when 
                I hear a knock at the door.
            `,
            "choices": [
                { 
                    "id": "firstDayGoToWork1",
                    "label": "continue",
                    "moveto": "firstDayGoToWork2",
                },
                { 
                    "id": "firstDayGoToWork1",
                    "label": "continue",
                    "moveto": "theBeginning",
                },
                
            ]
        },

            firstDayGoToWork2: { 
                // "image":"coffee.webp",
                "title": "",
                "statement": `
                    Arising quickly, you 
                `,
                "choices": [
                    { 
                        "label": "continue",
                        "moveto": "firstDayGoToWork1",
                    },
                    
                ]
        },
        
        becomeCanMan: { 
           "image":"",
            "title": "Cannery Worker",
            "statement": "While undesirable, the family must eat. The hours and conditions are terrible, do you dare complain?",
            "choices": [
                { 
                    "label": "Complain to boss",
                    "moveto": "firstDayGoToWork1",
                },
                {
                    "label": "No, you cannot lose your job",
                    "moveto": "firstDayGoToWork2",
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
                        <div class="img-center">
                            <img src="${state["image"]}" width="100%;">
                        </div>
                        <h2 style="text-align:center">${state["title"]}</h2>
                        <p>${state["statement"]}</p>
                    </div>
                    <div class="button-box">`;
                        for(let i=0; i<state.choices.length; i+=1) {
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

        //event handler
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
