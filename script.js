let bagitems;
onload();


function onload() {

  let bagItemsStr = localStorage.getItem('bagItems');
  bagitems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemsOnHomepge();
  displayBagItemCount()
}

function addTobag(itemid) {
  displayBagItemCount()
  localStorage.setItem('bagItems', JSON.stringify(bagitems));
  bagitems.push(itemid);

}

function displayBagItemCount() {
  let bagitemCountElement = document.querySelector('.bag-item-count');

  if (bagitems.length > 0) {

    bagitemCountElement.style.visibility = 'visible';
    bagitemCountElement.innerText = bagitems.length;
  } else {
    bagitemCountElement.style.visibility = 'hidden';
  }
}


function displayItemsOnHomepge() {

  let itemsContainerElement = document.querySelector('.itmes-container');
  if (!itemsContainerElement) {
    return;
  }
  let innerHtml = '';
  items.forEach(item => {

    innerHtml += `<div class="item-container">
              <img src="${item.item_image}" alt="not Load" class="item-img">
                <div class="rating">
                  ${item.rating.stars}⭐ | ${item.rating.noOfReviews}
                </div>
                <div class="company-name"> ${item.company_name} </div>
                <div class="item-name">${item.item_name}</div>
                <div class="price">
                  <span class="current-price">Rs ${item.price.current_price}</span>
                  <span class="original-price">Rs ${item.price.original_price}</span>
                  <span class="discount">(${item.price.discount} % OFF)</span>
                </div>
                <button class="btn-add-bag" onclick="addTobag(${item.id});">Add to Bag</button>
          </div>`
  })

  itemsContainerElement.innerHTML = innerHtml;
}