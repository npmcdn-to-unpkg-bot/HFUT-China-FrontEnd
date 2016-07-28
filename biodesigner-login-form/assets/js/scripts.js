
jQuery(document).ready(function() {
    /*
        Form validation
    */
    $('.login-form input[type="text"], .login-form input[type="password"], .login-form textarea').on('focus', function() {
        $(this).removeClass('input-error');
    });
    
    $('.login-form').on('submit', function(e) {
        
        $(this).find('input[type="text"], input[type="password"], textarea').each(function(){
            if( $(this).val() == "") {
                e.preventDefault();
                $(this).addClass('input-error');
            }
            else {
                $(this).removeClass('input-error');
            }
        }); 
    }); 
});

/**
 * [login description]
 * @return {[type]} [description]
 */
function login() {
    $("#input-before-ico").css('display', 'none');
    $("#input-after-ico").css('display', 'none');
    alert("login...start");


    var username = jQuery("#form-username").val();
    var password = jQuery("#form-password").val();
    var rememberMe = $('#remember-me').is(':checked');

    jQuery("#form-password").val(''); 
    doLonginAction(username,password,rememberMe);
    alert("login...finished");

}

/**
 * [keyLogin description]
 * @return {[type]} [description]
 */
function keyLogin() {
    if (event.keyCode == 13 && jQuery("#input-after-ico").css('display') != "none")  {
        event.returnValue = false;
        event.cancle = true;
        login();  
    }
}

/**
 * [shake description]
 * @param  {[type]} intShakes   [description]
 * @param  {[type]} intDistance [description]
 * @param  {[type]} intDuration [description]
 * @return {[type]}             [description]
 */
function shake (intShakes, intDistance, intDuration) {
    this.each(function() {
        $(this).css({
            position: "relative"
        });
        for (var x = 1; x <= intShakes; x++) {
            $(this).animate({
                left: (intDistance * -1)
            }, (((intDuration / intShakes) / 4))).animate({
                left: intDistance
            }, ((intDuration / intShakes) / 2)).animate({
                left: 0
            }, (((intDuration / intShakes) / 4)));
        }
    });
    return this;
}


/**
 * [processLoginResult description]
 * @param  {[type]} result [description]
 * @return {[type]}        [description]
 */
function processLoginResult (result) {
    if ( result['isSuccessful'] ){
        window.location.href="/home/project"
    }else{
        $('form-bottom').shake(4, 20, 200);
    }
}

/**
 * [doLonginAction description]
 * @param  {[type]} username   [description]
 * @param  {[type]} password   [description]
 * @param  {[type]} rememberMe [description]
 * @return {[type]}            [description]
 */
function doLonginAction (username, password, rememberMe) {
    var opts = {
          lines: 11, // The number of lines to draw
          length: 6, // The length of each line
          width: 3, // The line thickness
          radius: 7, // The radius of the inner circle
          color: "#797979", // #rbg or #rrggbb
          speed: 1, // Rounds per second
          trail: 100, // Afterglow percentage
          /*shadow: true ,*/// Whether to render a shadow
          top:'0px'
        };
    var target = document.getElementById('login-ico-div');
    var spinner = new Spinner(opts).spin(target);

    var postData = {
        'username': username,
        'password': password,
        'rememberMe': rememberMe
    };
    alert("http-post:"+postData);
    $.ajax({
        type:'POST',
        url: '/accounts/login',
        data: postData,
        dataType: 'JSON',
        success: function(result){
            processLoginResult(result);
        }
    });
    spinner.spin();
    $("#input-before-ico").css('display', 'inline');
    $("#input-after-ico").css('display', 'none');
}

var indexApp = angular.module('indexApp', []);
indexApp.controller('login-ico-controller',  function($scope){

    $scope.updateICO = function () {
        var username = $scope.username;
        var password = $scope.password;

        if (username != undefined && password != undefined && username!="" && password!="") {

            $("#input-before-ico").css('display', 'none');
            $("#input-after-ico").css('display', 'inline');
        }else{

            $("#input-before-ico").css('display', 'inline');
            $("#input-after-ico").css('display', 'none');
        }
    };
});

