var result = document.getElementById("result");
function edit(elem) {
  result.value = result.value + elem.value;
}
function calc() {
  result.value = new Function("return " + result.value)();
}

$("button").click(function (){
    $(this).prepend('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>');
});
