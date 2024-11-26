import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import { isAdmin, isAuth } from '../misc.js'
import Food from '../models/foodModel.js'


const foodRouter = express.Router()


foodRouter.get('/', expressAsyncHandler(async (req, res) => {
    try {
        const foods = await Food.find({})
        res.send(foods)
    }
    catch (error) {
        res.send(error)
    }


}))

foodRouter.post('/addfood', isAuth, isAdmin, expressAsyncHandler(async (req, res) => {

    const food = new Food({
        name: req.body.name,
        quantity: req.body.quntity,
        unit: req.body.unit,
        fat: req.body.fat,
        protein: req.body.protein,
        carb: req.body.carb,
        fibre: req.body.fibre,
        b1: req.body.b1,
        b2: req.body.b2,
        b3: req.body.b3,
        b5: req.body.b5,
        b6: req.body.b6,
        b12: req.body.b12,
        b7: req.body.b7,
        b8: req.body.b8,
        b9: req.body.b9,
        a: req.body.a,
        c: req.body.c,
        d: req.body.d,
        e: req.body.e,
        k: req.body.k,
        calcium: req.body.calcium,
        copper: req.body.copper,
        iron: req.body.iron,
        magnesium: req.body.magnesium,
        manganese: req.body.manganese,
        phosphorus: req.body.phosphorus,
        potassium: req.body.pottasium,
        selenium: req.body.selenium,
        sodium: req.body.sodium,
        zinc: req.body.zinc,

    });
    const createdFood = await food.save();
    res.send({ message: 'food Created', food: createdFood });


}))



export default foodRouter