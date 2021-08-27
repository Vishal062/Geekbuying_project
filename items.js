products = [
    {
        brand_name: "Moda Rapido",
        img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2378362/2018/6/9/270e0a7e-365b-4640-9433-b269c60bf3061528527188563-Moda-Rapido-Men-Maroon-Printed-Round-Neck-T-shirt-3811528527-1.jpg",
        T_shirt_name: "Printed Round Neck T-shirt",
        price: 421,
        discount: 35,
        oldprice: 649,
    },
    {
        brand_name: "HRX",
        img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2314372/2018/6/19/29e8ddfd-6f5f-43fd-8b71-dfa8ac6cef681529385860869-HRX-by-Hrithik-Roshan-Men-Charcoal-Grey-Slim-Advanced-Rapid--1.jpg",
        T_shirt_name: "Ultralyte Men Running T-shirt",
        price: 800,
        discount: 20,
        oldprice: 1000,

    },

    {
        brand_name: "Moda Rapido",
        img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2378414/2018/2/8/11518071262125-Moda-Rapido-Men-Navy-Blue-Striped-Round-Neck-T-shirt-3641518071261992-1.jpg",
        T_shirt_name: "Printed Round neck T-shirt",
        price: 421,
        discount: 35,
        oldprice: 649,

    },
    {
        brand_name: "H&M",
        img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/2/25/dcd80c17-5db3-4176-a0f3-62b74ce386df1614246409273-1.jpg",
        T_shirt_name: "Round neck T-shirt Regular fit",
        price: 350,
        discount: 50,
        oldprice: 700,

    },
];

if (JSON.parse(localStorage.getItem("products")) == null) {
  localStorage.setItem("products", JSON.stringify(products));
}

function showProducts(d) {
  let products = d;

  products.forEach(function (el) {
    appendProduct(el);
  });
}

function appendProduct(el) {
  let catalogue = document.getElementById("products-right");

  let div = document.createElement("div");

  // console.log(el);

  div.addEventListener("click", function () {
    localStorage.setItem("clickedProduct", JSON.stringify(el));
  });

  div.innerHTML = `<a class="each-product" href="moda.html"
              ><div>
                <img
                  src= ${el.img}
                  alt=""
                />
                <div class="brand">${el.brand_name}</div>
                <div class="name">${el.T_shirt_name}</div>
                <div class="price">
                 Rs. ${Math.ceil(
                   (el.oldprice * (100 - el.discount)) / 100
                 )} <span class="line-through">Rs. ${el.oldprice}</span>
                  <span class="discount">(${el.discount}% OFF)</span>
                </div>
              </div></a
            >`;
  // console.log(div)

  catalogue.append(div);
}

showProducts(JSON.parse(localStorage.getItem("products")));

function sort() {
  let menu = document.getElementById("type");
  menu.addEventListener("change", generateData);

  function generateData(event) {
    if (menu.value == "1") {
      let products = JSON.parse(localStorage.getItem("products"));
      let catalogue = document.getElementById("products-right");
      catalogue.innerHTML = null;

      products = products.sort(function (a, b) {
        return b.price - a.price;
      });

      showProducts(products);
    } else if (menu.value == "2") {
      let products = JSON.parse(localStorage.getItem("products"));
      let catalogue = document.getElementById("products-right");
      catalogue.innerHTML = null;

      products = products.sort(function (a, b) {
        return a.price - b.price;
      });

      showProducts(products);
    } else if (menu.value == "3") {
      let products = JSON.parse(localStorage.getItem("products"));
      let catalogue = document.getElementById("products-right");
      catalogue.innerHTML = null;

      products = products.sort(function (a, b) {
        return b.discount - a.discount;
      });

      showProducts(products);
    } else if (menu.value == "4") {
      let products = JSON.parse(localStorage.getItem("products"));
      let catalogue = document.getElementById("products-right");
      catalogue.innerHTML = null;

      showProducts(products);
    }
  }
}
sort();

function filter(x) {
  let products = JSON.parse(localStorage.getItem("products"));

  products = products.filter(function (el) {
    return el.brand_name == x;
  });

  let catalogue = document.getElementById("products-right");
  catalogue.innerHTML = null;
  showProducts(products);
}

function priceFilter(x, y) {
  let products = JSON.parse(localStorage.getItem("products"));

  products = products.filter(function (el) {
    return el.price < x && el.price > y;
  });

  let catalogue = document.getElementById("products-right");
  catalogue.innerHTML = null;
  showProducts(products);
}