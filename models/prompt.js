import mongoose,{Schema,model, models} from 'mongoose';

const PromptSchema = new Schema({
    creator :{
        type : Schema.Types.ObjectId,
        ref : 'User',
    },
    prompt : {
        type : String,
        required : [true, 'Please enter a prompt'],
    },
    tag : {
        type : String,
        required : [true, 'Please enter a tag'],
    }
    
});

// const Prompt = model.Prompt || model('Prompt',PromptSchema);
// export default Prompt;

let Prompt;

if (mongoose.models.Prompt) {
  Prompt = mongoose.model('Prompt');
} else {
  Prompt = mongoose.model('Prompt', PromptSchema);
}

export default Prompt;