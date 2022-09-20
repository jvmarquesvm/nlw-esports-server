import express from 'express';
const app = express();
app.get('/ads', (request, response) => {
    return response.json([{ id: 1, nome: "joao" },
        { id: 2, nome: "victor" }]);
});
app.listen(3333);
