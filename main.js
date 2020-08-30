// Main Variables

let theInput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");


getButton.onclick = function (){
    getRepos();
};

//Get Repos Function
function getRepos() {

    if( theInput.value =="" ){ // If Value is Empty

        reposData.innerHTML = "<span> Please Write Github Username </span>";

      //  console.log('Value Can not Be ');

    }else{

            fetch(`https://api.github.com/users/${theInput.value}/repos`)

            .then(response => response.json())

            .then((repositories) => {

                // Empty The Container
                reposData.innerHTML='';

                //Loop On Repositories
                repositories.forEach(repo => {

                    //Create The Main Div Element
                    let mainDiv = document.createElement("div");

                    //Create Repo Name Text
                    let repoName = document.createTextNode(repo.name);
                    
                    //Append The Text To Main Div
                    mainDiv.appendChild(repoName);
                    
                    // Create Repo URL
                    let theUrl = document.createElement('a');

                    // Create Repo Url Text
                    let theUrlText = document.createTextNode("Visit");

                    // Append The Url Text To Anchor Tag
                    theUrl.appendChild(theUrlText);

                    // Add The Hypertext Referance "href"
                    theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;

                    // Set Attribute Blank
                    theUrl.setAttribute('target' ,'_blank');

                    //Append Url Anchor to Main Div
                    mainDiv.appendChild(theUrl);

                    // Create Stars Count Span
                    let StarsSpan = document.createElement("span");

                    // Create The Stars Count Teaxt
                    let starsText = document.createTextNode(`Stars ${repo.stargazers_count}`);

                    // Add Stars Count To Stars Span
                    StarsSpan.appendChild(starsText);

                    // Append Stars Count Span To Main div
                    mainDiv.appendChild(StarsSpan);

                    // Add Class on Main Div
                    mainDiv.className = 'repo-box';

                    //Append Tha main Div To container
                    reposData.appendChild(mainDiv);
                    
                });
        });       
    }
}