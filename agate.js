document.addEventListener('DOMContentLoaded', (event) => {
//(function () {

    var myAdventure = {
        
        theBeginning: {
            //"background_image": "chihuahua.jpg", 
            "title": "Before the Adventure",
            "statement": `
            <i><span style="float:right; font-size:16px;">August 4, 1927</span>
            <br><br>
            Dear diary,
            <br><br>
            This afternoon, I arrived in Monterey to live with zia Cecilia and <b>UNCLE SOMEBODY</b>'s family. I must say, after living in Salinas for so long I am very surprised
            by the bustle of this little town. The canneries seem to be the heart of this town and everybody is driven to it. Immigrants from all across the world seem to live here,
            accents and languages I've never heard just casually calling out across the streets.
            <br><br>
            I suppose part of the reason I am here myself is because of the canneries. Zia Cecilia's friend, managed to arrange a job for me at <a href="" class="discover">San Carlos</a>. 
            and tomorrow is my first day. It is said the cannery work is very unpredicatble and the <a href="" class="discover">cannery whistles</a> could call on you at any time of the day or night. 
            That is why I am going to bed so early tonight. Not only am I exhausted by my travels and the events of the day, but who knows when I will ahve to go to work?
            <br><br>
            Sincerely,
            <br>
            Giuliana Peretti 
            </i>
            `, 
            "choices": [
                { 
                    "id": "theBeginning",
                    "label": "Continue",
                    "moveto": "movingToMonterey1"
                }
            ]
        },

        movingToMonterey1: { 
            //"background_image": "chihuahua.jpg", 
            "title": "Moving to Monterey",
            "statement": 
                `The train ride from San Francisco to Monterey is exhausting for most the ride.  I sleep through most of it, only waking up just before we arrive. 
                I am surprised to notice the <a href class="discover">similarities between the landscape and that of my hometown in Sicily</a>. In my drowsy state,
                seeing the scraggling cliffs overhanging the rugged coast, I can almost believe I have been transported back home to <span class="tooltip">Sciacca<span class="tooltiptext">Fishing village in Southern Sicily</span></span> 
                and Mamma and <span class="tooltip">Nonna <span class="tooltiptext">Sicilian for grandmother.<br> Pronounced "NOHN-nah"</span></span> are coming to fetch me from the station.
                <br><br>
                However, stepping off the train and onto the platform immediantly dispels this illusion. Although still several blocks away from the wharfs, the rancid smell of fish immediantly hits my nose. Fish! The smell is strong I cannot help but recoil from the window 
                scrunch my nose in distaste. Of course, I have lived along wharfs before, but never has the smell of fish been so strong.
                however, I hesistate only a moment before stepping off the platform to ask a passerby for directions. Speaking in a heavily accented Portuguese accent, he points me in the direction of <a href='' class="discover">Ocean View Avenue</a>, 
                the street <span class="tooltip">zia<span class="tooltiptext">Sicilian for maternal aunt</span></span>  Cecilia told me she lived on. 
                <br><br>
                Hurrying down the streets with my small carpetbag clutched closely to my chest, it is hard for me not to feel overwhelmed by the bustle of traffic that swarms around me.
                Languages I don't recognize are yelled across the street and people of different colors and class rush down the streets, all dressed in different of ranges of shabby to well-to-do working class.
                Being in a hurry myself, I let myself be swept along with the tide, only pausing briefly to read the street signs.
                <br><br>
                As I near the wharfs I begin the spot Monterey's famous canneries, huge concrete buildings that loom over the sidewalks that cast on a shadow on those rushing about below. Out at sea, one can see humongous boats and some sort of wooden contraption floating atop the water. 
                Normally, I would stop to take a longer look, but I am in a hurry becase the train arrived late and zia Cecilia expected me over a half hour ago. I do not want to appear rude so soon as her guest, so I tear my eyes away and hurry down the street.
                <br><br>
                After much double-checking, I finally find the address, walk up to the door and knock. Almost immediantly the door is flung open by a dark-haired woman who I assume to be my aunt. She is a pretty woman, although her features 
                are a little to sharp and thin to be healthy. There are dark circles under her eyes and she looks vaguely harassed. However, at my presence her face immediantly breaks into a smile and before she wraps me up in a hug,
                kissing both my cheeks before waving me inside.
                <br><br>
            `,
            "choices": [
                { 
                    "label": "Continue",
                    "moveto": "movingToMonterey2",
                },
                
            ]
        },

        movingToMonterey2: { 
           // "background_image": "chihuahua.jpg", 
            "title": "",
            "statement": `
                <br><br>
                "<span class="tooltip">Niputa! <span class="tooltiptext">Sicilian for niece.<br> Pronounced "ni-POO-ta"</span></span> Come in, come in! Guilia, how good to see you! We have been waiting for you! Come inside!"
                <br><br>
                Hurrying me into the kitchen, I am expecting a to be given a list of chores or tasks to do. Therefore I am surprised by the crowd of ladies who immediantly arise from the table to swarm me.
                <br><br>
                "Guilia!" they all cry and I am overwhelmed by the dozens of hugs and kisses I am showered in. Ladies I have never met claiming it has been too long, they have been expecting me and look! They have baked a pie for me! All beg me to join their Rosary club, their embroidery club, that I must join them for a game of cards sometime this week.
                Pleased to be so quickly accepted, I recklessly accept left and right which gaining pleased smiles and hand shakes.
                <br><br>
                After the fuss dies down, zia Cecilia takes the liberty of formally introducing me to the ladies.
                <br><br>
                "Guilia will be living with <span class="tooltip">mio marito<span class="tooltiptext">Sicilian for "my husband"<br>Pronounced "MEE-oh MAH-ree-toh"</span></span>, Ignazio and for some time. You you know about here poor father of course, and Ignazio and I are happy to have her . . . "
                <br><br>
                "Yes, yes," agrees a stout, imperious looking woman at the head of the table. "I know just what you mean. Why, I have a niece just about your age named Carmela who moved in with my family from Salinas. You see, her father died in a tractor accident last year and with all of the children, her mother was so desperate she begged me to take her in. Of course, I agreed to lend her my charity as a good Christian, and it was a good thing I did. Carmen is the most polite and well behaved girl you will ever meet. Nothing like these loose American girls who are always around running around with all sorts of men and like trash. Not only that, she is a most efficient worker at <a href="" class="discover">San Carlos</a>. All the time <span class="tooltip">Signora<span class="tooltiptext">Sicilian for "Mrs."<br>Pronounced "see-NYOH-rah</span></span> Palermo talks about about how fast she works---"
                <br><br>
                "Signora Russo, I hate to interupt but would you like some coffee?" hastily asks a younger woman, quickly rising from the table.
                <br><br>
                "What was that Rosa? Oh yes, coffee would be nice. Make it strong please," she said, and distracted by the diversion, the other ladies relievedly plunged back into a topic of conversation they could all take part of.
                <br><br>
                As the other ladies continue to chatter, you cannot help but glance sideways Signora Russo. Despite being a bit of a prattler, it is clear she is the matriarch of the group and likely knows many people. You know you need to get a job as soon as possible to help pay for your stay and if Signora Russo has connections (as many other ladies in this room likely do) this would be a good opportunity to find work. However, you also don't want to seem too much of an opportunist in front of these ladies because something tells you that what is said in the room is likely doesn't stay in it.
                `,
            "choices": [
                { 
                    "label": "Ask ladies about how to obtain a job in the canneries",
                    "moveto": "askAboutJob1",
                },
                { 
                    "label": "Stay quiet and politely listen to the gossip",
                    "moveto": "listenToGossip"
                },
                
            ]
        },
        
        askAboutJob1: { 
            //"background_image": "chihuahua.jpg", 
            "title": "Inquiring For a Job With Signora Russo",
            "statement": `
                Waiting for the appropriate lull in the conversation, you find your chance after Signora Grillo finishes lacking her list of complaints about her lazy son.
                <br><br>
                "<span class="tooltip">Scusa, mi permi?<span class="tooltiptext">"Excuse me, may I interupt?</span></span> I hate to be so forward, especially since I am so new a member within your group, but Signora Russo, earlier you mentioned a niece who worked in a canning factory? I wanted to inquire as how she managed to acquire the job so quickly."
                <br><br>
                "You want to work? Oh, it is already arranged. After it was agreed you would move in, your aunt, Signora Marino, told me that you would likely be working in the canneries. 
                Of course, I figured it be best you work at the San Carlos Canning Company, like my Carmela. After all, it is owned by our own fellow Sicilians and it is our duty to help promote and support the fishing culture of our homeland.
                Now, it was all very simple because my sister-in-law has an aunt who is best friends with Signora Palermo, the floor director. Signora Palermo's husband is friends with Pietro Ferrante who is the company founder 
                and inventor of the <a href="" class="discover">lampara net</a>, quite a genius of a man, you know. I simply asked Signora Palermo to put in a kind word for you. <span class="tooltip">Signor<span class="tooltiptext">Sicilian for "Mr."</span></span> Ferrante
                was perfectly happy to hire you once he heard of your family's terrible circumstances. He said you could come to work as soon as you arrived  in Monterey, so long as I informed Signora Palermo to make the nessary adjustments. Come to think of it, I suppose I should do that right now . . . Rosa? Could you find my nephew Giorgio and properly dispatch him to Signora Ferrante's home in <a href="" class="discovery">Boat Owner's Hill</a>	. . . ?"
                <br><br>
                "Oh . . . <span class="tooltip">grazie<span class="tooltiptext">Sicilian for "thank you"</span></span> Signora Russo," you say, vaguely irritated by her meddling tone. It is on the tip of your tongue to say something snippy but you manage to bite it back and smile. It would be an affront to zia Cecilia if you were rude to one of her guests, especially so early into your stay.

               `,
            "choices": [
                { 
                    "label": "Continue",
                    "moveto": "askAboutJob2",
                },
                
            ]
        },

        askAboutJob2: { 
            //"background_image": "chihuahua.jpg", 
            "title": "",
            "statement": `
            The remainder of the afternoon and evening passes in a similar fashion. The ladies spend most of the their time gossiping about other ladies not in attendance, about how their daughters and sons are becoming so American, how they must marry another Sicilian if the family culture is to survive
            `,
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

        listenToGossip: { 
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

        // becomeCanMan: { 
        //     //"background_image": "chihuahua.jpg", 
        //     "title": "Cannery Worker",
        //     "statement": "While undesirable, the family must eat. The hours and conditions are terrible, do you dare complain?",
        //     "choices": [
        //         { 
        //             "label": "Complain to boss",
        //             "moveto": "complainToBoss",
        //         },
        //         {
        //             "label": "No, you cannot lose your job",
        //             "moveto": "ignoreProblems",
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
