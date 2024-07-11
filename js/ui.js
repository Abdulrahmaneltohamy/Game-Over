export class Ui {
  constructor() {
    // console.log("UI");
  }

  displayGamesData(data) {
    let cartona = ``
    for (let i = 0; i < data.length; i++) {
      cartona += `
         <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
         <div class="col">
          <div data-id="${data[i].id}" class="card bg-transparent text-white">
            <div class="card-body">
              <figure>
                <img class="object-fit-cover w-100 h-100" src="${data[i].thumbnail}" alt="">
              </figure>
              <figcaption>
                <div class="d-flex justify-content-between">
                  <h5 class="h6">${data[i].title.split(" ", 2)}</h5>
                  <span class="text-bg-primary p-1 rounded-2">Free</span>
                </div>
                <p class="text-center opacity-50">${data[i].short_description.split(" ", 7)}</p>
              </figcaption>
              <div class="card-footer d-flex justify-content-between align-align-items-center">
                <span class="badge p-1">${data[i].genre}</span>
                <span class="badge">${data[i].platform}</span>
              </div>
            </div>
          </div>
        </div>
        </div>
         `
    }
    document.getElementById("gamesData").innerHTML = cartona;
  }

  displayGameDetalis(dataDt) {

    let detailsBox = `
             <div class="col-md-4">
          <img src="${dataDt.thumbnail}" class="w-100" alt="">
        </div>
        <div class="col-md-8">
          <div>
            <h3 class="text-white">Title: <span class="h3">${dataDt.title}</span></h3>
            <p>Category: <span class="text-bg-info"> ${dataDt.genre}</span></p>
            <p>Platform: <span class="text-bg-info"> ${dataDt.platform}</span></p>
            <p>Status: <span class="text-bg-info"> ${dataDt.status}</span></p>
            <p> ${dataDt.description}</p>
            <a class="text-decoration-none btn btn-outline-warning text-white" target="_blank" href="${dataDt.game_url}">Show Game</a>
          </div>
        </div>
            `

    document.getElementById("contentDetalis").innerHTML = detailsBox;
  }
}
