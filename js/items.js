products = [
  {
    brand_name: "Realme",
    img: "https://www.gizmochina.com/wp-content/uploads/2020/09/Realme-Narzo-20-Pro.jpg",
    p_name: "Realme narzo 30a",
    price: 9100,
    discount: 35,
    oldprice: 14000,
  },
  {
    brand_name: "Boat",
    img: "https://m.media-amazon.com/images/I/61ihz46SLOL._SL1500_.jpg",
    p_name: "Boat box a1",
    price: 800,
    discount: 20,
    oldprice: 1000,
  },

  {
    brand_name: "Hp laptop",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZeiweBEGQXF33uHkyzk5Pxo4RasTTK_CAdZCvE3RdQUYsDY-xk0CiQBbgd2Kpi0Mlc6E&usqp=CAU",
    p_name: "New generation laptop",
    price: 22750,
    discount: 35,
    oldprice: 35000,
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

  div.innerHTML = `<a class="each-product" href="buyproduct.html"
              ><div>
                <img
                  src= ${el.img}
                  alt=""
                />
                <div class="brand">${el.brand_name}</div>
                <div class="name">${el.p_name}</div>
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
