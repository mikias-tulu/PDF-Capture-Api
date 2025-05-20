# 📄 PDFCapture API

PDFCapture API is a lightweight RESTful service that converts web URLs into downloadable PDF files using headless browsers. It supports secure API key authentication, temporary storage, auto-deletion, and is ideal for web archiving, receipts, or content saving.

---
## 🚀 Features

🔧 Key Features

  1. Convert Web Pages to PDF – /api/convert
  2. API Key Authentication – Secure access via Authorization header.
  3. Temporary PDF Storage – Files stored temporarily in /downloads.
  4. Auto-Delete After X Minutes – Clean-up mechanism for saved PDFs.

  5. Rate Limiting (Optional) – Prevent abuse with throttling.

  6. PDF Customization – Optional settings (format, margins).

  7. URL Validation – Ensures only valid, reachable URLs are processed.

  8. Error Handling Middleware – Consistent API error responses.

  9. Environment-Based Config – Easily configure ports, secrets, and timeouts.

  10. Flexible Deployment – Deployable via Docker, Vercel, or Ngrok for local testing.

---
## 📦 Installation

```bash
git clone https://github.com/your-username/pdfcapture.git
cd pdfcapture
npm install

```
Create a .env file:
```bash
PORT=3000
API_KEY=your-secure-api-key
BOT_TOKEN=your-telegram-bot-token
```
Start the Server
``` 
npm run dev 

```

