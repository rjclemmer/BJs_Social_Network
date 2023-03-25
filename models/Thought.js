const { Schema, model, Types } = require('mongoose');
const dateFormat = (date) => {
    return date.toString();
};

const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
},
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: dateFormat,
    }
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

const ThoughtSchema = new Schema({
 
    reactions: [ReactionSchema]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
}
);

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;