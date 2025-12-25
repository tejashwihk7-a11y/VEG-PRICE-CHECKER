function showShop(id) {
  document.querySelectorAll('.shop').forEach(s => s.style.display = "none");
  document.getElementById(id).style.display = "block";
}
