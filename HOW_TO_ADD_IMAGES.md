# 📸 Images যুক্ত করার সহজ উপায়

## দ্রুত পদ্ধতি (Recommended)

### ধাপ ১: Images Download করুন

আপনার দেওয়া দুটি images:

1. Professional photo (যেটি আপনি পাঠিয়েছেন)
2. Sukoon app screenshot (যেটি আপনি পাঠিয়েছেন)

### ধাপ ২: Images Copy করুন

#### Windows File Explorer দিয়ে:

1. **Profile Picture:**

   - আপনার photo টি copy করুন
   - এই project folder এ যান: `public/images/`
   - Paste করুন এবং rename করুন: `profile.jpg`

2. **Sukoon Screenshot:**
   - Sukoon screenshot copy করুন
   - এই folder এ যান: `public/images/portfolio/`
   - Paste করুন এবং rename করুন: `sukoon.png`

### ধাপ ৩: Check করুন

PowerShell এ এই command run করুন:

```powershell
.\check-images.ps1
```

যদি দুটোই "Found" দেখায়, তাহলে সফল! ✅

### ধাপ ৪: Test করুন

```bash
npm run dev
```

Browser এ `http://localhost:5173` open করে দেখুন images show করছে কিনা।

---

## বিকল্প পদ্ধতি: PowerShell Command

যদি আপনার images ইতিমধ্যে কোনো folder এ থাকে:

```powershell
# Profile picture copy (আপনার file path দিয়ে replace করুন)
Copy-Item "C:\Users\YourName\Downloads\your-photo.jpg" "public\images\profile.jpg"

# Sukoon screenshot copy (আপনার file path দিয়ে replace করুন)
Copy-Item "C:\Users\YourName\Downloads\sukoon-screenshot.png" "public\images\portfolio\sukoon.png"
```

---

## বিকল্প পদ্ধতি: Preview Tool

1. Browser এ `upload-images.html` file টি open করুন
2. Images drag & drop করুন preview দেখার জন্য
3. তারপর manually copy করুন সঠিক location এ

---

## Troubleshooting

### Images show করছে না?

1. **File names check করুন:**

   - Profile: অবশ্যই `profile.jpg` হতে হবে
   - Sukoon: অবশ্যই `sukoon.png` হতে হবে

2. **File paths check করুন:**

   ```
   public/
     images/
       profile.jpg          ← এখানে
       portfolio/
         sukoon.png         ← এখানে
   ```

3. **Dev server restart করুন:**

   - Terminal এ `Ctrl+C` চাপুন
   - আবার `npm run dev` চালান

4. **Browser cache clear করুন:**
   - `Ctrl+Shift+R` চাপুন

### File format সমস্যা?

যদি আপনার images different format এ থাকে (যেমন `.jpeg`, `.webp`):

**Option 1:** File rename করুন:

- `.jpeg` → `.jpg`
- যেকোনো format → `.jpg` (profile এর জন্য)
- যেকোনো format → `.png` (sukoon এর জন্য)

**Option 2:** Code এ path change করুন:

`src/components/Hero.tsx` (line ~52):

```tsx
src = "/images/profile.jpg"; // আপনার file name দিন
```

`src/components/Projects.tsx` (line ~35):

```tsx
image: "/images/portfolio/sukoon.png",  // আপনার file name দিন
```

---

## Quick Commands

```powershell
# Check images status
.\check-images.ps1

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## Need Help?

যদি এখনও সমস্যা হয়, আমাকে জানান:

- কোন error message দেখাচ্ছে?
- Images কোথায় আছে?
- কোন step এ আটকে গেছেন?
