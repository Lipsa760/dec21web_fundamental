let display = document.getElementById("display");
let incdec = document.getElementsByClassName('incdec');
let count = 0;
for (let operation of incdec) {
    operation.addEventListener('click', function () {
        var val = this.getAttribute('data-val');
        if (val == '+') {
            count++;
            display.textContent = count+"";
        }
        else if (val == '-') {
            if (count == 0)
                return;
            count--;
            display.textContent = count+""; 
        }
        else {
            count=0;
            display.textContent = count+""; 
        }
    })
}