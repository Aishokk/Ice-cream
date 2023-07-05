////////////////////////MAP STARTS
const tab11 = document.getElementById('place-1');
const tab12 = document.getElementById('place-2');

const place = document.querySelectorAll('.place');
place.forEach(item => {
  item.addEventListener('click', function() {
    const currentlyActive = document.querySelector('.place.active');

    if (currentlyActive) {
      // Remove styles from the previously clicked element
      currentlyActive.classList.remove('active');
      currentlyActive.style.cssText = '';
    }
  });
});

tab11.addEventListener('click', () => {
	const elem = document.getElementsByClassName("map-1")[0];
	elem.style.display = "unset";
	elem.style.opacity = "1";
	document.getElementsByClassName("map-2")[0].style.display = "none";
});
tab12.addEventListener('click', () => {
	const elem = document.getElementsByClassName("map-2")[0];
	elem.style.display = "unset";
	document.getElementsByClassName("map-1")[0].style.display = "none";
});
////////////////////////MAP ENDS

////////////////////////CATALOG STARTS
// Get each catalog menu item
const tab1 = document.getElementById('1-content');
const tab2 = document.getElementById('2-content');
const tab3 = document.getElementById('3-content');
const tab4 = document.getElementById('4-content');
const tab5 = document.getElementById('5-content');
const tab6 = document.getElementById('6-content');
const tab7 = document.getElementById('7-content');

const catalogMenuItems = document.querySelectorAll('.catalog-menu-item');
catalogMenuItems.forEach(item => {
  item.addEventListener('click', function() {
    const currentlyActive = document.querySelector('.catalog-menu-item.active');

    if (currentlyActive) {
      // Remove styles from the previously clicked element
      currentlyActive.classList.remove('active');
      currentlyActive.style.cssText = '';
    }

    // Apply styles to the clicked element
    this.classList.add('active');
    this.style.fontSize = '15px';
    this.style.fontWeight = 'bold';
    this.style.color = '#FD0BCE';
    this.style.textTransform = 'uppercase';
    this.style.cursor = 'pointer';
    this.style.opacity = '1';
  });
});


// Add click event listener to each tab
tab1.addEventListener('click', () => {
	const elem = document.getElementsByClassName("trdelnik-menu")[0];
	elem.style.display = "unset";
	elem.style.opacity = "1";
	document.getElementsByClassName("chimni-dogi-menu")[0].style.display = "none";
	document.getElementsByClassName("sandwiches-menu")[0].style.display = "none";
	document.getElementsByClassName("dessert-menu")[0].style.display = "none";
	document.getElementsByClassName("drink-menu")[0].style.display = "none";
	document.getElementsByClassName("croissant-menu")[0].style.display = "none";
	document.getElementsByClassName("breakfast-menu")[0].style.display = "none";
});
tab2.addEventListener('click', () => {
	const elem = document.getElementsByClassName("chimni-dogi-menu")[0];
	elem.style.display = "unset";
	document.getElementsByClassName("trdelnik-menu")[0].style.display = "none";
	document.getElementsByClassName("sandwiches-menu")[0].style.display = "none";
	document.getElementsByClassName("dessert-menu")[0].style.display = "none";
	document.getElementsByClassName("drink-menu")[0].style.display = "none";
	document.getElementsByClassName("croissant-menu")[0].style.display = "none";
	document.getElementsByClassName("breakfast-menu")[0].style.display = "none";
});
tab3.addEventListener('click', () => {
	const elem = document.getElementsByClassName("sandwiches-menu")[0];
	elem.style.display = "unset";
	document.getElementsByClassName("trdelnik-menu")[0].style.display = "none";
	document.getElementsByClassName("chimni-dogi-menu")[0].style.display = "none";
	document.getElementsByClassName("dessert-menu")[0].style.display = "none";
	document.getElementsByClassName("drink-menu")[0].style.display = "none";
	document.getElementsByClassName("croissant-menu")[0].style.display = "none";
	document.getElementsByClassName("breakfast-menu")[0].style.display = "none";
});
tab4.addEventListener('click', () => {
	const elem = document.getElementsByClassName("dessert-menu")[0];
	elem.style.display = "unset";
	document.getElementsByClassName("trdelnik-menu")[0].style.display = "none";
	document.getElementsByClassName("chimni-dogi-menu")[0].style.display = "none";
	document.getElementsByClassName("sandwiches-menu")[0].style.display = "none";
	document.getElementsByClassName("drink-menu")[0].style.display = "none";
	document.getElementsByClassName("croissant-menu")[0].style.display = "none";
	document.getElementsByClassName("breakfast-menu")[0].style.display = "none";
});
tab5.addEventListener('click', () => {
	const elem = document.getElementsByClassName("drink-menu")[0];
	elem.style.display = "unset";
	document.getElementsByClassName("trdelnik-menu")[0].style.display = "none";
	document.getElementsByClassName("chimni-dogi-menu")[0].style.display = "none";
	document.getElementsByClassName("sandwiches-menu")[0].style.display = "none";
	document.getElementsByClassName("dessert-menu")[0].style.display = "none";
	document.getElementsByClassName("croissant-menu")[0].style.display = "none";
	document.getElementsByClassName("breakfast-menu")[0].style.display = "none";
});
tab6.addEventListener('click', () => {
	const elem = document.getElementsByClassName("croissant-menu")[0];
	elem.style.display = "unset";
	document.getElementsByClassName("trdelnik-menu")[0].style.display = "none";
	document.getElementsByClassName("chimni-dogi-menu")[0].style.display = "none";
	document.getElementsByClassName("sandwiches-menu")[0].style.display = "none";
	document.getElementsByClassName("dessert-menu")[0].style.display = "none";
	document.getElementsByClassName("drink-menu")[0].style.display = "none";
	document.getElementsByClassName("breakfast-menu")[0].style.display = "none";
});
tab7.addEventListener('click', () => {
	const elem = document.getElementsByClassName("breakfast-menu")[0];
	elem.style.display = "unset";
	document.getElementsByClassName("trdelnik-menu")[0].style.display = "none";
	document.getElementsByClassName("chimni-dogi-menu")[0].style.display = "none";
	document.getElementsByClassName("sandwiches-menu")[0].style.display = "none";
	document.getElementsByClassName("dessert-menu")[0].style.display = "none";
	document.getElementsByClassName("drink-menu")[0].style.display = "none";
	document.getElementsByClassName("croissant-menu")[0].style.display = "none";
});

document.getElementsByClassName("trdelnik-menu")[0].style.display = "none";
document.getElementsByClassName("chimni-dogi-menu")[0].style.display = "none";
document.getElementsByClassName("sandwiches-menu")[0].style.display = "none";
document.getElementsByClassName("dessert-menu")[0].style.display = "none";
document.getElementsByClassName("drink-menu")[0].style.display = "none";
document.getElementsByClassName("croissant-menu")[0].style.display = "none";
document.getElementsByClassName("breakfast-menu")[0].style.display = "none";
///////////////////////////CATALOG ENDS

///////////////////// KORZINA STARTS
const korzina = document.querySelector('.korzina');

function fadeInOnScroll() {
  const korzinaTop = korzina.getBoundingClientRect().top;
  const korzinaBottom = korzina.getBoundingClientRect().bottom;
  const viewportHeight = window.innerHeight;

  if (korzinaTop < viewportHeight && korzinaBottom >= 0) {
    korzina.classList.add('fade-in');
  } else {
    korzina.classList.remove('fade-in');
  }
}

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('resize', fadeInOnScroll);

// Trigger the function on initial load
fadeInOnScroll();
/////////////////////// KORZINA ENDS

const tab13 = document.getElementById('input-1');
const tab14 = document.getElementById('input-2');

const input = document.querySelectorAll('.input');
place.forEach(item => {
  item.addEventListener('click', function() {
    const currentlyActive = document.querySelector('.input.active');

    if (currentlyActive) {
      // Remove styles from the previously clicked element
      currentlyActive.classList.remove('active');
      currentlyActive.style.cssText = '';
    }
  });
});



tab13.addEventListener('click', () => {
	const elem = document.getElementsByClassName("check-place-1")[0];
	elem.style.border = "1px solid #FD0BCE";
	elem.style.borderRadius = "16px";
	elem.style.background = "#defff9";
	document.getElementsByClassName("check-place-2")[0].style = "none";
});
tab14.addEventListener('click', () => {
	const elem = document.getElementsByClassName("check-place-2")[0];
	elem.style.border = "1px solid #FD0BCE";
	elem.style.borderRadius = "16px";
	elem.style.background = "#defff9";
	document.getElementsByClassName("check-place-1")[0].style = "none";
});




/////////PAGES STARTS

function teleportToPage1FromPage2() {
  	// Hide the current page container
	var currentPageContainer = document.getElementById("con-2");
	currentPageContainer.style.display = "none";
  
	// Show the target page container
	var targetPageContainer = document.getElementById("con-1");
	targetPageContainer.style.display = "block";
}


function teleportToPage2(event) {
	var currentPageContainer = document.getElementById("con-1");
	currentPageContainer.style.display = "none";

	var targetPageContainer = document.getElementById("con-2");
	targetPageContainer.style.display = "block";
  
	var clickedImageContainer = event.target.closest("div");
  
	var alreadySelected = clickedImageContainer.classList.contains("active-image");
  
	if (!alreadySelected) {
	  clickedImageContainer.classList.add("active-image");
	} else {
	//   clickedImageContainer.classList.remove("active-image");
	}

	var allImageContainers = document.querySelectorAll(".page-1-images > div");
	for (var i = 0; i < allImageContainers.length; i++) {
	  var imageContainer = allImageContainers[i];
	  if (imageContainer !== clickedImageContainer) {
		imageContainer.classList.remove("active-image");
	  }
	}
  }
  
///////////////////////////////////////////////////////////////////////////////////////



  function teleportToPage3(event) {
	var currentPageContainer = document.getElementById("con-2");
	currentPageContainer.style.display = "none";

	var targetPageContainer = document.getElementById("con-3");
	targetPageContainer.style.display = "block";

	var clickedImageContainer = event.target.closest("div");
  
	// Check if the clicked image container already has the active class
	var alreadySelected = clickedImageContainer.classList.contains("active-image");
  
	// Add borders to the clicked image container if not already selected
	if (!alreadySelected) {
	  clickedImageContainer.classList.add("active-image");
	} else {
	  // Remove borders from the clicked image container if already selected
	  clickedImageContainer.classList.remove("active-image");
	  return; // Stop the execution of the function here
	}
  
	// Remove borders from other image containers
	var allImageContainers = document.querySelectorAll(".page-2-images > div");
	for (var i = 0; i < allImageContainers.length; i++) {
	  var imageContainer = allImageContainers[i];
	  if (imageContainer !== clickedImageContainer) {
		imageContainer.classList.remove("active-image");
	  }
	}
  }
  
  function teleportToPage2FromPage3() {
	// Hide the current page container
	var currentPageContainer = document.getElementById("con-3");
	currentPageContainer.style.display = "none";
  
	// Show the target page container
	var targetPageContainer = document.getElementById("con-2");
	targetPageContainer.style.display = "block";
  }
  
  function teleportToPage3FromPage2() {
	// Hide the current page container
	var currentPageContainer = document.getElementById("con-2");
	currentPageContainer.style.display = "none";
  
	// Show the target page container
	var targetPageContainer = document.getElementById("con-3");
	targetPageContainer.style.display = "block";
  }


///////////////////////////////////////////////////////////////////////////////////////


  function teleportToPage4(event) {
	var currentPageContainer = document.getElementById("con-3");
	currentPageContainer.style.display = "none";

	var targetPageContainer = document.getElementById("con-4");
	targetPageContainer.style.display = "block";

	var clickedImageContainer = event.target.closest("div");
  
	// Check if the clicked image container already has the active class
	var alreadySelected = clickedImageContainer.classList.contains("active-image");
  
	// Add borders to the clicked image container if not already selected
	if (!alreadySelected) {
	  clickedImageContainer.classList.add("active-image");
	} else {
	  // Remove borders from the clicked image container if already selected
	  clickedImageContainer.classList.remove("active-image");
	  return; // Stop the execution of the function here
	}
  
	// Remove borders from other image containers
	var allImageContainers = document.querySelectorAll(".page-3-images > div");
	for (var i = 0; i < allImageContainers.length; i++) {
	  var imageContainer = allImageContainers[i];
	  if (imageContainer !== clickedImageContainer) {
		imageContainer.classList.remove("active-image");
	  }
	}
  }
  
  function teleportToPage3FromPage4() {
	// Hide the current page container
	var currentPageContainer = document.getElementById("con-4");
	currentPageContainer.style.display = "none";
  
	// Show the target page container
	var targetPageContainer = document.getElementById("con-3");
	targetPageContainer.style.display = "block";
  }
  
  function teleportToPage4FromPage3() {
	// Hide the current page container
	var currentPageContainer = document.getElementById("con-3");
	currentPageContainer.style.display = "none";
  
	// Show the target page container
	var targetPageContainer = document.getElementById("con-4");
	targetPageContainer.style.display = "block";
  }

///////////////////////////////////////////////////////////////////////////////////////

function teleportToPage5(event) {
	var currentPageContainer = document.getElementById("con-4");
	currentPageContainer.style.display = "none";

	var targetPageContainer = document.getElementById("con-5");
	targetPageContainer.style.display = "block";

	var clickedImageContainer = event.target.closest("div");
  
	// Check if the clicked image container already has the active class
	var alreadySelected = clickedImageContainer.classList.contains("active-image");
  
	// Add borders to the clicked image container if not already selected
	if (!alreadySelected) {
	  clickedImageContainer.classList.add("active-image");
	} else {
	  // Remove borders from the clicked image container if already selected
	  clickedImageContainer.classList.remove("active-image");
	  return; // Stop the execution of the function here
	}
  
	// Remove borders from other image containers
	var allImageContainers = document.querySelectorAll(".page-4-images div");
	for (var i = 0; i < allImageContainers.length; i++) {
	  var imageContainer = allImageContainers[i];
	  if (imageContainer !== clickedImageContainer) {
		imageContainer.classList.remove("active-image");
	  }
	}
  }
  
  function teleportToPage4FromPage5() {
	// Hide the current page container
	var currentPageContainer = document.getElementById("con-5");
	currentPageContainer.style.display = "none";
  
	// Show the target page container
	var targetPageContainer = document.getElementById("con-4");
	targetPageContainer.style.display = "block";
  }
  
  function teleportToPage5FromPage4() {
	// Hide the current page container
	var currentPageContainer = document.getElementById("con-4");
	currentPageContainer.style.display = "none";
  
	// Show the target page container
	var targetPageContainer = document.getElementById("con-5");
	targetPageContainer.style.display = "block";
  }

///////////////////////////////////////////////////////////////////////////////////////

function teleportToPage6(event) {
	var currentPageContainer = document.getElementById("con-5");
	currentPageContainer.style.display = "none";

	var targetPageContainer = document.getElementById("con-6");
	targetPageContainer.style.display = "block";

	var clickedImageContainer = event.target.closest("div");
  
	// Check if the clicked image container already has the active class
	var alreadySelected = clickedImageContainer.classList.contains("active-image");
  
	// Add borders to the clicked image container if not already selected
	if (!alreadySelected) {
	  clickedImageContainer.classList.add("active-image");
	} else {
	  // Remove borders from the clicked image container if already selected
	  clickedImageContainer.classList.remove("active-image");
	  return; // Stop the execution of the function here
	}
  
	// Remove borders from other image containers
	var allImageContainers = document.querySelectorAll(".page-5-images > div");
	for (var i = 0; i < allImageContainers.length; i++) {
	  var imageContainer = allImageContainers[i];
	  if (imageContainer !== clickedImageContainer) {
		imageContainer.classList.remove("active-image");
	  }
	}
  }
  
  function teleportToPage5FromPage6() {
	// Hide the current page container
	var currentPageContainer = document.getElementById("con-6");
	currentPageContainer.style.display = "none";
  
	// Show the target page container
	var targetPageContainer = document.getElementById("con-5");
	targetPageContainer.style.display = "block";
  }
  
  function teleportToPage6FromPage5() {
	// Hide the current page container
	var currentPageContainer = document.getElementById("con-5");
	currentPageContainer.style.display = "none";
  
	// Show the target page container
	var targetPageContainer = document.getElementById("con-6");
	targetPageContainer.style.display = "block";
  }


///////////////////////////////////////////////////////////////////////////////////////
function teleportToPage7(event) {
	var currentPageContainer = document.getElementById("con-6");
	currentPageContainer.style.display = "none";

	var targetPageContainer = document.getElementById("con-7");
	targetPageContainer.style.display = "block";

	var clickedImageContainer = event.target.closest("div");
  
	// Check if the clicked image container already has the active class
	var alreadySelected = clickedImageContainer.classList.contains("active-image");
  
	// Add borders to the clicked image container if not already selected
	if (!alreadySelected) {
	  clickedImageContainer.classList.add("active-image");
	} else {
	  // Remove borders from the clicked image container if already selected
	  clickedImageContainer.classList.remove("active-image");
	  return; // Stop the execution of the function here
	}
  
	// Remove borders from other image containers
	var allImageContainers = document.querySelectorAll(".page-6-images > div");
	for (var i = 0; i < allImageContainers.length; i++) {
	  var imageContainer = allImageContainers[i];
	  if (imageContainer !== clickedImageContainer) {
		imageContainer.classList.remove("active-image");
	  }
	}
  }
  
  function teleportToPage6FromPage7() {
	// Hide the current page container
	var currentPageContainer = document.getElementById("con-7");
	currentPageContainer.style.display = "none";
  
	// Show the target page container
	var targetPageContainer = document.getElementById("con-6");
	targetPageContainer.style.display = "block";
  }
  
  function teleportToPage7FromPage6() {
	// Hide the current page container
	var currentPageContainer = document.getElementById("con-6");
	currentPageContainer.style.display = "none";
  
	// Show the target page container
	var targetPageContainer = document.getElementById("con-7");
	targetPageContainer.style.display = "block";
  }


///////////////////////////////////////////////////////////////////////////////////////
function toggleImageBorder(event) {
	var clickedImageContainer = event.target.closest("div");
	var alreadySelected = clickedImageContainer.classList.contains("active-image");
  
	if (!alreadySelected) {
	  var allImageContainers = document.querySelectorAll(".page-7-images > div");
	  for (var i = 0; i < allImageContainers.length; i++) {
		var imageContainer = allImageContainers[i];
		imageContainer.classList.remove("active-image");
	  }
	  clickedImageContainer.classList.add("active-image");
	} else {
	  clickedImageContainer.classList.remove("active-image");
	}
  }
  
  window.onload = function() {
	var imageContainers = document.querySelectorAll(".page-7-images > div");
	for (var i = 0; i < imageContainers.length; i++) {
	  imageContainers[i].addEventListener("click", toggleImageBorder);
	}
  };
  

function teleportToSuccess(event) {
	// Hide the current page container
	var currentPageContainer = document.getElementById("con-7");
	currentPageContainer.style.display = "none";
  
	// Show the target page container
	var targetPageContainer = document.getElementById("con-8");
	targetPageContainer.style.display = "block";
}
///////////////////////////////////////////////////////////////////////////////////////
function teleportToPage7FromPage8() {
	// Hide the current page container
	var currentPageContainer = document.getElementById("con-8");
	currentPageContainer.style.display = "none";
  
	// Show the target page container
	var targetPageContainer = document.getElementById("con-7");
	targetPageContainer.style.display = "block";
  }

  function teleportToPage9(event) {
	// Hide the current page container
	var currentPageContainer = document.getElementById("con-8");
	currentPageContainer.style.display = "none";
  
	// Show the target page container
	var targetPageContainer = document.getElementById("con-9");
	targetPageContainer.style.display = "block";
}

function teleportToPage10(event) {
	// Hide the current page container
	var currentPageContainer = document.getElementById("con-9");
	currentPageContainer.style.display = "none";
  
	// Show the target page container
	var targetPageContainer = document.getElementById("con-10");
	targetPageContainer.style.display = "block";
}

///////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////
function refreshPage() {
	location.reload();
}


//////// PAGES ENDS

/////////////////////////////////////////////////////////////////////////
function buttonHover(element) {
	if (!element.classList.contains("disabled")) {
	  element.classList.add("hover");
	}
  }
  
  function teleportToBuy(itemId) {
	var currentPage = document.getElementById("counter" + itemId);
	currentPage.style.display = "none";
  
	var targetPage = document.getElementById("butn-" + itemId);
	targetPage.style.display = "block";
  
	// Reset the counter and button state
	var countElement = document.getElementById("count" + itemId);
	countElement.innerHTML = "1";
  
	var myButton = document.getElementById("butn-" + itemId);
	myButton.style.display = "block";
	myButton.classList.remove("disabled");
	myButton.textContent = "Купить";
  }
  
  function buttonClick(element, itemId) {
	element.classList.add("disabled");
	element.classList.remove("hover");
	element.textContent = "Заказ принят!";
  
	setTimeout(function () {
	  element.style.display = "none";
	  var counter = document.getElementById("counter" + itemId);
	  counter.style.display = "block";
	  updateDecrementVisibility(itemId);
  
	  // Get item details
	  var itemName = document.querySelector(".container-" + itemId + " p").textContent;
	  var itemPriceElement = document.querySelector(".price-" + itemId);
	  var itemPrice = parseInt(itemPriceElement.textContent);
  
	  // Update item details
	  var itemDetailElement = document.createElement("div");
	  itemDetailElement.classList.add("item-detail");
	  itemDetailElement.setAttribute("id", "item-" + itemId);
	  itemDetailElement.textContent = itemName + ": " + itemPrice + " $";
	  document.getElementById("item-details").appendChild(itemDetailElement);
  
	  // Update total price
	  updateTotalPrice();
	}, 500);
  }
  
  function increment(itemId) {
	var countElement = document.getElementById("count" + itemId);
	var count = parseInt(countElement.innerHTML);
	count++;
	countElement.innerHTML = count.toString();
	updateDecrementVisibility(itemId);
	updateTotalPrice();
  }
  
  function decrement(itemId) {
	var countElement = document.getElementById("count" + itemId);
	var count = parseInt(countElement.innerHTML);
  
	if (count > 0) {
	  count--;
	  countElement.innerHTML = count.toString();
	} else {
	  var container = document.getElementById(itemId);
	  container.parentNode.removeChild(container);
	  removeItemDetail(itemId);
	}
  
	updateDecrementVisibility(itemId);
	updateTotalPrice();
  }
  
  function updateDecrementVisibility(itemId) {
	var decrementBtn = document.getElementById("decrementBtn" + itemId);
	var countElement = document.getElementById("count" + itemId);
	var count = parseInt(countElement.innerHTML);
  
	if (count === 0) {
	  teleportToBuy(itemId);
	  removeItemDetail(itemId);
	}
  }
  
  function removeItemDetail(itemId) {
	var itemDetail = document.getElementById("item-" + itemId);
	if (itemDetail) {
	  itemDetail.parentNode.removeChild(itemDetail);
	}
  }
  
  function updateTotalPrice() {
	var totalPrice = 0;
  
	// Calculate the total price by summing the prices of all items
	for (var key in items) {
	  var count = items[key].count;
	  var priceElement = document.querySelector(".price-" + key);
	  var price = parseInt(priceElement.textContent);
	  totalPrice += count * price;
	}
  
	var totalPriceElement = document.getElementById("total-price");
	totalPriceElement.textContent = "Total Price: " + totalPrice + " $";
  }
  function increment(itemId) {
	var count = items[itemId].count + 1;
	updateItemCount(itemId, count);
	updateDecrementVisibility(itemId);
	updateTotalPrice();
	updateTotalCount();

  }
  
  // Function to decrement the count for an item
  function decrement(itemId) {
	var count = items[itemId].count - 1;
	if (count >= 0) {
	  updateItemCount(itemId, count);
	  updateDecrementVisibility(itemId);
	  updateTotalPrice();
	  updateTotalCount();

	}
  }
  // Initialize an object to store item data
  var items = {};

// Function to initialize an item
function initializeItem(itemId) {
  items[itemId] = {
    count: 0,
    countElement: document.getElementById("count" + itemId)
  };
}

// Function to update the count for an item
function updateItemCount(itemId, count) {
  items[itemId].count = count;
  items[itemId].countElement.innerHTML = count.toString();
}

// Function to update the total count
// Function to update the total count
function updateTotalCount() {
	var totalCount = 0;
	
	// Calculate the total count by summing the counts of all items
	for (var key in items) {
	  totalCount += items[key].count;
	}
	
	var totalCountElement = document.getElementById("totalCount");
	totalCountElement.innerHTML = totalCount.toString();
  }
  
// Increment button click event listener
document.addEventListener("click", function(event) {
  if (event.target.classList.contains("incrementBtn")) {
    var itemId = event.target.dataset.itemId;
    var count = items[itemId].count + 1;
    updateItemCount(itemId, count);
    updateTotalCount();
  }
});

// Decrement button click event listener
document.addEventListener("click", function(event) {
  if (event.target.classList.contains("decrementBtn")) {
    var itemId = event.target.dataset.itemId;
    var count = items[itemId].count - 1;
    if (count >= 0) {
      updateItemCount(itemId, count);
      updateTotalCount();
    }
  }
});

  
// Call the initial visibility check and initialize items
initializeItem('1');
initializeItem('2');
initializeItem('3');
initializeItem('4');
initializeItem('5');
initializeItem('6');
initializeItem('7');
initializeItem('8');
initializeItem('21');
initializeItem('22');
initializeItem('23');
initializeItem('24');
initializeItem('25');
initializeItem('26');
initializeItem('31');
initializeItem('32');
initializeItem('33');
initializeItem('34');
initializeItem('41');
initializeItem('42');
initializeItem('43');
initializeItem('44');
initializeItem('45');
initializeItem('46');
initializeItem('47');
initializeItem('48');
initializeItem('49');
initializeItem('410');
initializeItem('411');
initializeItem('412');
initializeItem('413');
initializeItem('414');
initializeItem('415');
initializeItem('416');
initializeItem('51');
initializeItem('52');
initializeItem('53');
initializeItem('54');
initializeItem('55');
initializeItem('56');
initializeItem('57');
initializeItem('58');
initializeItem('59');
initializeItem('510');
initializeItem('511');
initializeItem('512');
initializeItem('513');
initializeItem('514');
initializeItem('515');
initializeItem('516');
initializeItem('61');
initializeItem('62');
initializeItem('63');
initializeItem('64');
initializeItem('65');
initializeItem('66');
initializeItem('67');
initializeItem('68');
initializeItem('71');
initializeItem('72');
initializeItem('73');
initializeItem('74');
// ... Add more initializeItem calls for each item

// Example usage for item1
var myButton1 = document.getElementById("butn-1");
myButton1.addEventListener("click", function() {
  buttonClick(this, '1');
});

var decrementBtn1 = document.getElementById("decrementBtn1");
decrementBtn1.addEventListener("click", function() {
  decrement('1');
});

var incrementBtn1 = document.getElementById("incrementBtn1");
incrementBtn1.addEventListener("click", function() {
  increment('1');
});

// Call the initial visibility check for item1
updateDecrementVisibility('1');

// Example usage for item2
var myButton2 = document.getElementById("butn-2");
myButton2.addEventListener("click", function() {
  buttonClick(this, '2');
});

var decrementBtn2 = document.getElementById("decrementBtn2");
decrementBtn2.addEventListener("click", function() {
  decrement('2');
});

var incrementBtn2 = document.getElementById("incrementBtn2");
incrementBtn2.addEventListener("click", function() {
  increment('2');
});

// Call the initial visibility check for item2
updateDecrementVisibility('2');
// ... Repeat the above code block for each item

/////////////////////////////////////////////////////////////////////

// Example usage for item3
var myButton3 = document.getElementById("butn-3");
myButton3.addEventListener("click", function() {
  buttonClick(this, '3');
});

var decrementBtn3 = document.getElementById("decrementBtn3");
decrementBtn3.addEventListener("click", function() {
  decrement('3');
});

var incrementBtn3 = document.getElementById("incrementBtn3");
incrementBtn3.addEventListener("click", function() {
  increment('3');
});

// Call the initial visibility check for item3
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item4
var myButton4 = document.getElementById("butn-4");
myButton4.addEventListener("click", function() {
  buttonClick(this, '4');
});

var decrementBtn4 = document.getElementById("decrementBtn4");
decrementBtn4.addEventListener("click", function() {
  decrement('4');
});

var incrementBtn4 = document.getElementById("incrementBtn4");
incrementBtn4.addEventListener("click", function() {
  increment('4');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item5
var myButton5 = document.getElementById("butn-5");
myButton5.addEventListener("click", function() {
  buttonClick(this, '5');
});

var decrementBtn5 = document.getElementById("decrementBtn5");
decrementBtn5.addEventListener("click", function() {
  decrement('5');
});

var incrementBtn5 = document.getElementById("incrementBtn5");
incrementBtn5.addEventListener("click", function() {
  increment('5');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item6
var myButton6 = document.getElementById("butn-6");
myButton6.addEventListener("click", function() {
  buttonClick(this, '6');
});

var decrementBtn6 = document.getElementById("decrementBtn6");
decrementBtn6.addEventListener("click", function() {
  decrement('6');
});

var incrementBtn6 = document.getElementById("incrementBtn6");
incrementBtn6.addEventListener("click", function() {
  increment('6');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item7
var myButton7 = document.getElementById("butn-7");
myButton7.addEventListener("click", function() {
  buttonClick(this, '7');
});

var decrementBtn7 = document.getElementById("decrementBtn7");
decrementBtn7.addEventListener("click", function() {
  decrement('7');
});

var incrementBtn7 = document.getElementById("incrementBtn7");
incrementBtn7.addEventListener("click", function() {
  increment('7');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item8
var myButton8 = document.getElementById("butn-8");
myButton8.addEventListener("click", function() {
  buttonClick(this, '8');
});

var decrementBtn8 = document.getElementById("decrementBtn8");
decrementBtn8.addEventListener("click", function() {
  decrement('8');
});

var incrementBtn8 = document.getElementById("incrementBtn8");
incrementBtn8.addEventListener("click", function() {
  increment('8');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item21
var myButton21 = document.getElementById("butn-21");
myButton21.addEventListener("click", function() {
buttonClick(this, '21');
});

var decrementBtn21 = document.getElementById("decrementBtn21");
decrementBtn21.addEventListener("click", function() {
decrement('21');
});

var incrementBtn21 = document.getElementById("incrementBtn21");
incrementBtn21.addEventListener("click", function() {
increment('21');
});

// Call the initial visibility check for item1
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////

// Example usage for item22
var myButton22= document.getElementById("butn-22");
myButton22.addEventListener("click", function() {
  buttonClick(this, '22');
});

var decrementBtn22 = document.getElementById("decrementBtn22");
decrementBtn22.addEventListener("click", function() {
  decrement('22');
});

var incrementBtn22 = document.getElementById("incrementBtn22");
incrementBtn22.addEventListener("click", function() {
  increment('22');
});

// Call the initial visibility check for item2
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////

// Example usage for item23
var myButton23 = document.getElementById("butn-23");
myButton23.addEventListener("click", function() {
  buttonClick(this, '23');
});

var decrementBtn23 = document.getElementById("decrementBtn23");
decrementBtn23.addEventListener("click", function() {
  decrement('23');
});

var incrementBtn23 = document.getElementById("incrementBtn23");
incrementBtn23.addEventListener("click", function() {
  increment('23');
});

// Call the initial visibility check for item3
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item24
var myButton24 = document.getElementById("butn-24");
myButton24.addEventListener("click", function() {
  buttonClick(this, '24');
});

var decrementBtn24 = document.getElementById("decrementBtn24");
decrementBtn24.addEventListener("click", function() {
  decrement('24');
});

var incrementBtn24 = document.getElementById("incrementBtn24");
incrementBtn24.addEventListener("click", function() {
  increment('24');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item25
var myButton25 = document.getElementById("butn-25");
myButton25.addEventListener("click", function() {
  buttonClick(this, '25');
});

var decrementBtn25 = document.getElementById("decrementBtn25");
decrementBtn25.addEventListener("click", function() {
  decrement('25');
});

var incrementBtn25 = document.getElementById("incrementBtn25");
incrementBtn25.addEventListener("click", function() {
  increment('25');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item26
var myButton26 = document.getElementById("butn-26");
myButton26.addEventListener("click", function() {
  buttonClick(this, '26');
});

var decrementBtn26 = document.getElementById("decrementBtn26");
decrementBtn26.addEventListener("click", function() {
  decrement('26');
});

var incrementBtn26 = document.getElementById("incrementBtn26");
incrementBtn26.addEventListener("click", function() {
  increment('26');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////

// Example usage for item31
var myButton31 = document.getElementById("butn-31");
myButton31.addEventListener("click", function() {
  buttonClick(this, '31');
});

var decrementBtn31 = document.getElementById("decrementBtn31");
decrementBtn31.addEventListener("click", function() {
  decrement('31');
});

var incrementBtn31 = document.getElementById("incrementBtn31");
incrementBtn31.addEventListener("click", function() {
  increment('31');
});

updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item32
var myButton32 = document.getElementById("butn-32");
myButton32.addEventListener("click", function() {
  buttonClick(this, '32');
});

var decrementBtn32 = document.getElementById("decrementBtn32");
decrementBtn32.addEventListener("click", function() {
  decrement('32');
});

var incrementBtn32 = document.getElementById("incrementBtn32");
incrementBtn32.addEventListener("click", function() {
  increment('32');
});

updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item33
var myButton33 = document.getElementById("butn-33");
myButton33.addEventListener("click", function() {
  buttonClick(this, '33');
});

var decrementBtn33 = document.getElementById("decrementBtn33");
decrementBtn33.addEventListener("click", function() {
  decrement('33');
});

var incrementBtn33 = document.getElementById("incrementBtn33");
incrementBtn33.addEventListener("click", function() {
  increment('33');
});

updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item34
var myButton34 = document.getElementById("butn-34");
myButton34.addEventListener("click", function() {
  buttonClick(this, '34');
});

var decrementBtn34 = document.getElementById("decrementBtn34");
decrementBtn34.addEventListener("click", function() {
  decrement('34');
});

var incrementBtn34 = document.getElementById("incrementBtn34");
incrementBtn34.addEventListener("click", function() {
  increment('34');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item4
var myButton41 = document.getElementById("butn-41");
myButton41.addEventListener("click", function() {
  buttonClick(this, '41');
});

var decrementBtn41 = document.getElementById("decrementBtn41");
decrementBtn41.addEventListener("click", function() {
  decrement('41');
});

var incrementBtn41 = document.getElementById("incrementBtn41");
incrementBtn41.addEventListener("click", function() {
  increment('41');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item4
var myButton42 = document.getElementById("butn-42");
myButton42.addEventListener("click", function() {
  buttonClick(this, '42');
});

var decrementBtn42 = document.getElementById("decrementBtn42");
decrementBtn42.addEventListener("click", function() {
  decrement('42');
});

var incrementBtn42 = document.getElementById("incrementBtn42");
incrementBtn42.addEventListener("click", function() {
  increment('42');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item4
var myButton43 = document.getElementById("butn-43");
myButton43.addEventListener("click", function() {
  buttonClick(this, '43');
});

var decrementBtn43 = document.getElementById("decrementBtn43");
decrementBtn43.addEventListener("click", function() {
  decrement('43');
});

var incrementBtn43 = document.getElementById("incrementBtn43");
incrementBtn43.addEventListener("click", function() {
  increment('43');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item4
var myButton44 = document.getElementById("butn-44");
myButton44.addEventListener("click", function() {
  buttonClick(this, '44');
});

var decrementBtn44 = document.getElementById("decrementBtn44");
decrementBtn44.addEventListener("click", function() {
  decrement('44');
});

var incrementBtn44 = document.getElementById("incrementBtn44");
incrementBtn44.addEventListener("click", function() {
  increment('44');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item4
var myButton45 = document.getElementById("butn-45");
myButton45.addEventListener("click", function() {
  buttonClick(this, '45');
});

var decrementBtn45 = document.getElementById("decrementBtn45");
decrementBtn45.addEventListener("click", function() {
  decrement('45');
});

var incrementBtn45 = document.getElementById("incrementBtn45");
incrementBtn45.addEventListener("click", function() {
  increment('45');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item4
var myButton46 = document.getElementById("butn-46");
myButton46.addEventListener("click", function() {
  buttonClick(this, '46');
});

var decrementBtn46 = document.getElementById("decrementBtn46");
decrementBtn46.addEventListener("click", function() {
  decrement('46');
});

var incrementBtn46 = document.getElementById("incrementBtn46");
incrementBtn46.addEventListener("click", function() {
  increment('46');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item4
var myButton47 = document.getElementById("butn-47");
myButton47.addEventListener("click", function() {
  buttonClick(this, '47');
});

var decrementBtn47 = document.getElementById("decrementBtn47");
decrementBtn47.addEventListener("click", function() {
  decrement('47');
});

var incrementBtn47 = document.getElementById("incrementBtn47");
incrementBtn47.addEventListener("click", function() {
  increment('47');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item4
var myButton48 = document.getElementById("butn-48");
myButton48.addEventListener("click", function() {
  buttonClick(this, '48');
});

var decrementBtn48 = document.getElementById("decrementBtn48");
decrementBtn48.addEventListener("click", function() {
  decrement('48');
});

var incrementBtn48 = document.getElementById("incrementBtn48");
incrementBtn48.addEventListener("click", function() {
  increment('48');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item4
var myButton49 = document.getElementById("butn-49");
myButton49.addEventListener("click", function() {
  buttonClick(this, '49');
});

var decrementBtn49 = document.getElementById("decrementBtn49");
decrementBtn49.addEventListener("click", function() {
  decrement('49');
});

var incrementBtn49 = document.getElementById("incrementBtn49");
incrementBtn49.addEventListener("click", function() {
  increment('49');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item4
var myButton410 = document.getElementById("butn-410");
myButton410.addEventListener("click", function() {
  buttonClick(this, '410');
});

var decrementBtn410 = document.getElementById("decrementBtn410");
decrementBtn410.addEventListener("click", function() {
  decrement('410');
});

var incrementBtn410 = document.getElementById("incrementBtn410");
incrementBtn410.addEventListener("click", function() {
  increment('410');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item4
var myButton411 = document.getElementById("butn-411");
myButton411.addEventListener("click", function() {
  buttonClick(this, '411');
});

var decrementBtn411 = document.getElementById("decrementBtn411");
decrementBtn411.addEventListener("click", function() {
  decrement('411');
});

var incrementBtn411 = document.getElementById("incrementBtn411");
incrementBtn411.addEventListener("click", function() {
  increment('411');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item4
var myButton412 = document.getElementById("butn-412");
myButton412.addEventListener("click", function() {
  buttonClick(this, '412');
});

var decrementBtn412 = document.getElementById("decrementBtn412");
decrementBtn412.addEventListener("click", function() {
  decrement('412');
});

var incrementBtn412 = document.getElementById("incrementBtn412");
incrementBtn412.addEventListener("click", function() {
  increment('412');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item4
var myButton413 = document.getElementById("butn-413");
myButton413.addEventListener("click", function() {
  buttonClick(this, '413');
});

var decrementBtn413 = document.getElementById("decrementBtn413");
decrementBtn413.addEventListener("click", function() {
  decrement('413');
});

var incrementBtn413 = document.getElementById("incrementBtn413");
incrementBtn413.addEventListener("click", function() {
  increment('413');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item4
var myButton414 = document.getElementById("butn-414");
myButton414.addEventListener("click", function() {
  buttonClick(this, '414');
});

var decrementBtn414 = document.getElementById("decrementBtn414");
decrementBtn414.addEventListener("click", function() {
  decrement('414');
});

var incrementBtn414 = document.getElementById("incrementBtn414");
incrementBtn414.addEventListener("click", function() {
  increment('414');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item4
var myButton415 = document.getElementById("butn-415");
myButton415.addEventListener("click", function() {
  buttonClick(this, '415');
});

var decrementBtn415 = document.getElementById("decrementBtn415");
decrementBtn415.addEventListener("click", function() {
  decrement('415');
});

var incrementBtn415 = document.getElementById("incrementBtn415");
incrementBtn415.addEventListener("click", function() {
  increment('415');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item4
var myButton416 = document.getElementById("butn-416");
myButton416.addEventListener("click", function() {
  buttonClick(this, '416');
});

var decrementBtn416 = document.getElementById("decrementBtn416");
decrementBtn416.addEventListener("click", function() {
  decrement('416');
});

var incrementBtn416 = document.getElementById("incrementBtn416");
incrementBtn416.addEventListener("click", function() {
  increment('416');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item4
var myButton51 = document.getElementById("butn-51");
myButton51.addEventListener("click", function() {
  buttonClick(this, '51');
});

var decrementBtn51 = document.getElementById("decrementBtn51");
decrementBtn51.addEventListener("click", function() {
  decrement('51');
});

var incrementBtn51 = document.getElementById("incrementBtn51");
incrementBtn51.addEventListener("click", function() {
  increment('51');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item4
var myButton52 = document.getElementById("butn-52");
myButton52.addEventListener("click", function() {
  buttonClick(this, '52');
});

var decrementBtn52 = document.getElementById("decrementBtn52");
decrementBtn52.addEventListener("click", function() {
  decrement('52');
});

var incrementBtn52 = document.getElementById("incrementBtn52");
incrementBtn52.addEventListener("click", function() {
  increment('52');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item4
var myButton53 = document.getElementById("butn-53");
myButton53.addEventListener("click", function() {
  buttonClick(this, '53');
});

var decrementBtn53 = document.getElementById("decrementBtn53");
decrementBtn53.addEventListener("click", function() {
  decrement('53');
});

var incrementBtn53 = document.getElementById("incrementBtn53");
incrementBtn53.addEventListener("click", function() {
  increment('53');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item4
var myButton54 = document.getElementById("butn-54");
myButton54.addEventListener("click", function() {
  buttonClick(this, '54');
});

var decrementBtn54 = document.getElementById("decrementBtn54");
decrementBtn54.addEventListener("click", function() {
  decrement('54');
});

var incrementBtn54 = document.getElementById("incrementBtn54");
incrementBtn54.addEventListener("click", function() {
  increment('54');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item4
var myButton55 = document.getElementById("butn-55");
myButton55.addEventListener("click", function() {
  buttonClick(this, '55');
});

var decrementBtn55 = document.getElementById("decrementBtn55");
decrementBtn55.addEventListener("click", function() {
  decrement('55');
});

var incrementBtn55 = document.getElementById("incrementBtn55");
incrementBtn55.addEventListener("click", function() {
  increment('55');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item4
var myButton56 = document.getElementById("butn-56");
myButton56.addEventListener("click", function() {
  buttonClick(this, '56');
});

var decrementBtn56 = document.getElementById("decrementBtn56");
decrementBtn56.addEventListener("click", function() {
  decrement('56');
});

var incrementBtn56 = document.getElementById("incrementBtn56");
incrementBtn56.addEventListener("click", function() {
  increment('56');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item4
var myButton57 = document.getElementById("butn-57");
myButton57.addEventListener("click", function() {
  buttonClick(this, '57');
});

var decrementBtn57 = document.getElementById("decrementBtn57");
decrementBtn57.addEventListener("click", function() {
  decrement('57');
});

var incrementBtn57 = document.getElementById("incrementBtn57");
incrementBtn57.addEventListener("click", function() {
  increment('57');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item4
var myButton58 = document.getElementById("butn-58");
myButton58.addEventListener("click", function() {
  buttonClick(this, '58');
});

var decrementBtn58 = document.getElementById("decrementBtn58");
decrementBtn58.addEventListener("click", function() {
  decrement('58');
});

var incrementBtn58 = document.getElementById("incrementBtn58");
incrementBtn58.addEventListener("click", function() {
  increment('58');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item4
var myButton59 = document.getElementById("butn-59");
myButton59.addEventListener("click", function() {
  buttonClick(this, '59');
});

var decrementBtn59 = document.getElementById("decrementBtn59");
decrementBtn59.addEventListener("click", function() {
  decrement('59');
});

var incrementBtn59 = document.getElementById("incrementBtn59");
incrementBtn59.addEventListener("click", function() {
  increment('59');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item4
var myButton510 = document.getElementById("butn-510");
myButton510.addEventListener("click", function() {
  buttonClick(this, '510');
});

var decrementBtn510 = document.getElementById("decrementBtn510");
decrementBtn510.addEventListener("click", function() {
  decrement('510');
});

var incrementBtn510 = document.getElementById("incrementBtn510");
incrementBtn510.addEventListener("click", function() {
  increment('510');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item4
var myButton511 = document.getElementById("butn-511");
myButton511.addEventListener("click", function() {
  buttonClick(this, '511');
});

var decrementBtn511 = document.getElementById("decrementBtn511");
decrementBtn511.addEventListener("click", function() {
  decrement('511');
});

var incrementBtn511 = document.getElementById("incrementBtn511");
incrementBtn511.addEventListener("click", function() {
  increment('511');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item4
var myButton512 = document.getElementById("butn-512");
myButton512.addEventListener("click", function() {
  buttonClick(this, '512');
});

var decrementBtn512 = document.getElementById("decrementBtn512");
decrementBtn512.addEventListener("click", function() {
  decrement('512');
});

var incrementBtn512 = document.getElementById("incrementBtn512");
incrementBtn512.addEventListener("click", function() {
  increment('512');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item4
var myButton513 = document.getElementById("butn-513");
myButton513.addEventListener("click", function() {
  buttonClick(this, '513');
});

var decrementBtn513 = document.getElementById("decrementBtn513");
decrementBtn513.addEventListener("click", function() {
  decrement('513');
});

var incrementBtn513 = document.getElementById("incrementBtn513");
incrementBtn513.addEventListener("click", function() {
  increment('513');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item4
var myButton514 = document.getElementById("butn-514");
myButton514.addEventListener("click", function() {
  buttonClick(this, '514');
});

var decrementBtn514 = document.getElementById("decrementBtn514");
decrementBtn514.addEventListener("click", function() {
  decrement('514');
});

var incrementBtn514 = document.getElementById("incrementBtn514");
incrementBtn514.addEventListener("click", function() {
  increment('514');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item4
var myButton515 = document.getElementById("butn-515");
myButton515.addEventListener("click", function() {
  buttonClick(this, '515');
});

var decrementBtn515 = document.getElementById("decrementBtn515");
decrementBtn515.addEventListener("click", function() {
  decrement('515');
});

var incrementBtn515 = document.getElementById("incrementBtn515");
incrementBtn515.addEventListener("click", function() {
  increment('515');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item4
var myButton516 = document.getElementById("butn-516");
myButton516.addEventListener("click", function() {
  buttonClick(this, '516');
});

var decrementBtn516 = document.getElementById("decrementBtn516");
decrementBtn516.addEventListener("click", function() {
  decrement('516');
});

var incrementBtn516 = document.getElementById("incrementBtn516");
incrementBtn516.addEventListener("click", function() {
  increment('516');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item1
var myButton61 = document.getElementById("butn-61");
myButton61.addEventListener("click", function() {
buttonClick(this, '61');
});

var decrementBtn61 = document.getElementById("decrementBtn61");
decrementBtn61.addEventListener("click", function() {
decrement('61');
});

var incrementBtn61 = document.getElementById("incrementBtn61");
incrementBtn61.addEventListener("click", function() {
increment('61');
});

// Call the initial visibility check for item1
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////

// Example usage for item2
var myButton62 = document.getElementById("butn-62");
myButton62.addEventListener("click", function() {
  buttonClick(this, '62');
});

var decrementBtn62 = document.getElementById("decrementBtn62");
decrementBtn62.addEventListener("click", function() {
  decrement('62');
});

var incrementBtn62 = document.getElementById("incrementBtn62");
incrementBtn62.addEventListener("click", function() {
  increment('62');
});

// Call the initial visibility check for item2
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////

// Example usage for item3
var myButton63 = document.getElementById("butn-63");
myButton63.addEventListener("click", function() {
  buttonClick(this, '63');
});

var decrementBtn63 = document.getElementById("decrementBtn63");
decrementBtn63.addEventListener("click", function() {
  decrement('63');
});

var incrementBtn63 = document.getElementById("incrementBtn63");
incrementBtn63.addEventListener("click", function() {
  increment('63');
});

// Call the initial visibility check for item3
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item4
var myButton64 = document.getElementById("butn-64");
myButton64.addEventListener("click", function() {
  buttonClick(this, '64');
});

var decrementBtn64 = document.getElementById("decrementBtn64");
decrementBtn64.addEventListener("click", function() {
  decrement('64');
});

var incrementBtn64 = document.getElementById("incrementBtn64");
incrementBtn64.addEventListener("click", function() {
  increment('64');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item5
var myButton65 = document.getElementById("butn-65");
myButton65.addEventListener("click", function() {
  buttonClick(this, '65');
});

var decrementBtn65 = document.getElementById("decrementBtn65");
decrementBtn65.addEventListener("click", function() {
  decrement('65');
});

var incrementBtn65 = document.getElementById("incrementBtn65");
incrementBtn65.addEventListener("click", function() {
  increment('65');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item6
var myButton66 = document.getElementById("butn-66");
myButton66.addEventListener("click", function() {
  buttonClick(this, '66');
});

var decrementBtn66 = document.getElementById("decrementBtn66");
decrementBtn66.addEventListener("click", function() {
  decrement('66');
});

var incrementBtn66 = document.getElementById("incrementBtn66");
incrementBtn66.addEventListener("click", function() {
  increment('66');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item7
var myButton67 = document.getElementById("butn-67");
myButton67.addEventListener("click", function() {
  buttonClick(this, '67');
});

var decrementBtn67 = document.getElementById("decrementBtn67");
decrementBtn67.addEventListener("click", function() {
  decrement('67');
});

var incrementBtn67 = document.getElementById("incrementBtn67");
incrementBtn67.addEventListener("click", function() {
  increment('67');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item8
var myButton68 = document.getElementById("butn-68");
myButton68.addEventListener("click", function() {
  buttonClick(this, '68');
});

var decrementBtn68 = document.getElementById("decrementBtn68");
decrementBtn68.addEventListener("click", function() {
  decrement('68');
});

var incrementBtn68 = document.getElementById("incrementBtn68");
incrementBtn68.addEventListener("click", function() {
  increment('68');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item7
var myButton71 = document.getElementById("butn-71");
myButton71.addEventListener("click", function() {
  buttonClick(this, '71');
});

var decrementBtn71 = document.getElementById("decrementBtn71");
decrementBtn71.addEventListener("click", function() {
  decrement('71');
});

var incrementBtn71 = document.getElementById("incrementBtn71");
incrementBtn71.addEventListener("click", function() {
  increment('71');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item7
var myButton72 = document.getElementById("butn-72");
myButton72.addEventListener("click", function() {
  buttonClick(this, '72');
});

var decrementBtn72= document.getElementById("decrementBtn72");
decrementBtn72.addEventListener("click", function() {
  decrement('72');
});

var incrementBtn72 = document.getElementById("incrementBtn72");
incrementBtn72.addEventListener("click", function() {
  increment('72');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item7
var myButton73 = document.getElementById("butn-73");
myButton73.addEventListener("click", function() {
  buttonClick(this, '73');
});

var decrementBtn73 = document.getElementById("decrementBtn73");
decrementBtn73.addEventListener("click", function() {
  decrement('73');
});

var incrementBtn73 = document.getElementById("incrementBtn73");
incrementBtn73.addEventListener("click", function() {
  increment('73');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
// Example usage for item7
var myButton74 = document.getElementById("butn-74");
myButton74.addEventListener("click", function() {
  buttonClick(this, '74');
});

var decrementBtn74 = document.getElementById("decrementBtn74");
decrementBtn74.addEventListener("click", function() {
  decrement('74');
});

var incrementBtn74 = document.getElementById("incrementBtn74");
incrementBtn74.addEventListener("click", function() {
  increment('74');
});
updateDecrementVisibility
/////////////////////////////////////////////////////////////////////////
function teleportToCheckOrder() {
	var checkOrderSection = document.getElementById("con-8");
	checkOrderSection.style.display = 'block';
	var prevSection = document.getElementById("con-1");
	prevSection.style.display = 'none';
	var prevSection = document.getElementById("con-2");
	prevSection.style.display = 'none';
	var prevSection = document.getElementById("con-3");
	prevSection.style.display = 'none';
	var prevSection = document.getElementById("con-4");
	prevSection.style.display = 'none';
	var prevSection = document.getElementById("con-5");
	prevSection.style.display = 'none';
	var prevSection = document.getElementById("con-6");
	prevSection.style.display = 'none';
	var prevSection = document.getElementById("con-7");
	prevSection.style.display = 'none';
	checkOrderSection.scrollIntoView({ behavior: "smooth" });
  }
  
  
/////////////////////////////////////////////////////////////////////////
// ...
