function validateInputs() {
    const inputs = document.querySelectorAll("input");
    let emptyFound = false;

    inputs.forEach(input => {
        if (input.value.trim() === "") {
            emptyFound = true;
        }
    });

    if (emptyFound) {
        alert("Lūdzu, aizpildiet visus laukus!");
    } else {
        alert("Visi lauki ir aizpildīti pareizi!");
    }
}
