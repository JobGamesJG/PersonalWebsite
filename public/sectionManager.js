const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".route");
const itemContainer = document.querySelector(".item-container");
let activeSection;
let current = 0;
let lastScroll;

//set active tag to nav links//
const activeSectionHandler = (currentSectionId) => {
  navLinks.forEach((link) => {
    if (link.getAttribute("section-data") === currentSectionId) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  //   sections.forEach((section) => {
  //     if (section.getAttribute("id") === currentSectionId) {
  //       section.classList.add("active");
  //       //window.location.hash = currentSectionId;
  //     }
  //     // else {
  //     // 	section.classList.remove("active");
  //     // }
  //   });
};

//section watcher & settings//
const sectionWatcherCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      activeSectionHandler(entry.target.getAttribute("id"));
    }
  });
};

const sectionWatcherOptions = {
  threshold: 0.6,
};

const sectionWatcher = new IntersectionObserver(sectionWatcherCallback, sectionWatcherOptions);

sections.forEach((section) => {
  sectionWatcher.observe(section);
});
