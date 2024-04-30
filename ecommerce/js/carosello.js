const URLphone =
  "https://dummyjson.com/products/category/smartphones";
const cardProdotto = document.querySelector("#cardProdotto");

function telefoni(telefono) {
  fetch(URLphone)
    .then((data) => {
      return data.json();
    })
    .then((response) => {
        const prodotti = response.products;
        console.log(prodotti);
        prodotti.forEach(prodotto => {

            let card = `
                        <div class="swiper-slide" id="cardPro">
                            <div class="card">
                                <img src="${prodotto.images[0]}" class="card-img-top" alt="${prodotto.title}">
                                <div class="card-body">
                                    <h5 class="card-title">${prodotto.title}</h5>
                                    <p class="card-text">
                                    ${prodotto.description}
                                    </p>
                                    <p class="card-text">
                                    ${prodotto.price}
                                    </p>
                                    <a href="#" class="btn btn-primary">Acquista</a>
                                </div>
                            </div>
                        </div>
                    `;
            cardProdotto.innerHTML+=card;
        });
        // console.log(response.products);
      //    console.log(response);
    //   let titolo = document.getElementById("titolo");
    //   let prezzo = document.getElementById("prezzo");
    //   let description = document.getElementById("description");
    //   let image = document.getElementById("img");
    

    //   image.innerHTML = `<img src="${response.products[1].images[1]}">`; // con lo specifico array
    //   titolo.innerHTML = `${response.products[1].title}`; // con lo specifico array
    //   prezzo.innerHTML = `${response.products[1].price}`; // con lo specifico array
    //   description.innerHTML = `${response.products[1].description}`; // con lo specifico array
      
    //   console.log(response.products[1]);

      //    setTitle(response);
    //   for (let i = 0; i < 5; i++) {
    //     cardProdotto.innerHTML = `
    //       <div class="swiper-slide">
    //       <div class="card">
    //       <div id="img" class="card-img-top"  alt="iphone"></div>
    //       <div class="card-body">
    //       <div class="card-title fs-5" id="titolo"></div>
    //       <p class="card-price" id="prezzo"></p>
    //       <p class="card-text" id="description"></p>
    //       <a href="" class="btn btn-primary"> <i class="bi bi-bag-heart-fill"></i> Add to Cart</a>
    //       </div>
    //       </div>
    //       </div>`;
    //   }
    });
    
}



telefoni(URLphone);
