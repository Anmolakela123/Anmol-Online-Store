let products=[],settings={};
const $=s=>document.querySelector(s);
const waNumber=()=>String(settings.whatsappNumber||'').replace(/\D/g,'');
function waUrl(p){return `https://wa.me/${waNumber()}?text=${encodeURIComponent(`Hello, I want to order "${p.name}". Price: ${p.price}.`)}`}
function card(p){
 return `<article class="product-card">
   <div class="product-image"><img src="${p.image}" alt="${p.name}" loading="lazy">${p.badge?`<span class="badge">${p.badge}</span>`:''}</div>
   <div class="product-body"><h3>${p.name}</h3><div class="price">${p.price||''}</div>
   <div class="card-actions"><button class="view-btn" data-view="${p.id}">View Details</button><a class="card-order" href="${waUrl(p)}" target="_blank" rel="noopener">Order Now</a></div></div>
 </article>`;
}
function render(){
 const q=($('#search').value||'').toLowerCase(), c=$('#category').value;
 const list=products.filter(p=>p.active!==false && (!q||`${p.name} ${p.description} ${p.category}`.toLowerCase().includes(q)) && (c==='all'||p.category===c));
 $('#allGrid').innerHTML=list.map(card).join('');
 $('#empty').classList.toggle('hidden',!list.length);
 const featured=products.filter(p=>p.active!==false&&p.featured&&(!q||p.name.toLowerCase().includes(q)));
 $('#featuredSection').classList.toggle('hidden',!featured.length||q);
 $('#featuredGrid').innerHTML=featured.map(card).join('');
 document.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>openDetail(Number(b.dataset.view)));
}
function openDetail(id){
 const p=products.find(x=>x.id===id); if(!p)return;
 $('#modalImage').src=p.image; $('#modalName').textContent=p.name; $('#modalPrice').textContent=p.price||'';
 $('#modalCategory').textContent=p.category||''; $('#modalDescription').textContent=p.description||'';
 $('#modalBadge').textContent=p.badge||''; $('#modalBadge').classList.toggle('hidden',!p.badge);
 $('#modalOrder').onclick=()=>window.open(waUrl(p),'_blank');
 $('#detailModal').classList.remove('hidden'); $('#detailModal').setAttribute('aria-hidden','false');
}
function init(){
 fetch('settings.json').then(r=>r.json()).then(s=>{
   settings=s; document.title=s.storeName;
   $('#tgLink').href=s.telegramUrl||`https://t.me/${String(s.telegram||'').replace('@','')}`;
   $('#waChannel').href=s.whatsappChannel; $('#channelLink').href=s.whatsappChannel;
   $('#floatWa').href=`https://wa.me/${waNumber()}`;
   setTimeout(()=>{if(!localStorage.getItem('anmol_wa_popup_closed'))$('#channelPopup').classList.remove('hidden')},1800);
 });
 fetch('products.json').then(r=>r.json()).then(p=>{
   products=p.sort((a,b)=>(a.id||0)-(b.id||0));
   [...new Set(products.map(x=>x.category).filter(Boolean))].forEach(c=>$('#category').insertAdjacentHTML('beforeend',`<option>${c}</option>`));
   render();
 });
}
$('#search').oninput=render; $('#category').onchange=render;
$('#closeModal').onclick=()=>$('#detailModal').classList.add('hidden');
$('#detailModal').onclick=e=>{if(e.target.id==='detailModal')$('#detailModal').classList.add('hidden')};
$('#closePopup').onclick=()=>{localStorage.setItem('anmol_wa_popup_closed','1');$('#channelPopup').classList.add('hidden')};
init();
