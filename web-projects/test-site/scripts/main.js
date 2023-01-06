

/*document.querySelector("html").addEventListener("click", function () {
    alert("别戳我，我怕疼。");
  });*/
  
 /* let myImage = document.querySelector('img');

  myImage.onclick = function(){
        let mySrc = myImage.getAttribute('src');
        if(mySrc === 'images/p.jpg'){
            myImage.setAttribute('src','images/person.jpg');
        }
      else{
        myImage.setAttribute('src', 'images/p.jpg');
      }

  }*/

  let myImage = document.querySelector('img');

  myImage.onclick = function() {
      let mySrc = myImage.getAttribute('src');
      if(mySrc === 'images/p.jpg') {
        myImage.setAttribute('src', 'images/person.jpg');
      } else {
        myImage.setAttribute('src', 'images/p.jpg');
      }
  }
  
  let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
  }
  
 
    setUserName();
  
  
  myButton.onclick = function() {
    setUserName();
 }
 