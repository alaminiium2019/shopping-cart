      // Add first Item
      const firstQuantity = document.getElementById('addQuantity');
      firstQuantity.addEventListener('click',function(){
         ItemAdded("addNumber", "priceId", 1219);

      })

   

      const decreaseQuantity = document.getElementById('minusItem');
      decreaseQuantity.addEventListener('click',function(){
         minusItem("addNumber","priceId",1219);

      })


      //function for firstItem
      function ItemAdded(addNumber, priceId, price){
         const firstItem = document.getElementById('addNumber').value;
         const firstItemNumber = parseFloat(firstItem);
         const Quantity = document.getElementById('addNumber').value = firstItemNumber+1;

         const itemPrice = document.getElementById('priceId').innerText;
         const itemPriceNumber=parseFloat(itemPrice);
         const itemPriceUpdate=document.getElementById('priceId').innerText=itemPriceNumber+price;

         const subtotalItem=document.getElementById('subtotal').innerText;
         const subtotalItemNumber=parseFloat(subtotalItem);
         const SubTotal=document.getElementById('subtotal').innerText=subtotalItemNumber+price;

         const total=document.getElementById('total').innerText=SubTotal;
      }

      // minus item
 
      function minusItem(addNumber,priceId,price){
         const firstItem = document.getElementById('addNumber').value;
         const firstItemNumber = parseFloat(firstItem);
         const Quantity = document.getElementById('addNumber').value = firstItemNumber-1;

         const itemPrice = document.getElementById('priceId').innerText;
         const itemPriceNumber=parseFloat(itemPrice);
         const itemPriceUpdate=document.getElementById('priceId').innerText=itemPriceNumber-price;

         const subtotalItem=document.getElementById('subtotal').innerText;
         const subtotalItemNumber=parseFloat(subtotalItem);
         const SubTotal=document.getElementById('subtotal').innerText=subtotalItemNumber-price;

         const total=document.getElementById('total').innerText=SubTotal;

      }

   
      