// var $dialog = $('<div></div>')
//                .html('<iframe style="border: 0px; " src="' + page + '" width="100%" height="100%"></iframe>')
//                .dialog({
//                    autoOpen: false,
//                    modal: true,
//                    height: 625,
//                    width: 500,
//                    title: "Some title"
//                });
// $dialog.dialog('open');

function openModal(src) {
  var modalContent = document.getElementById("modalContent");
  modalContent.innerHTML = '<dialog open id="dialog" class="dialog" onclick="closeModal();"><iframe style="border: 0px; " src="' + src + '.html" width="100%" height="100%"></iframe><div class="close" onclick="closeModal();">X</div></dialog>';
}

function closeModal() {
  var dialog = document.getElementById("dialog");
  dialog.close();
}