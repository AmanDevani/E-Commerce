const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter a Product Name"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Please Enter a Product Description"]
    },
    price: {
        type: Number,
        required: [true, "Please Enter a Product Price"],
        maxLength: [8, "Price cannot exceed  8 Characters"]
    },
    ratings: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, "Please Enter a Product Category"]
    },
    Stock: {
        type: Number,
        required: [true, "Please Enter a Product Stock"],
        default: 1,
        maxLength: [4, "Price cannot exceed 4 Characters"]
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: "User",
                required: true
            },
            name: {
                type: String,
                required: true,
            },
            rating: {
                type: Number,
                required: true,
            },
            comment: {
                type: String,
                required: true,
            },

        }
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Product", productSchema)