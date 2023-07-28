function calculateBuoyancy() {
    // Get user inputs
    const objectVolume = parseFloat(document.getElementById('objectVolume').value);
    const fluidDensity = parseFloat(document.getElementById('fluidDensity').value);

    // Check for valid inputs
    if (isNaN(objectVolume) || isNaN(fluidDensity) || objectVolume <= 0 || fluidDensity <= 0) {
        document.getElementById('result').innerText = "Please enter valid numbers for object volume and fluid density.";
        return;
    }

    // Constants
    const gravitationalAcceleration = 9.81; // m/s²

    // Calculate buoyant force
    const buoyantForce = fluidDensity * objectVolume * gravitationalAcceleration;

    // Display result
    document.getElementById('result').innerText = `Buoyant Force: ${buoyantForce.toFixed(2)} N`;
}
