$('#notification').click(function(e) {
  e.preventDefault();
  toggleSidebar();
})

function toggleSidebar() {
  if ($('#sidebar').css('flex-basis') == '0px') {
    $('#sidebar').css('flex-basis', '400px')
  } else {
    $('#sidebar').css('flex-basis', '0')
  }
}
