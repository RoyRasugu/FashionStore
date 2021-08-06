let navbar = document.querySelector('.navbar')

document.querySelector('#menu-bar').onclick = () =>{
    navbar.classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    navbar.classList.remove('active');
}

window.onscroll = () =>{

    navbar.classList.remove('active');

    if(window.scrollY > 100){
        document.querySelector('header').classList.add('active');
    }else{
        document.querySelector('header').classList.remove('active');
    }

}


document.querySelectorAll('.small-image-1').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-1').src = images.getAttribute('src');
    }
});

document.querySelectorAll('.small-image-2').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-2').src = images.getAttribute('src');
    }
});

document.querySelectorAll('.small-image-3').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-3').src = images.getAttribute('src');
    }
});

var swiper = new Swiper(".product-slider", {
    slidesPerView: 3,
    loop:true,
    spaceBetween: 10,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        550: {
          slidesPerView: 2,
        },
        800: {
          slidesPerView: 3,
        },
        1000: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".review-slider", {
    slidesPerView: 3,
    loop:true,
    spaceBetween: 10,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        550: {
          slidesPerView: 2,
        },
        800: {
          slidesPerView: 3,
        },
        1000: {
            slidesPerView: 3,
        },
    },
});
function validateForm() {
    var waist = document.getElementById("waist").value;
    var hipsize = document.getElementById("hipsize").value;
    var height = document.getElementById("height").value;
    var bust = document.getElementById("bust").value;
    var color = document.getElementById("color").value;
    var design = document.getElementById("design").value;
    var email = document.getElementById("email").value
       if (email ==="") {
           alert("please enter your email address for communication purposes.")
       } else if (waist === "") {
      alert("Please enter your waist size");
      return false;
    } else if (hipsize === "") {
      alert("Please enter your hip size");
      return false;
    } else if (height === "") {
        alert("Please enter your height");
        return false;
    } else if (bust === "") {
        alert("Please enter your bust size");
        return false;
    } else if (color === "") {
        alert("Please specify the color you'd want your clothe to have");
        return false;
    } else if (design === "") {
        alert("Please specify the design you'd like your clothe to have");
        return false;        
    } else {
      alert(
        email + "Your order has been received. We are doing our best to make exactly what you want in a week's time"
      );
    }
    event.preventDefault();
  }

