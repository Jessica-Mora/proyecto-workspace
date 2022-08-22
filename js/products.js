const pro_url ='https://japceibal.github.io/emercado-api/cats_products/101.json';


let productsArray = [];
console.log('a')

fetch(pro_url)
 .then(function(respuesta){
    console.log('da')
    return respuesta.json()
 })
 .then(function(datos){
    productsArray = datos.products;
    let divlistaproducts = document.getElementById('list-prod');

    let htmlContentToAppend = '';
    for(products of productsArray){
       htmlContentToAppend += `
       <div onclick="setCatID(${products.id})" class="list-group-item list-group-item-action cursor-active">
          <div class="row">
              <div class="col-3">
             <img src="${products.image}" alt="${products.description}" class="img-thumbnail">
              </div>
              <div class="col">
                  <div class="d-flex w-100 justify-content-between">
                      <h4 class="mb-1">${products.name} - ${products.cost} ${products.currency}</h4>
                      <small class="text-muted">${products.soldCount} vendidos</small>
                  </div>
                  <p class="mb-1">${products.description}</p>
              </div>
          </div>
      </div>
      `


    }
    divlistaproducts.innerHTML += htmlContentToAppend
 })
//<>