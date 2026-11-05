const categories = [
    { 
        id: 1, 
        name: 'Electronics', 
        subCategories: [
            { id: 'smartphones', name: 'Smartphones' },
            { id: 'laptops', name: 'Laptops' },
            { id: 'gadgets', name: 'Gadgets & Cameras' }
        ]
    },
    { 
        id: 2, 
        name: 'Clothing', 
        subCategories: [
            { id: 'men', name: "Men's Clothing" },
            { id: 'women', name: "Women's Clothing" },
            { id: 'apparel', name: 'Novelty Apparel' }
        ]
    },
    { 
        id: 3, 
        name: 'Home & Kitchen', 
        subCategories: [
            { id: 'kitchenware', name: 'Kitchenware' },
            { id: 'appliances', name: 'Appliances & Furniture' }
        ]
    },
    {
        id: 4,
        name: 'Novelties & Accessories',
        subCategories: [
            { id: 'accessories', name: 'Accessories & Toys' }
        ]
    },
    {
        id: 5,
        name: 'Food',
        subCategories: [
            { id: 'beverages', name: 'Beverages' },
            { id: 'snacks', name: 'Snacks' },
            { id: 'food', name: 'Food' }
        ]
    }
];

const suppliersData = [
    { name: 'TechGlobal Inc.', contact: 'Robert Tan', email: 'robert.tan@techglobal.com', phone: '09171234567', address: '123 Tech Park, Manila' },
    { name: 'FashionHub Co.', contact: 'Angela Reyes', email: 'angela.reyes@fashionhub.ph', phone: '09189876543', address: '456 Fashion Ave, Quezon City' },
    { name: 'HomeEssentials Ltd.', contact: 'Mark Villanueva', email: 'mark.v@homeessentials.com', phone: '09175551234', address: '789 Home Street, Makati' }
];

const warehousesData = [
    { name: 'Main Warehouse Manila', location: 'Manila', manager: 'Jose Ramirez', capacity: 5000 },
    { name: 'Cebu Distribution Center', location: 'Cebu City', manager: 'Catherine Ong', capacity: 3000 },
    { name: 'Davao Storage Hub', location: 'Davao City', manager: 'Paolo Mendoza', capacity: 2500 }
];

const shippingAddressesData = [
    { customer: 'Juan Dela Cruz', line1: '123 Rizal Street', city: 'Manila', state: 'NCR', postal: '1000' },
    { customer: 'Maria Santos', line1: '456 EDSA', city: 'Quezon City', state: 'NCR', postal: '1100' },
    { customer: 'Pedro Reyes', line1: '789 Ayala Avenue', city: 'Makati', state: 'NCR', postal: '1200' },
    { customer: 'Ana Garcia', line1: '321 Colon Street', city: 'Cebu City', state: 'Cebu', postal: '6000' },
    { customer: 'Carlos Lopez', line1: '654 Roxas Boulevard', city: 'Pasay', state: 'NCR', postal: '1300' }
];

let productReviews = [];
let riderReviews = []; // { orderId, riderEmail, riderName, rating, comment, reviewerEmail, reviewerName, date }

function getRiderRating(riderEmail) {
    const list = riderEmail ? riderReviews.filter(r => r.riderEmail === riderEmail) : [];
    const avg = list.length ? list.reduce((sum, r) => sum + Number(r.rating), 0) / list.length : null;
    return { count: list.length, average: avg === null ? null : Number(avg.toFixed(1)) };
}
let products = [
    { id: 1, categoryId: 1, subTag: "smartphones", name: "iPhone 15 Pro", description: "Apple flagship smartphone 256GB", price: 9990.00, image: "images/iphone15pro.png", stock: 15, sold: 34, dateAdded: "2026-09-01", sellerName: "Official Store", rating: 0, reviewsCount: 0 },
    { id: 2, categoryId: 1, subTag: "smartphones", name: "Samsung Galaxy S24", description: "Android flagship smartphone", price: 9490.00, image: "images/galaxys24.png", stock: 8, sold: 21, dateAdded: "2026-09-05", sellerName: "Official Store", rating: 0, reviewsCount: 0 },
    { id: 3, categoryId: 1, subTag: "smartphones", name: "Broken Phone", description: "Cracked display dummy phone", price: 499.00, image: "images/brokenphone.png", stock: 5, sold: 3, dateAdded: "2026-10-04", sellerName: "TechGlobal Inc.", rating: 0, reviewsCount: 0 },
    { id: 4, categoryId: 1, subTag: "laptops", name: "MacBook Air M3", description: "13-inch laptop with M3 chip", price: 12990.00, image: "images/macbook.png", stock: 10, sold: 18, dateAdded: "2026-10-01", sellerName: "Official Store", rating: 0, reviewsCount: 0 },
    { id: 5, categoryId: 1, subTag: "laptops", name: "Dell Pro Max Laptop", description: "High performance work laptop", price: 11490.00, image: "images/dellpromaxlaptop.png", stock: 6, sold: 12, dateAdded: "2026-10-02", sellerName: "TechGlobal Inc.", rating: 0, reviewsCount: 0 },
    { id: 6, categoryId: 1, subTag: "laptops", name: "Lenovo ThinkPad", description: "Business productivity laptop", price: 10990.00, image: "images/lenovo.png", stock: 9, sold: 14, dateAdded: "2026-09-28", sellerName: "TechGlobal Inc.", rating: 0, reviewsCount: 0 },
    { id: 7, categoryId: 1, subTag: "gadgets", name: "Astron Smart TV", description: "High definition inch smart TV", price: 9990.00, image: "images/astronInchsmarttv.png", stock: 7, sold: 14, dateAdded: "2026-10-03", sellerName: "TechGlobal Inc.", rating: 0, reviewsCount: 0 },
    { id: 8, categoryId: 1, subTag: "gadgets", name: "Digital Camera 4K", description: "Ultra HD compact vlog camera", price: 4599.00, image: "images/digitalcamera4k.png", stock: 12, sold: 25, dateAdded: "2026-09-15", sellerName: "TechGlobal Inc.", rating: 0, reviewsCount: 0 },
    { id: 9, categoryId: 1, subTag: "gadgets", name: "Epson Printer", description: "EcoTank wireless inkjet printer", price: 8290.00, image: "images/epsonprinter.png", stock: 11, sold: 17, dateAdded: "2026-09-20", sellerName: "TechGlobal Inc.", rating: 0, reviewsCount: 0 },
    { id: 10, categoryId: 1, subTag: "gadgets", name: "Finger Worn Mouse", description: "Wearable wireless optical mouse", price: 499.00, image: "images/fingerwornmouse.png", stock: 20, sold: 9, dateAdded: "2026-10-06", sellerName: "TechGlobal Inc.", rating: 0, reviewsCount: 0 },
    { id: 11, categoryId: 1, subTag: "gadgets", name: "Mikuso Gaming Headphones", description: "Black/Red stereo headset HP118BK", price: 699.00, image: "images/mikusoheadphoneblackhp118bk.png", stock: 15, sold: 40, dateAdded: "2026-09-12", sellerName: "TechGlobal Inc.", rating: 0, reviewsCount: 0 },
    { id: 12, categoryId: 1, subTag: "gadgets", name: "Mini Desktop Vacuum", description: "Cute desk cleaner vacuum", price: 299.00, image: "images/minidesktopvacuum.png", stock: 35, sold: 62, dateAdded: "2026-09-10", sellerName: "TechGlobal Inc.", rating: 0, reviewsCount: 0 },
    { id: 13, categoryId: 1, subTag: "gadgets", name: "Mini Bluetooth Speaker", description: "Waterproof portable speaker", price: 599.00, image: "images/miniportablebluetoothspeaker.png", stock: 18, sold: 31, dateAdded: "2026-09-14", sellerName: "TechGlobal Inc.", rating: 0, reviewsCount: 0 },
    { id: 14, categoryId: 1, subTag: "gadgets", name: "Mini Thermal Printer", description: "Inkless pocket photo printer", price: 999.00, image: "images/minithermalprinter.png", stock: 14, sold: 28, dateAdded: "2026-09-22", sellerName: "TechGlobal Inc.", rating: 0, reviewsCount: 0 },
    { id: 15, categoryId: 1, subTag: "gadgets", name: "Mini Wearable Neck Fan", description: "Rechargeable blueless neck fan", price: 399.00, image: "images/miniwearablefannecklace.png", stock: 22, sold: 55, dateAdded: "2026-08-25", sellerName: "TechGlobal Inc.", rating: 0, reviewsCount: 0 },
    { id: 16, categoryId: 1, subTag: "gadgets", name: "USB Hand Warmer", description: "Rechargeable electric hand warmer", price: 499.00, image: "images/usbpoweredhandwarmer.png", stock: 25, sold: 19, dateAdded: "2026-10-01", sellerName: "TechGlobal Inc.", rating: 0, reviewsCount: 0 },
    { id: 17, categoryId: 1, subTag: "gadgets", name: "Used Breadboard", description: "Electronics circuit prototyping board", price: 99.00, image: "images/usedbreadboard.png", stock: 40, sold: 70, dateAdded: "2026-08-01", sellerName: "TechGlobal Inc.", rating: 0, reviewsCount: 0 },
    { id: 18, categoryId: 1, subTag: "gadgets", name: "Wireless Earbuds Pro", description: "Noise cancelling true wireless", price: 999.00, image: "images/wirelessearbudspro.png", stock: 20, sold: 29, dateAdded: "2026-09-20", sellerName: "TechGlobal Inc.", rating: 0, reviewsCount: 0 },

    { id: 19, categoryId: 2, subTag: "men", name: "Men's Casual Shirt", description: "Cotton long-sleeve shirt", price: 149.00, image: "images/mencasualshirt.png", stock: 45, sold: 52, dateAdded: "2026-08-15", sellerName: "FashionHub Co.", rating: 0, reviewsCount: 0 },
    { id: 20, categoryId: 2, subTag: "women", name: "Women's Summer Dress", description: "Floral print summer dress", price: 249.00, image: "images/womensummerdress.png", stock: 30, sold: 40, dateAdded: "2026-08-20", sellerName: "FashionHub Co.", rating: 0, reviewsCount: 0 },
    { id: 21, categoryId: 2, subTag: "apparel", name: "Bread Slippers", description: "Croissant comfort home slippers", price: 129.00, image: "images/breadslippers.png", stock: 18, sold: 33, dateAdded: "2026-09-18", sellerName: "FashionHub Co.", rating: 0, reviewsCount: 0 },
    { id: 22, categoryId: 2, subTag: "apparel", name: "Chicken Shaped Purse", description: "Funny chicken fashion handbag", price: 199.00, image: "images/chickenshapedpurse.png", stock: 10, sold: 15, dateAdded: "2026-09-25", sellerName: "FashionHub Co.", rating: 0, reviewsCount: 0 },
    { id: 23, categoryId: 2, subTag: "apparel", name: "Human Face Socks", description: "Custom photo print stretch socks", price: 99.00, image: "images/humanfacesocks.png", stock: 50, sold: 82, dateAdded: "2026-09-02", sellerName: "FashionHub Co.", rating: 0, reviewsCount: 0 },
    { id: 24, categoryId: 2, subTag: "apparel", name: "LED Light Up Shoelaces", description: "Glow in the dark laces", price: 89.00, image: "images/ledlightupshoelaces.png", stock: 60, sold: 110, dateAdded: "2026-08-18", sellerName: "FashionHub Co.", rating: 0, reviewsCount: 0 },

    { id: 25, categoryId: 3, subTag: "appliances", name: "Air Fryer 5L", description: "Digital air fryer with presets", price: 2499.00, image: "images/airfryer5l.png", stock: 2, sold: 65, dateAdded: "2026-10-08", sellerName: "HomeEssentials Ltd.", rating: 0, reviewsCount: 0 },
    { id: 26, categoryId: 3, subTag: "appliances", name: "Digital Microwave", description: "Touchpad control electric microwave", price: 2999.00, image: "images/digitaltouchpadcontrolelectricmicrowave.png", stock: 12, sold: 19, dateAdded: "2026-10-02", sellerName: "HomeEssentials Ltd.", rating: 0, reviewsCount: 0 },
    { id: 27, categoryId: 3, subTag: "appliances", name: "Drum Type Rice Cooker", description: "Automatic electric rice cooker", price: 1199.00, image: "images/drumtypeelectricricecooker.png", stock: 15, sold: 48, dateAdded: "2026-09-05", sellerName: "HomeEssentials Ltd.", rating: 0, reviewsCount: 0 },
    { id: 28, categoryId: 3, subTag: "appliances", name: "Edfone Desk Fan", description: "12-inch 2-code desk cooling fan", price: 699.00, image: "images/edfonetwoecodeskfan.png", stock: 20, sold: 36, dateAdded: "2026-08-28", sellerName: "HomeEssentials Ltd.", rating: 0, reviewsCount: 0 },
    { id: 29, categoryId: 3, subTag: "appliances", name: "Pink Electric Kettle", description: "Fast boiling stainless steel kettle", price: 599.00, image: "images/electrickettlepink.png", stock: 14, sold: 29, dateAdded: "2026-09-12", sellerName: "HomeEssentials Ltd.", rating: 0, reviewsCount: 0 },
    { id: 30, categoryId: 3, subTag: "appliances", name: "Single Burner Electric Stove", description: "Countertop hot plate stove", price: 799.00, image: "images/singleburnerelectricstove.png", stock: 11, sold: 22, dateAdded: "2026-09-19", sellerName: "HomeEssentials Ltd.", rating: 0, reviewsCount: 0 },
    { id: 31, categoryId: 3, subTag: "appliances", name: "Smoke Detector", description: "Fire safety ceiling smoke sensor", price: 399.00, image: "images/smokedetector.png", stock: 30, sold: 45, dateAdded: "2026-08-14", sellerName: "HomeEssentials Ltd.", rating: 0, reviewsCount: 0 },
    { id: 32, categoryId: 3, subTag: "kitchenware", name: "Automatic Stirring Mug", description: "Self stirring coffee mug", price: 499.00, image: "images/automaticstirringmug.png", stock: 25, sold: 41, dateAdded: "2026-09-15", sellerName: "HomeEssentials Ltd.", rating: 0, reviewsCount: 0 },
    { id: 33, categoryId: 3, subTag: "kitchenware", name: "Dinosaur Toilet Brush", description: "Funny novelty bathroom brush set", price: 199.00, image: "images/dinosaurshapedtoiletbrush.png", stock: 18, sold: 27, dateAdded: "2026-09-08", sellerName: "HomeEssentials Ltd.", rating: 0, reviewsCount: 0 },
    { id: 34, categoryId: 3, subTag: "kitchenware", name: "Kitchen Faucets", description: "Stainless steel pull-out sink faucet", price: 1499.00, image: "images/faucets.png", stock: 8, sold: 13, dateAdded: "2026-09-01", sellerName: "HomeEssentials Ltd.", rating: 0, reviewsCount: 0 },
    { id: 35, categoryId: 3, subTag: "kitchenware", name: "Weird Face Mug", description: "Handmade ceramic face mug", price: 299.00, image: "images/weirdfacemug.png", stock: 12, sold: 38, dateAdded: "2026-08-22", sellerName: "HomeEssentials Ltd.", rating: 0, reviewsCount: 0 },
    { id: 36, categoryId: 3, subTag: "appliances", name: "Bathtub", description: "Classic white home bathtub fixture", price: 8999.00, image: "images/bathtub.png", stock: 4, sold: 9, dateAdded: "2026-08-30", sellerName: "HomeEssentials Ltd.", rating: 0, reviewsCount: 0 },
    { id: 37, categoryId: 3, subTag: "appliances", name: "Comfort Couch", description: "Modern living room sofa set", price: 2999.00, image: "images/couch.png", stock: 3, sold: 7, dateAdded: "2026-08-05", sellerName: "HomeEssentials Ltd.", rating: 0, reviewsCount: 0 },
    { id: 38, categoryId: 3, subTag: "appliances", name: "Window Curtains", description: "Blackout window curtain drape", price: 399.00, image: "images/curtain.png", stock: 25, sold: 50, dateAdded: "2026-08-11", sellerName: "HomeEssentials Ltd.", rating: 0, reviewsCount: 0 },
    { id: 39, categoryId: 3, subTag: "appliances", name: "Office Desk", description: "Wooden home study computer desk", price: 1299.00, image: "images/desk.png", stock: 6, sold: 15, dateAdded: "2026-08-17", sellerName: "HomeEssentials Ltd.", rating: 0, reviewsCount: 0 },
    { id: 40, categoryId: 3, subTag: "appliances", name: "Home Lamp", description: "Warm LED bedside table lamp", price: 599.00, image: "images/lamp.png", stock: 16, sold: 29, dateAdded: "2026-09-03", sellerName: "HomeEssentials Ltd.", rating: 0, reviewsCount: 0 },
    { id: 41, categoryId: 3, subTag: "appliances", name: "Full Body Mirror", description: "Standing floor length mirror", price: 949.00, image: "images/mirror.png", stock: 8, sold: 18, dateAdded: "2026-08-29", sellerName: "HomeEssentials Ltd.", rating: 0, reviewsCount: 0 },
    { id: 42, categoryId: 3, subTag: "appliances", name: "Bedroom Nightstand", description: "Storage drawer bedside table", price: 1199.00, image: "images/nightstand.png", stock: 10, sold: 14, dateAdded: "2026-09-07", sellerName: "HomeEssentials Ltd.", rating: 0, reviewsCount: 0 },
    { id: 43, categoryId: 3, subTag: "appliances", name: "Storage Shelves", description: "Multi-layer bookcase standing shelf", price: 1999.00, image: "images/shelves.png", stock: 7, sold: 11, dateAdded: "2026-08-26", sellerName: "HomeEssentials Ltd.", rating: 0, reviewsCount: 0 },
    { id: 44, categoryId: 3, subTag: "appliances", name: "Shower System", description: "Gold finish rain shower set", price: 3499.00, image: "images/shower.png", stock: 5, sold: 8, dateAdded: "2026-09-16", sellerName: "HomeEssentials Ltd.", rating: 0, reviewsCount: 0 },
    { id: 45, categoryId: 3, subTag: "appliances", name: "Dining Table", description: "Modern steel frame dining table", price: 3499.00, image: "images/tables.png", stock: 4, sold: 6, dateAdded: "2026-08-19", sellerName: "HomeEssentials Ltd.", rating: 0, reviewsCount: 0 },
    { id: 46, categoryId: 3, subTag: "appliances", name: "Modern Toilet", description: "Ceramic flush toilet fixture", price: 3499.00, image: "images/toilet.png", stock: 5, sold: 10, dateAdded: "2026-08-12", sellerName: "HomeEssentials Ltd.", rating: 0, reviewsCount: 0 },

    { id: 47, categoryId: 4, subTag: "accessories", name: "Sunglass Accessories", description: "UV protection dark sunglasses", price: 299.00, image: "images/accessories.png", stock: 30, sold: 60, dateAdded: "2026-08-01", sellerName: "FashionHub Co.", rating: 0, reviewsCount: 0 },
    { id: 48, categoryId: 4, subTag: "accessories", name: "Banana Phone Handset", description: "Novelty banana handset accessory", price: 249.00, image: "images/bananaphonehandset.png", stock: 30, sold: 12, dateAdded: "2026-09-22", sellerName: "FashionHub Co.", rating: 0, reviewsCount: 0 },
    { id: 49, categoryId: 4, subTag: "accessories", name: "Block of Soil", description: "Decor grass block fixture", price: 149.00, image: "images/blockofsoil.png", stock: 50, sold: 88, dateAdded: "2026-08-10", sellerName: "HomeEssentials Ltd.", rating: 0, reviewsCount: 0 },
    { id: 50, categoryId: 4, subTag: "accessories", name: "Drunk Goggles", description: "Simulation goggles novelty toy", price: 399.00, image: "images/drunkgoggles.png", stock: 15, sold: 20, dateAdded: "2026-09-17", sellerName: "FashionHub Co.", rating: 0, reviewsCount: 0 },
    { id: 51, categoryId: 4, subTag: "accessories", name: "Fake Knife Prop", description: "Retractable plastic theater prop knife", price: 99.00, image: "images/fakeknife.png", stock: 40, sold: 55, dateAdded: "2026-08-31", sellerName: "FashionHub Co.", rating: 0, reviewsCount: 0 },
    { id: 52, categoryId: 4, subTag: "accessories", name: "Fake Mustache Glasses", description: "Disguise glasses costume prop", price: 79.00, image: "images/fakemustacheglasses.png", stock: 50, sold: 90, dateAdded: "2026-08-15", sellerName: "FashionHub Co.", rating: 0, reviewsCount: 0 },
    { id: 53, categoryId: 4, subTag: "accessories", name: "Fake Poop Prank Toy", description: "Novelty joke gag gift", price: 49.00, image: "images/fakepooptoy.png", stock: 100, sold: 210, dateAdded: "2026-07-20", sellerName: "FashionHub Co.", rating: 0, reviewsCount: 0 },
    { id: 54, categoryId: 4, subTag: "accessories", name: "Giant Inflatable Middle Finger", description: "Inflatable pool prank cushion", price: 299.00, image: "images/giantinflatablemiddle.png", stock: 20, sold: 34, dateAdded: "2026-08-25", sellerName: "FashionHub Co.", rating: 0, reviewsCount: 0 },
    { id: 55, categoryId: 4, subTag: "accessories", name: "Half Calendar Part 1", description: "Unique half-split wall calendar", price: 99.00, image: "images/halfacalendar.png", stock: 25, sold: 15, dateAdded: "2026-09-01", sellerName: "FashionHub Co.", rating: 0, reviewsCount: 0 },
    { id: 56, categoryId: 4, subTag: "accessories", name: "Half Calendar Part 2", description: "Matching second half wall calendar", price: 99.00, image: "images/halfacalendarparttwo.png", stock: 25, sold: 15, dateAdded: "2026-09-01", sellerName: "FashionHub Co.", rating: 0, reviewsCount: 0 },
    { id: 57, categoryId: 4, subTag: "accessories", name: "Half Clock", description: "Novelty half-cut wall clock decor", price: 249.00, image: "images/halfaClock.png", stock: 18, sold: 22, dateAdded: "2026-09-05", sellerName: "FashionHub Co.", rating: 0, reviewsCount: 0 },
    { id: 58, categoryId: 4, subTag: "accessories", name: "Metal Flask", description: "Stainless steel pocket hip flask", price: 199.00, image: "images/metalflask.png", stock: 30, sold: 48, dateAdded: "2026-08-24", sellerName: "FashionHub Co.", rating: 0, reviewsCount: 0 },
    { id: 59, categoryId: 5, subTag: "food", name: "Military Grade MRE", description: "Emergency field meal ration pack", price: 1099.00, image: "images/militarygrademre.png", stock: 40, sold: 95, dateAdded: "2026-08-10", sellerName: "FoodPolyster.co", rating: 0, reviewsCount: 0 },
    { id: 60, categoryId: 4, subTag: "accessories", name: "One Button Voice Recorder", description: "Keychain audio voice recorder", price: 399.00, image: "images/onebuttonvoice.png", stock: 15, sold: 21, dateAdded: "2026-09-20", sellerName: "TechGlobal Inc.", rating: 0, reviewsCount: 0 },
    { id: 61, categoryId: 4, subTag: "accessories", name: "Pickle Shaped Pillow", description: "Plush giant pickle cushion pillow", price: 299.00, image: "images/pickleshapedpillow.png", stock: 25, sold: 60, dateAdded: "2026-08-18", sellerName: "FashionHub Co.", rating: 0, reviewsCount: 0 },
    { id: 62, categoryId: 4, subTag: "accessories", name: "Screaming Goat Toy", description: "Desk goat figure that screams", price: 199.00, image: "images/screaminggoattoy.png", stock: 35, sold: 120, dateAdded: "2026-07-30", sellerName: "FashionHub Co.", rating: 0, reviewsCount: 0 },
    { id: 63, categoryId: 4, subTag: "accessories", name: "Stone on Rock Necklace", description: "Natural stone pendant necklace", price: 149.00, image: "images/stoneonarocknecklace.png", stock: 20, sold: 18, dateAdded: "2026-09-11", sellerName: "FashionHub Co.", rating: 0, reviewsCount: 0 },
    { id: 64, categoryId: 4, subTag: "accessories", name: "Tiny Hands Finger Puppets", description: "Mini hands puppet set", price: 99.00, image: "images/tinyhandsfinger.png", stock: 45, sold: 85, dateAdded: "2026-08-08", sellerName: "FashionHub Co.", rating: 0, reviewsCount: 0 },
    
    { id: 66, categoryId: 4, subTag: "accessories", name: "XM7 Airsoft Replica", description: "Safe airsoft sports training replica", price: 899.00, image: "images/xm7airsoft.png", stock: 5, sold: 8, dateAdded: "2026-09-29", sellerName: "TechGlobal Inc.", rating: 0, reviewsCount: 0 },
    { id: 67, categoryId: 4, subTag: "accessories", name: "Anal Beads", description: "Baseline policy testing item mockup", price: 499.00, image: "images/analbeads.png", stock: 10, sold: 5, dateAdded: "2026-10-09", sellerName: "TechGlobal Inc.", rating: 0, reviewsCount: 0 },
    { id: 68, categoryId: 4, subTag: "accessories", name: "Bullet Vibrator", description: "Compact personal massager mockup", price: 449.00, image: "images/bulletvibrator.png", stock: 15, sold: 22, dateAdded: "2026-10-05", sellerName: "TechGlobal Inc.", rating: 0, reviewsCount: 0 },
    { id: 69, categoryId: 4, subTag: "accessories", name: "Couples Vibrator", description: "Personal wellness accessory mockup", price: 699.00, image: "images/couplesvibrator.png", stock: 8, sold: 12, dateAdded: "2026-10-01", sellerName: "TechGlobal Inc.", rating: 0, reviewsCount: 0 },
    { id: 70, categoryId: 4, subTag: "accessories", name: "Silicone Dildo", description: "Personal novelty accessory mockup", price: 599.00, image: "images/dildo.png", stock: 12, sold: 18, dateAdded: "2026-09-28", sellerName: "TechGlobal Inc.", rating: 0, reviewsCount: 0 },
    { id: 71, categoryId: 4, subTag: "accessories", name: "Masturbation Sleeve", description: "Personal hygiene sleeve mockup", price: 499.00, image: "images/masturbationsleeve.png", stock: 14, sold: 20, dateAdded: "2026-09-25", sellerName: "TechGlobal Inc.", rating: 0, reviewsCount: 0 },
    { id: 72, categoryId: 4, subTag: "accessories", name: "Penis Ring", description: "Personal wellness accessory mockup", price: 299.00, image: "images/penisring.png", stock: 25, sold: 30, dateAdded: "2026-09-18", sellerName: "TechGlobal Inc.", rating: 0, reviewsCount: 0 },
    { id: 73, categoryId: 4, subTag: "accessories", name: "Rabbit Vibrator", description: "Personal wellness massager mockup", price: 699.00, image: "images/rabbitvibrator.png", stock: 7, sold: 15, dateAdded: "2026-10-02", sellerName: "TechGlobal Inc.", rating: 0, reviewsCount: 0 },
    { id: 74, categoryId: 4, subTag: "accessories", name: "Remote Controlled Vibrator", description: "Wireless personal massager mockup", price: 749.00, image: "images/remotecontrolledvibrator.png", stock: 6, sold: 10, dateAdded: "2026-10-04", sellerName: "TechGlobal Inc.", rating: 0, reviewsCount: 0 },
    { id: 75, categoryId: 4, subTag: "accessories", name: "Sex Doll Figure", description: "Anime full size mannequin mockup", price: 11990.00, image: "images/sexdoll.png", stock: 2, sold: 3, dateAdded: "2026-09-30", sellerName: "TechGlobal Inc.", rating: 0, reviewsCount: 0 },
    { id: 76, categoryId: 4, subTag: "accessories", name: "Wand Massager", description: "Electric wand body massager mockup", price: 699.00, image: "images/wandmassager.png", stock: 11, sold: 26, dateAdded: "2026-09-15", sellerName: "TechGlobal Inc.", rating: 0, reviewsCount: 0 }
];

const ADULT_AGE = 18;
const MIN_SIGNUP_AGE = 13; 
const ADULT_PRODUCT_IDS = [66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76]; 
products.forEach(p => { if (ADULT_PRODUCT_IDS.includes(p.id)) p.adult = true; });

function calculateAge(dateString) {
    const born = new Date(`${dateString}T00:00:00`);
    if (!dateString || isNaN(born.getTime())) return NaN;
    const today = new Date();
    let age = today.getFullYear() - born.getFullYear();
    const monthDiff = today.getMonth() - born.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < born.getDate())) age--;
    return age;
}
/* ===== 18+ access rules =====
   - Under 18 (by the date of birth on the account): 18+ items are completely hidden.
   - 18+ by date of birth: items unlock once a store admin has approved their ID.
   - Guests count as unverified, so 18+ items are hidden from them too.
   - Admins always see them (they need to moderate).
   Set ADULT_REQUIRE_ID_TO_VIEW to false if a date of birth of 18+ should be enough to
   SEE the items (an approved ID is then only needed to BUY them). */
const ADULT_REQUIRE_ID_TO_VIEW = true;

function isManagerAccount(user) {
    return !!(user && managerEmails.includes(user.email));
}
function isDobAdult(user) {
    return !!(user && user.birthDate && calculateAge(user.birthDate) >= ADULT_AGE);
}
function isIdVerified(user) {
    return !!(user && user.idVerification && user.idVerification.status === 'verified');
}
// Can BUY 18+ items
function isAdultUser(user) {
    return isManagerAccount(user) || (isDobAdult(user) && isIdVerified(user));
}
// Can SEE 18+ items
function canViewAdultItems(user) {
    if (ADULT_REQUIRE_ID_TO_VIEW) return isAdultUser(user);
    return isManagerAccount(user) || isDobAdult(user);
}
function canSeeProduct(product, user = currentUser) {
    if (!product || !product.adult) return true;
    if (canViewAdultItems(user)) return true;
    return activeSidebarTab === 'myshop' && !!user && sellerOwnsProduct(product, user);
}

let customerOrders = [
    { id: "ORD-9912", items: "1x iPhone 15 Pro", total: 65990.00, status: "to_rate", date: "2026-10-02" }
];

let cart = [];
let registeredUsers = [
    { firstName: "Manager", lastName: "John", displayName: "John", location: "Manila", dateCreated: "2026-01-01", email: "bruhboyxean30@gmail.com", password: "123456", isSeller: true, shopName: "BestDeBest Main Store" }
];
let managerEmails = ["bruhboyxean30@gmail.com"];
const ADMIN_SELLER_EMAIL = "bruhboyxean30@gmail.com"; // admin is the seller of all built-in items
let onlineManagers = [];
let managerStockAlerts = [];
let managerNotifsRead = false;
let sellerNotifications = [];
let raisedConcerns = [];
let bannedProducts = [];
let currentUser = null;
let activeModalProduct = null;
let activeEditingProduct = null;
let productPendingBanId = null;
let pendingReportProductName = null;
let currentActiveCategory = null;
let currentFilteredProducts = [...products];
let currentPurchasesTab = "all";
let activeSidebarTab = "shop";
let salesHistory = [];
let totalStoreRevenue = 102500.00;
const DELIVERY_FEE = 50; // flat delivery fee per order (PHP). A "Free Delivery" voucher waives it.
let isAdminStoreView = false;

function initializeBestDeBest() {
    displayCategories();
    resetStore();
    updateToRateBadge();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeBestDeBest, { once: true });
} else {
    initializeBestDeBest();
}

document.addEventListener('error', e => {
    const img = e.target;
    if (!img || img.tagName !== 'IMG' || !img.classList.contains('product-img') || img.dataset.failed) return;
    img.dataset.failed = '1';
    const box = img.parentElement;
    if (box) box.innerHTML = '<span class="img-missing">No image</span>';
}, true);

function displayCategories() {
    const nav = document.getElementById('categoryNav');
    if (!nav) return;
    nav.innerHTML = '<a onclick="resetStore()" class="active" id="cat-all" tabindex="0" role="button">All Products</a>';

    categories.forEach(cat => {
        const a = document.createElement('a');
        a.textContent = cat.name;
        a.id = `cat-${cat.id}`;
        a.tabIndex = 0;
        a.setAttribute('role', 'button');
        a.onclick = () => filterByCategory(cat.id, cat.name);
        nav.appendChild(a);
    });
}

function displayProducts(items, title = "Products Inventory") {
    const grid = document.getElementById('productGrid');
    const sectionTitle = document.getElementById('sectionTitle');
    if (!grid || !sectionTitle) return;
    sectionTitle.textContent = title;
    grid.innerHTML = "";

    if (items.length === 0) {
        grid.innerHTML = "<p class='text-muted'>No products found in this section.</p>";
        return;
    }

    items.forEach(product => {
        const card = document.createElement('div');
        const isOutOfStock = product.stock <= 0;
        card.className = `product-card ${isOutOfStock ? 'out-of-stock' : ''}`;
        card.tabIndex = 0;
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `${product.name}, ${isOutOfStock ? 'out of stock' : 'view details'}`);

        card.onclick = (e) => {
            if(e.target.tagName !== 'BUTTON') {
                if (activeSidebarTab === "myshop" && currentUser) {
                    openEditProductModal(product);
                } else {
                    openProductModal(product);
                }
            }
        };

        const imageHTML = product.image 
            ? `<div class="product-img-container"><img src="${escapeHTML(product.image)}" class="product-img${product.adult && !isAdultUser(currentUser) ? ' adult-blur' : ''}" alt="${escapeHTML(product.name)}" loading="lazy"></div>`
            : `<div class="product-img-container text-gray fs-11">[Image Slot Blank]</div>`;

        const adultBadge = product.adult ? '<div class="adult-badge" title="Adults only">18+</div>' : '';
        const outOfStockOverlay = isOutOfStock ? `<div class="out-of-stock-badge">OUT OF STOCK</div>` : '';
        const ratingHTML = Number(product.reviewsCount) > 0
            ? `<div class="fs-12 text-amber mb-8">⭐️ ${product.rating} / 5.0 (${product.reviewsCount} review${Number(product.reviewsCount) === 1 ? '' : 's'})</div>`
            : `<div class="fs-12 text-muted mb-8">No reviews yet</div>`;

        const isMyOwnedProduct = activeSidebarTab === "myshop" && currentUser &&
            (product.sellerEmail === currentUser.email ||
             product.sellerName === currentUser.shopName ||
             product.sellerName === currentUser.displayName);

        const isOwnListing = !!(currentUser && currentUser.isSeller && !isMyOwnedProduct && sellerOwnsProduct(product, currentUser));
        card.innerHTML = `
            ${outOfStockOverlay}${adultBadge}
            <div>
                ${imageHTML}
                <div class="fs-11 text-sky mb-2">Seller: ${escapeHTML(product.sellerName)} | Stock: ${product.stock}</div>
                <div class="product-name">${escapeHTML(product.name)}</div>
                <div class="product-desc">${escapeHTML(product.description)}</div>
                ${ratingHTML}
            </div>
            <div>
                <div class="product-price">₱${product.price.toLocaleString('en-US', {minimumFractionDigits: 2})}</div>
                ${isAdminStoreView && currentUser && managerEmails.includes(currentUser.email)
                    ? (bannedProducts.some(p => p.id === product.id)
                        ? `<button class="cart-btn bg-green-dark mt-8" onclick="event.stopPropagation();unbanProduct(${product.id})">Unban Item</button>`
                        : `<button class="cart-btn bg-red-dark mt-8" onclick="event.stopPropagation();promptBanProduct(${product.id})">🚫 Ban Item</button>`)
                    : (isMyOwnedProduct
                        ? `<button class="cart-btn delete-item-btn mt-8" onclick="deleteSellerProduct(event, ${product.id})">Delete Item</button>`
                        : (isOwnListing
                            ? `<button class="cart-btn" disabled title="You can't buy your own item">Your Own Item</button>`
                            : `<button class="cart-btn" ${isOutOfStock ? 'disabled' : ''} onclick="addToCart(event, ${product.id})">${isOutOfStock ? 'Out of Stock' : 'Add to Cart'}</button>`))}
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterByCategory(categoryId, categoryName) {
    document.querySelectorAll('.sub-nav a').forEach(el => el.classList.remove('active'));
    document.getElementById(`cat-${categoryId}`).classList.add('active');

    currentActiveCategory = categoryId;
    const subFilterContainer = document.getElementById('subFilterContainer');
    const subSelect = document.getElementById('subCategoryFilter');

    const catObj = categories.find(c => c.id === categoryId);
    if (catObj && catObj.subCategories) {
        subFilterContainer.style.display = 'block';
        subSelect.innerHTML = `<option value="all">All ${catObj.name}</option>`;
        catObj.subCategories.forEach(sub => {
            subSelect.innerHTML += `<option value="${sub.id}">${sub.name}</option>`;
        });
    } else {
        subFilterContainer.style.display = 'none';
    }

    currentFilteredProducts = (isAdminStoreView ? [...products, ...bannedProducts] : [...products]).filter(p => p.categoryId === categoryId);
    applySortingAndFilters(`${categoryName} Collection`);
}

function applySubCategoryFilter() {
    const subVal = document.getElementById('subCategoryFilter').value;
    const catObj = categories.find(c => c.id === currentActiveCategory);

    if (subVal === 'all') {
        currentFilteredProducts = (isAdminStoreView ? [...products, ...bannedProducts] : [...products]).filter(p => p.categoryId === currentActiveCategory);
    } else {
        currentFilteredProducts = (isAdminStoreView ? [...products, ...bannedProducts] : [...products]).filter(p => p.categoryId === currentActiveCategory && p.subTag === subVal);
    }

    const subName = catObj && catObj.subCategories.find(s => s.id === subVal) ? catObj.subCategories.find(s => s.id === subVal).name : catObj.name;
    applySortingAndFilters(`${catObj.name} - ${subName}`);
}

function applySortingAndFilters(title = null) {
    const sortVal = document.getElementById('sortFilter').value;
    let resultList = [...currentFilteredProducts];

    if (activeSidebarTab === "myshop" && currentUser) {
        resultList = resultList.filter(p => p.sellerName === currentUser.shopName || p.sellerName === currentUser.displayName);
    }
    // 18+ items are removed from the list entirely unless this viewer is allowed to see them
    resultList = resultList.filter(p => canSeeProduct(p));

    if (sortVal === 'latest') {
        resultList.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    } else if (sortVal === 'price-asc') {
        resultList.sort((a, b) => a.price - b.price);
    } else if (sortVal === 'price-desc') {
        resultList.sort((a, b) => b.price - a.price);
    } else if (sortVal === 'relevant') {
        resultList.sort((a, b) => b.sold - a.sold);
    }

    const sectionTitleText = title || (activeSidebarTab === "myshop" ? `${currentUser.shopName}'s Published Storefront` : document.getElementById('sectionTitle').textContent);
    displayProducts(resultList, sectionTitleText);
    renderAdultNotice();
}

function resetStore() {
    document.querySelectorAll('.sub-nav a').forEach(el => el.classList.remove('active'));
    document.getElementById('cat-all').classList.add('active');
    currentActiveCategory = null;
    document.getElementById('subFilterContainer').style.display = 'none';
    currentFilteredProducts = (isAdminStoreView && currentUser && managerEmails.includes(currentUser.email))
        ? [...products, ...bannedProducts]
        : [...products];
    applySortingAndFilters(isAdminStoreView ? "Main Store Preview (Admin View Only)" : "All Products Inventory");
}

function handleSearchInput() {
    const query = document.getElementById('searchInput').value;
    const clearBtn = document.getElementById('searchClearBtn');
    
    if (query.trim().length > 0) {
        clearBtn.style.display = 'block';
    } else {
        clearBtn.style.display = 'none';
        resetStore();
    }
}

function clearSearch() {
    document.getElementById('searchInput').value = '';
    document.getElementById('searchClearBtn').style.display = 'none';
    resetStore();
}

function handleSearch() {
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    if (!query) {
        resetStore();
        return;
    }
    const searchableProducts = (isAdminStoreView && currentUser && managerEmails.includes(currentUser.email)) ? [...products, ...bannedProducts] : products;
    currentFilteredProducts = searchableProducts.filter(p =>
        p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query)
    );
    document.getElementById('subFilterContainer').style.display = 'none';
    applySortingAndFilters(`Search Results for "${query}"`);
}

function toggleLeftSidebar() {
    const sidebar = document.getElementById('leftSidebar');
    const toggleBtn = document.getElementById('sidebarToggleBtn');
    sidebar.classList.toggle('open');

    if (sidebar.classList.contains('open')) {
        toggleBtn.style.left = sidebar.offsetWidth + 'px';
        toggleBtn.textContent = '>';
    } else {
        toggleBtn.style.left = '0';
        toggleBtn.textContent = '<';
        closePurchasesPanel();
    }
}

window.addEventListener('resize', () => {
    const sidebar = document.getElementById('leftSidebar');
    const toggleBtn = document.getElementById('sidebarToggleBtn');
    if (sidebar && toggleBtn && sidebar.classList.contains('open')) toggleBtn.style.left = sidebar.offsetWidth + 'px';
});

function switchSidebarTab(tab) {
    if (currentUser && managerEmails.includes(currentUser.email) && tab !== 'shop') {
        alert('Admin accounts can only access the main store in view-only mode.');
        return;
    }
    activeSidebarTab = tab;
    const shopTab = document.getElementById('swTabShop');
    const myShopTab = document.getElementById('swTabMyShop');
    const deliveryTab = document.getElementById('swTabDelivery');
    const custHub = document.getElementById('customerHubContent');
    const sellerHub = document.getElementById('sellerDashboardHubContent');
    const deliveryHub = document.getElementById('deliveryDashboardHubContent');

    shopTab.classList.remove('active');
    if (myShopTab) myShopTab.classList.remove('active');
    if (deliveryTab) deliveryTab.classList.remove('active');
    custHub.style.display = 'none';
    sellerHub.style.display = 'none';
    if (deliveryHub) deliveryHub.style.display = 'none';

    if (tab === 'shop') {
        shopTab.classList.add('active');
        custHub.style.display = 'block';
        resetStore();
    } else if (tab === 'myshop') {
        if (myShopTab) myShopTab.classList.add('active');
        sellerHub.style.display = 'flex';
 
        if (currentUser) {
            sellerNotifications.forEach(n => {
                if (n.sellerName === currentUser.shopName || n.sellerName === currentUser.displayName) {
                    n.read = true;
                }
            });
        }
        updateSellerHubMetrics();
        applySortingAndFilters();
    } else if (tab === 'delivery') {
        if (deliveryTab) deliveryTab.classList.add('active');
        if (deliveryHub) deliveryHub.style.display = 'flex';
        updateDeliveryHub();
        resetStore();
    }
}

function sellerOwnsProduct(product, user = currentUser) {
    if (!product || !user) return false;
    if (product.sellerEmail) return product.sellerEmail.toLowerCase() === (user.email || '').toLowerCase();
    return product.sellerName === user.shopName || product.sellerName === user.displayName;
}

function escapeHTML(value) {
    return String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}

function formatPeso(amount) {
    return `₱${Number(amount || 0).toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function getSellerEarnings(user = currentUser) {
    if (!user) return 0;
    return customerOrders.reduce((total, order) => {
        if (order.status === 'declined') return total;
        const sellerBreakdown = Array.isArray(order.sellerBreakdown) ? order.sellerBreakdown : [];
        const mine = sellerBreakdown.filter(entry =>
            (entry.sellerEmail && user.email && entry.sellerEmail.toLowerCase() === user.email.toLowerCase()) ||
            (!entry.sellerEmail && (entry.sellerName === user.shopName || entry.sellerName === user.displayName))
        );
        return total + mine.reduce((sum, entry) => sum + Number(entry.amount || 0), 0);
    }, 0);
}

function getSellerProductEarnings(user = currentUser) {
    const totals = new Map();
    if (!user) return [];
    customerOrders.forEach(order => {
        if (order.status === 'declined') return;
        const orderItems = Array.isArray(order.orderItems) ? order.orderItems : [];
        orderItems.forEach(item => {
            const mine = (item.sellerEmail && user.email && item.sellerEmail.toLowerCase() === user.email.toLowerCase()) ||
                (!item.sellerEmail && (item.sellerName === user.shopName || item.sellerName === user.displayName));
            if (!mine) return;
            const key = String(item.id ?? item.name);
            if (!totals.has(key)) totals.set(key, { name: item.name || 'Product', amount: 0, units: 0 });
            const entry = totals.get(key);
            entry.amount += Number(item.price || 0) * Number(item.quantity || 1);
            entry.units += Number(item.quantity || 1);
        });
    });
    return [...totals.values()].sort((a, b) => b.amount - a.amount);
}

function renderSellerSalesSummary() {
    const graph = document.getElementById('sellerSalesSummary');
    if (!graph || !currentUser) return;
    const days = [];
    const today = new Date();
    for (let i = 6; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(today.getDate() - i);
        const key = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
        days.push({ key, label: d.toLocaleDateString('en-US', { weekday: 'short' }), total: 0 });
    }
    customerOrders.forEach(order => {
        if (order.status === 'declined') return;
        const day = days.find(d => d.key === order.date);
        if (!day) return;
        const breakdown = Array.isArray(order.sellerBreakdown) ? order.sellerBreakdown : [];
        breakdown.forEach(entry => {
            const mine = (entry.sellerEmail && currentUser.email && entry.sellerEmail.toLowerCase() === currentUser.email.toLowerCase()) ||
                (!entry.sellerEmail && (entry.sellerName === currentUser.shopName || entry.sellerName === currentUser.displayName));
            if (mine) day.total += Number(entry.amount || 0);
        });
    });
    const topProduct = getSellerProductEarnings()[0];
    const bestProductHTML = topProduct
        ? `<div class="mt-10 p-10 r-8 bg-navy-deep bd-1d4ed8"><div class="fs-11 text-blue-pale fw-bold">🏆 Top-earning product</div><div class="fs-13 text-snow fw-bold mt-4 ow-anywhere">${escapeHTML(topProduct.name)}</div><div class="fs-12 text-green-light mt-3">${formatPeso(topProduct.amount)} · ${topProduct.units} sold</div></div>`
        : `<div class="mt-10 fs-11 text-muted">Top-earning product will appear after your first recorded sale.</div>`;
    graph.innerHTML = `<div class="fs-12 text-green-light fw-bold mb-6">7-day total: ${formatPeso(days.reduce((sum,d)=>sum+d.total,0))}</div>${bestProductHTML}<div class="fs-10 text-dim mt-6">Based on order dates and order items currently stored in this browser.</div>`;
}

function updateSellerHubMetrics() {
    if (!currentUser) return;
    const myProds = products.filter(p => sellerOwnsProduct(p));
    document.getElementById('sellerPubCount').textContent = myProds.length;
    const earningsEl = document.getElementById('sellerTotalEarnings');
    if (earningsEl) earningsEl.textContent = formatPeso(getSellerEarnings());
    renderSellerSalesSummary();

    const myNotifs = sellerNotifications.filter(n =>
        (n.sellerEmail && currentUser.email && n.sellerEmail.toLowerCase() === currentUser.email.toLowerCase()) ||
        (!n.sellerEmail && (n.sellerName === currentUser.shopName || n.sellerName === currentUser.displayName))
    );

    const notifBox = document.getElementById('sellerHubNotifs');
    if (myNotifs.length === 0) {
        notifBox.innerHTML = `<p class="text-muted">No new alerts.</p>`;
    } else {
        notifBox.innerHTML = "";
        myNotifs.forEach((notif) => {
            if (notif.type === "delivery_request") {
                const order = customerOrders.find(o => o.id === notif.orderId);
                const response = order && order.deliverySellerResponses ? order.deliverySellerResponses[currentUser.email] : null;
                notifBox.innerHTML += `
                    <div class="p-6-0 bb-374151">
                        <div class="text-amber fw-bold">🚚 Delivery request — ${notif.orderId}</div>
                        <div class="text-soft">Rider ${escapeHTML(notif.riderName || 'Delivery rider')} wants to deliver this order. Confirm this rider?</div>
                        ${response === 'accepted' ? '<div class="text-green-light fw-bold">✓ Delivery accepted</div>' : response === 'declined' ? '<div class="text-red-light fw-bold">Delivery declined</div>' : `<button onclick="respondToDeliveryRequest('${notif.orderId}', true)" class="bg-green text-white bd-none p-3-8 r-4 fs-10 cur-pointer mt-4">✓ Accept Rider</button><button onclick="respondToDeliveryRequest('${notif.orderId}', false)" class="bg-red text-white bd-none p-3-8 r-4 fs-10 cur-pointer mt-4 ml-4">✗ Decline</button>`}
                    </div>
                `;
            } else if (notif.type === "order_confirm") {
                notifBox.innerHTML += `
                    <div class="p-6-0 bb-374151">
                        <div class="text-amber fw-bold">📦 ${escapeHTML(notif.productName)}</div>
                        <div class="text-soft">${escapeHTML(notif.reason)}</div>
                        ${Number.isFinite(Number(notif.amount)) ? `<div class="text-green-light fw-bold mt-3">Your sales: ${formatPeso(notif.amount)}</div>` : ''}
                        <button onclick="confirmSellerOrder('${notif.orderId}')" class="bg-green text-white bd-none p-3-8 r-4 fs-10 cur-pointer mt-4">✓ Confirm</button>
                        <button onclick="declineSellerOrder('${notif.orderId}')" class="bg-red text-white bd-none p-3-8 r-4 fs-10 cur-pointer mt-4 ml-4">✗ Decline</button>
                    </div>
                `;
            } else if (notif.type === "return_notice" || notif.type === "admin_notice") {
                notifBox.innerHTML += `
                    <div class="p-6-0 bb-374151">
                        <div class="text-orange fw-bold">${notif.type === 'admin_notice' ? '🛡️' : '↩️'} ${escapeHTML(notif.productName)}</div>
                        <div class="text-soft">${escapeHTML(notif.reason)}</div>
                    </div>
                `;
            } else {
                notifBox.innerHTML += `
                    <div class="p-6-0 bb-374151">
                        <div class="text-red fw-bold">🚫 Removed: ${escapeHTML(notif.productName)}</div>
                        <div class="text-soft">Reason: ${escapeHTML(notif.reason)}</div>
                        <button onclick="openReportMistakeModal(${escapeHTML(JSON.stringify(notif.productName))})" class="bg-blue text-white bd-none p-3-8 r-4 fs-10 cur-pointer mt-4">Raise Concern / Report Mistake</button>
                    </div>
                `;
            }
        });
    }
}

function openReportMistakeModal(productName) {
    pendingReportProductName = productName || 'Unknown product';
    openModal('reportMistakeModal');
}

function submitMistakeReport(event) {
    event.preventDefault();
    const reason = document.getElementById('mistakeReasonInput').value.trim();
    raisedConcerns.unshift({
        productName: pendingReportProductName || 'Unknown product',
        reason: reason,
        seller: currentUser ? (currentUser.shopName || currentUser.displayName || currentUser.email) : 'Unknown',
        time: new Date().toLocaleString(),
        status: 'pending'
    });
    managerNotifsRead = false;
    managerStockAlerts.push(`Concern raised: "${pendingReportProductName}" — review needed`);
    alert("Your appeal and concern have been successfully sent to the admin team for review!");
    document.getElementById('mistakeReasonInput').value = '';
    pendingReportProductName = null;
    closeModal('reportMistakeModal');
}

function updateToRateBadge() {
    const badge = document.getElementById('toRateBadge');
    if (!badge) return;
    if (!currentUser) {
        badge.style.display = 'none';
        badge.textContent = '0';
        return;
    }
    const myName = currentUser.displayName || `${currentUser.firstName} ${currentUser.lastName}`;
    const count = customerOrders.filter(o =>
        o.status === 'to_rate' &&
        !o.rateBadgeRead &&
        (o.buyer === myName || o.buyerEmail === currentUser.email)
    ).length;
    if (count > 0) {
        badge.textContent = String(count);
        badge.style.display = 'flex';
    } else {
        badge.textContent = '0';
        badge.style.display = 'none';
    }
}

function openPurchasesPanel(statusFilter = 'all') {
    if (!currentUser) {
        alert('Please log in to see your orders.');
        openModal('loginModal');
        return;
    }

    if (statusFilter === 'to_rate' && currentUser) {
        const myName = currentUser.displayName || `${currentUser.firstName} ${currentUser.lastName}`;
        customerOrders.forEach(o => {
            if (o.status === 'to_rate' && (o.buyer === myName || o.buyerEmail === currentUser.email)) {
                o.rateBadgeRead = true;
            }
        });
        updateToRateBadge();
    }
    const sidebar = document.getElementById('leftSidebar');
    if (!sidebar.classList.contains('open')) {
        toggleLeftSidebar();
    }
    document.getElementById('purchasesPanel').classList.add('open');
    filterPurchasesTab(statusFilter);
}

function closePurchasesPanel() {
    document.getElementById('purchasesPanel').classList.remove('open');
}

function filterPurchasesTab(status) {
    currentPurchasesTab = status;
    document.querySelectorAll('.purchases-tab-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(`tab-${status}`);
    if (activeBtn) activeBtn.classList.add('active');
    if (status === 'to_rate' && currentUser) {
        const myName = currentUser.displayName || `${currentUser.firstName} ${currentUser.lastName}`;
        customerOrders.forEach(o => {
            if (o.status === 'to_rate' && (o.buyer === myName || o.buyerEmail === currentUser.email)) {
                o.rateBadgeRead = true;
            }
        });
        updateToRateBadge();
    }
    renderPurchasesOrdersList();
}

function renderPurchasesOrdersList() {
    const container = document.getElementById('purchasesOrdersList');
    container.innerHTML = "";

    const myName = currentUser ? (currentUser.displayName || `${currentUser.firstName} ${currentUser.lastName}`) : null;
    const myEmail = currentUser ? currentUser.email : null;
    let list = customerOrders.filter(o => {
        if (!currentUser) return false;
        if (managerEmails.includes(currentUser.email)) return true;
        return o.buyer === myName || o.buyerEmail === myEmail;
    });
    if (currentPurchasesTab !== 'all') {
        list = list.filter(o => o.status === currentPurchasesTab);
    }

    if (list.length === 0) {
        container.innerHTML = `<p class="text-muted fs-13 ta-center mt-30">No orders found in this section.</p>`;
        return;
    }

    list.forEach(order => {
        const card = document.createElement('div');
        card.className = 'order-item-card';
        let paymentHTML = '';
        if (order.status === 'to_pay') {
            paymentHTML = `
                <div class="mt-10 pt-8 bt-374151">
                    <div class="fs-11 text-muted mb-6">Choose payment method:</div>
                    <div class="d-flex gap-6 flex-wrap">
                        <button onclick="selectPaymentMethod('${order.id}', 'GCash')" class="bg-blue text-white bd-none p-5-10 r-4 fs-11 cur-pointer">GCash</button>
                        <button onclick="selectPaymentMethod('${order.id}', 'Cash on Delivery')" class="bg-green text-white bd-none p-5-10 r-4 fs-11 cur-pointer">Cash on Delivery</button>
                        <button onclick="selectPaymentMethod('${order.id}', 'Credit Card')" class="bg-purple text-white bd-none p-5-10 r-4 fs-11 cur-pointer">Credit Card</button>
                    </div>
                </div>
            `;
        } else if (order.paymentMethod) {
            paymentHTML = `<div class="mt-6 fs-11 text-muted">Paid via: <strong class="text-sky">${escapeHTML(order.paymentMethod)}</strong></div>`;
        }
        if (order.status === 'to_confirm') {
            paymentHTML = `<div class="mt-8 p-8 bg-rgba-251-191-36-0-12 bd-fbbf24 r-6 fs-11 text-amber fw-bold">⏳ Waiting for seller to confirm this order</div>`;
        }
        if (order.status === 'declined') {
            paymentHTML = `<div class="mt-8 p-8 bg-rgba-239-68-68-0-12 bd-ef4444 r-6 fs-11 text-red fw-bold">${order.cancelledBy === 'admin' ? '✗ Order cancelled by the store' + (order.cancelReason ? ': ' + escapeHTML(order.cancelReason) : '') + ' — stock restored' : '✗ Order declined by seller — stock restored'}</div>`;
        }

        let actionHTML = '';
        const isBuyer = currentUser && (order.buyer === (currentUser.displayName || `${currentUser.firstName} ${currentUser.lastName}`) || order.buyerEmail === currentUser.email);
        if (order.status === 'to_receive' && isBuyer) {
            const stage = order.deliveryStage || 'accepted';
            if (stage === 'picked_up') {
                actionHTML += `<div class="mt-6 fs-11 text-amber">📦 Rider picked up your order</div>`;
            } else if (stage === 'dropped_off') {
                actionHTML += `<div class="mt-6 fs-11 text-green">📍 Rider marked your order as delivered — please confirm you received it</div>`;
                actionHTML += `<button onclick="markOrderReceived('${order.id}')" class="bg-green text-white bd-none p-5-12 r-4 fs-11 cur-pointer mt-6">✓ Received Item</button>`;
            } else {
                const rs = getRiderRating(order.deliveryByEmail);
                const riderLink = order.deliveryByEmail
                    ? `<a href="#" class="text-sky" onclick="openPublicProfile(${jsArg(order.deliveryByEmail)}); return false;">${escapeHTML(order.deliveryBy || '-')}</a>`
                    : escapeHTML(order.deliveryBy || '-');
                actionHTML += `<div class="mt-6 fs-11 text-muted">🚚 Delivery assigned: ${riderLink}${rs.count ? ` <span class="text-amber">⭐️ ${rs.average.toFixed(1)} (${rs.count})</span>` : ''}</div>`;
            }
        }
        if (isBuyer && order.status === 'to_rate') {
            const reviewItems = Array.isArray(order.orderItems) && order.orderItems.length ? order.orderItems : [];
            if (reviewItems.length) {
                actionHTML += `<div class="mt-10 text-amber fs-12">Order completed — rate your items:</div>`;
                reviewItems.forEach(item => {
                    const alreadyReviewed = productReviews.some(r => r.orderId === order.id && String(r.productId) === String(item.id) && r.reviewerEmail === currentUser.email);
                    actionHTML += alreadyReviewed
                      ? `<div class="fs-11 text-green mt-5">✓ Reviewed: ${escapeHTML(item.name)}</div>`
                      : `<button onclick="openReviewModal('${order.id}', ${Number(item.id)})" class="bg-orange text-ink bd-0 p-6-10 r-5 m-5-5-0-0 cur-pointer">⭐️ Review ${item.name}</button>`;
                });
            } else {
                actionHTML += `<button onclick="openReviewModal('${order.id}', null)" class="bg-orange text-ink bd-0 p-6-10 r-5 mt-6 cur-pointer">⭐️ Rate Order</button>`;
            }
        }
        if (isBuyer && order.status === 'to_rate' && order.deliveryByEmail) {
            const riderDone = riderReviews.some(r => r.orderId === order.id && r.reviewerEmail === currentUser.email);
            actionHTML += riderDone
                ? `<div class="fs-11 text-green mt-5">✓ Rated rider: ${escapeHTML(order.deliveryBy || 'Rider')}</div>`
                : `<button onclick="openRiderReviewModal('${order.id}')" class="bg-orange text-ink bd-0 p-6-10 r-5 m-5-5-0-0 cur-pointer">🚚 Rate rider ${escapeHTML(order.deliveryBy || '')}</button>`;
        }
        if (isBuyer && order.status === 'to_rate') {
            actionHTML += buildReturnActionHTML(order);
        }
        if (isBuyer && order.deliveryBy && (order.status === 'to_receive' || order.status === 'to_rate' || order.status === 'to_ship')) {
            actionHTML += `<button onclick="openOrderChat('${order.id}')" class="bg-blue text-white bd-none p-5-12 r-4 fs-11 cur-pointer mt-6 ml-4">💬 Chat with Delivery</button>`;
        }

        card.innerHTML = `
            <div class="order-item-header">
                <strong>${order.id}</strong>
                <span class="order-status-tag">${order.status.replace('_', ' ').toUpperCase()}</span>
            </div>
            <div class="text-soft mb-6">${escapeHTML(order.items)}</div>
            <div class="d-flex jc-between fs-11">
                <span class="text-dim">${order.date}</span>
                <span><strong class="text-sky">${formatPeso(order.total)}</strong>${order.discount ? ` <span class="text-green-light">(-${formatPeso(order.discount)} ${escapeHTML(order.voucherLabel || 'reward')})</span>` : ''}${order.deliveryFeeWaived ? ` <span class="text-green-light">(🚚 free delivery, saved ${formatPeso(order.deliveryFeeWaived)})</span>` : (order.deliveryFee ? ` <span class="text-muted">(incl. ${formatPeso(order.deliveryFee)} delivery)</span>` : '')}</span>
            </div>
            ${paymentHTML}
            ${actionHTML}
        `;
        container.appendChild(card);
    });
}

function selectPaymentMethod(orderId, method, otpVerified = false) {
    if (!currentUser) return;
    const order = customerOrders.find(o => o.id === orderId);
    if (!order || order.status !== 'to_pay') return;
    const myName = currentUser.displayName || `${currentUser.firstName} ${currentUser.lastName}`;
    if (order.buyer !== myName && order.buyerEmail !== currentUser.email) {
        alert("You can only pay for your own orders.");
        return;
    }
    if (method === 'GCash' && !otpVerified) {
        startOtpFlow({
            purpose: 'gcash_payment',
            channel: 'sms',
            askTarget: true,
            targetLabel: 'GCash mobile number',
            targetPlaceholder: '09XX XXX XXXX',
            targetError: 'Enter a valid PH mobile number, e.g. 0917 123 4567.',
            targetValidator: normalizePhMobile,
            title: 'Pay with GCash',
            summary: `Order ${order.id} · ${formatPeso(order.total)}. Enter your GCash number and we'll text you a one-time code to authorise this payment.`,
            onVerified: () => selectPaymentMethod(orderId, 'GCash', true)
        });
        return;
    }
    order.paymentMethod = method;
    order.status = 'to_ship';
    alert(`Payment method set to ${method}. Order is now ready for delivery.`);
    renderPurchasesOrdersList();
    updateDeliveryHub();
}

function handleSellerButtonClick() {
    if (currentUser && managerEmails.includes(currentUser.email)) {
        alert("Admin accounts cannot apply as a seller.");
        return;
    }
    if (!currentUser) {
        alert("Please Sign Up or Log In first before becoming a seller!");
        openModal('loginModal');
    } else if (currentUser.isSeller) {
        switchSidebarTab('myshop');
    } else {
        openModal('sellerModal');
    }
}


/* ===== Name rules: reserved + duplicate usernames ===== */
const RESERVED_NAMES = [
    'admin', 'administrator', 'adm1n', 'admln', 'moderator', 'mod', 'manager',
    'owner', 'staff', 'support', 'system', 'root', 'superuser', 'official',
    'bestdebest', 'customer service', 'customerservice', 'rider'
];

function normalizeNameForCheck(name) {
    // lowercase, swap look-alike characters, remove spaces/symbols so "A d m i n", "Adm1n", "@dmin" are caught
    return String(name || '')
        .toLowerCase()
        .replace(/0/g, 'o').replace(/[1!|]/g, 'i').replace(/3/g, 'e')
        .replace(/[4@]/g, 'a').replace(/[5$]/g, 's').replace(/7/g, 't')
        .replace(/[^a-z]/g, '');
}

function isReservedName(name) {
    const flat = normalizeNameForCheck(name);
    if (!flat) return false;
    return RESERVED_NAMES.some(r => {
        const rf = normalizeNameForCheck(r);
        return flat === rf || flat.includes('admin');
    });
}

function isNameTaken(name, ignoreEmail) {
    const lower = String(name || '').trim().toLowerCase();
    return registeredUsers.some(u => {
        if (ignoreEmail && u.email === ignoreEmail) return false;
        return (u.displayName && u.displayName.trim().toLowerCase() === lower) ||
               (u.shopName && u.shopName.trim().toLowerCase() === lower);
    });
}

// Returns an error message, or '' if the name is fine
function validateUsername(name, ignoreEmail) {
    const clean = String(name || '').trim();
    if (clean.length < 3) return 'Username must be at least 3 characters.';
    if (clean.length > 30) return 'Username must be 30 characters or fewer.';
    if (isReservedName(clean)) return 'This username is not allowed. Please choose a different one.';
    if (isNameTaken(clean, ignoreEmail)) return 'This username is already taken. Please choose a different one.';
    return '';
}

function showNameError(errorId, message) {
    const el = document.getElementById(errorId);
    if (!el) { alert(message); return; }
    el.textContent = message;
    el.classList.remove('is-hidden');
    const input = el.parentElement && el.parentElement.querySelector('input');
    if (input) { input.classList.add('input-invalid'); input.focus(); }
}

function clearNameError(errorId) {
    const el = document.getElementById(errorId);
    if (!el) return;
    el.textContent = '';
    el.classList.add('is-hidden');
    const input = el.parentElement && el.parentElement.querySelector('input');
    if (input) input.classList.remove('input-invalid');
}

/* ===== Block highlighting / selecting text (inputs still work) ===== */
(function preventTextSelection() {
    const isEditable = el => el && el.closest && el.closest('input, textarea, select, [contenteditable="true"]');
    document.addEventListener('selectstart', e => { if (!isEditable(e.target)) e.preventDefault(); });
    document.addEventListener('dragstart', e => { if (!isEditable(e.target)) e.preventDefault(); });
    document.addEventListener('copy', e => { if (!isEditable(e.target)) e.preventDefault(); });
    document.addEventListener('cut', e => { if (!isEditable(e.target)) e.preventDefault(); });
    document.addEventListener('contextmenu', e => { if (!isEditable(e.target)) e.preventDefault(); });
})();

function handleSellerRegistration(event) {
    event.preventDefault();
    if (currentUser && managerEmails.includes(currentUser.email)) { alert('Admin accounts cannot register as sellers.'); closeModal('sellerModal'); return; }
    if (!currentUser) { alert('Please log in first.'); return; }
    const shopName = document.getElementById('sellerShopName').value.trim();
    if (!shopName) return;

    const shopError = validateUsername(shopName, currentUser.email);
    if (shopError) {
        showNameError('sellerNameError', shopError.replace('username', 'shop name'));
        return;
    }

    currentUser.isSeller = true;
    currentUser.shopName = shopName;
    closeModal('sellerModal');
    updateAuthUI();
    alert(`Congratulations ${currentUser.displayName}! Your shop "${shopName}" is now active.`);
    switchSidebarTab('myshop');
}

// Returns an error message, or '' if the product details are fine
function validateProductFields(name, price, stock) {
    if (!name || name.length < 2) return 'Please enter a product name (at least 2 characters).';
    if (!Number.isFinite(price) || price <= 0) return 'Price must be more than ₱0.';
    if (price > 10000000) return 'Price is too high. Please enter a realistic price.';
    if (!Number.isInteger(stock) || stock < 0) return 'Stock must be a whole number, 0 or more.';
    if (stock > 100000) return 'Stock is too high. Please enter a realistic amount.';
    return '';
}

function handleAddNewProduct(event) {
    event.preventDefault();
    if (!currentUser || !currentUser.isSeller) {
        alert("Please log in with a seller account to list an item.");
        return;
    }
    const wantsAdultListing = !!(document.getElementById('prodAdultInput') && document.getElementById('prodAdultInput').checked);
    if (wantsAdultListing && !isAdultUser(currentUser)) {
        alert("Only sellers whose ID is verified as 18+ can list adult-only (18+) items.");
        return;
    }

    const imageFile = document.getElementById('prodImgInput').files[0];
    if (imageFile && !imageFile.type.startsWith('image/')) {
        alert("Please choose a valid image file.");
        return;
    }
    if (imageFile && imageFile.size > 3 * 1024 * 1024) {
        alert("Please choose an image smaller than 3 MB.");
        return;
    }

    const newName = document.getElementById('prodNameInput').value.trim();
    const newPrice = parseFloat(document.getElementById('prodPriceInput').value);
    const newStock = parseInt(document.getElementById('prodStockInput').value, 10);
    const productError = validateProductFields(newName, newPrice, newStock);
    if (productError) { alert(productError); return; }

    const publishProduct = (imageData) => {
    const img = imageData || "";
    const name = newName;
    const catSubVal = document.getElementById('prodCategorySelect').value.split(':');
    const price = Math.round(newPrice * 100) / 100;
    const stock = newStock;
    const desc = document.getElementById('prodDescInput').value.trim();

    const newProd = {
        id: Math.max(0, ...products.map(p => Number(p.id) || 0)) + 1,
        categoryId: parseInt(catSubVal[0]),
        subTag: catSubVal[1],
        name: name,
        description: desc,
        price: price,
        image: img,
        stock: stock,
        sold: 0,
        dateAdded: new Date().toISOString().split('T')[0],
        sellerName: currentUser.shopName || currentUser.displayName,
        sellerEmail: currentUser.email,
        rating: 0,
        reviewsCount: 0,
        adult: !!(document.getElementById('prodAdultInput') && document.getElementById('prodAdultInput').checked)
    };

    products.unshift(newProd);
    closeModal('addProductModal');
    document.getElementById('prodImgInput').value = '';
    if (document.getElementById('prodAdultInput')) document.getElementById('prodAdultInput').checked = false;
    alert(`Product "${name}" successfully listed for sale!`);
    resetStore();
    };

    if (imageFile) {
        const reader = new FileReader();
        reader.onload = () => publishProduct(reader.result);
        reader.onerror = () => alert("The image could not be read. Please try another file.");
        reader.readAsDataURL(imageFile);
    } else {
        publishProduct("");
    }
}

function deleteSellerProduct(event, productId) {
    if (event) event.stopPropagation();
    if (!currentUser || !currentUser.isSeller) {
        alert("Please log in with your seller account first.");
        return;
    }
    const index = products.findIndex(p => p.id === productId);
    if (index === -1) return;
    const product = products[index];
    const ownsProduct = sellerOwnsProduct(product);
    if (!ownsProduct) {
        alert("You can only delete items listed by your own shop.");
        return;
    }
    if (!confirm(`Delete "${product.name}" from your shop? This cannot be undone.`)) return;
    products.splice(index, 1);
    alert(`"${product.name}" was deleted from your shop.`);
    resetStore();
}

function openEditProductModal(product) {
    activeEditingProduct = product;
    document.getElementById('editProdName').value = product.name;
    document.getElementById('editProdPrice').value = product.price;
    document.getElementById('editProdStock').value = product.stock;
    document.getElementById('editProdDesc').value = product.description;
    openModal('editProductModal');
}

function handleSaveEditedProduct(event) {
    event.preventDefault();
    if (!activeEditingProduct) return;

    const editName = document.getElementById('editProdName').value.trim();
    const editPrice = parseFloat(document.getElementById('editProdPrice').value);
    const editStock = parseInt(document.getElementById('editProdStock').value, 10);
    const editError = validateProductFields(editName, editPrice, editStock);
    if (editError) { alert(editError); return; }

    activeEditingProduct.name = editName;
    activeEditingProduct.price = Math.round(editPrice * 100) / 100;
    activeEditingProduct.stock = editStock;
    activeEditingProduct.description = document.getElementById('editProdDesc').value.trim();

    closeModal('editProductModal');
    alert(`Product details for "${activeEditingProduct.name}" updated!`);
    applySortingAndFilters();
}

function promptBanProduct(productId) {
    productPendingBanId = productId;
    document.getElementById('banReasonInput').value = '';
    openModal('banReasonModal');
}

function confirmBanProduct(event) {
    event.preventDefault();
    const reason = document.getElementById('banReasonInput').value.trim() || 'Violates store policy.';
    const idx = products.findIndex(p => p.id === productPendingBanId);

    if (idx !== -1) {
        const p = products[idx];
        sellerNotifications.push({
            productName: p.name,
            reason: reason,
            sellerName: p.sellerName
        });
        bannedProducts.push({ ...p, banReason: reason });
        products.splice(idx, 1);
        cart = cart.filter(item => item.id !== p.id);
        updateCartUI();
        alert(`Product successfully removed and seller notified.`);
    }

    closeModal('banReasonModal');
    renderAdminDashboard();
    resetStore();
}

function unbanProduct(productId) {
    const idx = bannedProducts.findIndex(p => p.id === productId);
    if (idx === -1) return;
    const p = bannedProducts[idx];
    const { banReason, ...restored } = p;
    products.push(restored);
    bannedProducts.splice(idx, 1);
    alert(`"${restored.name}" has been unbanned and returned to the shop.`);
    renderAdminDashboard();
    resetStore();
}

function escapeReviewText(value) {
    return String(value || '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}

function renderProductReviews(productId) {
    const panel = document.getElementById('productReviewsPanel');
    if (!panel) return;
    const reviews = productReviews.filter(r => String(r.productId) === String(productId));
    const average = reviews.length ? reviews.reduce((sum, r) => sum + Number(r.rating || 0), 0) / reviews.length : null;
    panel.innerHTML = `<h3 class="text-light fs-15 mb-8">Customer Reviews ${reviews.length ? `(${reviews.length})` : ''}</h3>` +
      (reviews.length ? `<div class="text-amber fs-12 mb-8">⭐️ ${average.toFixed(1)} / 5 from customer reviews</div>` : `<p class="text-muted fs-12">No written reviews yet. Customers can review after receiving their order.</p>`) +
      (reviews.slice().reverse().map(r => `<div class="p-9-0 bt-334155"><div class="d-flex jc-between gap-8"><strong class="text-light fs-12">${escapeReviewText(r.reviewerName)}</strong><span class="text-amber fs-12">${'★'.repeat(Number(r.rating))}${'☆'.repeat(5-Number(r.rating))}</span></div><p class="text-soft fs-12 m-5-0 ws-pre-wrap">${escapeReviewText(r.comment)}</p><span class="fs-10 text-dim">${escapeReviewText(r.date)}</span></div>`).join(''));
}

function openReviewModal(orderId, productId) {
    if (!currentUser) { alert('Please log in to leave a review.'); return; }
    const order = customerOrders.find(o => o.id === orderId);
    const ownsOrder = order && (order.buyerEmail === currentUser.email || order.buyer === (currentUser.displayName || `${currentUser.firstName} ${currentUser.lastName}`));
    if (!ownsOrder || order.status !== 'to_rate') { alert('You can review items only after your order is marked received.'); return; }
    document.getElementById('reviewOrderId').value = orderId;
    document.getElementById('reviewProductId').value = productId == null ? '' : productId;
    document.getElementById('reviewComment').value = '';
    openModal('reviewModal');
}

function openRiderReviewModal(orderId) {
    if (!currentUser) { alert('Please log in to rate your rider.'); return; }
    const order = customerOrders.find(o => o.id === orderId);
    const ownsOrder = order && (order.buyerEmail === currentUser.email || order.buyer === (currentUser.displayName || `${currentUser.firstName} ${currentUser.lastName}`));
    if (!ownsOrder || order.status !== 'to_rate' || !order.deliveryByEmail) { alert('You can rate the rider only after you received your order.'); return; }
    document.getElementById('riderReviewOrderId').value = orderId;
    document.getElementById('riderReviewSummary').textContent = `Order ${orderId} · delivered by ${order.deliveryBy || 'your rider'}`;
    document.getElementById('riderReviewRating').value = '5';
    document.getElementById('riderReviewComment').value = '';
    openModal('riderReviewModal');
}

function submitRiderReview(event) {
    event.preventDefault();
    if (!currentUser) return;
    const orderId = document.getElementById('riderReviewOrderId').value;
    const order = customerOrders.find(o => o.id === orderId);
    const ownsOrder = order && (order.buyerEmail === currentUser.email || order.buyer === (currentUser.displayName || `${currentUser.firstName} ${currentUser.lastName}`));
    if (!ownsOrder || order.status !== 'to_rate' || !order.deliveryByEmail) { alert('Only the customer who received this order can rate its rider.'); return; }
    if (order.deliveryByEmail === currentUser.email) { alert('You cannot rate your own delivery.'); return; }
    if (riderReviews.some(r => r.orderId === orderId && r.reviewerEmail === currentUser.email)) { alert('You already rated the rider for this order.'); closeModal('riderReviewModal'); return; }
    const rating = Math.min(5, Math.max(1, Number(document.getElementById('riderReviewRating').value) || 5));
    riderReviews.push({
        orderId, riderEmail: order.deliveryByEmail, riderName: order.deliveryBy || '',
        rating, comment: document.getElementById('riderReviewComment').value.trim(),
        reviewerEmail: currentUser.email,
        reviewerName: currentUser.displayName || `${currentUser.firstName} ${currentUser.lastName}`,
        date: new Date().toISOString().split('T')[0]
    });
    closeModal('riderReviewModal');
    renderPurchasesOrdersList();
    updateDeliveryHub();
    alert('Thank you! Your rider rating has been saved.');
}

function submitOrderReview(event) {
    event.preventDefault();
    if (!currentUser) return;
    const orderId = document.getElementById('reviewOrderId').value;
    const rawProductId = document.getElementById('reviewProductId').value;
    const order = customerOrders.find(o => o.id === orderId);
    const ownsOrder = order && (order.buyerEmail === currentUser.email || order.buyer === (currentUser.displayName || `${currentUser.firstName} ${currentUser.lastName}`));
    if (!ownsOrder || order.status !== 'to_rate') { alert('Only the customer who received this order can review it.'); return; }
    const item = (order.orderItems || []).find(i => String(i.id) === String(rawProductId));
    if (rawProductId && !item) { alert('This item was not part of this order.'); return; }
    const productId = rawProductId ? Number(rawProductId) : (order.orderItems && order.orderItems[0] ? order.orderItems[0].id : null);
    if (productId == null) { alert('This older order does not contain item details, so it cannot be linked to a product review.'); return; }
    if (productReviews.some(r => r.orderId === orderId && String(r.productId) === String(productId) && r.reviewerEmail === currentUser.email)) { alert('You already reviewed this item for this order.'); closeModal('reviewModal'); return; }
    const rating = Number(document.getElementById('reviewRating').value);
    const comment = document.getElementById('reviewComment').value.trim();
    if (!comment) { alert('Please write a comment.'); return; }
    productReviews.push({ productId, orderId, rating, comment, reviewerEmail: currentUser.email, reviewerName: currentUser.displayName || `${currentUser.firstName} ${currentUser.lastName}`, date: new Date().toISOString().split('T')[0] });
    const product = products.find(p => String(p.id) === String(productId));
    if (product) {
      const reviews = productReviews.filter(r => String(r.productId) === String(productId));
      product.rating = Number((reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1));
      product.reviewsCount = Math.max(Number(product.reviewsCount || 0), reviews.length);
    }
    closeModal('reviewModal');
    if (activeModalProduct && String(activeModalProduct.id) === String(productId)) renderProductReviews(productId);
    renderPurchasesOrdersList();
    alert('Thank you! Your review is now visible on the product page.');
    resetStore();
}

function openPublicProfile(email) {
    const user = registeredUsers.find(u => u.email === email);
    if (!user) { alert('Profile not found.'); return; }
    showPublicProfile(user);
}
function openPublicProfileByName(name) {
    const user = registeredUsers.find(u => u.shopName === name || u.displayName === name);
    if (!user) { alert('This seller has no public account profile yet.'); return; }
    showPublicProfile(user);
}
function showPublicProfile(user) {
    const userProducts = products.filter(p => p.sellerEmail === user.email || p.sellerName === user.shopName || p.sellerName === user.displayName).filter(p => canSeeProduct(p));
    const avg = productReviews.filter(r => userProducts.some(p => String(p.id) === String(r.productId)));
    const sellerRating = avg.length ? `${(avg.reduce((sum, r) => sum + Number(r.rating), 0) / avg.length).toFixed(1)} (${avg.length} product review${avg.length === 1 ? '' : 's'})` : 'No ratings yet';
    const riderStats = user.isDelivery ? getRiderRating(user.email) : null;
    const riderRating = riderStats && riderStats.count ? `${riderStats.average.toFixed(1)} (${riderStats.count} delivery review${riderStats.count === 1 ? '' : 's'})` : 'No ratings yet';
    const roles = [user.isSeller ? 'Verified Seller' : '', user.isDelivery ? 'Delivery Rider' : ''].filter(Boolean).join(' · ') || 'Customer';
    const ratingLines = (user.isSeller ? `<div class="text-amber mt-8">⭐️ Seller rating: ${sellerRating}</div>` : '')
        + (user.isDelivery ? `<div class="text-amber mt-8">🚚 Delivery rating: ${riderRating}</div>` : '');
    const productCount = user.isSeller ? `<div class="text-muted fs-12 mt-5">${userProducts.length} listed product(s)</div>` : '';
    document.getElementById('publicProfileContent').innerHTML = `<div class="p-14 bg-navy r-10"><img class="account-avatar account-avatar-public" src="${user.profilePicture || DEFAULT_PROFILE_AVATAR}" alt="Profile picture of ${escapeReviewText(user.displayName || user.firstName || 'Member')}"><div class="fs-22 text-light fw-700">${escapeReviewText(user.shopName || user.displayName || user.firstName || 'Member')}</div><div class="text-sky mt-5">${roles}</div>${renderBadgeChips(user)}<div class="text-soft mt-8">📍 ${escapeReviewText(user.location || 'Location not provided')}</div><p class="text-soft ws-pre-wrap mt-10">${escapeReviewText(user.bio || 'No profile bio added yet.')}</p>${ratingLines}${productCount}</div>${user.isSeller ? `<h3 class="text-light m-14-0-8">Shop Products</h3>${userProducts.length ? userProducts.map(p => `<div class="p-8-0 bb-334155 text-soft">${escapeReviewText(p.name)} — ₱${Number(p.price).toLocaleString()}</div>`).join('') : '<p class="text-muted fs-12">No products listed yet.</p>'}` : ''}`;
    openModal('publicProfileModal');
}

const DEFAULT_PROFILE_AVATAR = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" rx="60" fill="#1e293b"/><circle cx="60" cy="43" r="22" fill="#64748b"/><path d="M20 108c2-25 18-38 40-38s38 13 40 38" fill="#64748b"/></svg>');

function setProfileImage(img, imageData) {
    if (!img) return;
    img.src = imageData || DEFAULT_PROFILE_AVATAR;
    img.style.display = 'inline-block';
}
function previewProfilePicture(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    const allowed = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (!allowed.includes(file.type)) {
        alert('Please choose a JPG, PNG, WEBP, or GIF image.');
        event.target.value = '';
        return;
    }
    if (file.size > 2 * 1024 * 1024) {
        alert('Profile pictures must be 2 MB or smaller.');
        event.target.value = '';
        return;
    }
    pendingPictureRemoval = false;
    const reader = new FileReader();
    reader.onload = () => setProfileImage(document.getElementById('settingsProfilePicturePreview'), reader.result);
    reader.readAsDataURL(file);
}
let pendingPictureRemoval = false;
function removeProfilePicture() {
    const input = document.getElementById('settingsProfilePicture');
    if (input) input.value = '';
    setProfileImage(document.getElementById('settingsProfilePicturePreview'), '');
    pendingPictureRemoval = true;   // applied when the person presses Save Changes
}

function openSettingsModal() {
    if (!currentUser) {
        alert("Please log in first to modify account settings.");
        return;
    }
    openModal('verifyPasswordModal');
}

function confirmPasswordVerification(event) {
    event.preventDefault();
    const pass = document.getElementById('verifyPassInput').value;
    if (pass === currentUser.password) {
        closeModal('verifyPasswordModal');
        document.getElementById('verifyPassInput').value = '';
        document.getElementById('settingsDisplayName').value = currentUser.displayName;
        clearNameError('settingsNameError');
        clearNameError('settingsLocationError');
        document.getElementById('settingsLocation').value = currentUser.location || 'Manila';
        document.getElementById('settingsBio').value = currentUser.bio || '';
        document.getElementById('settingsDateCreated').value = currentUser.dateCreated || '2026-01-01';
        document.getElementById('settingsProfilePicture').value = '';
        pendingPictureRemoval = false;
        setProfileImage(document.getElementById('settingsProfilePicturePreview'), currentUser.profilePicture || '');
        renderSettingsBadges();
        openModal('settingsModal');
    } else {
        alert("Incorrect password!");
    }
}

// Orders, chats and reviews store the display name as text, so rename it there too
function propagateDisplayName(oldName, newName, email) {
    const mine = String(email || '').toLowerCase();
    customerOrders.forEach(order => {
        if (String(order.buyerEmail || '').toLowerCase() === mine) order.buyer = newName;
        if (String(order.deliveryByEmail || '').toLowerCase() === mine) order.deliveryBy = newName;
        if ((String(order.buyerEmail || '').toLowerCase() === mine || String(order.deliveryByEmail || '').toLowerCase() === mine) && Array.isArray(order.messages)) {
            order.messages.forEach(m => { if (m.from === oldName) m.from = newName; });
        }
    });
    salesHistory.forEach(sale => { if (sale.buyer === oldName) sale.buyer = newName; });
    productReviews.forEach(r => { if (String(r.reviewerEmail || '').toLowerCase() === mine) r.reviewerName = newName; });
    riderReviews.forEach(r => {
        if (String(r.reviewerEmail || '').toLowerCase() === mine) r.reviewerName = newName;
        if (String(r.riderEmail || '').toLowerCase() === mine) r.riderName = newName;
    });
}

function saveAccountSettings(event) {
    event.preventDefault();
    const newDisplayName = document.getElementById('settingsDisplayName').value.trim();
    const nameChanged = newDisplayName.toLowerCase() !== String(currentUser.displayName || '').trim().toLowerCase();
    // Only check the name when it is being changed, so saving other settings still works
    if (nameChanged) {
        const nameError = validateDisplayNameFormat(newDisplayName) || validateUsername(newDisplayName, currentUser.email);
        if (nameError) {
            showNameError('settingsNameError', nameError);
            return;
        }
    }
    const newLocation = cleanLocation(document.getElementById('settingsLocation').value);
    if (newLocation !== cleanLocation(currentUser.location)) {
        const locationError = validateLocation(newLocation);
        if (locationError) {
            showNameError('settingsLocationError', locationError);
            return;
        }
    }
    if (nameChanged) propagateDisplayName(currentUser.displayName, newDisplayName, currentUser.email);
    currentUser.displayName = newDisplayName;
    currentUser.location = newLocation;
    if (pendingPictureRemoval) { currentUser.profilePicture = ''; pendingPictureRemoval = false; }
    currentUser.bio = document.getElementById('settingsBio').value.trim();
    const pictureInput = document.getElementById('settingsProfilePicture');
    const pictureFile = pictureInput && pictureInput.files && pictureInput.files[0];
    if (pictureFile) {
        if (pictureFile.size > 2 * 1024 * 1024) {
            alert('Profile pictures must be 2 MB or smaller.');
            return;
        }

        const preview = document.getElementById('settingsProfilePicturePreview');
        if (preview && preview.src && preview.src.startsWith('data:image/')) currentUser.profilePicture = preview.src;
    }
    closeModal('settingsModal');
    updateAuthUI();
    alert("Account settings successfully updated!");
}

let modalOpenSeq = 0;
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) {
        console.warn(`Modal not found: ${modalId}`);
        return;
    }
    modal.dataset.openSeq = String(++modalOpenSeq);
    modal.style.display = 'flex';
    if (modalId !== 'productModal' && modalId !== 'otpModal') {
        const first = modal.querySelector('form input:not([type=hidden]):not([type=file]):not([type=checkbox]):not([readonly]):not(:disabled), form textarea');
        if (first) setTimeout(() => { try { first.focus({ preventScroll: true }); } catch (e) {} }, 30);
    }
}

// Closes a modal the right way (an open code-check must also stop its timer)
function dismissModal(modal) {
    if (!modal) return;
    if (modal.id === 'otpModal') cancelOtpFlow();
    else modal.style.display = 'none';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.style.display = 'none';
}

function openPolicyModal() { openModal('policyModal'); }
function closePolicyModal() { closeModal('policyModal'); }

function openProductModal(product) {
    if (!canSeeProduct(product)) return;
    activeModalProduct = product;
    const categoryObj = categories.find(c => c.id === product.categoryId);

    document.getElementById('modalImgContainer').innerHTML = product.image 
        ? `<img src="${escapeHTML(product.image)}" class="${product.adult && !isAdultUser(currentUser) ? 'adult-blur' : ''} mh-150 of-contain" alt="${escapeHTML(product.name)}">`
        : `<span class="text-gray fs-12">[No Image Available]</span>`;

    document.getElementById('modalTitle').textContent = product.name;
    if (product.adult) {
        const tag = document.createElement('span');
        tag.className = 'adult-badge-inline';
        tag.textContent = '18+';
        document.getElementById('modalTitle').appendChild(tag);
    }
    document.getElementById('modalDesc').textContent = product.description;
    
    document.getElementById('modalCategoryTag').textContent = `Category: ${categoryObj ? categoryObj.name : 'General'}`;
    document.getElementById('modalSellerTag').textContent = `Seller: ${product.sellerName || 'Official Store'}`;
    document.getElementById('modalStockTag').textContent = `Stock: ${product.stock} units`;
    const reviewTotal = Number(product.reviewsCount) || 0;
    document.getElementById('modalRatingTag').textContent = reviewTotal > 0
        ? `⭐️ Rating: ${Number(product.rating) || 0} / 5.0 (${reviewTotal} review${reviewTotal === 1 ? '' : 's'})`
        : '⭐️ No reviews yet';
    document.getElementById('modalPrice').textContent = `₱${product.price.toLocaleString('en-US', {minimumFractionDigits: 2})}`;
    const sellerEmail = product.sellerEmail || (registeredUsers.find(u => u.shopName === product.sellerName || u.displayName === product.sellerName) || {}).email;
    const profileBtn = document.getElementById('viewSellerProfileBtn');
    profileBtn.onclick = () => sellerEmail ? openPublicProfile(sellerEmail) : openPublicProfileByName(product.sellerName);
    renderProductReviews(product.id);

    const cartBtn = document.getElementById('modalAddToCartBtn');
    if (isAdminStoreView && currentUser && managerEmails.includes(currentUser.email)) {
        cartBtn.disabled = true;
        cartBtn.style.background = '#475569';
        cartBtn.textContent = 'View Only · No Purchases';
    } else if (currentUser && currentUser.isSeller && sellerOwnsProduct(product, currentUser)) {
        cartBtn.disabled = true;
        cartBtn.style.background = '#475569';
        cartBtn.textContent = 'Your Own Item';
    } else if (product.adult && !isAdultUser(currentUser)) {
        cartBtn.disabled = true;
        cartBtn.style.background = '#475569';
        cartBtn.textContent = 'Adults Only (18+)';
    } else if (product.stock <= 0) {
        cartBtn.disabled = true;
        cartBtn.style.background = '#475569';
        cartBtn.textContent = 'Out of Stock';
    } else {
        cartBtn.disabled = false;
        cartBtn.style.background = '#0099ff';
        cartBtn.textContent = 'Add to Cart';
    }
    const modalQty = document.getElementById('modalQtyInput');
    if (modalQty) {
        modalQty.value = 1;
        modalQty.max = Math.max(1, getModalQtyMax());
        modalQty.disabled = cartBtn.disabled;
        const qtyNote = document.getElementById('modalQtyNote');
        if (qtyNote) qtyNote.textContent = '';
    }

    openModal('productModal');
}

/* =====================================================================
   MOCK OTP  (front-end demo only)
   ---------------------------------------------------------------------
   Used for: sign up, password reset, GCash payment.

   HOW TO CONNECT A REAL BACKEND
   1. Set OTP_CONFIG.MOCK = false (and OTP_CONFIG.SHOW_DEMO_CODE = false).
   2. Implement these two endpoints (the fetch() calls below already use them):

      POST {API_BASE}/send
        body:    { purpose: 'signup' | 'password_reset' | 'gcash_payment',
                   channel: 'email' | 'sms', target: '<email or 09XXXXXXXXX>' }
        returns: { requestId: string, expiresInSec: number, resendInSec: number }

      POST {API_BASE}/verify
        body:    { requestId: string, code: '123456' }
        returns: 200 { verified: true }  |  4xx { message: '<error for the user>' }

   The backend should generate + store the code (hashed), expire it, limit
   attempts, rate-limit sends, and send the email/SMS. The code must NEVER be
   returned to the browser in production.
   ===================================================================== */
const OTP_CONFIG = {
    MOCK: false,
    SHOW_DEMO_CODE: false,
    API_BASE: '',
    LENGTH: 6,
    TTL_SEC: 300,
    RESEND_SEC: 30,
    MAX_ATTEMPTS: 5
};

const otpMockStore = new Map();   // requestId -> { code, expiresAt, attempts }
let otpSession = null;            // the flow currently shown in the modal
let otpResendTimer = null;

const otpDelay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function otpApiSend(purpose, channel, target) {
    if (!OTP_CONFIG.MOCK) {
        const res = await fetch(`${OTP_CONFIG.API_BASE}/send`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ purpose, channel, target })
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(data.message || 'Could not send the code. Please try again.');
        return data;
    }
    await otpDelay(500); // pretend network latency
    const code = String(Math.floor(Math.random() * Math.pow(10, OTP_CONFIG.LENGTH))).padStart(OTP_CONFIG.LENGTH, '0');
    const requestId = `mock_${Date.now()}_${Math.floor(Math.random() * 100000)}`;
    otpMockStore.set(requestId, { code, expiresAt: Date.now() + OTP_CONFIG.TTL_SEC * 1000, attempts: 0 });
    return { requestId, expiresInSec: OTP_CONFIG.TTL_SEC, resendInSec: OTP_CONFIG.RESEND_SEC, demoCode: code };
}

async function otpApiVerify(requestId, code) {
    if (!OTP_CONFIG.MOCK) {
        const res = await fetch(`${OTP_CONFIG.API_BASE}/verify`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ requestId, code })
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(data.message || 'That code is not correct.');
        return data;
    }
    await otpDelay(400);
    const entry = otpMockStore.get(requestId);
    if (!entry) throw new Error('This code is no longer valid. Please request a new one.');
    if (Date.now() > entry.expiresAt) { otpMockStore.delete(requestId); throw new Error('This code has expired. Please request a new one.'); }
    if (entry.attempts >= OTP_CONFIG.MAX_ATTEMPTS) { otpMockStore.delete(requestId); throw new Error('Too many wrong attempts. Please request a new code.'); }
    if (entry.code !== code) {
        entry.attempts++;
        const left = OTP_CONFIG.MAX_ATTEMPTS - entry.attempts;
        if (left <= 0) { otpMockStore.delete(requestId); throw new Error('Too many wrong attempts. Please request a new code.'); }
        throw new Error(`Incorrect code. ${left} attempt${left === 1 ? '' : 's'} left.`);
    }
    otpMockStore.delete(requestId);
    return { verified: true };
}

/* ---------- UI controller (no changes needed when the backend goes live) ---------- */

function normalizePhMobile(value) {
    const digits = String(value || '').replace(/[\s\-()]/g, '');
    const match = digits.match(/^(?:\+?63|0)(9\d{9})$/);
    return match ? '0' + match[1] : null;
}

function maskOtpTarget(target, channel) {
    if (channel === 'sms') return `${target.slice(0, 4)}••• ••${target.slice(-2)}`;
    const [name, domain] = String(target).split('@');
    return `${name.slice(0, 2)}${'•'.repeat(Math.max(2, name.length - 2))}@${domain || ''}`;
}

function setOtpError(message) {
    const el = document.getElementById('otpError');
    if (!el) return;
    el.textContent = message || '';
    el.classList.toggle('is-hidden', !message);
}

function startOtpFlow(options) {
    clearInterval(otpResendTimer);
    otpSession = Object.assign({
        purpose: '', channel: 'email', target: '', title: 'Verify Code', summary: '',
        askTarget: false, targetLabel: 'Mobile number', targetPlaceholder: '', targetError: 'Please enter a valid value.',
        targetValidator: null, onVerified: () => {}, requestId: null, resendAt: 0, busy: false
    }, options);

    document.getElementById('otpTitle').textContent = otpSession.title;
    document.getElementById('otpSummary').textContent = otpSession.summary;
    document.getElementById('otpTargetLabel').textContent = otpSession.targetLabel;
    document.getElementById('otpTargetInput').placeholder = otpSession.targetPlaceholder;
    document.getElementById('otpTargetInput').value = '';
    document.getElementById('otpCodeInput').value = '';
    document.getElementById('otpDemoBanner').classList.add('is-hidden');
    document.getElementById('otpCodeForm').classList.add('is-hidden');
    document.getElementById('otpRetryBtn').classList.add('is-hidden');
    document.getElementById('otpTargetForm').classList.toggle('is-hidden', !otpSession.askTarget);
    setOtpError('');
    openModal('otpModal');

    if (otpSession.askTarget) document.getElementById('otpTargetInput').focus();
    else sendOtpCode();
}

function submitOtpTarget(event) {
    event.preventDefault();
    if (!otpSession) return;
    const raw = document.getElementById('otpTargetInput').value.trim();
    const cleaned = otpSession.targetValidator ? otpSession.targetValidator(raw) : raw;
    if (!cleaned) { setOtpError(otpSession.targetError); return; }
    otpSession.target = cleaned;
    sendOtpCode();
}

async function sendOtpCode() {
    const session = otpSession;
    if (!session || session.busy) return;
    session.busy = true;
    setOtpError('');
    document.getElementById('otpRetryBtn').classList.add('is-hidden');
    const sendBtn = document.getElementById('otpSendBtn');
    if (sendBtn) { sendBtn.disabled = true; sendBtn.textContent = 'Sending...'; }
    try {
        const res = await otpApiSend(session.purpose, session.channel, session.target);
        if (otpSession !== session) return; // flow was cancelled while waiting
        session.requestId = res.requestId;
        session.resendAt = Date.now() + (res.resendInSec ?? OTP_CONFIG.RESEND_SEC) * 1000;

        document.getElementById('otpTargetForm').classList.add('is-hidden');
        document.getElementById('otpCodeForm').classList.remove('is-hidden');
        const minutes = Math.max(1, Math.round((res.expiresInSec ?? OTP_CONFIG.TTL_SEC) / 60));
        document.getElementById('otpSentNote').textContent =
            `We sent a ${OTP_CONFIG.LENGTH}-digit code to ${maskOtpTarget(session.target, session.channel)}. It expires in ${minutes} minute${minutes === 1 ? '' : 's'}.`;

        const banner = document.getElementById('otpDemoBanner');
        if (OTP_CONFIG.MOCK && OTP_CONFIG.SHOW_DEMO_CODE && res.demoCode) {
            banner.innerHTML = `Demo mode: no real ${session.channel === 'sms' ? 'SMS' : 'email'} is sent.<br>Your code is <strong>${escapeHTML(res.demoCode)}</strong>`;
            banner.classList.remove('is-hidden');
        } else {
            banner.classList.add('is-hidden');
        }

        const input = document.getElementById('otpCodeInput');
        input.value = '';
        input.focus();
        startOtpResendTimer();
    } catch (err) {
        if (otpSession !== session) return;
        setOtpError(err.message || 'Could not send the code. Please try again.');
        if (!session.askTarget) document.getElementById('otpRetryBtn').classList.remove('is-hidden');
    } finally {
        session.busy = false;
        if (sendBtn) { sendBtn.disabled = false; sendBtn.textContent = 'Send Code'; }
    }
}

function startOtpResendTimer() {
    clearInterval(otpResendTimer);
    const link = document.getElementById('otpResendLink');
    const tick = () => {
        if (!otpSession) { clearInterval(otpResendTimer); return; }
        const left = Math.ceil((otpSession.resendAt - Date.now()) / 1000);
        if (left > 0) {
            link.textContent = `Resend code in ${left}s`;
            link.classList.add('is-disabled');
        } else {
            link.textContent = 'Resend code';
            link.classList.remove('is-disabled');
            clearInterval(otpResendTimer);
        }
    };
    tick();
    otpResendTimer = setInterval(tick, 1000);
}

function resendOtp() {
    if (!otpSession || Date.now() < otpSession.resendAt) return;
    sendOtpCode();
}

async function submitOtpCode(event) {
    event.preventDefault();
    const session = otpSession;
    if (!session || session.busy || !session.requestId) return;
    const code = document.getElementById('otpCodeInput').value.trim();
    if (!new RegExp(`^\\d{${OTP_CONFIG.LENGTH}}$`).test(code)) {
        setOtpError(`Please enter the ${OTP_CONFIG.LENGTH}-digit code.`);
        return;
    }
    session.busy = true;
    setOtpError('');
    const btn = document.getElementById('otpVerifyBtn');
    btn.disabled = true; btn.textContent = 'Verifying...';
    try {
        await otpApiVerify(session.requestId, code);
        if (otpSession !== session) return;
        const done = session.onVerified;
        cancelOtpFlow();
        done();
    } catch (err) {
        if (otpSession !== session) return;
        setOtpError(err.message || 'That code is not correct.');
        document.getElementById('otpCodeInput').value = '';
        document.getElementById('otpCodeInput').focus();
    } finally {
        session.busy = false;
        btn.disabled = false; btn.textContent = 'Verify';
    }
}

function cancelOtpFlow() {
    clearInterval(otpResendTimer);
    otpSession = null;
    closeModal('otpModal');
}



/* ===== Shipping location rules =====
   - Spaces and the usual address punctuation ( . , - ' # / ( ) ) are allowed.
   - The text must contain a real Philippine city, municipality or province.
   - Matching ignores capitals, accents (Parañaque = Paranaque), "City", "Sto." / "Sta." and punctuation. */
const PH_CITIES = [
    // Metro Manila
    'Manila','Quezon City','Caloocan','Las Piñas','Makati','Malabon','Mandaluyong','Marikina','Muntinlupa','Navotas','Parañaque','Pasay','Pasig','Pateros','San Juan','Taguig','Valenzuela',
    // Luzon
    'Alaminos','Angeles','Antipolo','Bacoor','Baguio','Balanga','Batac','Batangas City','Biñan','Cabanatuan','Cabuyao','Cainta','Calamba','Calapan','Candon','Carmona','Cauayan','Cavite City','Dagupan','Dasmariñas','Gapan','General Trias','Ilagan','Imus','Iriga','Laoag','Legazpi','Lemery','Ligao','Lipa','Lucena','Mabalacat','Malolos','Masbate City','Meycauayan','Muñoz','Naga','Olongapo','Palayan','Puerto Princesa','San Carlos','San Fernando','San Jose','San Jose del Monte','San Pablo','San Pedro','Santa Rosa','Santiago','Santo Tomas','Silang','Sorsogon City','Tabaco','Tabuk','Tagaytay','Tanauan','Tarlac City','Taytay','Tayabas','Trece Martires','Tuguegarao','Urdaneta','Vigan','Binangonan','Marilao','Bocaue','Baliuag','Rodriguez','Cabanatuan','Bulacan',
    // Visayas
    'Bacolod','Bago','Bais','Bayawan','Baybay','Bogo','Borongan','Cadiz','Calbayog','Canlaon','Carcar','Catbalogan','Cebu City','Danao','Dumaguete','Escalante','Guihulngan','Himamaylan','Iloilo City','Kabankalan','Kalibo','La Carlota','Lapu-Lapu','Maasin','Mandaue','Ormoc','Panglao','Passi','Roxas','Sagay','Silay','Sipalay','Tacloban','Tagbilaran','Talisay','Tanjay','Toledo','Victorias','Boracay',
    // Mindanao
    'Bayugan','Bislig','Butuan','Cabadbaran','Cagayan de Oro','Cotabato City','Dapitan','Davao City','Digos','Dipolog','General Santos','Gingoog','Iligan','Isabela City','Jolo','Kidapawan','Koronadal','Lamitan','Malaybalay','Marawi','Mati','Midsayap','Oroquieta','Ozamiz','Pagadian','Panabo','Polomolok','Samal','Surigao City','Tacurong','Tagum','Tandag','Valencia','Zamboanga City'
];
const PH_PROVINCES = [
    'Metro Manila','National Capital Region','NCR','Abra','Agusan del Norte','Agusan del Sur','Aklan','Albay','Antique','Apayao','Aurora','Basilan','Bataan','Batanes','Batangas','Benguet','Biliran','Bohol','Bukidnon','Bulacan','Cagayan','Camarines Norte','Camarines Sur','Camiguin','Capiz','Catanduanes','Cavite','Cebu','Cotabato','Davao de Oro','Davao del Norte','Davao del Sur','Davao Occidental','Davao Oriental','Dinagat Islands','Eastern Samar','Guimaras','Ifugao','Ilocos Norte','Ilocos Sur','Iloilo','Isabela','Kalinga','La Union','Laguna','Lanao del Norte','Lanao del Sur','Leyte','Maguindanao del Norte','Maguindanao del Sur','Marinduque','Masbate','Misamis Occidental','Misamis Oriental','Mountain Province','Negros Occidental','Negros Oriental','Northern Samar','Nueva Ecija','Nueva Vizcaya','Occidental Mindoro','Oriental Mindoro','Palawan','Pampanga','Pangasinan','Quezon','Quirino','Rizal','Romblon','Samar','Sarangani','Siquijor','Sorsogon','South Cotabato','Southern Leyte','Sultan Kudarat','Sulu','Surigao del Norte','Surigao del Sur','Tarlac','Tawi-Tawi','Zambales','Zamboanga del Norte','Zamboanga del Sur','Zamboanga Sibugay'
];

function normalizePlace(text) {
    return ' ' + String(text || '')
        .toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')   // ñ -> n
        .replace(/\bsto\b\.?/g, 'santo').replace(/\bsta\b\.?/g, 'santa')
        .replace(/[^a-z0-9]+/g, ' ')                         // punctuation -> space
        .replace(/\b(city|municipality|of)\b/g, ' ')
        .replace(/\s+/g, ' ').trim() + ' ';
}

const PH_PLACE_KEYS = [...new Set(PH_CITIES.concat(PH_PROVINCES).map(p => normalizePlace(p)))];

function cleanLocation(value) {
    return String(value || '').trim().replace(/\s+/g, ' ');
}

// Returns an error message, or '' if the location is fine
function validateLocation(value) {
    const v = cleanLocation(value);
    if (v.length < 3) return 'Please enter your city or location.';
    if (!/^[\p{L}\p{N} .,'’#\/()\-]+$/u.test(v)) return "Use only letters, numbers, spaces and . , - ' # / ( ) in the location.";
    if (!/\p{L}{3}/u.test(v)) return 'Please enter a real city or location.';
    const flat = normalizePlace(v);
    if (!PH_PLACE_KEYS.some(key => flat.includes(key))) {
        return "We couldn't find that place. Enter a real Philippine city or municipality, e.g. Quezon City or Cebu City.";
    }
    return '';
}

function populateCityOptions() {
    const list = document.getElementById('cityOptions');
    if (!list || list.children.length) return;
    [...new Set(PH_CITIES)].sort((a, b) => a.localeCompare(b)).forEach(name => {
        const opt = document.createElement('option');
        opt.value = name;
        list.appendChild(opt);
    });
}
document.addEventListener('DOMContentLoaded', populateCityOptions);

/* ===== Signup field rules ===== */
const PASSWORD_SPECIAL_CHARS = '!@#$%^&*()_+-=[]{};:,.?~';

function blockSpaceKey(event) {
    if (event.key === ' ' || event.code === 'Space') event.preventDefault();
}

function validatePersonName(value, label) {
    const v = String(value || '');
    if (/\s/.test(v)) return `${label} cannot contain spaces.`;
    if (!/^\p{L}+$/u.test(v)) return `${label} can only contain letters (no numbers or symbols).`;
    if (v.length < 3) return `${label} must be at least 3 letters.`;
    return '';
}

function validateDisplayNameFormat(value) {
    const v = String(value || '');
    if (/\s/.test(v)) return 'Display name cannot contain spaces.';
    return '';
}

function validateGmail(value) {
    const v = String(value || '');
    if (/\s/.test(v)) return 'Email cannot contain spaces.';
    if (!/^[A-Za-z0-9._%+-]+@gmail\.com$/i.test(v)) return 'Please enter your full Gmail address, e.g. yourname@gmail.com.';
    return '';
}

function validatePasswordRules(value) {
    const v = String(value || '');
    if (/\s/.test(v)) return 'Password cannot contain spaces.';
    if (v.length < 6) return 'Password must be at least 6 characters.';
    const hasSpecial = [...v].some(ch => PASSWORD_SPECIAL_CHARS.includes(ch));
    if (!hasSpecial) return 'Password needs at least one special character, such as * or @.';
    return '';
}

// Shows every signup error at once and focuses the first bad field. Returns true if all fine.
function validateSignupFields(f) {
    const checks = [
        ['signupFirstNameError', validatePersonName(f.firstName, 'First name')],
        ['signupLastNameError', validatePersonName(f.lastName, 'Last name')],
        ['signupNameError', validateDisplayNameFormat(f.displayName) || validateUsername(f.displayName)],
        ['signupLocationError', validateLocation(f.location)],
        ['signupEmailError', validateGmail(f.email)],
        ['signupPasswordError', validatePasswordRules(f.password)]
    ];
    let firstBad = null;
    checks.forEach(([id, msg]) => {
        if (msg) {
            const el = document.getElementById(id);
            el.textContent = msg;
            el.classList.remove('is-hidden');
            const input = el.parentElement.querySelector('input');
            if (input) {
                input.classList.add('input-invalid');
                if (!firstBad) firstBad = input;
            }
        } else {
            clearNameError(id);
        }
    });
    if (firstBad) firstBad.focus();
    return !firstBad;
}

function handleSignup(event) {
    event.preventDefault();
    const firstName = document.getElementById('signupFirstName').value.trim();
    const lastName = document.getElementById('signupLastName').value.trim();
    const displayName = document.getElementById('signupDisplayName').value.trim();
    const location = cleanLocation(document.getElementById('signupLocation').value);
    const email = document.getElementById('signupEmail').value.trim().toLowerCase();
    const password = document.getElementById('signupPassword').value;
    const birthDate = document.getElementById('signupBirthDate').value;

    if (!validateSignupFields({ firstName, lastName, displayName, location, email, password })) return;

    const age = calculateAge(birthDate);
    if (isNaN(age) || age < 0 || age > 120) {
        alert("Please enter a valid date of birth.");
        return;
    }
    if (age < MIN_SIGNUP_AGE) {
        alert(`Sorry, you must be at least ${MIN_SIGNUP_AGE} years old to create an account.`);
        return;
    }

    if (registeredUsers.some(u => u.email === email)) {
        alert("An account with this email already exists!");
        return;
    }

    const newUser = {
        firstName, lastName, displayName, location,
        dateCreated: new Date().toISOString().split('T')[0],
        email, password, birthDate, isSeller: false
    };

    startOtpFlow({
        purpose: 'signup',
        channel: 'email',
        target: email,
        title: 'Verify Your Email',
        summary: `Almost there, ${displayName}! Enter the code we send to your email to finish creating your account.`,
        onVerified: () => completeSignup(newUser)
    });
}

function completeSignup(newUser) {
    if (registeredUsers.some(u => u.email === newUser.email)) {
        alert("An account with this email already exists!");
        return;
    }
    const finalNameError = validateUsername(newUser.displayName);
    if (finalNameError) {
        closeModal('otpModal');
        showNameError('signupNameError', finalNameError);
        return;
    }
    registeredUsers.push(newUser);

    currentUser = newUser;
    updateAuthUI();
    applySortingAndFilters();
    closeModal('signupModal');

    document.getElementById('signupFirstName').value = '';
    document.getElementById('signupLastName').value = '';
    document.getElementById('signupDisplayName').value = '';
    document.getElementById('signupLocation').value = '';
    document.getElementById('signupEmail').value = '';
    document.getElementById('signupPassword').value = '';
    document.getElementById('signupBirthDate').value = '';
    ['signupFirstNameError','signupLastNameError','signupNameError','signupLocationError','signupEmailError','signupPasswordError'].forEach(clearNameError);

    alert(`Successfully registered and logged in as ${newUser.displayName}!`);
}

async function sendResetLink() {
    const email = document.getElementById("resetEmail").value;

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: window.location.origin + "/reset-password.html"
    });

    if (error) {
        alert(error.message);
    } else {
        alert("Password reset link sent to your email.");
    }
}

async function resetPassword() {
    const password = document.getElementById('newPassword').value;
    const confirm = document.getElementById('confirmPassword').value;

    if (password !== confirm) {
        alert('Passwords do not match');
        return;
    }

    const { error } = await supabase.auth.updateUser({
        password: password
    });

    if (error) {
        alert(error.message);
    } else {
        alert('Password updated successfully!');
        location.href = 'index.html';
    }
}

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    const user = registeredUsers.find(u => String(u.email).toLowerCase() === email.toLowerCase() && u.password === password);
    if (!user) {
        alert("Invalid email or password!");
        return;
    }

    currentUser = user;
    if (managerEmails.includes(user.email)) {
        if (!onlineManagers.includes(user.email)) onlineManagers.push(user.email);
    }
    updateAuthUI();
    applySortingAndFilters();
    closeModal('loginModal');

    document.getElementById('loginEmail').value = '';
    document.getElementById('loginPassword').value = '';

    alert(`Welcome back, ${user.displayName || user.firstName}!`);
}

function handleAddNewAdmin(event) {
    event.preventDefault();
    const name = document.getElementById('newAdminName').value.trim();
    const email = document.getElementById('newAdminEmail').value.trim().toLowerCase();
    const password = document.getElementById('newAdminPassword').value.trim();

    if (managerEmails.map(emailKey).includes(email)) {
        alert("This email already has manager access!");
        return;
    }
    if (registeredUsers.some(u => emailKey(u.email) === email)) {
        alert("An account with this email already exists. Use a new email for the new admin.");
        return;
    }
    if (password.length < 6) {
        alert("The admin password must be at least 6 characters.");
        return;
    }

    managerEmails.push(email);
    registeredUsers.push({
        firstName: "Manager", lastName: name, displayName: name, location: "Manila",
        dateCreated: new Date().toISOString().split('T')[0], email, password, isSeller: true, shopName: `${name}'s Hub`
    });

    closeModal('addAdminModal');
    alert(`Manager/Moderator access successfully granted to ${email}!`);
    renderAdminDashboard();
}

function logoutUser() {
    if (currentUser && managerEmails.includes(currentUser.email)) {
        onlineManagers = onlineManagers.filter(e => e !== currentUser.email);
    }
    currentUser = null;
    activeSidebarTab = "shop";
    isAdminStoreView = false;
    const openCartDrawer = document.getElementById('cartDrawer');
    if (openCartDrawer) openCartDrawer.classList.remove('open');

    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');
    if (loginEmail) loginEmail.value = '';
    if (loginPassword) loginPassword.value = '';

    const adminReturn = document.getElementById('adminStoreReturnBtn');
    if (adminReturn) adminReturn.style.display = 'none';

    updateAuthUI();
    resetStore();
    alert("You have been signed out.");
}

function toggleAdminStoreView() {
    if (!currentUser || !managerEmails.includes(currentUser.email)) return;
    isAdminStoreView = !isAdminStoreView;
    const storefrontView = document.getElementById('storefrontView');
    const adminDashboardView = document.getElementById('adminDashboardView');
    const categoryNav = document.getElementById('categoryNav');
    const searchWrap = document.getElementById('searchContainerWrapper');
    const cartBtn = document.getElementById('cartToggleBtn');
    const switchBtn = document.getElementById('adminStoreSwitchBtn');
    const headerName = document.getElementById('headerUserName');
    let floatingReturn = document.getElementById('adminStoreReturnBtn');
    if (!floatingReturn) {
        floatingReturn = document.createElement('button');
        floatingReturn.id = 'adminStoreReturnBtn';
        floatingReturn.type = 'button';
        floatingReturn.textContent = '← Back to Admin Dashboard';
        floatingReturn.className = 'floating-return-btn';
        floatingReturn.onclick = toggleAdminStoreView;
        document.body.appendChild(floatingReturn);
    }
    floatingReturn.style.display = isAdminStoreView ? 'block' : 'none';
    storefrontView.style.display = isAdminStoreView ? 'block' : 'none';
    adminDashboardView.style.display = isAdminStoreView ? 'none' : 'block';
    categoryNav.style.display = isAdminStoreView ? 'flex' : 'none';
    searchWrap.style.display = isAdminStoreView ? 'flex' : 'none';
    cartBtn.style.display = 'none';
    if (switchBtn) switchBtn.textContent = isAdminStoreView ? 'Back to Admin Dashboard' : 'View Main Store';
    if (headerName) headerName.textContent = isAdminStoreView ? 'Admin · Store Preview (View Only)' : `Welcome, Manager ${currentUser.displayName || currentUser.firstName}`;
    const sellerBtn = document.getElementById('sellerCardBtn');
    const driverBtn = document.getElementById('deliveryCardBtn');
    if (sellerBtn) sellerBtn.style.display = 'none';
    if (driverBtn) driverBtn.style.display = 'none';
    if (isAdminStoreView) {
        activeSidebarTab = 'shop';
        resetStore();
    } else {
        updateAuthUI();
    }
}

function updateAuthUI() {
    const authButtons = document.getElementById('authHeaderButtons');
    const userProfileHeader = document.getElementById('userProfileHeader');
    const headerUserName = document.getElementById('headerUserName');
    const utilityMessage = document.getElementById('utilityMessage');
    const storefrontView = document.getElementById('storefrontView');
    const adminDashboardView = document.getElementById('adminDashboardView');
    const categoryNav = document.getElementById('categoryNav');
    const searchContainerWrapper = document.getElementById('searchContainerWrapper');
    const cartToggleBtn = document.getElementById('cartToggleBtn');
    const aiForecastNavBtn = document.getElementById('aiForecastNavBtn');
    const sidebarTabSwitcher = document.getElementById('sidebarTabSwitcher');
    const customerHubContent = document.getElementById('customerHubContent');
    const sellerDashboardHubContent = document.getElementById('sellerDashboardHubContent');
    const accountSettingsUIContent = document.getElementById('accountSettingsUIContent');
    const settingsModifyLink = document.getElementById('settingsModifyLink');

 if (aiForecastNavBtn) {
    if (currentUser) {
        aiForecastNavBtn.classList.remove('is-hidden');
        aiForecastNavBtn.style.display = 'inline-block';
        document.body.classList.add('is-logged-in');
    } else {
        aiForecastNavBtn.classList.add('is-hidden');
        aiForecastNavBtn.style.display = 'none';
        document.body.classList.remove('is-logged-in');
    }
}

    if (currentUser) {
        authButtons.style.display = 'none';
        userProfileHeader.style.display = 'flex';
        if (settingsModifyLink) settingsModifyLink.style.display = 'inline';
        const displayLabel = currentUser.displayName || currentUser.firstName;
        const headerAvatar = document.getElementById('headerProfilePicture');
        setProfileImage(headerAvatar, currentUser.profilePicture || '');
        if (headerAvatar) headerAvatar.style.display = 'inline-block';

        if (accountSettingsUIContent) accountSettingsUIContent.innerHTML = `
            <div>Display: <strong class="text-sky">${escapeHTML(displayLabel)}</strong></div>
            <div>Location: <strong class="text-sky">${escapeHTML(currentUser.location || 'Manila')}</strong></div>
            <div>Created: <strong class="text-sky">${currentUser.dateCreated || '2026-01-01'}</strong></div>
        `;

        if (managerEmails.includes(currentUser.email)) {
            headerUserName.textContent = `Welcome, Manager ${displayLabel}`;
            utilityMessage.textContent = `Manager Dashboard Active – Logged in as ${displayLabel} (${currentUser.email})`;
            document.getElementById('adminEmailBadge').textContent = currentUser.email;
            if (!onlineManagers.includes(currentUser.email)) onlineManagers.push(currentUser.email);

            isAdminStoreView = false;
            storefrontView.style.display = 'none';
            adminDashboardView.style.display = 'block';
            categoryNav.style.display = 'none';
            searchContainerWrapper.style.display = 'none';
            cartToggleBtn.style.display = 'none';
            const adminCartDrawer = document.getElementById('cartDrawer');
            if (adminCartDrawer) adminCartDrawer.classList.remove('open');
            const adminSwitch = document.getElementById('adminStoreSwitchBtn');
            if (adminSwitch) adminSwitch.textContent = 'View Main Store';
            const adminReturn = document.getElementById('adminStoreReturnBtn');
            if (adminReturn) adminReturn.style.display = 'none';
            const sellerCard = document.getElementById('sellerSidebarCard');
            const deliveryCard = document.getElementById('deliverySidebarCard');
            const tabSwitcher = document.getElementById('sidebarTabSwitcher');
            if (sellerCard) sellerCard.style.display = 'none';
            if (deliveryCard) deliveryCard.style.display = 'none';
            if (tabSwitcher) tabSwitcher.style.display = 'none';
            activeSidebarTab = 'shop';
            const sellerApply = document.getElementById('sellerCardBtn');
            const deliveryApply = document.getElementById('deliveryCardBtn');
            if (sellerApply) sellerApply.style.display = 'none';
            if (deliveryApply) deliveryApply.style.display = 'none';
            renderAdminDashboard();
        } else {
            const sellerCard = document.getElementById('sellerSidebarCard');
            const deliveryCard = document.getElementById('deliverySidebarCard');
            if (sellerCard) sellerCard.style.display = '';
            if (deliveryCard) deliveryCard.style.display = '';
            const sellerApply = document.getElementById('sellerCardBtn');
            const deliveryApply = document.getElementById('deliveryCardBtn');
            if (sellerApply) sellerApply.style.display = '';
            if (deliveryApply) deliveryApply.style.display = '';
            headerUserName.textContent = `Hello, ${displayLabel}`;
            utilityMessage.textContent = `Welcome back, ${displayLabel}! You are logged in and ready to shop.`;
            storefrontView.style.display = 'block';
            adminDashboardView.style.display = 'none';
            categoryNav.style.display = 'flex';
            searchContainerWrapper.style.display = 'flex';
            cartToggleBtn.style.display = 'flex';
        }

        const myShopTab = document.getElementById('swTabMyShop');
        const deliveryTab = document.getElementById('swTabDelivery');
        const deliveryHub = document.getElementById('deliveryDashboardHubContent');
        const deliveryCardBtn = document.getElementById('deliveryCardBtn');
        const deliveryCardHeading = document.getElementById('deliveryCardHeading');

        if (currentUser.isSeller || currentUser.isDelivery) {
            sidebarTabSwitcher.style.display = 'flex';
            if (myShopTab) myShopTab.style.display = currentUser.isSeller ? 'block' : 'none';
            if (deliveryTab) deliveryTab.style.display = currentUser.isDelivery ? 'block' : 'none';
        } else {
            sidebarTabSwitcher.style.display = 'none';
            customerHubContent.style.display = 'block';
            sellerDashboardHubContent.style.display = 'none';
            if (deliveryHub) deliveryHub.style.display = 'none';
        }

        const sellerCardBtn = document.getElementById('sellerCardBtn');
        const sellerCardHeading = document.getElementById('sellerCardHeading');
        const sellerCardDesc = document.getElementById('sellerCardDesc');
        if (sellerCardBtn && sellerCardHeading) {
            if (currentUser.isSeller) {
                sellerCardHeading.textContent = '🏪 Your Shop';
                if (sellerCardDesc) sellerCardDesc.textContent = 'You are already a verified seller. Manage your products from Your Shop.';
                sellerCardBtn.textContent = 'Open Your Shop';
                sellerCardBtn.onclick = function() { switchSidebarTab('myshop'); };
            } else {
                sellerCardHeading.textContent = '🏪 Become a Seller';
                if (sellerCardDesc) sellerCardDesc.textContent = 'Start listing your own products on BestDeBest and reach thousands of daily buyers!';
                sellerCardBtn.textContent = 'Apply as Seller';
                sellerCardBtn.onclick = function() { handleSellerButtonClick(); };
            }
        }
        if (deliveryCardBtn && deliveryCardHeading) {
            if (currentUser.isDelivery) {
                deliveryCardHeading.textContent = '🚚 Delivery Rider';
                deliveryCardBtn.textContent = 'Open Delivery Hub';
                deliveryCardBtn.onclick = function() { switchSidebarTab('delivery'); };
            } else {
                deliveryCardHeading.textContent = '🚚 Apply as Delivery';
                deliveryCardBtn.textContent = 'Apply as Delivery';
                deliveryCardBtn.onclick = function() { handleDeliveryButtonClick(); };
            }
        }
        updateToRateBadge();
    } else {
        authButtons.style.display = 'flex';
        userProfileHeader.style.display = 'none';
        const headerAvatar = document.getElementById('headerProfilePicture');
        if (headerAvatar) headerAvatar.style.display = 'none';
        if (settingsModifyLink) settingsModifyLink.style.display = 'none';
        utilityMessage.textContent = 'Sign Up or Log in to purchase products from the store';
        storefrontView.style.display = 'block';
        adminDashboardView.style.display = 'none';
        categoryNav.style.display = 'flex';
        searchContainerWrapper.style.display = 'flex';
        cartToggleBtn.style.display = 'flex';
        sidebarTabSwitcher.style.display = 'none';
        customerHubContent.style.display = 'block';
        sellerDashboardHubContent.style.display = 'none';
        const deliveryHubOff = document.getElementById('deliveryDashboardHubContent');
        if (deliveryHubOff) deliveryHubOff.style.display = 'none';

        const sellerCardOff = document.getElementById('sellerSidebarCard');
        const deliveryCardOff = document.getElementById('deliverySidebarCard');
        if (sellerCardOff) sellerCardOff.style.display = '';
        if (deliveryCardOff) deliveryCardOff.style.display = '';
        const sellerApplyOff = document.getElementById('sellerCardBtn');
        const deliveryApplyOff = document.getElementById('deliveryCardBtn');
        if (sellerApplyOff) {
            sellerApplyOff.style.display = '';
            sellerApplyOff.textContent = 'Apply as Seller';
            sellerApplyOff.onclick = function() { handleSellerButtonClick(); };
        }
        if (deliveryApplyOff) {
            deliveryApplyOff.style.display = '';
            deliveryApplyOff.textContent = 'Apply as Delivery';
            deliveryApplyOff.onclick = function() { handleDeliveryButtonClick(); };
        }
        const sellerCardHeadingOff = document.getElementById('sellerCardHeading');
        const sellerCardDescOff = document.getElementById('sellerCardDesc');
        const deliveryCardHeadingOff = document.getElementById('deliveryCardHeading');
        if (sellerCardHeadingOff) sellerCardHeadingOff.textContent = '🏪 Become a Seller';
        if (sellerCardDescOff) sellerCardDescOff.textContent = 'Start listing your own products on BestDeBest and reach thousands of daily buyers!';
        if (deliveryCardHeadingOff) deliveryCardHeadingOff.textContent = '🚚 Apply as Delivery';

        if (accountSettingsUIContent) accountSettingsUIContent.innerHTML = `<span class="text-red fw-bold">Not Logged In</span>`;
    }
}

function renderAdminDashboard() {
    document.getElementById('adminMonthRevenue').textContent = `₱${totalStoreRevenue.toLocaleString('en-US', {minimumFractionDigits: 2})}`;
    const salesList = document.getElementById('adminRecentSalesList');
    if (salesHistory.length === 0) {
        salesList.innerHTML = `<p class="text-muted fs-13">No recent transactions recorded yet.</p>`;
    } else {
        salesList.innerHTML = "";
        [...salesHistory].reverse().forEach(sale => {
            salesList.innerHTML += `
                <div class="p-8-0 bb-1f2937 fs-12">
                    <div class="d-flex jc-between ai-center">
                        <strong class="text-sky">${escapeHTML(sale.buyer)}</strong>
                        <span class="text-green fw-bold">₱${sale.total.toLocaleString('en-US', {minimumFractionDigits: 2})}</span>
                    </div>
                    <div class="text-soft m-3-0">${escapeHTML(sale.itemsSummary)}</div>
                    <div class="text-dim fs-11">${sale.time}</div>
                </div>
            `;
        });
    }

    let adminOnlineBox = document.getElementById('adminOnlineList');
    if (!adminOnlineBox) {
        const grid = document.querySelector('.admin-grid-layout');
        if (grid) {
            const card = document.createElement('div');
            card.className = 'admin-card';
            card.innerHTML = `<h3>Admins Online</h3><div id="adminOnlineList" class="mh-180 oy-auto fs-12"></div>`;
            grid.appendChild(card);
            adminOnlineBox = document.getElementById('adminOnlineList');
        }
    }
    if (adminOnlineBox) {
        adminOnlineBox.innerHTML = "";
        managerEmails.forEach(email => {
            const isOnline = onlineManagers.includes(email);
            const user = registeredUsers.find(u => u.email === email);
            const name = user ? (user.displayName || user.firstName) : email;
            adminOnlineBox.innerHTML += `
                <div class="d-flex jc-between ai-center p-6-0 bb-1f2937">
                    <span><strong>${escapeHTML(name)}</strong><br><span class="text-muted fs-11">${escapeHTML(email)}</span></span>
                    <span class="fw-bold fs-11 ${isOnline ? 'text-green' : 'text-dim'}">${isOnline ? '● Online' : '○ Offline'}</span>
                </div>
            `;
        });
    }

    const supContainer = document.getElementById('adminSuppliersList');
    supContainer.innerHTML = "";
    suppliersData.forEach(s => {
        supContainer.innerHTML += `<div class="p-6-0 bb-1f2937"><strong>${escapeHTML(s.name)}</strong> (${escapeHTML(s.contact)})<br><span class="text-muted">${escapeHTML(s.email)} | ${escapeHTML(s.phone)} | ${escapeHTML(s.address)}</span></div>`;
    });

    const whContainer = document.getElementById('adminWarehousesList');
    whContainer.innerHTML = "";
    warehousesData.forEach(w => {
        whContainer.innerHTML += `<div class="p-6-0 bb-1f2937"><strong>${escapeHTML(w.name)}</strong> - ${escapeHTML(w.location)}<br><span class="text-muted">Manager: ${escapeHTML(w.manager)} | Capacity: ${escapeHTML(w.capacity)}</span></div>`;
    });

    const shipContainer = document.getElementById('adminShippingList');
    shipContainer.innerHTML = "";
    shippingAddressesData.forEach(sh => {
        shipContainer.innerHTML += `<div class="p-6-0 bb-1f2937"><strong>${escapeHTML(sh.customer)}</strong><br><span class="text-muted">${escapeHTML(sh.line1)}, ${escapeHTML(sh.city)}, ${escapeHTML(sh.state)} ${escapeHTML(sh.postal)}</span></div>`;
    });

    renderAdminStockPanel();

    updateManagerBellBadge();

    let concernsBox = document.getElementById('adminConcernsList');
    if (!concernsBox) {
        const grid = document.querySelector('.admin-grid-layout');
        if (grid) {
            const card = document.createElement('div');
            card.className = 'admin-card';
            card.innerHTML = `<h3>Raised Concerns / Appeals</h3><div id="adminConcernsList" class="mh-220 oy-auto fs-12"></div>`;
            grid.appendChild(card);
            concernsBox = document.getElementById('adminConcernsList');
        }
    }
    if (concernsBox) {
        if (raisedConcerns.length === 0) {
            concernsBox.innerHTML = `<p class="text-muted">No raised concerns yet.</p>`;
        } else {
            concernsBox.innerHTML = "";
            raisedConcerns.forEach((c, i) => {
                const statusColor = c.status === 'pending' ? '#fbbf24' : (c.status === 'resolved' ? '#22c55e' : '#94a3b8');
                concernsBox.innerHTML += `
                    <div class="p-8-0 bb-1f2937">
                        <div class="d-flex jc-between">
                            <strong class="text-sky">${escapeHTML(c.productName)}</strong>
                            <span class="fs-11 fw-bold" style="color:${statusColor};">${(c.status || 'pending').toUpperCase()}</span>
                        </div>
                        <div class="text-soft m-3-0">${escapeHTML(c.reason)}</div>
                        <div class="text-dim fs-10">Seller: ${escapeHTML(c.seller)} · ${c.time}</div>
                        ${c.status === 'pending' ? `<button onclick="resolveConcern(${i})" class="bg-green text-white bd-none p-3-8 r-4 fs-10 cur-pointer mt-4">Mark Resolved</button>` : ''}
                    </div>
                `;
            });
        }
    }
}

function updateManagerBellBadge() {
    const badge = document.getElementById('managerBellBadge');
    if (!badge) return;
    const unread = managerNotifsRead ? 0 : managerStockAlerts.length;
    if (unread > 0) {
        badge.textContent = String(unread);
        badge.style.display = 'flex';
    } else {
        badge.textContent = '0';
        badge.style.display = 'none';
    }
}

document.addEventListener('click', e => {
    const dropdown = document.getElementById('managerNotifDropdown');
    if (!dropdown || dropdown.style.display !== 'block') return;
    if (e.target.closest('#managerNotifDropdown') || e.target.closest('.admin-bell')) return;
    dropdown.style.display = 'none';
});

function resolveConcern(index) {
    if (raisedConcerns[index]) {
        raisedConcerns[index].status = 'resolved';
        renderAdminDashboard();
    }
}

function toggleManagerNotifDropdown() {
    const dropdown = document.getElementById('managerNotifDropdown');
    if (!dropdown) return;
    const opening = dropdown.style.display !== 'block';
    dropdown.style.display = opening ? 'block' : 'none';

    const notifList = document.getElementById('managerNotifList');
    if (!notifList) return;
    if (managerStockAlerts.length === 0) {
        notifList.innerHTML = `<p class="text-muted">No stock alerts.</p>`;
    } else {
        notifList.innerHTML = "";
        managerStockAlerts.forEach(alertText => {
            notifList.innerHTML += `<div class="p-6-0 bb-374151 text-red">${escapeHTML(alertText)}</div>`;
        });
    }

    if (opening) {
        managerNotifsRead = true;
        updateManagerBellBadge();
    }
}

function showCartToast(prodName) {
    const toast = document.getElementById('cartToast');
    if (!toast) return;
    clearTimeout(showPurchaseSuccessToast._t);
    if (!document.getElementById('toastProductName')) {
        toast.innerHTML = `🛒 Added <strong id="toastProductName">Item</strong> to your cart!`;
        toast.style.background = '#0099ff';
    }
    document.getElementById('toastProductName').textContent = prodName;
    clearTimeout(showCartToast._t);
    toast.style.display = 'none';
    void toast.offsetWidth; 
    toast.style.display = 'block';
    showCartToast._t = setTimeout(() => { toast.style.display = 'none'; }, 2500);
}

function toggleCartDrawer() {
    document.getElementById('cartDrawer').classList.toggle('open');
}

function addToCart(event, productId, qty) {
    const amount = Math.max(1, Math.floor(Number(qty)) || 1);
    if (currentUser && managerEmails.includes(currentUser.email)) {
        if (event && event.stopPropagation) event.stopPropagation();
        alert("Admin store preview is view-only. You cannot add items to the cart.");
        return;
    }
    if (event && event.stopPropagation) event.stopPropagation();
    const productMatch = products.find(p => p.id === productId);
    if (!productMatch || productMatch.stock <= 0) {
        alert("Sorry, this item is out of stock!");
        return;
    }
    if (productMatch.adult && !isAdultUser(currentUser)) {
        alert(adultBlockMessage(currentUser));
        return;
    }
    if (currentUser && currentUser.isSeller && sellerOwnsProduct(productMatch, currentUser)) {
        alert("You can\u2019t buy your own item, but you can buy from other sellers.");
        return;
    }

    const existing = cart.find(item => item.id === productId);
    const currentQty = existing ? existing.quantity : 0;
    if (currentQty + amount > productMatch.stock) {
        const canAdd = Math.max(0, productMatch.stock - currentQty);
        alert(`Only ${productMatch.stock} unit(s) available for "${productMatch.name}"${currentQty ? ` (you already have ${currentQty} in your cart)` : ''}. You can add up to ${canAdd} more.`);
        return;
    }

    if (existing) {
        existing.quantity += amount;
    } else {
        cart.push({ id: productMatch.id, name: productMatch.name, price: productMatch.price, quantity: amount });
    }

    showCartToast(productMatch.name);
    updateCartUI();
    return true;
}

// How many more of this product can still be added (stock minus what is already in the cart)
function getModalQtyMax() {
    if (!activeModalProduct) return 1;
    const inCart = (cart.find(i => i.id === activeModalProduct.id) || {}).quantity || 0;
    return Math.max(0, activeModalProduct.stock - inCart);
}

// Auto-correct the typed quantity: never above the available stock, never below 1
function fixModalQty(isFinal) {
    const input = document.getElementById('modalQtyInput');
    const note = document.getElementById('modalQtyNote');
    if (!input || !activeModalProduct) return;
    const max = getModalQtyMax();
    const raw = input.value;
    if (raw === '' && !isFinal) return; // let the person clear the box while typing
    let qty = Math.floor(Number(raw));
    let message = '';
    if (!Number.isFinite(qty) || qty < 1) {
        qty = 1;
    } else if (max > 0 && qty > max) {
        qty = max;
        message = `Only ${max} available${max < activeModalProduct.stock ? ' (the rest is already in your cart)' : ''}.`;
    }
    if (max <= 0) message = 'You already have all the available stock in your cart.';
    if (String(qty) !== raw) input.value = qty;
    if (note) note.textContent = message;
}

function addCurrentModalItemToCart() {
    if (currentUser && managerEmails.includes(currentUser.email)) {
        alert("Admin store preview is view-only. You cannot buy items.");
        return;
    }
    if (activeModalProduct) {
        if (activeModalProduct.stock <= 0) {
            alert("This item is out of stock!");
            return;
        }
        const qtyInput = document.getElementById('modalQtyInput');
        fixModalQty(true);
        const qty = qtyInput ? Number(qtyInput.value) : 1;
        if (addToCart(new Event('click'), activeModalProduct.id, qty) !== true) return;
        closeModal('productModal');
        toggleCartDrawer();
    }
}

function changeQuantity(index, amount) {
    if (amount > 0) {
        const productMatch = products.find(p => p.id === cart[index].id);
        if (productMatch && cart[index].quantity + amount > productMatch.stock) {
            alert(`Only ${productMatch.stock} unit(s) available. You can't add more.`);
            return;
        }
    }
    cart[index].quantity += amount;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    updateCartUI();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function updateCartUI() {
    const container = document.getElementById('cartItemsContainer');
    const countEl = document.getElementById('cartCount');
    const totalEl = document.getElementById('cartTotalPrice');

    let totalCount = 0;
    let totalPrice = 0;

    if (cart.length === 0) {
        container.innerHTML = `<p class='text-muted fs-13 ta-center mt-20'>Your cart is empty</p>`;
    } else {
        container.innerHTML = "";
        cart.forEach((item, index) => {
            totalCount += item.quantity;
            totalPrice += item.price * item.quantity;

            const div = document.createElement('div');
            div.className = 'cart-item';
            div.innerHTML = `
                <div>
                    <div class="fw-bold">${escapeHTML(item.name)}</div>
                    <div class="text-sky">${formatPeso(item.price)} x ${item.quantity}</div>
                    <div class="cart-item-controls">
                        <button onclick="changeQuantity(${index}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="changeQuantity(${index}, 1)">+</button>
                    </div>
                </div>
                <button onclick="removeFromCart(${index})" class="bg-red text-white bd-none p-4-8 r-4 cur-pointer">X</button>
            `;
            container.appendChild(div);
        });
    }

    countEl.textContent = totalCount;
    totalEl.textContent = `₱${totalPrice.toLocaleString('en-US', {minimumFractionDigits: 2})}`;
}

function alertCheckout() {
    if (!currentUser) {
        alert("You must be logged in to place an order! Please sign up or log in.");
        openModal('signupModal');
        return;
    }

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    for (const cartItem of cart) {
        const productMatch = products.find(p => p.id === cartItem.id);
        if (!productMatch || productMatch.stock < cartItem.quantity) {
            const avail = productMatch ? productMatch.stock : 0;
            alert(`Cannot checkout: "${cartItem.name}" only has ${avail} unit(s) left. Please reduce quantity.`);
            return;
        }
        if (productMatch.adult && !isAdultUser(currentUser)) {
            alert(`"${cartItem.name}" is an 18+ item and your account is not verified as 18 or older. Please remove it from your cart.`);
            return;
        }
        if (currentUser && currentUser.isSeller && sellerOwnsProduct(productMatch, currentUser)) {
            alert(`You cannot checkout your own product: "${cartItem.name}". Remove it from your cart first.`);
            return;
        }
    }

    const buyerName = currentUser.displayName || `${currentUser.firstName} ${currentUser.lastName}`;
    let orderTotal = 0;
    let itemsSummaryList = [];
    const orderSellers = [];
    const orderItems = [];
    const sellerBreakdownMap = new Map();

    cart.forEach(cartItem => {
        orderTotal += cartItem.price * cartItem.quantity;
        itemsSummaryList.push(`${cartItem.quantity}x ${cartItem.name}`);

        const productMatch = products.find(p => p.id === cartItem.id);
        const sellerName = productMatch ? (productMatch.sellerName || 'BestDeBest Store') : 'BestDeBest Store';
        const sellerEmail = productMatch ? (productMatch.sellerEmail || ADMIN_SELLER_EMAIL) : ADMIN_SELLER_EMAIL;
        orderItems.push({
            id: cartItem.id,
            name: cartItem.name,
            quantity: cartItem.quantity,
            price: cartItem.price,
            sellerName,
            sellerEmail
        });

        if (productMatch) {
            productMatch.sold += cartItem.quantity;
            productMatch.stock = Math.max(0, productMatch.stock - cartItem.quantity);

            if (productMatch.stock === 0) {
                pushManagerAlert(`Alert: "${productMatch.name}" is now OUT OF STOCK!`);
            } else if (productMatch.stock < LOW_STOCK_LEVEL) {
                pushManagerAlert(`Low stock: "${productMatch.name}" has only ${productMatch.stock} unit(s) left.`);
            }
        }

        const sellerKey = sellerEmail ? `email:${sellerEmail.toLowerCase()}` : `name:${sellerName}`;
        if (!sellerBreakdownMap.has(sellerKey)) {
            sellerBreakdownMap.set(sellerKey, { sellerName, sellerEmail, amount: 0, items: [] });
        }
        const sellerEntry = sellerBreakdownMap.get(sellerKey);
        sellerEntry.amount += cartItem.price * cartItem.quantity;
        sellerEntry.items.push(`${cartItem.quantity}x ${cartItem.name}`);
        if (!orderSellers.includes(sellerName)) orderSellers.push(sellerName);
    });
    const sellerBreakdown = Array.from(sellerBreakdownMap.values());

    const usedVoucher = getSelectedVoucher(currentUser);
    const pricing = getCartPricing(orderTotal, usedVoucher);
    const discountAmount = pricing.discount;
    orderTotal = pricing.total; // items - discount + delivery fee
    if (usedVoucher) {
        usedVoucher.used = true;
        currentUser.selectedVoucherId = null;
    }

    totalStoreRevenue += orderTotal;
    salesHistory.push({
        ts: Date.now(),
        buyer: buyerName,
        itemsSummary: itemsSummaryList.join(', '),
        total: orderTotal,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });

    let orderId;
    do { orderId = `ORD-${Math.floor(1000 + Math.random() * 9000)}`; }
    while (customerOrders.some(o => o.id === orderId));
    salesHistory[salesHistory.length - 1].orderId = orderId;
    customerOrders.unshift({
        id: orderId,
        items: itemsSummaryList.join(', '),
        orderItems: orderItems,
        total: orderTotal,
        status: "to_confirm",
        date: new Date().toISOString().split('T')[0],
        sellers: orderSellers,
        sellerBreakdown: sellerBreakdown,
        buyer: buyerName,
        buyerEmail: currentUser.email,
        discount: discountAmount,
        deliveryFee: pricing.deliveryFee,
        deliveryFeeWaived: pricing.deliveryWaived,
        voucherId: usedVoucher ? usedVoucher.id : null,
        voucherLabel: usedVoucher ? usedVoucher.label : '',
        dropoffAddress: currentUser.location || 'Manila',
        pickupAddress: (warehousesData[0] ? `${warehousesData[0].name}, ${warehousesData[0].location}` : 'Main Warehouse Manila')
    });

    sellerBreakdown.forEach(sellerEntry => {
        sellerNotifications.push({
            productName: `Order ${orderId}`,
            reason: `New order from ${buyerName} – please confirm: ${sellerEntry.items.join(', ')}`,
            sellerName: sellerEntry.sellerName,
            sellerEmail: sellerEntry.sellerEmail,
            amount: sellerEntry.amount,
            orderId: orderId,
            type: "order_confirm",
            read: false
        });
    });
    updateSellerHubMetrics();

    showPurchaseSuccessToast(buyerName, orderTotal);
    if (discountAmount > 0) alert(`🎁 Reward applied: ${usedVoucher.label} saved you ${formatPeso(discountAmount)}!`);
    else if (pricing.isFreeShip) alert(`🚚 Free delivery applied: you saved ${formatPeso(pricing.deliveryWaived)} on delivery!`);

    cart = [];
    updateCartUI();
    toggleCartDrawer();
    applySortingAndFilters();
}

function confirmSellerOrder(orderId) {
    const order = customerOrders.find(o => o.id === orderId);
    if (order && order.status === "to_confirm") {
        order.status = "to_pay";
        sellerNotifications = sellerNotifications.filter(n => !(n.orderId === orderId && n.type === "order_confirm"));
        alert(`Order ${orderId} confirmed! Buyer can now choose a payment method.`);
        updateSellerHubMetrics();
        if (document.getElementById('purchasesPanel').classList.contains('open')) {
            renderPurchasesOrdersList();
        }
    }
}

function declineSellerOrder(orderId) {
    const order = customerOrders.find(o => o.id === orderId);
    if (!order || order.status !== "to_confirm") return;
    
    if (order.orderItems && order.orderItems.length) {
        order.orderItems.forEach(item => {
            const p = products.find(pr => pr.id === item.id);
            if (p) {
                p.stock += item.quantity;
                p.sold = Math.max(0, p.sold - item.quantity);
            }
        });
    }
    totalStoreRevenue = Math.max(0, totalStoreRevenue - (order.total || 0));
    order.status = "declined";
    sellerNotifications = sellerNotifications.filter(n => !(n.orderId === orderId && n.type === "order_confirm"));
    alert(`Order ${orderId} declined. Stock has been restored.`);
    updateSellerHubMetrics();
    if (document.getElementById('purchasesPanel').classList.contains('open')) {
        renderPurchasesOrdersList();
    }
    applySortingAndFilters();
}

function handleDeliveryButtonClick() {
    if (currentUser && managerEmails.includes(currentUser.email)) {
        alert("Admin accounts cannot apply as a delivery rider.");
        return;
    }
    if (!currentUser) {
        alert("Please Sign Up or Log In first before becoming a delivery rider!");
        openModal('loginModal');
        return;
    }
    if (currentUser.isDelivery) {
        switchSidebarTab('delivery');
        return;
    }
    currentUser.isDelivery = true;
    updateAuthUI();
    alert(`Congratulations ${currentUser.displayName}! You are now a delivery rider.`);
    switchSidebarTab('delivery');
}

function updateDeliveryHub() {
    const list = document.getElementById('deliveryOrdersList');
    if (!list) return;

    const riderName = currentUser && (currentUser.displayName || currentUser.firstName);
    const available = customerOrders.filter(o => o.status === 'to_ship' && !o.deliveryBy && !isOwnPurchase(o));
    const allMine = customerOrders.filter(o => riderName && o.deliveryBy === riderName && o.status !== 'declined');
    const myJobs = allMine.filter(o => o.deliveryStage !== 'received');
    const completedJobs = allMine.filter(o => o.deliveryStage === 'received');

    renderDeliveryStats(available.length, myJobs.length, completedJobs);

    if (available.length === 0 && myJobs.length === 0 && completedJobs.length === 0) {
        list.innerHTML = `<p class="text-muted">No orders available yet. New seller-confirmed orders will show up here.</p>`;
        return;
    }

    list.innerHTML = "";
    if (available.length > 0) {
        list.innerHTML += `<div class="text-amber fw-bold mb-6">Available (ready for pickup)</div>`;
        available.forEach(order => {
            list.innerHTML += `
                <div class="p-8-0 bb-374151">
                    <div class="fw-bold text-sky">${order.id}</div>
                    <div class="text-soft">${escapeHTML(order.items)}</div>
                    <div class="text-muted">Buyer: ${escapeHTML(order.buyer || '-')} | ${formatPeso(order.total)}</div>
                    <div class="text-muted">Payment: ${escapeHTML(order.paymentMethod || '-')}</div>
                    <div class="text-muted mt-2">📦 Pickup: ${escapeHTML(order.pickupAddress || 'Main Warehouse')}</div>
                    <div class="text-muted">📍 Drop-off: ${escapeHTML(order.dropoffAddress || '-')}</div>
                    <button onclick="acceptDeliveryOrder('${order.id}')" class="bg-orange text-white bd-none p-4-10 r-4 fs-11 cur-pointer mt-4">Accept Delivery</button>
                </div>
            `;
        });
    }
    if (myJobs.length > 0) {
        list.innerHTML += `<div class="text-green fw-bold m-10-0-6">My Deliveries</div>`;
        myJobs.forEach(order => {
            const stage = order.deliveryStage || 'waiting_seller';
            let stageBtns = '';
            if (stage === 'waiting_seller') {
                stageBtns = `<div class="text-amber fs-11 mt-4">⏳ Waiting for seller approval — you may cancel while waiting</div>`;
            } else if (stage === 'accepted') {
                stageBtns = `<button onclick="deliveredDeliveryOrder('${order.id}')" class="bg-green text-white bd-none p-4-10 r-4 fs-11 cur-pointer mt-4">✓ Delivered</button>`;
            } else if (stage === 'picked_up') {
                stageBtns = `<div class="text-amber fs-11 mt-4">Picked up — on the way</div>
                    <button onclick="dropoffDeliveryOrder('${order.id}')" class="bg-green text-white bd-none p-4-10 r-4 fs-11 cur-pointer mt-4">📍 Drop Off Item</button>`;
            } else if (stage === 'dropped_off') {
                stageBtns = `<div class="text-green fs-11 mt-4">✓ Delivered — waiting for buyer to confirm receipt</div>`;
            }
            if (stage === 'waiting_seller' || stage === 'accepted') {
                stageBtns += ` <button onclick="cancelDeliveryOrder('${order.id}')" class="bg-red text-white bd-none p-4-10 r-4 fs-11 cur-pointer mt-4">Cancel Delivery</button>`;
            }
            stageBtns += ` <button onclick="openOrderChat('${order.id}')" class="bg-indigo text-white bd-none p-4-10 r-4 fs-11 cur-pointer mt-4">💬 Chat</button>`;

            list.innerHTML += `
                <div class="p-8-0 bb-374151">
                    <div class="fw-bold text-sky">${order.id} — ${(order.deliveryStage || 'accepted').replace('_',' ').toUpperCase()}</div>
                    <div class="text-soft">${escapeHTML(order.items)}</div>
                    <div class="text-muted">Buyer: ${escapeHTML(order.buyer || '-')} | ${formatPeso(order.total)}</div>
                    <div class="text-sky mt-2">📦 Pickup: ${escapeHTML(order.pickupAddress || 'Main Warehouse')}</div>
                    <div class="text-green">📍 Drop-off: ${escapeHTML(order.dropoffAddress || '-')}</div>
                    ${stageBtns}
                </div>
            `;
        });
    }
    if (completedJobs.length > 0) {
        list.innerHTML += `<div class="text-violet fw-bold m-10-0-6">Completed Deliveries (${completedJobs.length})</div>`;
        completedJobs.slice().reverse().forEach(order => {
            list.innerHTML += `
                <div class="p-8-0 bb-374151 op-90">
                    <div class="fw-bold text-violet">${escapeHTML(order.id)} — ✓ DELIVERED</div>
                    <div class="text-soft">${escapeHTML(order.items)}</div>
                    <div class="text-muted">Buyer: ${escapeHTML(order.buyer || '-')} | ${formatPeso(order.total)}</div>
                    <div class="text-muted">📍 ${escapeHTML(order.dropoffAddress || '-')}</div>
                </div>
            `;
        });
    }
}

function resignAsDeliveryRider() {
    if (!currentUser || !currentUser.isDelivery) return;
    const riderName = currentUser.displayName || currentUser.firstName;
    const active = customerOrders.filter(o => o.deliveryBy === riderName && o.deliveryStage && o.deliveryStage !== 'received' && o.status !== 'declined');
    if (active.some(o => o.deliveryStage === 'picked_up' || o.deliveryStage === 'dropped_off')) {
        alert("You can't resign while you have a delivery that is picked up or waiting for the customer to confirm. Please finish it first.");
        return;
    }
    if (!confirm(active.length
        ? `Resign as a delivery rider? Your ${active.length} pending delivery request(s) will be released to other riders.`
        : "Resign as a delivery rider?")) return;
    active.forEach(order => {
        order.deliveryBy = null;
        order.deliveryByEmail = null;
        order.deliverySellerResponses = {};
        order.deliveryStage = null;
        order.status = 'to_ship';
        sellerNotifications = sellerNotifications.filter(n => !(n.orderId === order.id && n.type === 'delivery_request'));
    });
    currentUser.isDelivery = false;
    updateAuthUI();
    switchSidebarTab('shop');
    alert("You have resigned as a delivery rider.");
    if (document.getElementById('purchasesPanel').classList.contains('open')) renderPurchasesOrdersList();
}

function renderDeliveryStats(availableCount, activeCount, completedJobs) {
    const box = document.getElementById('deliveryStats');
    if (!box) return;
    const delivered = completedJobs.reduce((sum, o) => sum + Number(o.total || 0), 0);
    const card = (label, value, color) =>
        `<div class="delivery-stat"><span class="delivery-stat-value" style="color:${color};">${value}</span><span class="delivery-stat-label">${label}</span></div>`;
    box.innerHTML =
        card('Available', availableCount, '#fbbf24') +
        card('In Progress', activeCount, '#38bdf8') +
        card('Completed', completedJobs.length, '#22c55e') +
        card('Value Delivered', formatPeso(delivered), '#a78bfa') +
        (() => {
            const rs = currentUser ? getRiderRating(currentUser.email) : { count: 0, average: null };
            return `<div class="delivery-stat" style="grid-column: 1 / -1;"><span class="delivery-stat-value" style="color:#fbbf24;">${rs.count ? '⭐️ ' + rs.average.toFixed(1) + ' / 5' : 'No ratings yet'}</span><span class="delivery-stat-label">Your delivery rating${rs.count ? ` (${rs.count} review${rs.count === 1 ? '' : 's'})` : ''}</span></div>`;
        })();
}

function acceptDeliveryOrder(orderId) {
    if (!currentUser || !currentUser.isDelivery) {
        alert("You must be a delivery rider to accept orders.");
        return;
    }
    const order = customerOrders.find(o => o.id === orderId);
    if (!order || order.status !== 'to_ship' || order.deliveryBy) {
        alert("This order is no longer available.");
        updateDeliveryHub();
        return;
    }
    if (isOwnPurchase(order)) {
        alert("You can't deliver an order you placed yourself.");
        updateDeliveryHub();
        return;
    }
    order.deliveryBy = currentUser.displayName || currentUser.firstName;
    order.deliveryByEmail = currentUser.email;
    order.deliveryStage = 'waiting_seller';
    order.deliverySellerResponses = {};
    order.messages = order.messages || [];
    if (!order.pickupAddress) order.pickupAddress = warehousesData[0] ? `${warehousesData[0].name}, ${warehousesData[0].location}` : 'Main Warehouse Manila';
    if (!order.dropoffAddress) order.dropoffAddress = order.buyer ? `${order.buyer}'s address` : 'Customer address';

    const sellerEntries = Array.isArray(order.sellerBreakdown) ? order.sellerBreakdown : [];
    const uniqueSellers = new Map();
    sellerEntries.forEach(entry => {
        const key = (entry.sellerEmail || entry.sellerName || '').toLowerCase();
        if (key) uniqueSellers.set(key, entry);
    });
    if (uniqueSellers.size === 0) {
        
        order.status = 'to_receive';
        order.deliveryStage = 'accepted';
    } else {
        uniqueSellers.forEach(entry => sellerNotifications.push({
            productName: `Delivery request ${orderId}`,
            reason: `Rider ${order.deliveryBy} has accepted the delivery request. Please approve or decline this rider.`,
            sellerName: entry.sellerName,
            sellerEmail: entry.sellerEmail,
            orderId,
            riderName: order.deliveryBy,
            type: 'delivery_request',
            read: false
        }));
    }
    alert(uniqueSellers.size ? `Delivery request sent to the seller(s). Please wait for approval before pickup.` : `Accepted ${orderId}.\nPickup: ${order.pickupAddress}\nDrop-off: ${order.dropoffAddress}`);
    updateSellerHubMetrics();
    updateDeliveryHub();
    if (document.getElementById('purchasesPanel').classList.contains('open')) renderPurchasesOrdersList();
}

function respondToDeliveryRequest(orderId, accept) {
    if (!currentUser || (!currentUser.isSeller && !isManagerUser())) return;
    const order = customerOrders.find(o => o.id === orderId);
    if (!order || order.deliveryStage !== 'waiting_seller') {
        alert('This delivery request is no longer waiting for approval.');
        updateSellerHubMetrics();
        return;
    }
    const responseKey = isManagerUser() ? ADMIN_SELLER_EMAIL : currentUser.email;
    const isSellerForOrder = (order.sellerBreakdown || []).some(entry =>
        (entry.sellerEmail && responseKey && entry.sellerEmail.toLowerCase() === responseKey.toLowerCase()) ||
        (!entry.sellerEmail && (entry.sellerName === currentUser.shopName || entry.sellerName === currentUser.displayName))
    );
    if (!isSellerForOrder) {
        alert('Only a seller involved in this order can respond.');
        return;
    }
    order.deliverySellerResponses = order.deliverySellerResponses || {};
    order.deliverySellerResponses[responseKey] = accept ? 'accepted' : 'declined';
    if (!accept) {
        order.deliveryBy = null;
        order.deliveryByEmail = null;
        order.deliveryStage = null;
        order.deliverySellerResponses = {};
        order.status = 'to_ship';
        sellerNotifications = sellerNotifications.filter(n => !(n.orderId === orderId && n.type === 'delivery_request'));
        alert(`Delivery request declined. Order ${orderId} is available for another rider.`);
    } else {
        const sellers = (order.sellerBreakdown || []).filter(entry => entry.sellerEmail || entry.sellerName);
        const allAccepted = sellers.every(entry => {
            const email = entry.sellerEmail || '';
            const key = email || (registeredUsers.find(u => u.shopName === entry.sellerName || u.displayName === entry.sellerName) || {}).email || '';
            return key && order.deliverySellerResponses[key] === 'accepted';
        });
        if (allAccepted || sellers.length <= 1) {
            order.status = 'to_receive';
            order.deliveryStage = 'accepted';
            sellerNotifications = sellerNotifications.filter(n => !(n.orderId === orderId && n.type === 'delivery_request'));
            alert(`Rider approved for order ${orderId}. Delivery can proceed.`);
        } else {
            alert('Your approval is saved. Waiting for the other seller(s) to respond.');
        }
    }
    updateSellerHubMetrics();
    updateDeliveryHub();
    if (document.getElementById('purchasesPanel').classList.contains('open')) renderPurchasesOrdersList();
}

function cancelDeliveryOrder(orderId) {
    const order = customerOrders.find(o => o.id === orderId);
    if (!order || !currentUser || !currentUser.isDelivery) return;
    if (order.deliveryBy !== (currentUser.displayName || currentUser.firstName)) {
        alert("You can only cancel deliveries assigned to you.");
        return;
    }
    if (order.deliveryStage !== 'waiting_seller' && order.deliveryStage !== 'accepted') {
        alert("You can only cancel while waiting for seller approval or before pickup.");
        return;
    }
    order.deliveryBy = null;
    order.deliveryByEmail = null;
    order.deliverySellerResponses = {};
    sellerNotifications = sellerNotifications.filter(n => !(n.orderId === orderId && n.type === 'delivery_request'));
    order.deliveryStage = null;
    order.status = 'to_ship';
    alert(`Delivery for ${orderId} cancelled. Order is available for other riders.`);
    updateDeliveryHub();
    if (document.getElementById('purchasesPanel').classList.contains('open')) {
        renderPurchasesOrdersList();
    }
}

function deliveredDeliveryOrder(orderId) {
    const order = customerOrders.find(o => o.id === orderId);
    if (!order || order.deliveryStage !== 'accepted') return;
    if (!currentUser || order.deliveryBy !== (currentUser.displayName || currentUser.firstName)) {
        alert("You can only mark deliveries assigned to you.");
        return;
    }
    order.deliveryStage = 'dropped_off';
    alert(`Order ${orderId} marked as delivered. Waiting for the customer to confirm they received it.`);
    updateDeliveryHub();
    if (document.getElementById('purchasesPanel').classList.contains('open')) {
        renderPurchasesOrdersList();
    }
}

function pickupDeliveryOrder(orderId) {
    const order = customerOrders.find(o => o.id === orderId);
    if (!order || order.deliveryStage !== 'accepted') return;
    order.deliveryStage = 'picked_up';
    alert(`Order ${orderId} picked up. Deliver it to the buyer, then mark Drop Off.`);
    updateDeliveryHub();
    if (document.getElementById('purchasesPanel').classList.contains('open')) {
        renderPurchasesOrdersList();
    }
}

function dropoffDeliveryOrder(orderId) {
    const order = customerOrders.find(o => o.id === orderId);
    if (!order || order.deliveryStage !== 'picked_up') return;
    order.deliveryStage = 'dropped_off';
    alert(`Order ${orderId} dropped off. Waiting for the customer to confirm receipt.`);
    updateDeliveryHub();
    if (document.getElementById('purchasesPanel').classList.contains('open')) {
        renderPurchasesOrdersList();
    }
}

function markOrderReceived(orderId) {
    if (!currentUser) return;
    const order = customerOrders.find(o => o.id === orderId);
    if (!order || order.deliveryStage !== 'dropped_off') return;
  
    const myName = currentUser.displayName || `${currentUser.firstName} ${currentUser.lastName}`;
    if (order.buyer !== myName && order.buyerEmail !== currentUser.email) {
        alert("Only the customer who ordered can mark this as received.");
        return;
    }
    order.status = 'to_rate';
    order.deliveryStage = 'received';
    order.rateBadgeRead = false;
    alert(`Thank you! Order ${orderId} marked as received. You can rate it under To Rate.`);
    updateToRateBadge();
    renderPurchasesOrdersList();
    updateDeliveryHub();
}

let activeChatOrderId = null;

function openOrderChat(orderId) {
    const order = customerOrders.find(o => o.id === orderId);
    if (!order) return;
    activeChatOrderId = orderId;
    document.getElementById('chatOrderLabel').textContent = `Chat — ${orderId}`;
    renderChatMessages();
    openModal('orderChatModal');
}

function renderChatMessages() {
    const box = document.getElementById('chatMessagesBox');
    if (!box || !activeChatOrderId) return;
    const order = customerOrders.find(o => o.id === activeChatOrderId);
    if (!order) return;
    const msgs = order.messages || [];
    if (msgs.length === 0) {
        box.innerHTML = `<p class="text-muted fs-12 ta-center">No messages yet. Say hello!</p>`;
        return;
    }
    const me = currentUser ? (currentUser.displayName || currentUser.firstName) : '';
    box.innerHTML = msgs.map(m => {
        const isMe = m.from === me;
        return `<div class="mb-8 ${isMe ? 'ta-right' : 'ta-left'}">
            <div class="chat-bubble ${isMe ? 'chat-bubble--me' : 'chat-bubble--them'}">
                <div class="fs-10 op-80 mb-2">${escapeHTML(m.from)}</div>
                ${escapeHTML(m.text)}
            </div>
            <div class="fs-10 text-dim mt-2">${m.time}</div>
        </div>`;
    }).join('');
    box.scrollTop = box.scrollHeight;
}

function sendOrderChat(event) {
    event.preventDefault();
    if (!activeChatOrderId || !currentUser) return;
    const input = document.getElementById('chatInput');
    const text = input.value.trim();
    if (!text) return;
    const order = customerOrders.find(o => o.id === activeChatOrderId);
    if (!order) return;
    if (!order.messages) order.messages = [];
    order.messages.push({
        from: currentUser.displayName || currentUser.firstName,
        text: text,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
    input.value = '';
    renderChatMessages();
}

function showPurchaseSuccessToast(buyerName, total) {
    const toast = document.getElementById('cartToast');
    toast.innerHTML = `✅️ <strong>Order placed!</strong> Waiting for seller confirmation. Thank you, ${escapeHTML(buyerName)}! Total: ₱${total.toLocaleString('en-US', {minimumFractionDigits: 2})}`;
    toast.style.display = 'block';
    toast.style.background = '#22c55e';
    showPurchaseSuccessToast._t = setTimeout(() => {
        toast.style.display = 'none';
        toast.innerHTML = `🛒 Added <strong id="toastProductName">Item</strong> to your cart!`;
        toast.style.background = '#0099ff';
    }, 3500);
}

/* ---- Emoji support -------------------------------------------------------
   Newer emoji (coral, jellyfish, bubbles ...) show up as empty boxes on systems whose
   emoji font predates them (for example Windows 10). To detect that we draw the glyph
   on a canvas: a real colour emoji paints coloured pixels, a missing glyph paints a
   plain monochrome box. Each themed icon below has an older, widely supported fallback. */
const emojiSupportCache = {};
function supportsEmoji(glyph) {
  if (glyph in emojiSupportCache) return emojiSupportCache[glyph];
  let ok = true;
  try {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 36;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    ctx.textBaseline = 'top';
    ctx.font = '28px "Segoe UI Emoji","Apple Color Emoji","Noto Color Emoji",sans-serif';
    ctx.fillText(glyph, 2, 2);
    const px = ctx.getImageData(0, 0, 36, 36).data;
    ok = false;
    for (let i = 0; i < px.length; i += 4) {
      if (px[i + 3] > 0 && (Math.abs(px[i] - px[i + 1]) > 12 || Math.abs(px[i + 1] - px[i + 2]) > 12)) { ok = true; break; }
    }
  } catch (e) { ok = true; } 
  return (emojiSupportCache[glyph] = ok);
}
function safeEmoji(glyph, fallback) { return supportsEmoji(glyph) ? glyph : fallback; }

const BUBBLES_FALLBACK_ICON = '<svg class="bubble-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false"><circle cx="8" cy="15" r="5" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="16.5" cy="8.5" r="3.5" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="17" cy="17.5" r="2" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>';

const oceanThemes = {
  reef:      { label: 'Coral Reef',     icon: safeEmoji('🪸', '🐠'), vars: {'--ocean-bg':'#071923','--ocean-panel':'#102d3a','--ocean-panel2':'#174354','--ocean-accent':'#2dd4bf','--ocean-accent2':'#38bdf8','--ocean-text':'#e6fffb'} },
  beach:     { label: 'Sunny Beach',    icon: '🏖️', light: true, vars: {'--ocean-bg':'#fff8e8','--ocean-panel':'#fff0cf','--ocean-panel2':'#d9f3ef','--ocean-accent':'#0f766e','--ocean-accent2':'#ea8b35','--ocean-text':'#173b46'} },
  lagoon:    { label: 'Blue Lagoon',    icon: '💠', vars: {'--ocean-bg':'#071d35','--ocean-panel':'#0d3150','--ocean-panel2':'#15506a','--ocean-accent':'#5eead4','--ocean-accent2':'#60a5fa','--ocean-text':'#e0f2fe'} },
  turtle:    { label: 'Sea Turtle',     icon: '🐢', vars: {'--ocean-bg':'#10251e','--ocean-panel':'#1c3b30','--ocean-panel2':'#2c5545','--ocean-accent':'#a3e635','--ocean-accent2':'#5eead4','--ocean-text':'#f0fdf4'} },
  deepsea:   { label: 'Deep Abyss',     icon: '🐙', onAccent: '#02060f', grad: 'radial-gradient(ellipse at 50% -10%, rgba(34,211,238,.16), transparent 60%)',
               vars: {'--ocean-bg':'#02060f','--ocean-panel':'#0a1226','--ocean-panel2':'#14224a','--ocean-accent':'#22d3ee','--ocean-accent2':'#818cf8','--ocean-text':'#e0e7ff'} },
  sunset:    { label: 'Sunset Bay',     icon: '🌅', onAccent: '#1d1226', grad: 'linear-gradient(180deg, rgba(251,146,60,.18), transparent 45%)',
               vars: {'--ocean-bg':'#1d1226','--ocean-panel':'#2d1b3d','--ocean-panel2':'#4a2a52','--ocean-accent':'#fb923c','--ocean-accent2':'#f472b6','--ocean-text':'#ffeedd'} },
  arctic:    { label: 'Arctic Ice',     icon: safeEmoji('🧊', '❄️'), light: true, onAccent: '#ffffff', grad: 'linear-gradient(180deg, rgba(14,165,233,.14), transparent 50%)',
               vars: {'--ocean-bg':'#eaf6fb','--ocean-panel':'#d6ecf5','--ocean-panel2':'#bfe0ee','--ocean-accent':'#0e7490','--ocean-accent2':'#0369a1','--ocean-text':'#0c2d3f'} },
  pearl:     { label: 'Pearl Shell',    icon: '🐚', light: true, onAccent: '#ffffff', grad: 'linear-gradient(180deg, rgba(190,74,107,.10), transparent 50%)',
               vars: {'--ocean-bg':'#fbf4ef','--ocean-panel':'#f3e4dc','--ocean-panel2':'#e6cfc8','--ocean-accent':'#be4a6b','--ocean-accent2':'#0e7490','--ocean-text':'#3b2a30'} },
  jellyfish: { label: 'Jellyfish Glow', icon: safeEmoji('🪼', '🔮'), onAccent: '#0a0320', grad: 'radial-gradient(circle at 80% 0%, rgba(232,121,249,.2), transparent 55%)',
               vars: {'--ocean-bg':'#0a0320','--ocean-panel':'#1a0b3a','--ocean-panel2':'#2a1456','--ocean-accent':'#e879f9','--ocean-accent2':'#22d3ee','--ocean-text':'#f5e9ff'} }
};
function applyOceanTheme(name, save=true) {
  const key = name in oceanThemes ? name : 'reef';
  const theme = oceanThemes[key];
  const root = document.documentElement;
  Object.entries(theme.vars).forEach(([prop,value]) => root.style.setProperty(prop,value));
  root.style.setProperty('--ocean-grad', theme.grad || 'none');
  root.style.setProperty('--ocean-on-accent', theme.onAccent || '#ffffff');
  root.dataset.oceanTheme = key;
  root.dataset.oceanLight = theme.light ? '1' : '0';
  root.dataset.oceanOnaccent = theme.onAccent ? '1' : '0';
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', theme.vars['--ocean-bg']);
  const picker = document.getElementById('oceanThemePicker');
  if (picker && picker.value !== key) picker.value = key;
  if (save) { try { localStorage.setItem('bestdebest-ocean-theme', key); } catch(e) {} }
}

function ensureOceanBubbles() {
  if (document.getElementById('oceanBubbles')) return;
  const box = document.createElement('div');
  box.id = 'oceanBubbles';
  box.setAttribute('aria-hidden', 'true');
  for (let i = 0; i < 16; i++) {
    const bubble = document.createElement('span');
    const size = 8 + Math.random() * 34;
    bubble.className = 'bubble';
    bubble.style.width = bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.animationDuration = `${12 + Math.random() * 16}s`;
    bubble.style.animationDelay = `-${Math.random() * 20}s`;
    box.appendChild(bubble);
  }
  document.body.appendChild(box);
}
function setOceanBubbles(on, save=true) {
  if (on) ensureOceanBubbles();
  document.documentElement.classList.toggle('ocean-bubbles-on', !!on);
  const btn = document.getElementById('oceanBubblesBtn');
  if (btn) btn.setAttribute('aria-pressed', on ? 'true' : 'false');
  if (save) { try { localStorage.setItem('bestdebest-ocean-bubbles', on ? '1' : '0'); } catch(e) {} }
}

function addOceanThemePicker() {
  if (document.getElementById('oceanThemePicker')) return;
  const header = document.querySelector('.header'); if (!header) return;
  const wrap = document.createElement('label');
  wrap.className = 'ocean-theme-control';
  const options = Object.entries(oceanThemes).map(([key, t]) => `<option value="${key}">${t.icon} ${t.label}</option>`).join('');
  wrap.innerHTML = `<span aria-hidden="true">🌊</span><span>Theme</span><select id="oceanThemePicker" aria-label="Choose site theme">${options}</select><button type="button" id="oceanBubblesBtn" class="bubble-toggle" aria-pressed="false" aria-label="Toggle floating bubbles" title="Toggle bubbles">${safeEmoji('🫧', BUBBLES_FALLBACK_ICON)}</button>`;
  wrap.querySelector('select').addEventListener('change', e => applyOceanTheme(e.target.value));
  wrap.querySelector('#oceanBubblesBtn').addEventListener('click', e => {
    e.preventDefault();
    setOceanBubbles(!document.documentElement.classList.contains('ocean-bubbles-on'));
  });
  header.appendChild(wrap);
}
document.addEventListener('DOMContentLoaded', () => {
  let saved = 'reef', bubbles = false;
  try { saved = localStorage.getItem('bestdebest-ocean-theme') || 'reef'; bubbles = localStorage.getItem('bestdebest-ocean-bubbles') === '1'; } catch(e) {}
  applyOceanTheme(saved, false);
  addOceanThemePicker();
  applyOceanTheme(saved, false);
  setOceanBubbles(bubbles, false);
});

function showAppToast(message) {
    let box = document.getElementById('appToastBox');
    if (!box) {
        box = document.createElement('div');
        box.id = 'appToastBox';
        box.className = 'app-toast-box';
        box.setAttribute('role', 'status');
        box.setAttribute('aria-live', 'polite');
        document.body.appendChild(box);
    }
    const toast = document.createElement('div');
    toast.className = 'app-toast';
    toast.textContent = String(message);
    toast.onclick = () => toast.remove();
    box.appendChild(toast);
    const time = Math.min(7000, 2500 + String(message).length * 40);
    setTimeout(() => toast.remove(), time);
}
window.alert = showAppToast;

function closeTopLayer() {
    const openModals = [...document.querySelectorAll('.modal')].filter(m => m.style.display === 'flex')
        .sort((a, b) => Number(a.dataset.openSeq || 0) - Number(b.dataset.openSeq || 0));
    if (openModals.length) {
        dismissModal(openModals[openModals.length - 1]);
        return;
    }
    const notifBox = document.getElementById('managerNotifDropdown');
    if (notifBox && notifBox.style.display === 'block') { notifBox.style.display = 'none'; return; }
    const cart = document.getElementById('cartDrawer');
    if (cart && cart.classList.contains('open')) cart.classList.remove('open');
}
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
        modal.addEventListener('mousedown', e => {
            if (e.target === modal) dismissModal(modal);
        });
    });
    const syncScrollLock = () => {
        const anyOpen = [...document.querySelectorAll('.modal')].some(m => m.style.display === 'flex');
        document.body.classList.toggle('modal-open', anyOpen);
    };
    const lockObserver = new MutationObserver(syncScrollLock);
    document.querySelectorAll('.modal').forEach(modal => lockObserver.observe(modal, { attributes: true, attributeFilter: ['style'] }));
    document.querySelectorAll('.close-btn, .close-sidebar').forEach(btn => {
        btn.setAttribute('role', 'button');
        btn.setAttribute('tabindex', '0');
        btn.setAttribute('aria-label', 'Close');
    });
});
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeTopLayer(); return; }

    const el = e.target;
    if ((e.key === 'Enter' || e.key === ' ') && el && el.matches &&
        el.matches('.product-card, .sub-nav a, .close-btn, .close-sidebar, .logo-container')) {
        e.preventDefault();
        el.click();
    }
});

function openForgotPassword() {
    closeModal('loginModal');
    openModal('forgotPasswordModal');
}

function handleForgotPassword(event) {
    event.preventDefault();
    const email = document.getElementById('forgotEmail').value.trim().toLowerCase();
    const birthDate = document.getElementById('forgotBirthDate').value;
    const newPass = document.getElementById('forgotNewPassword').value.trim();
    const confirmPass = document.getElementById('forgotConfirmPassword').value.trim();

    const passwordError = validatePasswordRules(newPass);
    if (passwordError) {
        alert(passwordError);
        return;
    }
    if (newPass !== confirmPass) {
        alert("The two passwords do not match.");
        return;
    }
    const user = registeredUsers.find(u => emailKey(u.email) === email);
    if (!user || !user.birthDate || user.birthDate !== birthDate) {
        alert("We couldn't verify those details. Check your email and date of birth.");
        return;
    }
    startOtpFlow({
        purpose: 'password_reset',
        channel: 'email',
        target: email,
        title: 'Verify Password Reset',
        summary: 'For your security, enter the code we send to your email to confirm this password change.',
        onVerified: () => {
            user.password = newPass;
            ['forgotEmail', 'forgotBirthDate', 'forgotNewPassword', 'forgotConfirmPassword']
                .forEach(id => { document.getElementById(id).value = ''; });
            closeModal('forgotPasswordModal');
            openModal('loginModal');
            document.getElementById('loginEmail').value = email;
            alert("Password updated! You can now log in with your new password.");
        }
    });
}

const ACHIEVEMENTS = [
    { id: 'first',  items: 1,  icon: '🎉', title: 'First Purchase' },
    { id: 'five',   items: 5,  icon: '🛍️', title: 'Smart Shopper' },
    { id: 'ten',    items: 10, icon: '💎', title: 'Loyal Buyer' },
    { id: 'twenty', items: 25, icon: '🏅', title: 'Power Shopper' },
    { id: 'fifty',  items: 50, icon: '👑', title: 'Shopping Legend' }
];

const REWARD_TABLE = [
    { type: 'voucher', percent: 5,  label: '5% OFF voucher',  weight: [40, 30, 20, 10, 5] },
    { type: 'voucher', percent: 10, label: '10% OFF voucher', weight: [30, 30, 25, 20, 15] },
    { type: 'voucher', percent: 15, label: '15% OFF voucher', weight: [10, 20, 25, 30, 30] },
    { type: 'voucher', percent: 20, label: '20% OFF voucher', weight: [5, 10, 15, 25, 30] },
    { type: 'voucher', kind: 'freeship', percent: 0, label: '🚚 FREE DELIVERY voucher', weight: [20, 20, 15, 10, 10] },
    { type: 'badge',   label: '🍀 Lucky Shopper badge',      weight: [15, 10, 10, 10, 10] },
    { type: 'badge',   label: '🛒 Golden Cart badge',        weight: [10, 10, 10, 10, 10] }
];

const BADGES = [
    { label: '🍀 Lucky Shopper badge', icon: '🍀', name: 'Lucky Shopper', desc: 'A lucky-draw badge. You can win it when you claim an achievement.' },
    { label: '🛒 Golden Cart badge',   icon: '🛒', name: 'Golden Cart',   desc: 'A rare golden-cart badge, also won from an achievement reward draw. It is a collectible to show off and has no discount.' }
];

function getUserBadges(user) {
    return (user && Array.isArray(user.rewards) ? user.rewards : []).filter(r => r.type === 'badge');
}

function renderBadgeChips(user) {
    const luckyChips = [];
    const seen = new Set();
    getUserBadges(user).forEach(b => {
        if (seen.has(b.label)) return;
        seen.add(b.label);
        const info = BADGES.find(x => x.label === b.label);
        luckyChips.push(`<span class="badge-chip" title="${escapeHTML(info ? info.desc : '')}">${escapeHTML(b.label.replace(/ badge$/, ''))}</span>`);
    });
    const missionChips = MISSION_BADGES
        .filter(m => user && Array.isArray(user.missionBadges) && user.missionBadges.includes(m.id))
        .map(m => `<span class="badge-chip" title="${escapeHTML(m.mission)}">${m.icon} ${escapeHTML(m.name)}</span>`);
    const all = missionChips.concat(luckyChips);
    return all.length ? `<div class="mt-6">${all.join('')}</div>` : '';
}

/* ---------- Mission badges (shown in Account Settings and on the public profile) ---------- */
function countMyCompletedDeliveries(user) {
    if (!user) return 0;
    return customerOrders.filter(o => o.status !== 'declined' && o.deliveryStage === 'received' && isMyDelivery(o, user)).length;
}

function countMyReviews(user) {
    if (!user) return 0;
    return productReviews.filter(r => r.reviewerEmail === user.email).length;
}

const MISSION_BADGES = [
    { id: 'm_profile', icon: '🙋', name: 'Profile Pioneer', mission: 'Add a profile picture and a bio to your profile.',
      progress: u => { const n = (u.profilePicture ? 1 : 0) + (String(u.bio || '').trim() ? 1 : 0); return { value: n, goal: 2 }; } },
    { id: 'm_first', icon: '🎉', name: 'First Haul', mission: 'Buy your first item.',
      progress: u => ({ value: countItemsBought(u), goal: 1 }) },
    { id: 'm_shopper', icon: '🛍️', name: 'Super Shopper', mission: 'Buy 10 items in total.',
      progress: u => ({ value: countItemsBought(u), goal: 10 }) },
    { id: 'm_reviewer', icon: '⭐', name: 'Honest Reviewer', mission: 'Review 3 items you bought.',
      progress: u => ({ value: countMyReviews(u), goal: 3 }) },
    { id: 'm_seller', icon: '🏪', name: 'Shop Owner', mission: 'Become a seller and open your shop.',
      progress: u => ({ value: u.isSeller ? 1 : 0, goal: 1 }) },
    { id: 'm_rider', icon: '🚚', name: 'Road Warrior', mission: 'Complete 3 deliveries as a rider.',
      progress: u => ({ value: countMyCompletedDeliveries(u), goal: 3 }) }
];

function claimMissionBadge(id) {
    if (!currentUser) return;
    ensureRewardData(currentUser);
    if (!Array.isArray(currentUser.missionBadges)) currentUser.missionBadges = [];
    const mission = MISSION_BADGES.find(m => m.id === id);
    if (!mission || currentUser.missionBadges.includes(id)) return;
    const p = mission.progress(currentUser);
    if (p.value < p.goal) { alert('Mission not finished yet. Keep going!'); return; }
    currentUser.missionBadges.push(id);
    alert(`${mission.icon} "${mission.name}" badge earned!\nIt now shows on your public profile.`);
    renderSettingsBadges();
}

function renderSettingsBadges() {
    const body = document.getElementById('settingsBadgesBody');
    const section = document.getElementById('settingsBadgesSection');
    if (!body || !section) return;
    if (!currentUser || managerEmails.includes(currentUser.email)) { section.style.display = 'none'; return; }
    section.style.display = '';
    ensureRewardData(currentUser);
    const owned = Array.isArray(currentUser.missionBadges) ? currentUser.missionBadges : [];
    body.innerHTML = MISSION_BADGES.map(m => {
        const has = owned.includes(m.id);
        const p = m.progress(currentUser);
        const value = Math.min(p.value, p.goal);
        let action;
        if (has) action = '<span class="ach-done">✓ Earned</span>';
        else if (p.value >= p.goal) action = `<button type="button" class="ach-claim-btn" onclick="claimMissionBadge('${m.id}')">🎁 Claim</button>`;
        else action = `<span class="ach-muted">${value}/${p.goal}</span>`;
        return `<div class="badge-card ${has ? '' : 'badge-locked'}">
            <span class="badge-card-icon">${m.icon}</span>
            <span class="badge-card-text"><strong>${escapeHTML(m.name)}</strong><br><small>Mission: ${escapeHTML(m.mission)}</small></span>
            ${action}
        </div>`;
    }).join('') + (getUserBadges(currentUser).length ? `<div class="ach-muted mt-6">Lucky-draw badges you won from achievements also show on your profile: ${renderBadgeChips({ rewards: currentUser.rewards, missionBadges: [] })}</div>` : '');
}

function ensureRewardData(user) {
    if (!user) return;
    if (!Array.isArray(user.claimedAchievements)) user.claimedAchievements = [];
    if (!Array.isArray(user.rewards)) user.rewards = [];
}

function countItemsBought(user) {
    if (!user) return 0;
    return customerOrders
        .filter(o => o.buyerEmail === user.email && o.status !== 'declined')
        .reduce((sum, o) => {
            if (Array.isArray(o.orderItems) && o.orderItems.length) {
                return sum + o.orderItems.reduce((n, it) => n + (Number(it.quantity) || 1), 0);
            }
            return sum + 1;
        }, 0);
}

function getCartPricing(itemsSubtotal, voucher) {
    const isFreeShip = !!(voucher && voucher.kind === 'freeship');
    const discount = (voucher && !isFreeShip) ? Math.round(itemsSubtotal * voucher.percent) / 100 : 0;
    const deliveryFee = isFreeShip ? 0 : DELIVERY_FEE;
    const deliveryWaived = isFreeShip ? DELIVERY_FEE : 0;
    const total = Math.round((itemsSubtotal - discount + deliveryFee) * 100) / 100;
    return { discount, deliveryFee, deliveryWaived, total, isFreeShip };
}

function getSelectedVoucher(user) {
    if (!user || !Array.isArray(user.rewards) || !user.selectedVoucherId) return null;
    return user.rewards.find(r => r.id === user.selectedVoucherId && r.type === 'voucher' && !r.used) || null;
}

function rollReward(levelIndex) {
    const total = REWARD_TABLE.reduce((sum, r) => sum + r.weight[levelIndex], 0);
    let roll = Math.random() * total;
    for (const reward of REWARD_TABLE) {
        roll -= reward.weight[levelIndex];
        if (roll <= 0) return reward;
    }
    return REWARD_TABLE[0];
}

function claimAchievement(achievementId) {
    if (!currentUser || managerEmails.includes(currentUser.email)) return;
    ensureRewardData(currentUser);
    const levelIndex = ACHIEVEMENTS.findIndex(a => a.id === achievementId);
    if (levelIndex < 0) return;
    const achievement = ACHIEVEMENTS[levelIndex];
    if (currentUser.claimedAchievements.includes(achievementId)) return;
    if (countItemsBought(currentUser) < achievement.items) {
        alert("Keep shopping! You haven't unlocked this achievement yet.");
        return;
    }
    const picked = rollReward(levelIndex);
    currentUser.claimedAchievements.push(achievementId);
    currentUser.rewards.push({
        id: `RW-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        type: picked.type,
        percent: picked.percent || 0,
        kind: picked.kind || 'percent',
        label: picked.label,
        from: achievement.title,
        used: false
    });
    const pickedBadge = BADGES.find(b => b.label === picked.label);
    alert(`${achievement.icon} "${achievement.title}" unlocked!\n🎁 Random reward: ${picked.label}${pickedBadge ? '\n' + pickedBadge.desc : ''}`);
    renderAchievements();
    updateCartUI();
}

function renderAchievements() {
    const body = document.getElementById('achievementsBody');
    if (!body) return;
    if (!currentUser || managerEmails.includes(currentUser.email)) {
        body.innerHTML = `<p class="ach-muted">${currentUser ? 'Achievements are for customer accounts.' : 'Log in and buy items to earn random rewards!'}</p>`;
        return;
    }
    ensureRewardData(currentUser);
    const bought = countItemsBought(currentUser);
    const next = ACHIEVEMENTS.find(a => !currentUser.claimedAchievements.includes(a.id) && bought < a.items);
    const pct = next ? Math.min(100, Math.round((bought / next.items) * 100)) : 100;

    let html = `<div class="ach-summary">Items bought: <strong>${bought}</strong>${next ? ` · next goal: <strong>${next.items}</strong>` : ' · all goals reached! 🎊'}</div>
        <div class="ach-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}"><div class="ach-bar-fill" style="width:${pct}%;"></div></div>`;

    html += ACHIEVEMENTS.map(a => {
        const claimed = currentUser.claimedAchievements.includes(a.id);
        const reached = bought >= a.items;
        let action;
        if (claimed) action = `<span class="ach-done">✓ Claimed</span>`;
        else if (reached) action = `<button class="ach-claim-btn" onclick="claimAchievement('${a.id}')">🎁 Claim</button>`;
        else action = `<span class="ach-muted">${bought}/${a.items}</span>`;
        return `<div class="ach-row ${reached ? '' : 'ach-locked'}">
            <span class="ach-icon">${a.icon}</span>
            <span class="ach-info"><strong>${a.title}</strong><br><small>Buy ${a.items} item${a.items > 1 ? 's' : ''}</small></span>
            ${action}
        </div>`;
    }).join('');

    const ownedBadgeLabels = getUserBadges(currentUser).map(b => b.label);
    html += `<div class="ach-rewards-title">My Badges</div>` + BADGES.map(b => {
        const count = ownedBadgeLabels.filter(l => l === b.label).length;
        return `<div class="badge-card ${count ? '' : 'badge-locked'}"><span class="badge-card-icon">${b.icon}</span><span><strong>${escapeHTML(b.name)}</strong>${count ? ` <small class="text-green-light">✓ Owned${count > 1 ? ' ×' + count : ''}</small>` : ' <small>Not yet won</small>'}<br><small>${escapeHTML(b.desc)}</small></span></div>`;
    }).join('');

    const rewards = currentUser.rewards.filter(r => r.type !== 'badge');
    html += `<div class="ach-rewards-title">My Rewards</div><div class="ach-muted mb-6">Vouchers are never used automatically. You choose when to use one.</div>`;
    if (rewards.length === 0) {
        html += `<p class="ach-muted">No vouchers yet. Claim an achievement to get a random reward!</p>`;
    } else {
        html += rewards.slice().reverse().map(r => {
            let extra = '';
            if (r.type === 'voucher' && r.used) {
                extra = ' <small>(used)</small>';
            } else if (r.type === 'voucher') {
                extra = currentUser.selectedVoucherId === r.id
                    ? ` <small class="text-green-light">✓ will be used on your next order</small> <button class="vouch-btn vouch-btn-off" onclick="deselectVoucher()">Don't use</button>`
                    : ` <button class="vouch-btn" onclick="selectVoucher('${r.id}')">Use on next order</button>`;
            }
            return `<div class="ach-reward ${r.used ? 'ach-reward-used' : ''}">${escapeHTML(r.label)}${extra}</div>`;
        }).join('');
    }
    body.innerHTML = html;
}

function renderCartVoucherPicker() {
    const box = document.getElementById('cartVoucherBox');
    if (!box) return;
    const vouchers = (currentUser && !isManagerUser() && Array.isArray(currentUser.rewards))
        ? currentUser.rewards.filter(r => r.type === 'voucher' && !r.used) : [];
    if (vouchers.length === 0 || cart.length === 0) {
        box.innerHTML = '';
        box.style.display = 'none';
        return;
    }
    box.style.display = 'block';
    const selected = currentUser.selectedVoucherId;
    box.innerHTML = `<label for="cartVoucherSelect" class="fs-12 text-amber fw-bold">🎁 Use a reward voucher?</label>
        <select id="cartVoucherSelect" onchange="chooseVoucherFromCart(this.value)">
            <option value="">No, don't use a voucher</option>
            ${vouchers.map(v => `<option value="${escapeHTML(v.id)}" ${v.id === selected ? 'selected' : ''}>${escapeHTML(v.label)}</option>`).join('')}
        </select>`;
}
function setSelectedVoucher(id) {
    if (!currentUser) return;
    const voucher = (currentUser.rewards || []).find(r => r.id === id && r.type === 'voucher' && !r.used);
    currentUser.selectedVoucherId = voucher ? voucher.id : null;
    renderAchievements();
    updateCartUI();
}
function selectVoucher(id) { setSelectedVoucher(id); alert('Voucher selected! It will be used on your next checkout.'); }
function deselectVoucher() { setSelectedVoucher(null); }
function chooseVoucherFromCart(id) { setSelectedVoucher(id || null); }

(function wrapCartUI() {
    const original = updateCartUI;
    updateCartUI = function () {
        original.apply(this, arguments);
        renderCartVoucherPicker();
        const totalEl = document.getElementById('cartTotalPrice');
        if (!totalEl || cart.length === 0) return;
        const voucher = getSelectedVoucher(currentUser);
        const full = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const p = getCartPricing(full, voucher);
        const strike = (p.discount > 0 || p.deliveryWaived > 0) ? `<s class="text-dim fs-12">${formatPeso(full + DELIVERY_FEE)}</s> ` : '';
        const notes = [];
        if (p.discount > 0) notes.push(`<span class="text-green-light">-${voucher.percent}% reward</span>`);
        notes.push(p.isFreeShip
            ? `<span class="text-green-light">🚚 Free delivery</span>`
            : `<span class="text-muted">incl. ${formatPeso(p.deliveryFee)} delivery</span>`);
        totalEl.innerHTML = `${strike}${formatPeso(p.total)}<small class="d-block fs-11 fw-normal">${notes.join(' · ')}</small>`;
    };
})();

(function wrapForAchievements() {
    const wrap = (name, after) => {
        const original = window[name];
        window[name] = function () {
            const result = original.apply(this, arguments);
            after.apply(this, arguments);
            return result;
        };
    };
    wrap('updateAuthUI', () => renderAchievements());
    wrap('alertCheckout', () => renderAchievements());
    wrap('logoutUser', () => { applySortingAndFilters(); renderAchievements(); });

    const originalDecline = window.declineSellerOrder;
    window.declineSellerOrder = function (orderId) {
        const order = customerOrders.find(o => o.id === orderId);
        const wasPending = order && order.status === 'to_confirm';
        const result = originalDecline.apply(this, arguments);
        if (wasPending && order.status === 'declined' && order.voucherId) {
            const buyer = registeredUsers.find(u => u.email === order.buyerEmail);
            const voucher = buyer && (buyer.rewards || []).find(r => r.id === order.voucherId);
            if (voucher) voucher.used = false;
        }
        renderAchievements();
        return result;
    };
})();

document.addEventListener('DOMContentLoaded', () => {

    const today = new Date().toISOString().split('T')[0];
    ['signupBirthDate', 'forgotBirthDate'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.max = today;
    });
    renderAchievements();
});

const LOW_STOCK_LEVEL = 5;          
const BASE_WEEK_REVENUE = 3567;     

function pushManagerAlert(text) {
    if (!managerStockAlerts.includes(text)) {
        managerStockAlerts.push(text);
        managerNotifsRead = false;
    }
    updateManagerBellBadge();
}

function daysListed(product) {
    const added = new Date(`${product.dateAdded}T00:00:00`);
    if (isNaN(added.getTime())) return 30;
    return Math.max(1, Math.ceil((Date.now() - added.getTime()) / 86400000));
}

function getForecastRow(product) {
    const velocity = (Number(product.sold) || 0) / daysListed(product);
    const stock = Number(product.stock) || 0;
    return {
        product,
        velocity,
        cover: velocity > 0 ? stock / velocity : Infinity,   
        forecast7: Math.round(velocity * 7),                 
        reorder: Math.max(0, Math.ceil(velocity * 14 - stock)) 
    };
}

function isManagerUser() {
    return !!(
        currentUser &&
        (
            String(currentUser.role || '').toLowerCase() === 'manager' ||
            managerEmails.includes(currentUser.email.toLowerCase())
        )
    );
}

function restockProduct(productId, qty) {
    if (!isManagerUser()) return;
    const product = products.find(p => p.id === productId);
    const amount = Math.floor(Number(qty));
    if (!product || !(amount > 0)) return;
    product.stock += amount;
    if (product.stock >= LOW_STOCK_LEVEL) {
        managerStockAlerts = managerStockAlerts.filter(a =>
            !(/^(Alert|Low stock):/.test(a) && a.includes(`"${product.name}"`)));
    }
    updateManagerBellBadge();
    alert(`Restocked "${product.name}" by ${amount} unit(s). Now ${product.stock} in stock.`);
    renderAdminDashboard();
}

function renderAdminStockPanel() {
    const box = document.getElementById('adminStockList');
    if (!box) return;
    const query = ((document.getElementById('adminStockSearch') || {}).value || '').trim().toLowerCase();
    const filter = (document.getElementById('adminStockFilter') || {}).value || 'all';
    const sort = (document.getElementById('adminStockSort') || {}).value || 'stock-asc';

    let list = products.filter(p => {
        if (query && !(`${p.name} ${p.sellerName || ''}`.toLowerCase().includes(query))) return false;
        if (filter === 'out') return p.stock <= 0;
        if (filter === 'low') return p.stock > 0 && p.stock < LOW_STOCK_LEVEL;
        return true;
    });
    list.sort((a, b) => {
        if (sort === 'stock-desc') return b.stock - a.stock;
        if (sort === 'sold-desc') return (b.sold || 0) - (a.sold || 0);
        if (sort === 'name') return String(a.name).localeCompare(String(b.name));
        return a.stock - b.stock;
    });

    const btn = bgClass => `btn-stock ${bgClass}`;
    let html = `<div class="fs-11 text-muted mb-6">Showing ${list.length} of ${products.length} products</div>`;
    if (list.length === 0) html += `<p class="text-muted fs-12">No products match your filters.</p>`;
    html += list.map(p => {
        const color = p.stock <= 0 ? '#ef4444' : (p.stock < LOW_STOCK_LEVEL ? '#f59e0b' : '#22c55e');
        return `<div class="stock-row">
            <span class="stock-name">${escapeHTML(p.name)}${p.adult ? ' <span class="adult-badge-inline">18+</span>' : ''}<br><small class="text-dim">${escapeHTML(p.sellerName || 'Official Store')} · sold ${p.sold || 0}</small></span>
            <span class="stock-actions">
                <span class="fw-bold minw-62 ta-right" style="color:${color};">${p.stock} units</span>
                <button onclick="restockProduct(${p.id}, 10)" class="${btn('bg-teal')}" title="Add 10 units">+10</button>
                <button onclick="restockProduct(${p.id}, 50)" class="${btn('bg-teal')}" title="Add 50 units">+50</button>
                <button onclick="promptBanProduct(${p.id})" class="${btn('bg-red')}">🚫 Ban</button>
            </span>
        </div>`;
    }).join('');

    if (bannedProducts.length > 0) {
        html += `<div class="mt-12 fw-bold text-amber fs-13">Banned Items (Unban to restore)</div>`;
        html += bannedProducts.map(p => `<div class="stock-row">
            <span class="text-muted">${escapeHTML(p.name)}<br><span class="fs-10">${escapeHTML(p.banReason || '')}</span></span>
            <button onclick="unbanProduct(${p.id})" class="${btn('bg-green')}">↩ Unban</button>
        </div>`).join('');
    }
    box.innerHTML = html;
}

function renderAdminExtras() {

    const weekAgo = Date.now() - 7 * 86400000;
    const weekSales = salesHistory.filter(sale => (sale.ts || 0) >= weekAgo).reduce((sum, sale) => sum + Number(sale.total || 0), 0);
    const weekEl = document.getElementById('adminWeekRevenue');
    if (weekEl) weekEl.textContent = formatPeso(Math.max(0, BASE_WEEK_REVENUE + weekSales - getRecentRefunds(weekAgo)));

    const kpi = document.getElementById('adminKpiRow');
    if (kpi) {
        const validOrders = customerOrders.filter(o => o.status !== 'declined');
        const avg = validOrders.length ? validOrders.reduce((sum, o) => sum + Number(o.total || 0), 0) / validOrders.length : 0;
        const out = products.filter(p => p.stock <= 0).length;
        const low = products.filter(p => p.stock > 0 && p.stock < LOW_STOCK_LEVEL).length;
        const pending = customerOrders.filter(o => o.status === 'to_confirm').length;
        const customers = registeredUsers.filter(u => !managerEmails.includes(u.email)).length;
        const card = (icon, label, value, color) => `<div class="kpi-card"><span class="kpi-icon">${icon}</span><span class="kpi-value" style="color:${color};">${value}</span><span class="kpi-label">${label}</span></div>`;
        kpi.innerHTML =
            card('🧾', 'Total Orders', customerOrders.length, '#38bdf8') +
            card('⏳', 'Awaiting Seller', pending, '#fbbf24') +
            card('💵', 'Avg. Order Value', formatPeso(avg), '#22c55e') +
            card('📦', 'Products Live', products.length, '#a78bfa') +
            card('⚠️', 'Low / Out of Stock', `${low} / ${out}`, out > 0 ? '#ef4444' : '#f59e0b') +
            card('👥', 'Customers', customers, '#38bdf8') +
            card('🎧', 'Tickets Need Reply', supportTickets.filter(t => t.status === 'open').length, '#fbbf24') +
            card('↩️', 'Pending Returns', returnRequests.filter(r => r.status === 'pending').length, '#f59e0b');
    }

    const fc = document.getElementById('adminForecastList');
    if (fc) {
        const rows = products.map(getForecastRow)
            .filter(r => r.velocity > 0 && r.cover < 14)
            .sort((a, b) => a.cover - b.cover)
            .slice(0, 10);
        if (rows.length === 0) {
            fc.innerHTML = `<p class="text-green fs-12">✓ Every selling product has at least 14 days of stock.</p>`;
        } else {
            fc.innerHTML = `<div class="fc-head"><span>Product</span><span>Sells/day</span><span>Stock lasts</span><span>Next 7d</span><span></span></div>` +
                rows.map(r => {
                    const p = r.product;
                    const status = p.stock <= 0 ? ['OUT', '#ef4444'] : r.cover < 3 ? ['CRITICAL', '#ef4444'] : r.cover < 7 ? ['LOW', '#f59e0b'] : ['WATCH', '#eab308'];
                    return `<div class="fc-row">
                        <span class="stock-name">${escapeHTML(p.name)}<br><span class="chip" style="background:${status[1]}22;color:${status[1]};border-color:${status[1]};">${status[0]}</span></span>
                        <span>${r.velocity.toFixed(1)}</span>
                        <span class="fw-bold" style="color:${status[1]};">${p.stock <= 0 ? '0 days' : r.cover.toFixed(1) + ' days'}</span>
                        <span>~${r.forecast7} units</span>
                        <span>${r.reorder > 0 ? `<button onclick="restockProduct(${p.id}, ${r.reorder})" class="bg-teal text-white bd-none p-3-8 r-4 fs-11 cur-pointer">Restock +${r.reorder}</button>` : ''}</span>
                    </div>`;
                }).join('') +
                `<p class="fc-note">Forecast = units sold ÷ days listed. "Restock" orders enough for 14 days of cover.</p>`;
        }
    }

    const top = document.getElementById('adminTopSellers');
    if (top) {
        const best = [...products].sort((a, b) => (b.sold || 0) - (a.sold || 0)).slice(0, 5);
        const max = Math.max(1, ...best.map(p => p.sold || 0));
        top.innerHTML = best.map((p, i) => `<div class="bar-row">
            <div class="bar-label"><span>${i + 1}. ${escapeHTML(p.name)}</span><strong>${p.sold || 0} sold</strong></div>
            <div class="bar-track"><div class="bar-fill" style="width:${((p.sold || 0) / max) * 100}%;"></div></div>
        </div>`).join('') || `<p class="text-muted fs-12">No sales yet.</p>`;
    }

    const pipe = document.getElementById('adminOrderPipeline');
    if (pipe) {
        const stages = [
            ['to_confirm', 'Awaiting seller', '#fbbf24'], ['to_pay', 'To pay', '#f59e0b'],
            ['to_ship', 'To ship', '#38bdf8'], ['to_receive', 'On the way', '#6366f1'],
            ['to_rate', 'Delivered / to rate', '#22c55e'], ['declined', 'Declined', '#ef4444']
        ];
        const counts = stages.map(([key]) => customerOrders.filter(o => o.status === key).length);
        const max = Math.max(1, ...counts);
        pipe.innerHTML = stages.map(([key, label, color], i) => `<div class="bar-row">
            <div class="bar-label"><span>${label}</span><strong>${counts[i]}</strong></div>
            <div class="bar-track"><div class="bar-fill" style="width:${(counts[i] / max) * 100}%;background:${color};"></div></div>
        </div>`).join('');
    }

    const cat = document.getElementById('adminCategorySales');
    if (cat) {
        const totals = categories.map(c => ({
            name: c.name,
            revenue: products.filter(p => p.categoryId === c.id).reduce((sum, p) => sum + (p.sold || 0) * p.price, 0)
        }));
        const max = Math.max(1, ...totals.map(t => t.revenue));
        cat.innerHTML = totals.sort((a, b) => b.revenue - a.revenue).map(t => `<div class="bar-row">
            <div class="bar-label"><span>${escapeHTML(t.name)}</span><strong>${formatPeso(t.revenue)}</strong></div>
            <div class="bar-track"><div class="bar-fill bg-a78bfa" style="width:${(t.revenue / max) * 100}%;"></div></div>
        </div>`).join('');
    }
}

(function wrapDashboard() {
    const original = renderAdminDashboard;
    renderAdminDashboard = function () {
        original.apply(this, arguments);
        renderAdminExtras();
        renderAdminOnlinePanel();
        renderSupportInbox();
        renderReturnsPanel();
        renderCustomerDirectory();
        renderAdminOrders();
    };
})();

(function wrapDeclineForSales() {
    const previous = window.declineSellerOrder;
    window.declineSellerOrder = function (orderId) {
        const result = previous.apply(this, arguments);
        const order = customerOrders.find(o => o.id === orderId);
        if (order && order.status === 'declined') {
            salesHistory = salesHistory.filter(sale => sale.orderId !== orderId);
        }
        return result;
    };
})();

function csvCell(value) {
    let text = String(value ?? '');
    if (/^[=+\-@]/.test(text)) text = "'" + text;  
    return `"${text.replace(/"/g, '""')}"`;
}
function downloadCSV(filename, rows) {
    const csv = rows.map(row => row.map(csvCell).join(',')).join('\r\n');
    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
}
function exportStockCSV() {
    const rows = [['ID', 'Product', 'Category', 'Seller', 'Price (PHP)', 'Stock', 'Units sold', 'Avg sold per day', 'Days of stock left']];
    products.forEach(p => {
        const f = getForecastRow(p);
        const cat = categories.find(c => c.id === p.categoryId);
        rows.push([p.id, p.name, cat ? cat.name : '', p.sellerName || '', p.price, p.stock, p.sold || 0,
            f.velocity.toFixed(2), isFinite(f.cover) ? f.cover.toFixed(1) : 'n/a']);
    });
    downloadCSV(`stock-report-${new Date().toISOString().split('T')[0]}.csv`, rows);
}
function exportSalesCSV() {
    const rows = [['Order', 'Time', 'Buyer', 'Items', 'Total (PHP)']];
    salesHistory.forEach(sale => rows.push([sale.orderId || '', sale.time, sale.buyer, sale.itemsSummary, sale.total]));
    downloadCSV(`sales-report-${new Date().toISOString().split('T')[0]}.csv`, rows);
}


/* =========================================================
   ROLE VISIBILITY: no Seller Page inside Admin · Store Preview
   ========================================================= */
function applyRoleVisibility() {
    const manager = isManagerUser();
    const hide = id => { const e = document.getElementById(id); if (e) e.style.display = 'none'; };
    if (manager) {
        ['sidebarTabSwitcher', 'swTabShop', 'swTabMyShop', 'swTabDelivery', 'sellerDashboardHubContent',
         'deliveryDashboardHubContent', 'sellerSidebarCard', 'deliverySidebarCard', 'achievementsCard'].forEach(hide);
        const hub = document.getElementById('customerHubContent');
        if (hub) hub.style.display = 'block';
        activeSidebarTab = 'shop';
    } else {
        const card = document.getElementById('achievementsCard');
        if (card) card.style.display = '';
    }
    const supportBtn = document.getElementById('supportToggleBtn');
    if (supportBtn) supportBtn.style.display = manager ? 'none' : '';
    updateSupportBadge();
}
(function wrapRoleVisibility() {
    ['updateAuthUI', 'toggleAdminStoreView'].forEach(name => {
        const original = window[name];
        window[name] = function () {
            const result = original.apply(this, arguments);
            applyRoleVisibility();
            return result;
        };
    });
})();

let managerSessions = {};  
let adminActivityLog = [];  

function currentAdminName() {
    return currentUser ? (currentUser.displayName || currentUser.firstName) : 'System';
}
function logAdminActivity(text, who) {
    adminActivityLog.unshift({ ts: Date.now(), who: who || currentAdminName(), text });
    if (adminActivityLog.length > 50) adminActivityLog.length = 50;
}
function timeAgo(ts) {
    const minutes = Math.floor(Math.max(0, Date.now() - ts) / 60000);
    if (minutes < 1) return 'just now';
    if (minutes < 60) return `${minutes} min ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hr ago`;
    return `${Math.floor(hours / 24)} day(s) ago`;
}
function durationText(ts) {
    const minutes = Math.floor(Math.max(0, Date.now() - ts) / 60000);
    if (minutes < 1) return 'less than a minute';
    if (minutes < 60) return `${minutes} min`;
    return `${Math.floor(minutes / 60)} hr ${minutes % 60} min`;
}
function formatTime(ts) {
    return new Date(ts).toLocaleString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
}
function textToHTML(text) {
    return escapeHTML(text).replace(/\n/g, '<br>');
}

function renderAdminOnlinePanel() {
    const box = document.getElementById('adminOnlineList');
    if (!box) return;
    const onlineCount = managerEmails.filter(e => onlineManagers.includes(e)).length;
    const title = document.getElementById('adminOnlineTitle') || (box.parentElement && box.parentElement.querySelector('h3'));
    if (title) title.textContent = `Admins Online (${onlineCount}/${managerEmails.length})`;

    let html = managerEmails.map((email, i) => {
        const user = registeredUsers.find(u => u.email === email);
        const name = user ? (user.displayName || user.firstName) : email;
        const online = onlineManagers.includes(email);
        const session = managerSessions[email] || {};
        const isMe = !!(currentUser && currentUser.email === email);
        const role = i === 0 ? 'Owner' : 'Moderator';
        let status;
        if (online) {
            status = `Online for ${durationText(session.loginAt || Date.now())}`;
            if (isMe) status += ` · viewing ${isAdminStoreView ? 'Store Preview' : 'Dashboard'}`;
        } else {
            status = session.lastSeen ? `Last seen ${timeAgo(session.lastSeen)}` : 'Not signed in this session';
        }
        return `<div class="admin-person">
            <span class="admin-avatar ${online ? 'bg-green' : 'bg-slate'}">${escapeHTML(String(name).charAt(0).toUpperCase())}</span>
            <span class="admin-person-info">
                <strong>${escapeHTML(name)}${isMe ? ' <small class="text-sky">(You)</small>' : ''}</strong>
                <span class="role-chip ${i === 0 ? 'role-owner' : ''}">${role}</span><br>
                <span class="text-muted fs-11">${escapeHTML(email)}</span><br>
                <span class="fs-11 ${online ? 'text-green-light' : 'text-dim'}">${online ? '● ' : '○ '}${escapeHTML(status)}</span>
                ${user && user.dateCreated ? `<br><span class="text-dim fs-10">Admin since ${escapeHTML(user.dateCreated)}</span>` : ''}
            </span>
        </div>`;
    }).join('');

    html += `<div class="admin-log-title">Recent Admin Activity</div>`;
    html += adminActivityLog.length === 0
        ? `<p class="text-dim fs-11">No activity yet.</p>`
        : adminActivityLog.slice(0, 10).map(entry =>
            `<div class="admin-log-row"><span class="admin-log-time">${escapeHTML(timeAgo(entry.ts))}</span> <strong>${escapeHTML(entry.who)}</strong> ${escapeHTML(entry.text)}</div>`).join('');
    box.innerHTML = html;
}

(function wrapAdminSessions() {
    const originalAuth = window.updateAuthUI;
    window.updateAuthUI = function () {
        const result = originalAuth.apply(this, arguments);
        if (isManagerUser()) {
            const session = managerSessions[currentUser.email] || (managerSessions[currentUser.email] = {});
            if (!session.loginAt) {
                session.loginAt = Date.now();
                logAdminActivity('signed in');
            }
            session.lastSeen = Date.now();
            renderAdminOnlinePanel();
        }
        return result;
    };

    const originalLogout = window.logoutUser;
    window.logoutUser = function () {
        if (isManagerUser()) {
            const session = managerSessions[currentUser.email] || (managerSessions[currentUser.email] = {});
            session.loginAt = null;
            session.lastSeen = Date.now();
            logAdminActivity('signed out');
        }
        return originalLogout.apply(this, arguments);
    };

    const originalBan = window.confirmBanProduct;
    window.confirmBanProduct = function () {
        const target = products.find(p => p.id === productPendingBanId);
        const before = bannedProducts.length;
        const result = originalBan.apply(this, arguments);
        if (target && bannedProducts.length > before) logAdminActivity(`banned "${target.name}"`);
        return result;
    };

    const originalUnban = window.unbanProduct;
    window.unbanProduct = function (productId) {
        const target = bannedProducts.find(p => p.id === productId);
        const result = originalUnban.apply(this, arguments);
        if (target) logAdminActivity(`unbanned "${target.name}"`);
        return result;
    };

    const originalResolve = window.resolveConcern;
    window.resolveConcern = function (index) {
        const concern = raisedConcerns[index];
        const wasPending = concern && concern.status === 'pending';
        const result = originalResolve.apply(this, arguments);
        if (wasPending) logAdminActivity(`resolved an appeal for "${concern.productName}"`);
        return result;
    };

    const originalAddAdmin = window.handleAddNewAdmin;
    window.handleAddNewAdmin = function () {
        const before = managerEmails.length;
        const result = originalAddAdmin.apply(this, arguments);
        if (managerEmails.length > before) logAdminActivity(`added ${managerEmails[managerEmails.length - 1]} as an admin`);
        renderAdminOnlinePanel();
        return result;
    };

    const originalRestock = window.restockProduct;
    window.restockProduct = function (productId, qty) {
        const target = products.find(p => p.id === productId);
        const before = target ? target.stock : 0;
        const result = originalRestock.apply(this, arguments);
        if (target && target.stock > before) logAdminActivity(`restocked "${target.name}" (+${target.stock - before})`);
        return result;
    };
})();

setInterval(() => {
    const view = document.getElementById('adminDashboardView');
    if (isManagerUser() && view && view.style.display === 'block') renderAdminOnlinePanel();
}, 30000);


/* =========================================================
   CUSTOMER SERVICE: FAQ, support tickets, admin inbox
   ========================================================= */
let supportTickets = [];
let activeTicketId = null;
let supportTab = 'faq';
let adminExpandedTickets = [];

function uniqueId(prefix, list) {
    let id;
    do { id = `${prefix}-${Math.floor(1000 + Math.random() * 9000)}`; }
    while (list.some(item => item.id === id));
    return id;
}

function updateSupportBadge() {
    const badge = document.getElementById('supportBadge');
    if (!badge) return;
    let count = 0;
    if (currentUser && !isManagerUser()) {
        count += supportTickets.filter(t => t.userEmail === currentUser.email && t.customerUnread).length;
        count += returnRequests.filter(r => r.buyerEmail === currentUser.email && r.customerUnread).length;
        const dm = accountChats[emailKey(currentUser.email)];
        if (dm && dm.userUnread) count += 1;
    }
    badge.textContent = String(count);
    badge.style.display = count > 0 ? 'inline-flex' : 'none';
}

function openSupportModal(tab) {
    if (isManagerUser()) return;
    openModal('supportModal');
    switchSupportTab(tab || (currentUser ? supportTab : 'faq'));
}

function switchSupportTab(tab) {
    if (!currentUser && tab !== 'faq') {
        closeModal('supportModal');
        alert('Please log in to contact customer service.');
        openModal('loginModal');
        return;
    }
    supportTab = tab;
    ['faq', 'new', 'tickets', 'returns', 'inbox'].forEach(name => {
        const pane = document.getElementById(`supPane-${name}`);
        const btn = document.getElementById(`supTab-${name}`);
        if (pane) pane.style.display = name === tab ? 'block' : 'none';
        if (btn) btn.classList.toggle('active', name === tab);
    });
    if (tab === 'new') populateSupportOrders();
    if (tab === 'tickets') renderMyTickets();
    if (tab === 'returns') renderMyReturns();
    if (tab === 'inbox') renderInbox();
}

function populateSupportOrders() {
    const select = document.getElementById('supportOrderSelect');
    if (!select || !currentUser) return;
    select.innerHTML = '';
    const none = document.createElement('option');
    none.value = '';
    none.textContent = 'Not about a specific order';
    select.appendChild(none);
    customerOrders.filter(o => o.buyerEmail === currentUser.email).forEach(order => {
        const opt = document.createElement('option');
        opt.value = order.id;
        opt.textContent = `${order.id} — ${String(order.items).slice(0, 40)}`;
        select.appendChild(opt);
    });
}

function submitSupportTicket(event) {
    event.preventDefault();
    if (!currentUser) { switchSupportTab('new'); return; }
    const category = document.getElementById('supportCategory').value;
    const orderId = document.getElementById('supportOrderSelect').value;
    const subject = document.getElementById('supportSubject').value.trim();
    const message = document.getElementById('supportMessage').value.trim();
    if (subject.length < 3) { alert('Please enter a short subject (at least 3 characters).'); return; }
    if (message.length < 10) { alert('Please describe your problem in a bit more detail (at least 10 characters).'); return; }

    const name = currentUser.displayName || currentUser.firstName;
    const ticket = {
        id: uniqueId('TKT', supportTickets),
        userEmail: currentUser.email,
        userName: name,
        category, orderId, subject,
        status: 'open', 
        createdAt: Date.now(),
        updatedAt: Date.now(),
        customerUnread: false,
        messages: [{ from: 'customer', name, text: message, ts: Date.now() }]
    };
    supportTickets.unshift(ticket);
    pushManagerAlert(`Support: new ticket ${ticket.id} from ${name} — ${subject}`);
    document.getElementById('supportSubject').value = '';
    document.getElementById('supportMessage').value = '';
    activeTicketId = ticket.id;
    alert(`Ticket ${ticket.id} sent! Our team will reply under "My Tickets".`);
    switchSupportTab('tickets');
}

function renderThread(ticket) {
    return ticket.messages.map(m => `<div class="msg-row ${m.from === 'customer' ? 'msg-customer' : 'msg-support'}">
        <div class="msg-bubble">
            <div class="msg-meta">${m.from === 'customer' ? escapeHTML(m.name) : '🎧 Support · ' + escapeHTML(m.name)} · ${escapeHTML(formatTime(m.ts))}</div>
            ${textToHTML(m.text)}
        </div>
    </div>`).join('');
}
function statusChip(status) {
    const map = { open: ['Waiting for support', '#fbbf24'], answered: ['Answered', '#38bdf8'], resolved: ['Resolved', '#22c55e'],
                  pending: ['Pending review', '#fbbf24'], approved: ['Refunded', '#22c55e'], rejected: ['Rejected', '#ef4444'] };
    const [label, color] = map[status] || [status, '#94a3b8'];
    return `<span class="chip" style="background:${color}22;color:${color};border-color:${color};">${escapeHTML(label)}</span>`;
}

function renderMyTickets() {
    const box = document.getElementById('supportTicketsList');
    if (!box || !currentUser) return;
    const mine = supportTickets.filter(t => t.userEmail === currentUser.email);
    const countEl = document.getElementById('supTicketsCount');
    if (countEl) countEl.textContent = mine.length ? `(${mine.length})` : '';
    if (mine.length === 0) {
        box.innerHTML = `<p class="ach-muted">You have no tickets yet. Use "New Ticket" to contact us.</p>`;
        return;
    }
    box.innerHTML = mine.map(t => {
        const open = t.id === activeTicketId;
        let body = '';
        if (open) {
            body = `<div class="ticket-thread">${renderThread(t)}</div>` + (t.status === 'resolved'
                ? `<button class="ach-claim-btn anim-none" onclick="reopenTicket('${t.id}')">Reopen ticket</button>`
                : `<div class="ticket-reply"><textarea id="ticketReply-${t.id}" rows="2" maxlength="800" placeholder="Write a reply..."></textarea>
                   <button class="ach-claim-btn anim-none" onclick="customerReplyTicket('${t.id}')">Send</button></div>`);
        }
        return `<div class="ticket-card">
            <div class="ticket-head" onclick="toggleTicket('${t.id}')" role="button" tabindex="0">
                <span><strong>${escapeHTML(t.subject)}</strong>${t.customerUnread ? ' <span class="unread-dot" title="New reply"></span>' : ''}<br>
                <small class="text-dim">${escapeHTML(t.id)} · ${escapeHTML(t.category)}${t.orderId ? ' · ' + escapeHTML(t.orderId) : ''} · ${escapeHTML(timeAgo(t.updatedAt))}</small></span>
                ${statusChip(t.status)}
            </div>${body}
        </div>`;
    }).join('');
}

function toggleTicket(id) {
    activeTicketId = activeTicketId === id ? null : id;
    const ticket = supportTickets.find(t => t.id === id);
    if (ticket && activeTicketId === id) ticket.customerUnread = false;
    renderMyTickets();
    updateSupportBadge();
}

function customerReplyTicket(id) {
    const ticket = supportTickets.find(t => t.id === id);
    const input = document.getElementById(`ticketReply-${id}`);
    if (!ticket || !currentUser || ticket.userEmail !== currentUser.email || !input) return;
    const text = input.value.trim();
    if (!text) return;
    ticket.messages.push({ from: 'customer', name: ticket.userName, text, ts: Date.now() });
    ticket.status = 'open';
    ticket.updatedAt = Date.now();
    pushManagerAlert(`Support: ${ticket.userName} replied on ticket ${ticket.id}`);
    renderMyTickets();
}

function reopenTicket(id) {
    const ticket = supportTickets.find(t => t.id === id);
    if (!ticket || !currentUser || ticket.userEmail !== currentUser.email) return;
    ticket.status = 'open';
    ticket.updatedAt = Date.now();
    ticket.messages.push({ from: 'customer', name: ticket.userName, text: '(Ticket reopened by customer)', ts: Date.now() });
    pushManagerAlert(`Support: ${ticket.userName} reopened ticket ${ticket.id}`);
    renderMyTickets();
}

function clearManagerAlerts(idText) {
    managerStockAlerts = managerStockAlerts.filter(a => !(a.startsWith('Support:') || a.startsWith('Return') || a.startsWith('Chat:')) || !a.includes(idText));
    updateManagerBellBadge();
}

function renderSupportInbox() {
    const box = document.getElementById('adminSupportList');
    if (!box) return;
    const filter = (document.getElementById('adminSupportFilter') || {}).value || 'needs';
    let list = supportTickets.filter(t =>
        filter === 'all' ? true : filter === 'needs' ? t.status === 'open' : t.status === filter);
    list = [...list].sort((a, b) => b.updatedAt - a.updatedAt);
    if (list.length === 0) {
        box.innerHTML = `<p class="text-muted fs-12">${supportTickets.length ? 'No tickets in this view.' : 'No customer tickets yet.'}</p>`;
        return;
    }
    box.innerHTML = list.map(t => {
        const open = adminExpandedTickets.includes(t.id);
        let body = '';
        if (open) {
            body = `<div class="ticket-thread">${renderThread(t)}</div>
                <div class="ticket-reply"><textarea id="adminReply-${t.id}" rows="2" maxlength="800" placeholder="Reply to ${escapeHTML(t.userName)}..."></textarea>
                <div class="d-flex flex-col gap-6">
                    <button class="ach-claim-btn anim-none" onclick="adminReplyTicket('${t.id}')">Send reply</button>
                    ${t.status !== 'resolved' ? `<button class="export-btn" onclick="adminResolveTicket('${t.id}')">✓ Resolve</button>` : ''}
                </div></div>`;
        }
        return `<div class="ticket-card">
            <div class="ticket-head" onclick="toggleAdminTicket('${t.id}')" role="button" tabindex="0">
                <span><strong>${escapeHTML(t.subject)}</strong><br>
                <small class="text-dim">${escapeHTML(t.id)} · ${escapeHTML(t.userName)} (${escapeHTML(t.userEmail)}) · ${escapeHTML(t.category)}${t.orderId ? ' · ' + escapeHTML(t.orderId) : ''} · ${escapeHTML(timeAgo(t.updatedAt))}</small></span>
                ${statusChip(t.status)}
            </div>${body}
        </div>`;
    }).join('');
}

function toggleAdminTicket(id) {
    adminExpandedTickets = adminExpandedTickets.includes(id) ? adminExpandedTickets.filter(x => x !== id) : [...adminExpandedTickets, id];
    renderSupportInbox();
}

function adminReplyTicket(id) {
    if (!isManagerUser()) return;
    const ticket = supportTickets.find(t => t.id === id);
    const input = document.getElementById(`adminReply-${id}`);
    if (!ticket || !input) return;
    const text = input.value.trim();
    if (!text) { alert('Please type a reply first.'); return; }
    ticket.messages.push({ from: 'support', name: currentAdminName(), text, ts: Date.now() });
    ticket.status = 'answered';
    ticket.updatedAt = Date.now();
    ticket.customerUnread = true;
    clearManagerAlerts(ticket.id);
    logAdminActivity(`replied to ticket ${ticket.id}`);
    renderAdminDashboard();
}

function adminResolveTicket(id) {
    if (!isManagerUser()) return;
    const ticket = supportTickets.find(t => t.id === id);
    if (!ticket) return;
    ticket.status = 'resolved';
    ticket.updatedAt = Date.now();
    ticket.customerUnread = true;
    clearManagerAlerts(ticket.id);
    logAdminActivity(`resolved ticket ${ticket.id}`);
    renderAdminDashboard();
}


/* =========================================================
   RETURNS & REFUNDS FOR BROKEN ITEMS
   Customer: My Purchases -> delivered order -> "Return broken item"
   Admin: Returns & Refunds card approves (refund) or rejects
   ========================================================= */
let returnRequests = [];
const RETURN_WINDOW_DAYS = 7;

function findReturn(orderId, itemId) {
    return returnRequests.find(r => r.orderId === orderId && String(r.itemId) === String(itemId));
}
function getReturnDeadline(order) {
    return order.receivedAt ? order.receivedAt + RETURN_WINDOW_DAYS * 86400000 : null;
}
function calcRefundAmount(order, item) {
    const lineAmount = Number(item.price) * (Number(item.quantity) || 1);
    const paid = (Number(order.total) || 0) - (Number(order.deliveryFee) || 0);
    const full = paid + (Number(order.discount) || 0);
    const ratio = full > 0 ? paid / full : 1;
    return Math.round(lineAmount * ratio * 100) / 100;
}

function buildReturnActionHTML(order) {
    const items = Array.isArray(order.orderItems) ? order.orderItems : [];
    if (!items.length) return '';
    const deadline = getReturnDeadline(order);
    const expired = !!(deadline && Date.now() > deadline);
    const btnClass = 'btn-return';
    let html = '';
    items.forEach(item => {
        const name = escapeHTML(item.name);
        const request = findReturn(order.id, item.id);
        if (request) {
            if (request.status === 'pending') html += `<div class="mt-6 fs-11 text-amber">↩️ Return requested for ${name} — waiting for review</div>`;
            else if (request.status === 'approved') html += `<div class="mt-6 fs-11 text-green">✓ ${name} refunded: ${formatPeso(request.refundAmount)}</div>`;
            else html += `<div class="mt-6 fs-11 text-red-light">✗ Return rejected for ${name}${request.adminNote ? ': ' + escapeHTML(request.adminNote) : ''}
                <button onclick="openSupportModal('new')" class="${btnClass} bg-slate-dark text-light">Contact support</button></div>`;
        } else if (expired) {
            html += `<div class="mt-6 fs-11 text-dim">Return window closed for ${name}</div>`;
        } else {
            html += `<button onclick="openReturnModal('${order.id}', ${Number(item.id)})" class="${btnClass}">↩️ Return broken item: ${name}</button>`;
        }
    });
    if (deadline && !expired && html.includes('Return broken item')) {
        const days = Math.max(1, Math.ceil((deadline - Date.now()) / 86400000));
        html += `<div class="mt-4 fs-10 text-dim">Returns accepted for ${days} more day(s).</div>`;
    }
    return html;
}

function openReturnModal(orderId, itemId) {
    if (!currentUser) return;
    const order = customerOrders.find(o => o.id === orderId);
    const item = order && (order.orderItems || []).find(it => String(it.id) === String(itemId));
    if (!order || !item || order.buyerEmail !== currentUser.email) return;
    if (findReturn(orderId, itemId)) { alert('You already sent a return request for this item.'); return; }
    document.getElementById('returnOrderId').value = orderId;
    document.getElementById('returnItemId').value = String(itemId);
    document.getElementById('returnItemSummary').textContent = `${orderId} · ${item.quantity}x ${item.name}`;
    document.getElementById('returnRefundNote').textContent = `If approved you will be refunded ${formatPeso(calcRefundAmount(order, item))}.`;
    document.getElementById('returnDetails').value = '';
    document.getElementById('returnPhoto').value = '';
    openModal('returnModal');
}

function submitReturnRequest(event) {
    event.preventDefault();
    if (!currentUser) return;
    const orderId = document.getElementById('returnOrderId').value;
    const itemId = document.getElementById('returnItemId').value;
    const order = customerOrders.find(o => o.id === orderId);
    const item = order && (order.orderItems || []).find(it => String(it.id) === String(itemId));
    if (!order || !item || order.buyerEmail !== currentUser.email || order.status !== 'to_rate') {
        alert('This item cannot be returned.');
        return;
    }
    const deadline = getReturnDeadline(order);
    if (deadline && Date.now() > deadline) { alert('Sorry, the return window for this order has closed.'); return; }
    if (findReturn(orderId, itemId)) { alert('You already sent a return request for this item.'); return; }

    const reason = document.getElementById('returnReason').value;
    const details = document.getElementById('returnDetails').value.trim();
    if (details.length < 10) { alert('Please describe the problem (at least 10 characters).'); return; }

    const file = document.getElementById('returnPhoto').files[0];
    if (file && (!file.type.startsWith('image/') || file.size > 2 * 1024 * 1024)) {
        alert('Please choose an image file smaller than 2 MB.');
        return;
    }

    const create = (photo) => {
        const request = {
            id: uniqueId('RET', returnRequests),
            orderId, itemId: item.id,
            productName: item.name, qty: Number(item.quantity) || 1,
            refundAmount: calcRefundAmount(order, item),
            lineAmount: Number(item.price) * (Number(item.quantity) || 1),
            reason, details, photo: photo || '',
            buyerEmail: currentUser.email,
            buyerName: currentUser.displayName || currentUser.firstName,
            sellerName: item.sellerName || 'Official Store', sellerEmail: item.sellerEmail || '',
            status: 'pending', adminNote: '', requestedAt: Date.now(), resolvedAt: null, customerUnread: false
        };
        returnRequests.unshift(request);
        pushManagerAlert(`Return requested: "${request.productName}" (${request.id})`);
        closeModal('returnModal');
        alert(`Return request ${request.id} sent. We will review it and update you under Customer Service → My Returns.`);
        renderPurchasesOrdersList();
        updateSupportBadge();
    };
    if (file) {
        const reader = new FileReader();
        reader.onload = () => create(reader.result);
        reader.onerror = () => alert('The photo could not be read. Please try another file.');
        reader.readAsDataURL(file);
    } else {
        create('');
    }
}

function renderMyReturns() {
    const box = document.getElementById('supportReturnsList');
    if (!box || !currentUser) return;
    const mine = returnRequests.filter(r => r.buyerEmail === currentUser.email);
    mine.forEach(r => { r.customerUnread = false; });
    updateSupportBadge();
    if (mine.length === 0) {
        box.innerHTML = `<p class="ach-muted">No return requests yet. To return a broken item, open My Purchases, find the delivered order and tap "Return broken item".</p>`;
        return;
    }
    box.innerHTML = mine.map(r => `<div class="ticket-card p-10">
        <div class="d-flex jc-between gap-8 ai-start">
            <span><strong>${escapeHTML(r.productName)}</strong><br><small class="text-dim">${escapeHTML(r.id)} · ${escapeHTML(r.orderId)} · ${escapeHTML(timeAgo(r.requestedAt))}</small></span>
            ${statusChip(r.status)}
        </div>
        <div class="fs-12 text-soft mt-6">${escapeHTML(r.reason)}</div>
        <div class="fs-12 mt-4 ${r.status === 'approved' ? 'text-green' : 'text-muted'}">${r.status === 'approved' ? 'Refunded' : 'Refund if approved'}: <strong>${formatPeso(r.refundAmount)}</strong></div>
        ${r.adminNote ? `<div class="fs-12 text-soft mt-4">Note from support: ${escapeHTML(r.adminNote)}</div>` : ''}
    </div>`).join('');
}

function getRecentRefunds(sinceTs) {
    return returnRequests
        .filter(r => r.status === 'approved' && (r.resolvedAt || 0) >= sinceTs)
        .reduce((sum, r) => sum + r.refundAmount, 0);
}

function renderReturnsPanel() {
    const box = document.getElementById('adminReturnsList');
    if (!box) return;
    if (returnRequests.length === 0) {
        box.innerHTML = `<p class="text-muted fs-12">No return requests yet.</p>`;
        return;
    }
    const sorted = [...returnRequests].sort((a, b) =>
        (a.status === 'pending' ? 0 : 1) - (b.status === 'pending' ? 0 : 1) || b.requestedAt - a.requestedAt);
    box.innerHTML = sorted.slice(0, 20).map(r => {
        const photo = r.photo && r.photo.startsWith('data:image/')
            ? `<img src="${r.photo}" alt="Customer photo of the broken item" class="return-photo" onclick="this.classList.toggle('return-photo-zoom')" title="Click to enlarge">` : '';
        const actions = r.status === 'pending'
            ? `<div class="ticket-reply">
                <input type="text" id="retNote-${r.id}" maxlength="200" placeholder="Note to customer (required to reject)">
                <div class="d-flex gap-6">
                    <button class="ach-claim-btn anim-none bg-green" onclick="decideReturn('${r.id}', 'approved')">✓ Refund</button>
                    <button class="ach-claim-btn anim-none bg-red text-white" onclick="decideReturn('${r.id}', 'rejected')">✗ Reject</button>
                </div></div>`
            : `<div class="fs-11 text-muted mt-6">${r.status === 'approved' ? 'Refunded' : 'Rejected'} by ${escapeHTML(r.decidedBy || 'admin')} · ${escapeHTML(timeAgo(r.resolvedAt))}${r.adminNote ? ' — ' + escapeHTML(r.adminNote) : ''}</div>`;
        return `<div class="ticket-card p-10">
            <div class="d-flex jc-between gap-8 ai-start">
                <span><strong>${escapeHTML(r.productName)}</strong> × ${r.qty}<br>
                <small class="text-dim">${escapeHTML(r.id)} · ${escapeHTML(r.orderId)} · ${escapeHTML(r.buyerName)} (${escapeHTML(r.buyerEmail)}) · Seller: ${escapeHTML(r.sellerName)}</small></span>
                ${statusChip(r.status)}
            </div>
            <div class="fs-12 text-amber mt-6">${escapeHTML(r.reason)} · refund ${formatPeso(r.refundAmount)}</div>
            <div class="fs-12 text-soft mt-4">${textToHTML(r.details)}</div>
            ${photo}${actions}
        </div>`;
    }).join('');
}

function decideReturn(id, decision) {
    if (!isManagerUser()) return;
    const request = returnRequests.find(r => r.id === id);
    if (!request || request.status !== 'pending') return;
    const noteInput = document.getElementById(`retNote-${id}`);
    const note = noteInput ? noteInput.value.trim() : '';
    if (decision === 'rejected' && !note) {
        alert('Please add a short note so the customer knows why the return was rejected.');
        return;
    }
    if (decision === 'approved' && !confirm(`Refund ${formatPeso(request.refundAmount)} to ${request.buyerName} for "${request.productName}"?`)) return;

    if (decision === 'approved') {
        totalStoreRevenue = Math.max(0, totalStoreRevenue - request.refundAmount);
        const order = customerOrders.find(o => o.id === request.orderId);
        if (order && Array.isArray(order.sellerBreakdown)) {
            const entry = order.sellerBreakdown.find(e =>
                (request.sellerEmail && e.sellerEmail === request.sellerEmail) || (!request.sellerEmail && e.sellerName === request.sellerName));
            if (entry) entry.amount = Math.max(0, Number(entry.amount) - request.lineAmount);
        }
        sellerNotifications.push({
            productName: `Return ${request.id}`,
            reason: `"${request.productName}" from order ${request.orderId} was reported broken and refunded (${formatPeso(request.lineAmount)} removed from your sales).`,
            sellerName: request.sellerName, sellerEmail: request.sellerEmail,
            type: 'return_notice', read: false
        });
    }
    request.status = decision;
    request.adminNote = note;
    request.resolvedAt = Date.now();
    request.decidedBy = currentAdminName();
    request.customerUnread = true;
    clearManagerAlerts(request.id);
    logAdminActivity(`${decision === 'approved' ? 'refunded' : 'rejected'} return ${request.id} ("${request.productName}")`);
    try { updateSellerHubMetrics(); } catch (e) { /* seller panel not on screen */ }
    renderAdminDashboard();
    renderAchievements();
    updateSupportBadge();
}

(function wrapReceivedForReturns() {
    const originalReceived = window.markOrderReceived;
    window.markOrderReceived = function (orderId) {
        const order = customerOrders.find(o => o.id === orderId);
        const result = originalReceived.apply(this, arguments);
        if (order && order.status === 'to_rate' && !order.receivedAt) order.receivedAt = Date.now();
        return result;
    };

    const originalCount = window.countItemsBought;
    window.countItemsBought = function (user) {
        const base = originalCount.apply(this, arguments);
        const returned = returnRequests
            .filter(r => user && r.buyerEmail === user.email && r.status === 'approved')
            .reduce((sum, r) => sum + (r.qty || 1), 0);
        return Math.max(0, base - returned);
    };
})();

document.addEventListener('DOMContentLoaded', () => {
    applyRoleVisibility();
});

let accountChats = {}; 
let activeAdminChatEmail = null;
const OPEN_ORDER_STATUSES = ['to_confirm', 'to_pay', 'to_ship', 'to_receive'];

function emailKey(email) { return String(email || '').toLowerCase(); }
function jsArg(value) { return escapeHTML(JSON.stringify(value)); }
function getAccountChat(email) {
    const key = emailKey(email);
    return accountChats[key] || (accountChats[key] = { messages: [], userUnread: false, adminUnread: false });
}
function findAccount(email) { return registeredUsers.find(u => emailKey(u.email) === emailKey(email)); }
function accountName(user) {
    return user ? (user.displayName || `${user.firstName || ''} ${user.lastName || ''}`.trim() || user.email) : 'Unknown';
}
function findSellerAccount(sellerEmail, sellerName) {
    let user = sellerEmail ? findAccount(sellerEmail) : null;
    if (!user && sellerName) {
        user = registeredUsers.find(u => !managerEmails.includes(u.email) && (u.shopName === sellerName || u.displayName === sellerName));
    }
    return user && !managerEmails.includes(user.email) ? user : null;
}
function getAccountStats(user) {
    const mine = customerOrders.filter(o => emailKey(o.buyerEmail) === emailKey(user.email));
    const valid = mine.filter(o => o.status !== 'declined');
    return {
        orders: mine.length,
        open: mine.filter(o => OPEN_ORDER_STATUSES.includes(o.status)).length,
        spent: valid.reduce((sum, o) => sum + Number(o.total || 0), 0),
        items: countItemsBought(user)
    };
}

function renderCustomerDirectory() {
    const box = document.getElementById('adminCustomersList');
    if (!box) return;
    const query = ((document.getElementById('adminCustomerSearch') || {}).value || '').trim().toLowerCase();
    const filter = (document.getElementById('adminCustomerFilter') || {}).value || 'all';
    const accounts = registeredUsers.filter(u => !managerEmails.includes(u.email));
    const bannedCount = accounts.filter(u => u.banned).length;

    const list = accounts.filter(u => {
        if (query && !`${accountName(u)} ${u.firstName || ''} ${u.lastName || ''} ${u.email} ${u.shopName || ''}`.toLowerCase().includes(query)) return false;
        if (filter === 'active') return !u.banned;
        if (filter === 'banned') return !!u.banned;
        if (filter === 'sellers') return !!u.isSeller;
        if (filter === 'riders') return !!u.isDelivery;
        if (filter === 'minors') return !!u.birthDate && calculateAge(u.birthDate) < ADULT_AGE;
        if (filter === 'unread') return !!(accountChats[emailKey(u.email)] || {}).adminUnread;
        return true;
    });

    let html = `<div class="fs-11 text-muted mb-6">${accounts.length} accounts · ${accounts.length - bannedCount} active · ${bannedCount} banned · showing ${list.length}</div>`;
    if (list.length === 0) html += `<p class="text-muted fs-12">${accounts.length ? 'No accounts match your filters.' : 'No customer accounts yet. They appear here when someone signs up.'}</p>`;
    html += list.map(u => {
        const stats = getAccountStats(u);
        const chat = accountChats[emailKey(u.email)];
        const adult = u.birthDate ? (calculateAge(u.birthDate) >= ADULT_AGE) : null;
        const chips = [
            u.banned ? '<span class="chip bg-ef444422 text-red bdc-ef4444">BANNED</span>' : '',
            u.isSeller ? '<span class="chip bg-a78bfa22 text-violet bdc-a78bfa">SELLER</span>' : '',
            u.isDelivery ? '<span class="chip bg-38bdf822 text-sky bdc-38bdf8">RIDER</span>' : '',
            idStatusOf(u) === 'verified' ? '<span class="chip bg-22c55e22 text-green bdc-22c55e">ID VERIFIED</span>' : (idStatusOf(u) === 'pending' ? '<span class="chip bg-f59e0b22 text-orange bdc-f59e0b">ID PENDING</span>' : ''),
            adult === null ? '' : adult ? '<span class="chip bg-22c55e22 text-green bdc-22c55e">18+</span>' : '<span class="chip bg-f59e0b22 text-orange bdc-f59e0b">UNDER 18</span>',
            chat && chat.adminUnread ? '<span class="chip bg-ef444422 text-red-pale bdc-ef4444">💬 NEW REPLY</span>' : ''
        ].join(' ');
        const name = accountName(u);
        return `<div class="acct-row ${u.banned ? 'acct-banned' : ''}">
            <span class="admin-avatar ${u.banned ? 'bg-7f1d1d' : 'bg-0e7490'}">${escapeHTML(String(name).charAt(0).toUpperCase())}</span>
            <span class="acct-info">
                <strong>${escapeHTML(name)}</strong> ${chips}<br>
                <span class="text-muted fs-11">${escapeHTML(u.email)}${u.location ? ' · ' + escapeHTML(u.location) : ''}${u.dateCreated ? ' · joined ' + escapeHTML(u.dateCreated) : ''}</span><br>
                <span class="text-soft fs-11">${stats.orders} order(s)${stats.open ? ` (${stats.open} open)` : ''} · ${stats.items} item(s) bought · spent ${formatPeso(stats.spent)}</span>
                ${u.banned ? `<br><span class="text-red-light fs-11">Reason: ${escapeHTML(u.banReason || '-')} (by ${escapeHTML(u.bannedBy || 'admin')})</span>` : ''}
            </span>
            <span class="acct-actions">
                <button class="sm-btn" ${u.banned ? 'disabled title="Banned accounts cannot log in"' : ''} onclick="openAdminChat(${jsArg(u.email)})">💬 Chat</button>
                ${u.banned
                    ? `<button class="sm-btn sm-green" onclick="unbanUser(${jsArg(u.email)})">✅️ Unban</button>`
                    : `<button class="sm-btn sm-red" onclick="openBanUserModal(${jsArg(u.email)})">🚫 Ban</button>`}
            </span>
        </div>`;
    }).join('');
    box.innerHTML = html;
}

function openBanUserModal(email) {
    if (!isManagerUser()) return;
    const user = findAccount(email);
    if (!user || managerEmails.includes(user.email)) return;
    const stats = getAccountStats(user);
    document.getElementById('banUserEmail').value = user.email;
    document.getElementById('banUserSummary').textContent =
        `${accountName(user)} (${user.email}) will be signed out and blocked from logging in.` +
        (user.isSeller ? ' Their product listings will be taken off the store.' : '') +
        (stats.open ? ` They have ${stats.open} open order(s) — cancel them from Order Management if needed.` : '');
    document.getElementById('banUserReason').value = '';
    openModal('banUserModal');
}

function confirmBanUser(event) {
    event.preventDefault();
    if (!isManagerUser()) return;
    const user = findAccount(document.getElementById('banUserEmail').value);
    if (!user || managerEmails.includes(user.email)) return;
    const reason = document.getElementById('banUserReason').value.trim() || 'Violates store policy.';
    user.banned = true;
    user.banReason = reason;
    user.bannedAt = Date.now();
    user.bannedBy = currentAdminName();
    user.selectedVoucherId = null;

    const listings = products.filter(p => p.sellerEmail && emailKey(p.sellerEmail) === emailKey(user.email));
    listings.forEach(p => {
        products.splice(products.indexOf(p), 1);
        bannedProducts.push({ ...p, banReason: `Seller account suspended: ${reason}`, suspendedWith: user.email });
    });
    if (listings.length) {
        cart = cart.filter(item => !listings.some(p => p.id === item.id));
        updateCartUI();
        applySortingAndFilters();
    }
    logAdminActivity(`banned account ${user.email}`);
    closeModal('banUserModal');
    alert(`${accountName(user)} has been banned.${listings.length ? ` ${listings.length} listing(s) were taken off the store.` : ''}`);
    renderAdminDashboard();
}

function unbanUser(email) {
    if (!isManagerUser()) return;
    const user = findAccount(email);
    if (!user || !user.banned) return;
    user.banned = false;
    delete user.banReason; delete user.bannedAt; delete user.bannedBy;
    const restore = bannedProducts.filter(p => p.suspendedWith && emailKey(p.suspendedWith) === emailKey(user.email));
    restore.forEach(p => {
        bannedProducts.splice(bannedProducts.indexOf(p), 1);
        const { banReason, suspendedWith, ...clean } = p;
        products.push(clean);
    });
    if (restore.length) applySortingAndFilters();
    logAdminActivity(`unbanned account ${user.email}`);
    alert(`${accountName(user)} can log in again.${restore.length ? ` ${restore.length} listing(s) restored.` : ''}`);
    renderAdminDashboard();
}

(function wrapLoginForBans() {
    const originalLogin = window.handleLogin;
    window.handleLogin = function (event) {
        const email = (document.getElementById('loginEmail').value || '').trim();
        const password = (document.getElementById('loginPassword').value || '').trim();
        const user = registeredUsers.find(u => String(u.email).toLowerCase() === email.toLowerCase() && u.password === password);
        if (user && user.banned) {
            if (event && event.preventDefault) event.preventDefault();
            alert(`This account has been suspended.\nReason: ${user.banReason || 'Violates store policy.'}\nContact bruhboyxean30@gmail.com if you think this is a mistake.`);
            return;
        }
        return originalLogin.apply(this, arguments);
    };
})();

function renderBubbles(messages, viewerIsAdmin) {
    if (!messages.length) return `<p class="ach-muted ta-center">No messages yet.</p>`;
    return messages.map(m => {
        const mine = (m.from === 'admin') === viewerIsAdmin;
        return `<div class="msg-row ${mine ? 'msg-customer' : 'msg-support'}">
            <div class="msg-bubble">
                <div class="msg-meta">${m.from === 'admin' ? '🛡️ Store admin · ' : ''}${escapeHTML(m.name)} · ${escapeHTML(formatTime(m.ts))}</div>
                ${m.context ? `<div class="msg-context">${escapeHTML(m.context)}</div>` : ''}
                ${textToHTML(m.text)}
            </div>
        </div>`;
    }).join('');
}

function openAdminChat(email, context) {
    if (!isManagerUser()) return;
    const user = findAccount(email);
    if (!user) { alert('This seller has no account to message (it may be an official store listing).'); return; }
    if (user.banned) { alert('Banned accounts cannot log in, so they cannot read messages.'); return; }
    activeAdminChatEmail = user.email;
    const chat = getAccountChat(user.email);
    chat.adminUnread = false;
    clearManagerAlerts(user.email);
    document.getElementById('adminChatTitle').textContent = `💬 Chat with ${accountName(user)}`;
    document.getElementById('adminChatSub').textContent = `${user.email}${user.isSeller ? ' · Seller' : ''}${user.isDelivery ? ' · Delivery rider' : ''}`;
    document.getElementById('adminChatContext').value = context || '';
    document.getElementById('adminChatInput').value = '';
    renderAdminChat();
    openModal('adminChatModal');
    renderCustomerDirectory();
}

function renderAdminChat() {
    const box = document.getElementById('adminChatMessages');
    if (!box || !activeAdminChatEmail) return;
    box.innerHTML = renderBubbles(getAccountChat(activeAdminChatEmail).messages, true);
    box.scrollTop = box.scrollHeight;
}

function sendAdminDirectMessage(email, text, context) {
    const chat = getAccountChat(email);
    const last = chat.messages[chat.messages.length - 1];
    chat.messages.push({ from: 'admin', name: currentAdminName(), text, context: context || '', ts: Date.now() });
    chat.userUnread = true;
    if (!last || last.from !== 'admin' || Date.now() - last.ts > 10 * 60000) {
        logAdminActivity(`messaged ${accountName(findAccount(email))}${context ? ` (${context})` : ''}`);
    }
    updateSupportBadge();
}

function sendAdminChat(event) {
    event.preventDefault();
    if (!isManagerUser() || !activeAdminChatEmail) return;
    const input = document.getElementById('adminChatInput');
    const text = input.value.trim();
    if (!text) return;
    sendAdminDirectMessage(activeAdminChatEmail, text, document.getElementById('adminChatContext').value.trim());
    input.value = '';
    renderAdminChat();
}

function renderInbox() {
    const list = document.getElementById('supportInboxList');
    const form = document.getElementById('inboxForm');
    if (!list || !currentUser) return;
    const canStart = canStartAdminChat(currentUser);
    const chat = canStart ? getAccountChat(currentUser.email) : accountChats[emailKey(currentUser.email)];
    chat && (chat.userUnread = false);
    updateSupportBadge();
    const hint = document.getElementById('inboxHint');
    if (hint) hint.textContent = canStart
        ? 'Having trouble? Chat with the admin here about deliveries, orders or your rider account.'
        : 'Messages from the store team (about your orders, listings or account).';
    if (!chat || chat.messages.length === 0) {
        list.innerHTML = canStart
            ? `<p class="ach-muted">No messages yet. Write to the store admin below.</p>`
            : `<p class="ach-muted">No messages from the store team yet.</p>`;
        if (form) form.style.display = canStart ? 'block' : 'none';
        return;
    }
    list.innerHTML = renderBubbles(chat.messages, false);
    list.scrollTop = list.scrollHeight;
    if (form) form.style.display = 'block';
}

function sendInboxReply(event) {
    event.preventDefault();
    if (!currentUser) return;
    const chat = canStartAdminChat(currentUser) ? getAccountChat(currentUser.email) : accountChats[emailKey(currentUser.email)];
    const input = document.getElementById('inboxInput');
    const text = input.value.trim();
    if (!chat || !text) return;
    const name = accountName(currentUser);
    const isFirstMessage = chat.messages.length === 0;
    chat.messages.push({ from: 'user', name, text, context: '', ts: Date.now() });
    chat.adminUnread = true;
    pushManagerAlert(isFirstMessage
        ? `Chat: ${name} started a chat with you (${currentUser.email})`
        : `Chat: ${name} replied in direct chat (${currentUser.email})`);
    input.value = '';
    renderInbox();
}


/* =========================================================
   ORDER MANAGEMENT (admin): cancel orders, chat the seller / buyer
   ========================================================= */
function orderSellers(order) {
    const map = new Map();
    (Array.isArray(order.orderItems) ? order.orderItems : []).forEach(item => {
        const key = item.sellerEmail || item.sellerName || 'Official Store';
        if (!map.has(key)) map.set(key, { email: item.sellerEmail || '', name: item.sellerName || 'Official Store', items: [] });
        map.get(key).items.push(item.name);
    });
    return [...map.values()];
}

function orderStatusChip(order) {
    const map = {
        to_confirm: ['Awaiting seller', '#fbbf24'], to_pay: ['To pay', '#f59e0b'], to_ship: ['To ship', '#38bdf8'],
        to_receive: ['On the way', '#6366f1'], to_rate: ['Delivered', '#22c55e']
    };
    let [label, color] = map[order.status] || ['Declined', '#ef4444'];
    if (order.status === 'declined' && order.cancelledBy === 'admin') label = 'Cancelled by admin';
    return `<span class="chip" style="background:${color}22;color:${color};border-color:${color};">${label}</span>`;
}

function renderAdminOrders() {
    const box = document.getElementById('adminOrdersList');
    if (!box) return;
    const query = ((document.getElementById('adminOrderSearch') || {}).value || '').trim().toLowerCase();
    const filter = (document.getElementById('adminOrderStatus') || {}).value || 'active';
    let list = customerOrders.filter(o => {
        if (query && !`${o.id} ${o.buyer || ''} ${o.buyerEmail || ''} ${o.items || ''}`.toLowerCase().includes(query)) return false;
        if (filter === 'active') return OPEN_ORDER_STATUSES.includes(o.status);
        if (filter === 'all') return true;
        return o.status === filter;
    });
    if (list.length === 0) {
        box.innerHTML = `<p class="text-muted fs-12">No orders in this view.</p>`;
        return;
    }
    box.innerHTML = `<div class="fs-11 text-muted mb-6">Showing ${Math.min(list.length, 40)} of ${list.length} order(s)</div>` +
        list.slice(0, 40).map(order => {
            const sellers = orderSellers(order);
            const buyerAccount = order.buyerEmail ? findAccount(order.buyerEmail) : null;
            const sellerButtons = sellers.map(sel => {
                const account = findSellerAccount(sel.email, sel.name);
                const context = `Order ${order.id} · ${sel.items.join(', ')}`.slice(0, 120);
                return account
                    ? `<button class="sm-btn" onclick="openAdminChat(${jsArg(account.email)}, ${jsArg(context)})">💬 Seller: ${escapeHTML(sel.name)}</button>`
                    : `<button class="sm-btn" disabled title="Official store listing: no seller account to message">💬 ${escapeHTML(sel.name)} (no account)</button>`;
            }).join('');
            const buyerButton = buyerAccount
                ? `<button class="sm-btn" onclick="openAdminChat(${jsArg(buyerAccount.email)}, ${jsArg('Order ' + order.id)})">💬 Buyer</button>` : '';
            const adminIsSeller = (order.sellerBreakdown || []).some(e => (e.sellerEmail || '').toLowerCase() === ADMIN_SELLER_EMAIL.toLowerCase());
            let adminSellerButtons = '';
            if (adminIsSeller && order.status === 'to_confirm') {
                adminSellerButtons = `<button class="sm-btn" onclick="adminConfirmOrder(${jsArg(order.id)})">✓ Confirm order (seller)</button><button class="sm-btn sm-red" onclick="adminDeclineOrder(${jsArg(order.id)})">✗ Decline order</button>`;
            } else if (adminIsSeller && order.deliveryStage === 'waiting_seller' && !(order.deliverySellerResponses || {})[ADMIN_SELLER_EMAIL]) {
                adminSellerButtons = `<button class="sm-btn" onclick="adminRespondRider(${jsArg(order.id)}, true)">🚚 Accept rider ${escapeHTML(order.deliveryBy || '')}</button><button class="sm-btn sm-red" onclick="adminRespondRider(${jsArg(order.id)}, false)">✗ Decline rider</button>`;
            }
            const cancelButton = OPEN_ORDER_STATUSES.includes(order.status)
                ? `<button class="sm-btn sm-red" onclick="openCancelOrderModal(${jsArg(order.id)})">❌️ Cancel order</button>` : '';
            return `<div class="ticket-card p-10">
                <div class="d-flex jc-between gap-8 ai-start">
                    <span><strong>${escapeHTML(order.id)}</strong> · ${escapeHTML(order.buyer || '-')}<br>
                    <small class="text-muted">${escapeHTML(order.items)} · <strong class="text-sky">${formatPeso(order.total || 0)}</strong></small></span>
                    ${orderStatusChip(order)}
                </div>
                ${order.cancelReason ? `<div class="fs-11 text-red-light mt-4">Cancelled: ${escapeHTML(order.cancelReason)}</div>` : ''}
                <div class="order-actions">${adminSellerButtons}${sellerButtons}${buyerButton}${cancelButton}</div>
            </div>`;
        }).join('');
}

function adminConfirmOrder(orderId) {
    if (!isManagerUser()) return;
    try { confirmSellerOrder(orderId); } finally { renderAdminDashboard(); }
}
function adminDeclineOrder(orderId) {
    if (!isManagerUser()) return;
    try { declineSellerOrder(orderId); } finally { renderAdminDashboard(); }
}
function adminRespondRider(orderId, accept) {
    if (!isManagerUser()) return;
    try { respondToDeliveryRequest(orderId, accept); } finally { renderAdminDashboard(); }
}

function openCancelOrderModal(orderId) {
    if (!isManagerUser()) return;
    const order = customerOrders.find(o => o.id === orderId);
    if (!order || !OPEN_ORDER_STATUSES.includes(order.status)) { alert('This order can no longer be cancelled.'); return; }
    document.getElementById('cancelOrderId').value = orderId;
    document.getElementById('cancelOrderSummary').textContent = `${orderId} · ${order.buyer || '-'} · ${formatPeso(order.total || 0)} · ${order.items}`;
    document.getElementById('cancelOrderNote').value = '';
    openModal('cancelOrderModal');
}

function confirmCancelOrder(event) {
    event.preventDefault();
    if (!isManagerUser()) return;
    const orderId = document.getElementById('cancelOrderId').value;
    const order = customerOrders.find(o => o.id === orderId);
    if (!order || !OPEN_ORDER_STATUSES.includes(order.status)) { alert('This order can no longer be cancelled.'); return; }
    const reasonChoice = document.getElementById('cancelOrderReason').value;
    const note = document.getElementById('cancelOrderNote').value.trim();
    const reason = note ? `${reasonChoice} — ${note}` : reasonChoice;
    const wasPaidOrShipping = order.status === 'to_ship' || order.status === 'to_receive';

    (order.orderItems || []).forEach(item => {
        const p = products.find(pr => pr.id === item.id) || bannedProducts.find(pr => pr.id === item.id);
        if (p) { p.stock += item.quantity; p.sold = Math.max(0, (p.sold || 0) - item.quantity); }
    });
    totalStoreRevenue = Math.max(0, totalStoreRevenue - (order.total || 0));
    salesHistory = salesHistory.filter(sale => sale.orderId !== orderId);
    sellerNotifications = sellerNotifications.filter(n => !(n.orderId === orderId && n.type === 'order_confirm'));
    if (order.voucherId) {
        const buyer = findAccount(order.buyerEmail);
        const voucher = buyer && (buyer.rewards || []).find(r => r.id === order.voucherId);
        if (voucher) voucher.used = false;
    }

    order.status = 'declined';
    order.cancelledBy = 'admin';
    order.cancelReason = reason;
    order.cancelledAt = Date.now();
    order.cancelledByName = currentAdminName();

    if (!order.messages) order.messages = [];
    order.messages.push({
        from: `🛡️ Store admin (${currentAdminName()})`,
        text: `This order was cancelled by the store. Reason: ${reason}`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
    orderSellers(order).forEach(sel => {
        sellerNotifications.push({
            type: 'admin_notice', productName: `Order ${orderId} cancelled`,
            reason: `The store admin cancelled this order (${sel.items.join(', ')}). Reason: ${reason}`,
            sellerName: sel.name, sellerEmail: sel.email, read: false
        });
    });
    const buyer = order.buyerEmail ? findAccount(order.buyerEmail) : null;
    if (buyer && !buyer.banned) {
        sendAdminDirectMessage(buyer.email,
            `Your order ${orderId} was cancelled by the store. Reason: ${reason}.${wasPaidOrShipping ? ' If you already paid, you will be refunded.' : ''}`,
            `Order ${orderId}`);
    }
    logAdminActivity(`cancelled order ${orderId} (${reasonChoice})`);
    closeModal('cancelOrderModal');
    alert(`Order ${orderId} cancelled. Stock was restored and the buyer and seller were notified.`);
    try { updateSellerHubMetrics(); } catch (e) { /* seller panel not on screen */ }
    try { updateDeliveryHub(); } catch (e) { /* delivery panel not on screen */ }
    const panel = document.getElementById('purchasesPanel');
    if (panel && panel.classList.contains('open')) renderPurchasesOrdersList();
    applySortingAndFilters();
    renderAdminDashboard();
    renderAchievements();
}

/* =========================================================
   18+ ACCESS: National ID age verification
   Flow: customer (18+ by date of birth) uploads an ID photo + a selfie
         -> admin reviews it in "Age Verification" on the dashboard
         -> approved accounts unlock 18+ items. The photos are deleted
            as soon as the admin decides; only the result is kept.
   NOTE: this is a front-end demo (data lives in this browser tab). For a real
   store the images, the review and the 18+ check must live on a server.
   ========================================================= */
const ID_MAX_BYTES = 3 * 1024 * 1024;
const ID_ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

function idStatusOf(user) {
    return (user && user.idVerification && user.idVerification.status) || 'none';
}

function adultBlockMessage(user) {
    if (!user) return "This is an 18+ item. Log in with an account aged 18 or older to buy it.";
    if (!isDobAdult(user)) return "This is an 18+ item and is not available for your account.";
    if (idStatusOf(user) === 'pending') return "Your ID is still being reviewed. You can buy 18+ items once it is approved.";
    return "This is an 18+ item. Verify your age with your National ID (Age Verification in the sidebar) to buy it.";
}

function renderAdultNotice() {
    const box = document.getElementById('adultNotice');
    if (!box) return;
    const show = !!currentUser && !isManagerAccount(currentUser) && isDobAdult(currentUser)
        && !isIdVerified(currentUser) && activeSidebarTab === 'shop';
    if (!show) { box.classList.add('is-hidden'); box.innerHTML = ''; return; }
    const unlock = ADULT_REQUIRE_ID_TO_VIEW ? 'see and buy' : 'buy';
    if (idStatusOf(currentUser) === 'pending') {
        box.innerHTML = `<span>⏳ Your ID is being reviewed. You can ${unlock} 18+ items once it is approved.</span>`;
    } else {
        box.innerHTML = `<span>🔞 Verify your age with a National ID to ${unlock} 18+ items.</span><button type="button" class="adult-notice-btn" onclick="openIdVerifyModal()">Verify my ID</button>`;
    }
    box.classList.remove('is-hidden');
}

function renderAgeVerifyCard() {
    const card = document.getElementById('ageVerifyCard');
    const body = document.getElementById('ageVerifyBody');
    if (!card || !body) return;
    // Only 18+ accounts see this card. Guests, admins and under-18 accounts do not.
    if (!currentUser || isManagerAccount(currentUser) || !isDobAdult(currentUser)) {
        card.style.display = 'none';
        return;
    }
    card.style.display = '';
    const v = currentUser.idVerification || {};
    const status = idStatusOf(currentUser);
    const startBtn = label => `<button type="button" class="ach-claim-btn anim-none mt-6" onclick="openIdVerifyModal()">${label}</button>`;
    if (status === 'verified') {
        body.innerHTML = `<div class="age-status age-status--ok">✅ Age verified</div><p class="ach-muted">18+ items are unlocked on your account.${v.reviewedAt ? ' Verified ' + escapeHTML(timeAgo(v.reviewedAt)) + '.' : ''}</p>`;
    } else if (status === 'pending') {
        body.innerHTML = `<div class="age-status age-status--wait">⏳ Under review</div><p class="ach-muted">Submitted ${escapeHTML(timeAgo(v.submittedAt || Date.now()))}. We will message you under Customer Service → Messages.</p>`;
    } else if (status === 'rejected') {
        body.innerHTML = `<div class="age-status age-status--bad">❌ Not approved</div><p class="ach-muted">${escapeHTML(v.rejectReason || 'The ID could not be verified.')}</p>${startBtn('Try again')}`;
    } else {
        body.innerHTML = `<p class="ach-muted">Confirm you are really 18 or older with a government ID to see and buy 18+ items.</p>${startBtn('Verify with National ID')}`;
    }
}

function openIdVerifyModal() {
    if (!currentUser) { alert('Please log in first.'); openModal('loginModal'); return; }
    if (isManagerAccount(currentUser)) return;
    if (!isDobAdult(currentUser)) { alert('18+ items are not available for this account.'); return; }
    const status = idStatusOf(currentUser);
    if (status === 'verified') { alert('Your age is already verified.'); return; }
    if (status === 'pending') { alert('Your ID is already being reviewed.'); return; }
    ['idFrontInput', 'idSelfieInput'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
    ['idFrontPreview', 'idSelfiePreview'].forEach(id => {
        const img = document.getElementById(id);
        if (img) { img.removeAttribute('src'); img.classList.add('is-hidden'); }
    });
    const consent = document.getElementById('idConsentCheck');
    if (consent) consent.checked = false;
    openModal('idVerifyModal');
}

function validateIdImage(file) {
    if (!file) return 'Please choose a photo.';
    if (!ID_ALLOWED_TYPES.includes(file.type)) return 'Please choose a JPG, PNG or WebP image.';
    if (file.size > ID_MAX_BYTES) return 'Each photo must be 3 MB or smaller.';
    return '';
}

function readFileAsDataURL(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(new Error('read failed'));
        reader.readAsDataURL(file);
    });
}

function previewIdImage(event, imgId) {
    const input = event.target;
    const file = input.files && input.files[0];
    const img = document.getElementById(imgId);
    if (!img) return;
    if (!file) { img.removeAttribute('src'); img.classList.add('is-hidden'); return; }
    const problem = validateIdImage(file);
    if (problem) {
        alert(problem);
        input.value = '';
        img.removeAttribute('src');
        img.classList.add('is-hidden');
        return;
    }
    readFileAsDataURL(file).then(url => { img.src = url; img.classList.remove('is-hidden'); }).catch(() => {});
}

function submitIdVerification(event) {
    event.preventDefault();
    if (!currentUser || isManagerAccount(currentUser)) return;
    if (!isDobAdult(currentUser)) { alert('18+ items are not available for this account.'); return; }
    const status = idStatusOf(currentUser);
    if (status === 'pending' || status === 'verified') { closeModal('idVerifyModal'); return; }
    if (!document.getElementById('idConsentCheck').checked) { alert('Please tick the consent box to continue.'); return; }

    const idFile = document.getElementById('idFrontInput').files[0];
    const selfieFile = document.getElementById('idSelfieInput').files[0];
    const problem = validateIdImage(idFile) || validateIdImage(selfieFile);
    if (problem) { alert(problem); return; }

    const user = currentUser;
    Promise.all([readFileAsDataURL(idFile), readFileAsDataURL(selfieFile)]).then(([idPhoto, selfiePhoto]) => {
        if (currentUser !== user) return;
        user.idVerification = {
            status: 'pending',
            idType: document.getElementById('idTypeSelect').value,
            idPhoto, selfiePhoto,
            submittedAt: Date.now()
        };
        managerStockAlerts = managerStockAlerts.filter(a => !(a.startsWith('ID check:') && a.includes(user.email)));
        pushManagerAlert(`ID check: ${accountName(user)} (${user.email}) submitted an ID for age verification`);
        closeModal('idVerifyModal');
        ['idFrontInput', 'idSelfieInput'].forEach(id => { document.getElementById(id).value = ''; });
        alert('ID submitted! A store admin will review it. You will get a message when it is done.');
        renderAgeVerifyCard();
        renderAdultNotice();
    }).catch(() => alert('A photo could not be read. Please try again.'));
}

function renderIdReviewPanel() {
    const box = document.getElementById('adminIdList');
    if (!box) return;
    const accounts = registeredUsers.filter(u => !managerEmails.includes(u.email));
    const pending = accounts.filter(u => idStatusOf(u) === 'pending');
    const verified = accounts.filter(u => idStatusOf(u) === 'verified').length;
    let html = `<div class="fs-11 text-muted mb-6">${pending.length} waiting for review · ${verified} verified</div>`;
    if (pending.length === 0) html += `<p class="text-muted fs-12">No ID checks waiting.</p>`;
    html += pending.map(u => {
        const v = u.idVerification;
        const fullName = `${u.firstName || ''} ${u.lastName || ''}`.trim();
        const age = calculateAge(u.birthDate);
        const img = (src, caption) => src && String(src).startsWith('data:image/')
            ? `<figure><img class="id-review-img" src="${src}" alt="${escapeHTML(caption)}" onclick="this.classList.toggle('zoomed')" title="Click to enlarge"><figcaption>${escapeHTML(caption)}</figcaption></figure>` : '';
        return `<div class="ticket-card p-10">
            <div class="d-flex jc-between gap-8 ai-start">
                <span><strong>${escapeHTML(fullName || accountName(u))}</strong> (${escapeHTML(accountName(u))})<br>
                <small class="text-dim">${escapeHTML(u.email)} · submitted ${escapeHTML(timeAgo(v.submittedAt))}</small></span>
                <span class="chip" style="background:#fbbf2422;color:#fbbf24;border-color:#fbbf24;">WAITING</span>
            </div>
            <div class="fs-12 text-soft mt-6">Account date of birth: <strong>${escapeHTML(u.birthDate || '-')}</strong>${isNaN(age) ? '' : ` (age ${age})`} · ID type: <strong>${escapeHTML(v.idType || '-')}</strong></div>
            <div class="id-review-photos">${img(v.idPhoto, 'ID')}${img(v.selfiePhoto, 'Selfie with ID')}</div>
            <ul class="id-check-list">
                <li>Name on the ID matches the account name</li>
                <li>Date of birth on the ID matches the account and shows 18+</li>
                <li>Face in the selfie matches the ID, and the ID is not expired</li>
            </ul>
            <div class="ticket-reply">
                <input type="text" id="idNote-${escapeHTML(emailKey(u.email))}" maxlength="200" placeholder="Reason (required to reject)">
                <div class="d-flex gap-6">
                    <button class="ach-claim-btn anim-none bg-green" onclick="decideIdVerification(${jsArg(u.email)}, 'approved')">✓ Approve 18+</button>
                    <button class="ach-claim-btn anim-none bg-red text-white" onclick="decideIdVerification(${jsArg(u.email)}, 'rejected')">✗ Reject</button>
                </div>
            </div>
        </div>`;
    }).join('');
    box.innerHTML = html;
}

function decideIdVerification(email, decision) {
    if (!isManagerUser()) return;
    const user = findAccount(email);
    const v = user && user.idVerification;
    if (!user || !v || v.status !== 'pending') return;
    const noteInput = document.getElementById('idNote-' + emailKey(email));
    const note = noteInput ? noteInput.value.trim() : '';
    if (decision === 'rejected' && !note) {
        alert('Please add a short reason so the customer knows what to fix.');
        return;
    }
    if (decision === 'approved') {
        if (!isDobAdult(user)) { alert('The date of birth on this account shows under 18, so it cannot be approved.'); return; }
        if (!confirm(`Approve ${accountName(user)} as 18+?\n\nOnly approve if the name and date of birth on the ID match the account, the selfie matches the ID, the ID is not expired and the age is 18 or older.`)) return;
    }
    // Keep only the result. The ID and selfie photos are dropped here on purpose.
    user.idVerification = {
        status: decision === 'approved' ? 'verified' : 'rejected',
        idType: v.idType,
        submittedAt: v.submittedAt,
        reviewedAt: Date.now(),
        reviewedBy: currentAdminName(),
        rejectReason: decision === 'rejected' ? note : ''
    };
    managerStockAlerts = managerStockAlerts.filter(a => !(a.startsWith('ID check:') && a.includes(user.email)));
    updateManagerBellBadge();
    if (!user.banned) {
        sendAdminDirectMessage(user.email, decision === 'approved'
            ? 'Your ID was verified. 18+ items are now unlocked on your account.'
            : `Your ID could not be verified. Reason: ${note}. You can submit a new ID from Age Verification in the sidebar.`,
            'Age verification');
    }
    logAdminActivity(`${decision === 'approved' ? 'approved' : 'rejected'} the ID check for ${user.email}`);
    alert(decision === 'approved' ? `${accountName(user)} is now verified as 18+.` : `ID check rejected for ${accountName(user)}.`);
    renderAdminDashboard();
}

(function wrapForAgeVerification() {
    const originalAuth = window.updateAuthUI;
    window.updateAuthUI = function () {
        const result = originalAuth.apply(this, arguments);
        // Take 18+ items out of the cart if the account may not buy them (e.g. after logout/login)
        const before = cart.length;
        cart = cart.filter(item => {
            const p = products.find(x => x.id === item.id);
            return !(p && p.adult && !isAdultUser(currentUser));
        });
        if (cart.length !== before) updateCartUI();
        renderAgeVerifyCard();
        renderAdultNotice();
        return result;
    };

    const originalDashboard = window.renderAdminDashboard;
    window.renderAdminDashboard = function () {
        const result = originalDashboard.apply(this, arguments);
        renderIdReviewPanel();
        return result;
    };
})();

document.addEventListener('DOMContentLoaded', () => {
    renderAgeVerifyCard();
    renderAdultNotice();
});


/* =========================================================
   SELLERS & RIDERS CAN SHOP TOO
   - A bar above the product list lets a seller or rider switch between
     "Browse Store", "Seller Page" and "Delivery" without opening the sidebar.
   - In the store a seller can buy from everyone except their own shop.
   - A rider can buy like any customer, but cannot deliver their own order.
   ========================================================= */
function isOwnPurchase(order) {
    return !!(currentUser && order && order.buyerEmail && emailKey(order.buyerEmail) === emailKey(currentUser.email));
}

function renderRoleBar() {
    const bar = document.getElementById('roleModeBar');
    if (!bar) return;
    const show = !!currentUser && !isManagerAccount(currentUser) && !!(currentUser.isSeller || currentUser.isDelivery);
    // The delivery stats panel lives under this bar and only shows on the Delivery tab
    // No product inventory on the Delivery tab
    const productsArea = document.getElementById('storeProductsArea');
    if (productsArea) productsArea.classList.toggle('is-hidden', !!(currentUser && currentUser.isDelivery && activeSidebarTab === 'delivery'));
    const statsPanel = document.getElementById('deliveryStatsCard');
    if (statsPanel) statsPanel.classList.toggle('is-hidden', !(show && currentUser.isDelivery && activeSidebarTab === 'delivery'));
    if (!show) { bar.classList.add('is-hidden'); bar.innerHTML = ''; return; }

    const tabs = [['shop', '🛍️ Browse Store']];
    if (currentUser.isSeller) tabs.push(['myshop', '🏪 Seller Page']);
    if (currentUser.isDelivery) tabs.push(['delivery', '🚚 Delivery']);

    const hints = {
        shop: currentUser.isSeller
            ? 'Shopping mode: you can buy from other sellers. Your own items can\u2019t be bought.'
            : 'Shopping mode: you can buy items just like a customer.',
        myshop: 'Showing only your own listings. Tap Browse Store to shop from other sellers.',
        delivery: 'Tap Browse Store to shop while you wait for deliveries.'
    };
    bar.innerHTML = `<div class="role-tabs">${tabs.map(([key, label]) =>
        `<button type="button" class="role-tab ${activeSidebarTab === key ? 'active' : ''}" onclick="switchSidebarTab('${key}')">${label}</button>`).join('')}</div>
        <span class="role-hint">${escapeHTML(hints[activeSidebarTab] || '')}</span>`;
    bar.classList.remove('is-hidden');
}

(function wrapForRoleBar() {
    ['updateAuthUI', 'switchSidebarTab'].forEach(name => {
        const original = window[name];
        window[name] = function () {
            const result = original.apply(this, arguments);
            renderRoleBar();
            return result;
        };
    });
})();

document.addEventListener('DOMContentLoaded', renderRoleBar);


/* =========================================================
   DELIVERY: own stats panel + chat with the admin
   ========================================================= */
function canStartAdminChat(user) {
    return !!(user && user.isDelivery && !isManagerAccount(user));
}

function isMyDelivery(order, user = currentUser) {
    if (!user || !order) return false;
    if (order.deliveryByEmail) return emailKey(order.deliveryByEmail) === emailKey(user.email);
    return !!order.deliveryBy && order.deliveryBy === (user.displayName || user.firstName);
}

function deliveryDoneTime(order) {
    if (order.receivedAt) return Number(order.receivedAt);
    const t = new Date(`${order.date}T12:00:00`).getTime();
    return isNaN(t) ? 0 : t;
}

function openRiderAdminChat() {
    if (!currentUser || !canStartAdminChat(currentUser)) return;
    openSupportModal('inbox');
}

function renderDeliveryExtras() {
    const extra = document.getElementById('deliveryStatsExtra');
    const chatBtn = document.getElementById('deliveryChatBtn');
    if (!extra || !currentUser || !currentUser.isDelivery) return;

    const mine = customerOrders.filter(o => o.status !== 'declined' && isMyDelivery(o));
    const done = mine.filter(o => o.deliveryStage === 'received');
    const now = Date.now();
    const startOfToday = new Date(); startOfToday.setHours(0, 0, 0, 0);
    const today = done.filter(o => deliveryDoneTime(o) >= startOfToday.getTime()).length;
    const week = done.filter(o => deliveryDoneTime(o) >= now - 7 * 86400000).length;
    const cancelled = Number(currentUser.deliveryCancelled || 0);
    const attempts = done.length + cancelled;
    const rate = attempts ? `${Math.round((done.length / attempts) * 100)}%` : '—';
    const fees = done.reduce((sum, o) => sum + ((Number(o.deliveryFee) || 0) + (Number(o.deliveryFeeWaived) || 0) || DELIVERY_FEE), 0);

    const card = (label, value, color) =>
        `<div class="delivery-stat"><span class="delivery-stat-value" style="color:${color};">${value}</span><span class="delivery-stat-label">${label}</span></div>`;
    const reviews = riderReviews.filter(r => emailKey(r.riderEmail) === emailKey(currentUser.email)).slice(-3).reverse();
    const reviewHTML = reviews.length
        ? reviews.map(r => `<div class="rider-review">
              <span class="text-amber">${'★'.repeat(Number(r.rating))}${'☆'.repeat(5 - Number(r.rating))}</span>
              <span class="text-dim fs-10"> ${escapeHTML(r.reviewerName || 'Customer')} · ${escapeHTML(r.date || '')}</span>
              ${r.comment ? `<div class="text-soft fs-11">\u201c${escapeHTML(r.comment)}\u201d</div>` : ''}
          </div>`).join('')
        : `<p class="text-muted fs-11">No customer ratings yet.</p>`;

    extra.innerHTML = `<div class="delivery-stats">
            ${card('Today', today, '#22c55e')}
            ${card('Last 7 days', week, '#38bdf8')}
            ${card('Cancelled', cancelled, cancelled ? '#f87171' : '#94a3b8')}
            ${card('Success rate', rate, '#a78bfa')}
            <div class="delivery-stat" style="grid-column: 1 / -1;"><span class="delivery-stat-value" style="color:#fbbf24;">${formatPeso(fees)}</span><span class="delivery-stat-label">Delivery fees from completed deliveries</span></div>
        </div>
        <div class="rider-reviews-title">Latest customer ratings</div>${reviewHTML}`;

    if (chatBtn) {
        const dm = accountChats[emailKey(currentUser.email)];
        chatBtn.innerHTML = '💬 Chat with the Admin' + (dm && dm.userUnread ? ' <span class="unread-dot" title="New message"></span>' : '');
    }
}

(function wrapForDeliveryPanel() {
    const originalHub = window.updateDeliveryHub;
    window.updateDeliveryHub = function () {
        const result = originalHub.apply(this, arguments);
        renderDeliveryExtras();
        return result;
    };

    // count deliveries a rider cancels themselves (used for the Cancelled / Success rate stats)
    const originalCancel = window.cancelDeliveryOrder;
    window.cancelDeliveryOrder = function (orderId) {
        const order = customerOrders.find(o => o.id === orderId);
        const wasMine = !!(order && currentUser && currentUser.isDelivery && isMyDelivery(order));
        const result = originalCancel.apply(this, arguments);
        if (wasMine && !order.deliveryBy) {
            currentUser.deliveryCancelled = Number(currentUser.deliveryCancelled || 0) + 1;
            renderDeliveryExtras();
        }
        return result;
    };

    const originalAuth = window.updateAuthUI;
    window.updateAuthUI = function () {
        const result = originalAuth.apply(this, arguments);
        renderDeliveryExtras();
        return result;
    };
})();

/* ===== Show / hide password (eye button) ===== */
const EYE_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>';
const EYE_OFF_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.94 10.94 0 0 1 12 20C5 20 1 12 1 12a18.5 18.5 0 0 1 5.06-5.94"/><path d="M9.9 4.24A10.9 10.9 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><path d="M14.12 14.12A3 3 0 1 1 9.88 9.88"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';

function togglePassword(inputId, btn) {
    const input = document.getElementById(inputId);
    if (!input) return;
    const show = input.type === 'password';
    input.type = show ? 'text' : 'password';
    btn.innerHTML = show ? EYE_OFF_ICON : EYE_ICON;
    btn.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
    btn.title = show ? 'Hide password' : 'Show password';
}

document.querySelectorAll('.password-toggle').forEach(function (btn) {
    btn.innerHTML = EYE_ICON;
});


/* =====================================================================
   BESTDEBEST — SUPABASE AUTHENTICATION LAYER
   Keeps the existing UI and storefront functions. Authentication and
   account profiles are handled by Supabase Auth + public.profiles.
   ===================================================================== */
const BESTDEBEST_SUPABASE_URL = window.BESTDEBEST_SUPABASE_URL;
const BESTDEBEST_SUPABASE_KEY = window.BESTDEBEST_SUPABASE_ANON_KEY;
if (!window.supabase || !BESTDEBEST_SUPABASE_URL || !BESTDEBEST_SUPABASE_KEY) {
    console.error('Supabase client/configuration is missing. Check index.html.');
}
const supabaseClient = window.supabase?.createClient(
    BESTDEBEST_SUPABASE_URL,
    BESTDEBEST_SUPABASE_KEY,
    {
        auth: {
            persistSession: true,
            autoRefreshToken: true,
            detectSessionInUrl: true
        }
    }
);

let supabaseAuthUser = null;
let pendingSignupProfile = null;
let pendingRecoveryPassword = null;

function profileFromSupabase(authUser, profile = {}) {
    const meta = authUser?.user_metadata || {};
    return {
        id: authUser.id,
        firstName: profile.first_name ?? meta.first_name ?? '',
        lastName: profile.last_name ?? meta.last_name ?? '',
        displayName: profile.display_name ?? meta.display_name ?? authUser.email?.split('@')[0] ?? '',
        location: profile.location ?? meta.location ?? '',
        birthDate: profile.birth_date ?? meta.birth_date ?? '',
        dateCreated: profile.created_at
            ? String(profile.created_at).slice(0, 10)
            : (authUser.created_at ? String(authUser.created_at).slice(0, 10) : new Date().toISOString().slice(0, 10)),
        email: authUser.email || '',
        role: String(profile.role || 'customer').trim(),
        isSeller: Boolean(profile.is_seller ?? false),
        isDelivery: Boolean(profile.is_delivery ?? false),
        shopName: profile.shop_name ?? '',
        profilePicture: profile.profile_picture ?? '',
        bio: profile.bio ?? '',
        banned: Boolean(profile.is_banned ?? false),
        // Passwords are intentionally never stored in profiles or browser state.
        _supabaseUserId: authUser.id
    };
}

async function fetchSupabaseProfile(authUser) {
    const { data, error } = await supabaseClient
        .from('profiles')
        .select('*')
        .eq('id', authUser.id)
        .maybeSingle();

    if (error) throw error;

    const profile = profileFromSupabase(authUser, data || {});

    if (profile.role.toLowerCase() === 'manager') {
        const email = authUser.email.toLowerCase();

        if (!managerEmails.includes(email)) {
            managerEmails.push(email);
        }
    }

    return profile;
}

async function saveSupabaseProfile(user) {
    if (!supabaseClient || !supabaseAuthUser || !user) return;
    const row = {
        id: supabaseAuthUser.id,
        first_name: user.firstName || '',
        last_name: user.lastName || '',
        display_name: user.displayName || '',
        location: user.location || '',
        birth_date: user.birthDate || null,
        is_seller: Boolean(user.isSeller),
        is_delivery: Boolean(user.isDelivery),
        shop_name: user.shopName || null,
        profile_picture: user.profilePicture || '',
    
    };
    const { error } = await supabaseClient.from('profiles').upsert(row, { onConflict: 'id' });
    if (error) {
        console.error('Profile save failed:', error);
        alert('Your authentication is saved, but your profile could not be updated. Check the profiles table and its RLS policies.');
    }
}

function resetSignupFormAfterSuccess() {
    ['signupFirstName','signupLastName','signupDisplayName','signupLocation','signupEmail','signupPassword','signupBirthDate']
        .forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
    ['signupFirstNameError','signupLastNameError','signupNameError','signupLocationError','signupEmailError','signupPasswordError']
        .forEach(id => { if (typeof clearNameError === 'function') clearNameError(id); });
}

async function finishSupabaseSignup(authUser, profileData) {
    try {
        supabaseAuthUser = authUser;
        const row = {
            id: authUser.id,
            first_name: profileData.firstName,
            last_name: profileData.lastName,
            display_name: profileData.displayName,
            location: profileData.location,
            birth_date: profileData.birthDate,
            is_seller: false,
            is_delivery: false,
            shop_name: null,
            profile_picture: '',
        
        };
        const { error } = await supabaseClient.from('profiles').upsert(row, { onConflict: 'id' });
        if (error) throw error;
        currentUser = profileFromSupabase(authUser, row);
        if (managerEmails.includes(currentUser.email) && !onlineManagers.includes(currentUser.email)) {
            onlineManagers.push(currentUser.email);
        }
        updateAuthUI();
        applySortingAndFilters();
        closeModal('signupModal');
        resetSignupFormAfterSuccess();
        alert(`Successfully registered and logged in as ${currentUser.displayName}!`);
    } catch (err) {
        console.error('Could not save the new profile:', err);
        alert('Your email was verified, but your profile could not be saved. Please check the Supabase profiles table and Row Level Security policies.');
    }
}

function maskOtpTarget(target) {
    const [name, domain] = String(target || '').split('@');
    return `${(name || '').slice(0, 2)}${'•'.repeat(Math.max(2, (name || '').length - 2))}@${domain || ''}`;
}
function setOtpError(message) {
    const el = document.getElementById('otpError');
    if (!el) return;
    el.textContent = message || '';
    el.classList.toggle('is-hidden', !message);
}
function startOtpFlow(options) {
    clearInterval(otpResendTimer);
    otpSession = Object.assign({
        purpose: '', channel: 'email', target: '', title: 'Verify Code', summary: '',
        askTarget: false, onVerified: async () => {}, resendAt: 0, busy: false
    }, options);
    document.getElementById('otpTitle').textContent = otpSession.title;
    document.getElementById('otpSummary').textContent = otpSession.summary;
    document.getElementById('otpTargetLabel').textContent = 'Email address';
    document.getElementById('otpTargetInput').placeholder = 'yourname@gmail.com';
    document.getElementById('otpTargetInput').value = '';
    document.getElementById('otpCodeInput').value = '';
    document.getElementById('otpDemoBanner').classList.add('is-hidden');
    document.getElementById('otpCodeForm').classList.add('is-hidden');
    document.getElementById('otpRetryBtn').classList.add('is-hidden');
    document.getElementById('otpTargetForm').classList.toggle('is-hidden', !otpSession.askTarget);
    setOtpError('');
    openModal('otpModal');
    if (otpSession.askTarget) document.getElementById('otpTargetInput').focus();
    else sendOtpCode();
}
function submitOtpTarget(event) {
    event.preventDefault();
    if (!otpSession) return;
    const email = document.getElementById('otpTargetInput').value.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setOtpError('Please enter a valid email address.');
        return;
    }
    otpSession.target = email;
    sendOtpCode();
}
async function sendOtpCode() {
    const session = otpSession;
    if (!session || session.busy) return;
    session.busy = true;
    setOtpError('');
    const sendBtn = document.getElementById('otpSendBtn');
    const retryBtn = document.getElementById('otpRetryBtn');
    if (retryBtn) retryBtn.classList.add('is-hidden');
    if (sendBtn) { sendBtn.disabled = true; sendBtn.textContent = 'Sending...'; }
    try {
        let result;
        if (session.purpose === 'signup') {
            const { data, error } = await supabaseClient.auth.signInWithOtp({
                email: session.target,
                options: {
                    shouldCreateUser: true,
                    data: {
                        first_name: pendingSignupProfile.firstName,
                        last_name: pendingSignupProfile.lastName,
                        display_name: pendingSignupProfile.displayName,
                        location: pendingSignupProfile.location,
                        birth_date: pendingSignupProfile.birthDate
                    }
                }
            });
            if (error) throw error;
            result = data;
        } else if (session.purpose === 'password_reset') {
            const { data, error } = await supabaseClient.auth.resetPasswordForEmail(session.target);
            if (error) throw error;
            result = data;
        } else if (session.purpose === 'account_verify') {
            const { data, error } = await supabaseClient.auth.signInWithOtp({
                email: session.target,
                options: { shouldCreateUser: false }
            });
            if (error) throw error;
            result = data;
        } else {
            throw new Error('This verification purpose is not configured for Supabase Auth.');
        }
        if (otpSession !== session) return;
        session.resendAt = Date.now() + OTP_CONFIG.RESEND_SEC * 1000;
        document.getElementById('otpTargetForm').classList.add('is-hidden');
        document.getElementById('otpCodeForm').classList.remove('is-hidden');
        document.getElementById('otpSentNote').textContent =
            `We sent a 6-digit code to ${maskOtpTarget(session.target)}. It expires in 5 minutes.`;
        document.getElementById('otpDemoBanner').classList.add('is-hidden');
        document.getElementById('otpCodeInput').value = '';
        document.getElementById('otpCodeInput').focus();
        startOtpResendTimer();
    } catch (err) {
        console.error('Supabase OTP send error:', err);
        setOtpError(err.message || 'Could not send the verification code. Please try again.');
        if (!session.askTarget) retryBtn?.classList.remove('is-hidden');
    } finally {
        session.busy = false;
        if (sendBtn) { sendBtn.disabled = false; sendBtn.textContent = 'Send Code'; }
    }
}
function startOtpResendTimer() {
    clearInterval(otpResendTimer);
    const link = document.getElementById('otpResendLink');
    const tick = () => {
        if (!otpSession) { clearInterval(otpResendTimer); return; }
        const left = Math.ceil((otpSession.resendAt - Date.now()) / 1000);
        if (left > 0) {
            link.textContent = `Resend code in ${left}s`;
            link.classList.add('is-disabled');
        } else {
            link.textContent = 'Resend code';
            link.classList.remove('is-disabled');
            clearInterval(otpResendTimer);
        }
    };
    tick();
    otpResendTimer = setInterval(tick, 1000);
}
function resendOtp() {
    if (!otpSession || Date.now() < otpSession.resendAt) return;
    sendOtpCode();
}
async function submitOtpCode(event) {
    event.preventDefault();
    const session = otpSession;
    if (!session || session.busy) return;
    const code = document.getElementById('otpCodeInput').value.trim();
    if (!/^\d{6}$/.test(code)) {
        setOtpError('Please enter the 6-digit code.');
        return;
    }
    session.busy = true;
    setOtpError('');
    const btn = document.getElementById('otpVerifyBtn');
    btn.disabled = true;
    btn.textContent = 'Verifying...';
    try {
        const type = session.purpose === 'password_reset' ? 'recovery' : 'email';
        const { data, error } = await supabaseClient.auth.verifyOtp({
            email: session.target,
            token: code,
            type
        });
        if (error) throw error;
        if (!data.user) throw new Error('Supabase verified the code but did not return an account.');
        const callback = session.onVerified;
        cancelOtpFlow();
        await callback(data.user);
    } catch (err) {
        console.error('Supabase OTP verify error:', err);
        setOtpError(err.message || 'That code is incorrect or expired. Request a new code.');
        document.getElementById('otpCodeInput').value = '';
        document.getElementById('otpCodeInput').focus();
    } finally {
        session.busy = false;
        btn.disabled = false;
        btn.textContent = 'Verify';
    }
}
function cancelOtpFlow() {
    clearInterval(otpResendTimer);
    otpSession = null;
    closeModal('otpModal');
}

async function handleSignup(event) {
    event.preventDefault();
    const firstName = document.getElementById('signupFirstName').value.trim();
    const lastName = document.getElementById('signupLastName').value.trim();
    const displayName = document.getElementById('signupDisplayName').value.trim();
    const location = cleanLocation(document.getElementById('signupLocation').value);
    const email = document.getElementById('signupEmail').value.trim().toLowerCase();
    const password = document.getElementById('signupPassword').value;
    const birthDate = document.getElementById('signupBirthDate').value;
    if (!validateSignupFields({ firstName, lastName, displayName, location, email, password })) return;
    const age = calculateAge(birthDate);
    if (isNaN(age) || age < 0 || age > 120) {
        alert('Please enter a valid date of birth.');
        return;
    }
    if (age < MIN_SIGNUP_AGE) {
        alert(`Sorry, you must be at least ${MIN_SIGNUP_AGE} years old to create an account.`);
        return;
    }
    if (registeredUsers.some(u => u.email === email) && !managerEmails.includes(email)) {
        alert('An account with this email already exists in this browser. Please sign in instead.');
        return;
    }
    pendingSignupProfile = { firstName, lastName, displayName, location, email, birthDate };
    startOtpFlow({
        purpose: 'signup',
        channel: 'email',
        target: email,
        title: 'Verify Your Email',
        summary: `Almost there, ${displayName}! Enter the code we send to your email to finish creating your account.`,
        onVerified: authUser => finishSupabaseSignup(authUser, pendingSignupProfile)
    });
}

async function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value.trim().toLowerCase();
    const password = document.getElementById('loginPassword').value;
    try {
        const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
        if (error) throw error;
        if (!data.user) throw new Error('Login did not return a user account.');
        supabaseAuthUser = data.user;
        currentUser = await fetchSupabaseProfile(data.user);
        if (currentUser.banned) {
            await supabaseClient.auth.signOut();
            currentUser = null;
            throw new Error('This account is currently restricted. Please contact support.');
        }
        if (managerEmails.includes(email) && !onlineManagers.includes(email)) onlineManagers.push(email);
        updateAuthUI();
        applySortingAndFilters();
        closeModal('loginModal');
        document.getElementById('loginEmail').value = '';
        document.getElementById('loginPassword').value = '';
        alert(`Welcome back, ${currentUser.displayName || currentUser.firstName}!`);
    } catch (err) {
        console.error('Supabase login error:', err);
        alert(err.message || 'Invalid email or password.');
    }
}

async function logoutUser() {
    if (currentUser && managerEmails.includes(currentUser.email)) {
        onlineManagers = onlineManagers.filter(e => e !== currentUser.email);
    }
    try {
        const { error } = await supabaseClient.auth.signOut();
        if (error) throw error;
    } catch (err) {
        console.error('Supabase sign-out error:', err);
        alert('Could not sign out cleanly: ' + err.message);
        return;
    }
    supabaseAuthUser = null;
    currentUser = null;
    activeSidebarTab = 'shop';
    isAdminStoreView = false;
    document.getElementById('cartDrawer')?.classList.remove('open');
    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');
    if (loginEmail) loginEmail.value = '';
    if (loginPassword) loginPassword.value = '';
    const adminReturn = document.getElementById('adminStoreReturnBtn');
    if (adminReturn) adminReturn.style.display = 'none';
    updateAuthUI();
    resetStore();
    alert('You have been signed out.');
}

async function handleForgotPassword(event) {
    event.preventDefault();
    const email = document.getElementById('forgotEmail').value.trim().toLowerCase();
    const birthDate = document.getElementById('forgotBirthDate').value;
    const newPass = document.getElementById('forgotNewPassword').value;
    const confirmPass = document.getElementById('forgotConfirmPassword').value;
    const passwordError = validatePasswordRules(newPass);
    if (passwordError) return alert(passwordError);
    if (newPass !== confirmPass) return alert('The two passwords do not match.');
    // Supabase recovery OTP verifies ownership of this email. The existing DOB field
    // remains in the form, but Auth recovery is the security check for this flow.
    pendingRecoveryPassword = newPass;
    startOtpFlow({
        purpose: 'password_reset',
        channel: 'email',
        target: email,
        title: 'Verify Password Reset',
        summary: 'Enter the 6-digit recovery code sent to your email to confirm this password change.',
        onVerified: async authUser => {
            const { error } = await supabaseClient.auth.updateUser({ password: pendingRecoveryPassword });
            if (error) throw error;
            pendingRecoveryPassword = null;
            ['forgotEmail','forgotBirthDate','forgotNewPassword','forgotConfirmPassword']
                .forEach(id => { document.getElementById(id).value = ''; });
            closeModal('forgotPasswordModal');
            await supabaseClient.auth.signOut();
            currentUser = null;
            supabaseAuthUser = null;
            updateAuthUI();
            openModal('loginModal');
            document.getElementById('loginEmail').value = email;
            alert('Password updated! You can now log in with your new password.');
        }
    });
}

/* Re-authenticate account settings using Supabase Auth instead of comparing a
   password field stored in the browser. */
async function confirmPasswordVerification(event) {
    event.preventDefault();
    if (!currentUser) return alert('Please log in first.');
    const pass = document.getElementById('verifyPassInput').value;
    const { error } = await supabaseClient.auth.signInWithPassword({
        email: currentUser.email,
        password: pass
    });
    if (error) return alert('Incorrect password!');
    closeModal('verifyPasswordModal');
    document.getElementById('verifyPassInput').value = '';
    document.getElementById('settingsDisplayName').value = currentUser.displayName || '';
    clearNameError('settingsNameError');
    clearNameError('settingsLocationError');
    document.getElementById('settingsLocation').value = currentUser.location || 'Manila';
    document.getElementById('settingsBio').value = currentUser.bio || '';
    document.getElementById('settingsDateCreated').value = currentUser.dateCreated || '';
    document.getElementById('settingsProfilePicture').value = '';
    pendingPictureRemoval = false;
    setProfileImage(document.getElementById('settingsProfilePicturePreview'), currentUser.profilePicture || '');
    renderSettingsBadges();
    openModal('settingsModal');
}

/* Persist edited profile fields to Supabase while retaining the existing UI flow. */
const _bestDeBestLegacySaveSettings = saveAccountSettings;
saveAccountSettings = function(event) {
    _bestDeBestLegacySaveSettings(event);
    if (currentUser && supabaseAuthUser) saveSupabaseProfile(currentUser);
};

/* Restore the Supabase session after the original storefront has initialized. */
async function restoreSupabaseSession() {
    if (!supabaseClient) return;
    try {
        const { data, error } = await supabaseClient.auth.getSession();
        if (error) throw error;
        if (!data.session?.user) {
            currentUser = null;
            supabaseAuthUser = null;
            updateAuthUI();
            return;
        }
        supabaseAuthUser = data.session.user;
        currentUser = await fetchSupabaseProfile(data.session.user);
        if (managerEmails.includes(currentUser.email) && !onlineManagers.includes(currentUser.email)) {
            onlineManagers.push(currentUser.email);
        }
        updateAuthUI();
        applySortingAndFilters();
    } catch (err) {
        console.error('Supabase session restore failed:', err);
        alert('Could not restore your Supabase session. Check the Supabase project URL, key, and profiles table.');
    }
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', restoreSupabaseSession, { once: true });
} else {
    restoreSupabaseSession();
}
supabaseClient?.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_OUT') {
        supabaseAuthUser = null;
        currentUser = null;
        updateAuthUI();
    }
});


/* ===== Updated email-code reset and profile verification flows ===== */
function handleForgotPassword(event) {
    event.preventDefault();
    const email = document.getElementById('forgotEmail').value.trim().toLowerCase();
    if (!email) return alert('Please enter your account email.');
    startOtpFlow({
        purpose: 'password_reset', channel: 'email', target: email,
        title: 'Reset Password',
        summary: 'Enter the 6-digit verification code sent to your email to continue resetting your password.',
        onVerified: () => {
            document.getElementById('resetEmailForm').classList.add('is-hidden');
            document.getElementById('resetNewPasswordForm').classList.remove('is-hidden');
            document.getElementById('resetPasswordNote').textContent = 'Code verified. Create a new password for your account.';
            document.getElementById('forgotNewPassword').focus();
        }
    });
}

async function completePasswordReset(event) {
    event.preventDefault();
    const password = document.getElementById('forgotNewPassword').value;
    const confirm = document.getElementById('forgotConfirmPassword').value;
    const passwordError = validatePasswordRules(password);
    if (passwordError) return alert(passwordError);
    if (password !== confirm) return alert('The two passwords do not match.');
    try {
        const { error } = await supabaseClient.auth.updateUser({ password });
        if (error) throw error;
        const email = document.getElementById('forgotEmail').value.trim().toLowerCase();
        await supabaseClient.auth.signOut();
        currentUser = null; supabaseAuthUser = null;
        ['forgotEmail', 'forgotNewPassword', 'forgotConfirmPassword'].forEach(id => {
            const field = document.getElementById(id); if (field) field.value = '';
        });
        document.getElementById('resetEmailForm').classList.remove('is-hidden');
        document.getElementById('resetNewPasswordForm').classList.add('is-hidden');
        document.getElementById('resetPasswordNote').textContent = 'Enter your account email to receive a 6-digit verification code.';
        closeModal('forgotPasswordModal'); updateAuthUI(); openModal('loginModal');
        document.getElementById('loginEmail').value = email;
        alert('Password updated successfully! You can now sign in with your new password.');
    } catch (err) {
        console.error('Password reset failed:', err);
        alert(err.message || 'Could not update your password. Please try again.');
    }
}

async function confirmPasswordVerification(event) {
    event.preventDefault();
    if (!currentUser) return alert('Please log in first.');
    const email = String(currentUser.email || '').trim().toLowerCase();
    if (!email) return alert('Your account does not have a valid email address.');
    document.getElementById('verifyEmailInput').value = email;
    startOtpFlow({
        purpose: 'account_verify', channel: 'email', target: email,
        title: "Verify It's You",
        summary: 'Enter the 6-digit verification code sent to your account email to continue to Profile Settings.',
        onVerified: async () => {
            if (!currentUser) return;
            document.getElementById('settingsDisplayName').value = currentUser.displayName || '';
            clearNameError('settingsNameError'); clearNameError('settingsLocationError');
            document.getElementById('settingsLocation').value = currentUser.location || 'Manila';
            document.getElementById('settingsBio').value = currentUser.bio || '';
            document.getElementById('settingsDateCreated').value = currentUser.dateCreated || '';
            document.getElementById('settingsProfilePicture').value = '';
            pendingPictureRemoval = false;
            setProfileImage(document.getElementById('settingsProfilePicturePreview'), currentUser.profilePicture || '');
            renderSettingsBadges(); closeModal('verifyPasswordModal'); openModal('settingsModal');
        }
    });
}

/* Reset the reset-password dialog to its email-entry step each time it opens. */
function openForgotPassword() {
    closeModal('loginModal');
    const emailForm = document.getElementById('resetEmailForm');
    const passwordForm = document.getElementById('resetNewPasswordForm');
    if (emailForm) emailForm.classList.remove('is-hidden');
    if (passwordForm) passwordForm.classList.add('is-hidden');
    const note = document.getElementById('resetPasswordNote');
    if (note) note.textContent = 'Enter your account email to receive a 6-digit verification code.';
    ['forgotNewPassword', 'forgotConfirmPassword'].forEach(id => {
        const field = document.getElementById(id); if (field) field.value = '';
    });
    openModal('forgotPasswordModal');
}

/* Prefill the signed-in email before showing the Profile Link verification dialog. */
function openSettingsModal() {
    if (!currentUser) return alert('Please log in first to modify account settings.');
    const emailField = document.getElementById('verifyEmailInput');
    if (emailField) emailField.value = currentUser.email || '';
    openModal('verifyPasswordModal');
}

/* Keep AI Forecast visible only while an authenticated user is signed in. */
(function ensureAiForecastAuthVisibility() {
    const sync = () => {
        const button = document.getElementById('aiForecastNavBtn');
        if (!button) return;
        const loggedIn = Boolean(currentUser);
        button.classList.toggle('is-hidden', !loggedIn);
        button.style.display = loggedIn ? 'inline-flex' : 'none';
    };
    document.addEventListener('DOMContentLoaded', sync);
    const originalUpdateAuthUI = updateAuthUI;
    updateAuthUI = function() { originalUpdateAuthUI.apply(this, arguments); sync(); };
    sync();
})();
