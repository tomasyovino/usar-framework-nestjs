export class CreateProductDTO {
    readonly name: string;
    readonly desc: string;
    readonly price: number;
    readonly imageURL: string;
    readonly createdAt: Date;
}