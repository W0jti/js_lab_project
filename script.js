// szukanie po identyfikatorze
const header = document.getElementById('main-header');
// alert(header.innerText);
// szukanie po selektorach (tak jak w CSS)

function removeBoringStuff() {
    const nudy = document.querySelectorAll("#app .boring");
    nudy.forEach(element => {
        // alert(`Nuda: ${element.innerText}`);
        element.remove();
    });
}

let div = document.createElement('div');
div.classList.add('green');
div.innerText = 'Zielony tekst (jeśli dodasz CSS)';
document.getElementById('app').append(div); // jest też prepend

let listItem = document.createElement('li');
listItem.innerText = 'Zagrać';
// dodaję na koniec listy
document.querySelector("#app ol li:last-child").after(listItem); // jest też before

// document.querySelectorAll("#app .boring").forEach((e) => e.remove());

div.classList.remove("foo");
div.classList.add("anotherclass");
// jeśli ustawiona jest widoczność usuwa ją, w przeciwnym wypadku dodaje
div.classList.toggle("visible");
// dodaj/usuń (add/remove) jest widoczne, w zależności od warunku testowego, i mniejsze od 10
let i;
div.classList.toggle("visible",  i < 10 );
// alert(div.classList.contains("foo"));

function readValues(){
    const textField = document.getElementById('myTextField');
    const checkbox = document.getElementById('myCheckbox')
    if (checkbox.checked){
        alert(textField.value)
    } else console.log('Checkbox not selected')
}