interface IPersonData {
    name: string;
    secondName: string;
    age: number;
}

interface IStudentData extends IPersonData {
    phone: string;
}

/*
1. Напишите конструктор, который принимает в качестве параметра объект с интерфейсом IPersonData
2. Добавьте метод getData(), возвращающий объект, соответствующий интерфейсу IPersonData
 */
export class Person {
    constructor(data: IPersonData) {
        this._name = data.name;
        this._secondName = data.secondName;
        this._age = data.age;
    }

    readonly _name: string;
    readonly _secondName: string;
    readonly _age: number;

    getData(): IPersonData {
        const data: IPersonData = {
            name: this._name,
            secondName: this._secondName,
            age: this._age,
        };
        return data;
    }
}

/*
1. Напишите конструктор, который принимает в качестве параметра объект с интерфейсом IStudentData
2. Добавьте метод getData(), возвращающий объект, соответствующий интерфейсу IStudentData
 */
export class Student extends Person {
    constructor(data: IStudentData) {
        super(data);
        this._phone = data.phone;
    }

    readonly _phone: string;

    getData(): IStudentData {
        const data: IStudentData = {
            name: this._name,
            secondName: this._secondName,
            age: this._age,
            phone: this._phone,
        };
        return data;
    }
}
