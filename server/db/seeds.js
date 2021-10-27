use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
        guest_name: "Drew",
        guest_email: "drew@gmail.com",
        checked_in_status: false
    },
    {   
        guest_name: "Jenny",
        guest_email: "jenny@gmail.com",
        checked_in_status: false
    },
    {   
        guest_name: "Marion",
        guest_email: "marion@gmail.com",
        checked_in_status: true
    },
]);

