(function () {

    let myProfile = [
    
        {
        "Image":"princeton-campus.jpeg",
        "College":"college-stats.html", //create html file later
        "Name":"Princeton University",
        "State": " New Jersey",
        "Address": " Princeton, NJ 08544",
        "Phone": " (609) 258-3000",
        },

        /*{
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
            let profileContent = '';

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
        
}());
