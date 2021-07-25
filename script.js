let calculate = document.getElementById("calculate");

calculate.onclick = function () {

    let bill = Number(document.getElementById("totalBillAmount").value);
    /*console.log(bill);*/
    let totalPerson = Number(document.getElementById("personsNumber").value);

    if (document.getElementById("rating1").checked) {
        tip_value = document.getElementById("rating1").value;
        // console.log(tip_value);
    } else if (document.getElementById("rating2").checked) {
        tip_value = document.getElementById("rating2").value;
        // console.log(tip_value);
    } else if (document.getElementById("rating3").checked) {
        tip_value = document.getElementById("rating3").value;
        // console.log(tip_value);
    } else if (document.getElementById("rating4").checked) {
      tip_value = document.getElementById("rating4").value;
        // console.log(tip_value);
    } else if (document.getElementById("rating5").checked) {
      tip_value = document.getElementById("rating5").value;
      // console.log(tip_value);
    }
    let tip_total = (bill * tip_value) / totalPerson;
    
    /*console.log(tip_total);
    console.log(tip_value);*/
    
    document.getElementById("tip").innerHTML = "$" + Number(tip_total).toFixed(2);
  }











