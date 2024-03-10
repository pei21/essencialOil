/// Define the function
///Here is Home evets
// Get the form and submit button elements
document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("Form");
  let submitBtn = document.getElementById("submitBtn");

  // Add an input event listener to each input field
  form.querySelectorAll("input, textarea").forEach(function (input) {
    input.addEventListener("input", function () {
      updateSubmitBtnColor();
    });
  });

  // Function to update the submit button color based on form input
  function updateSubmitBtnColor() {
    let allFieldsFilled = Array.from(Form.elements).every(function (input) {
      return input.value.trim() !== "" || !input.required;
    });

    submitBtn.classList.toggle("filled", allFieldsFilled);
  }

  // Add a submit event listener to the form
  form.addEventListener("submit", function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Perform your submit logic here
    // For now, let's show an alert as a placeholder
    alert("Message sent!");

    // Redirect to index.html after the message is sent
    window.location.href = "index.html";
  });
});

///Here is home page-----clicking buttons to read more about experts detail

function openExpDetails(expertType) {
  // Get the overlay and expDetails container
  let overlay = document.getElementById("expDetailsOverlay");
  let expDetailsContainer = document.getElementById("expDetails");

  // Set the title and content based on expertType
  let title, content, images;
  switch (expertType) {
    case "aroma":
      title = "Aroma Team";
      content =
        "Our Aroma Team, also known as Aromatherapy Alchemists, has a keen sense of aromas and their therapeutic benefits. They meticulously craft unique blends that cater to various moods and wellness needs.";
      images = [
        "../public/images/expert1.jpeg",
        "../public/images/expert1-2.jpeg",
        "../public/images/expert1-3.jpeg",
      ]; // Add image URLs for Aroma Team
      break;
    case "fragrance":
      title = "Interior Team ";
      content =
        "Our Interior Dec Teams, also known as Fragrance Connoisseurs, have an in-depth knowledge of each oil's origin, properties, and aromatic profile. They take you on an olfactory journey of exploration.";
      images = [
        "../public/images/expert2.jpeg",
        "../public/images/expert2-2.jpeg",
        "../public/images/expert2-3.jpeg",
      ]; // Add image URLs for Interior Dec Teams
      break;
    case "massage":
      title = "Massage Team";
      content =
        "Our Massage Team, also known as Bodywork Specialists, excels in various massage techniques to promote relaxation and overall well-being.";
      images = [
        "../public/images/expert4.jpeg",
        "../public/images/expert4-2.jpeg",
        "../public/images/expert4-3.jpeg",
      ];
      break;
    case "explore":
      title = "Explorer Team";
      content =
        "Our Explore Team, also known as Essence Specialists, have an understanding of the therapeutic benefits of essential oils. They guide you in selecting the perfect essence to enhance your well-being.";
      images = [
        "../public/images/explore1.jpeg",
        "../public/images/explore2.jpeg",
        "../public/images/explore3.jpeg",
      ];
      break;
    case "candle":
      title = "Candle Team";
      content =
        "Our Candle Team, consisting of Candle Making Experts, is dedicated to creating exquisite essence oil candles. They blend various oils to provide a harmonious and soothing experience.";
      images = [
        "../../public/images/candle.jpeg",
        "../public/images/candle2.jpeg",
        "../public/images/candle3.jpeg",
      ];
      break;
    case "blend":
      title = "Blend Team";
      content =
        "Our Blend Team, also known as Blend Masters, specializes in crafting unique blends of essential oils. They guide you in selecting the perfect blend to enhance your well-being.";
      images = [
        "../public/images/blend.jpeg",
        "../public/images/blend2.jpeg",
        "../public/images/blend3.jpeg",
      ];
      break;
  }

  // Set the title and content in the expDetails container
  let titleElement = document.getElementById("expDetailsTitle");
  let textElement = document.getElementById("expDetailsText");
  let imageContainer = document.getElementById("imageContainer");

  titleElement.textContent = title;
  textElement.textContent = content;

  // Populate the image container
  imageContainer.innerHTML = "";
  images.forEach(function (imageUrl) {
    let imgElement = document.createElement("img");
    imgElement.src = imageUrl;
    imageContainer.appendChild(imgElement);
  });

  // Show the overlay and expDetails container
  overlay.style.display = "block";
  expDetailsContainer.style.display = "block";
}
function closeExpDetails() {
  // Hide the overlay and expDetails container
  let overlay = document.getElementById("expDetailsOverlay");
  let expDetailsContainer = document.getElementById("expDetails");

  overlay.style.display = "none";
  expDetailsContainer.style.display = "none";
}

///here is home page----adding an event to "read more"button to check the article
// Function to open the modal
function openModal() {
  document.getElementById("myModal").style.display = "flex";
}

// Function to close the modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

///Here is about page event
///Allowing users click each stories to read more
document.addEventListener("DOMContentLoaded", function () {
  let mobileMenu = document.getElementById("mobileMenu");
  let closeIcon = document.getElementById("closeIcon");
  let hiddenBackground = document.querySelector(".hidden-background");
  let hiddenContentText = document.getElementById("hiddenContentText");
  let backIcon = document.getElementById("backIcon");

  let clickableStories = document.querySelectorAll(".clickable");

  // Function to show modal with content
  function show(content) {
    hiddenContentText.innerHTML = content;
    hiddenBackground.style.display = "block";
  }

  // Function to handle back
  function closeBack() {
    hiddenBackground.style.display = "none";
  }

  // Attach click event listeners to mobile menu icon
  document.getElementById("menuIcon").addEventListener("click", function () {
    mobileMenu.style.display = "block";
  });

  // Attach click event listener to close mobile menu icon
  closeIcon.addEventListener("click", function () {
    mobileMenu.style.display = "none";
  });

  // Attach click event listeners to each clickable story
  clickableStories.forEach(function (story) {
    story.addEventListener("click", function () {
      // Get the content of the clicked story
      let contentId = story.dataset.content;
      let content = document.getElementById(contentId).innerHTML;
      show(content);
    });
  });

  // Attach click event listener to close button
  backIcon.addEventListener("click", closeBack);

  // Close mobile menu if user clicks outside the menu
  window.addEventListener("click", function (event) {
    if (event.target === mobileMenu) {
      mobileMenu.style.display = "none";
    }
  });
});

///here is offer evet///
//allowing user click menubar to check different pages
document.addEventListener("DOMContentLoaded", function () {
  const planHeaders = document.querySelectorAll("th[data-plan]");

  const closePopup = function (event) {
    const popupOverlay = document.querySelector(".popup-overlay");
    const popupContent = document.querySelector(".popup-content");
    if (popupOverlay && popupContent && !popupContent.contains(event.target)) {
      document.body.removeChild(popupOverlay);
      document.body.removeChild(popupContent);
      document.body.removeEventListener("click", closePopup);
    }
  };

  planHeaders.forEach((header) => {
    header.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent the click event from reaching the body immediately
      let planType = this.getAttribute("data-plan");
      let planData = document.querySelectorAll(`td[data=${planType}]`);

      let popupOverlay = document.createElement("div");
      popupOverlay.classList.add("popup-overlay");
      let popupContent = document.createElement("div");
      popupContent.classList.add("popup-content");
      let clonedContentContainer = document.createElement("div");
      clonedContentContainer.classList.add("cloned-content");

      let detailButton = document.createElement("button");
      detailButton.textContent = "Close";

      let heading = document.createElement("h2");
      heading.textContent = planType;

      planData.forEach((data) => {
        let divContent = data.querySelector("div").innerHTML;
        let detailParagraph = document.createElement("p");
        detailParagraph.innerHTML = divContent;
        clonedContentContainer.appendChild(detailParagraph);
      });

      clonedContentContainer.appendChild(detailButton);
      popupContent.appendChild(heading);
      popupContent.appendChild(clonedContentContainer);

      document.body.appendChild(popupOverlay);
      document.body.appendChild(popupContent);

      popupContent.style.display = "block";
      popupOverlay.style.display = "block";

      detailButton.addEventListener("click", function (event) {
        event.stopPropagation();
        document.body.removeChild(popupOverlay);
        document.body.removeChild(popupContent);
        document.body.removeEventListener("click", closePopup);
      });

      document.body.addEventListener("click", closePopup);
    });
  });
});

///here is products event//
document.addEventListener("DOMContentLoaded", function () {
  let cartCount = 0;
  let cartIcon = document.querySelector(".cart-count");

  let buyButtons = document.querySelectorAll(".buyBtn");
  let plusIcons = document.querySelectorAll(".fa-solid.fa-plus");

  buyButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Increment cart count
      cartCount++;
      // Update the cart display
      updateCart();
    });
  });

  plusIcons.forEach(function (icon) {
    icon.addEventListener("click", function () {
      // Increment cart count
      cartCount++;
      // Update the cart display
      updateCart();
    });
  });

  // Function to update the cart display
  function updateCart() {
    // Update the cart count text
    cartIcon.innerText = cartCount;
    // Show the cart count icon
    showCartIcon();
  }

  // Function to show the cart count icon
  function showCartIcon() {
    cartIcon.style.display = "inline-block";
  }

  // Initially hide the cart count icon
  cartIcon.style.display = "none";

  // Attach click event listener to the document to show cart icon on any click
  document.addEventListener("click", function () {
    showCartIcon();
  });
});
