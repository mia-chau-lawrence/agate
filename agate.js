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
                I myself was drawn to live here with Zia Cecilia and family so I could work in the canneries. They say the Sicilian community is stronger here than anywhere else in California, and after Papa's death it 
                would be comforting to surround myself with my own people. 
                <br><br>
                Already, Signora Russo, Zia Cecilia's friend, managed to get me a job at <a href="" class="discover">San Carlos</a> through a friend and has already promised to send her niece over
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
                        "img":"postcard.jpg",
                        "caption":"A postcard I found",
                    },
                    {
                        "img":"postcard2.jpeg",
                        "caption":"Postcard of Pacific Avenue",
                    },
                    // {
                    //     "img":"horses-hauling-lumber.webp",
                    //     "caption":"Lumber wagon on Ocean View Ave",
                    // },
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
                        "label": "Continue",
                        "moveto": "firstDayGoToWork2",
                    },
                    { 
                        "id": "firstDayGoToWork1",
                        "label": "Back",
                        "moveto": "theBeginning",
                    },
                    
                ],
                "images" : [
                    {
                        "img":"zia-cecilia.jpg",
                        "caption":"Zia Cecilia",

                    },
                    {
                        "img":"bread.jpeg",
                        "caption":"Breakfast",

                    },
                ],
            },
    
            firstDayGoToWork2: { 
                "title": "Meeting Carmela",
                "statement": `
                    "<span class="tooltip">Bon jornu<span class="tooltiptext">Sicilian for "good morning"</span></span> <span class="tooltip">Signora<span class="tooltiptext">Sicilian for Mrs.</span></span> Costa.
                    It is nice to see you this morning," she says smiling politely to my aunt who has come to the door. 
                    <br><br>
                    Giving a quick glance at the clock in the kitchen before turning to me, she says warmly, "And you must be Guilia, I am Carmela Amato, Signora Russo sent me. I'm sure she told you."
                    <br><br>
                    Thrusting the clothes in her hands towards me, she continues, "I don't mean to be sharp, but get changed into these quick if you want time to eat breakfast.
                    It is required that all cannery workers wear the aprons and gloves, otherwise the floor director won't let you inside."
                `,
                "choices": [
                    { 
                        "id": "firstDayGoToWork2",
                        "label": "Continue",
                        "moveto": "firstDayGoToWork3",
                    },
                    { 
                        "id": "firstDayGoToWork2",
                        "label": "Back",
                        "moveto": "firstDayGoToWork1",
                    },
                    
                ],
                "images" : [
                    {
                        "img":"guilia1.jpg",
                        "caption":"Me (taken in Salinas a year ago)",

                    },
                    {
                        "img":"carmela.jpeg",
                        "caption":"Carmela",

                    },
                ],
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
                    "<span class="tooltip">Sì, pi favuri<span class="tooltiptext">Sicilian for "Yes please"<br>Prounced "see, pee fa-VOO-ree"</span></span>," Carmela says, clearly grateful for the invitation as she steps inside. 
                    "I would love to."
                `,
                "choices": [
                    { 
                        "id": "firstDayGoToWork3",
                        "label": "Continue",
                        "moveto": "firstDayGoToWork4",
                    },
                    { 
                        "id": "firstDayGoToWork3",
                        "label": "Back",
                        "moveto": "firstDayGoToWork2",
                    },
                    
                ],
                "images" : [
                    {
                        "img":"coffee-can.jpeg",
                        "caption":"Campbell coffee can",

                    },
                    {
                        "img":"clock.jpeg",
                        "caption":"Kitchen clock",

                    },
                ],
            },

            firstDayGoToWork4: { 
                "title": "Go to Work",
                "statement": `
                After putting on the apron and hair net, I join Carmela who is already at dining table, quickly finishing my slice of bread and coffee before Carmela practically drags me out the door, insisting we are going to be late.
                <br><br>
                Speed walking as fast as proper, we join another group of girls--- all Sicilian--- who are also on their way to the canneries. 
                <br><br>
                The girls are a jovial bunch, cheerful despite the early hour and cheerfully welcome me into the fold.
                Glad to be accepted so quickly, I happily join in the gossip and chatter as we trek towards the wharf.
                `,
                "choices": [
                    { 
                        "id": "firstDayGoToWork4",
                        "label": "Continue",
                        "moveto": "firstDayGoToWork5",
                    },
                    { 
                        "id": "firstDayGoToWork4",
                        "label": "Back",
                        "moveto": "firstDayGoToWork3",
                    },
                    
            ],
                "images" : [
                    {
                        "img":"ocean-view-ave1.jpeg",
                        "caption":"Ocean View Ave this morning",

                    },
                    {
                        "img":"atlantic-coast-fishery.jpeg",
                        "caption":"Fishery sign",

                    },
                ],
            },
        
            firstDayGoToWork5: { 
                "title": "Arriving to Work",
                "statement": `
                    However, as we enter the cannery, the jovial moods of the girls disappear as they pull on their gloves and disperse into towards their <a href="" class="discover">different stations</a>.
                    <br><br> 
                    It is cold and drafty in the cannery, making me shiver so badly that I have difficulty handing the knife Carmela hands me to <a href="" class="discover">clean the sardines</a>. The deafening roar of the
                    machinery isn't helping either and I can already feel the oncomings of a headache.
                `,
                "choices": [
                    { 
                        "id": "firstDayGoToWork5",
                        "label": "Continue",
                        "moveto": "firstDayGoToWork6",
                    },
                    { 
                        "id": "firstDayGoToWork5",
                        "label": "Back",
                        "moveto": "firstDayGoToWork4",
                    },
                    
            ],
                "images" : [
                    {
                        "img":"cannery-signs.jpg",
                        "caption":"Cannery signs along wharf",

                    },
                    {
                        "img":"cannery-workers2.jpeg",
                        "caption":"Ladies at conveyer belt",

                    },
                ],
            },

            firstDayGoToWork6: { 
                "title": "Cleaning the Fish",
                "statement": `
                    "Here," Carmela says, gesturing to sardine in front of her, the conveyer belt already beginning to carry it away. 
                    "I know it is cold but you get used to it. Right now you must be quick if you want to do clean the fish right. Are you watching me? All you have to do is slice off the head and tail like this. Then cut the stomach open and
                    squeeze out the guts. No don't keep it the fish, just let the conveyor belt carry it away to be canned."
                    <br><br>
                    "Will we have to do that later?" I ask between chattering teeth. The water on the floor is soaking into my shoes.
                    <br><br>
                    "No," clearly irritated by my question. "Haven't you ever worked in a factory before? Everyone here has one job, but you must do it fast. For example,
                    their are the people who sort the fish, there are the people who pack the cans, who roll them, who cut and clean them like us. This way we get things done quickly. 
                    Now hush, that's Signora Santoro, the floor lady, coming our way and she's very strict about staying on task." 
                `,
                "choices": [
                    { 
                        "id": "firstDayGoToWork6",
                        "label": "Continue",
                        "moveto": "workTalkDecision",
                    },
                    { 
                        "id": "firstDayGoToWork6",
                        "label": "Back",
                        "moveto": "firstDayGoToWork5",
                    },
                    
            ],
                "images" : [
                    {
                        "img":"cannery-workers1.jpg",
                        "caption":"Ladies cleaning fish",

                    },
                    {
                        "img":"signora-santoro.jpg",
                        "caption":"Signora Santoro <br> (when she was young)",

                    },
                ],
            },

            workTalkDecision: { 
                "title": "Two hours later. . . ",
                "statement": `
                    It does not take long for me to become sick of cleaning the fish. Literally. The overwhelming smell of it fish the pure 
                    monotomy of slicing and gutting the fish makes me sick. 
                    <br><br> 
                    I long to talk to some of the girls again, but turning to Carmela, she is clearly immersed in her task, fingers deftly cutting one fish after another.
                    A quick glance at the other girls shows the rest of them to be just as absorbed in their mind-numbing tasks. Other than the roar of machinery, the barking orders by Signora
                    Santoro (primarily towards the Mexican and Spanish girls), and the yelling of men working the machines, not a sound is to be heard.
                    <br><br>
                    Despite the fact that everyone seems to be concentrated on their job, I feel that I am going to scream if I have to sit in silence a moment longer. A quick glance over 
                    my shoulder shows that Sonora Santoro is far away, lurking over the shoulders of girls across the room. The coast is clear . . . should I try and start a conversation?
                `,
                "choices": [
                    { 
                        "id": "workTalkDecision",
                        "label": "Begin conversation with Carmela",
                        "moveto": "firstDaySlack1",
                    },
                    { 
                        "id": "workSlackDecision",
                        "label": "No, quietly resume work",
                        "moveto": "firstDayWorkHard1",
                    },
                    
            ],
                "images" : [
                    {
                        "img":"cannery-workers3.jpg",
                        "caption":"More women at work",

                    },
                    {
                        "img":"sardines2.jpg",
                        "caption":"Sardines",

                    },
                ],
            },
            firstDayWorkHard1: { 
                "title": "Concentrate on Work",
                "statement": `
                    Shaking my head I sigh and return to my tasks. It is clear that if anyone wanted to or was allowed to speak, they would
                    be doing so right now. After all, everyone had been very chatty on the way here.
                    <br><br>
                    Putting my head down, I swallow my boredom and reach for another sardine to gut. I came to live with Zia Cecilia so I could get work, not to play. 
                    If I am to earn my keep, I must do my job, and do it well.
                `,
                "choices": [
                    { 
                        "id": "firstDayWorkHard1",
                        "label": "Continue",
                        "moveto": "firstDayWorkHard2",
                    },
                    
            ],
                "images" : [
                    {
                        "img":"cannery-workers4.jpeg",
                        "caption":"More ladies working",

                    },
                    {
                        "img":"fish-sort.jpeg",
                        "caption":"Vita (Carmela's cousin) sorting fish",

                    },
                ],
            },
            firstDayWorkHard2: { 
                "title": "Ten Hours Later . . . ",
                "statement": `
                    When the last sardine has been sorted, cut, cleaned, and canned, we are finally done with work and allowed to go home hours after we initially left this morning.
                    <br><br>
                    All of us are exhausted, our fingers numb from spending hours in the cold. The stench of the sardines cling to our clothes and hair making passerbys wrinkle
                    their noses as we go past them.
                `,
                "choices": [
                    { 
                        "id": "firstDayWorkHard2",
                        "label": "Continue",
                        "moveto": "firstDayWorkHard3",
                    },
                    { 
                        "id": "firstDayWorkHard2",
                        "label": "Back",
                        "moveto": "firstDayWorkHard1",
                    },
                    
            ],
                "images" : [
                    {
                        "img":"sardine-can.jpeg",
                        "caption":"Sardine can",

                    },
                    {
                        "img":"sardines.jpeg",
                        "caption":"Sardines",

                    },
                ],
            },
            firstDayWorkHard3: { 
                "title": "Walking Home",
                "statement": `
                    However, the other Sicilian girls pretend to pay them no mind, putting up a brilliant pretense of being in a good mood and energetically 
                    waving one another over as they exit the cannery.  
                    <br><br>
                    Grouped together so solidly and voices raised high in the Sicilian language, we Sicilian girls appear to be the domineering group of workers at the cannery. 
                    <br><br>
                    Heads held high, many of the girls, appear to gain confidence from this fact, lending many of them the confidence to boldy respond to the hecklers making fun of our smell, "You know what you smell? You smell money!"
                `,
                "choices": [
                    { 
                        "id": "firstDayWorkHard3",
                        "label": "Continue",
                        "moveto": "firstDayWorkHard4",
                    },
                    { 
                        "id": "firstDayWorkHard3",
                        "label": "Back",
                        "moveto": "firstDayWorkHard2",
                    },
                    
            ],
                "images" : [
                    {
                        "img":"cannery-signs2.jpg",
                        "caption":"The Sea Pride Packing Corporation",

                    },
                    {
                        "img":"crowds.jpeg",
                        "caption":"Downtown",

                    },
                ],
            },
            firstDayWorkHard4: { 
                "title": "Sicilian Exclusivity",
                "statement": `
                    However, it is clear that this group is Sicilans-only. As the rest of the cannery workers file past us, all of girls
                    maintain a cool demeanor, remaining distant even as a group of Spanish girls cheerfully wave goodbye. 
                    <br><br>
                    Vita, Carmela's cousin, even says (in Sicilian), "Ugh, those Spanish girls are so annoying. Always trying to talk to us so we'll join 
                    that silly union of theirs."
                    <br><br>
                    I am shocked by Vita's rudeness, but what especially strikes me is the exclusivity of us Sicilian girls. When living with with Papa in Salinas, everyone spoke and interacted with one another. 
                    When working in the fields for hours on end every day, everyone spoke to one another in their broken English, but here it seems we only scorn and ignore those different from us.
                    <br><br>
                    I want to speak back to Vita, but not only did I not understand what she said about "unions," but it is clear that interracial relationships do not exist here in Monterey.
                    Or if they do, Sicilians don't participate in them.
                    `,
                "choices": [
                    { 
                        "id": "firstDayWorkHard4",
                        "label": "Continue",
                        "moveto": "firstDayQuietAskSpanish",
                    },
                    { 
                        "id": "firstDayWorkHard4",
                        "label": "Back",
                        "moveto": "firstDayWorkHard3",
                    },
                    
            ],
                "images" : [
                    {
                        "img":"sicilian-girls.jpg",
                        "caption":"A group of us in our Sunday best",

                    },
                    {
                        "img":"postcard3.jpeg",
                        "caption":"Another postcard of Monterey",

                    },
                ],
            },
            firstDayQuietAskSpanish: { 
                "title": "At Home",
                "statement": `
                    After waving goodbye to Carmela, I tiredly trudge inside the house to help Zia Cecilia cook dinner and tend the children. 
                    <br><br>
                    It is easy to understand why Zia Cecilia and <span class="tooltip">Zio<span class="tooltiptext">Sicilian for uncle</span></span> Ignazio had been
                    so eager to take me in. With eight children and another on the way, it must be impossible to maintain a household without external help and Zio away 
                    fishing for most of the year. 
                    <br><br>
                    However, when we are finally sitting down at the table to eat, I cannot help but remember how Vita scorned the Spanish girls at work today.
                    <br><br>
                    I want to ask Zia Cecilia why we Sicilians keep to ourselves and what a union is, but I know it would be a impolite and perhaps scandalous to do so. At the very least, it
                    would be spread throughout Zia Cecilia's social circles if I were to ask.

                `,
                "choices": [
                    { 
                        "id": "firstDayQuietAskSpanish",
                        "label": "Ask Zia Cecilia",
                        "moveto": "firstDayAskSpanish1",
                    },
                    { 
                        "id": "firstDayQuietAskSpanish",
                        "label": "Keep Quiet",
                        "moveto": "firstDayQuiet",
                    },
                    
            ],
                "images" : [
                    {
                        "img":"pasta-dinner.jpeg",
                        "caption":"Dinner",

                    },
                    {
                        "img":"zia-cecilia2.jpg",
                        "caption":"An old portrait of Zio Ignazio and Zia Cecilia with one of their children",

                    },
                ],
            },
            // firstDayWorkHard3: { 
            //     "title": "Walking Home",
            //     "statement": `
                    
            //     `,
            //     "choices": [
            //         { 
            //             "id": "firstDayGoToWork3",
            //             "label": "Continue",
            //             "moveto": "firstDayGoToWork4",
            //         },
            //         { 
            //             "id": "firstDayGoToWork3",
            //             "label": "Back",
            //             "moveto": "firstDayGoToWork2",
            //         },
                    
            // ],
            //     "images" : [
            //         {
            //             "img":"coffee.webp",
            //             "caption":"Breakfast",

            //         },
            //     ],
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
    
        //reset to theBeginning later
        let start = "workTalkDecision";
        renderState("workTalkDecision");
    
        //function nextState(e) { renderState(e.data["next"]); }
    
        //}());
      })
    