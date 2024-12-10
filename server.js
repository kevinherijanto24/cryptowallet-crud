const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

// Middleware untuk parsing JSON
app.use(bodyParser.json());

// Data dummy untuk menyimpan wallet crypto
let cryptoWallets = [];

// Endpoint untuk mendapatkan semua wallet
app.get('/wallets', (req, res) => {
  if (cryptoWallets.length === 0) {
    res.send("Belum ada wallet yang tersedia");
  } else {
    res.json(cryptoWallets);
  }
});

// Endpoint untuk mendapatkan wallet berdasarkan ID
app.get('/wallets/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const wallet = cryptoWallets.find(w => w.id === id);
  if (wallet) {
    res.json(wallet);
  } else {
    res.status(404).send('Wallet tidak ditemukan');
  }
});

// Endpoint untuk menambahkan wallet baru
app.post('/wallets', (req, res) => {
  const newWallet = {
    id: cryptoWallets.length + 1, // ID baru
    address: req.body.address,
    balance: req.body.balance || 0, // Default balance 0 jika tidak disertakan
    currency: req.body.currency || 'BTC' // Default currency Bitcoin jika tidak disertakan
  };
  cryptoWallets.push(newWallet);
  res.status(201).json(newWallet);
});

// Endpoint untuk memperbarui wallet berdasarkan ID
app.put('/wallets/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const walletIndex = cryptoWallets.findIndex(w => w.id === id);
  if (walletIndex !== -1) {
    const updatedWallet = {
      id: id,
      address: req.body.address,
      balance: req.body.balance,
      currency: req.body.currency
    };
    cryptoWallets[walletIndex] = updatedWallet;
    res.json(updatedWallet);
  } else {
    res.status(404).send('Wallet tidak ditemukan');
  }
});

// Endpoint untuk menghapus wallet berdasarkan ID
app.delete('/wallets/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const walletIndex = cryptoWallets.findIndex(w => w.id === id);
  if (walletIndex !== -1) {
    cryptoWallets.splice(walletIndex, 1);
    res.send('Wallet berhasil dihapus');
  } else {
    res.status(404).send('Wallet tidak ditemukan');
  }
});

// Menangani request yang tidak valid
app.use((req, res) => {
  res.status(400).send('Bad Request');
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Crypto wallet app listening on port ${port}`);
});
