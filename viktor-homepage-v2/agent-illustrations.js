(() => {
  const asset = name => 'illustration-assets/icon-' + name + '.svg';
  const icon = (name, cls = '') => '<span aria-hidden="true" class="ai-icon '+cls+'" style="--icon:url('+asset(name)+')"></span>';
  const skeleton = (width = '70%', secondary = false) => '<span class="ai-skeleton'+(secondary?' secondary':'')+'" style="--skeleton-width:'+width+'"></span>';
  const progress = (value, color = 'var(--ai-blue)') => '<span class="ai-progress" style="--progress:'+value+'%;--progress-color:'+color+'"><i></i></span>';
  const tile = (name='menu-objectives',color='') => '<span class="ai-tile '+color+'">'+icon(name)+'</span>';
  let ringId = 0;
  const ring = (value,denominator,status,color='var(--ai-blue)') => {
    const id='ai-score-gradient-'+(++ringId), fraction=value/denominator;
    const angle=fraction*Math.PI*2-Math.PI/2;
    const endX=50+42*Math.cos(angle),endY=50+42*Math.sin(angle);
    const green=color==='var(--ai-green)';
    return '<div class="ai-ring"><svg class="ai-ring-art" viewBox="0 0 100 100" aria-hidden="true"><defs><linearGradient id="'+id+'" x1="85%" y1="15%" x2="15%" y2="85%"><stop stop-color="'+(green?'#20d3ab':'#258fff')+'"/><stop offset=".55" stop-color="'+(green?'#1acaa6':'#0066ff')+'"/><stop offset="1" stop-color="'+(green?'#22d4ad':'#922bfa')+'"/></linearGradient></defs><circle cx="50" cy="50" r="42" class="ai-ring-track"/><path d="M 50 8 A 42 42 0 '+(fraction>.5?1:0)+' 1 '+endX+' '+endY+'" fill="none" stroke="url(#'+id+')" stroke-width="8" stroke-linecap="round"/></svg><div class="ai-ring-label"><b>'+value+(denominator===10?'/10':'')+'</b><small>'+(status||'/'+denominator)+'</small></div></div>';
  };
  const cta = label => '<span class="ai-cta">'+label+'</span>';
  const primary = (title, body, subtitle='') => '<section class="ai-primary"><h4 class="ai-overlay-title">'+icon('sparkle','ai-sparkle')+title+'</h4>'+(subtitle?'<p class="ai-subtitle">'+subtitle+'</p>':'')+body+'</section>';
  const secondary = (title, body) => '<aside class="ai-secondary"><h5>'+title+'</h5>'+body+'</aside>';
  function sidebar(active){
    return '<aside class="ai-sidebar" aria-label="Simplified Oboard navigation">'+[['menu-home','Home'],['menu-check-ins','Check-ins'],['menu-objectives','Objectives'],['menu-dashboard','Dashboard']].map(([name,label])=>'<div class="ai-nav-item '+(label===active?'active':'')+'" aria-label="'+label+'">'+icon(name)+skeleton('40px')+'</div>').join('')+'</aside>';
  }
  function product(content,active){
    return '<div class="ai-product"><div class="ai-topbar"><img class="ai-logo" src="'+asset('oboard-logo-main')+'" alt="Oboard"></div>'+sidebar(active)+'<div class="ai-content">'+content+'</div></div>';
  }
  function alignment(){
    const kr=(value,selected=false)=>'<div class="ai-tree-row '+(selected?'selected':'')+'"><span class="ai-tile">KR</span><span class="ai-tree-copy">'+(selected?'Increase activation rate to 40%':skeleton()+skeleton('55%',true))+'</span>'+progress(value,selected?'var(--ai-blue)':'var(--ai-green)')+'<small>'+value+'%</small></div>';
    const tree='<h4>Objectives</h4><div class="ai-tree"><div class="ai-tree-row"><span class="ai-tile ai-company-entity" aria-label="Company objective">C</span><span class="ai-tree-copy">'+skeleton()+skeleton('60%',true)+'</span>'+progress(72,'var(--ai-green)')+'<small>72%</small></div><div class="ai-branch"><div class="ai-tree-row"><span class="ai-tile ai-department-entity" aria-label="Department objective">Dp</span><span class="ai-tree-copy">'+skeleton()+skeleton('60%',true)+'</span>'+progress(58,'var(--ai-green)')+'<small>58%</small></div><div class="ai-branch">'+kr(28,true)+kr(62)+kr(45)+'</div></div></div>';
    return product(tree,'Objectives')+primary('Alignment quality','<div class="ai-score-layout">'+ring(6,10,'Needs work')+'<div class="ai-dimensions">'+[['Vertical alignment',48,'#ff8541'],['Measurability',40,'#f64963'],['Scope fit',65,'#36b27e']].map(([label,value,color])=>'<div class="ai-dimension">'+label+progress(value,color)+'</div>').join('')+'</div></div>')+secondary('AI recommendation','<p>Reframe this as a measurable customer outcome.</p>'+cta('Apply fix →'));
  }
  const person=(initial='')=>initial==='EN'?'<span class="ai-avatar">EN</span>':'<img class="ai-avatar" src="illustration-assets/avatar-'+({AL:'al',B:'ben',M:'martine',S:'sam'}[initial]||'al')+'.webp" alt="" width="24" height="24" decoding="async">';
  function peopleRows(rows){
    return rows.map(([value,date],i)=>'<div class="ai-list-row">'+person(['AL','B','M','S'][i])+'<span class="ai-person-copy">'+skeleton('90%')+skeleton('60%',true)+'</span>'+progress(value,i===0?'var(--ai-green)':'var(--ai-blue)')+'<small>'+value+'%</small><time class="'+(/Never|6 days/.test(date)?'overdue':'')+'">'+date+'</time></div>').join('');
  }
  function detailItem(label,copy,name,color=''){
    return '<div class="ai-detail-item '+color+'">'+tile(name,color)+'<div><b>'+label+'</b><p>'+copy+'</p></div></div>';
  }
  function checkin(){
    const feed='<h4>Check-ins</h4><article class="ai-feed-entry"><header>'+person('AL')+'<div>'+skeleton('96px')+'<small>2 days ago</small></div></header><div class="ai-feed-body"><div class="ai-feed-entity"><span class="ai-tile orange">KR</span>'+skeleton('148px')+'</div><div class="ai-feed-field"><b>Progress</b><span>50%</span><span>→</span><strong>60%</strong></div>'+skeleton('82%',true)+'</div></article><article class="ai-feed-entry ai-feed-older"><header>'+person('B')+'<div>'+skeleton('90px')+skeleton('48px',true)+'</div></header><div class="ai-feed-body">'+skeleton('85%')+skeleton('65%',true)+'</div></article>';
    return product(feed,'Check-ins')+
      primary('Draft check-in','<div class="ai-checkin-details">'+[['Progress','Activation improved to 68%.','trending-up','green'],['Plans','Finish onboarding rollout.','list-details','purple'],['Blockers','Waiting for analytics data.','alert-triangle','orange']].map(([label,copy,name,color])=>'<div class="ai-detail-item '+color+'">'+tile(name,color)+'<div><b>'+label+'</b><p>'+copy+'</p></div>'+icon('chevron-right','ai-detail-chevron')+'</div>').join('')+'</div><div class="ai-button-row"><span class="ai-cta muted">Edit</span>'+cta('Confirm check-in →')+'</div>','Review your AI-drafted update.')+
      secondary('Drafted from recent work',[['github','3 commits'],['figma','2 designs updated'],['googledocs','5 comments']].map(([name,copy])=>'<div class="ai-source-row ai-work-source"><img src="illustration-assets/'+name+'.svg?rev=official-1" alt="'+name+'"><span>'+copy+skeleton('72%',true)+'</span></div>').join(''));
  }
  function engagement(){
    const report='<h4>Performance report</h4><div class="ai-report-switches"><span>By group</span><b>People</b><b>By status</b><span>Progress</span></div><div class="ai-status-table" aria-label="People by status, simplified report">'+[['AL',72],['B',68],['M',74]].map(([initial,value])=>'<div class="ai-status-person"><div class="ai-status-person-name">'+person(initial)+skeleton('64px')+'</div><span aria-label="On Track">'+skeleton('18px')+'</span><span aria-label="Behind">'+skeleton('18px')+'</span><span class="ai-status-average" aria-label="Average total '+value+' percent">'+value+'%</span></div>').join('')+'</div>';
    return product(report,'Dashboard')+
      primary('Engagement','<div class="ai-score-layout">'+ring(61,100)+'<div class="ai-score-copy"><strong class="ai-attention">Needs attention</strong><p>Two owners haven’t updated since the cycle opened.</p></div></div>')+
      secondary('2 owners went quiet','<div class="ai-owner-row">'+person('B')+'<span class="ai-owner-copy">'+skeleton('88%')+skeleton('62%',true)+'</span><time>6 days ago</time></div><div class="ai-owner-row">'+person('M')+'<span class="ai-owner-copy">'+skeleton('100%')+skeleton('70%',true)+'</span><time>Never</time></div>'+cta('Review owners →'));
  }
  const okrRows=(values,type)=>'<div class="ai-okr-children">'+values.map((value,i)=>'<div class="ai-okr-row"><span class="ai-tile" aria-label="'+(type==='C'?'Company objective':'Department objective')+'">'+type+'</span>'+skeleton()+progress(value,i===0?'var(--ai-green)':'#b9cce4')+'<small>'+value+'%</small></div>').join('')+'</div>';
  function retrospective(){
    const summary='<div class="ai-home-summary"><div class="ai-team-heading">'+person('EN')+'<div>Engineering<small>Engineering department</small></div></div></div>';
    const objectives='<section class="ai-home-panel"><div class="ai-mini-heading">'+icon('menu-objectives')+'Objectives</div>'+[70,50,30].map((value,i)=>'<div class="ai-home-objective"><i class="ai-status-dot status-'+i+'"></i>'+skeleton('112px')+progress(value,['#42c994','#ffbc3c','#9caac0'][i])+'<small>'+value+'%</small></div>').join('')+'</section>';
    const metrics='<section class="ai-home-panel"><div class="ai-mini-heading">'+icon('chart-bar')+'Key metrics</div><div class="ai-metric-signals"><span>↗ '+skeleton()+'<b>+12%</b></span><span>↘ '+skeleton()+'<b>−8%</b></span></div></section>';
    return product('<div class="ai-retro">'+summary+objectives+metrics+'</div>','Home')+
      primary('Retrospective ready','<div class="ai-outcome-panel"><div class="ai-outcome">'+tile('check','green')+'<b>2</b> outcomes achieved</div><div class="ai-outcome carry">'+tile('arrow-right')+'<b>1</b> carries forward</div></div><div class="ai-agenda-panel">'+tile('list-details','purple')+'<div><div class="ai-mini-heading">Proposed agenda</div><ol class="ai-agenda"><li>Review outcomes</li><li>Discuss what stalled</li><li>Set next-cycle priorities</li></ol></div></div>'+cta('Review retrospective'),'Drafted from your completed cycle.')+
      '<aside class="ai-secondary ai-icon-evidence ai-carry-evidence">'+tile('list-details','purple')+'<div><h5>EMEA dependencies</h5><span class="ai-carry-link">Carry to Q4 →</span></div></aside>';
  }
  function drafting(){
    return product('<div class="ai-group-heading">'+tile('menu-objectives')+'<div>Company OKRs<small>FY 2026</small></div></div>'+okrRows([70,45,30],'C')+'<div class="ai-group-heading">'+tile('menu-groups')+'<div>Engineering OKRs<small>Engineering department</small></div></div>'+okrRows([60,40,20],'Dp'),'Objectives')+
      primary('Draft Engineering OKRs',detailItem('Objective','Improve platform reliability and operational efficiency','menu-objectives')+detailItem('KR 1','Increase service uptime to 99.9%','chart-bar','green')+detailItem('KR 2','Reduce critical incident MTTR by 50%','chart-bar','green')+cta('Review draft OKRs'),'Based on company goals and your department priorities.')+
      '<aside class="ai-secondary ai-icon-evidence ai-draft-sources">'+tile('file-description','purple')+'<div><h5>Based on</h5><div class="ai-source-row">'+icon('ds-building')+'Company goals (FY 2026)</div><div class="ai-source-row">'+icon('ds-users')+'Engineering priorities</div></div></aside>';
  }
  function strategy(){
    return product('<h4>Strategy overview</h4><div class="ai-strategy">'+[['Vision','ds-eye',''],['Strategy','ds-target','purple'],['OKRs','ds-chart-column','green']].map(([label,name,color])=>'<div class="ai-strategy-step">'+tile(name,color)+'<div><b>'+label+'</b>'+skeleton()+skeleton('65%',true)+'</div></div>').join('')+'</div>','Home')+
      primary('Strategy readiness','<div class="ai-readiness">'+ring(72,100,'/100','var(--ai-green)')+'<strong>Ready with one gap</strong><p>Strategy is clear, but one goal needs a measurable target.</p></div>'+cta('View detailed analysis'))+
      '<aside class="ai-secondary ai-warning-evidence">'+tile('alert-triangle','orange')+'<div class="ai-warning-copy"><h5>Enterprise expansion</h5><p>Missing measurable target</p></div>'+icon('arrow-right','ai-warning-chevron')+'</aside>';
  }
  const renderers={2:alignment,3:checkin,4:engagement,5:retrospective,1:drafting,0:strategy};
  // Attach connectors to actual tile bounds, never to a decorative side spine.
  function connectHierarchy(host){
    const frame=host.querySelector('.ai-product');
    if(!frame)return;
    frame.querySelector('.ai-hierarchy-links')?.remove();
    const pairs=[];
    const steps=[...frame.querySelectorAll('.ai-strategy-step > .ai-tile')];
    steps.slice(1).forEach((child,i)=>pairs.push([steps[i],child]));
    frame.querySelectorAll('.ai-branch').forEach(branch=>{
      const parent=branch.previousElementSibling?.querySelector('.ai-tile');
      // Draw the parent-to-first-child elbow once. Siblings continue locally
      // from the previous row instead of redrawing a long parent-owned rail.
      const children=[...branch.querySelectorAll(':scope > .ai-tree-row > .ai-tile')];
      if(parent)children.forEach((child,i)=>pairs.push([i?children[i-1]:parent,child,i>0,parent]));
    });
    if(!pairs.length)return;
    const ns='http://www.w3.org/2000/svg';
    const svg=document.createElementNS(ns,'svg');
    svg.classList.add('ai-hierarchy-links');
    svg.setAttribute('aria-hidden','true');
    const bounds=frame.getBoundingClientRect();
    svg.setAttribute('viewBox',`0 0 ${frame.clientWidth} ${frame.clientHeight}`);
    pairs.forEach(([parent,child,sibling,owner])=>{
      const p=parent.getBoundingClientRect(),c=child.getBoundingClientRect();
      const o=(owner||parent).getBoundingClientRect();
      const x=o.left+o.width/2-bounds.left-frame.clientLeft;
      const y=(sibling?p.top+p.height/2-4:p.bottom+5)-bounds.top-frame.clientTop;
      // Selected rows own a visible card edge outside their padded icon.
      const destination=child.closest('.ai-tree-row.selected')?.getBoundingClientRect()||c;
      const endX=destination.left-bounds.left-frame.clientLeft-8;
      const endY=c.top+c.height/2-bounds.top-frame.clientTop;
      const r=Math.max(0,Math.min(4,endX-x,endY-y));
      const path=document.createElementNS(ns,'path');
      path.setAttribute('d',`M ${x} ${y} V ${endY-r} Q ${x} ${endY} ${x+r} ${endY} H ${endX}`);
      path.setAttribute('stroke-linecap','round');
      if(child.closest('.ai-strategy-step')){
        path.setAttribute('d',path.getAttribute('d')+` M ${endX-4} ${endY-4} L ${endX} ${endY} L ${endX-4} ${endY+4}`);
        path.setAttribute('stroke-linejoin','round');
      }
      svg.append(path);
    });
    frame.append(svg);
  }
  const hierarchyResize=new ResizeObserver(entries=>entries.forEach(({target})=>connectHierarchy(target)));
  window.renderAgentIllustration = function(index, host=document.getElementById('agentIllustration')){
    if(!host)return;
    host.innerHTML=(renderers[index]||alignment)();
    host.setAttribute('aria-label', ['Strategy Readiness','OKR Drafting','Alignment Analysis','Check-in Drafting','Engagement Report','Retrospective Prep'][index]+' product illustration');
    connectHierarchy(host);
    hierarchyResize.observe(host);
  };
  window.agentIllustrationPrimitives={asset,icon,skeleton,progress,tile,ring,cta,primary,secondary,sidebar,product,renderers};
})();
