// display
const displaySelectedOption = document.querySelector('#selected-option')
const displayShapeImage = document.querySelector('#display-image')

// inputs
const areaOrVolumeInput = document.querySelector('#area-or-volume')
const shapeInput = document.querySelector('#shape')
const volumeInput = document.querySelector('#shape-volume')

// event listeners
areaOrVolumeInput.addEventListener('input', selectAreaOrVolume)
areaOrVolumeInput.addEventListener('input', selectedOption)
shapeInput.addEventListener('input', selectShape)
shapeInput.addEventListener('input', selectedOptionShape)
volumeInput.addEventListener('input', selectVolume)
volumeInput.addEventListener('input', selectedOptionShapeVolume)

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

// circle display & inputs & event listeners
const displayCircleArea = document.querySelector('#circle-area-output')
const circleRadiusInput = document.querySelector('#circle-radius')
const circleSignificantFigures = document.querySelector('#circle-sig-fig')
circleRadiusInput.addEventListener('input', circleArea)
circleSignificantFigures.addEventListener('input', circleArea)

// pyramid display & inputs & event listeners
const displayPyramidArea = document.querySelector('#pyramid-area-output')
const pyramidBaseLengthInput = document.querySelector('#pyramid-base-length')
const pyramidBaseWidthInput = document.querySelector('#pyramid-base-width')
const pyramidHeightInput = document.querySelector('#pyramid-height')
const pyramidSignificantFigures = document.querySelector('#pyramid-sig-fig')
pyramidBaseLengthInput.addEventListener('input', pyramidArea)
pyramidBaseWidthInput.addEventListener('input', pyramidArea)
pyramidHeightInput.addEventListener('input', pyramidArea)
pyramidSignificantFigures.addEventListener('input', pyramidArea)

// cuboid display & inputs & event listeners
const displayCuboidArea = document.querySelector('#cuboid-area-output')
const cuboidLengthInput = document.querySelector('#cuboid-length')
const cuboidWidthInput = document.querySelector('#cuboid-width')
const cuboidHeightInput = document.querySelector('#cuboid-height')
const cuboidSignificantFigures = document.querySelector('#cuboid-sig-fig')
cuboidLengthInput.addEventListener('input', cuboidArea)
cuboidWidthInput.addEventListener('input', cuboidArea)
cuboidHeightInput.addEventListener('input', cuboidArea)
cuboidSignificantFigures.addEventListener('input', cuboidArea)

// sphere display & inputs & event listeners
const displaySphereArea = document.querySelector('#sphere-area-output')
const sphereRadiusInput = document.querySelector('#sphere-radius')
const sphereSignificantFigures = document.querySelector('#sphere-sig-fig')
sphereRadiusInput.addEventListener('input', sphereArea)
sphereSignificantFigures.addEventListener('input', sphereArea)

// functions

// function to select if you'd like to calculate area or volume
function selectAreaOrVolume() {
    const area_or_volume = document.querySelector('#area-or-volume')
    const shape_input = document.querySelector('#shape')
    const shape_volume_input = document.querySelector('#shape-volume')
    const triangle_form = document.querySelector('#triangle')
    const square_form = document.querySelector('#square')
    const circle_form = document.querySelector('#circle')
    const pyramid_form = document.querySelector('#pyramid')
    const cuboid_form = document.querySelector('#cuboid')
    const sphere_form = document.querySelector('#sphere')

    let areaOrVolumeInput = area_or_volume.value

    if(areaOrVolumeInput == "area") {
        shape_input.style.display = "initial"

        shape_volume_input.style.display = "none"
        square_form.style.display = "none"
        triangle_form.style.display = "none"
        circle_form.style.display = "none"
        pyramid_form.style.display = "none"
        cuboid_form.style.display = "none"
        sphere_form.style.display = "none"
    } else if(areaOrVolumeInput == "volume") {
        shape_volume_input.style.display = "initial"

        shape_input.style.display = "none"
        square_form.style.display = "none"
        triangle_form.style.display = "none"
        circle_form.style.display = "none"
        pyramid_form.style.display = "none"
        cuboid_form.style.display = "none"
        sphere_form.style.display = "none"
    }
}

// function to select what you'd like to calculate the volume of
function selectVolume() {
    const shape_volume_input = document.querySelector('#shape-volume')
    const triangle_form = document.querySelector('#triangle')
    const square_form = document.querySelector('#square')
    const circle_form = document.querySelector('#circle')
    const pyramid_form = document.querySelector('#pyramid')
    const cuboid_form = document.querySelector('#cuboid')
    const sphere_form = document.querySelector('#sphere')

    let shapeVolumeInputValue = shape_volume_input.value

    if(shapeVolumeInputValue == "pyramid") {
        pyramid_form.style.display = "initial"
        cuboid_form.style.display = "initial"
        sphere_form.style.display = "initial"

        cuboid_form.style.display = "none"
        sphere_form.style.display = "none"
        square_form.style.display = "none"
        triangle_form.style.display = "none"
        circle_form.style.display = "none"
    } else if(shapeVolumeInputValue == "cuboid") {
        pyramid_form.style.display = "initial"
        cuboid_form.style.display = "initial"
        sphere_form.style.display = "initial"

        pyramid_form.style.display = "none"
        sphere_form.style.display = "none"
        square_form.style.display = "none"
        triangle_form.style.display = "none"
        circle_form.style.display = "none"
    } else if(shapeVolumeInputValue == "sphere") {
        pyramid_form.style.display = "initial"
        cuboid_form.style.display = "initial"
        sphere_form.style.display = "initial"

        pyramid_form.style.display = "none"
        cuboid_form.style.display = "none"
        square_form.style.display = "none"
        triangle_form.style.display = "none"
        circle_form.style.display = "none"
    }
}

// function to select what you'd like to calculate the area of
function selectShape() {
    const shape_input = document.querySelector('#shape')
    const triangle_form = document.querySelector('#triangle')
    const square_form = document.querySelector('#square')
    const circle_form = document.querySelector('#circle')
    const pyramid_form = document.querySelector('#pyramid')
    const cuboid_form = document.querySelector('#cuboid')
    const sphere_form = document.querySelector('#sphere')

    let shapeInputValue = shape_input.value

    if(shapeInputValue == "triangle") {
        square_form.style.display = "initial"
        triangle_form.style.display = "initial"
        circle_form.style.display = "initial"

        square_form.style.display = "none"
        circle_form.style.display = "none"
        pyramid_form.style.display = "none"
        cuboid_form.style.display = "none"
        sphere_form.style.display = "none"
    } else if(shapeInputValue == "square") {
        square_form.style.display = "initial"
        triangle_form.style.display = "initial"
        circle_form.style.display = "initial"

        triangle_form.style.display = "none"
        circle_form.style.display = "none"
        pyramid_form.style.display = "none"
        cuboid_form.style.display = "none"
        sphere_form.style.display = "none"
    } else if(shapeInputValue == "circle") {
        square_form.style.display = "initial"
        triangle_form.style.display = "initial"
        circle_form.style.display = "initial"

        square_form.style.display = "none"
        triangle_form.style.display = "none"
        pyramid_form.style.display = "none"
        cuboid_form.style.display = "none"
        sphere_form.style.display = "none"
    }
}

// calculates the area of a triangle
function triangleArea() {
    const triangleBaseValue = parseFloat(triangleBaseInput.value)
    const triangleHeightValue = parseFloat(triangleHeightInput.value)
    const significantFigureValue = parseInt(triangleSignificantFigures.value)

    const triangleArea = 0.5 * triangleBaseValue * triangleHeightValue

    displayTriangleArea.innerHTML = triangleArea.toFixed(significantFigureValue)
}

// calculates the area of a square or rectangle
function squareArea() {
    const squareLengthValue = parseFloat(squareLengthInput.value)
    const squareWidthValue = parseFloat(squareWidthInput.value)
    const significantFigureValue = parseInt(squareSignificantFigures.value)

    const squareArea = squareLengthValue * squareWidthValue

    displaySquareArea.innerHTML = squareArea.toFixed(significantFigureValue)
}

// calculates the area of a circle
function circleArea() {
    const circleRadiusValue = parseFloat(circleRadiusInput.value)
    const significantFigureValue = parseInt(circleSignificantFigures.value)

    const circleArea = Math.PI * Math.pow(circleRadiusValue, 2)

    displayCircleArea.innerHTML = circleArea.toFixed(significantFigureValue)
}

// calculates the volume of a pyramid
function pyramidArea() {
    const pyramidBaseLengthValue = parseFloat(pyramidBaseLengthInput.value)
    const pyramidBaseWidthValue = parseFloat(pyramidBaseWidthInput.value)
    const pyramidHeightValue = parseFloat(pyramidHeightInput.value)
    const significantFigureValue = parseInt(pyramidSignificantFigures.value)

    const pyramidArea = (1/3) * (pyramidBaseLengthValue * pyramidBaseWidthValue) * pyramidHeightValue

    displayPyramidArea.innerHTML = pyramidArea.toFixed(significantFigureValue)
}

// calculates the volume of a cuboid
function cuboidArea() {
    const cuboidLengthValue = parseFloat(cuboidLengthInput.value)
    const cuboidWidthValue = parseFloat(cuboidWidthInput.value)
    const cuboidHeightValue = parseFloat(cuboidHeightInput.value)
    const significantFigureValue = parseInt(cuboidSignificantFigures.value)

    const cuboidArea = cuboidLengthValue * cuboidWidthValue * cuboidHeightValue

    displayCuboidArea.innerHTML = cuboidArea.toFixed(significantFigureValue)
}

// calculates the volume of a sphere
function sphereArea() {
    const sphereRadiusValue = parseFloat(sphereRadiusInput.value)
    const significantFigureValue = parseInt(sphereSignificantFigures.value)
    
    const sphereArea = (4/3) * Math.PI * Math.pow(sphereRadiusValue, 3)

    displaySphereArea.innerHTML = sphereArea.toFixed(significantFigureValue)
}

// tells user if they've selected area or volume
function selectedOption() {
    const calculationInput = areaOrVolumeInput.value

    displaySelectedOption.innerHTML = `You are calculating the ${calculationInput}`
}

// tells user which shape they've selected and shows an image
function selectedOptionShape() {
    const calculationInput = areaOrVolumeInput.value
    const calculationShapeInput = shapeInput.value
        if(calculationShapeInput == "triangle") {
            displayShapeImage.innerHTML = `<img src="images/2d_shapes/triangle.gif" />`
        } else if (calculationShapeInput == "square") {
            displayShapeImage.innerHTML = `<img src="images/2d_shapes/rectangle.gif" />`
        } else if (calculationShapeInput == "circle") {
            displayShapeImage.innerHTML = `<img src="images/2d_shapes/circle.gif" />`
        }

    displaySelectedOption.innerHTML = `You are calculating the ${calculationInput} of a ${calculationShapeInput}.`
}

// tells user which 3d shape they've selected and shows an image
function selectedOptionShapeVolume() {
    const calculationInput = areaOrVolumeInput.value
    const calculationVolumeInput = volumeInput.value
        if(calculationVolumeInput == "pyramid") {
            displayShapeImage.innerHTML = `<img src="images/3d_shapes/pyramid.png" />`
        } else if(calculationVolumeInput == "cuboid") {
            displayShapeImage.innerHTML = `<img src="images/3d_shapes/cuboid.png" />`
        } else if(calculationVolumeInput == "sphere") {
            displayShapeImage.innerHTML = `<img src="images/3d_shapes/sphere.png" />`
        }

    displaySelectedOption.innerHTML =  `You are calculating the ${calculationInput} of a ${calculationVolumeInput}.`
}

// defines constants in order to hide unused input forms
const area_or_volume = document.querySelector('#area-or-volume')
const shape_input = document.querySelector('#shape')
const shape_volume_input = document.querySelector('#shape-volume')
const triangle_form = document.querySelector('#triangle')
const square_form = document.querySelector('#square')
const circle_form = document.querySelector('#circle')
const pyramid_form = document.querySelector('#pyramid')
const cuboid_form = document.querySelector('#cuboid')
const sphere_form = document.querySelector('#sphere')

shape_input.style.display = "none"
shape_volume_input.style.display = "none"
square_form.style.display = "none"
triangle_form.style.display = "none"
circle_form.style.display = "none"
pyramid_form.style.display = "none"
cuboid_form.style.display = "none"
sphere_form.style.display = "none"