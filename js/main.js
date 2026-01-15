function mostrar(id) {
  document.querySelectorAll('.content').forEach(c => c.style.display = 'none');
  const seccion = document.getElementById(id);
  seccion.style.display = 'block';
  seccion.focus();
}
