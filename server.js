const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 3000;
console.log(`Server running on port ${port}`);

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('CMS-Blockchain-Verification Backend is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
