
document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code here
    
// Sample player data (replace with actual data)
const players = [
    {
        name: "Player 1",
        image: "player1.jpg",
        info: "Player 1 information...",
        socialMedia: {
            twitter: "https://twitter.com/player1",
            facebook: "https://facebook.com/player1",
            instagram: "https://instagram.com/player1"
        }
    },
    {
        name: "Player 2",
        image: "player2.jpg",
        info: "Player 2 information...",
        socialMedia: {
            twitter: "https://twitter.com/player2",
            facebook: "https://facebook.com/player2",
            instagram: "https://instagram.com/player2"
        }
    },  {
        name: "Player 3",
        image: "player1.jpg",
        info: "Player 3 information...",
        socialMedia: {
            twitter: "https://twitter.com/player1",
            facebook: "https://facebook.com/player1",
            instagram: "https://instagram.com/player1"
        }
    },
    {
        name: "Player 4",
        image: "player2.jpg",
        info: "Player 4 information...",
        socialMedia: {
            twitter: "https://twitter.com/player2",
            facebook: "https://facebook.com/player2",
            instagram: "https://instagram.com/player2"
        }
    },  {
        name: "Player 5",
        image: "player1.jpg",
        info: "Player 5 information...",
        socialMedia: {
            twitter: "https://twitter.com/player1",
            facebook: "https://facebook.com/player1",
            instagram: "https://instagram.com/player1"
        }
    },
    {
        name: "Player 6",
        image: "player2.jpg",
        info: "Player 6 information...",
        socialMedia: {
            twitter: "https://twitter.com/player2",
            facebook: "https://facebook.com/player2",
            instagram: "https://instagram.com/player2"
        }
    },  {
        name: "Player 7",
        image: "player1.jpg",
        info: "Player 7 information...",
        socialMedia: {
            twitter: "https://twitter.com/player1",
            facebook: "https://facebook.com/player1",
            instagram: "https://instagram.com/player1"
        }
    },
    {
        name: "Player 8",
        image: "player2.jpg",
        info: "Player 8 information...",
        socialMedia: {
            twitter: "https://twitter.com/player2",
            facebook: "https://facebook.com/player2",
            instagram: "https://instagram.com/player2"
        }
    },  {
        name: "Player 9",
        image: "player1.jpg",
        info: "Player 9 information...",
        socialMedia: {
            twitter: "https://twitter.com/player1",
            facebook: "https://facebook.com/player1",
            instagram: "https://instagram.com/player1"
        }
    },
    {
        name: "Player 10",
        image: "player2.jpg",
        info: "Player 10 information...",
        socialMedia: {
            twitter: "https://twitter.com/player2",
            facebook: "https://facebook.com/player2",
            instagram: "https://instagram.com/player2"
        }
    },  {
        name: "Player 11",
        image: "player1.jpg",
        info: "Player 11 information...",
        socialMedia: {
            twitter: "https://twitter.com/player1",
            facebook: "https://facebook.com/player1",
            instagram: "https://instagram.com/player1"
        }
    },
    {
        name: "Player 12",
        image: "player2.jpg",
        info: "Player 12 information...",
        socialMedia: {
            twitter: "https://twitter.com/player2",
            facebook: "https://facebook.com/player2",
            instagram: "https://instagram.com/player2"
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

        const playerImg = document.createElement("img");
        playerImg.src = player.image;
        playerItem.appendChild(playerImg);

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

