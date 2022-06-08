$('img').attr('data-bs-toggle', 'modal');
$('img').attr('data-bs-target', '#aModal');

$('#aModal').on('show.bs.modal', function(event) {
    let imageClicked = $(event.relatedTarget);
    let srcV = imageClicked.attr('src');
    let altV = imageClicked.attr('alt');
    $('#modalImage').attr('src', srcV);
    $('#modalImage').attr('alt', altV);
});

function filterSelection(c){
    $(".filterdiv").each((k,v)=>{
       if (c == "all"){
           $(v).show()
       }else{
           $(v).hide()
           if ($(v).hasClass(c)){
               $(v).show()
           }
       }
   })
}

