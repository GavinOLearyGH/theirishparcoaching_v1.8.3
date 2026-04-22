
const data = window.TIP_LIBRARY_DATA || [];
const DRILL_PACKS = [
  { key:'contact', label:'Strike & Contact', hint:'Fat/thin, low point, center-face',
    matches:item => {
      const t=`${item.id} ${item.name} ${item.category} ${item.area} ${item.goal}`.toLowerCase();
      return item.dimension==='Swing' && (['Strike','Structure','Face'].includes(item.category) || /strike|contact|low point|brush|9-to-3|center/.test(t));
    }},
  { key:'approach', label:'Approach Control', hint:'Own windows, dispersion, 150–199',
    matches:item => {
      const t=`${item.id} ${item.name} ${item.category} ${item.area} ${item.goal}`.toLowerCase();
      return (item.area==='Approach' || item.area==='Wedges') && /approach|window|dispersion|carry|front|middle|back|wedge|distance/.test(t);
    }},
  { key:'shortgame', label:'Short Game Conversion', hint:'Turn misses into up-and-down chances',
    matches:item => ['Short Game','Sand','Trouble'].includes(item.area) || ['Chipping','Pitching','Bunker','Recovery'].includes(item.category)},
  { key:'putting', label:'Putting Control', hint:'Start line, pace, 3-putt prevention',
    matches:item => item.area==='Putting' || item.category.startsWith('Putting')},
  { key:'tee', label:'Tee Shot Stability', hint:'Playable ball, start line, fairway finder',
    matches:item => item.area==='Off Tee' || item.category==='Tee' || item.category==='Driver'},
  { key:'tempo', label:'Tempo & Rhythm', hint:'Calm the motion and make it repeatable',
    matches:item => {
      const t=`${item.id} ${item.name} ${item.category} ${item.goal}`.toLowerCase();
      return /tempo|rhythm|rope|smooth|pause|finish|transition/.test(t);
    }},
];
const DIMENSION_PACKS = [
  { key:'swing', label:'Swing', hint:'Build the motion through mechanics, delivery, and strike.', dimensions:['Swing'] },
  { key:'skill', label:'Skill', hint:'Train the shot through putting, short game, wedges, and transfer.', dimensions:['Skill'] },
  { key:'stretch', label:'Stretch', hint:'Free the body through hips, spine, shoulders, wrists, and feet.', dimensions:['Mobility'] },
  { key:'strength', label:'Strength', hint:'Build support through core, glutes, stability, and power.', dimensions:['Strength','Strength & Stability'] },
];
const state = {
  favoritesOnly:false,
  favorites:new Set(JSON.parse(localStorage.getItem('tipLibraryFavorites') || '[]')),
  tray:JSON.parse(localStorage.getItem('tipLibraryTray') || '[]'),
  activePack:'',
  activeDimensionPack:''
};
const els={
  search:document.getElementById('searchInput'),dimension:document.getElementById('dimensionFilter'),area:document.getElementById('areaFilter'),category:document.getElementById('categoryFilter'),location:document.getElementById('locationFilter'),confidence:document.getElementById('confidenceFilter'),clear:document.getElementById('clearFiltersBtn'),favoritesOnly:document.getElementById('showFavoritesBtn'),count:document.getElementById('resultsCount'),grid:document.getElementById('resultsGrid'),summary:document.getElementById('librarySummary'),favoritesList:document.getElementById('favoritesList'),trayList:document.getElementById('trayList'),copyTray:document.getElementById('copyTrayBtn'),clearTray:document.getElementById('clearTrayBtn'),packs:document.getElementById('drillPacks'),dimensionPacks:document.getElementById('dimensionPacks')
};
const uniq=a=>[...new Set(a)].sort();
function uiDimensionLabel(dim){ if(dim==='Mobility') return 'Stretch'; if(dim==='Strength & Stability') return 'Strength'; return dim; }
function rawDimensionsForFilter(label){ if(label==='Stretch') return ['Mobility']; if(label==='Strength') return ['Strength','Strength & Stability']; return [label]; }
const populate=(s,v)=>v.forEach(x=>{const o=document.createElement('option');o.value=x;o.textContent=x;s.appendChild(o)});
function buildFilters(){populate(els.dimension,uniq(data.map(d=>uiDimensionLabel(d.dimension))));populate(els.area,uniq(data.map(d=>d.area)));populate(els.category,uniq(data.map(d=>d.category)));populate(els.location,uniq(data.map(d=>d.location)));populate(els.confidence,uniq(data.map(d=>d.confidence)));}
function saveState(){localStorage.setItem('tipLibraryFavorites',JSON.stringify([...state.favorites]));localStorage.setItem('tipLibraryTray',JSON.stringify(state.tray));}
function renderPacks(){
  if(els.packs){
    els.packs.innerHTML = DRILL_PACKS.map(pack=>`<button class="tip-btn ${state.activePack===pack.key?'tip-btn-primary':'tip-btn-secondary'}" data-pack="${pack.key}" title="${pack.hint}">${pack.label}</button>`).join('');
  }
  if(els.dimensionPacks){
    els.dimensionPacks.innerHTML = DIMENSION_PACKS.map(pack=>`<button class="tip-btn ${state.activeDimensionPack===pack.key?'tip-btn-primary':'tip-btn-secondary'}" data-dimension-pack="${pack.key}" title="${pack.hint}">${pack.label}</button>`).join('');
  }
}
function card(item){const favorite=state.favorites.has(item.id);const inTray=state.tray.includes(item.id);return `<article class="glass-card p-4 flex flex-col gap-3"><div class="flex items-start justify-between gap-3"><div><div class="section-kicker">${item.id}</div><h3 class="text-lg font-bold mt-1 leading-tight">${item.name}</h3></div><button class="metric-badge ${favorite?'metric-good':'metric-neutral'} favorite-toggle" data-id="${item.id}">${favorite?'★ Saved':'☆ Save'}</button></div><div class="flex flex-wrap gap-2"><span class="metric-badge metric-neutral">${uiDimensionLabel(item.dimension)}</span><span class="metric-badge metric-neutral">${item.category}</span><span class="metric-badge metric-neutral">${item.area}</span></div><div class="text-sm text-slate-300 leading-relaxed"><div><span class="text-slate-400">Goal:</span> ${item.goal}</div><div><span class="text-slate-400">Location:</span> ${item.location}</div><div><span class="text-slate-400">Time:</span> ${item.time} min</div><div><span class="text-slate-400">Confidence:</span> ${item.confidence}</div></div><div class="mt-auto pt-1 flex gap-2"><button class="tip-btn tip-btn-secondary flex-1 view-how-btn" data-id="${item.id}">View How ⓘ</button><button class="tip-btn ${inTray?'tip-btn-primary':'tip-btn-secondary'} flex-1 tray-toggle" data-id="${item.id}">${inTray?'Added to Tray':'Add to Session Tray'}</button></div></article>`;}
function filtered(){
  const q=els.search.value.trim().toLowerCase();
  return data.filter(item=>{
    if(state.favoritesOnly && !state.favorites.has(item.id)) return false;
    if(state.activePack){
      const pack=DRILL_PACKS.find(p=>p.key===state.activePack);
      if(pack && !pack.matches(item)) return false;
    }
    if(state.activeDimensionPack){
      const pack=DIMENSION_PACKS.find(p=>p.key===state.activeDimensionPack);
      if(pack && !pack.dimensions.includes(item.dimension)) return false;
    }
    if(els.dimension.value && !rawDimensionsForFilter(els.dimension.value).includes(item.dimension)) return false;
    if(els.area.value && item.area!==els.area.value) return false;
    if(els.category.value && item.category!==els.category.value) return false;
    if(els.location.value && item.location!==els.location.value) return false;
    if(els.confidence.value && item.confidence!==els.confidence.value) return false;
    if(q){
      const hay=[item.id,item.name,item.dimension,item.category,item.area,item.goal,item.location,item.confidence].join(' ').toLowerCase();
      if(!hay.includes(q)) return false;
    }
    return true;
  });
}
function renderSummary(){const groups={};data.forEach(d=>{const key=uiDimensionLabel(d.dimension);groups[key]=(groups[key]||0)+1;});els.summary.innerHTML=Object.entries(groups).sort((a,b)=>a[0].localeCompare(b[0])).map(([dim,count])=>`<div class="summary-card"><div class="summary-label">${dim}</div><div class="summary-value">${count}</div></div>`).join('');}
function renderFavorites(){const items=data.filter(d=>state.favorites.has(d.id));els.favoritesList.innerHTML=items.length?items.map(i=>`<div class="legend-item"><div class="legend-code">${i.id}</div><div class="mt-1 font-semibold text-slate-100">${i.name}</div><div class="text-slate-400 text-xs mt-1">${uiDimensionLabel(i.dimension)} · ${i.area}</div></div>`).join(''):'<div class="text-slate-500">No saved items yet.</div>';}
function renderTray(){const items=state.tray.map(id=>data.find(d=>d.id===id)).filter(Boolean);els.trayList.innerHTML=items.length?items.map(i=>`<div class="legend-item flex items-start justify-between gap-3"><div><div class="legend-code">${i.id}</div><div class="mt-1 font-semibold text-slate-100">${i.name}</div><div class="text-slate-400 text-xs mt-1">${uiDimensionLabel(i.dimension)} · ${i.area} · ${i.time} min</div></div><button class="metric-badge metric-bad remove-tray" data-id="${i.id}">Remove</button></div>`).join(''):'<div class="text-slate-500">Nothing in the tray yet.</div>';}
function render(){const items=filtered();els.count.textContent=`${items.length} items`;els.favoritesOnly.textContent=state.favoritesOnly?'Showing Favorites':'Favorites Only';els.grid.innerHTML=items.map(card).join('')||'<div class="glass-card p-6 text-slate-400">No items match the current filters.</div>';renderPacks();renderFavorites();renderTray();}
document.addEventListener('click',async e=>{
  const fav=e.target.closest('.favorite-toggle');if(fav){const id=fav.dataset.id;state.favorites.has(id)?state.favorites.delete(id):state.favorites.add(id);saveState();render();return;}
  const tray=e.target.closest('.tray-toggle');if(tray){const id=tray.dataset.id;if(!state.tray.includes(id))state.tray.push(id);saveState();render();return;}
  const how=e.target.closest('.view-how-btn');if(how){const item=data.find(d=>d.id===how.dataset.id); if(window.TIPHowUI) window.TIPHowUI.open(item); return;}
  const remove=e.target.closest('.remove-tray');if(remove){state.tray=state.tray.filter(id=>id!==remove.dataset.id);saveState();render();return;}
  const packBtn=e.target.closest('[data-pack]'); if(packBtn && packBtn.closest('#drillPacks')){ state.activePack = packBtn.dataset.pack===state.activePack ? '' : packBtn.dataset.pack; state.activeDimensionPack=''; render(); return; }
  const dimBtn=e.target.closest('[data-dimension-pack]'); if(dimBtn && dimBtn.closest('#dimensionPacks')){ state.activeDimensionPack = dimBtn.dataset.dimensionPack===state.activeDimensionPack ? '' : dimBtn.dataset.dimensionPack; state.activePack=''; render(); return; }
});
[els.search,els.dimension,els.area,els.category,els.location,els.confidence].forEach(el=>{el.addEventListener('input',render);el.addEventListener('change',render);});
els.clear.addEventListener('click',()=>{[els.search,els.dimension,els.area,els.category,els.location,els.confidence].forEach(el=>el.value='');state.favoritesOnly=false;state.activePack='';state.activeDimensionPack='';render();});
els.favoritesOnly.addEventListener('click',()=>{state.favoritesOnly=!state.favoritesOnly;render();});
els.clearTray.addEventListener('click',()=>{state.tray=[];saveState();render();});
els.copyTray.addEventListener('click',async()=>{const items=state.tray.map(id=>data.find(d=>d.id===id)).filter(Boolean);const text=items.map(i=>`${i.id} | ${i.name} | ${i.dimension} | ${i.area} | ${i.goal} | ${i.location} | ${i.time} min`).join('\n');try{await navigator.clipboard.writeText(text||'No items in tray');els.copyTray.textContent='Copied';setTimeout(()=>els.copyTray.textContent='Copy Tray',1600);}catch(err){alert('Could not copy tray.')}});
buildFilters(); renderSummary(); render();
