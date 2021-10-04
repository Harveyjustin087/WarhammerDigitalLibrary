//Nav Functions
$(document).ready(() => {
    const $menuButton = $('.menu-button');
    const $navDropdown = $('#nav-dropdown');
    const $loginDropdown = $('.login-form');
    const $loginButton = $('.login-button');
    const $signIn = $('.sign-in-button');
    const $userNameShow = $('#usernameShow');
    const $userName = $('.username');
    const $welcome = $('.welcome-message');
    const $thanks = $("#thanks");
    const $rider = $('#animateRider');
    const $coach = $('#vampCoach');
  
    $menuButton.on('click', () => {
      $navDropdown.show();
      $welcome.hide();
    })
    
    $navDropdown.on('mouseleave', () => {
      $navDropdown.hide();
    })

    $loginButton.on('click', () => {
      $loginDropdown.show();
    })
    
    $loginDropdown.on('mouseleave', () => {
      $loginDropdown.hide();
    })

    $signIn.on('click', () => {
      $loginDropdown.hide();
      $welcome.show("fast","linear", 700 );
      $userNameShow.text($userName.val());
      $rider.animate({right:"+=1500"},5000);
    })
    $thanks.on('click', () => {
      $welcome.hide();
    })
    //Animations
    $coach.animate({right:"+=1500"},5000)
    //Unit Stats Dropdown functions
    const $orcdropDown = $('#unit-dropdown');
    const $lordPic = $('#lordPic');
    const $corePic = $('#corePic');
    const $specialPic = $('#specialPic');
    const $rarePic = $('#rarePic');

    $orcdropDown.on('change', ()=> {
        switch ($('#unit-dropdown').val()) {
            case "lords":
                $lordPic.show("fast","linear", 500 );
                $corePic.hide();
                $rarePic.hide();
                $specialPic.hide();
              break;
            case "core":
                $corePic.show("fast","linear", 500 );
                $lordPic.hide();
                $rarePic.hide();
                $specialPic.hide();
                break;
            case "special":
                $specialPic.show("fast","linear", 500 );
                $corePic.hide();
                $rarePic.hide();
                $lordPic.hide();
                break;
            case "rare":
                $rarePic.show("fast","linear", 500 );
                $corePic.hide();
                $lordPic.hide();
                $specialPic.hide();
                break;
          }
    })
  })
  