
(function(){
  function ensureModal(){
    let modal=document.getElementById('tipHowModal');
    if(modal) return modal;
    modal=document.createElement('div');
    modal.id='tipHowModal';
    modal.className='tip-how-modal hidden';
    modal.innerHTML=`
      <div class="tip-how-backdrop" data-tip-how-close></div>
      <div class="tip-how-panel" role="dialog" aria-modal="true" aria-labelledby="tipHowTitle">
        <button class="tip-how-close" aria-label="Close" data-tip-how-close>×</button>
        <div class="tip-how-head">
          <div id="tipHowKicker" class="section-kicker">TIP Drill Guide</div>
          <h3 id="tipHowTitle" class="tip-how-title"></h3>
          <div id="tipHowMeta" class="tip-how-meta"></div>
        </div>
        <div class="tip-how-body">
          <div class="tip-how-block"><div class="tip-how-label">Setup</div><p id="tipHowSetup"></p></div>
          <div class="tip-how-block"><div class="tip-how-label">Action</div><p id="tipHowAction"></p></div>
          <div class="tip-how-block"><div class="tip-how-label">Feel</div><p id="tipHowFeel"></p></div>
          <div class="tip-how-block"><div class="tip-how-label">Common Mistake</div><p id="tipHowMistake"></p></div>
          <div class="tip-how-block"><div class="tip-how-label">When to Use</div><p id="tipHowWhen"></p></div>
          <div class="tip-how-block"><div class="tip-how-label">TIP Coach Note</div><p id="tipHowCoach"></p></div>
        </div>
      </div>`;
    document.body.appendChild(modal);
    modal.addEventListener('click', function(e){ if(e.target.closest('[data-tip-how-close]')) close(); });
    document.addEventListener('keydown', function(e){ if(e.key==='Escape') close(); });
    return modal;
  }
  function close(){ const modal=document.getElementById('tipHowModal'); if(modal) modal.classList.add('hidden'); document.body.classList.remove('tip-how-open'); }
  function normalize(v){ return String(v||'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim(); }
  function lookup(input){
    const data=window.TIP_DRILL_DETAILS||{};
    if(input && input.id && data.byId && data.byId[input.id]) return data.byId[input.id];
    const key=normalize(input && (input.name || input.title || input.id));
    if(key && data.aliases && data.aliases[key]) return data.aliases[key];
    if(input && input.id){
      return {name:input.name||input.title||input.id, setup:'Set up a simple station and one clear target before you begin.', action:input.howTo || input.action || 'Run the drill with a clear purpose and a small number of high-quality reps.', feel:input.description || input.feel || 'The pattern should feel simpler and easier to repeat.', mistake:'Adding speed or extra thoughts instead of letting the drill do the teaching.', when:input.why || input.when || 'Use this when the round points to this part of the game as the next lever.', coachNote:'Keep the rep honest. Quality feedback matters more than volume.'};
    }
    return null;
  }
  function open(detail){
    const d=lookup(detail); if(!d) return;
    const modal=ensureModal();
    modal.querySelector('#tipHowTitle').textContent=d.name||'';
    modal.querySelector('#tipHowKicker').textContent=[d.id,d.dimension,d.category].filter(Boolean).join(' · ') || 'TIP Drill Guide';
    modal.querySelector('#tipHowMeta').innerHTML=[d.area,d.location,d.time?`${d.time} min`:null,d.confidence].filter(Boolean).map(v=>`<span class="prescription-badge">${v}</span>`).join('');
    modal.querySelector('#tipHowSetup').textContent=d.setup||'';
    modal.querySelector('#tipHowAction').textContent=d.action||'';
    modal.querySelector('#tipHowFeel').textContent=d.feel||'';
    modal.querySelector('#tipHowMistake').textContent=d.mistake||'';
    modal.querySelector('#tipHowWhen').textContent=d.when||'';
    modal.querySelector('#tipHowCoach').textContent=d.coachNote||'';
    modal.classList.remove('hidden'); document.body.classList.add('tip-how-open');
  }
  window.TIPHowUI={open:open, close:close, lookup:lookup};
})();
