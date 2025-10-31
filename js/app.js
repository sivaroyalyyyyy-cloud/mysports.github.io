// Minimal JS to mirror UI interactions in the screenshot: segmented tabs and password eye toggles
document.addEventListener('DOMContentLoaded', ()=>{
  const segBtns = document.querySelectorAll('.seg-btn');
  const panels = document.querySelectorAll('.auth-panel');

  segBtns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      segBtns.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const target = btn.dataset.target;
      panels.forEach(p=>{
        if(p.id === 'panel-'+target) p.classList.remove('hidden'); else p.classList.add('hidden');
      });
    });
  });

  // password eye toggles
  document.querySelectorAll('.eye').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const targetId = btn.dataset.target;
      const el = document.getElementById(targetId);
      if(!el) return;
      if(el.type === 'password'){ el.type = 'text'; btn.textContent = '🙈'; }
      else { el.type = 'password'; btn.textContent = '👁️'; }
    });
  });

  // simple submit handlers (no backend) — match visual behaviour from screenshot (no redirects)
  document.getElementById('btn-login-action').addEventListener('click', ()=>{
    alert('Login submitted — this is a static demo.');
  });
  document.getElementById('btn-register-action').addEventListener('click', ()=>{
    alert('Register submitted — this is a static demo.');
  });
});
