var url = "https://api2.binance.com/api/v3/ticker/24hr";

var container = document.querySelector(".container");

fetch(url)
   .then(res => res.json())
   .then((result) => {
      console.log(result);
      for( i = 0; i < 100; i++) {
         result[i];

         var div1 = document.createElement("div");
         div1.classList.add("details");
         container.appendChild(div1);

         var span1 = document.createElement("span");
         span1.classList.add("h_symbol");
         span1.innerText = "Symbol";

         var span2 = document.createElement("span");
         span2.classList.add("symbol");
         span2.innerText = result[i].symbol;

         var span3 = document.createElement("span");
         span3.classList.add("h_price");
         span3.innerText = "Price";

         var span4 = document.createElement("span");
         span4.classList.add("price");
         span4.innerText = result[i].bidPrice;

         var span5 = document.createElement("span");
         span5.classList.add("h_count");
         span5.innerText = "Count";

         var span6 = document.createElement("span");
         span6.classList.add("count");
         span6.innerText = result[i].count;

         div1.append(span1, span2, span3, span4, span5, span6);
         
      }
   });