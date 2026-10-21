(function (root) {
  'use strict';
  function grade(questions, answers) {
    const correct = questions.filter(q => Number(answers[q.id]) === q.answer).length;
    const answered = questions.filter(q => [1,2,3,4].includes(Number(answers[q.id]))).length;
    return {correct, answered, wrong: answered-correct, unanswered: questions.length-answered, percent: correct/questions.length*100};
  }
  function remaining(state, now = Date.now()) {
    return Math.max(0, state.remainingMs - (state.running && state.startedAt ? Math.max(0, now-state.startedAt) : 0));
  }
  function cleanState(value, total = 80) {
    const fresh={version:1,answers:{},flags:[],name:'',page:0,remainingMs:6000000,running:false,startedAt:null,submitted:false};
    if (!value || value.version!==1) return fresh;
    const answers={};
    for (let i=1;i<=total;i++) if ([1,2,3,4].includes(value.answers?.[i])) answers[i]=value.answers[i];
    return {...fresh,answers,flags:[...new Set((Array.isArray(value.flags)?value.flags:[]).filter(n=>Number.isInteger(n)&&n>0&&n<=total))],name:typeof value.name==='string'?value.name.slice(0,20):'',page:Number.isInteger(value.page)?Math.min(9,Math.max(0,value.page)):0,remainingMs:Number.isFinite(value.remainingMs)?Math.min(6000000,Math.max(0,value.remainingMs)):6000000,startedAt:Number.isFinite(value.startedAt)?value.startedAt:null,running:value.running===true&&value.submitted!==true&&Number.isFinite(value.startedAt),submitted:value.submitted===true};
  }
  const api={grade,remaining,cleanState};
  if(typeof module!=='undefined') module.exports=api;
  else root.ExamCore=api;
})(typeof window!=='undefined'?window:globalThis);
