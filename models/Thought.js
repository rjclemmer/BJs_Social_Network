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
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: dateFormat,
      },
      username: {
        type: String,
        required: true
      },
 
    reactions: [ReactionSchema]
});

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
}
);

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;