# Image Assets

This directory contains image assets for the Blueleaf Clinic website.

## Current Images

All images are sourced from Unsplash (free to use):

### Doctor Photos
- **Dr. Sarah Patel**: Professional female doctor - `https://images.unsplash.com/photo-1559839734-2b71ea197ec2`
- **Dr. James Chen**: Professional male doctor (Asian) - `https://images.unsplash.com/photo-1612349317150-e413f6a5b16d`
- **Dr. Maria Rodriguez**: Professional female doctor (Hispanic) - `https://images.unsplash.com/photo-1594824476967-48c8b964273f`
- **Dr. Michael Thompson**: Professional male doctor - `https://images.unsplash.com/photo-1622253692010-333f2da6031d`
- **Dr. Emily Nguyen**: Professional female doctor (Asian) - `https://images.unsplash.com/photo-1527613426441-4da17471b66d`
- **Dr. Robert Williams**: Professional senior male doctor - `https://images.unsplash.com/photo-1537368910025-700350fe46c7`

### Clinic Photos
- **About Page Story Section**: Modern medical facility - `https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d`

## Image Guidelines

### For Production Use
If you want to download and host these images locally:

1. Visit the Unsplash URLs above
2. Download the images in your preferred resolution
3. Save them to this directory with descriptive names (e.g., `dr-sarah-patel.jpg`)
4. Update the HTML files to reference local paths: `assets/img/dr-sarah-patel.jpg`

### Recommended Specifications
- **Doctor Cards**: 600x600px (square, portrait crop)
- **Doctor Profiles**: 800x1000px (3:4 aspect ratio)
- **Clinic Photos**: 800x600px (4:3 aspect ratio)
- **Format**: JPEG for photos (good quality/size balance)
- **File Size**: Optimize to < 200KB per image

### Attribution
When using Unsplash images, it's good practice (but not required) to credit photographers. You can add credits in your website footer or a credits page.

## Replacing with Custom Photos

To use your own photos:

1. Take or acquire professional photos following HIPAA guidelines
2. Get proper consent/model releases for all people photographed
3. Optimize images for web (compress, resize appropriately)
4. Save with descriptive filenames in this directory
5. Update HTML `background-image` URLs to point to local files

Example:
```html
<!-- Change from: -->
<div class="doctor-card__image" style="background-image: url('https://images.unsplash.com/...');"></div>

<!-- To: -->
<div class="doctor-card__image" style="background-image: url('assets/img/dr-sarah-patel.jpg');"></div>
```
