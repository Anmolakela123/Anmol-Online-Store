ANMOL ONLINE STORE — LAND SERVICES UPDATE

UPLOAD STRUCTURE
index.html
style.css
script.js
products.json
settings.json
assets/
  logo.png
  banner.png
  khatian.svg
  receipt.svg
  jamabandi-search.svg
  jamabandi-copy.svg
  aadhaar-demo.svg
  pan-demo.svg
  voter-demo.svg
  dl-demo.svg

LAND SERVICES
The first four services are marked landForm=true and always appear in the priority section:
1. पुराना से पुराना खतियान निकलवाएं
2. जमीन की रसीद कटाएं
3. जमाबंदी खोजें
4. जमाबंदी प्राप्त करें

Clicking View Details on a land service opens its image, service name, price and a manual form.
The form sends the entered customer and land details to WhatsApp.
Other services remain normal View Details + Order Now cards.

ADDING NEW SERVICES
Only edit products.json and add the image to assets/. No HTML/JS changes are needed.
For a land service, set "landForm": true and optionally "submitLabel".
For a normal service, omit landForm or set it to false.
To feature a service in a normal featured section, use "featured": true (land priority is controlled by landForm).
