import mongoose, {Schema} from 'mongoose';
import account from '../interfaces/account';

const AccountModels : Schema = new Schema(
    {
        title:{
           type:String,
           require:true
        },
        type:{
            type:String,
            require:true,

        },
        category:
        {
            type:String,
            require:true
        },
        amount:{
           type:Number,
           require:true 
        },

        createdAt:{
            type:Date,
            default:Date.now()
        },
   
    }
)

export default mongoose.model<account>('Account',AccountModels);