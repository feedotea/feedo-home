/* FEEDO MUSEUM 官網共用腳本：報頭日期與頁尾年份 */
// 報頭日期：2026.09.15 週二（週二加註公休）
  (function(){
    const d=new Date(), p=n=>String(n).padStart(2,'0'), wk='日一二三四五六'[d.getDay()];
    document.getElementById('today').textContent=`${d.getFullYear()}.${p(d.getMonth()+1)}.${p(d.getDate())} 週${wk}${d.getDay()===2?'・今日公休':''}`;
    document.getElementById('yr').textContent=d.getFullYear();
  })();

/* 本機預覽用：網址是 localhost 時，把跨站連結指到本機伺服器，
   方便預覽時在三個站之間點來點去。正式網站不會執行到這裡。 */
(function localPreview(){
  const LOCAL = {"order.feedomuseum.com":"5179", "claim.feedomuseum.com":"5180"};
  if(!/^(localhost|127\.0\.0\.1)$/.test(location.hostname)) return;
  document.querySelectorAll('a[href^="https://"]').forEach(a => {
    try{
      const u = new URL(a.href);
      const port = LOCAL[u.hostname];
      if(port) a.href = `http://localhost:${port}${u.pathname}${u.search}${u.hash}`;
    }catch(e){}
  });
})();
