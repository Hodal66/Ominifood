
// Use a For-In Loop
var equine = { horse: '🐴', zebra: '🦓', unicorn: '🦄'};

for (const key in equine) {
    // Filters out properties inherited from prototype, see https://palantir.github.io/tslint/rules/forin/
    if (equine.hasOwnProperty(key)) {
        console.log(equine[key]);
    }
}

// Unwrap the the Values

for (const val of Object.values(equine)) {
    console.log(val);
}

// Create a Map
const equine = new Map(Object.entries(equine));

for (const v of equine.values()) {
    console.log(v)
}