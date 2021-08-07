# Sorting Hat

Use this app to sort your friends in you into the four magical houses of Hogwarts! If someone makes you mad, you can expel them and send them over to Voldemort's Army!

## Get started
git clone git@github.com:pmpurcell/sorting-hat.git
cd sorting-hat

## The User
This app is useful for randomly sorting groups in a fun way!

## Features
Randomizer: Entering a student name will randomly assign it one of four houses.
Expel: Clicking the "Expel" button on a card with remove that student and add them to Voldemort's Army

## Relevant Links

## Wireframes

## Video Walkthrough
Loom(https://www.loom.com/share/456e320237f840368c7abab84ece9a9d)

## Code Snippet

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

## Project Snippet

## Contributors
Madden Purcell(https://github.com/pmpurcell)