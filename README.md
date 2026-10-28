# Teja Engineering Services — React + Vite website

A responsive, configuration-driven website concept for Teja Engineering Services, Bhakthavatsala Nagar, Nellore, Andhra Pradesh.

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Customize

Edit `src/siteConfig.js` to change the business name, contact information, service list, Google links, map embed, images, rating, review count and demo mode. Replace images in `public/images/` as needed.

### Demo contacts

`demoMode: true` means the floating Call and WhatsApp buttons show a polite demo notice rather than calling or opening WhatsApp. The enquiry form also shows a demo notice. When the owner approves the website and confirms the phone number, set `demoMode: false` to activate direct call and WhatsApp links.

**Important:** The supplied phone number is shown as `080744 06329`; confirm whether it is the correct WhatsApp-enabled number and verify the international digits in `phoneDigits` before activating live contact. The current `phoneDigits` value assumes India country code 91 and should be verified by the owner.

## Google details

The rating (4.8) and review count (72) are based on the details supplied for the business. Only the supplied review summary phrase is shown; add individual review cards only after verifying the exact review text and source. Replace `googleBusinessUrl` with the exact Google Business Profile/reviews URL if available.

## SEO before publishing

1. Set `siteUrl` in `src/siteConfig.js` to the final canonical HTTPS domain.
2. Update `public/sitemap.xml` and `public/robots.txt` with that domain.
3. Verify the page title, description, address, services, business phone and structured data against owner-approved details.
4. Add the domain to Google Search Console, verify ownership, submit `/sitemap.xml`, and use URL Inspection to request indexing.
5. Deploy to Vercel or another static host. The current repository intentionally does not invent a production domain.

## Image notes

The gallery uses the seven images supplied with the request. Several are low-resolution thumbnails; replace them with original full-resolution images for the best visual quality. The gallery captions identify visual categories, not verified project ownership. Confirm permission and accuracy before describing an image as a completed project by this business.
