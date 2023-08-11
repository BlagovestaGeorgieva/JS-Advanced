function rectangle(width, height, color) {

    let remainWord = color.slice(1);
    color = color.charAt(0).toUpperCase();
    color = color + remainWord;
    console.log(color);
    

    let obj = {
        width,
        height,
        color,
        calcArea() {
            return width * height;
        }
    };

    return obj;

}

rectangle(4, 5, 'red');