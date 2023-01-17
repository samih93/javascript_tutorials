var mydiv = document.getElementById('myselect');
function createselectbox() {
    var txtmin = document.querySelector('.txtmin');
    var txtmax = document.querySelector('.txtmax');

    var min = txtmin.value;
    var max = txtmax.value;

    var res = "<select>";
    for (i = min; i <= max; i++) {
        res += `<option value=${i}  >  ${i}  </option>`;
    }
    res += "</select>";


    mydiv.innerHTML = res;
}


