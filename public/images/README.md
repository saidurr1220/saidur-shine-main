# Portfolio Images

এই ফোল্ডারে আপনার portfolio images রাখুন।

## Required Images

### 1. Profile Photo

- **Filename**: `profile.jpg`
- **Location**: `public/images/profile.jpg`
- **Description**: আপনার professional photo (যেটি আপনি দিয়েছেন)
- **Recommended Size**: 800x800px বা তার বেশি
- **Format**: JPG, PNG, বা WebP

### 2. Sukoon Project Screenshot

- **Filename**: `sukoon.png`
- **Location**: `public/images/portfolio/sukoon.png`
- **Description**: Sukoon app এর screenshot (যেটি আপনি দিয়েছেন)
- **Recommended Size**: 1200x800px বা 16:10 aspect ratio
- **Format**: PNG বা WebP

## Existing Images

Portfolio folder এ ইতিমধ্যে কিছু images আছে:

- `public/images/portfolio/vat-dashboard-live.webp`
- `public/images/portfolio/mern-vat-system.webp`
- অন্যান্য project screenshots

## How to Add Images

1. আপনার images এই folder এ copy করুন
2. Filename গুলো উপরের মতো রাখুন
3. যদি different filename ব্যবহার করতে চান, তাহলে component files এ path update করুন:
   - Hero.tsx (line ~52): profile image path
   - Projects.tsx: project image paths

## Image Optimization Tips

- WebP format ব্যবহার করুন better compression এর জন্য
- Images compress করুন (TinyPNG, Squoosh, etc.)
- Responsive images ব্যবহার করুন different screen sizes এর জন্য
- Alt text সবসময় দিন accessibility এর জন্য
