function parseCount(parseArg){
    if (Number.isNaN(Number.parseFloat(parseArg))){
        throw new Error('Невалидное значение');
    } else {
        return Number.parseFloat(parseArg);
    }
}
function validateCount(parseArg){
    try{
        parseCount(parseArg);
        return parseCount(parseArg);
    }
    catch(e){
        return e;
    };
}
class Triangle{
    constructor(a,b,c){
        if ((a+b)<c || (a+c)<b || (c+b)<a){
            throw new Error('Треугольник с такими сторонами не существует')
        } else {
            this.a =a;
            this.b =b;
            this.c = c;
        }
    }
    get  perimeter() {
        this._perimeter = this.a + this.b + this.c; 
        return this._perimeter;
    }
    get area(){
        let p = this._perimeter/2;
        return +Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c)).toFixed(3);
    }
}
function getTriangle(a,b,c){
    try{
        
        return new Triangle(a,b,c);
    } catch(e) {
        class ErrorTriangle{
            get area(){
                return "Ошибка! Треугольник не существует";
            }
            get perimeter(){
                return "Ошибка! Треугольник не существует";
            }
        }
       
        return new ErrorTriangle;

    }
}