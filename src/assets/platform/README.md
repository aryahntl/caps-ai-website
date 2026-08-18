# CAPS-AI Platform Media

Add original platform assets here when ready. Suggested names:

- `hero-dashboard.jpg` or `hero-dashboard.mp4`
- `platform-demo.mp4`
- `crm-dashboard.jpg`
- `technical-support.jpg`
- One screenshot for each remaining platform module

The page currently renders polished CSS media stages so it remains complete until these assets are added.

## Replacing a media stage

In `platform.component.html`, replace the relevant `.media-slot-empty` block with one of these:

```html
<img class="platform-media-asset" src="assets/platform/crm-dashboard.jpg" alt="CAPS-AI CRM dashboard">
```

```html
<video class="platform-media-asset" controls playsinline poster="assets/platform/hero-dashboard.jpg">
  <source src="assets/platform/platform-demo.mp4" type="video/mp4">
</video>
```

Keep the surrounding `.platform-media-slot` element. It fixes the media stage dimensions and preserves the responsive layout.
