import { right } from "@popperjs/core";
import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should show the cover image
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "right", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastName: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); // print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  let positionSocials;
  if (variables.socialMediaPosition === "position-right")
    positionSocials = `<ul class="position-right">
      <li><a href="https://twitter.com/${variables.twitter}"><i class="fab fa-twitter"></i></a></li>
      <li><a href="https://github.com/${variables.github}"><i class="fab fa-github"></i></a></li>
      <li><a href="https://linkedin.com/${variables.linkedin}"><i class="fab fa-linkedin"></i></a></li>
      <li><a href="https://instagram.com/${variables.instagram}"><i class="fab fa-instagram"></i></a></li>
    </ul>`;

  if (variables.socialMediaPosition === "position-left")
    positionSocials = `<ul class="position-left">
  <li><a href="https://twitter.com/${variables.twitter}"><i class="fab fa-twitter"></i></a></li>
  <li><a href="https://github.com/${variables.github}"><i class="fab fa-github"></i></a></li>
  <li><a href="https://linkedin.com/${variables.linkedin}"><i class="fab fa-linkedin"></i></a></li>
  <li><a href="https://instagram.com/${variables.instagram}"><i class="fab fa-instagram"></i></a></li>
    </ul>`;

  // reset the website body with the new html output

  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}

          <img src="${variables.avatarURL}" class="photo" />

          <h1>${variables.name} ${variables.lastName} </h1>

          ${positionSocials}       

          <h2>${variables.role}</h2>

          <h3>${variables.city},${variables.country}</h3>
        
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should show the cover image
    includeCover: true,
    // this is the image's url that will be used as a background for the profile cover
    background:
      "https://img.freepik.com/vector-gratis/plantilla-patrones-fisuras-emoticonos-varias-caras_23-2148678996.jpg?w=740&t=st=1716371225~exp=1716371825~hmac=68a5a1e68283a41ccded6cf842f56e31bde63f34ab2b4d360619448074be38e8",
    // this is the url for the profile avatar
    avatarURL:
      "src/assets/Imagen de WhatsApp 2024-04-22 a las 09.51.59_a2c2019a.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: "",
    github: "",
    linkedin: "",
    instagram: "",
    name: "Name",
    lastName: "last_name",
    role: "Selection up",
    country: "Select country",
    city: "Select city"
  };
  render(window.variables); // render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new values
    });
  });
};
