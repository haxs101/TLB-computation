function compute(){
    var days = document.getElementById('days').value;
    var sweldo = document.getElementById('sweldo').value;
    var cf = 0.0481927;
    var totalToBeMonetized = days * sweldo * cf;

    var formattedTotal = parseFloat(totalToBeMonetized).toFixed(2); // Ensures 2 decimal digits
    var displayTotal = Number(formattedTotal).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    console.log(displayTotal);

    document.getElementById("total").innerHTML = "Total Leave Benefits: " + '<p style=color:#ff3d6e;>₱' + displayTotal + '</p>';
}


function computeDays(){
    var tlb = document.getElementById("tlb").value;
    var sweldo1 = document.getElementById("sweldo1").value;
    var cf = 0.0481927;
    var totalDays = tlb/(sweldo1*cf);


    totalDays = parseFloat(totalDays).toFixed(2); // round to 2 decimal places
    console.log(totalDays);

    document.getElementById("total1").innerHTML = "No. of days to be monetized: " + '<p style=color:#ff3d6e;>' + totalDays+ '</p>';
}

function computeLeave(){
//Computation here
  var vacation = document.getElementById("vacation").value; 
  var sick = document.getElementById("sick").value; 
    var earned = 1.25;

    var vacationBal = parseFloat(vacation)+parseFloat(earned);
    var sickBal = parseFloat(sick)+parseFloat(earned);
    var totalLeave = parseFloat(vacationBal)+parseFloat(sickBal);

    document.getElementById("totalLeaveCredits").innerHTML = "Total Balance: " + '<p style=color:#ff3d6e;>' +totalLeave + '</p>' ;
    document.getElementById("totalLeaveCredits1").innerHTML = "Sick Balance: " + '<p style=color:#ff3d6e;>'+sickBal + '</p>';
    document.getElementById("totalLeaveCredits2").innerHTML = "Vacation Balance: " + '<p style=color:#ff3d6e;>'+vacationBal + '</p>';


}


function reset(){
    document.getElementById('days').value = "";
    document.getElementById('sweldo').value = "";


}

function reset2(){
    document.getElementById('tlb').value = "";
    document.getElementById('sweldo1').value = "";


}

function reset3(){
    document.getElementById('vacation').value = "";
    document.getElementById('sick').value = "";


}

function displayDAYS(){
    document.getElementById('TLB').style.display = "none";
    document.getElementById('DAYS').style.display = "block";
    document.getElementById('main').style.display = "none";
    document.getElementById('leave').style.display = "none";
}

//for leave/sick

function sickLoad(){
    
    setTimeout(sick, 200);
    document.getElementById("main3").style.display = "none";
}



function sick(){
    document.getElementById("loader").style.display = "none";
    document.getElementById("main3").style.display = "block";
}

//end for leave/sick



//for days

function daysLoad(){
    
    setTimeout(days, 200);
    document.getElementById("main2").style.display = "none";
}



function days(){
    document.getElementById("loader").style.display = "none";
    document.getElementById("main2").style.display = "block";
}

//end for days




//for TLB

function TLBLoad(){
    
    setTimeout(TLB, 200);
    document.getElementById("main1").style.display = "none";
}



function TLB(){
    document.getElementById("loader").style.display = "none";
    document.getElementById("main1").style.display = "block";
}

//end for TLB


//main loading
function main(){
    setTimeout(showPage, 200);

}
function showPage(){
    document.getElementById("loader").style.display = "none";
    document.getElementById("main").style.display = "block";
}

function displayTLB(){
    document.getElementById('TLB').style.display = "block";
    document.getElementById('DAYS').style.display = "none";
    document.getElementById('main').style.display = "none";
    document.getElementById('leave').style.display = "none";
}

function displayLeave(){
    document.getElementById('TLB').style.display = "none";
    document.getElementById('DAYS').style.display = "none";
    document.getElementById('main').style.display = "none";
    document.getElementById('leave').style.display = "block";
}
