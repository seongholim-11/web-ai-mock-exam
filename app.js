(() => {
  'use strict';
  const Q=window.EXAM_DATA, C=window.ExamCore, KEY='web-ai-exam-v1', SYMBOLS=['①','②','③','④'];
  const $=id=>document.getElementById(id);
  const sections=[...new Set(Q.map(q=>q.section))];
  let state, filter='all', dialogAction=null, toastTimeout;
  try {state=C.cleanState(JSON.parse(localStorage.getItem(KEY)));} catch {state=C.cleanState(null);}
  function save(){try{localStorage.setItem(KEY,JSON.stringify(state));$('save-status').textContent='답안 자동 저장됨';}catch{$('save-status').textContent='저장 불가 · 이 화면에서만 유지';}}
  function toast(message){$('toast').textContent=message;$('toast').classList.add('show');clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>$('toast').classList.remove('show'),2600);}
  const escape=text=>String(text).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function inline(text){return escape(text).replace(/`([^`]+)`/g,'<code>$1</code>').replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>');}
  function rich(text){return text.split(/(```[\w]*\n[\s\S]*?```)/g).filter(Boolean).map(part=>part.startsWith('```')?'<pre><code>'+escape(part.replace(/^```[^\n]*\n/,'').replace(/```$/,'').trimEnd())+'</code></pre>':part.trim().split(/\n\s*\n/).filter(Boolean).map(p=>'<p>'+inline(p.trim()).replace(/\n/g,'<br>')+'</p>').join('')).join('');}
  function visibleQuestions(){return Q.filter(q=>filter==='all'||(filter==='wrong'&&state.answers[q.id]!==q.answer)||(filter==='flagged'&&state.flags.includes(q.id)));}
  function pageCount(){return Math.max(1,Math.ceil(visibleQuestions().length/8));}
  function questionHTML(q,print=false){
    const selected=state.answers[q.id], flag=state.flags.includes(q.id), correct=selected===q.answer;
    return `<article class="question" id="${print?'print-':''}q-${q.id}" aria-label="${q.id}번 문제"><div class="question-top"><div><span class="question-number">${q.id}.</span><span class="question-topic">${escape(q.section)}</span></div>${print?'':`<button class="flag-button" data-flag="${q.id}" aria-label="${q.id}번 다시 볼 문제" aria-pressed="${flag}">${flag?'◆':'◇'} 다시 보기</button>`}</div><div class="question-prompt">${rich(q.prompt)}</div><div class="choices" role="radiogroup" aria-label="${q.id}번 답안">${q.choices.map((choice,i)=>`<label class="choice ${selected===i+1?'selected':''} ${state.submitted&&q.answer===i+1?'correct':''} ${state.submitted&&selected===i+1&&!correct?'incorrect':''}">${print?'':`<input type="radio" name="q-${q.id}" value="${i+1}" data-question="${q.id}" ${selected===i+1?'checked':''} ${state.submitted?'disabled':''}>`}<span class="choice-symbol">${SYMBOLS[i]}</span><span>${inline(choice)}</span></label>`).join('')}</div>${state.submitted?`<div class="answer-feedback ${correct?'':'wrong'}">${correct?'✓ 정답':selected?'✕ 오답':'— 미응답'} · 정답 ${SYMBOLS[q.answer-1]}${selected&&!correct?' / 내 답 '+SYMBOLS[selected-1]:''}</div>${print?'<div class="explanation">':`<details class="explanation" open><summary>정답 해설</summary>`}${rich(q.explanation)}${q.review?`<a href="${escape(q.review.url)}" target="_blank" rel="noopener noreferrer">관련 학습 자료 · ${escape(q.review.label)} ↗</a>`:''}${print?'</div>':'</details>'}`:''}</article>`;
  }
  function renderQuestions(){
    const items=visibleQuestions();state.page=Math.min(state.page,pageCount()-1);
    const slice=items.slice(state.page*8,state.page*8+8), middle=Math.ceil(slice.length/2);
    $('questions').innerHTML=slice.length?`<div class="question-column">${slice.slice(0,middle).map(q=>questionHTML(q)).join('')}</div><div class="question-column">${slice.slice(middle).map(q=>questionHTML(q)).join('')}</div>`:'<div class="empty-state">해당하는 문항이 없습니다.<br>전체 문항에서 다른 문제를 확인하세요.</div>';
    $('question-range').textContent=slice.length?`${slice[0].id}~${slice.at(-1).id}번 문항`: '0개 문항';
    const topic=slice[0]?.section;
    $('page-topic').textContent=topic?String(sections.indexOf(topic)+1).padStart(2,'0')+' — '+topic:'복습 문항';
    if(topic) $('topic-select').value=topic;
    $('folio').innerHTML=`${state.page+1} <span>/ ${pageCount()}</span>`;
    $('page-indicator').textContent=String(state.page+1).padStart(2,'0')+' / '+String(pageCount()).padStart(2,'0');
    $('prev-page').disabled=state.page===0;$('next-page').disabled=state.page>=pageCount()-1;
    document.querySelector('.paper-footer>span:last-child').textContent=state.page===pageCount()-1?'이상입니다.':'다음 장에 계속 ↗';
  }
  function renderGrid(){
    const currentIds=visibleQuestions().slice(state.page*8,state.page*8+8).map(q=>q.id);
    $('answer-grid').innerHTML=Q.map(q=>{const answer=state.answers[q.id],flag=state.flags.includes(q.id),status=state.submitted?(answer===q.answer?'정답':answer?'오답':'미응답'):answer?SYMBOLS[answer-1]+' 선택':'미응답';return `<button class="answer-cell ${currentIds.includes(q.id)?'current':''} ${answer?'answered':''} ${flag?'flagged':''} ${state.submitted?(answer===q.answer?'right':'wrong'):''}" data-jump="${q.id}" aria-label="${q.id}번 ${status}${flag?' 다시 볼 문제':''}" ${currentIds.includes(q.id)?'aria-current="true"':''}>${q.id}</button>`;}).join('');
    const count=Object.keys(state.answers).length;$('answered-count').textContent=count;$('progress-fill').style.width=count/80*100+'%';$('progress').setAttribute('aria-valuenow',count);
  }
  function renderResult(){
    $('result-summary').hidden=!state.submitted;$('review-controls').hidden=!state.submitted;
    if(!state.submitted)return;
    const g=C.grade(Q,state.answers),name=state.name?escape(state.name)+' 님의':'나의';
    $('result-summary').innerHTML=`<div class="result-top"><h2>${name} 모의평가 성적표</h2><div class="score">${g.correct}<small> / 80점</small></div></div><div class="result-stats"><span>정답률 <b>${g.percent.toFixed(1)}%</b></span><span>오답 <b>${g.wrong}</b></span><span>미응답 <b>${g.unanswered}</b></span></div><div class="section-results">${sections.map(s=>{const items=Q.filter(q=>q.section===s);return `<div><span>${escape(s)}</span><b>${C.grade(items,state.answers).correct} / ${items.length}</b></div>`;}).join('')}</div>`;
  }
  function render(){renderQuestions();renderGrid();renderResult();renderTimer();$('student-name').value=state.name;$('student-name').disabled=state.submitted;$('mode-label').textContent=state.submitted?'채점 완료 · 해설과 복습':'실전 모의고사';$('submit-button').textContent=state.submitted?'성적표 확인하기 ↗':'답안 제출하고 채점하기 ↗';}
  function renderTimer(){
    const ms=C.remaining(state),seconds=Math.ceil(ms/1000),m=Math.floor(seconds/60),s=seconds%60;
    $('timer').innerHTML=String(m).padStart(2,'0')+'<span>:</span>'+String(s).padStart(2,'0');
    $('timer').setAttribute('aria-label',`남은 시간 ${m}분 ${s}초`);$('timer').classList.toggle('urgent',ms<=300000);
    $('timer-state').textContent=state.submitted?'시험 종료':state.running?'응시 중':state.remainingMs===6000000?'시작 전':'일시 정지';
    $('timer-button').textContent=state.submitted?'채점 완료 ✓':state.running?'일시 정지 Ⅱ':state.remainingMs===6000000?'시험 시작 →':'계속 풀기 →';
    $('timer-button').disabled=state.submitted;
    $('timer-help').textContent=state.submitted?'정답과 해설을 확인해 보세요.':state.running?'시간이 끝나면 자동으로 제출됩니다.':state.remainingMs===6000000?'답을 선택해도 시험이 시작됩니다.':'답을 선택하면 시간이 다시 흐릅니다.';
  }
  function start(){if(state.running||state.submitted)return;state.startedAt=Date.now();state.running=true;save();renderTimer();}
  function jump(id){filter='all';$('review-filter').value='all';state.page=Math.floor((id-1)/8);renderQuestions();renderGrid();save();requestAnimationFrame(()=>{const target=$('q-'+id);target.scrollIntoView({behavior:'smooth',block:'center'});target.classList.remove('highlight');requestAnimationFrame(()=>target.classList.add('highlight'));});}
  function submit(auto=false){if(state.submitted)return;state.remainingMs=C.remaining(state);state.running=false;state.startedAt=null;state.submitted=true;state.page=0;filter='all';save();render();if($('action-dialog').open)$('action-dialog').close('cancel');$('result-summary').scrollIntoView({behavior:'smooth',block:'start'});$('result-summary').focus({preventScroll:true});toast(auto?'시험 시간이 끝나 자동 제출되었습니다.':'채점이 완료되었습니다. 해설을 확인하세요.');}
  function showDialog(action){dialogAction=action;const g=C.grade(Q,state.answers);$('dialog-title').textContent=action==='reset'?'처음부터 다시 풀까요?':'답안을 제출할까요?';$('dialog-description').textContent=action==='reset'?'저장된 답안, 성적, 표시한 문항과 타이머가 초기화됩니다.':`80문항 중 ${g.answered}문항을 풀었습니다. ${g.unanswered?'미응답 '+g.unanswered+'문항은 0점으로 처리됩니다. ':''}제출 후에는 답안을 수정할 수 없으며 정답과 해설이 공개됩니다.`;$('dialog-confirm').textContent=action==='reset'?'초기화하기':'제출하고 채점하기';$('action-dialog').querySelector('button[value=cancel]').textContent=action==='reset'?'취소':'계속 풀기';$('action-dialog').showModal();}
  $('topic-select').innerHTML=sections.map(s=>`<option value="${escape(s)}">${escape(s)} · ${Q.find(q=>q.section===s).id}~${Q.filter(q=>q.section===s).at(-1).id}번</option>`).join('');
  $('questions').addEventListener('change',e=>{const input=e.target;if(!input.matches('input[data-question]')||state.submitted)return;if(C.remaining(state)<=0){submit(true);return;}start();const id=Number(input.dataset.question);state.answers[id]=Number(input.value);save();const article=$('q-'+id);article.querySelectorAll('.choice').forEach(label=>label.classList.toggle('selected',label.querySelector('input').checked));renderGrid();});
  $('questions').addEventListener('click',e=>{const button=e.target.closest('[data-flag]');if(!button)return;const id=Number(button.dataset.flag);state.flags=state.flags.includes(id)?state.flags.filter(n=>n!==id):[...state.flags,id];button.setAttribute('aria-pressed',state.flags.includes(id));button.textContent=(state.flags.includes(id)?'◆':'◇')+' 다시 보기';save();renderGrid();});
  $('answer-grid').addEventListener('click',e=>{const button=e.target.closest('[data-jump]');if(button)jump(Number(button.dataset.jump));});
  $('topic-select').addEventListener('change',e=>jump(Q.find(q=>q.section===e.target.value).id));
  $('student-name').addEventListener('input',e=>{state.name=e.target.value;save();});
  $('timer-button').addEventListener('click',()=>{if(state.running){state.remainingMs=C.remaining(state);state.running=false;state.startedAt=null;save();renderTimer();}else if(C.remaining(state)<=0)submit(true);else start();});
  for(const [id,delta] of [['prev-page',-1],['next-page',1]]) $(id).addEventListener('click',()=>{state.page=Math.min(pageCount()-1,Math.max(0,state.page+delta));renderQuestions();renderGrid();save();$('exam').scrollIntoView({behavior:'smooth',block:'start'});$('exam').focus({preventScroll:true});});
  $('submit-button').addEventListener('click',()=>state.submitted?($('result-summary').scrollIntoView({behavior:'smooth'}),$('result-summary').focus({preventScroll:true})):showDialog('submit'));
  $('reset-button').addEventListener('click',()=>showDialog('reset'));
  $('action-dialog').addEventListener('close',()=>{if($('action-dialog').returnValue!=='confirm')return;if(dialogAction==='submit')submit();else {state=C.cleanState(null);filter='all';$('review-filter').value='all';save();render();$('exam').scrollIntoView({behavior:'smooth'});toast('새 시험지가 준비되었습니다.');}});
  $('review-filter').addEventListener('change',e=>{filter=e.target.value;state.page=0;renderQuestions();renderGrid();});
  function preparePrint(){$('print-zone').innerHTML=`<header class="print-header"><p>웹 서비스 기초 및 AI 백엔드 개발 · 제1회 모의평가</p><h1>웹·AI 개발 영역</h1><p>성명: ${escape(state.name||'________________')} · 80문항 · 100분 · 80점 만점${state.submitted?' · 점수 '+C.grade(Q,state.answers).correct+'점':''}</p></header><div class="print-questions">${Q.map(q=>questionHTML(q,true)).join('')}</div>`;}
  $('print-button').addEventListener('click',()=>{preparePrint();window.print();});
  window.addEventListener('beforeprint',preparePrint);
  document.addEventListener('visibilitychange',()=>{if(!document.hidden){if(!state.submitted&&state.running&&C.remaining(state)<=0)submit(true);renderTimer();}});
  setInterval(()=>{if(!state.submitted&&state.running&&C.remaining(state)<=0)submit(true);else renderTimer();},500);
  render();
  if(!state.submitted&&state.running&&C.remaining(state)<=0)submit(true);
})();
