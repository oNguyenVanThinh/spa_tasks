$('#notification').click(function(e) {
  e.preventDefault();
  toggleSidebar();
})

$('#navsearch').focus(function(e){
  toggleSidebar();
})

$('#navsearch').focusout(function(e){
  toggleSidebar();
})

function toggleSidebar() {
  if ($('#sidebar').css('flex-basis') == '0px') {
    $('#sidebar').css('flex-basis', '400px')
  } else {
    $('#sidebar').css('flex-basis', '0')
  }
}

var modalTaskShow = $('#modal-task-show');

$('.task-name').click(function(e) {
    e.preventDefault();
    modalTaskShow.css('display', 'block');
})

$('.modal-close').click(function() {
    modalTaskShow.css('display', 'none');
})

$(window).click(function(e){
  if (e.target == modalTaskShow){
    modalTaskShow.css('display', 'none');
  }
})

