(function () {

    let myProfile = [
    
        /*{
        "Image":"princeton-campus.jpeg",
        "College":"college-stats.html", //create html file later
        "Name":"Princeton University",
        "State": " New Jersey",
        "Address": " Princeton, NJ 08544",
        "Phone": " (609) 258-3000",
        },

   
        {
        "Image":" ",
        "College":" ",
        "Name":" ",
        "Joined": " ",
        "Joined_value": " ",
        },*/
     ];

    function renderProfile (profileBoi) {
        let profileHtml = '';
        
        for (let profile of profileBoi) {

            let profileTemplate = `
                <div class="main-card">
                    <a href="${profile["College"]}"><img src="${profile["Image"]}" alt="Image not available" style="width:100%;" class="img-center">
                    <div class="profile-card">
                            <h3>${profile["Name"]}</h3>
                            <p>Address:${profile["Address"]}</p>
                            <p>Phone:${profile["Phone"]}</p></a>
                    </div>
                </div>
                `;
            profileHtml += profileTemplate;   
        }       

        document.getElementById('profile-post').innerHTML = profileHtml;  
    }    
    renderProfile(myProfile);
    
    
    var myAdventure = {
        
        theBeginning: {
            "statement": "Welcome to my game. Lets Play!",
            "background_image": "..some..image",    
            "choices": [
                { 
                    "label": "Click me",
                    "moveto": "StartPlaying"
                }
            ]
        },

        StartPlaying: { 
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
}());
