(function () {

    let journalTile = [
    
        {
        "Image":"guilia.jpeg",
        "Title":"First Wave",
        "Text":`
            The First Wave of Sicilian immigration to Monterey occured during the early 1900s before WWI. One important contribution that Sicilians brought to Monterey during this time period
            was the introduction of the <i>lampara</i> net (aka the lightning net). Introduced by Pietro Ferrante, the <i>lampara</i> net revolutionalized the fishing industry in Monterey by:
            <ol type="1">
                <li>Increasing fishing effiency and yields</li>
                <li>Economically profitable (due to an increase in fishing yields)</li>
                <li>Targeting certain fish species--- such as sardines which fed near the ocean surface</li>
            </ol>  
            As the technology in the fishing industry developed, the <i>lampara</i> net would later be used for the huge, industrialized purse seiners
            which would supply the huge amount of fish required to support Monterey's canneries.

        `,
        },
        {
            "Image":"guilia.jpeg",
            "Title":"Second Wave Wave",
            "Text":`
                However, it was the Second Wave of Sicilian immigration after WWI that provided the huge workforce necessary to 
    
            `,
            },

     ];

    function renderJournal (profileBoi) {
        let profileHtml = '';
        profileBoi.sort((a,b) => {
            if (a.Date_value < b.Date_value) { return 1; }
            if (a.Date_value > b.Date_value) { return -1; }
            return 0;
        });
        
        for (let profile of profileBoi) {
            let profileContent = '';

            let profileTemplate = `
                <div class="journal-container">
                    <div>
                        <div class="journal-text">
                            <h2>${profile["Title"]}</h2>
                            <p>${profile["Text"]}</p>
                        </div>
                        <div class="journal-images">
                            <img src="${profile["Image"]}" alt="Image not available">
                        </div>
                    </div>
                </div>
                `;
            profileHtml += profileTemplate;   
        }       

        document.getElementById('journal-tiles').innerHTML = profileHtml;  
    }    
    renderJournal(journalTile);
        
}());
