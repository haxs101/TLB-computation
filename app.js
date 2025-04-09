function compute(){
    var days = document.getElementById('days').value;
    var sweldo = document.getElementById('sweldo').value;
    var cf = 0.0481927;
    var totalToBeMonetized = days * sweldo * cf;

    var formattedTotal = parseFloat(totalToBeMonetized).toFixed(2); // Ensures 2 decimal digits
    var displayTotal = Number(formattedTotal).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    console.log(displayTotal);

    document.getElementById("total").innerHTML = "Total Leave Benefits: ₱" + displayTotal;
}


function computeDays(){
    var tlb = document.getElementById("tlb").value;
    var sweldo1 = document.getElementById("sweldo1").value;
    var cf = 0.0481927;
    var totalDays = tlb/(sweldo1*cf);

    console.log(totalDays);

    document.getElementById("total1").innerHTML = "No. of days to be monetized: " + totalDays;
}

function computeLeave(){
//Computation here
  var vacation = document.getElementById("vacation").value; 
  var sick = document.getElementById("sick").value; 
    var earned = 1.25;

    var vacationBal = parseFloat(vacation)+parseFloat(earned);
    var sickBal = parseFloat(sick)+parseFloat(earned);
    var totalLeave = parseFloat(vacationBal)+parseFloat(sickBal);

    document.getElementById("totalLeaveCredits").innerHTML = "Total Balance: " + totalLeave ;
    document.getElementById("totalLeaveCredits1").innerHTML = "Sick Balance: " + sickBal ;
    document.getElementById("totalLeaveCredits2").innerHTML = "Vacation Balance: " + vacationBal ;


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
    
    setTimeout(sick, 500);
    document.getElementById("main3").style.display = "none";
}



function sick(){
    document.getElementById("loader").style.display = "none";
    document.getElementById("main3").style.display = "block";
}

//end for leave/sick



//for days

function daysLoad(){
    
    setTimeout(days, 500);
    document.getElementById("main2").style.display = "none";
}



function days(){
    document.getElementById("loader").style.display = "none";
    document.getElementById("main2").style.display = "block";
}

//end for days




//for TLB

function TLBLoad(){
    
    setTimeout(TLB, 500);
    document.getElementById("main1").style.display = "none";
}



function TLB(){
    document.getElementById("loader").style.display = "none";
    document.getElementById("main1").style.display = "block";
}

//end for TLB


//main loading
function main(){
    setTimeout(showPage, 800);

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
