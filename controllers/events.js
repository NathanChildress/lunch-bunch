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
    // console.log(`_id: ${req.params.id} guest _id: ${req.params.guestId}`)
    // console.log(`Update Event: ${JSON.stringify(req.body)}`)
    try {
        
        await req.body.guests.forEach(guest => {
            console.log(`trying to save: ${JSON.parse(guest)}`)
            Event.updateOne({"_id": req.params.id, "guests._id": guest._id}, 
                {$set: {"guest.$.restaurant": guest.restaurant, "guest.$.menuItem": guest.menuItem}})
        });
        // let event = await Event.findById(req.params.id)
        // console.log("trying to save")
        // event.guests.set(req.params.id, req.body.guests)
        // console.log(event.guests)
        // event.save((err, orders) => {
        //     console.log("trying to save")
        //     if (err) {
        //         console.log("there was an error")
        //         console.log(err)
        //         res.json({err})
        //     } else {
        //         console.log("there was not an error")
        //         res.json(orders)
        //     }
        // });
        console.log("trying to save")
    res.json()
    } catch(err) {
        console.log("there was an error")
        console.log(err)
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

