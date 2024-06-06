
document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code here
    
// Sample player data (replace with actual data)
const players = [
    {
        name: "ONS JABEUR",
        image: "./players/ons.jpg",
        info: "Tunisian professional tennis player known for being the first Arab woman to win a WTA singles title. In 2021, she became the first Arab tennis player to reach the top 10 in either ATP or WTA rankings history. Her tennis fame has led her to accumulate more than 1.3 million followers on Instagram, where she posts primarily career-oriented content. ",
        socialMedia: {
            FamousBirthday: "https://www.famousbirthdays.com/people/ons-jabeur.html",
            facebook: "https://www.instagram.com/Ons.Jabeur",
            instagram: "https://www.instagram.com/onjabeur"
        }
    },
    {
        name: "CARLOS ALCARAZ",
        image: "./players/carlos.jpg",
        info: "Tennis player who was the youngest participant in the males singles division of the 2021 Australian Open. He lost in the second round to Mikael Ymer. Also in 2021, he was the youngest winner in the history of the Madrid Open. He played Wimbledon 2021 as well and lost in the second round. He defeated Stefanos Tsitsipas at the US Open, which was a major upset given that Tsitsipas was ranked as the No. 3 world player by the ATP. His carlitosalcarazz Instagram account documents his professional achievements and competitions, amassing 4.6 million followers. ",
        socialMedia: {
            FamousBirthday: "https://www.famousbirthdays.com/people/carlos-alcaraz.html",
            facebook: "https://www.facebook.com/carlitosalcarazz",
            instagram: "https://www.instagram.com/carlitosalcarazz"
        }
    },  {
        name: "RAFAEL NADAL",
        image: "./players/rafa.jpg",
        info: "Grand slam tennis champion who has won an astounding 14 French Open titles. He won Wimbledon in 2008 and 2010, the Australian Open in 2009 and the US Open in 2010, 2013 and 2017. ",
        socialMedia: {
            FamousBirthday: "https://www.famousbirthdays.com/people/rafael-nadal.html",
            facebook: "https://www.facebook.com/Nadal",
            instagram: "https://www.instagram.com/rafaelnadal"
        }
    },
    {
        name: "ARTHUR ASHE",
        image: "./players/ashe.jpg",
        info: "Tennis star who was the first African-American member of the Davis Cup tennis team. He won three Grand Slams during his career: the 1968 US Open, the 1970 Australian Open, and the 1975 Wimbledon tournament. He contracted HIV from a blood transfusion and passed away from AIDS in 1993. ",
        socialMedia: {
            FamousBirthday: "https://www.famousbirthdays.com/people/arthur-ashe.html",
  
        }
    },  {
        name: "ROGER FEDERER",
        image: "./players/fed.jpg",
        info: "One of the all time greats in professional tennis, he set the career record for total grand slams by winning 20, including 8 Wimbledon titles. He was ranked #1 in the Association of Tennis Professionals for 237 weeks in a row from 2004 to 2008. ",
        socialMedia: {
            FamousBirthday: "https://www.famousbirthdays.com/people/roger-federer.html",
            facebook: "https://www.facebook.com/Federer",
            instagram: "https://www.instagram.com/rogerfederer"
        }
    },
    {
        name: "SERENA WILLIAMS",
        image: "./players/serena.jpg",
        info: "Tennis star who has won every major tournament and became the oldest number-one champion ever in 2013. She's captured 23 singles titles to go along with 14 doubles titles alongside her older sister Venus Williams.",
        socialMedia: {
            FamousBirthday: "https://www.famousbirthdays.com/people/serena-williams.html",
            facebook: "https://www.facebook.com/SerenaWilliams",
            instagram: "https://www.instagram.com/serenawilliams"
        }
    },  {
        name: "MALEK JAZIRI",
        image: "./players/malek.jpg",
        info: "Tunisian tennis player who has won gold at events like the 2011 Pan Arab Games. He began playing on the Tunisia Davis Cup team in 2000.",
        socialMedia: {
            FamousBirthday: "https://www.famousbirthdays.com/people/malek-jaziri.html",
            facebook: "https://www.facebook.com/Malek.jaziri.Official/",
            instagram: "https://www.instagram.com/jazirimalek/"
        }
    },
    {
        name: "ANDRE AGASSI",
        image: "./players/andre.jpg",
        info: "Former tennis star who won all four Grand Slam titles, including the Australian Open four times from 1995 to 2003. He was inducted into the International Tennis Hall of Fame in 2011. He is an active philanthropist and in 2014 remodeled a vacant University of Phoenix building into an independent school. ",
        socialMedia: {
            FamousBirthday: "https://www.famousbirthdays.com/people/andre-agassi.html",
            instagram: "https://www.instagram.com/agassi/"
        }
    },  {
        name: "ANNA KOURNIKOVA",
        image: "./players/anna.jpg",
        info: "Former tennis player who ranked as high as #8 in the world. She reached the semi-finals at Wimbledon in 1997. ",
        socialMedia: {
            FamousBirthday: "https://www.famousbirthdays.com/people/anna-kournikova.html",
            facebook: "https://www.facebook.com/Kournikova",
            instagram: "https://www.instagram.com/annakournikova"
        }
    },
    {
        name: "MARIA SHARAPOVA",
        image: "./players/maria.jpg",
        info: "Tennis star who became the first Russian to win a career Grand Slam when she defeated Sara Errani at the 2012 French Open. She won a silver medal at the 2012 Olympics, falling to Serena Williams in the final.",
        socialMedia: {
            FamousBirthday: "https://www.famousbirthdays.com/people/maria-sharapova.html",
            facebook: "https://www.facebook.com/sharapova",
            instagram: "https://www.instagram.com/mariasharapova"
        }
    },  {
        name: "ANDY MURRAY",
        image: "./players/andy.jpg",
        info: "Professional tennis champion who won the Gold Medal in the 2012 and 2016 Men's Tennis Olympics. He also won the 2012 US Open and the 2013 and 2016 Wimbledon Opens.",
        socialMedia: {
            FamousBirthday: "https://www.famousbirthdays.com/people/andy-murray.html",
            facebook: "https://facebook.com/player1",
            instagram: "https://instagram.com/player1"
        }
    },
    {
        name: "NOVAK DJOKOVIC",
        image: "./players/novak.jpg",
        info: "Serbian tennis star who achieved his first #1 world ranking in 2011 and won his first major tournament at the 2008 Australian Open. He has won 24 Grand Slam singles titles, including ten Australian Opens. ",
        socialMedia: {
            FamousBirthday: "https://www.famousbirthdays.com/people/novak-djokovic.html",
            facebook: "https://www.facebook.com/djokovicofficial",
            instagram: "https://www.instagram.com/djokernole"
        }
    },
    // Add more players as needed
];

// Function to render player list
function renderPlayers() {
    const playerList = document.getElementById("playerList");
    playerList.innerHTML = ""; // Clear previous list

    players.forEach(player => {
        const playerItem = document.createElement("div");
        playerItem.classList.add("player");

        // Creating an anchor element for the player's Instagram profile
        const playerInstagramLink = document.createElement("a");
        playerInstagramLink.href = player.socialMedia.instagram;

        // Creating the player image element
        const playerImg = document.createElement("img");
        playerImg.src = player.image;
        
        // Appending the player image to the Instagram anchor element
        playerInstagramLink.appendChild(playerImg);
        
        // Appending the Instagram anchor element to the player item
        playerItem.appendChild(playerInstagramLink);

        const playerInfo = document.createElement("div");
        playerInfo.classList.add("player-info");

        const playerName = document.createElement("h2");
        playerName.textContent = player.name;
        playerInfo.appendChild(playerName);

        const playerDesc = document.createElement("p");
        playerDesc.textContent = player.info;
        playerInfo.appendChild(playerDesc);

        const socialLinks = document.createElement("div");
        socialLinks.classList.add("social-links");
        for (const platform in player.socialMedia) {
            const link = document.createElement("a");
            link.href = player.socialMedia[platform];
            link.textContent = platform.charAt(0).toUpperCase() + platform.slice(1); // Capitalize platform name
            socialLinks.appendChild(link);
        }
        playerInfo.appendChild(socialLinks);

        playerItem.appendChild(playerInfo);
        playerList.appendChild(playerItem);
    });
}
// Function to filter players based on search input
function filterPlayers() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const filteredPlayers = players.filter(player => player.name.toLowerCase().includes(searchInput));
    renderPlayers(filteredPlayers);
}

// Initial render
renderPlayers();

// Listen for input in search bar
document.getElementById("searchInput").addEventListener("input", filterPlayers);

});

