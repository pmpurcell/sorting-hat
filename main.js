// Student Arrays

const newStudents = [];

const deathEaters = [];

// Render to Dom

const renderToDom = (containerId, textToRender) => {
  const selectedContainer = document.querySelector(containerId);
  selectedContainer.innerHTML = textToRender;
};

// Renders Sorting Hat Card to Page

const sortingHat = () => {
  let domString = `<div class="card" style="width: 18rem;">
    <img src="https://w7w5t4b3.rocketcdn.me/wp-content/uploads/2018/07/sorting-hat-quiz.jpg" class="card-img-top" alt="hat">
    <div class="card-body">
      <h5 class="card-title">Welcome to Hogwarts</h5>
      <p class="card-text">Never tickle a sleeping dragon.</p>
      <a href="#" id="startButton" class="btn btn-primary">Get sorted</a>
    </div>
  </div>`;

  renderToDom("#sortingHat", domString);
};

// Button Controls

const button = () => {
  document.querySelector(`body`).addEventListener("click", buttonControl);
  document
    .querySelector(`#hogwartsStudents`)
    .addEventListener("click", expelStudents);
};

const buttonControl = (event) => {
  if (event.target.id === "startButton") {
    let domString = `
     <form id="studentNameForm">
     <div class="mb-3">
       <label for="studentName" class="form-label">Student Name</label>
       <input type="text" placeholder="Enter your name here." class="form-control" id="studentName">
     </div>
     <button type="submit" id="submitButton" class="btn btn-primary">Submit</button>
     </form>
     `;

    renderToDom("#studentForm", domString);
  }

  if (event.target.id === "submitButton" && event.target.type === "submit") {
    const nameofStudent = document.getElementById("studentName").value;
    if (nameofStudent === "") {
      makeHowler();
    } else {
      event.preventDefault();
      sortStudents();
    }

    document.querySelector("form").reset();
  }
};

const makeHowler = () => {
  {
    let domString = `

  <div class="howler">
  <img src="https://static.wikia.nocookie.net/harrypotter/images/e/e4/Howler.png" alt-text="howler">
  <h6>"You must enter your name!"</h6>
  </div>

  `;
    renderToDom("#howlerDiv", domString);
  }

  const clearHowler = () => {
    let domString = ` `;
    renderToDom("#howlerDiv", domString);
  };
  setTimeout(clearHowler, 3 * 1000);
};

// Renders student cards to page

const placeStudents = (array) => {
  let domString = " ";

  array.forEach((student, i) => {
    domString += `
        <div class="card ${student.style}" style="width: 18rem;">
            <img src="${student.crest}" class="card-img-top" alt="${student.house}">
            <div class="card-body">
                <h5 class="card-title">${student.name}</h5>
                <p class="card-text">${student.house}</p>
                <a href="#" type= "button" id= "${i}" class="btn btn-primary">Expel!!</a>
            </div>
        </div>
`;
  });

  renderToDom("#hogwartsStudents", domString);
};

// Expels a student and sends them to Death Eaters

const expelStudents = (event) => {
  const targetType = event.target.type;
  const targetId = event.target.id;

  if (targetType === "button") {
    event.preventDefault();

    const expelledStudent = newStudents.splice(targetId, 1);

    deathEaters.push(expelledStudent[0]);

    sortDeathEaters(deathEaters);
    placeStudents(newStudents);
  }
};

// Prints Death Eaters

const sortDeathEaters = (array) => {
  let domString = " ";

  array.forEach((student) => {
    domString += `
        <div class="card evil" style="width: 18rem;">
            <img src="https://static.wikia.nocookie.net/pottermore/images/7/71/Screenshot_-_10_5_2013_%2C_3_57_20_PM.png" class="card-img-top" alt="The Dark Mark!">
            <div class="card-body">
                <h5 class="card-title">${student.name}</h5>
                <p class="card-text">This student is now a Death Eater!</p>
            </div>
        </div>
`;

    renderToDom("#expelledStudents", domString);
  });
};

// Sorts students into houses and adds to the array.

const sortStudents = () => {
  const randomNumber = () => {
    return Math.floor(Math.random() * 4) + 1;
  };

  const studentHouse = randomNumber();

  if (studentHouse === 1) {
    const student = {
      name: document.querySelector("#studentName").value,
      house: "Gryffindor",
      crest: `https://static.wikia.nocookie.net/pottermore/images/1/16/Gryffindor_crest.png`,
      style: "grif-style",
    };
    newStudents.push(student);
  }
  if (studentHouse === 2) {
    const student = {
      name: document.querySelector("#studentName").value,
      house: "Hufflepuff",
      crest: `https://static.wikia.nocookie.net/pottermore/images/5/5e/Hufflepuff_crest.png`,
      style: "huff-style",
    };
    newStudents.push(student);
  }
  if (studentHouse === 3) {
    const student = {
      name: document.querySelector("#studentName").value,
      house: "Ravenclaw",
      crest: `https://static.wikia.nocookie.net/pottermore/images/4/4f/Ravenclaw_crest.png`,
      style: "rave-style",
    };
    newStudents.push(student);
  }
  if (studentHouse === 4) {
    const student = {
      name: document.querySelector("#studentName").value,
      house: "Slytherin",
      crest: `https://static.wikia.nocookie.net/pottermore/images/4/45/Slytherin_Crest.png`,
      style: "sly-style",
    };
    newStudents.push(student);
  }

  placeStudents(newStudents);
};

// Initializes App

const init = () => {
  sortingHat();
  button();
  placeStudents(newStudents);
  sortDeathEaters(deathEaters);
};

init();
