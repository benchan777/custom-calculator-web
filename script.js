// display

// inputs
const shapeInput = document.querySelector('#shape')

// event listeners
shapeInput.addEventListener('input', selectShape)

// triangle display & inputs & event listeners
const displayTriangleArea = document.querySelector('#triangle-area-output')
const triangleBaseInput = document.querySelector('#triangle-base')
const triangleHeightInput = document.querySelector('#triangle-height')
const triangleSignificantFigures = document.querySelector('#triangle-sig-fig')
triangleBaseInput.addEventListener('input', triangleArea)
triangleHeightInput.addEventListener('input', triangleArea)
triangleSignificantFigures.addEventListener('input', triangleArea)

// square display & inputs & event listeners
const displaySquareArea = document.querySelector('#square-area-output')
const squareLengthInput = document.querySelector('#square-length')
const squareWidthInput = document.querySelector('#square-width')
const squareSignificantFigures = document.querySelector('#square-sig-fig')
squareLengthInput.addEventListener('input', squareArea)
squareWidthInput.addEventListener('input', squareArea)
squareSignificantFigures.addEventListener('input', squareArea)

// functions
function selectShape() {
    const shape_input = document.querySelector('#shape')
    const triangle_form = document.querySelector('#triangle')
    const square_form = document.querySelector('#square')
    const circle_form = document.querySelector('#circle')

    let shapeInputValue = shape_input.value

    // square_form.style.display = "none"
    // triangle_form.style.display = "none"
    // circle_form.style.display = "none"

    if(shapeInputValue == "triangle") {
        square_form.style.display = "initial"
        triangle_form.style.display = "initial"
        circle_form.style.display = "initial"

        square_form.style.display = "none"
        circle_form.style.display = "none"
    } else if(shapeInputValue == "square") {
        square_form.style.display = "initial"
        triangle_form.style.display = "initial"
        circle_form.style.display = "initial"

        triangle_form.style.display = "none"
        circle_form.style.display = "none"
    } else if(shapeInputValue == "circle") {
        square_form.style.display = "initial"
        triangle_form.style.display = "initial"
        circle_form.style.display = "initial"

        square_form.style.display = "none"
        triangle_form.style.display = "none"
    }
}

function triangleArea() {
    const triangleBaseValue = parseFloat(triangleBaseInput.value)
    const triangleHeightValue = parseFloat(triangleHeightInput.value)
    const significantFigureValue = parseInt(triangleSignificantFigures.value)

    const triangleArea = 0.5 * triangleBaseValue * triangleHeightValue

    displayTriangleArea.innerHTML = triangleArea.toFixed(significantFigureValue)
}

function squareArea() {
    const squareLengthValue = parseFloat(squareLengthInput.value)
    const squareWidthValue = parseFloat(squareWidthInput.value)
    const significantFigureValue = parseInt(squareSignificantFigures.value)

    const squareArea = squareLengthValue * squareWidthValue

    displaySquareArea.innerHTML = squareArea.toFixed(significantFigureValue)
}

