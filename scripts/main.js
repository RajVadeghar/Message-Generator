const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let strangerText = 'Hey NAME, You are AWESOME. Love ya...'
let strangerMembers = ['xyz']
let friendsText = "Hey NAME, I love you. Hope, we'll be nicer to each other upto the end."
let friendMembers = ['abhilash', 'vamshi']
let familyText = 'Hey NAME, I Love U :)'
let familyMembers = ['mom','dad']
let enemyText = 'Hey NAME, Go fuck YOURSELF!!!'
let enemyMembers = ['buddy']
let myText = 'Welcome PROFESSOR :)'
let me = ['raj vadeghar']

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
    else if(enemyMembers.includes(name.toLowerCase())) {
      let newStory = enemyText;
      newStory = newStory.replace('NAME', name);
      story.textContent = newStory;
    }
    else if(me.includes(name.toLowerCase())) {
      let newStory = myText;
      story.textContent = newStory;
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
