ANMOL ONLINE STORE
==================

This is a static, GitHub Pages-friendly digital products/services catalogue.

ADD A NEW PRODUCT
1. Put the product image inside the assets/ folder.
2. Open products.json.
3. Copy an existing product object and change:
   id, name, price, image, category, description, featured, badge, active.
4. Save and upload/push the files to GitHub.
5. No HTML/CSS/JS changes are required.

FEATURED
- featured: true  -> appears in the Featured section.
- featured: false -> normal service listing.

VISIBILITY
- active: true  -> visible.
- active: false -> hidden.

WHATSAPP
- Change whatsappNumber in settings.json if the order destination changes.
- The Order Now button automatically creates a WhatsApp message with the product name.

IMPORTANT
- Keep products.json valid JSON.
- Image paths are relative to the website root.
- This project is intentionally flat: the main files are at the ZIP root.
