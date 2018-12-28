export class New{
    public time: Date;
    public header: string;
    public body: string;

    /**
     *
     */
    constructor(time: Date, header: string, body: string) {
        this.time = time;
        this.header = header;
        this.body = body;
    }
}