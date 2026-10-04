# PdfPapa Free Hosting Guide 🚀

Yeh guide aapko batayegi ki aap **PdfPapa** ko **100% Free** me online kaise host kar sakte hain, taaki koi bhi internet se aapki website access kar sake!

Aapke paas **2 options** hain:
1. **Option A (Super Easy & Fast): Frontend Only on Vercel / Cloudflare Pages / Netlify** (Instant 1-Click, Unlimited Traffic, 0 Server Maintenance).
2. **Option B (Full-Stack with OCR & Office Converters): Free Docker Hosting on Render / Hugging Face / Koyeb**.

---

## 🌟 Option A: Frontend Free Hosting (Recommended & Fastest)

Client-side tools (PDF Viewer, Split, Merge, Rotate, Reorder, Delete Pages, Sign, Draw, Watermark, Mobile Scanner, Dark/Light Theme) directly browser me run hote hain!

### Method 1: Vercel par Host karein (Best Choice)
1. [Vercel.com](https://vercel.com) par jayein aur **Continue with GitHub** se sign in karein.
2. Dashboard par **Add New...** -> **Project** par click karein.
3. Aapke GitHub repos ki list me **`Kachhawah/PdfPapa`** dikhega — uske samne **Import** par click karein.
4. Settings configure karein:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `frontend` (Edit button click karke `frontend` select karein)
   - **Build Command**: `npx vite build editor`
   - **Output Directory**: `editor/dist`
5. **Deploy** button dabayein!
6. 1-2 minute me aapka live link ready ho jayega:  
   👉 `https://pdfpapa.vercel.app` (ya jo bhi domain aap choose karein).

---

### Method 2: Cloudflare Pages par Host karein (Free & Fastest CDN)
1. [Cloudflare.com](https://dash.cloudflare.com) me login karein.
2. Left menu me **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**.
3. Apna repository **`Kachhawah/PdfPapa`** select karein.
4. Build configuration:
   - **Framework preset**: `Vite`
   - **Build command**: `cd editor && npm run build` (ya `npx vite build editor`)
   - **Build output directory**: `frontend/editor/dist`
   - **Root directory**: `frontend`
5. **Save and Deploy** par click karein!

---

### Method 3: Netlify par Host karein
1. [Netlify.com](https://app.netlify.com) par jayein aur GitHub se login karein.
2. **Add new site** -> **Import an existing project** -> **GitHub**.
3. **`Kachhawah/PdfPapa`** select karein.
4. Base directory: `frontend`
5. Build command: `npx vite build editor`
6. Publish directory: `frontend/editor/dist`
7. Click **Deploy PdfPapa**.

---

## 🐳 Option B: Full-Stack Docker Hosting (Backend + Frontend Included)

Agar aapko server-side heavy features (jaise OCR, Word-to-PDF, LibreOffice conversions) bhi online free chalane hain, toh Stirling/PdfPapa ka Docker container host kiya ja sakta hai:

### Method 1: Hugging Face Spaces (100% Free Forever, 16 GB RAM!)
1. [Hugging Face](https://huggingface.co) par account banayein.
2. **New Space** par click karein.
3. **Space Name**: `pdfpapa`
4. **License**: `Apache 2.0`
5. **Select the Space SDK**: Choose **Docker** -> **Blank**.
6. Space create hone ke baad:
   - Apne repo ke `docker/embedded/Dockerfile` ko Space me add karein ya Space ke git remote par push karein.
7. Hugging Face aapko free **16GB RAM + 2 vCPU** container deta hai jahan PdfPapa backend + frontend smoothly chalega!

---

### Method 2: Render.com (Free Web Service)
1. [Render.com](https://render.com) par jayein aur GitHub se connect karein.
2. **New +** -> **Web Service**.
3. Repository **`Kachhawah/PdfPapa`** choose karein.
4. Environment: **Docker**.
5. Dockerfile Path: `./docker/embedded/Dockerfile`
6. Plan: **Free** (750 free instance hours per month).
7. Click **Create Web Service**. Aapko `https://pdfpapa.onrender.com` URL mil jayega.

---

### Method 3: Koyeb (Free Container Hosting)
1. [Koyeb.com](https://koyeb.com) par sign up karein.
2. **Create App** -> **GitHub**.
3. Select `Kachhawah/PdfPapa`.
4. Builder: **Dockerfile**.
5. Port: `8080` (Standard web port).
6. Click **Deploy**.

---

## 💡 Summary & Quick Recommendation:
- **Agar aapko sirf 2 minute me apni website live dekhni hai**: **Option A (Vercel)** use karein. Vercel automatically aapke GitHub repo ke updates ko auto-deploy bhi karta rahega!
- **Agar aapko full backend (OCR, Doc conversions) bhi chahiye**: **Hugging Face Spaces** ya **Render** Docker service use karein.
