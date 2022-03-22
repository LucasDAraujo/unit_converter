userUnity = document.querySelector("input");
const allResults = document.querySelectorAll("p");
const unities = {
    footMeasure: ["foot", "feet"],
    meterMeasure: ["meter", "meters"],
    literMeasure: ["liter", "liters"],
    gallonMeasure: ["gallon", "gallons"],
    kiloMeasure: ["kilo", "kilos"],
    poundMeasure: ["pound", "pounds"],
};

const convertUnity = () => {
    /* ------------------------------- Conversions ------------------------------ */
    const metersToFeet = (parseFloat(userUnity.value) * 3.28084).toPrecision(3);
    const feetToMeters = (parseFloat(userUnity.value) * 3.28084).toPrecision(3);

    const litersToGallons = (
        parseFloat(userUnity.value) * 0.264172
    ).toPrecision(3);
    const GallonsToLiters = (parseFloat(userUnity.value) * 3.7854).toPrecision(
        3
    );

    const kilosToPounds = (
        parseFloat(userUnity.value) * 2.2046226218488
    ).toPrecision(3);
    const poundsToKilos = (
        parseFloat(userUnity.value) * 0.45359237
    ).toPrecision(3);
    allResults.forEach((item) => {
        item.textContent = "";
    });

    /* --------------------------- Strings for display -------------------------- */
    allResults[0].textContent = `${userUnity.value} meters = ${metersToFeet} feet | ${userUnity.value} feet = ${feetToMeters} meters`;

    allResults[1].textContent = `${userUnity.value} liters = ${litersToGallons} gallons | ${userUnity.value} gallons = ${GallonsToLiters} liters`;

    allResults[2].textContent = `${userUnity.value} kilos = ${kilosToPounds} pounds | ${userUnity.value} pounds = ${poundsToKilos} kilos`;
};

/* ---------------------------- Characters filter --------------------------- */
function numberOnly() {
    let regex = /[a-zA-Z-,]/g;
    userUnity.value = userUnity.value.replace(regex, "");
}
const resetConversions = () => {
    allResults[0].textContent = "X meters = Y feet | A feet = B meters";
    allResults[1].textContent = "X liters = Y gallons | A gallons = B liters";
    allResults[2].textContent = "X kilos = Y pounds | A pounds = B kilos";
};

userUnity.addEventListener("input", () => {
    if (userUnity.value.length > 0) {
        if (userUnity.value.charAt(userUnity.value.length - 1) !== ".") {
            numberOnly();
            convertUnity();
        }
    } else {
        resetConversions();
    }
});
