const factor = 14.50;

const Dollar = document.getElementById("Dollar");
const Dollar = document.getElementById("Rupiah");

Dollar.addEventListener("input", function (ev) {
    const value = ev.currentTarget.value;
    Rupiah.valueRupiah = value * factor;
    Rupiah.value = valueRupiah;
});

Rupiah.addEventListener("input", function (ev) {
    const value = ev.currentTarget.value;
    const valueDollar = value / factor;
    Dollar.value = valueDollar;
});
