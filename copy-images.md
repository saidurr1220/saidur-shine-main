# Images Copy করার সহজ উপায়

## Windows এ:

### ১. Profile Picture Copy করুন

1. আপনার professional photo টি যেখানে আছে সেখান থেকে copy করুন
2. এই command টি PowerShell এ run করুন:

```powershell
# প্রথমে আপনার photo এর location এ যান
# তারপর এই command run করুন (photo.jpg কে আপনার file name দিয়ে replace করুন)

Copy-Item "photo.jpg" "public/images/profile.jpg"
```

অথবা manually:

- আপনার photo টি copy করুন
- `public/images/` folder এ paste করুন
- File name পরিবর্তন করে `profile.jpg` রাখুন

### ২. Sukoon Thumbnail Copy করুন

```powershell
# Sukoon screenshot এর location থেকে (sukoon-screenshot.png কে আপনার file name দিয়ে replace করুন)

Copy-Item "sukoon-screenshot.png" "public/images/portfolio/sukoon.png"
```

অথবা manually:

- Sukoon screenshot copy করুন
- `public/images/portfolio/` folder এ paste করুন
- File name পরিবর্তন করে `sukoon.png` রাখুন

## বর্তমান Folder Structure:

```
public/
  images/
    profile.jpg          ← আপনার photo এখানে রাখুন
    portfolio/
      sukoon.png         ← Sukoon screenshot এখানে রাখুন
      vat-dashboard-live.webp
      (অন্যান্য images...)
```

## Images যুক্ত করার পর:

1. Dev server restart করুন:

```bash
# Ctrl+C দিয়ে বন্ধ করুন, তারপর আবার চালু করুন
npm run dev
```

2. Browser এ check করুন: `http://localhost:5173`

3. যদি images show না করে:
   - Browser cache clear করুন (Ctrl+Shift+R)
   - File names ঠিক আছে কিনা check করুন
   - File paths ঠিক আছে কিনা check করুন

## Quick Check:

এই command দিয়ে check করুন images আছে কিনা:

```powershell
# Profile picture check
Test-Path "public/images/profile.jpg"

# Sukoon thumbnail check
Test-Path "public/images/portfolio/sukoon.png"
```

যদি `True` আসে মানে file আছে, `False` মানে file নেই।

## Alternative: Direct URL ব্যবহার করুন

যদি আপনার images ইতিমধ্যে online এ host করা থাকে, তাহলে:

### Hero.tsx এ (Profile Picture):

```tsx
<img
  src="https://your-image-url.com/profile.jpg"
  alt="Md. Saidur Rahman"
  className="w-full h-full object-cover"
  onError={() => setImageError(true)}
/>
```

### Projects.tsx এ (Sukoon Thumbnail):

```tsx
{
  id: "sukoon",
  // ... other properties
  image: "https://your-image-url.com/sukoon.png",
}
```

## Need Help?

যদি কোনো সমস্যা হয়, আমাকে জানান!
