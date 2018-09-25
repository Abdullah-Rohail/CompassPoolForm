
$(document).ready(function() {

// 0.3 means 30% discount change 0.3 to 0.1 to give 10% discount;
var discount = 0.1;

//  Set Price as Name Suggests Kv = Kavala Eg = East Gray etc
var smallpoolKvEgSu = '€655';

var smallpoolKvEgSuB6 = '€1048';

var smallpoolCaGbGg = '€890';

var smallpoolCaGbGgB6 = '€1424';

// ----------------------------------------------
var mediumpoolKvEgSu = '€695';

var mediumpoolKvEgSuB6 = '€1112';

var mediumpoolCaGbGg = '€1090';

var mediumpoolCaGbGgB6 = '€1670';

// ----------------------------------------------
var largepoolKvEgSu = '€867';

var largepoolKvEgSuB6 = '€1387';

var largepoolCaGbGg = '€1560';

var largepoolCaGbGgB6 = '€2190';

// ----------------------------------------------
var javapoolKvEgSu = '€955';

var javapoolKvEgSuB6 = '€1528';

var javapoolCaGbGg = '€1780';

var javapoolCaGbGgB6 = '€2444';
// ----------------------------------------------
var xxlpoolKvEgSu = '€1015';

var xxlpoolKvEgSuB6 = '€1590';

var xxlpoolCaGbGg = '€1820';

var xxlpoolCaB6GbGgB6 = '€2490';




var defaultSmallKvEgSuBeachPrice_Plastic = '€585';
var defaultSmallKvEgSuBeachPrice_TASkimmer = '€545';
var defaultSmallKvEgSuBeachPrice_NoRollo = '€725';

var defaultMediumKvEgSuBeachPrice_Plastic = '€585';
var defaultMediumKvEgSuBeachPrice_TASkimmer = '€545';
var defaultMediumKvEgSuBeachPrice_NoRollo = '€725';

var defaultLargeKvEgSuBeachPrice_Plastic = '€545';
var defaultLargeKvEgSuBeachPrice_TASkimmer = '€585';
var defaultLargeKvEgSuBeachPrice_NoRollo = '€725';

var defaultJavaKvEgSuBeachPrice_Plastic = '€545';
var defaultJavaKvEgSuBeachPrice_TASkimmer = '€585';
var defaultJavaKvEgSuBeachPrice_NoRollo = '€725';

// 
//=============================================================== 
// 

var defaultSmallCaBeachPrice_Plastic = '€885';
var defaultSmallCaBeachPrice_TASkimmer = '€845';
var defaultSmallCaBeachPrice_NoRollo = '€995';

var defaultMediumCaBeachPrice_Plastic = '€885';
var defaultMediumCaBeachPrice_TASkimmer = '€845';
var defaultMediumCaBeachPrice_NoRollo = '€995';

var defaultLargeCaBeachPrice_Plastic = '€885';
var defaultLargeCaBeachPrice_TASkimmer = '€845';
var defaultLargeCaBeachPrice_NoRollo = '€995';

var defaultJavaCaBeachPrice_Plastic = '€885';
var defaultJavaCaBeachPrice_TASkimmer = '€845';
var defaultJavaCaBeachPrice_NoRollo = '€995';



//============= CHANGE PRICE OF SOLID CORNERS ===============
//  change the price in brackets
// var profile_B6_Solif_GraniteGray means 
// that the form will print message to ask price from compass
var profile_B6_Solid_Travertine = (120)*4;
var profile_B6_Solid_EastGray;
var profile_B6_Solid_GraniteBlack = (120)*4;
var profile_B6_Solid_GraniteGray;
var profile_B6_Solid_Sunny = (100)*4;
var profile_B6_Solid_Kavala = (100)*4;
var profile_B6_Solid_California;

var profile_Solid_Travertine = (120)*4;
var profile_Solid_EastGray = (60)*4;
var profile_Solid_GraniteBlack = (79)*4;
var profile_Solid_GraniteGray = (79)*4;
var profile_Solid_Sunny = (50)*4;
var profile_Solid_Kavala = (50)*4;
var profile_Solid_California = (79)*4;

// ============================================================








































    $('#close_modal_btn').on('click',function(){
        $('#myModal').scrollTop(0);
        $('#myModal').css('display','none');
        $('#myModal').scrollTop(0);
    });

    // At Start
    // $("select").prop('selectedIndex',0);
    // var windowWidth = $(window).width();
    // if(windowWidth < 927){
    //     $('h3').after('<br>');
    // }else{
    //     $('h3').remove('<br>');
    // }

    $("#chooseProfileDetails_Section").css('display','none');
    $("#stonesColor_Section").css('display','none');
    $("#beachLines_Section").css('display','none');
    $("#beachLines_Not_Section").css('display','none');
    $("#extraDetails_Section").css('display','none');
    $("#checkout_Section").css('display','none');
    $('#final').css('display','none');
    $('.userDetails').css('display','none');
	
    // $('#poolmodel_1').text("Classic");
    // $('#poolsize_1').text("Small");
    var globe;

    var coping = $("input[name='coping[]']:checked").val();
    $('#coping_1').text(coping);
    var beach = $("input[name='beach[]']:checked").val();
    $('#beachline_1').text(beach);
    // When First Section Button is clicked
    $("#btn_sec1").on("click", function(event){
        event.preventDefault();
        

        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        var phoneFormat = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i;
        var pool = $('#poolmodel_1').text();
        var dealername = $('#dealerName').val();
        var contactname = $('#contactName').val();
        var phonenumber = $('#phoneNumber').val();
        var email = $('#email').val();

        var street = $('#Street_Address').val();
        var city = $('#City_Address').val();
        var state = $('#State_Address').val();
        var zip = $('#Zip_Address').val();
        
        // validate();
        // if(pool == ""){
        //     $('#error').append("<br>Please Select a Pool<br>");
        // }
        // if(dealername == ""){
        //     $('#error').append("<br>Please Enter Dealer Order<br>");
        // }
        // if(contactname == ""){
        //     $('#error').append("<br>Please Enter Contact Name<br>");
        // }
        // if(phonenumber == ""){
        //     $('#error').append("<br>Please Enter Phone Number<br>");
        // }
        // if(email == ""){
        //     $('#error').append("<br>Please Enter Email Address<br>");
        // }
        // if(street == ""){
        //     $('#error').append("<br>Please Enter Street Address<br>");
        // }
        // if(city == ""){
        //     $('#error').append("<br>Please Enter Your City<br>");
        // }
        // if(state == ""){
        //     $('#error').append("<br>Please Enter Your State<br>");
        // }
        // if(zip == ""){
        //     $('#error').append("<br>Please Enter Your Zip Code<br>");
        // }
        // else if(!phoneFormat.test(phonenumber)){
        //     alert("Please Enter a Valid Number");
        // }

        // if(pool == "" || dealername == "" || contactname == "" || phonenumber == ""||email ==""||street == ""||city ==""||state ==""||zip ==""){
        //     alert("Please Fill All Fields To Proceed")
        // }
        var atpos;
        var dotpos;
        if(email != ""){
            atpos = email.indexOf("@");
            dotpos = email.lastIndexOf(".");
        }
        var yes=0;
        if(pool == ""){
            $('#errorPool').text("Please Select a Pool");
            $('.ppmm').css('color','red');
            yes=1;
        }else if(pool == "Choose Pool"){
            $('#errorPool').text("Please Select a Pool");
            $('.ppmm').css('color','red');
            yes=1;
        }
        else{
            $('#errorPool').text('');
            $('.ppmm').css('color','#666');
        }

        if(dealername == ""){
            $('#errorDealer').text("Please Enter Dealer Order");
            $('.dn').css('color','red');
            yes=1;
        }else{
            $('#errorDealer').text('');
            $('.dn').css('color','#666');
        }

        if(contactname == ""){
            $('#errorContact').text("Please Enter Contact Name");
            $('.cn').css('color','red');
            yes=1;
        }else{
            $('#errorContact').text('');
            $('.cn').css('color','#666');
        }

        if(email == ""){
            $('#errorEmail').text("Please Enter E-mail Address");
            $('.en').css('color','red');
            yes=1;
        }
        else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length){
            $('#errorEmail').text("Please Enter Valid E-mail Address");
            $('.en').css('color','red');
            yes=1;
        }
        else{
            $('#errorEmail').text('');
            $('.en').css('color','#666');
        }

        if(phonenumber == ""){
            $('#errorPhone').text("Please Enter Phone Number");
            $('.pn').css('color','red');
            yes=1;
        }else if(isNaN(phonenumber)){
            $('#errorPhone').text("Please Enter Only Digits in Phone Number");
            $('.pn').css('color','red');
            yes=1;
        }
        else{
            $('#errorPhone').text('');
            $('.pn').css('color','#666');
        }


        if(street == ""){
            $('#errorStreet').text("Please Enter Street Address");
            $('.streetAdd').css('color','red');
            yes=1;
        }else{
            $('#errorStreet').text('');
            $('.streetAdd').css('color','#666');
        }

        if(city == ""){
            $('#errorCity').text("Please Enter City");
            $('.cityAdd').css('color','red');
            yes=1;
        }else{
            $('#errorCity').text('');
            $('.cityAdd').css('color','#666');
        }

        if(state == ""){
            $('#errorState').text("Please Enter State");
            $('.stateAdd').css('color','red');
            yes=1;
        }else{
            $('#errorState').text('');
            $('.stateAdd').css('color','#666');
        }

        if(zip == ""){
            $('#errorZip').text("Please Enter Zip Code");
            $('.zipAdd').css('color','red');
            yes=1;
        }
        else if(isNaN(zip)){
            $('#errorZip').text("Please Enter Only Digits in Zip Code");
            $('.zipAdd').css('color','red');
            yes=1;
        }
        // else if($('#Zip_Address').val().length<5 || $('#Zip_Address').val().length>5){
        //     $('#errorZip').text("Please Enter Valid Zip Code");
        //     $('.zipAdd').css('color','red');
        //     yes=1;
        // }
        else{
            $('#errorZip').text('');
            $('.zipAdd').css('color','#666');
        }
        // var yes = 0; 
        //  REMEMBER TO DESTROY THIS VARIABLE AFTER TESTING
        if(yes == 0){
            $('#DOname').text(dealername);
            $('#Cname').text(contactname);
            $('#Pname').text(phonenumber);
            $('#Ename').text(email);
            $('#Streetname').text(street);
            $('#Cityname').text(city);
            $('#Statename').text(state);
            $('#Zipname').text(zip);
            $("#personalDetails_Section").css('display','none');
            $("#chooseProfileDetails_Section").fadeIn();
            $("#chooseProfileDetails_Section").fadeIn("slow");
            $("#chooseProfileDetails_Section").fadeIn(3000);
        }
        // if(format.test(dealername)){
        //     alert("Please Enter a Valid Name");
        // }else{

        // }

        // if(format.test(contactname)){

        // }else{
            
        // }

        // if(format.test(phonenumber)){

        // }else{
            
        // }

        // if(format.test(email)){

        // }else{
            
        // }
            
    });

    // Second Section Profile
    $("#btn_sec2_back").on("click", function(event){
        event.preventDefault();
        $("#chooseProfileDetails_Section").css('display','none');
        $("#personalDetails_Section").fadeIn();
        $("#personalDetails_Section").fadeIn("slow");
        $("#personalDetails_Section").fadeIn(3000);
    });

    $("#btn_sec2_proc").on("click", function(event){
        event.preventDefault();
        if ($("input[name='coping[]']:checked").length == 0) {
            alert("Please choose a Profile");
        }else{
            $("#chooseProfileDetails_Section").css('display','none');
            $("#stonesColor_Section").fadeIn();
            $("#stonesColor_Section").fadeIn("slow");
            $("#stonesColor_Section").fadeIn(3000);    
        }
        
    });

    // Third Section Stones
    $("#btn_sec3_back").on("click", function(event){
        event.preventDefault();
        $("#stonesColor_Section").css('display','none');
        $("#chooseProfileDetails_Section").fadeIn();
        $("#chooseProfileDetails_Section").fadeIn("slow");
        $("#chooseProfileDetails_Section").fadeIn(3000);
        // $("#not_available1").text('');
        $("#not_available2").text('');
    });

    $("#btn_sec3_proc").on("click", function(event){
        event.preventDefault();
        
        if ($("input[name='stone[]']:checked").length == 0) {
            alert("Please choose a stone color");
        }
        else{
            $("#stonesColor_Section").css('display','none');
            var pool = $('#poolmodel_1').text();
            var size = $('#poolsize_1').text();
            var stone = $("input[name='stone[]']:checked").val();
            var beach = $("input[name='beach[]']:checked").val();
            // if(stone == "Granite Gray" ||stone == "Granite Black" ||stone == "Travertine"){
            //         $("#beachLines_Not_Section").fadeIn();
            //         $("#beachLines_Not_Section").fadeIn("slow");
            //         $("#beachLines_Not_Section").fadeIn(3000);
            //         $("#not_available2").text("Stone: "+stone);
            //         globe = 1;
            // }
            // else
            // {
                $("#beachLines_Section").fadeIn();
                $("#beachLines_Section").fadeIn("slow");
                $("#beachLines_Section").fadeIn(3000);
            // }    
        }
        
    });

    // Fourth Section beachLines
    $("#btn_sec4_back").on("click", function(event){
        event.preventDefault();
        $("#beachLines_Section").css('display','none');
        $("#stonesColor_Section").fadeIn();
        $("#stonesColor_Section").fadeIn("slow");
        $("#stonesColor_Section").fadeIn(3000);
    });

    $("#btn_sec4_proc").on("click", function(event){
        event.preventDefault();
        if ($("input[name='beach[]']:checked").length == 0) {
            alert("Please choose a beach line kit");
        }else{
            $("#beachLines_Section").css('display','none');
            $("#extraDetails_Section").fadeIn();
            $("#extraDetails_Section").fadeIn("slow");
            $("#extraDetails_Section").fadeIn(3000);    
        }
        
    });

     $("#btn_sec45_back").on("click", function(event){
        event.preventDefault();
        $("#beachLines_Not_Section").css('display','none');
        $("#stonesColor_Section").fadeIn();
        $("#stonesColor_Section").fadeIn("slow");
        $("#stonesColor_Section").fadeIn(3000);
    });

    $("#btn_sec45_proc").on("click", function(event){
        event.preventDefault();
        $("#beachLines_Not_Section").css('display','none');
        $("#extraDetails_Section").fadeIn();
        $("#extraDetails_Section").fadeIn("slow");
        $("#extraDetails_Section").fadeIn(3000);
    });

     // Fifth Section extra Details
    $("#btn_sec5_back").on("click", function(event){
        event.preventDefault();
        $("#extraDetails_Section").css('display','none');
        if(globe == 1){
            $("#beachLines_Not_Section").fadeIn();
            $("#beachLines_Not_Section").fadeIn("slow");
            $("#beachLines_Not_Section").fadeIn(3000);
        }else{
            $("#beachLines_Section").fadeIn();
            $("#beachLines_Section").fadeIn("slow");
            $("#beachLines_Section").fadeIn(3000);    
        }
        
    });

    $("#btn_sec5_proc").on("click", function(event){
        event.preventDefault();
        if ($("input[name='corner[]']:checked").length == 0||$("input[name='sealer[]']:checked").length == 0) {
            alert("Please choose a Corner/Sealer");
        }
        else{
            $("#extraDetails_Section").css('display','none');
            $("#checkout_Section").fadeIn();
            $("#checkout_Section").fadeIn("slow");
            $("#checkout_Section").fadeIn(3000);    
        }
        

    });

    $("#btn_sec6_back").on("click", function(event){
        event.preventDefault();
        $("#checkout_Section").css('display','none');
        $("#extraDetails_Section").fadeIn();
        $("#extraDetails_Section").fadeIn("slow");
        $("#extraDetails_Section").fadeIn(3000);
    });
    $("#btn_sec6_proc").on("click", function(event){
        event.preventDefault();
        $("#checkout_Section").css('display','none');
        $("#final").fadeIn();
        $("#final").fadeIn("slow");
        $("#final").fadeIn(3000);
    });
    // Checkout

    $('#print_btn').on('click',function(event){
        event.preventDefault();
        $("#final").css('display','none');
        $("#checkout_Section").css('display','block');
        $('h1').css('display','none');
        $('.btn').css('display','none');
        // $('#lop').append('<br>');
        $('#shop').before($(".userDetails").css('display','block'));
        if($('#beachline_1').text() == "No Beach Line"){
            $('#lop').before("<h3 id='abc' style='text-align:center;margin-top:25%;'>No Beach Line Selected</h3>");
        }else{
            var img123 = $("<img>", {src: "resources/"+$("input[name='beach[]']:checked").val()+".jpg",class:"printImg"});
            $('#lop').before(img123);
        }
        window.print();$('.btn').css('display','inline-block');$('h1').css('display','block');$('.printImg').css('display','none');$('.userDetails').css('display','none');$('#abc').remove();return false;
        // $("#checkout_Section").print();
        
    });


//  Clicking on Stone Color Image
    
    $('#California_Stone').on('click',function () {
        $('#close_modal_btn').css('display','block');
        $('.close').css('display','none');
        $('#CA').prop('checked',true);
    });
    $('#East-Gray_Stone').on('click',function () {
        $('#close_modal_btn').css('display','block');
        $('.close').css('display','none');
        $('#EG').prop('checked',true); 
    });
    $('#Granite-Gray_Stone').on('click',function () {
        $('#close_modal_btn').css('display','block');
        $('.close').css('display','none');
        $('#GG').prop('checked',true);
    });
    $('#Kavala_Stone').on('click',function () {
        $('#close_modal_btn').css('display','block');
        $('.close').css('display','none');
        $('#KV').prop('checked',true);
    });
    $('#Sunny_Stone').on('click',function () {
        $('#close_modal_btn').css('display','block');
        $('.close').css('display','none');
        $('#SU').prop('checked',true);
    });
    $('#Granite-Black_Stone').on('click',function () {
        $('#close_modal_btn').css('display','block');
        $('.close').css('display','none');
        $('#GB').prop('checked',true);
    });
    $('#Travertine_Stone').on('click',function () {
        $('#close_modal_btn').css('display','block');
        $('.close').css('display','none');
        $('#TR').prop('checked',true);
    });


// Clicking on Profile(Coping) Images
    $('#A0img').on('click',function(){
        $('#close_modal_btn').css('display','block');
        $('.close').css('display','none');
        $('#A0').prop('checked',true);
        var coping = $("input[name='coping[]']:checked").val();
        $('#coping_1').text(coping);
    });

    $('#B0img').on('click',function(){
        $('#close_modal_btn').css('display','block');
        $('.close').css('display','none');
        $('#B0').prop('checked',true);
        var coping = $("input[name='coping[]']:checked").val();
        $('#coping_1').text(coping);
    });

    $('#B6img').on('click',function(){
        $('#close_modal_btn').css('display','block');
        $('.close').css('display','none');
        $('#B6').prop('checked',true);
        var coping = $("input[name='coping[]']:checked").val();
        $('#coping_1').text(coping);
    });

    $('#D0img').on('click',function(){
        $('#close_modal_btn').css('display','block');
        $('.close').css('display','none');
        $('#D0').prop('checked',true);
        var coping = $("input[name='coping[]']:checked").val();
        $('#coping_1').text(coping);
    });
    $('#E0img').on('click',function(){
        $('#close_modal_btn').css('display','block');
        $('.close').css('display','none');
        $('#E0').prop('checked',true);
        var coping = $("input[name='coping[]']:checked").val();
        $('#coping_1').text(coping);
    });


// Clicking On No Beach Line Image
    $('#beach3').on('click',function(){
        $('#custom').prop('checked', true);
        $('#beachlineprice').text('');

    });
    




// ====================================================================================================
// ====================================================================================================   

    // Get the modal
	var modal = document.getElementById('myModal');

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = $('.myImg');
	var modalImg = $("#img01");
	var captionText = document.getElementById("caption");
	$('.myImg').click(function(){
	    modal.style.display = "block";
	    var newSrc = this.src;
	    modalImg.attr('src',newSrc);
	    captionText.innerHTML = this.alt;
	});

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
	    modal.style.display = "none";
	}
	$("#phoneNumber").intlTelInput({
		onlyCountries: ["al", "ad", "at", "by", "be", "ba", "bg", "hr", "cz", "dk",
          "ee", "fo", "fi", "fr", "de", "gi", "gr", "va", "hu", "is", "ie", "it", "lv",
          "li", "lt", "lu", "mk", "mt", "md", "mc", "me", "nl", "no", "pl", "pt", "ro",
          "ru", "sm", "rs", "sk", "si", "es", "se", "ch", "ua", "gb"],
	  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/13.0.2/js/utils.js"
	});

// ====================================================================================================
// ====================================================================================================

	// var values = Array.from(document.querySelectorAll('select[name="poolModel"] > optgroup')).map(el => el.getAttribute('value'));

	// alert(values);
	// console.log(values);

	// $('#poolModel').on('change', function ()
	// {
	//     var label = $(this.options[this.selectedIndex]).closest('optgroup').prop('label');
	//     console.log(label); // medium // small largee etc
	//     var value = $(this.options[this.selectedIndex]).closest('optgroup').prop('option');
	//     console.log(value);
	// });

	// //if you want old browser support
	// var values = [].slice.call(document.querySelectorAll('select[name="lstparameters"] > optgroup')).map(function(el) {
	//   return el.getAttribute('value')
	// });
	// alert(values);

    // Click on Pool Dropdown
	$('#poolModel').on('change', function () {
        showLabel();  
    });

    // Click on Profile Radio Button 
    $("input[name='coping[]']").on('click', function(){
    	var coping = $("input[name='coping[]']:checked").val();
    	$('#coping_1').text(coping);
    });









//  Click on Beach Lines Radio Button
    $("input[name='beach[]']").on('click', function(){
        var pool = $('#poolmodel_1').text();
        var size = $('#poolsize_1').text();
        var stone = $("input[name='stone[]']:checked").val();
        var beach = $("input[name='beach[]']:checked").val();
        if(beach == "Ask Compass For a Quote"){
            $('#beachlineprice').text('Ask Compass For a Quote');
        }
        if(beach == "No Beach Line"){
            $('#beachlineprice').text('');
        }










































     if(stone == "Kavala" || stone == "East-Gray"|| stone == "Sunny"){
            if(size == "Small"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text(defaultSmallKvEgSuBeachPrice_Plastic);
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text(defaultSmallKvEgSuBeachPrice_TASkimmer);
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text(defaultSmallKvEgSuBeachPrice_NoRollo);
                }
                
            }
            else if(size == "Medium"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text(defaultMediumKvEgSuBeachPrice_Plastic);
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text(defaultMediumKvEgSuBeachPrice_TASkimmer);
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text(defaultMediumKvEgSuBeachPrice_NoRollo);
                }
            }
            else if(size == "Large"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text(defaultLargeKvEgSuBeachPrice_Plastic);
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text(defaultLargeKvEgSuBeachPrice_TASkimmer);
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text(defaultLargeKvEgSuBeachPrice_NoRollo);
                }
            }
            else if(size == "Java"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text(defaultJavaKvEgSuBeachPrice_Plastic);
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text(defaultJavaKvEgSuBeachPrice_TASkimmer);
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text(defaultJavaKvEgSuBeachPrice_NoRollo);
                }
            }
        }
        else if(stone == "California"||stone == "Granite-Black"||stone == "Granite-Gray"||stone == "Travertine"){
            if(size == "Small"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text(defaultSmallCaBeachPrice_Plastic);
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text(defaultSmallCaBeachPrice_TASkimmer);
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text(defaultSmallCaBeachPrice_NoRollo);
                }
                
            }
            else if(size == "Medium"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text(defaultMediumCaBeachPrice_Plastic);
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text(defaultMediumCaBeachPrice_TASkimmer);
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text(defaultMediumCaBeachPrice_NoRollo);
                }
            }
            else if(size == "Large"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text(defaultLargeCaBeachPrice_Plastic);
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text(defaultLargeCaBeachPrice_TASkimmer);
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text(defaultLargeCaBeachPrice_NoRollo);
                }
            }
            else if(size == "Java"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text(defaultJavaCaBeachPrice_Plastic);
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text(defaultJavaCaBeachPrice_TASkimmer);
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text(defaultJavaCaBeachPrice_NoRollo);
                }
            }
        }































        if(stone == "Kavala" || stone == "East-Gray"|| stone == "Sunny"){
            if(pool == "Baby Pool"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €535');
                    // $('#beachPrice1').text('€535');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €495');
                    // $('#beachPrice2').text('€495');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €685');
                    // $('#beachPrice3').text('€685');
                }
                
            }else if(pool == "X-Trainer 72"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €585');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €545');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €725');
                }
            }
        }
        else if(stone == "California"||stone == "Granite-Black"||stone == "Granite-Gray"||stone == "Travertine"){
            if(pool == "Baby Pool"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €835');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €795');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €925');
                }
                
            }else if(pool == "X-Trainer 72"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €845');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €545');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €995');
                }
            }
        }

        if(stone == "Kavala" || stone == "East-Gray"|| stone == "Sunny"){
            if(pool == "Briliant 88"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €585');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €545');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €725');
                }
                
            }else if(pool == "Fun 83"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €585');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €545');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €725');
                }
            }
        }
        else if(stone == "California"||stone == "Granite-Black"||stone == "Granite-Gray"||stone == "Travertine"){
            if(pool == "Briliant 88"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €885');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €845');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €995');
                }
                
            }else if(pool == "Fun 83"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €885');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €845');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €995');
                }
            }
        }

        if(stone == "Kavala" || stone == "East-Gray"|| stone == "Sunny"){
                    if(pool == "Java 114"){
                        if(beach == "Plastic Skimmer"){
                            $('#beachlineprice').text('Plastic: €585');
                        }else if(beach == "T&A Skimmer"){
                            $('#beachlineprice').text('T&A: €545');
                        }else if(beach == "No RolloCover"){
                            $('#beachlineprice').text('Rollo: €725');
                        }
                        
                    }
                }
        else if(stone == "California"||stone == "Granite-Black"||stone == "Granite-Gray"||stone == "Travertine"){
            if(pool == "Java 114"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €885');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €845');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €995');
                }   
            }
        }


        if(stone == "Kavala" || stone == "East-Gray"|| stone == "Sunny"){
            if(pool == "XL Trainer 133"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €655');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €595');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €775');
                }
                
            }
        }
        else if(stone == "California"||stone == "Granite-Black"||stone == "Granite-Gray"||stone == "Travertine"){
            if(pool == "XL Trainer 133"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €955');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €895');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €1035');
                }   
            }
        }



        if(stone == "Kavala" || stone == "East-Gray"|| stone == "Sunny"){
            if(pool == "Fun 100"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €585');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €545');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €725');
                }
                
            }else if(pool == "XL Luonger 95"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €585');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €545');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €725');
                }
            }else if(pool == "XL Triner 110"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €585');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €545');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €725');
                }
            }else if(pool == "XL Triner 110 FB"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €585');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €545');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €725');
                }
            }else if(pool == "Fast Lane"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €535');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €545');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €685');
                }
            }
        }
        else if(stone == "California"||stone == "Granite-Black"||stone == "Granite-Gray"||stone == "Travertine"){
            if(pool == "Fun 100"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €585');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €845');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €995');
                }
                
            }else if(pool == "XL Luonger 95"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €885');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €845');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €995');
                }
            }else if(pool == "XL Triner 110"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €885');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €845');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €995');
                }
            }else if(pool == "XL Triner 110 FB"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €885');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €845');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €995');
                }
            }else if(pool == "Fast Lane"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €835');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €795');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €925');
                }
            }
        }
    });

// End of On Beach Line Radio Button Click Event





















    $("#btn_sec5_proc").on('click', function(){
    	var stone = $("input[name='stone[]']:checked").val();
    	var cornerType = $("input[name='corner[]']:checked").val();
        var corner = $("#corner_price");
        var coping = $("input[name='coping[]']:checked").val();
        $('#stone_1').text(stone);
        
        if(cornerType == "Solid"){
            $('#solid_corner').css('display','block');
            if(coping == "B6"){
                if(stone == "Travertine"){
                    if(profile_B6_Solid_Travertine == undefined){
                        corner.text("Ask Compass For Price");
                    }else{  
                        corner.text(profile_B6_Solid_Travertine);
                    }
                }else if(stone == "Kavala"){
                    if(profile_B6_Solid_Kavala == undefined){
                        corner.text("Ask Compass For Price");
                    }else{  
                        corner.text(profile_B6_Solid_Kavala);
                    }

                }else if(stone == "Sunny"){
                    if(profile_B6_Solid_Sunny == undefined){
                        corner.text("Ask Compass For Price");
                    }else{  
                        corner.text(profile_B6_Solid_Sunny);
                    }
                }else if(stone == "California"){
                    if(profile_B6_Solid_California == undefined){
                        corner.text("Ask Compass For Price");
                    }else{  
                        corner.text(profile_B6_Solid_California);
                    }
                }else if(stone == "Granite-Gray"){
                    if(profile_B6_Solid_GraniteGray == undefined){
                        corner.text("Ask Compass For Price");
                    }else{  
                        corner.text(profile_B6_Solid_GraniteGray);
                    }
                }else if(stone == "Granite-Black"){
                    if(profile_B6_Solid_GraniteBlack == undefined){
                        corner.text("Ask Compass For Price");
                    }else{  
                        corner.text(profile_B6_Solid_GraniteBlack);
                    }
                }else if(stone == "East-Gray"){
                    if(profile_B6_Solid_EastGray == undefined){
                        corner.text("Ask Compass For Price");
                    }else{  
                        corner.text(profile_B6_Solid_EastGray);
                    }
                }    
            }else{
                if(stone == "Travertine"){
                    if(profile_Solid_Kavala == undefined){
                        corner.text("Ask Compass For Price");
                    }else{  
                        corner.text(profile_Solid_Kavala);
                    }
                }else if(stone == "Kavala"){
                    if(profile_Solid_Kavala == undefined){
                        corner.text("Ask Compass For Price");
                    }else{  
                        corner.text(profile_Solid_Kavala);
                    }
                }else if(stone == "Sunny"){
                    if(profile_Solid_Sunny == undefined){
                        corner.text("Ask Compass For Price");
                    }else{  
                        corner.text(profile_Solid_Sunny);
                    }
                }else if(stone == "California"){
                    if(profile_Solid_California == undefined){
                        corner.text("Ask Compass For Price");
                    }else{  
                        corner.text(profile_Solid_California);
                    }
                    
                }else if(stone == "Granite-Gray"){
                    if(profile_Solid_GraniteGray == undefined){
                        corner.text("Ask Compass For Price");
                    }else{  
                        corner.text(profile_Solid_GraniteGray);
                    }
                }else if(stone == "Granite-Black"){
                    if(profile_Solid_GraniteBlack == undefined){
                        corner.text("Ask Compass For Price");
                    }else{  
                        corner.text(profile_Solid_GraniteBlack);
                    }
                }else if(stone == "East-Gray"){
                    if(profile_Solid_EastGray == undefined){
                        corner.text("Ask Compass For Price");
                    }else{  
                        corner.text(profile_Solid_EastGray);
                    }
                }
            }    
        }else{
            $('#solid_corner').css('display','none');
        }
        
        


        $('#stone_name').text($('#stone_1').text());
        var stoneTipId = "#"+$('#stone_1').text()+"_Stone";
        var stoneTip = $(stoneTipId).attr('alt');
        var stoneTip2 = stoneTip.replace(/(<([^>]+)>)/ig,"");
        stoneTip2 = stoneTip2.split('.');
        console.log(stoneTip2);
        // $(stoneTip2[i]).after('<br>');
        // var stoneTip3;+
        // for(i=0;i<stoneTip2.length;i++){
        //    $(stoneTip2[i]).after('<br>');
        // }
        // console.log(stoneTip3);
        // stoneTip3 = stoneTip3.join(); 
        // console.log(stoneTip3);
        $('#stone_tip').text(stoneTip2);
        
    	
    	if($('#poolsize_1').text() == "Small"){
    		if(stone == "Kavala" || stone == "East-Gray" || stone == "Sunny"){
    			$('#total_amount').text(smallpoolKvEgSu);
    			if($('#coping_1').text() == "B6"){
    				$('#total_amount').text(smallpoolKvEgSuB6);
    			}
	    	}
	    	else if(stone == "California" || stone == "Granite-Black" || stone == "Granite-Gray"|| stone == "Travertine")
	    	{
	    		$('#total_amount').text(smallpoolCaGbGg);
    			if($('#coping_1').text() == "B6"){
    				$('#total_amount').text(smallpoolCaGbGgB6);
    			}
	    	}	
    	}

    	if($('#poolsize_1').text() == "Medium"){
    		if(stone == "Kavala" || stone == "East-Gray" || stone == "Sunny"){
    			$('#total_amount').text(mediumpoolKvEgSu);
    			if($('#coping_1').text() == "B6"){
    				$('#total_amount').text(mediumpoolKvEgSuB6);
    			}
	    	}
	    	else if(stone == "California" || stone == "Granite-Black" || stone == "Granite-Gray"|| stone == "Travertine")
	    	{
	    		$('#total_amount').text(mediumpoolCaGbGg);
    			if($('#coping_1').text() == "B6"){
    				$('#total_amount').text(mediumpoolCaGbGgB6);
    			}
	    	}	
    	}

    	if($('#poolsize_1').text() == "Large"){
    		if(stone == "Kavala" || stone == "East-Gray" || stone == "Sunny"){
    			$('#total_amount').text(largepoolKvEgSu);
    			if($('#coping_1').text() == "B6"){
    				$('#total_amount').text(largepoolKvEgSuB6);
    			}
	    	}
	    	else if(stone == "California" || stone == "Granite-Black" || stone == "Granite-Gray"|| stone == "Travertine")
	    	{
	    		$('#total_amount').text(largepoolCaGbGg);
    			if($('#coping_1').text() == "B6"){
    				$('#total_amount').text(largepoolCaGbGgB6);
    			}
	    	}	
    	}

    	if($('#poolsize_1').text() == "Java"){
    		if(stone == "Kavala" || stone == "East-Gray" || stone == "Sunny"){
    			$('#total_amount').text(javapoolKvEgSu);
    			if($('#coping_1').text() == "B6"){
    				$('#total_amount').text(javapoolKvEgSuB6);
    			}
	    	}
	    	else if(stone == "California" || stone == "Granite-Black" || stone == "Granite-Gray"|| stone == "Travertine")
	    	{
	    		$('#total_amount').text(javapoolCaGbGg);
    			if($('#coping_1').text() == "B6"){
    				$('#total_amount').text(javapoolCaGbGgB6);
    			}
	    	}	
    	}
    	if($('#poolsize_1').text() == "XXL"){
    		if(stone == "Kavala" || stone == "East-Gray" || stone == "Sunny"){
    			$('#total_amount').text(xxlpoolKvEgSu);
    			if($('#coping_1').text() == "B6"){
    				$('#total_amount').text(xxlpoolKvEgSuB6);
    			}
	    	}
	    	else if(stone == "California" || stone == "Granite-Black" || stone == "Granite-Gray"|| stone == "Travertine")
	    	{
	    		$('#total_amount').text(xxlpoolCaGbGg);
    			if($('#coping_1').text() == "B6"){
    				$('#total_amount').text(xxlpoolCaGbGgB6);
    			}
	    	}	
    	}



    if($('#beachline_1').text() == "" || $('#coping_1').text() == ""||$('#beachline_1').text() == "No Beach Line"){
        $('#discount_opt').text("No");
        $('#discount_show').css('display','none');
        $('#dis1Label').css('display','none');
        $('#dis2Label').css('display','none');
        $('.discount_text').css('text-align','center');        
    }else{
        $('#discount_opt').text("Yes");
        $('#discount_show').css('display','block');
        $('#discount_coping').text($('#coping_1').text());
        $('#discount_beach').text($('#beachline_1').text());
        
        var res = $('#beachlineprice').text().split(" ");
        var res1 = res[1];
        var corner_price;
        $('#discount_original').text(res1);
        if($('#solid_corner').text() == "Ask Compass For Price"){

        }else{
            corner_price = $('#corner_price').text();
        }
        var res2;
        if(res1 == '€'){

        }else{
            res2 = res1.split('€');
        }
          
        var dis = res2[1]*discount;
        var discounte = discount * 100;
        $('#discount_percent').text(discounte);
        final123 = res2[1]-dis;
        $('#discount_discount').text('€'+final123);
        var res12 = $('#total_amount').text().split('€');
        // var res13 = parseInt(res12[, 10);
        var res14 = final123+parseInt(res12[1], 10);
        var res15 = parseInt(corner_price,10)+res14;
        $('#total_amount').text('€'+res15);
    }



    });
    $("input[name='beach[]']").on('click', function(){
    	var beach = $("input[name='beach[]']:checked").val();
    	$('#beachline_1').text(beach);
    });
    $("input[name='sealer[]']").on('click', function(){
    	var sealer = $("input[name='sealer[]']:checked").val();
    	$('#sealer_1').text(sealer);
    });
    $("input[name='corner[]']").on('click', function(){
    	var corner = $("input[name='corner[]']:checked").val();
    	$('#corner_1').text(corner);
    });
    // fire on page load
    // $('#poolModel').change();	

   

	// document.getElementById("gt").addEventListener("click", function(event){
	//     event.preventDefault();
	//     $("#five").fadeIn();
 //        $("#five").fadeIn("slow");
 //        $("#five").fadeIn(3000);
	// });






});




 function showLabel() {
        var selected = $('#poolModel :selected');
        var item = selected.text();
        var group = selected.parent().attr('label');
        $('#poolmodel_1').text(item);
        $('#poolsize_1').text(group);
        // console.log("Group "+group);
        // console.log("Item "+item);
    }


















































 function beachImgClick(val){
        $('#close_modal_btn').css('display','block');
        $('.close').css('display','none');
        $(''+val+'').prop('checked', true);
        if(val == "custom"){
            console.log("yes");
            $('#beachlineprice').text("Ask Compass for a Quote");
            console.log("yes");
        }
        
        var pool = $('#poolmodel_1').text();
        var size = $('#poolsize_1').text();
        var stone = $("input[name='stone[]']:checked").val();
        var beach = $("input[name='beach[]']:checked").val();
        
        if(beach == "Ask Compass For a Quote"){
            $('#beachline_1').text('Ask Compass For a Quote');
        }
        if(beach == "No Beach Line"){
            $('#beachline_1').text('No Beach Line');
        }
        if(beach == "Plastic Skimmer"){
            $('#beachline_1').text('Plastic Skimmer');
        }
        if(beach == "T&A Skimmer"){
            $('#beachline_1').text('T&A Skimmer');
        }
        if(beach == "No RolloCover"){
            $('#beachline_1').text('No RolloCover');
        }































else if(stone == "Kavala" || stone == "East-Gray"|| stone == "Sunny"){
            if(size == "Small"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €585');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €545');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €725');
                }
                
            }
            else if(size == "Medium"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €585');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €545');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €725');
                }
            }
            else if(size == "Large"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €585');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €545');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €725');
                }
            }
            else if(size == "Java"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €585');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €545');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €725');
                }
            }
        }
        else if(stone == "California"||stone == "Granite-Black"||stone == "Granite-Gray"||stone == "Travertine"){
            if(size == "Small"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €585');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €545');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €725');
                }
                
            }
            else if(size == "Medium"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €585');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €545');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €725');
                }
            }
            else if(size == "Large"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €585');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €545');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €725');
                }
            }
            else if(size == "Java"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €585');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €545');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €725');
                }
            }
        }





























































        if(stone == "Kavala" || stone == "East-Gray"|| stone == "Sunny"){
            if(pool == "Baby Pool"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €535');
                    // $('#beachPrice1').text('€535');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €495');
                    // $('#beachPrice2').text('€495');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €685');
                    // $('#beachPrice3').text('€685');
                }
                
            }else if(pool == "X-Trainer 72"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €585');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €545');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €725');
                }
            }
        }
        else if(stone == "California"||stone == "Granite-Black"||stone == "Granite-Gray"||stone == "Travertine"){
            if(pool == "Baby Pool"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €835');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €795');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €925');
                }
                
            }else if(pool == "X-Trainer 72"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €845');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €545');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €995');
                }
            }
        }

        if(stone == "Kavala" || stone == "East-Gray"|| stone == "Sunny"){
            if(pool == "Briliant 88"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €585');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €545');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €725');
                }
                
            }else if(pool == "Fun 83"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €585');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €545');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €725');
                }
            }
        }
        else if(stone == "California"||stone == "Granite-Black"||stone == "Granite-Gray"||stone == "Travertine"){
            if(pool == "Briliant 88"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €885');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €845');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €995');
                }
                
            }else if(pool == "Fun 83"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €885');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €845');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €995');
                }
            }
        }

        if(stone == "Kavala" || stone == "East-Gray"|| stone == "Sunny"){
                    if(pool == "Java 114"){
                        if(beach == "Plastic Skimmer"){
                            $('#beachlineprice').text('Plastic: €585');
                        }else if(beach == "T&A Skimmer"){
                            $('#beachlineprice').text('T&A: €545');
                        }else if(beach == "No RolloCover"){
                            $('#beachlineprice').text('Rollo: €725');
                        }
                        
                    }
                }
        else if(stone == "California"||stone == "Granite-Black"||stone == "Granite-Gray"||stone == "Travertine"){
            if(pool == "Java 114"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €885');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €845');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €995');
                }   
            }
        }


        if(stone == "Kavala" || stone == "East-Gray"|| stone == "Sunny"){
            if(pool == "XL Trainer 133"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €655');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €595');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €775');
                }
                
            }
        }
        else if(stone == "California"||stone == "Granite-Black"||stone == "Granite-Gray"||stone == "Travertine"){
            if(pool == "XL Trainer 133"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €955');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €895');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €1035');
                }   
            }
        }


        if(stone == "Kavala" || stone == "East-Gray"|| stone == "Sunny"){
            if(pool == "Fun 100"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €585');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €545');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €725');
                }
                
            }else if(pool == "XL Luonger 95"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €585');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €545');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €725');
                }
            }else if(pool == "XL Triner 110"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €585');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €545');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €725');
                }
            }else if(pool == "XL Triner 110 FB"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €585');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €545');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €725');
                }
            }else if(pool == "Fast Lane"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €535');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €545');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €685');
                }
            }
        }
        else if(stone == "California"||stone == "Granite-Black"||stone == "Granite-Gray"||stone == "Travertine"){
            if(pool == "Fun 100"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €585');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €845');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €995');
                }
                
            }else if(pool == "XL Luonger 95"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €885');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €845');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €995');
                }
            }else if(pool == "XL Triner 110"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €885');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €845');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €995');
                }
            }else if(pool == "XL Triner 110 FB"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €885');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €845');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €995');
                }
            }else if(pool == "Fast Lane"){
                if(beach == "Plastic Skimmer"){
                    $('#beachlineprice').text('Plastic: €835');
                }else if(beach == "T&A Skimmer"){
                    $('#beachlineprice').text('T&A: €795');
                }else if(beach == "No RolloCover"){
                    $('#beachlineprice').text('Rollo: €925');
                }
            }
        }
 }






