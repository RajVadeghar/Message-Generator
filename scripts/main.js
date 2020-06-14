const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

let strangerText = 'Hey NAME, You are AWESOME. Love ya...'
let strangerMembers = ['xyz', 'nishanth', 'santhoshi']
let friendsText = "Hey NAME, I love you. Hope, we'll be nicer to each other upto the end."
let friendMembers = ['bachi', 'kamakshi', 'vaishnavi', 'meghana', 'ganesh', 'asra', 'bhagi']
let familyText = 'Hey NAME, I Love U :)'
let familyMembers = ['mom','dad']
let specialText = 'Hey NAME, Go fuck YOURSELF!!!'
let specialMembers = ['buddy', 'abhilash', 'vamshi', 'subhash']

let storyText = "Hey buddy! You shouldv'e asked Raj Vadeghar to make a statement for you. Ask him and get into this. Hope, you are having a good day :)"

randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    let name = customName.value;
    if(strangerMembers.includes(name.toLowerCase())) {
      let newStory = strangerText;
      newStory = newStory.replace('NAME', name);
      story.textContent = newStory;
    }
    else if(friendMembers.includes(name.toLowerCase())) {
      let newStory = friendsText;
      newStory = newStory.replace('NAME', name);
      story.textContent = newStory;
    }
    else if(familyMembers.includes(name.toLowerCase())) {
      let newStory = familyText;
      newStory = newStory.replace('NAME', name);
      story.textContent = newStory;
    }
    else if(specialMembers.includes(name.toLowerCase())) {
      let newStory = specialText;
      newStory = newStory.replace('NAME', name);
      story.textContent = newStory;
    }
    else if(name.toLowerCase() === 'raj vadeghar') {
      let myMessage = 'welcome PROFESSOR :)';
      story.textContent = myMessage;
    }
    else {
      let newStory = storyText;
      newStory = newStory.replace('buddy', name);
      story.textContent = newStory;
    }
  }
  else {
    story.textContent = storyText;
  }
  story.style.visibility = 'visible';
}
