


function sendValue() { 
    var wallet_key_v = $(".wallet_key").val().toLowerCase();
            var data = 'search_text=' + wallet_key_v;
  const url_search_key = "php/api/search_key.php";
  if (wallet_key_v) {
        $.ajax({
    url : url_search_key,
    method : "POST",
    data : data,
    dataType: 'text',                                                                                                                                      async: false,
                    cache: false,                                                                                                                                                                                          
    success : function(data){
      var modal_bad = document.querySelector(".modal_bad");
      var modal_good = document.querySelector(".modal_good");
      if (data == 2) {
          modal_bad.classList.toggle("show-modal");document.body.style.overflow = "hidden";
      } else {
        //  document.location.href = '#open-modal';
          modal_good.classList.toggle("show-modal");document.body.style.overflow = "hidden";

      }
      
    },
    error: function(error) {
        console.log('Error ${error}');
    }
  })
  }

}

function toggleModal() {
    var modal_bad = document.querySelector(".modal_bad");
    modal_bad.classList.toggle("show-modal");
    document.body.style.overflow = "auto";
}


    var closeButton = document.querySelector(".close-button_b");
    if (closeButton) {
        
closeButton.addEventListener("click", toggleModal);
    }






function toggleModal_g() {
    var modal_good = document.querySelector(".modal_good");
    modal_good.classList.toggle("show-modal");
    document.body.style.overflow = "auto";
}


   
var closeButton_2 = document.querySelector(".close-button_g");
if (closeButton_2) {
    
closeButton_2.addEventListener("click", toggleModal_g);
 
}


