const path = require('path');
const express = require('express');
const corsPrefetch = require('cors-prefetch-middleware');
const imagesUpload = require('images-upload-middleware');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.use(corsPrefetch);

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.post('/multiple', imagesUpload(
    './server/static/multipleFiles',
    'http://localhost:9090/static/multipleFiles',
    true
));

app.post('/notmultiple', imagesUpload(
    './server/static/files',
    'http://localhost:9090/static/files'
));

app.listen(port, () => {
  console.log('Server is up!');
});
