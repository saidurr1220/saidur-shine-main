# Images যুক্ত করার নির্দেশনা

## ১. Profile Picture যুক্ত করুন

আপনার দেওয়া professional photo টি এই location এ save করুন:

```
public/images/profile.jpg
```

**Steps:**

1. আপনার photo টি download করুন
2. File name পরিবর্তন করে `profile.jpg` রাখুন
3. `public/images/` folder এ paste করুন

## ২. Sukoon App Thumbnail যুক্ত করুন

আপনার দেওয়া Sukoon app এর screenshot টি এই location এ save করুন:

```
public/images/portfolio/sukoon.png
```

**Steps:**

1. Sukoon app এর screenshot download করুন
2. File name পরিবর্তন করে `sukoon.png` রাখুন
3. `public/images/portfolio/` folder এ paste করুন

## বিকল্প পদ্ধতি

যদি আপনি different file names ব্যবহার করতে চান, তাহলে এই files গুলো edit করুন:

### Profile Picture এর জন্য:

File: `src/components/Hero.tsx`
Line: ~52

```tsx
<img
  src="/images/profile.jpg" // এখানে আপনার file name দিন
  alt="Md. Saidur Rahman"
  className="w-full h-full object-cover"
/>
```

### Sukoon Thumbnail এর জন্য:

File: `src/components/Projects.tsx`
Line: ~35 (sukoon project এর image property)

```tsx
image: "/images/portfolio/sukoon.png",  // এখানে আপনার file name দিন
```

## Image Requirements

### Profile Picture:

- Format: JPG, PNG, বা WebP
- Recommended Size: 800x800px বা তার বেশি
- Aspect Ratio: 1:1 (square)

### Sukoon Thumbnail:

- Format: PNG বা WebP
- Recommended Size: 1200x800px
- Aspect Ratio: 16:10 বা 3:2

## Test করুন

Images যুক্ত করার পর:

```bash
npm run dev
```

Browser এ `http://localhost:5173` open করে check করুন images show করছে কিনা।

## Troubleshooting

যদি images show না করে:

1. File path ঠিক আছে কিনা check করুন
2. File name spelling ঠিক আছে কিনা check করুন
3. Browser cache clear করুন (Ctrl+Shift+R)
4. Dev server restart করুন
