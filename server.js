const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.json());

app.post('/check', (req, res) => {
	return res.status(200).send({ active: true });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
