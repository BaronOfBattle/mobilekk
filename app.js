const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Configuração do bodyParser para lidar com dados JSON
app.use(bodyParser.json());

// Endpoint para receber os dados do formulário
app.post('/api/meetings', (req, res) => {
    const { title, date, time } = req.body;

    // Aqui você pode salvar os dados em um banco de dados ou fazer qualquer outra ação necessária
    // Por simplicidade, apenas retornamos os dados recebidos
    res.json({ title, date, time, message: 'Reunião agendada com sucesso!' });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
