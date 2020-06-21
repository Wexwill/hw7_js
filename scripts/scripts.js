    // Чайник

let Kettle = function() {

    this.getInfo = function() {
        this.v = +prompt('Введите объем воды в литрах (0.2-2)');
        this.t = +prompt('Введите начальную температуру воды');

        this.checkInfo();
    };

    this.checkInfo = function() {
        if (this.v > 2) {
            alert('Слишком много воды!');
            this.getInfo();
        } else if (this.v < 0.2) {
            alert('Слишком мало воды!');
            this.getInfo();
        } else if (this.t < 0) {
            alert('Вы растапливаете лед в чайнике? Ужас!');
            this.getInfo();
        } else if (this.t > 100) {
            alert('Введите температуру меньше 100 градусов, хотя бы!');
            this.getInfo();
        } else this.counting();
    }

    this.counting = function() {
        this.time = (4200 * this.v * (100 - this.t)) / (0.85 * 2000);

        this.result();
    };
    
    this.result = function() {
        alert('Время закипания воды: ' + Math.floor(this.time / 60) + ' Мин. ' + Math.round(this.time % 60) + ' Сек.');
    };
}
let kettle = new Kettle();
kettle.getInfo();
