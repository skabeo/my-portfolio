const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeButton = document.querySelector('.close-btn');
const links = document.querySelectorAll('.links a');
const deskLinks = document.querySelectorAll('.desk-link a');

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

deskLinks.forEach((desk) => {
  desk.addEventListener('click', (event) => {
    const targetSection = document.querySelector(event.target.hash);
    targetSection.scrollIntoView({ behavior: 'smooth' });
    event.preventDefault();
  });
});

const projects = [
  {
    name: 'MyTracker app',
    description: "Explore the captivating tale of transactions within a category through this enchanting mobile webpage. Experience the ups, downs and surprising turns as numbers come together and navigate their path through the ledger.",
    windowDescription: "Explore the captivating tale of transactions within a category through this enchanting mobile webpage. Experience the ups, downs and surprising turns as numbers come together and navigate their path through the ledger.",
    featuredImage: 'img/projects/myTracker2.png',
    windowImage: 'img/projects/my-tracker-desk.png',
    gradientImg: 'img/Ellipse 19.svg',
    gradientClass: 'left-pos',
    gradientContainer: 'ellipse',
    technologies: ['Ruby', 'Rails', 'Postgres', 'CSS'],
    liveVersionLink: 'https://spec-mytracker.onrender.com/',
    sourceLink: 'https://github.com/skabeo/23-books',
  },
  {
    name: 'Apple Inc',
    description: "Apple Inc is a mobile webapp that fetches data from a Financial Modeling Site to display the four main statement of Apple Inc. The Statements displayed includes the Income Statement, Balance Sheet, Cash flow statement and the Equity Statement for the year ended 2022.",
    windowDescription: "Apple Inc is a mobile webapp that fetches data from a Financial Modeling Site to display the four main statement of Apple Inc. The Statements displayed includes the Income Statement, Balance Sheet, Cash flow statement and the Equity Statement for the year ended 2022.",
    featuredImage: 'img/projects/appleInc.jpg',
    windowImage: 'img/projects/apple-inc-desk.png',
    gradientImg: 'img/Ellipse 20.svg',
    gradientClass: 'right-pos',
    gradientContainer: 'right-ellipse',
    technologies: ['React', 'Redux', 'API', 'Sass'],
    liveVersionLink: 'https://apple-org.onrender.com/',
    sourceLink: 'https://github.com/skabeo/apple-inc',
  },
  {
    name: "Space Travelers' Hub",
    description: "The Space Travelers' Hub is a webapp that fetches data from the rockets endpoint API from space X and also from the mission endpoint API. The Space Travelers' Hub is a web application that allows users to explore and reserve space missions and rockets.",
    windowDescription: "The Space Travelers' Hub is a webapp that fetches data from the rockets endpoint API from space X and also from the mission endpoint API. The Space Travelers' Hub is a web application that allows users to explore and reserve space missions and rockets. Users can join missions, leave missions, and view their reserved missions and rockets in their profile.",
    featuredImage: 'img/projects/space-hub.png',
    windowImage: 'img/projects/space-hub-desk.png',
    gradientImg: 'img/Ellipse 21.svg',
    gradientClass: 'left-pos2',
    gradientContainer: 'left-ellipse2',
    technologies: ['React', 'Redux', 'CSS', 'JSX'],
    liveVersionLink: 'https://skabeo-space.onrender.com/',
    sourceLink: 'https://github.com/skabeo/my-space-hub',
  },
  {
    name: 'Afrochella',
    description: "Afrochella is an annual extravaganza held in Accra, Ghana, celebrating the richness of African culture, art, and music. This vibrant festival has gained international acclaim for its diverse offerings.",
    windowDescription: "Afrochella is an annual extravaganza held in Accra, Ghana, celebrating the richness of African culture, art, and music. This vibrant festival has gained international acclaim for its diverse offerings. At its core, Afrochella is a jubilant celebration of African heritage. Attendees are treated to a sensory feast that encompasses music, art, fashion, and food. A captivating lineup of African and international musicians fills the air with infectious rhythms, making it impossible to resist the urge to dance",
    featuredImage: 'img/projects/afrochella.png',
    windowImage: 'img/projects/afrochella-desk.png',
    gradientImg: 'img/Ellipse 22.svg',
    gradientClass: 'right-pos2',
    gradientContainer: 'right-ellipse2',
    technologies: ['CSS', 'html', 'bootstrap', 'JavaScript'],
    liveVersionLink: 'https://skabeo.github.io/Afrochella-Project/',
    sourceLink: 'https://github.com/skabeo/Afrochella-Project',
  },
];

const projectSection = document.getElementById('projectSection');
const projectSection2 = document.getElementById('projectSection2');

function createProjectDetailsPopup(project) {
  const popup = document.createElement('div');
  popup.classList.add('project-popup');
  const closeButton = document.createElement('img');
  closeButton.classList.add('close-button');
  closeButton.src = 'img/close btn.png';
  const closeContainer = document.createElement('div');
  closeContainer.classList.add('close-container');
  const popupDetails = document.createElement('div');
  popupDetails.innerHTML = `
  <div class="popup-content">
    <h2 class="popup-header">${project.name}</h2>
    <img class="popup-snapshot img-1" src="${project.windowImage}" alt="project-image">
    <p class="popup-des">${project.windowDescription}</p>
    <div class="popup-skills-container">
      <ul class="popup-skills">
        <li><img src="img/Devider.svg" alt="skills divider line"></li>
        <li>${project.technologies[0]}</li>
        <li><img src="img/Devider.svg" alt="skills divider line"></li>
        <li>${project.technologies[1]}</li>
        <li><img src="img/Devider.svg" alt="skills divider line"></li>
        <li>${project.technologies[2]}</li>
        <li><img src="img/Devider.svg" alt="skills divider line"></li>
      </ul>
    </div>
    <div class="popup-btn-container">
      <button class="button btn-pop">
        <a href="${project.liveVersionLink}" target='_blank'>See Live</a>
        <img src="img/pop-up-live.svg">
      </button>
      <button class="button btn-pop">
        <a href="${project.sourceLink}" target='_blank'>See Source</a>
        <img src="img/pop-up-source.svg">
      </button>
    </div>
  </div>
  `;
  const contentWrapper = document.createElement('div');
  contentWrapper.classList.add('content-wrapper');
  const nameElement = document.createElement('h2');
  const imageElement = document.createElement('a');
  const descriptionElement = document.createElement('p');
  const technologiesElement = document.createElement('div');

  contentWrapper.append(
    popupDetails,
    nameElement,
    imageElement,
    descriptionElement,
    technologiesElement,
  );
  popup.append(closeContainer, contentWrapper);

  closeContainer.appendChild(closeButton);

  closeButton.addEventListener('click', () => {
    popup.remove();
  });

  return popup;
}

projectSection.addEventListener('click', ({ target }) => {
  if (target.tagName === 'BUTTON') {
    console.log(target.dataset)
    const { projectIndex } = target.dataset;
    const project = projects[projectIndex];
    const popup = createProjectDetailsPopup(project);
    document.body.appendChild(popup);
  }
});

function generateProjectElements() {
  projectSection.innerHTML = '';

  for (let i = 0; i < projects.length; i += 1) {
    const project = projects[i];
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');
    projectElement.innerHTML = `
    <div class="img-place-container ${project.gradientClass}">
      <img class='img-1' src="${project.featuredImage}" alt="${project.name}">
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

const desktop = [
  {
    name: 'MyTracker app',
    title: 'project1',
    gradientImg: 'img/gradient/gradient3.svg',
    gradientCont: 'project-gradients1',
    featuredImage: 'img/projects/my-tracker-desk.png',
    technologies: ['Ruby', 'Rails', 'Postgres', 'CSS'],
    description: "Explore the captivating tale of transactions within a category through this enchanting mobile webpage. Experience the ups, downs and surprising turns as numbers come together and navigate their path through the ledger.",
    windowDescription: "Explore the captivating tale of transactions within a category through this enchanting mobile webpage. Experience the ups, downs and surprising turns as numbers come together and navigate their path through the ledger.",
  },
  {
    name: 'Apple Inc',
    title: 'project2',
    gradientImg: 'img/gradient/gradient4.svg',
    gradientCont: 'project-gradients2',
    reverse: 'backwards',
    featuredImage: 'img/projects/apple-inc-desk.png',
    technologies: ['React', 'Redux', 'API', 'Sass'],
    description: "Apple Inc is a mobile webapp that fetches data from a Financial Modeling Site to display the four main statement of Apple Inc. The Statements displayed includes the Income Statement, Balance Sheet, Cash flow statement and the Equity Statement for the year ended 2022.",
    windowDescription: "Apple Inc is a mobile webapp that fetches data from a Financial Modeling Site to display the four main statement of Apple Inc. The Statements displayed includes the Income Statement, Balance Sheet, Cash flow statement and the Equity Statement for the year ended 2022.",
  },
  {
    name: "Space Travelers' Hub",
    title: 'project3',
    gradientImg: 'img/gradient/gradient5.svg',
    gradientCont: 'project-gradients3',
    featuredImage: 'img/projects/space-hub-desk.png',
    technologies: ['React', 'Redux', 'CSS', 'JSX'],
    description: "The Space Travelers' Hub is a webapp that fetches data from the rockets endpoint API from space X and also from the mission endpoint API. The Space Travelers' Hub is a web application that allows users to explore and reserve space missions and rockets.",
    windowDescription: "The Space Travelers' Hub is a webapp that fetches data from the rockets endpoint API from space X and also from the mission endpoint API. The Space Travelers' Hub is a web application that allows users to explore and reserve space missions and rockets. Users can join missions, leave missions, and view their reserved missions and rockets in their profile.",
  },
  {
    name: 'Afrochella',
    title: 'project4',
    gradientImg: 'img/gradient/gradient6.svg',
    gradientCont: 'project-gradients4',
    reverse: 'backwards',
    featuredImage: 'img/projects/afrochella-desk.png',
    technologies: ['CSS', 'html', 'bootstrap', 'JavaScript'],
    description: "Afrochella is an annual extravaganza held in Accra, Ghana, celebrating the richness of African culture, art, and music. This vibrant festival has gained international acclaim for its diverse offerings.",
    windowDescription: "Afrochella is an annual extravaganza held in Accra, Ghana, celebrating the richness of African culture, art, and music. This vibrant festival has gained international acclaim for its diverse offerings. At its core, Afrochella is a jubilant celebration of African heritage. Attendees are treated to a sensory feast that encompasses music, art, fashion, and food. A captivating lineup of African and international musicians fills the air with infectious rhythms, making it impossible to resist the urge to dance",
  },
];

function generateProjectElements2() {
  projectSection2.innerHTML = '';

  for (let i = 0; i < desktop.length; i += 1) {
    const project = desktop[i];
    const projectElement2 = document.createElement('div');
    projectElement2.classList.add('project2');
    projectElement2.innerHTML = `
    <div class="flex-layout2 ${project.reverse}">
      <div class="img-placeholder-container2">
        <div class='desk-img-container'>
          <img class="img-placeholder2 img-1" src=${project.featuredImage} alt="sreenshot of project">
        </div>
        <div class="${project.gradientCont}">
          <img src="${project.gradientImg}" alt="background gradient">
        </div>
      </div>
      <div class="project-info2">
        <h4>${project.name}</h4>
        <p class="project-description2">${project.description}</p>
        <div class="work-skills-container2">
          <ul class="work-skills2">
            <li>${project.technologies[0]}</li>
            <li><img src="img/Rectangle 70.svg" alt="skills divider line"></li>
            <li>${project.technologies[1]}</li>
            <li><img src="img/Rectangle 70.svg" alt="skills divider line"></li>
            <li>${project.technologies[2]}</li>
            <li><img src="img/Rectangle 70.svg" alt="skills divider line"></li>
            <li>${project.technologies[3]}</li>
          </ul>
        </div>
        <button class='button' data-project-index="${i}">See Project</button>
      </div>
    </div>
    `;
    projectSection2.appendChild(projectElement2);
  }
}

generateProjectElements2();

projectSection2.addEventListener('click', ({ target }) => {
  if (target.tagName === 'BUTTON') {
    const { projectIndex } = target.dataset;
    const project = projects[projectIndex];
    const popup = createProjectDetailsPopup(project);
    document.body.appendChild(popup);
  }
});

const form = document.querySelector('#myForm');
const errorMessage = document.querySelector('#errorMessage');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.querySelector('#email').value;
  const emailBack = document.querySelector('#email');
  if (email === email.toLowerCase()) {
    form.submit();
  } else {
    errorMessage.textContent = 'Please enter a lower case email!';
    errorMessage.classList.remove('errorOutput');
    emailBack.classList.add('back-col');
  }
});

[nameInput, emailInput, messageInput].forEach((input) => {
  input.addEventListener('input', () => {
    const formData = {
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem('formData', JSON.stringify(formData));
  });
});

const savedFormData = JSON.parse(localStorage.getItem('formData'));
if (savedFormData) {
  nameInput.value = savedFormData.name;
  emailInput.value = savedFormData.email;
  messageInput.value = savedFormData.message;
}
