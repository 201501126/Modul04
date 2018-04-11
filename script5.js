var heightalfin = 170;
var heightsandy = 195;
var agealfin = 36;
var agesandy = 25;
var agenico = 25;
var heightnico = 165;
function hitungskor(tinggibadan,umur)
{
    var winner = tinggibadan + 5 * umur;
    return winner;
}
var nilaialfin=hitungskor(heightalfin,agealfin);
var nilaisandy=hitungskor(heightsandy,agesandy);
var nilainico=hitungskor(heightnico,agenico);
console.log(nilaialfin);
console.log(nilaisandy);
console.log(nilainico);
if(nilaisandy>nilaialfin && nilaisandy>nilainico)
    console.log('sandy Menang Dengan Skor'+nilaisandy);
else if(nilainico>nilaisandy && nilainico>nilaialfin)
    console.log('nico Menang Dengan Skor'+nilainico);
else
{
    console.log('alfin Menang Dengan Skor'+nilaialfin);
}