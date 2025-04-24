$(document).ready(function(){
   
    $(document).on("click",".pi",function(){
        $('.container2').show();
        $('.container').hide();
        $('.container3').hide();
        $('.container4').hide();
        $('#gardenlover').show();
        $('#mushroomflex').hide();
        $('#chickenfanboy').hide();
        $('#pepperonipie').hide();
        $('#gardenloverId').show();
        $('#mushroomflexId').hide();
        $('#chickenfanboyId').hide();
        $('#pepperonipieId').hide();
        $('.pi').css("border-bottom", "7px solid red");
        $('.pi2').css("border-bottom", "7px solid white");
        $('.pi3').css("border-bottom", "7px solid white");
        $('.pi0').css("border-bottom", "7px solid white");

    });

    $(document).on("click",".pi2",function(){
        $('.container2').hide();
        $('.container').hide();
        $('.container3').show();
        $('.container4').hide();
        $('#gardenlover').hide();
        $('#mushroomflex').show();
        $('#chickenfanboy').hide();
        $('#pepperonipie').hide();
        $('#gardenloverId').hide();
        $('#mushroomflexId').show();
        $('#chickenfanboyId').hide();
        $('#pepperonipieId').hide();
        $('.pi2').css("border-bottom", "7px solid red");
        $('.pi').css("border-bottom", "7pxsolid white");
        $('.pi3').css("border-bottom", "7px solid white");
        $('.pi0').css("border-bottom", "7px solid white");


    });

    $(document).on("click",".pi3",function(){
        $('.container2').hide();
        $('.container').hide();
        $('.container3').hide();
        $('.container4').show();
        $('#gardenlover').hide();
        $('#mushroomflex').hide();
        $('#chickenfanboy').show();
        $('#pepperonipie').hide();
        $('#gardenloverId').hide();
        $('#mushroomflexId').hide();
        $('#chickenfanboyId').show();
        $('#pepperonipieId').hide();
        $('.pi3').css("border-bottom", "7px solid red");
        $('.pi').css("border-bottom", "7px solid white");
        $('.pi2').css("border-bottom", "7px solid white");
        $('.pi0').css("border-bottom", "7px solid white");
        
    });
    

    $(document).on("click",".pi0",function(){
        $('.container2').hide();
        $('.container').show();
        $('.container3').hide();
        $('.container4').hide();
        $('#gardenlover').hide();
        $('#mushroomflex').hide();
        $('#chickenfanboy').hide();
        $('#pepperonipie').show();
        $('#gardenloverId').hide();
        $('#mushroomflexId').hide();
        $('#chickenfanboyId').hide();
        $('#pepperonipieId').show();
        $('.pi0').css("border-bottom", "7px solid red");
        $('.pi').css("border-bottom", "7px solid white");
        $('.pi2').css("border-bottom", "7px solid white");
        $('.pi3').css("border-bottom", "7px solid white");
    });

});