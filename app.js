// $(function(){
//     $('.chat-header').click(function(){
//       $(this).toggleClass('offline');
//       $(this).toggleClass('online');
//       $('.chat-window').toggleClass('docked');
//     });
    
//     setInterval(function(){
//       $('.progress-indicator').toggleClass('hide');
//     },7846);
//   });

document.addEventListener("DOMContentLoaded", function () {
    var chatHeader = document.querySelector(".chat-header");
    var chatWindow = document.querySelector(".chat-window");
    var progressIndicator = document.querySelector(".progress-indicator");
  
    if (chatHeader && chatWindow && progressIndicator) {
      chatHeader.addEventListener("click", function () {
        this.classList.toggle("offline");
        this.classList.toggle("online");
        chatWindow.classList.toggle("docked");
      });
  
      setInterval(function () {
        progressIndicator.classList.toggle("hide");
      }, 7846);
    }
  });
  