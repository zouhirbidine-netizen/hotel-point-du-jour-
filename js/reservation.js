document.getElementById("bookingForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let checkin = document.getElementById("checkin").value;
    let checkout = document.getElementById("checkout").value;
    let room = document.getElementById("room").value;

    if(checkout <= checkin){
        document.getElementById("result").innerHTML =
        "<p style='color:red;'>Dates invalides ❌</p>";
        return;
    }

    document.getElementById("result").innerHTML = `
        <div style="margin-top:20px; padding:20px; background:#fff; border-radius:10px;">
            <h3>Réservation confirmée ✅</h3>
            <p><b>Nom:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Chambre:</b> ${room}</p>
            <p><b>Arrivée:</b> ${checkin}</p>
            <p><b>Départ:</b> ${checkout}</p>
            <p style="color:green;">Merci pour votre réservation 🎉</p>
        </div>
    `;
});