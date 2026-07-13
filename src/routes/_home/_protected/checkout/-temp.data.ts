export const items = [
    {
        "_id": "644500c2839a5e0c2f5c17d2",
        "title": "Green Leaf Lettuce",
        "slug": "green-leaf-lettuce",
        "category": {
            "_id": "632aca374d87ff2494210bf0",
            "name": {
                "en": "Fresh Vegetable"
            }
        },
        "image": [
            "https://res.cloudinary.com/ahossain/image/upload/v1738768876/product/Green-Leaf-Lettuce-each__1_-removebg-preview%281%29.png"
        ],
        "stock": 463,
        "sales": 3,
        "prices": {
            "originalPrice": 112.72,
            "price": 112.72,
            "discount": 0
        },
        "isCombination": false,
        "average_rating": 3.125,
        "total_reviews": 8,
        "status": "show",
        "seo": {
            "meta_keywords": []
        },
        "id": "644500c2839a5e0c2f5c17d2",
        "variant": {
            "originalPrice": 112.72,
            "price": 112.72,
            "discount": 0
        },
        "price": 112.72,
        "originalPrice": 112.72,
        "quantity": 1,
        "itemTotal": 112.72
    },
    {
        "_id": "644500c2839a5e0c2f5c16a3",
        "title": "Cerelac Cornflakes",
        "slug": "cerelac-cornflakes",
        "category": {
            "_id": "63f12afdcc480f0454f475dd",
            "name": {
                "en": "Baby Food"
            }
        },
        "image": [
            "https://res.cloudinary.com/ahossain/image/upload/v1738829710/product/Cerelac-Wheat-apple-Cornflakes-400-Gm-BIB-removebg-preview.png"
        ],
        "stock": 597,
        "prices": {
            "originalPrice": 235.67,
            "price": 235.67,
            "discount": 0
        },
        "isCombination": false,
        "average_rating": 0,
        "total_reviews": 0,
        "status": "show",
        "seo": {
            "meta_keywords": []
        },
        "id": "644500c2839a5e0c2f5c16a3",
        "variant": {
            "originalPrice": 235.67,
            "price": 235.67,
            "discount": 0
        },
        "price": 235.67,
        "originalPrice": 235.67,
        "quantity": 1,
        "itemTotal": 235.67
    },
    {
        "_id": "644500c2839a5e0c2f5c176a",
        "title": "ACI Pure Salt",
        "slug": "aci-pure-salt",
        "category": {
            "_id": "632aca0b4d87ff2494210bc4",
            "name": {
                "en": "Cooking Essentials"
            }
        },
        "image": [
            "https://res.cloudinary.com/ahossain/image/upload/v1738774974/product/ACI-Pure-Salt-Jar-750gm-removebg-preview.png"
        ],
        "stock": 515,
        "prices": {
            "originalPrice": 54.68,
            "price": 54.68,
            "discount": 0
        },
        "isCombination": false,
        "average_rating": 0,
        "total_reviews": 0,
        "status": "show",
        "seo": {
            "meta_keywords": []
        },
        "id": "644500c2839a5e0c2f5c176a",
        "variant": {
            "originalPrice": 54.68,
            "price": 54.68,
            "discount": 0
        },
        "price": 54.68,
        "originalPrice": 54.68,
        "quantity": 2,
        "itemTotal": 109.36
    }
]

export type CartItemType = (typeof items)[number]