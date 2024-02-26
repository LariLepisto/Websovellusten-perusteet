import { Circle } from "./class/Circle.js";

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const x_input = document.querySelector('#x')
const y_input = document.querySelector('#y')
const draw_button = document.querySelector('button')
const radio_form = document.querySelector('form')
const line_width_input = document.querySelector('input [type=number]')
const updateUi = (label3, label4) => {
    document.querySelector('div#third label').innerHTML = label3

    if (label4 !== undefined) {
        document.querySelector('div#fourth label').innerHTML = label4
        document.querySelector('div#fourth label').style.display = "inline-block"
        document.querySelector('div#fourth label').style.display = "inline-block"
    } else {
        document.querySelector('div#fourth label').style.display = "none"
        document.querySelector('div#fourth label').style.display = "none"
    }
}

radio_form.addEventListener('click', () => {
    const shape = radio_form['shape'].value
    switch(shape) {
        case 'line':
            updateUi("x2","y2");
            break
        case 'circle':
            updateUi("width:");
            break
        case 'rectangle':
            updateUi("width:","height:");
            break
        case 'square':
            updateUi("width:");
            break
    }
})

draw_button.addEventListener('click', () => {
    const shape = radio_form['shape'].value
    
    switch(shape) {
        case 'line':
            drawLine()
            break
        case 'circle':
            drawCircle()
            break
        case 'rectangle':
            drawRectangle()
            break
        case 'square':
            drawSquare()
            break

    }
})

const drawLine = () => {
    const x1 = x_input.value;
    const y1 = y_input.value;
    const x2 = document.querySelector('div#third input').value;
    const y2 = document.querySelector('div#fourth input').value;

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}
const drawCircle = () => {
    const x = x_input.value
    const y = y_input.value
    const width = document.querySelector('div#third input').value
    const lineWidth = line_width_input
    const circle = new Circle(x,y,width/2)
    circle.setLineWidth = lineWidth
    circle.draw(ctx)
}
const drawRectangle = () => {
    const x = x_input.value;
    const y = y_input.value;
    const width = document.querySelector('div#third input').value;
    const height = document.querySelector('div#fourth input').value;

    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.stroke();
}
const drawSquare = () => {
    const x = x_input.value;
    const y = y_input.value;
    const size = document.querySelector('div#third input').value;
    const square = new Rectangle(x, y, size, size);
    square.setLineWidth = line_width_input.value;
    square.draw(ctx);
}
