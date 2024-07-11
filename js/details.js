import { Ui } from "./ui.js";

export class Details {
    constructor(id) {
        document.getElementById("btnClose").addEventListener("click", () => {
            // console.log("dtttttt");
            document.querySelector(".game-detalis").classList.add("d-none");
            document.getElementById("sectionData").classList.remove("d-none");
        })

        this.loadingScreen = document.querySelector(".loading")

        this.getDetalis(id)

    }

    // to get detalis data from api

    async getDetalis(id) {
        this.loadingScreen.classList.remove("d-none");

        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '4c8526872fmsh3439d9d36e7eb5fp1cab31jsn693b74604532',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();

            this.loadingScreen.classList.add("d-none");

            // console.log(result);
            new Ui().displayGameDetalis(result)


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