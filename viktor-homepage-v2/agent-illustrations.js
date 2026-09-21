(() => {
  const asset = name => 'illustration-assets/icon-' + name + '.svg';
  const icon = (name, cls = '') => '<span aria-hidden="true" class="ai-icon '+cls+'" style="--icon:url('+asset(name)+')"></span>';
  const skeleton = (width = '70%', secondary = false) => '<span class="ai-skeleton'+(secondary?' secondary':'')+'" style="--skeleton-width:'+width+'"></span>';
  const progress = (value, color = 'var(--ai-blue)') => '<span class="ai-progress" style="--progress:'+value+'%;--progress-color:'+color+'"><i></i></span>';
  const tile = (name='menu-objectives',color='') => '<span class="ai-tile '+color+'">'+icon(name)+'</span>';
  const ring = (value,denominator,status,color='var(--ai-blue)') => '<div class="ai-ring" style="--score:'+(value/denominator*100)+'%;--ring-color:'+color+'"><div class="ai-ring-label"><b>'+value+(denominator===10?'/10':'')+'</b><small>'+(status||'/'+denominator)+'</small></div></div>';
  const cta = label => '<span class="ai-cta">'+label+'</span>';
  const primary = (title, body, subtitle='') => '<section class="ai-primary"><h4 class="ai-overlay-title">'+icon('sparkle','ai-sparkle')+title+'</h4>'+(subtitle?'<p class="ai-subtitle">'+subtitle+'</p>':'')+body+'</section>';
  const secondary = (title, body) => '<aside class="ai-secondary"><h5>'+title+'</h5>'+body+'</aside>';
  function sidebar(active){
    return '<aside class="ai-sidebar" aria-label="Simplified Oboard navigation">'+[['menu-home','Home'],['menu-check-ins','Check-ins'],['menu-objectives','Objectives'],['menu-dashboard','Dashboard']].map(([name,label])=>'<div class="ai-nav-item '+(label===active?'active':'')+'" aria-label="'+label+'">'+icon(name)+skeleton('40px')+'</div>').join('')+'</aside>';
  }
  function product(content,active){
    return '<div class="ai-product"><div class="ai-topbar"><img class="ai-logo" src="'+asset('oboard-logo-main')+'" alt="Oboard"><span class="ai-selector">'+skeleton('70%')+'⌄</span><span class="ai-selector">'+skeleton('70%')+'⌄</span></div>'+sidebar(active)+'<div class="ai-content">'+content+'</div></div>';
  }
  function alignment(){
    const kr=(value,selected=false)=>'<div class="ai-tree-row '+(selected?'selected':'')+'"><span class="ai-tile">KR</span><span class="ai-tree-copy">'+(selected?'Increase activation rate to 40%':skeleton()+skeleton('55%',true))+'</span>'+progress(value,selected?'var(--ai-blue)':'var(--ai-green)')+'<small>'+value+'%</small></div>';
    const tree='<h4>Objectives</h4><div class="ai-tree"><div class="ai-tree-row">'+tile()+'<span class="ai-tree-copy">'+skeleton()+skeleton('60%',true)+'</span>'+progress(72,'var(--ai-green)')+'<small>72%</small></div><div class="ai-branch"><div class="ai-tree-row">'+tile('menu-objectives','purple')+'<span class="ai-tree-copy">'+skeleton()+skeleton('60%',true)+'</span>'+progress(58,'var(--ai-green)')+'<small>58%</small></div><div class="ai-branch">'+kr(28,true)+kr(62)+kr(45)+'</div></div></div>';
    return product(tree,'Objectives')+primary('Alignment quality','<div class="ai-score-layout">'+ring(6,10,'Needs work')+'<div class="ai-dimensions">'+[['Vertical alignment',48,'#ff8541'],['Measurability',40,'#f64963'],['Scope fit',65,'#36b27e']].map(([label,value,color])=>'<div class="ai-dimension">'+label+progress(value,color)+'</div>').join('')+'</div></div>')+secondary('AI recommendation','<p>Reframe this as a measurable customer outcome.</p>'+cta('Apply fix →'));
  }
  const person=(initial='')=>'<span class="ai-avatar '+(!initial?'soft':'')+'">'+initial+'</span>';
  function peopleRows(rows){
    return rows.map(([value,date],i)=>'<div class="ai-list-row">'+person(i===0?'AL':'')+'<span class="ai-person-copy">'+skeleton('90%')+skeleton('60%',true)+'</span>'+progress(value)+'<small>'+value+'%</small><time class="'+(/Never|6 days/.test(date)?'overdue':'')+'">'+date+'</time></div>').join('');
  }
  function detailItem(label,copy,name,color=''){
    return '<div class="ai-detail-item '+color+'">'+tile(name,color)+'<div><b>'+label+'</b><p>'+copy+'</p></div></div>';
  }
  function checkin(){
    return product('<h4>Check-ins</h4>'+peopleRows([[68,'Today'],[42,'2d ago'],[18,'Aug 26'],[76,'Aug 24']]),'Check-ins')+
      primary('Draft check-in',detailItem('Progress','Activation improved to 68%.','trending-up','green')+detailItem('Plans','Finish onboarding rollout.','list-details','purple')+detailItem('Blockers','Waiting for analytics data.','alert-triangle','orange')+'<div class="ai-button-row"><span class="ai-cta muted">Edit</span>'+cta('Confirm check-in')+'</div>','Review your AI-drafted update.')+
      secondary('Drafted from recent work',[['github','3 commits'],['figma','2 designs updated'],['googledocs','5 comments']].map(([name,copy])=>'<div class="ai-source-row"><img src="illustration-assets/'+name+'.svg?rev=official-1" alt="'+name+'">'+copy+'</div>').join(''));
  }
  function engagement(){
    return product('<h4>Team</h4><div class="ai-mini-tabs"><b>People</b><span>Groups</span></div>'+peopleRows([[68,'2 days ago'],[42,'6 days ago'],[12,'Never']]),'People')+
      primary('Engagement','<div class="ai-score-layout">'+ring(61,100)+'<div class="ai-score-copy"><strong class="ai-attention">Needs attention</strong><p>Two owners haven’t updated since the cycle opened.</p></div></div>')+
      secondary('2 owners went quiet','<div class="ai-owner-row">'+person('B')+'Ben<time>6 days ago</time></div><div class="ai-owner-row">'+person('M')+'Martine<time>Never</time></div>'+cta('Review owners →'));
  }
  const okrRows=(values,letter)=>values.map(value=>'<div class="ai-okr-row"><span class="ai-tile">'+letter+'</span>'+skeleton()+progress(value,'var(--ai-green)')+'<small>'+value+'%</small></div>').join('');
  function retrospective(){
    return product('<div class="ai-retro"><div class="ai-team-heading">'+person('EN')+'Engineering</div><div class="ai-kpis"><div><b>72%</b><span>Alignment</span></div><div><b>45%</b><span>Engagement</span></div><div><b>61%</b><span>OKR progress</span></div></div><div class="ai-mini-heading">Objectives</div>'+okrRows([70,50,30],'O')+'<div class="ai-mini-heading">Key metrics</div><div class="ai-metric-signals"><span>'+skeleton()+'↗ +12%</span><span>'+skeleton()+'↘ −8%</span></div></div>','Home')+
      primary('Retrospective ready','<div class="ai-outcome"><b>2</b> outcomes achieved</div><div class="ai-outcome carry"><b>1</b> carries forward</div><div class="ai-mini-heading">Proposed agenda</div><ol class="ai-agenda"><li>Review outcomes</li><li>Discuss what stalled</li><li>Set next-cycle priorities</li></ol>'+cta('Review retrospective'),'Drafted from your completed cycle.')+
      secondary('Carry forward','<p>EMEA dependencies</p><span style="color:var(--ai-blue)">Move to Q4 →</span>');
  }
  function drafting(){
    return product('<div class="ai-group-heading">'+tile('menu-objectives')+'<div>Company OKRs<small>FY 2026</small></div></div>'+okrRows([70,45,30],'C')+'<div class="ai-group-heading">'+tile('menu-groups')+'<div>Engineering OKRs<small>Engineering department</small></div></div>'+okrRows([60,40,20],'E'),'Objectives')+
      primary('Draft Engineering OKRs',detailItem('Objective','Improve platform reliability and operational efficiency','menu-objectives')+detailItem('KR 1','Increase service uptime to 99.9%','chart-bar','green')+detailItem('KR 2','Reduce critical incident MTTR by 50%','chart-bar','green')+cta('Review draft OKRs'),'Based on company goals and your department priorities.')+
      secondary('Based on','<div class="ai-source-row">'+icon('menu-objectives')+'Company goals (FY 2026)</div><div class="ai-source-row">'+icon('menu-groups')+'Engineering priorities</div>');
  }
  function strategy(){
    return product('<h4>Strategy overview</h4><div class="ai-strategy">'+[['Vision','eye',''],['Strategy','menu-objectives','purple'],['OKRs','chart-bar','green']].map(([label,name,color])=>'<div class="ai-strategy-step">'+tile(name,color)+'<div><b>'+label+'</b>'+skeleton()+skeleton('65%',true)+'</div></div>').join('')+'</div>','Home')+
      primary('Strategy readiness','<div class="ai-readiness">'+ring(72,100,'/100','var(--ai-green)')+'<strong>Ready with one gap</strong><p>Strategy is clear, but one goal needs a measurable target.</p></div>'+cta('View detailed analysis'))+
      secondary('Needs attention','<p><strong>Enterprise expansion</strong></p><p>Missing measurable target</p>');
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
      if(parent)branch.querySelectorAll(':scope > .ai-tree-row > .ai-tile').forEach(child=>pairs.push([parent,child]));
    });
    if(!pairs.length)return;
    const ns='http://www.w3.org/2000/svg';
    const svg=document.createElementNS(ns,'svg');
    svg.classList.add('ai-hierarchy-links');
    svg.setAttribute('aria-hidden','true');
    const bounds=frame.getBoundingClientRect();
    svg.setAttribute('viewBox',`0 0 ${frame.clientWidth} ${frame.clientHeight}`);
    pairs.forEach(([parent,child])=>{
      const p=parent.getBoundingClientRect(),c=child.getBoundingClientRect();
      const x=p.left+p.width/2-bounds.left-frame.clientLeft;
      const y=p.bottom-bounds.top-frame.clientTop;
      const endX=c.left-bounds.left-frame.clientLeft-2;
      const endY=c.top+c.height/2-bounds.top-frame.clientTop;
      const r=Math.max(0,Math.min(6,endX-x,endY-y));
      const path=document.createElementNS(ns,'path');
      path.setAttribute('d',`M ${x} ${y} V ${endY-r} Q ${x} ${endY} ${x+r} ${endY} H ${endX}`);
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
