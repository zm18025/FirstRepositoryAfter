function add(){
    var x = document.getElementById('input1').value;
    var y = document.getElementById('input2').value;
    total = parseInt(x) + parseInt(y);//xyを数値に変換
    alert(total);
}

//ここからBMI
function BMI(){
    var w = document.getElementById('weight').value;
    var h = document.getElementById('height').value;
    twice = parseInt(h)*parseInt(h);
    Body = parseInt(w)/parseInt(twice);
    alert(Body);
}