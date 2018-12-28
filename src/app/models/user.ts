export class User {
    public username: string;
    public age: number;
    public description: string;

    /**
     *
     */
    constructor(username: string, age: number, description: string) {
     this.username = username;
     this.age = age;
     this.description = description;
    }
}
