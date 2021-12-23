$(document).ready(function () {
    $("#inputamount_1").css("display", "none");
    $("#inputamount_2").css("display", "none");

    $("button[name='tesdiq_1']").click(function () {
        var radioValue_1 = $("input[name='realbarsa']:checked").val();
        if (radioValue_1) {
            $("#inputamount_1").css("display", "block");
            $("#tesdiq_1").css("display", "none")
        }
    });


    $("button[name='tesdiq_2']").click(function () {
        var radioValue_2 = $("input[name='madridchealse']:checked").val();
        if (radioValue_2) {
            $("#inputamount_2").css("display", "block");
            $("#tesdiq_2").css("display", "none")
        }
    });

    var push = $("button[name='push']").click(function () {
        var mebleg = $("#mebleg").val()
        var resulting = mebleg / 8 
        $("#result").text(resulting)
    })

    $("#tesdiq_4").css("display", "block");
    $("#inputamount_4").css("display", "none");

    var tesdiq_3 = $("button[name='tesdiq_4']").click(function () {
        var radioValue_4 = $("input[name='sumqayit']:checked").val();
        if (radioValue_4) {
            $("#inputamount_4").css("display", "block");
            $("#tesdiq_4").css("display", "none");
        }
    });

    var push_4 = $("button[name='push_4']").click(function () {
        var mebleg_4 = $("#mebleg_4").val()
        var resulting_4 = mebleg_4 / 1
        $("#result_4").text(resulting_4)
    })

    $("#tesdiq_3").css("display", "block");
    $("#inputamount_3").css("display", "none");

    var tesdiq_3 = $("button[name='tesdiq_3']").click(function () {
        var radioValue_3 = $("input[name='one']:checked").val();
        if (radioValue_3) {
            $("#inputamount_3").css("display", "block");
            $("#tesdiq_3").css("display", "none");
        }
    });

    var push_3 = $("button[name='push']").click(function () {
        var mebleg_3 = $("#mebleg_3").val()
        var resulting_3 = mebleg_3 / 3
        $("#result_3").text(resulting_3)
    })

    //DIGER USER SECOND 


    $("#tesdiq_5").css("display", "block");
    $("#inputamount_5").css("display", "none");

    var tesdiq_3 = $("button[name='tesdiq_5']").click(function () {
        var radioValue_5 = $("input[name='rog']:checked").val();
        if (radioValue_5) {
            $("#inputamount_5").css("display", "block");
            $("#tesdiq_5").css("display", "none");
        }
    });

    var push_5 = $("button[name='push']").click(function () {
        var mebleg_5 = $("#mebleg_5").val()
        var resulting_5 = mebleg_5 / 
        $("#result_5").text(resulting_5)
    })


    // RESULT!!----------------------------------------------------------------------------




    var hesab = $("button[name='hesab']").click(function () {
        var radioValue_1 = $("input[value='firstuserudan']:checked").val();
        if (radioValue_1) {

            var udanresult = ($('input[value="firstuserudan"]:checked').length)
            console.log("UDAN:" + udanresult);
        }

    })


    var hesab = $("button[name='hesab']").click(function () {
        var radioValue_1 = $("input[value='firstuseruduzan']:checked").val();
        if (radioValue_1) {

           var uduzanresult =  ($('input[value="firstuseruduzan"]:checked').length)
           console.log("UDUZAN:" + uduzanresult);
        }

    })

    var hesab = $("button[name='hesab']").click(function () {
        var radioValue_1 = $("input[value='firstuserberaber']:checked").val();
        if (radioValue_1) {

            var beraberresult =  ($('input[value="firstuserberaber"]:checked').length)

            console.log("BERABER:" + beraberresult);
        
        }


    })


// 1 ci oyun = 1%
// 2-3-4 cu oyun her biri 1.5%
// 5-6-7 -ci oyun her biri 2%
// 8-9-10-cu oyun her biri 2.5% 








})






