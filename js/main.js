let catProd = document.querySelectorAll('.product-list');
document.querySelectorAll('.shop-cat').forEach(elem => elem.addEventListener("click",(event) => {
    let clickCategory = event.target.dataset.id;
    if(clickCategory === "phones"){
        catProd[0].classList.add('d-block');
        catProd[1].classList.remove('d-block')
        catProd[2].classList.remove('d-block')
      }else if (clickCategory === "tv"){
        catProd[0].classList.remove('d-block')
        catProd[1].classList.add('d-block');
        catProd[2].classList.remove('d-block')
      } else if (clickCategory === "laptops"){
        catProd[0].classList.remove('d-block')
        catProd[1].classList.remove('d-block')
        catProd[2].classList.add('d-block');
      }
}))

let priceUl = document.querySelector('.price')
document.querySelectorAll('.product').forEach(elem => elem.addEventListener("click",(event) => {
    let prodId = event.target.dataset.prod;
    let prodItm = document.querySelectorAll('.prodprice-item') 
    if(prodId === "1"){
        prodItm[0].classList.add('d-block')
    }else if(prodId === "2"){
        prodItm[0].classList.remove('d-block')
        prodItm[1].classList.add('d-block')
    }else if(prodId === "3"){
        prodItm[1].classList.remove('d-block')
        prodItm[2].classList.add('d-block')
    }else if(prodId === "4"){
        prodItm[2].classList.remove('d-block')
        prodItm[3].classList.add('d-block')
    }else if(prodId === "5"){
        prodItm[3].classList.remove('d-block')
        prodItm[4].classList.add('d-block')
    }else if(prodId === "6"){
        prodItm[4].classList.remove('d-block')
        prodItm[5].classList.add('d-block')
    }else if(prodId === "7"){
        prodItm[5].classList.remove('d-block')
        prodItm[6].classList.add('d-block')
    }else if(prodId === "8"){
        prodItm[6].classList.remove('d-block')
        prodItm[7].classList.add('d-block')
    }else if(prodId === "9"){
        prodItm[7].classList.remove('d-block')
        prodItm[8].classList.add('d-block')
    }
}));
const btn = document.querySelectorAll('.buy-product');
btn.forEach(elem => elem.addEventListener('click', (event)=>{
    event = window.alert('Thank You for buying!')
}))