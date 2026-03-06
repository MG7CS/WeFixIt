# Assets Directory

Media files for the We Fix It website. Put images here and reference them in the HTML.

## Folder Structure

```
assets/
├── images/              # All images
│   ├── hero-bg.jpg              # (Optional) Hero fallback if no video
│   ├── feature-repair.jpg       # Feature: "Precision meets speed"
│   ├── service-device.jpg       # Device Repair section
│   ├── service-laptop.jpg       # Laptop Services section
│   ├── service-tablet.jpg       # Tablet Repair section
│   ├── service-used.jpg         # Used Devices section
│   └── why-technician.jpg       # Why section: technician at work
│
└── videos/
    └── hero-bg.mp4              # Hero full-screen background (in use)
```

## Image Checklist

| File | Where it appears | Suggested content |
|------|------------------|-------------------|
| `hero-bg.jpg` | Hero (fallback only; video is primary) | Storefront, repair bench, or devices |
| `feature-repair.jpg` | Feature block (right side) | Hands repairing a phone/laptop, tools, workspace |
| `service-device.jpg` | Device Repair panel | Phone/tablet repair, screen or battery work |
| `service-laptop.jpg` | Laptop Services panel | Laptop open, repair or upgrade |
| `service-tablet.jpg` | Tablet Repair panel | iPad/tablet repair |
| `service-used.jpg` | Used Devices panel | Refurbished phones, laptops, iPads |
| `why-technician.jpg` | Why section (right side) | Technician at work, close-up of repair |

## Specs

### Images
- **Format**: JPG or WebP (PNG if you need transparency).
- **Hero** (if used): 1920×1080px or larger, landscape.
- **Feature & service images**: 1200×800px or larger, landscape; they fill half the screen.
- **Why section**: Same as feature (large landscape).
- **File size**: Aim under ~500KB per image after optimization.

### Hero video (already in use)
- **Path**: `assets/videos/hero-bg.mp4`
- **Format**: MP4 (H.264).
- **Resolution**: 1920×1080px.
- **Length**: Short loop (e.g. 10–30 sec).
- **Size**: Under ~5MB if possible.

## Where to Find Images

- **Stock photos**: Unsplash, Pexels, Pixabay (search: "phone repair", "laptop repair", "tech repair", "refurbished devices").
- **Your own**: Photos of your shop, repairs, and used devices (with permission).
- **Consistent look**: Similar lighting and style across sections (e.g. all bright and clean, or all workspace shots).

## Using Your Images in the Site

1. Save files into `assets/images/` with the names above (or the names you use in the HTML).
2. In `index.html`, replace each `.image-placeholder` block with an `<img>`. Example for the feature section:

```html
<!-- Replace the feature placeholder with: -->
<img src="assets/images/feature-repair.jpg" alt="Precision repair technology">
```

3. Use the same pattern for each section, and set `src` and `alt` to match the file and content.

## Optional: Hero image fallback

If you want a static image when the video isn’t available, you can add a poster or fallback that uses `hero-bg.jpg` in the hero `<video>` element or in a small script that swaps video for image on error.

## Tips

- Optimize before adding (e.g. TinyPNG, ImageOptim, or export at 80–85% quality for JPG).
- Use descriptive `alt` text for accessibility.
- Test on mobile; large images are scaled down but should still load quickly.
