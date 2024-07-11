import { Ui } from "./ui.js";
import { Details } from "./details.js";

export class Home {
    constructor() {
        // console.log("home");
        let navButtons = document.querySelectorAll('.nav-link');
        navButtons.forEach(navButtons => {
            navButtons.addEventListener('click', (e) => {
                this.changeNavActive(e);

                const gamesCategory = e.target.getAttribute('data-category');
                // console.log(gamesCategory);
                this.getGames(gamesCategory)
            })
        });

        this.loadingScreen = document.querySelector(".loading")
        this.sectionDetalis = document.querySelector(".game-detalis")
        this.sectionData = document.getElementById("sectionData")

        this.ui = new Ui()

        //* to display data in the first time 
        this.getGames("MMORPG")
    }


    //* to change navbar active link
    changeNavActive(e) {
        document.querySelector('.navbar-nav .nav-active').classList.remove('nav-active');
        e.target.classList.add('nav-active');
    }

    //* to get Main data from api and display data 
    async getGames(catg) {
        this.loadingScreen.classList.remove("d-none");

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '4c8526872fmsh3439d9d36e7eb5fp1cab31jsn693b74604532',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        try {
            const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${catg}`, options);
            const response = await api.json();

            this.loadingScreen.classList.add("d-none");
            // console.log(response);
            this.ui.displayGamesData(response)

            //* display detalis section when user click on any card
            document.querySelectorAll(".card").forEach((card) => {
                card.addEventListener('click', () => {
                    this.sectionDetalis.classList.remove("d-none");
                    this.sectionData.classList.add("d-none");
                    new Details(card.getAttribute('data-id'))
                })
            });

        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "please Try Another Time Or Check Your Internet",
            });
        }

    }
}
