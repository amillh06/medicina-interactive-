function desbloquear(id) {
  const materia = document.getElementById(id);
  if (materia && materia.classList.contains('bloqueada')) {
    materia.classList.remove('bloqueada');
    materia.disabled = false;
  }
}

function revisarSegundoAno() {
  // Para el primer semestre del segundo año
  const ramosPrimerAno = [
    'fisica', 'matematicas', 'historia', 'filosofia',
    'sociologia', 'biologia', 'etica',
    'bioestadistica', 'biofisica', 'quimica1', 'quimica2', 'ambiental'
  ];

  const ramosConArte = [...ramosPrimerAno, 'intro_salud', 'arte'];

  const todoPrimerAno = ramosPrimerAno.every(id => document.getElementById(id).classList.contains('aprobada'));
  const todoCompleto = ramosConArte.every(id => document.getElementById(id).classList.contains('aprobada'));

  if (todoPrimerAno) {
    ['macro', 'micro', 'embrio', 'neuro'].forEach(desbloquear);
  }

  if (todoCompleto) {
    ['fisiologia', 'bioquimica', 'psico', 'salud_pub'].forEach(desbloquear);
  }
}

document.querySelectorAll('.materia').forEach(btn => {
  if (btn.classList.contains('bloqueada')) {
    btn.disabled = true;
  }

  btn.addEventListener('click', () => {
    if (!btn.classList.contains('bloqueada')) {
      btn.classList.toggle('aprobada');
      const desbloquea = btn.dataset.desbloquea;
      if (desbloquea) {
        desbloquea.split(',').forEach(desbloquear);
      }
      revisarSegundoAno();
    }
  });
});

