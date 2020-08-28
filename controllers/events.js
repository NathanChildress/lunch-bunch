const Event = require('../models/event');

module.exports = {
    create,
    show,
    index,
    userGetEvents,
    update,
    delete: eventDelete
}

async function create (req, res) {
    console.log("Create Event")
    console.log(`Update Event: ${JSON.stringify(req.body)}`)
    try {
        const doc1 = await Event.create(req.body);
        res.json(doc1)
    } catch(err) {
        res.json({err});
    }
    //res.json("success");
}

async function show(req, res) {
    console.log("Show Event")
    try {
        const event = await Event.findById(req.params.id)
            .populate('owner')
            .populate('attendees')
            .populate('deliveries');
        res.json(event)
    } catch(err) {
        res.json({err});
    }
}

async function index(req, res) {
    console.log("Index of Events")
    try {
        const events = await Event.find({});
            // .populate('owner')
            // .populate('attendees')
            // .populate('deliveries');
        res.json(events)
    } catch(err) {
        res.json({err});
    }
}

async function userGetEvents(req, res) {
    console.log("User Index of Events")
    try {
        const events = await Event.find({"owner":req.params.id});
            // .populate('owner')
            // .populate('attendees')
            // .populate('deliveries');
        res.json(events)
    } catch(err) {
        res.json({err});
    }
}

async function update(req, res) {
    console.log(`Update Event: ${JSON.stringify(req.body)}`)
    try {
        const event = await Event.updateMany({"_id" : req.params.id, "_id" : req.params.guestId}, {$inc :req.body})
        res.json(event)
    } catch(err) {
        res.json({err})
    }
}

async function eventDelete(req, res) {
    console.log(`Delete Event: ${req.params.id}`)
    try {
        Event.findByIdAndDelete(req.params.id, function(err, result){
            console.log(err)
            res.json(result)
        })

    } catch(err) {
        res.json(err)
    } console.log("success")

}

