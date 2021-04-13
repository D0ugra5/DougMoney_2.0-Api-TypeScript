import {Document} from 'mongoose';

export default interface account extends Document{
    title:string;
    type:string;
    category:string;
    amount:number;
    createdAt:Date;
    
}