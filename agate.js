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
                        "img":"postcard2.jpeg",
                        "caption":"Postcard of Pacific Avenue",
                    },
                    {
                        "img":"postcard.jpg",
                        "caption":"A postcard I found",
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
                        "img":"zia-cecilia3.jpg",
                        "caption":"Zia Cecilia & Angelo (child)",

                    },
                    {
                        "img":"bread.jpeg",
                        "caption":"Breakfast",

                    },
                ],
            },
    
            firstDayGoToWork2: { 
                "title": "",
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
                        "caption":"Me<br>Salinas, 1927",

                    },
                    {
                        "img":"carmela.jpeg",
                        "caption":"Carmela",

                    },
                ],
            },

            firstDayGoToWork3: { 
                "title": "",
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
                "title": "Going to Work",
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
                "title": "Arriving at San Carlos",
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
                        "img":"sardines2.jpg",
                        "caption":"Sardines",

                    },
                ],
            },
            //work hard or talk to other girls
            workTalkDecision: { 
                "title": "Two hours later. . . ",
                "statement": `
                    It does not take long for me to become sick of cleaning the fish. Literally. The overwhelming smell of fish and pure 
                    monotomy of slicing and gutting them makes me sick. 
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
            // work hard in cannery
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
                    Grouped together so solidly and voices raised high in the Sicilian language, 
                    we Sicilian girls appear to be the domineering group of workers at the cannery. 
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
                "title": "",
                "statement": `
                    However, it is clear that this group is Sicilans-only. As the rest of the cannery workers file past us, all of girls
                    maintain a cool demeanor, remaining distant even as a group of Spanish girls cheerfully wave goodbye. 
                    <br><br>
                    Vita, Carmela's cousin, even goes so far as to say (in Sicilian), "Ugh, those Spanish girls are so annoying. Always trying to talk to us so we'll join 
                    that silly union of theirs."
                    <br><br>
                    I am shocked by Vita's rudeness and I want to talk back, but not only did I not understand Vita's mentions of "unions," 
                    the girls' demeanor has made it clear that interracial relationships do not exist here in Monterey. Or if they do, Sicilians don't participate in them.
                    `,
                "choices": [
                    { 
                        "id": "firstDayWorkHard4",
                        "label": "Continue",
                        "moveto": "decisionQuietAskSpanish",
                    },
                    { 
                        "id": "firstDayWorkHard4",
                        "label": "Back",
                        "moveto": "firstDayWorkHard3",
                    },
                    
            ],
                "images" : [
                    {
                        "img":"chinese-cannery-row.jpeg",
                        "caption":"Chinese neighborhood",

                    },
                    {
                        "img":"fishermans-wharf2.jpg",
                        "caption":"Fisherman's Wharf",

                    },
                ],
            },
            //decision
            decisionQuietAskSpanish: { 
                "title": "Dinnertime",
                "statement": `
                    After waving goodbye to Carmela, I tiredly trudge inside the house to help Zia Cecilia cook dinner and tend the children. 
                    <br><br>
                    It is easy to understand why Zia Cecilia and <span class="tooltip">Zio<span class="tooltiptext">Sicilian for uncle</span></span> Ignazio had been
                    so eager to take me in. With eight children and another on the way, it must be impossible to maintain a household without external help and Zio away 
                    fishing for most of the year. 
                    <br><br>
                    However, although I know I am supposed to be good since I am living on the generosity of relatives, as we sit down to eat, I cannot help but remember how Vita scorned the Spanish girls at work today.
                    <br><br>
                    I want to ask Zia Cecilia what a union is and why we Sicilians keep to ourselves, but as her guest, I know it would be an affront to her hospitality and perhaps downright rude to
                    question the community's cultural decisions. 
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
                        "moveto": "firstDayQuiet1",
                    },
                    
            ],
                "images" : [
                    {
                        "img":"zia-cecilia2.jpg",
                        "caption":"Zio Ignazio & Zia Cecilia with Angelo",

                    },
                    {
                        "img":"fishermans-wharf.jpg",
                        "caption":"Fishing shacks",

                    },
                    
                ],
            },
            //don't ask about spanish girls
            firstDayQuiet1: { 
                "title": "Keeping Quiet",
                "statement": `
                    Biting my lip, I keep my mouth shut, knowing that I cannot afford to afford to affront my aunt so early into my stay.
                    <br><br>
                    The other girls made it clear we do not associate with non-Sicilian people and Zia Cecilia would likely be insulted if 
                    I began expressing curiosity towards the other ethnic clans.

                `,
                "choices": [
                    { 
                        "id": "firstDayQuiet1",
                        "label": "Continue",
                        "moveto": "firstDayQuiet2",
                    },    
            ],
                "images" : [
                    {
                        "img":"pasta-dinner.jpeg",
                        "caption":"Dinner",

                    },
                    {
                        "img":"postcard3.jpeg",
                        "caption":"Postcard of Monterey",

                    },
                ],
            },
            firstDayQuiet2: { 
                "title": "Dinner Conversation",
                "statement": `
                    "You would not believe what Signora Russo told me today, <span class="tooltip">nipote<span class="tooltiptext">Sicilian for niece<br>Pronounced "nee-poh-tay".</span></span>," begins Zia Cecilia as she spoonfeeds one of her children.
                    <br><br>
                    "Today, at the Rosary Club, Signora Messina began talking about how her husband wants her to join the <a href="" class="discover">AFL</a>--- that silly union all the men are talking about these days.
                    Apparently he says all the Spanish women support their husbands in the <a href="" class="discover">CIO</a> these days and told
                    Signora Messina it makes him and the other Sicilian men look bad! Can believe it?! The audacity of men these days!"

                `,
                "choices": [
                    { 
                        "id": "firstDayQuiet2",
                        "label": "Continue",
                        "moveto": "firstDayQuiet3",
                    },
                    { 
                        "id": "firstDayQuiet2",
                        "label": "Back",
                        "moveto": "firstDayQuiet1",
                    },
                    
            ],
                "images" : [
                    {
                        "img":"afl.jpg",
                        "caption":"AFL",

                    },
                    {
                        "img":"afl2.jpeg",
                        "caption":"AFL flyer",

                    },
                ],
            },
            firstDayQuiet3: { 
                "title": "",
                "statement": `
                    "And then Signora Russo chimed in and do you know she told us? She said her sister-in-laws nephew went to one of those meetings and told her he saw Spanish girls actually <i>speak</i>! 
                    <br><br>
                    "Instead of staying home with their families like good girls, they're publicly speaking in front of a group of men who don't care about a thing besides a glimpse down their shirts when they lean over! 
                    <br><br>
                    "It was all so ridiculous that I couldn't help but say to the ladies---" Zia Cecilia says, lowering her voice and darting her eyes towards the children to ensure they aren't paying attention.
                    "I believe some of these girls must be <span class="tooltip">puttanas<span class="tooltiptext">Sicilian for prostitute. <br> Pronounced "poot-tah-nahs"</span></span>. After all, why else 
                    would any woman do such a crazy thing?"
                `,
                "choices": [
                    { 
                        "id": "firstDayQuiet3",
                        "label": "Continue",
                        "moveto": "firstDayQuiet4",
                    },
                    { 
                        "id": "firstDayQuiet3",
                        "label": "Back",
                        "moveto": "firstDayQuiet2",
                    },
                    
            ],
                "images" : [
                    {
                        "img":"family3.jpg",
                        "caption":"Neighborhood family",

                    },  
                    {
                        "img":"afl3.jpeg",
                        "caption":"AFL badge",

                    },  
                ],
            },
            firstDayQuiet4: { 
                "title": "",
                "statement": `
                    Frowning, I am about to interupt when Zia Cecilia fixes me with a sharp eye, saying, "Remember that, <i>nipote</i>. Those girls are all <i>puttanas</i>, no-good people that you don't to associate with.
                    It's why we Sicilians stick together and don't associate with these Americanized girls who think they're entitled to everything. 
                    <br><br>
                    "In America, these union girls are just plain lazy. They want to work less hours, they want higher pay, they even want the companies to give them time 
                    off to have children! Can you believe this?"
                `,
                "choices": [
                    { 
                        "id": "firstDayQuiet4",
                        "label": "Continue",
                        "moveto": "firstDayQuiet5",
                    },
                    { 
                        "id": "firstDayQuiet4",
                        "label": "Back",
                        "moveto": "firstDayQuiet3",
                    },
                    
            ],
                "images" : [
                    {
                        "img":"envelope.jpeg",
                        "caption":"Envelope",

                    },
                    {
                        "img":"postcard4.jpeg",
                        "caption":"Monterey postcard",

                    },
                ],
            },
            firstDayQuiet5: { 
                "title": "",
                "statement": `
                    "In the old country we would have thanked God fasting to have the opportunity to make extra money for our families like you. But what do you young people do? You sniff!
                    <br><br>
                    "This country spoils its people, that's what. Do ever wonder why it is us Sicilians who own the property, the boats, the canneries? It is because we work hard and keep our head down.
                    We don't complain, we don't get into trouble, but we support and help one another--- and THAT is what brings you success, my dear."
                `,
                "choices": [
                    { 
                        "id": "firstDayQuiet5",
                        "label": "Continue",
                        "moveto": "firstDayGoToBed",
                    },
                    { 
                        "id": "firstDayQuiet5",
                        "label": "Back",
                        "moveto": "firstDayQuiet4",
                    },
                    
            ],
                "images" : [
                    {
                        "img":"family.jpeg",
                        "caption":"Family portrait<br> Sicily, 1914",

                    },
                    {
                        "img":"family2.jpg",
                        "caption":"Neighborhood familes",

                    },
                ],
            },
            //ask zia about spanish girls
            firstDayAskSpanish1: { 
                "title": "Ask Zia Cecilia",
                "statement": `
                    Gathering my courage, I ask, "Zia . . . Why do we ignore the other girls?"
                    <br><br>
                    "What do you mean, <span class="tooltip">nipote<span class="tooltiptext">Sicilian for niece<br>Pronounced "nee-poh-tay".</span></span>?" she says absentmindedly, spoonfeeding Angleo
                    some legumes.
                    <br><br>
                    "I mean what I say. I don't mean to criticize, but it simply appeared that many of the girls were ignoring  . . . well . . . everybody else. Vita Greco even 
                    went so far as to insult one of the Spanish girls for being in a union."
                `,
                "choices": [
                    { 
                        "id": "firstDayAskSpanish1",
                        "label": "Continue",
                        "moveto": "firstDayAskSpanish2",
                    },
            ],
                "images" : [
                    {
                        "img":"pasta-dinner.jpeg",
                        "caption":"Dinner",

                    },
                    {
                        "img":"envelope.jpeg",
                        "caption":"Postcard envelope",

                    },
                ],
            },
            firstDayAskSpanish2: { 
                "title": "",
                "statement": `
                "Oh, well that's because they're Spanish girls. They're always parading themselves around like <span class="tooltip">puttanas<span class="tooltiptext">Sicilian for prostitute. <br> Pronounced "poot-tah-nahs"</span></span>.
                <br><br>
                "Really, it's shameful the way they act. All of those non-Sicilian girls, actually. They only join those silly union meetings because they want to get close to our men. After spending several hours shouting about all that nonsense of 'fair labor practices' and whatnot,
                they tend to become very vulnerable."
                <br><br>
                `,
                "choices": [
                    { 
                        "id": "firstDayAskSpanish2",
                        "label": "Continue",
                        "moveto": "firstDayAskSpanish3",
                    },
                    { 
                        "id": "firstDayAskSpanish2",
                        "label": "Back",
                        "moveto": "firstDayAskSpanish1",
                    },
                    
            ],
                "images" : [
                    {
                        "img":"afl.jpg",
                        "caption":"AFL Union",

                    },
                    {
                        "img":"postcard4.jpeg",
                        "caption":"Monterey postcard",

                    },
                ],
            },
            firstDayAskSpanish3: { 
                "title": "",
                "statement": `
                    "Anyhow, I imagine Vita spoke like that because of what happened with her brother. It is understandable that Greco's the are still bitter about that.
                    <br><br>
                    "Do you know, one of those Spanish girls tried to ensnare the poor just last year? A Spanish-Sicilian marriage! Can you imagine that?
                    Just think about what their children would look like . . . " Zia said with a shudder. "Ugh." 
                    <br><br>
                    "Thankfully, the family managed to talk him out of that. After all, if it had gone through they would have had to disown him, even though he is the family's only son.
                    <br><br>
                    "Of course, the girl made a whole scene of it. Crying in the streets and begging him not to leave her. <span class="tooltip">Comu t'imbarazzant<span class="tooltiptext">"How embarassing!"<br>Pronounced "KOH-moo tee-mbah-rah-TZAHN-tee"</span></span>!
                    I felt just awful for his poor mother!"

                `,
                "choices": [
                    { 
                        "id": "firstDayAskSpanish3",
                        "label": "Continue",
                        "moveto": "firstDayGoToBed",
                    },
                    { 
                        "id": "firstDayAskSpanish3",
                        "label": "Back",
                        "moveto": "firstDayAskSpanish2",
                    },
                    
            ],
                "images" : [
                    {
                        "img":"family2.jpg",
                        "caption":"Greco family",

                    },
                    {
                        "img":"family.jpeg",
                        "caption":"Costa Family",

                    },
                ],
            },
            firstDayGoToBed: { 
                "title": "Finish Conversation",
                "statement": `
                    Fixing me with another stare, Zia pauses a moment before finishing, "I hope this will be a lesson to you, Guilia.
                    I do not say these things because I mean, but because they are true and I do not want to see you going down the wrong path."
                    <br><br>
                    "Now, let's hear no more talk of these <i>other</i> girls and help clean up dinner," says Zia Cecilia, rising from the table, little Angelo on her hip.
                    <br><br>
                    "Rosa, Mary, give Guilia a hand. I will put the children to bed. Goodnight, you three."
                    
                `,
                //figure out where to go next
                "choices": [
                    { 
                        "id": "firstDayGoToBed",
                        "label": "Continue",
                        "moveto": "firstDayAskSpanish3",
                    },
                    // { 
                    //     "id": "firstDayGoToBed",
                    //     "label": "Back",
                    //     "moveto": "firstDayAskSpanish3",
                    // },
                    
            ],
                "images" : [
                    {
                        "img":"sicilian-girls2.webp",
                        "caption":"Rosa <br> Zia's daughter <br> 13 years",

                    },  
                    {
                        "img":"sicilian-girls3.jpg",
                        "caption":"Mary <br> Zia's daughter <br>9 years",

                    },  
                ],
            },
            // slack off in factory
            firstDaySlack1: { 
                "title": "Speaking With Carmela",
                "statement": `      
                    "Carmela," I say, "When will the men return from Alaska? Zia Cecillia said Zio just left a couple of weeks ago and---"
                    <br><br>
                    "The men will return in late October or November. Whenever the fishing season ends," Carmela responds shortly without looking
                    up from her work, clearly indicating she does not want to speak any further.
                `,
                "choices": [
                    { 
                        "id": "firstDaySlack1",
                        "label": "Continue",
                        "moveto": "firstDaySlack2",
                    },
                    { 
                        "id": "firstDayAskSpanish2",
                        "label": "Back",
                        "moveto": "firstDayAskSpanish1",
                    },
                    
                ],
                "images" : [
                    {
                        "img":"sardines.jpeg",
                        "caption":"Sardines",

                    },
                    {
                        "img":"cannery-workers4.jpeg",
                        "caption":"More ladies working",

                    },
                ],
            },
            firstDaySlack2: { 
                "title": "Speaking With Vita",
                "statement": `      
                    Undeterred, looking around, I recognize Carmela's cousin, Vita.
                    <br><br>
                    "Vita!" I begin. "Monterey is such a little town. Is there anything to do around here that isn't . . . fishy?"
                    <br><br>
                    I hope to get at least a couple laughs, but instead, Vita lashes out exclaiming,
                    "Guilia, hush! Focus on your work! By mocking your Sicilian roots, you degrade yourself and 
                    the rest of your community. You are put yourself on the same level as those Spanish and Mexican girls who do not 
                    appreciate the art of fishing, who only come here for the money."
                `,
                "choices": [
                    { 
                        "id": "firstDaySlack2",
                        "label": "Continue",
                        "moveto": "hushTalkLatinaDecision",
                    },
                    { 
                        "id": "firstDaySlack2",
                        "label": "Back",
                        "moveto": "firstDaySlack1",
                    },
                    
                ],
                "images" : [
                    {
                        "img":"vita.jpg",
                        "caption":"Vita Greco",

                    },
                    {
                        "img":"fish-sort.jpeg",
                        "caption":"Vita (Carmela's cousin) sorting fish",

                    },
                    
                ],
            },
            //hush or talk to latina girl
            hushTalkLatinaDecision: { 
                "title": "",
                "statement": `    
                    But I AM only here for the money, I think confusedly, looking at the other Sicilian girls around me who are determinedly refusing to make
                    eye contact with me for fear of association.
                    <br><br>
                    Irritated with Vita's obnoxious behavior, I catch the eye of a Latina girl sitting across from me, her smiling eyes an invitation for conversation.
                    <br><br>
                    I know it would only get me in trouble to talk some more, especially with a non-Sicilian girl, and it would most certainly be reported back to Zia Cecilia, 
                    but the idea of ignoring Vita's orders is tempting.
                `,
                "choices": [
                    { 
                        "id": "decisionHushTalkLatina",
                        "label": "Talk to her",
                        "moveto": "firstDaytalkToLatina1",
                    },
                    { 
                        "id": "decisionHushTalkLatina",
                        "label": "Hush",
                        "moveto": "firstDayHush1",
                    },
                    
                ],
                "images" : [
                    {
                        "img":"sardines2.jpg",
                        "caption":"More sardines",

                    },
                    {
                        "img":"sardine-can.jpeg",
                        "caption":"Sardine can",

                    },
                ],
            },
            firstDayHush1: { 
                "title": "Hushing Up",
                "statement": `      
                    I shake my head, turning away from the girl's gaze and return to gutting the fish. 
                    <br><br>
                    As a guest in my aunt's house, it is not my place to antagonize her neighbors. Not only would it humiliate her, but most certainly lower both her 
                    social standing and mine for being such a direspectful niece.
                `,
                "choices": [
                    { 
                        "id": "firstDayHush1",
                        "label": "Continue",
                        "moveto": "firstDayHush2",
                    },
                    
                ],
                "images" : [
                    {
                        "img":"postcard3.jpeg",
                        "caption":"Postcard",

                    },
                    {
                        "img":"postcard4.jpeg",
                        "caption":"Postcard",

                    },
                ],
            },
            firstDayHush2: { 
                "title": "After Work",
                "statement": `      
                    The rest of the day is long and hard, my fingers growing numb in the cold and the bottom of my skirts are damp from the water running on the floor. 
                    <br><br>
                    My legs ache from standing for so long and as I stagger out of the cannery into the daylight with the other Sicilian girls, I almost miss the days when 
                    I worked in the fields. At least I wasn't freezing and everybody wasn't so pretentious.
                `,
                "choices": [
                    { 
                        "id": "firstDayHush2",
                        "label": "Continue",
                        "moveto": "firstDayHush3",
                    },
                    { 
                        "id": "firstDayHush2",
                        "label": "Back",
                        "moveto": "firstDaySlack1",
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
            firstDayHush3: { 
                "title": "",
                "statement": ` 
                    The walk home feels much longer than the way here. After being humiliated by Vita earlier today, all the girls although still friends, remain somewhat 
                    distant, as if I were contaminated by some disease they don't want to catch.
                    <br><br>
                    It is as if I'm one of the <i>other</i> girls--- the non-Sicilians. I'm treated kindly, but without respect.
                    <br><br>
                    When I get home the situation is not much better since Zia Cecilia was out all day and hasn't finished dinner. After helping finish the meal and tending the children,
                    I am so hungry and exhausted that all I can do is tiredly scarf down my food while I listen to Zia Cecilia ramble.
                `,
                "choices": [
                    { 
                        "id": "firstDayHush3",
                        "label": "Continue",
                        "moveto": "firstDayQuiet2",
                    },
                    
                    
                ],
                "images" : [
                    {
                        "img":"horses-hauling-lumber.webp",
                        "caption":"Horses hauling lumber",

                    },
                    {
                        "img":"fishermans-wharf2.jpg",
                        "caption":"Fisherman's Wharf",

                    },
                ],
            },
            // firstDayHush1: { 
            //     "title": "Speaking With Vita",
            //     "statement": `      
            //     `,
            //     "choices": [
            //         { 
            //             "id": "firstDayHush2",
            //             "label": "Continue",
            //             "moveto": "firstDaySlack3",
            //         },
            //         { 
            //             "id": "firstDayHush2",
            //             "label": "Back",
            //             "moveto": "firstDaySlack1",
            //         },
                    
            //     ],
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
        let start = "hushTalkLatinaDecision";
        renderState("hushTalkLatinaDecision");
    
        //function nextState(e) { renderState(e.data["next"]); }
    
        //}());
      })
    