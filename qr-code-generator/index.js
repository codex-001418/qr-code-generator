function generateQRCode() {
    const qrInput = document.getElementById("qrInput").value;
    const qrOutput = document.getElementById("qrOutput");

    // Check if input is empty
    if (!qrInput) {
        alert("Please enter a valid URL.");
        return;
    }

    // Clear previous QR code
    qrOutput.innerHTML = "";

    // Generate the QR code
    new QRCode(qrOutput, {
        text: qrInput,
        width: 220,
        height: 220,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    // Add fade-in animation
    qrOutput.style.opacity = 0;
    setTimeout(() => {
        qrOutput.style.opacity = 1;
    }, 100);
}
