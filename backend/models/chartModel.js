import mongoose from 'mongoose'


const chartSchema = new mongoose.Schema({
    userId: {

        type: Schema.Types.ObjectID,
        required: true

    },
    dateCreated: {
        type: Date,
        default: Date.now()
    },

    items: [{
        item: Schema.Types.ObjectID,
        quantity: Number
    }],
    review: {
        type: Boolean,
        default: false
    },
    isDone: {
        type: Boolean,
        default: false
    },
    isSent: {
        type: Boolean,
        default: false
    }




})


export default Chart = mongoose.model('Chart', chartModel)