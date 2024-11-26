import mongoose from "mongoose"


const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    quantity: {
        type: Number,
        required: true,
        default: 0,
    },
    unit: {
        type: Number,
        required: true,
        default: 0,

    },
    fat: {
        type: Number,
        required: true, default: 0,
    },
    protein: {
        type: Number,
        required: true, default: 0,
    },
    carb: {
        type: Number,
        required: true, default: 0,
    },
    fibre: {
        type: Number,
        required: true, default: 0,
    },
    b1: {
        type: Number,
        required: true, default: 0,
    },
    b2: {
        type: Number,
        required: true, default: 0,
    },
    b3: {
        type: Number,
        required: true, default: 0,
    },
    b5: {
        type: Number,
        required: true, default: 0,
    },
    b6: {
        type: Number,
        required: true, default: 0,
    },
    b12: {
        type: Number,
        required: true, default: 0,
    },
    b7: {
        type: Number,
        required: true, default: 0,
    },
    b8: {
        type: Number,
        required: true, default: 0,
    },
    b9: {
        type: Number,
        required: true, default: 0,
    },

    a: {
        type: Number,
        required: true, default: 0,
    },

    c: {
        type: Number,
        required: true, default: 0,
    },
    d: {
        type: Number,
        required: true, default: 0,
    },
    e: {
        type: Number,
        required: true, default: 0,
    },
    k: {
        type: Number,
        required: true, default: 0,
    },
    calcium: {
        type: Number,
        required: true, default: 0,
    },
    copper: {
        type: Number,
        required: true, default: 0,
    },
    iron: {
        type: Number,
        required: true, default: 0,
    },
    magnesium: {
        type: Number,
        required: true, default: 0,
    },
    manganese: {
        type: Number,
        required: true, default: 0,
    },
    phosphorus: {
        type: Number,
        required: true, default: 0,
    },
    potassium: {
        type: Number,
        required: true, default: 0,
    },
    selenium: {
        type: Number,
        required: true, default: 0,
    },
    sodium: {
        type: Number,
        required: true, default: 0,
    },
    zinc: {
        type: Number,
        required: true, default: 0,
    },



})

const Food = mongoose.model('Food', foodSchema)

export default Food