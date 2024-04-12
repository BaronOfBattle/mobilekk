document.getElementById("meetingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const title = document.getElementById("meetingTitle").value;
    const date = document.getElementById("meetingDate").value;
    const time = document.getElementById("meetingTime").value;
    
    const output = document.getElementById("output");
    const errorMessage = document.getElementById("error");
    
    if (title && date && time) {
        const formattedDate = new Date(date).toLocaleDateString();
        output.innerHTML = `<div class="alert alert-success" role="alert">Reunião agendada:<br><strong>Título:</strong> ${title}<br><strong>Data:</strong> ${formattedDate}<br><strong>Horário:</strong> ${time}</div>`;
        errorMessage.textContent = "";
    } else {
        errorMessage.textContent = "Por favor, preencha todos os campos.";
        output.innerHTML = "";
    }
});
