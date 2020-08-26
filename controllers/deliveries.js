const Delivery = require('../models/delivery');

module.exports = {
    create,
    show,
    index,
    update,
    delete: DeliveryDelete
}

async function create (req, res) {
    console.log("Create Delivery")
    try {
        await Delivery.create(req.body);
    } catch(err) {
        res.json({err});
    }
}

async function show(req, res) {
    console.log("Show Delivery")
    try {
        const Delivery = await Delivery.findById(req.params.id)
            .populate('owner')
            .populate('attendees')
            .populate('deliveries');
        res.json(Delivery)
    } catch(err) {
        res.json({err});
    }
}

async function index(req, res) {
    console.log("Index of Deliveries")
    try {
        const Deliverys = await Delivery.find({})
            .populate('owner')
            .populate('attendees')
            .populate('deliveries');
        res.json(Deliverys)
    } catch(err) {
        res.json({err});
    }
}

async function update(req, res) {
    console.log("Update Delivery")
    try {
        const Delivery = await Delivery.updateOne(req.params.id, req.body)
        res.json(Delivery)
    } catch(err) {
        res.json({err})
    }
}

async function DeliveryDelete(req, res) {
    console.log(`Delete Delivery: ${req.body}`)
    try {
        Delivery.findByIdAndDelete(req.params.id)

    } catch(err) {
        res.json(err)
    }

}

