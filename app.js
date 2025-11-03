// app.js - 간단한 client-side lesson 렌더링
document.getElementById('year').textContent = new Date().getFullYear();

function loadLessons(){
  const dataEl = document.getElementById('lessons-data');
  let lessons = [];
  try{
    lessons = JSON.parse(dataEl.textContent);
  }catch(e){
    console.error('lessons.json parse failed', e);
  }
  const container = document.getElementById('lessons');
  container.innerHTML = '';
  lessons.forEach(l=>{
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h4>${l.title}</h4>
      <p style="margin:6px 0;color:rgba(255,255,255,0.75)">${l.summary}</p>
      <small>Level: ${l.level} • ${l.duration}</small><br>
      <a class="btn" href="${l.path}">열기</a>
    `;
    container.appendChild(card);
  });
}

loadLessons();
