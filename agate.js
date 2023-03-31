document.addEventListener('DOMContentLoaded', (event) => {
    //(function () {
    
        var myAdventure = {
            
            theBeginning: { 
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
                ],
                
                "images" : [
                    {
                        "img":"the-beginning.jpg",
                        "caption":"The wharfs",
                    },
                    {
                        "img":"coffee.webp",
                        "caption":"Breakfast",
                    },
                ],
            },
    
            firstDayGoToWork1: { 
                "title": "Breakfast",
                "statement": `
                    Zia Cecilia was right. It is not even daylight when the shrill, single-toned screaming of the cannery whistles are heard across town.
                    However, after spending two years as a field hand, stooping for hours the hot sun to pick fruit in order to support myself and my "sick" father, 
                    the opportunity for change is cause enough for excitement. 
                    <br><br>
                    After dressing, I rush into the kitchen where Zia Cecilia has already arisen and is making a pot of hot coffee. However, I have hardly entered the room when 
                    I hear a knock at the door.
                    <br><br>
                    Arising quickly, I go to open it. On the doorstep stands a girl about my age wearing a staunch white apron, black rubber gloves, and a dark hair staunchly kept back in a hair net.
                    Held close to her chest is another similar outfit.
                `,
                "choices": [
                    { 
                        "id": "firstDayGoToWork1",
                        "label": "continue",
                        "moveto": "firstDayGoToWork2",
                    },
                    
                ],
                //images
                "images" : [
                    {
                        "img":"coffee.webp",
                        "caption":"Breakfast",

                    },
                ],
            },
    
            firstDayGoToWork2: { 
                "title": "Meeting Carmela",
                "statement": `
                    "<span class="tooltip">Bon jornu<span class="tooltiptext">Sicilian for "good morning"</span></span> <span class="tooltip">Signora<span class="tooltiptext">Sicilian for Mrs.</span></span> Costa.
                    It is nice to see you this morning," she says smiling politely to my aunt who has come to the door. Turning to me she says, "And you must be Guilia, I am Carmela Amato, Signora Russo sent me. I'm sure she told you.
                    <br><br>
                    Quickly glancing at the cheap nickel and dime clock in the kitchen, Carmela suddenly says, "Here," thrusting the clothes in her hands toward me. "Get changed quick into these if you want time to eat breakfast. It is required that all cannery workers wear the aprons and gloves, otherwise the floor director won't let you inside. I'm sorry these aren't new,
                    they used to belong to <span class="tooltip">Signora<span class="tooltiptext">Sicilian for Mrs.</span></span> Russo's daughter-in-law before she quit last month to have a baby. Don't worry,
                    they're clean though. I washed them just last night."   
                `,
                "choices": [
                    { 
                        "id": "firstDayGoToWork2",
                        "label": "Continue",
                        "moveto": "firstDayGoToWork3",
                    },
                    
                ],
                //images
                "images" : [
                    {
                        "img":"canneryrow_0.jpg",
                        "caption":"Map",

                    },
                ]
            },

            firstDayGoToWork3: { 
                "title": "Meeting Carmela",
                "statement": `
                    "<span class="tooltip">Grazie<span class="tooltiptext">Sicilian for "thank you"</span></span>---" I begin before Carmela interupts.
                    <br><br>
                    "Don't thank me, just get dressed. We have less than half an hour to get to the cannery, otherwise both of us will be late and probably lose our jobs."
                    <br><br>
                    "Yes, you had probably best hurry up Guillia," Zia Cecilia agrees. "You're already running late. Carmela, would you like to come in for some coffee quickly?"
                    <br><br>
                    "
                `,
                "choices": [
                    { 
                        "id": "firstDayGoToWork3",
                        "label": "Continue",
                        "moveto": "firstDayGoToWork4",
                    },
                    
                ]
            },
        
            
            // firstDayGoToWork2: { 
            //     "image":"",
            //     "title": "Meeting Carmela",
            //     "statement": `
                    
            //     `,
            //     "choices": [
            //         { 
            //             "id": "firstDayGoToWork2",
            //             "label": "Become Can Man (test)",
            //             "moveto": "becomeCanMan",
            //         },
                    
            //     ]
            // },
        
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
                        
                            `;
                            for(let i=0; i<state.images.length; i+=1) {
                                tileTemplate += 
                                `<div class="polaroid-container">
                                    <div>
                                        <img src="${state.images[i].img}" alt="Image not available" style="width:100%">
                                        <div class="polaroid-text">
                                            <p>${state.images[i].caption}</p>
                                        </div>
                                    </div>
                                </div>`
                            }
                            tileTemplate += `
                            
                        </div>
                        
                        <div class="button-box">`;
                            for(let i=0; i<state.choices.length; i+=1) {
                                tileTemplate += 
                                `<button id="${state.choices[i].id}" class="answer-button" ` +
                                `data-next="${state.choices[i].moveto}">${state.choices[i].label}</button>`

                            }
                        tileTemplate += `
                        </div>
                    </div>
                </div> 
                `;
            
                tileHtml += tileTemplate;   
    
            document.getElementById('text-tile').innerHTML = tileHtml;  
    
            document.querySelector('.button-box').addEventListener('click', function(e) {
                if (e.target && e.target.matches('.answer-button')) {
                    const next = e.target.dataset.next;
                    renderState(next);
                    states.push(myAdventure[next].title);
                    console.log(states);
                }
            });
            

        } // end of renderState function
        
        console.log('HERE I AM '+(Date.UTC()));
    
        let start = "theBeginning";
        renderState("theBeginning");
    
        //function nextState(e) { renderState(e.data["next"]); }
    
        //}());
      })
    