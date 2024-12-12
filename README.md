
# Crypto Wallet API

## Deskripsi

Crypto Wallet API adalah aplikasi sederhana berbasis Node.js dan Express.js untuk mengelola data dompet cryptocurrency. API ini menyediakan beberapa endpoint untuk melakukan operasi CRUD (Create, Read, Update, Delete) pada data dompet cryptocurrency.

## Fitur

- Mendapatkan daftar semua dompet.
- Mendapatkan dompet berdasarkan ID.
- Menambahkan dompet baru.
- Memperbarui dompet berdasarkan ID.
- Menghapus dompet berdasarkan ID.
- Menangani request yang tidak valid.

## Instalasi

1. Clone repository:

   ```bash
   git clone https://github.com/kevinherijanto24/cryptowallet-crud
   cd cryptowallet-crud
   ```

2. Instal dependensi:

   ```bash
   npm install
   ```

3. Jalankan server:

   ```bash
   node server.js
   ```

   Server akan berjalan di `http://localhost:3000`.

## Endpoint API

### 1. Mendapatkan Semua Dompet

**Endpoint**: `GET /wallets`

- **Response (200)**:

  ```json
  [
    {
      "id": 1,
      "address": "wallet_address_1",
      "balance": 100,
      "currency": "BTC"
    },
    {
      "id": 2,
      "address": "wallet_address_2",
      "balance": 50,
      "currency": "ETH"
    }
  ]
  ```

- **Response jika tidak ada wallet**:

  ```
  Belum ada wallet yang tersedia
  ```

---

### 2. Mendapatkan Dompet Berdasarkan ID

**Endpoint**: `GET /wallets/:id`

- **Parameter Path**:
  - `id` (integer): ID dompet yang ingin diambil.

- **Response (200)**:

  ```json
  {
    "id": 1,
    "address": "wallet_address_1",
    "balance": 100,
    "currency": "BTC"
  }
  ```

- **Response jika tidak ditemukan (404)**:

  ```
  Wallet tidak ditemukan
  ```

---

### 3. Menambahkan Dompet Baru

**Endpoint**: `POST /wallets`

- **Body (JSON)**:

  ```json
  {
    "address": "wallet_address",
    "balance": 100,
    "currency": "ETH"
  }
  ```

- **Response (201)**:

  ```json
  {
    "id": 1,
    "address": "wallet_address",
    "balance": 100,
    "currency": "ETH"
  }
  ```

- Catatan:
  - Jika `balance` tidak disertakan, default `balance` adalah `0`.
  - Jika `currency` tidak disertakan, default `currency` adalah `BTC`.

---

### 4. Memperbarui Dompet Berdasarkan ID

**Endpoint**: `PUT /wallets/:id`

- **Parameter Path**:
  - `id` (integer): ID dompet yang ingin diperbarui.

- **Body (JSON)**:

  ```json
  {
    "address": "new_wallet_address",
    "balance": 200,
    "currency": "BTC"
  }
  ```

- **Response (200)**:

  ```json
  {
    "id": 1,
    "address": "new_wallet_address",
    "balance": 200,
    "currency": "BTC"
  }
  ```

- **Response jika tidak ditemukan (404)**:

  ```
  Wallet tidak ditemukan
  ```

---

### 5. Menghapus Dompet Berdasarkan ID

**Endpoint**: `DELETE /wallets/:id`

- **Parameter Path**:
  - `id` (integer): ID dompet yang ingin dihapus.

- **Response (200)**:

  ```
  Wallet berhasil dihapus
  ```

- **Response jika tidak ditemukan (404)**:

  ```
  Wallet tidak ditemukan
  ```

---

### 6. Menangani Request Tidak Valid

Jika request tidak valid atau endpoint tidak ditemukan, maka server akan memberikan response:

**Response (400)**:

```
Bad Request
```

---

## Teknologi yang Digunakan

- **Node.js**: Runtime untuk menjalankan JavaScript di server.
- **Express.js**: Framework untuk membangun API backend.
- **body-parser**: Middleware untuk parsing request body dalam format JSON.
