<p align="center">
  <img src="frontend/editor/src/core/assets/brand/branding-logo/logo-mark.svg" width="90" alt="PdfPapa logo">
</p>

<h1 align="center">PdfPapa - Powerful, Private & Free Web PDF Suite</h1>

<p align="center">
  <strong>The all-in-one PDF platform with a modern Green & White design. Edit, view, split, merge, convert, sign, and organize PDFs anywhere — 100% private and locally in your browser.</strong>
</p>

<p align="center">
  <a href="https://github.com/Kachhawah/PdfPapa">
    <img src="https://img.shields.io/github/stars/Kachhawah/PdfPapa?style=social" alt="GitHub Stars">
  </a>
  <a href="https://github.com/Kachhawah/PdfPapa/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT%20%2F%20Open--Core-green.svg" alt="License">
  </a>
  <a href="https://github.com/Kachhawah/PdfPapa">
    <img src="https://img.shields.io/badge/Theme-Green%20%26%20White-22c55e.svg" alt="Theme">
  </a>
</p>

---

## 🌿 About PdfPapa

**PdfPapa** is an intuitive, privacy-respecting, and modern PDF workbench. It lets you process documents effortlessly right in your browser or self-host your own private instance. No data is shared with third parties, keeping your confidential files safe.

### ✨ Key Features & Capabilities

- 📄 **50+ PDF Tools**:
  - **Organize**: Merge, Split, Reorder, Rotate, Delete pages, Crop, and Extract pages.
  - **Edit & View**: Full-screen high-performance PDF Viewer, Page Editor, and Form Fill.
  - **Security & Privacy**: Sign documents, Draw signatures, Redact sensitive data, Watermark, Password protect & Unlock.
  - **Convert**: PDF to Images, Images to PDF, Word/Office documents to PDF.
  - **Mobile Scanner**: Scan documents using your mobile camera with peer-to-peer WebRTC sync.
- 🎨 **Modern Green & White Theme**: Carefully crafted palette with light mode defaults and eye-friendly contrast.
- ⚡ **Offline & Client-Side Capable**: Many essential tools run completely inside your browser using WebAssembly and client-side processing without uploading files to any external server.
- 🌐 **Free Online Deployment**: Can be hosted for free on **Vercel**, **Cloudflare Pages**, **Render**, or **Hugging Face Spaces**.

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js (v18+) & npm

### Running the Frontend
```bash
# Clone the repository
git clone https://github.com/Kachhawah/PdfPapa.git
cd PdfPapa/frontend

# Install dependencies
npm install

# Start development server
npx vite editor --port 5173 --host
```

Open your browser at **http://localhost:5173/** to explore PdfPapa!

---

## 🌐 Free Online Hosting

You can deploy PdfPapa online for free so anyone can use it over the internet! Check out the complete step-by-step instructions in [FREE_HOSTING_GUIDE.md](FREE_HOSTING_GUIDE.md).

### ⚡ Quick 1-Click Deploy on Vercel:
1. Fork or import [`Kachhawah/PdfPapa`](https://github.com/Kachhawah/PdfPapa) into [Vercel](https://vercel.com).
2. Set **Root Directory** to `frontend`.
3. Set **Build Command** to `npx vite build editor`.
4. Set **Output Directory** to `editor/dist`.
5. Click **Deploy**!

---

## 🐳 Docker Deployment

To run the full stack with all backend converters and OCR:

```bash
docker build -t pdfpapa -f docker/embedded/Dockerfile .
docker run -p 8080:8080 pdfpapa
```

Then visit: `http://localhost:8080`

---

## 🤝 Contributing & Community

Created and maintained by [Saurabh Singh (Kachhawah)](https://github.com/Kachhawah).

Contributions, bug reports, and suggestions are welcome! Feel free to open an issue or pull request on [GitHub](https://github.com/Kachhawah/PdfPapa/issues).

---

## 📜 License

PdfPapa is built with open-source technologies. See [LICENSE](LICENSE) for details.
