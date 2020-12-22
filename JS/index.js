var app = {}

app.getElement = (element) => { // get the element
    return document.getElementById(element)
}
app.firstDiv = app.getElement('firstDiv')
app.input = app.getElement('input')
app.output = app.getElement('output')


app.input.onkeyup = function() {
    app.output.innerText = this.value      
}