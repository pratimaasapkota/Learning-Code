document.write("<h1>I am External javascript <h1>");
function showDate(){
    document.getElementById('datep').innerHTML = Date();

}
 const days =['sunday','monday','tuesday','wednesday','thursday']
 days.forEach(
    function (abc){
        console.log(abc);
    }
 )