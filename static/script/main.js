var result = document.getElementById("result");
function edit(elem) {
  result.value = result.value + elem.value;
}
function calc() {
  result.value = new Function("return " + result.value)();
}

$("button").click(function (){
    $(this).after('<h1>Ansewr</h1>');
});
