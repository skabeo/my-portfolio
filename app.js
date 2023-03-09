const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeButton = document.querySelector('.close-btn');
const links = document.querySelectorAll('.links a');

hamburger.addEventListener('click', () => {
  menu.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  menu.style.display = 'none';
});

links.forEach((link) => {
  link.addEventListener('click', (event) => {
    menu.style.display = 'none';
    const targetSection = document.querySelector(event.target.hash);
    targetSection.scrollIntoView({ behavior: 'smooth' });
    event.preventDefault();
  });
});

const projects = [
  {
    name: "Multi-Post Stories",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    windowDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    featuredImage: "img/Img Placeholder.svg",
    windowImage: "img/pop-up-img.png",
    gradientImg: "img/Ellipse 19.svg",
    gradientClass: "left-pos",
    gradientContainer: "ellipse",
    technologies: ["CSS","html", "bootstrap", "Ruby"],
    liveVersionLink: "https://skabeo.github.io/Mobile-Version-2.0/",
    sourceLink: "https://github.com/skabeo/Mobile-Version-2.0"
  },
  {
    name: "Multi-Post Stories",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    windowDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    featuredImage: "img/Img Placeholder.svg",
    windowImage: "img/pop-up-img.png",
    gradientImg: "img/Ellipse 20.svg",
    gradientClass: "right-pos",
    gradientContainer: "right-ellipse",
    technologies: ["CSS","html", "bootstrap", "Ruby"],
    liveVersionLink: "https://skabeo.github.io/Mobile-Version-2.0/",
    sourceLink: "https://github.com/skabeo/Mobile-Version-2.0"
  },
  {
    name: "Multi-Post Stories",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    windowDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    featuredImage: "img/Img Placeholder.svg",
    windowImage: "img/pop-up-img.png",
    gradientImg: "img/Ellipse 21.svg",
    gradientClass: "left-pos2",
    gradientContainer: "left-ellipse2",
    technologies: ["CSS","html", "bootstrap", "Ruby"],
    liveVersionLink: "https://skabeo.github.io/Mobile-Version-2.0/",
    sourceLink: "https://github.com/skabeo/Mobile-Version-2.0"
  },
  {
    name: "Multi-Post Stories",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    windowDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    featuredImage: "img/Img Placeholder.svg",
    windowImage: "img/pop-up-img.png",
    gradientImg: "img/Ellipse 22.svg",
    gradientClass: "right-pos2",
    gradientContainer: "right-ellipse2",
    technologies: ["CSS","html", "bootstrap", "Ruby"],
    liveVersionLink: "https://skabeo.github.io/Mobile-Version-2.0/",
    sourceLink: "https://github.com/skabeo/Mobile-Version-2.0"
  }
];

// const projectSection = document.getElementById('projectSection');
// const projectSection2 = document.getElementById('projectSection2');

// 		function createProjectDetailsPopup(project) {
//       const popup = document.createElement('div');
//       popup.classList.add('project-popup');
//       const closeButton = document.createElement('img');
//       closeButton.classList.add('close-button');
//       closeButton.src = 'img/close btn.png';
//       const closeContainer = document.createElement('div');
//       closeContainer.classList.add('close-container');
//       const popupDetails = document.createElement('div');
//       popupDetails.innerHTML = `
//       <div class="popup-content">
//         <h2 class="popup-header">${project.name}</h2>
//         <img class="popup-snapshot" src="${project.windowImage}" alt="project-image">
//         <p class="popup-des">${project.windowDescription}</p>
//         <div class="popup-skills-container">
//           <ul class="popup-skills">
//             <li><img src="img/Devider.svg" alt="skills divider line"></li>
//             <li>html</li>
//             <li><img src="img/Devider.svg" alt="skills divider line"></li>
//             <li>Ruby on Rals</li>
//             <li><img src="img/Devider.svg" alt="skills divider line"></li>
//             <li>css</li>
//             <li><img src="img/Devider.svg" alt="skills divider line"></li>
//           </ul>
//         </div>
//         <div class="popup-btn-container">
//           <button class="button btn-pop">
//             <a href="${project.liveVersionLink}">See Live</a>
//             <img src="img/pop-up-live.svg">
//           </button>
//           <button class="button btn-pop">
//             <a href="${project.sourceLink}">See Source</a>
//             <img src="img/pop-up-source.svg">
//           </button>
//         </div>
//       </div>
//       `; 
//       const contentWrapper = document.createElement('div');
//       contentWrapper.classList.add('content-wrapper');
//       const nameElement = document.createElement('h2');
//       const imageElement = document.createElement('a');
//       const descriptionElement = document.createElement('p');
//       const technologiesElement = document.createElement('div');

//       contentWrapper.append(popupDetails, nameElement, imageElement, descriptionElement, technologiesElement);
//       popup.append(closeContainer, contentWrapper);

//       closeContainer.appendChild(closeButton);

//       closeButton.addEventListener('click', () => {
//         popup.remove();
//       });

//       return popup;
//     }

    projectSection.addEventListener('click', (event) => {
      const target = event.target;
      if (target.tagName === 'BUTTON') {
        const projectIndex = target.dataset.projectIndex;
        const project = projects[projectIndex];
        const popup = createProjectDetailsPopup(project);
        document.body.appendChild(popup);
      }
    });

    function generateProjectElements() {
      projectSection.innerHTML = '';

      for (let i = 0; i < projects.length; i++) {
        const project = projects[i];
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        projectElement.innerHTML = `
        <div class="img-place-container ${project.gradientClass}">
          <img src="${project.featuredImage}" alt="${project.name}">
          <div class="${project.gradientContainer}">
            <img src="${project.gradientImg}" alt="background gradient">
          </div>
        </div>
        <div class="heading">
          <h3 class="work-header">${project.name}</h3>
        </div>
        <div class="description">
          <p class="work-description">${project.description}</p>
        </div>  
          
        <div class="work-skills-container">
          <ul class="work-skills">
            <li>${project.technologies[0]}</li>
            <li><img src="img/Rectangle 70.svg" alt="skills divider line"></li>
            <li>${project.technologies[1]}</li>
            <li><img src="img/Rectangle 70.svg" alt="skills divider line"></li>
            <li>${project.technologies[2]}</li>
            <li><img src="img/Rectangle 70.svg" alt="skills divider line"></li>
            <li>${project.technologies[3]}</li>
          </ul>
        </div>

        <div class="button-container">
          <button class='button' data-project-index="${i}">See Project</button>
        </div>
        `;
        projectSection.appendChild(projectElement);
      }
    }
    generateProjectElements();


    // const desktop = [
    //   {
    //     title: "project1",
    //     gradientImg: "img/gradient/gradient3.svg",
    //     gradientCont: "project-gradients1",
    //   },
    //   {
    //     title: "project1",
    //     gradientImg: "img/gradient/gradient4.svg",
    //     gradientCont: "project-gradients2",
    //     reverse: "backwards"
    //   },
    //   {
    //     title: "project1",
    //     gradientImg: "img/gradient/gradient5.svg",
    //     gradientCont: "project-gradients3",
    //   },
    //   {
    //     title: "project1",
    //     gradientImg: "img/gradient/gradient6.svg",
    //     gradientCont: "project-gradients4",
    //     reverse: "backwards"
    //   }
    // ];


    // function generateProjectElements2 () {
    //   projectSection2.innerHTML = '';

    //   for (let i = 0; i < desktop.length; i++) {
    //     const project = desktop[i];
    //     const projectElement2 = document.createElement('div');
    //     projectElement2.classList.add('project2');
    //     projectElement2.innerHTML = `
    //     <div class="flex-layout2 ${project.reverse}">
    //       <div class="img-placeholder-container2">
    //         <img class="img-placeholder2" src="img/Img Placeholder-desktop.svg" alt="sreenshot of project">
    //         <div class="${project.gradientCont}">
    //           <img src="${project.gradientImg}" alt="background gradient">
    //         </div>
    //       </div>
    //       <div class="project-info2">
    //         <h4>Multi-Post Stories</h4>
    //         <p class="project-description2">A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.</p>
    //         <div class="work-skills-container2">
    //           <ul class="work-skills2">
    //             <li>CSS</li>
    //             <li><img src="img/Rectangle 70.svg" alt="skills divider line"></li>
    //             <li>HTML</li>
    //             <li><img src="img/Rectangle 70.svg" alt="skills divider line"></li>
    //             <li>bootstrap</li>
    //             <li><img src="img/Rectangle 70.svg" alt="skills divider line"></li>
    //             <li>Ruby</li>
    //           </ul>
    //         </div>
    //         <button class='button' data-project-index="${i}">See Project</button>
    //       </div>
    //     </div>
    //     `

    //     projectSection2.appendChild(projectElement2);
    //   }
    // }

    // generateProjectElements2();


    // projectSection2.addEventListener('click', (event) => {
    //   const target = event.target;
    //   if (target.tagName === 'BUTTON') {
    //     const projectIndex = target.dataset.projectIndex;
    //     const project = projects[projectIndex];
    //     const popup = createProjectDetailsPopup(project);
    //     document.body.appendChild(popup);
    //   }
    // });