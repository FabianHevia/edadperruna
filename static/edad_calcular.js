
function edadHumana(edadPerro) {
    if (edadPerro <= 0) return 0;
    return Math.round(16 * Math.log(edadPerro) + 31);
}

function edadHumanaPorPeso(edadPerro, pesoKg) {
    if (edadPerro <= 0) return 0;

    // Factor de envejecimiento por peso
    let factorPeso;
    if (pesoKg < 10) factorPeso = 0.95; // perros pequeños viven más
    else if (pesoKg <= 25) factorPeso = 1; // promedio
    else factorPeso = 1.1; // grandes envejecen más rápido

    return Math.round((16 * Math.log(edadPerro) + 31) * factorPeso);
}
