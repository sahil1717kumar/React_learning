import React from "react";
import ReactDOM from "react-dom/client";

const resList = [
  {
    "type": "restaurant",
    "info": {
      "resId": 20424478,
      "name": "Domino's Pizza",
      "image": {
        "url": "https://b.zmtcdn.com/data/pictures/chains/3/143/46ab03171d9eec9cc24d2067569ef485_o2_featured_v2.jpg"
      },
      "o2FeaturedImage": {
        "url": "https://b.zmtcdn.com/data/pictures/chains/3/143/46ab03171d9eec9cc24d2067569ef485_o2_featured_v2.jpg"
      },
      "rating": {
        "has_fake_reviews": 0,
        "aggregate_rating": "4.2",
        "rating_text": "4.2",
        "rating_subtitle": "Very Good",
        "rating_color": "5BA829",
        "votes": "619",
        "subtext": "REVIEWS",
        "is_new": false
      },
      "ratingNew": {
        "newlyOpenedObj": null,
        "suspiciousReviewObj": null,
        "ratings": {
          "DINING": {
            "rating_type": "DINING",
            "rating": "",
            "reviewCount": "0",
            "reviewTextSmall": "0 Reviews",
            "subtext": "Does not offer Dining",
            "color": "",
            "ratingV2": "-",
            "subtitle": "DINING",
            "sideSubTitle": "Dining Ratings",
            "bgColorV2": {
              "type": "grey",
              "tint": "500"
            },
            "newOnDining": false
          },
          "DELIVERY": {
            "rating_type": "DELIVERY",
            "rating": "4.2",
            "reviewCount": "619",
            "reviewTextSmall": "619 Reviews",
            "subtext": "619 Delivery Reviews",
            "color": "#E23744",
            "ratingV2": "4.2",
            "subtitle": "DELIVERY",
            "sideSubTitle": "Delivery Ratings",
            "bgColorV2": {
              "type": "green",
              "tint": "700"
            },
            "newOnDelivery": false
          }
        }
      },
      "cft": {
        "text": "₹350 for two"
      },
      "cfo": {
        "text": "₹200 for one"
      },
      "locality": {
        "name": "Connaught Place, New Delhi",
        "address": "Shop 23, Regal Building, Connaught Place, New Delhi",
        "localityUrl": "ncr/connaught-place-delhi-restaurants"
      },
      "timing": {
        "text": "",
        "color": ""
      },
      "cuisine": [
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          "url": "https://www.zomato.com/ncr/restaurants/pizza/",
          "name": "Pizza"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          "url": "https://www.zomato.com/ncr/restaurants/fast-food/",
          "name": "Fast Food"
        }
      ],
      "should_ban_ugc": false,
      "costText": {
        "text": "₹200 for one"
      }
    },
    "order": {
      "deliveryTime": "29 min",
      "isServiceable": true,
      "hasOnlineOrdering": true,
      "actionInfo": {
        "text": "Order Now",
        "clickUrl": "/ncr/dominos-pizza-4-connaught-place-new-delhi/order"
      }
    },
    "gold": [],
    "takeaway": [],
    "cardAction": {
      "text": "",
      "clickUrl": "/ncr/dominos-pizza-4-connaught-place-new-delhi/order",
      "clickActionDeeplink": ""
    },
    "distance": "881 m",
    "isPromoted": false,
    "promotedText": "",
    "trackingData": [
      {
        "table_name": "zsearch_events_log",
        "payload": "{\"search_id\":\"57d6bad5-c0ad-478d-b814-f6f7617168ef\",\"location_type\":\"delivery_cell\",\"location_id\":\"4110939063815503872\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20424478\",\"element_type\":\"listing\",\"rank\":1}",
        "event_names": {
          "tap": "{\"action\":\"tap\"}",
          "impression": "{\"action\":\"impression\"}"
        }
      }
    ],
    "allCTA": [],
    "promoOffer": "",
    "checkBulkOffers": true,
    "bulkOffers": [
      {
        "text": "50% OFF",
        "color": {
          "tint": "500",
          "type": "blue"
        }
      }
    ],
    "isDisabled": false,
    "bottomContainers": []
  },
  {
    "type": "restaurant",
    "info": {
      "resId": 18472631,
      "name": "Delhi Darbar Dhaba",
      "image": {
        "url": "https://b.zmtcdn.com/data/pictures/chains/7/6357/45b184027ac9b78247c3978eaa203cb1_o2_featured_v2.jpg"
      },
      "o2FeaturedImage": {
        "url": "https://b.zmtcdn.com/data/pictures/chains/7/6357/45b184027ac9b78247c3978eaa203cb1_o2_featured_v2.jpg"
      },
      "rating": {
        "has_fake_reviews": 0,
        "aggregate_rating": "3.7",
        "rating_text": "3.7",
        "rating_subtitle": "Good",
        "rating_color": "9ACD32",
        "votes": "6,909",
        "subtext": "REVIEWS",
        "is_new": false
      },
      "ratingNew": {
        "newlyOpenedObj": null,
        "suspiciousReviewObj": null,
        "ratings": {
          "DINING": {
            "rating_type": "DINING",
            "rating": "3.7",
            "reviewCount": "133",
            "reviewTextSmall": "133 Reviews",
            "subtext": "133 Dining Reviews",
            "color": "#1C1C1C",
            "ratingV2": "3.7",
            "subtitle": "DINING",
            "sideSubTitle": "Dining Ratings",
            "bgColorV2": {
              "type": "green",
              "tint": "600"
            },
            "newOnDining": false
          },
          "DELIVERY": {
            "rating_type": "DELIVERY",
            "rating": "3.7",
            "reviewCount": "6,776",
            "reviewTextSmall": "6,776 Reviews",
            "subtext": "6,776 Delivery Reviews",
            "color": "#E23744",
            "ratingV2": "3.7",
            "subtitle": "DELIVERY",
            "sideSubTitle": "Delivery Ratings",
            "bgColorV2": {
              "type": "green",
              "tint": "600"
            },
            "newOnDelivery": false
          }
        }
      },
      "cft": {
        "text": "₹500 for two"
      },
      "cfo": {
        "text": "₹200 for one"
      },
      "locality": {
        "name": "Gole Market, New Delhi",
        "address": "Shop 10, Baird Line Market, Near Bhagat Singh Place, Gole Market, New Delhi",
        "localityUrl": "ncr/gole-market-delhi-restaurants"
      },
      "timing": {
        "text": "",
        "color": ""
      },
      "cuisine": [
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          "url": "https://www.zomato.com/ncr/restaurants/north-indian/",
          "name": "North Indian"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          "url": "https://www.zomato.com/ncr/restaurants/chinese/",
          "name": "Chinese"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          "url": "https://www.zomato.com/ncr/restaurants/fast-food/",
          "name": "Fast Food"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
          "url": "https://www.zomato.com/ncr/restaurants/mughlai/",
          "name": "Mughlai"
        }
      ],
      "should_ban_ugc": false,
      "costText": {
        "text": "₹200 for one"
      }
    },
    "order": {
      "deliveryTime": "20 min",
      "isServiceable": true,
      "hasOnlineOrdering": true,
      "actionInfo": {
        "text": "Order Now",
        "clickUrl": "/ncr/delhi-darbar-dhaba-gole-market-new-delhi/order"
      }
    },
    "gold": [],
    "takeaway": [],
    "cardAction": {
      "text": "",
      "clickUrl": "/ncr/delhi-darbar-dhaba-gole-market-new-delhi/order",
      "clickActionDeeplink": ""
    },
    "distance": "865 m",
    "isPromoted": false,
    "promotedText": "",
    "trackingData": [
      {
        "table_name": "zsearch_events_log",
        "payload": "{\"search_id\":\"57d6bad5-c0ad-478d-b814-f6f7617168ef\",\"location_type\":\"delivery_cell\",\"location_id\":\"4110939063815503872\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18472631\",\"element_type\":\"listing\",\"rank\":2}",
        "event_names": {
          "tap": "{\"action\":\"tap\"}",
          "impression": "{\"action\":\"impression\"}"
        }
      }
    ],
    "allCTA": [],
    "promoOffer": "",
    "checkBulkOffers": true,
    "bulkOffers": [
      {
        "text": "50% OFF",
        "color": {
          "tint": "500",
          "type": "blue"
        }
      }
    ],
    "isDisabled": false,
    "bottomContainers": [
      {
        "image": {
          "url": "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          "aspect_ratio": 2.66666666667
        },
        "text": "Follows all Max Safety measures to ensure your food is safe"
      }
    ]
  },
  {
    "type": "restaurant",
    "info": {
      "resId": 310448,
      "name": "Burger King",
      "image": {
        "url": "https://b.zmtcdn.com/data/pictures/chains/8/310078/749216f498eb2ed21ffd317f4bdc8a1d_o2_featured_v2.jpg"
      },
      "o2FeaturedImage": {
        "url": "https://b.zmtcdn.com/data/pictures/chains/8/310078/749216f498eb2ed21ffd317f4bdc8a1d_o2_featured_v2.jpg"
      },
      "rating": {
        "has_fake_reviews": 0,
        "aggregate_rating": "3.9",
        "rating_text": "3.9",
        "rating_subtitle": "Good",
        "rating_color": "9ACD32",
        "votes": "23.3K",
        "subtext": "REVIEWS",
        "is_new": false
      },
      "ratingNew": {
        "newlyOpenedObj": null,
        "suspiciousReviewObj": null,
        "ratings": {
          "DINING": {
            "rating_type": "DINING",
            "rating": "3.6",
            "reviewCount": "3,110",
            "reviewTextSmall": "3,110 Reviews",
            "subtext": "3,110 Dining Reviews",
            "color": "#1C1C1C",
            "ratingV2": "3.6",
            "subtitle": "DINING",
            "sideSubTitle": "Dining Ratings",
            "bgColorV2": {
              "type": "green",
              "tint": "600"
            },
            "newOnDining": false
          },
          "DELIVERY": {
            "rating_type": "DELIVERY",
            "rating": "4.2",
            "reviewCount": "20.2K",
            "reviewTextSmall": "20.2K Reviews",
            "subtext": "20.2K Delivery Reviews",
            "color": "#E23744",
            "ratingV2": "4.2",
            "subtitle": "DELIVERY",
            "sideSubTitle": "Delivery Ratings",
            "bgColorV2": {
              "type": "green",
              "tint": "700"
            },
            "newOnDelivery": false
          }
        }
      },
      "cft": {
        "text": "₹400 for two"
      },
      "cfo": {
        "text": "₹200 for one"
      },
      "locality": {
        "name": "Connaught Place, New Delhi",
        "address": "E-8, Inner Circle, Connaught Place, New Delhi",
        "localityUrl": "ncr/connaught-place-delhi-restaurants"
      },
      "timing": {
        "text": "",
        "color": ""
      },
      "cuisine": [
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
          "url": "https://www.zomato.com/ncr/restaurants/burger/",
          "name": "Burger"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          "url": "https://www.zomato.com/ncr/restaurants/fast-food/",
          "name": "Fast Food"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          "url": "https://www.zomato.com/ncr/restaurants/desserts/",
          "name": "Desserts"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
          "url": "https://www.zomato.com/ncr/restaurants/shake/",
          "name": "Shake"
        }
      ],
      "should_ban_ugc": false,
      "costText": {
        "text": "₹200 for one"
      }
    },
    "order": {
      "deliveryTime": "26 min",
      "isServiceable": true,
      "hasOnlineOrdering": true,
      "actionInfo": {
        "text": "Order Now",
        "clickUrl": "/ncr/burger-king-connaught-place-new-delhi/order"
      }
    },
    "gold": [],
    "takeaway": [],
    "cardAction": {
      "text": "",
      "clickUrl": "/ncr/burger-king-connaught-place-new-delhi/order",
      "clickActionDeeplink": ""
    },
    "distance": "1.3 km",
    "isPromoted": false,
    "promotedText": "",
    "trackingData": [
      {
        "table_name": "zsearch_events_log",
        "payload": "{\"search_id\":\"57d6bad5-c0ad-478d-b814-f6f7617168ef\",\"location_type\":\"delivery_cell\",\"location_id\":\"4110939063815503872\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"310448\",\"element_type\":\"listing\",\"rank\":3}",
        "event_names": {
          "tap": "{\"action\":\"tap\"}",
          "impression": "{\"action\":\"impression\"}"
        }
      }
    ],
    "allCTA": [],
    "promoOffer": "",
    "checkBulkOffers": true,
    "bulkOffers": [
      {
        "text": "50% OFF",
        "color": {
          "tint": "500",
          "type": "blue"
        }
      }
    ],
    "isDisabled": false,
    "bottomContainers": [
      {
        "image": {
          "url": "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          "aspect_ratio": 2.66666666667
        },
        "text": "Follows all Max Safety measures to ensure your food is safe"
      }
    ]
  },
  {
    "type": "restaurant",
    "info": {
      "resId": 18454466,
      "name": "Abdul Ghani Qureshi Kabab Corner - Jama Masjid",
      "image": {
        "url": "https://b.zmtcdn.com/data/pictures/6/18454466/bbc3aea149b4eb72ed177c6590d5b24e_o2_featured_v2.jpg"
      },
      "o2FeaturedImage": {
        "url": "https://b.zmtcdn.com/data/pictures/6/18454466/bbc3aea149b4eb72ed177c6590d5b24e_o2_featured_v2.jpg"
      },
      "rating": {
        "has_fake_reviews": 0,
        "aggregate_rating": "4.0",
        "rating_text": "4.0",
        "rating_subtitle": "Very Good",
        "rating_color": "5BA829",
        "votes": "6,690",
        "subtext": "REVIEWS",
        "is_new": false
      },
      "ratingNew": {
        "newlyOpenedObj": null,
        "suspiciousReviewObj": null,
        "ratings": {
          "DINING": {
            "rating_type": "DINING",
            "rating": "",
            "reviewCount": "0",
            "reviewTextSmall": "0 Reviews",
            "subtext": "Does not offer Dining",
            "color": "",
            "ratingV2": "-",
            "subtitle": "DINING",
            "sideSubTitle": "Dining Ratings",
            "bgColorV2": {
              "type": "grey",
              "tint": "500"
            },
            "newOnDining": false
          },
          "DELIVERY": {
            "rating_type": "DELIVERY",
            "rating": "4.0",
            "reviewCount": "6,690",
            "reviewTextSmall": "6,690 Reviews",
            "subtext": "6,690 Delivery Reviews",
            "color": "#E23744",
            "ratingV2": "4.0",
            "subtitle": "DELIVERY",
            "sideSubTitle": "Delivery Ratings",
            "bgColorV2": {
              "type": "green",
              "tint": "700"
            },
            "newOnDelivery": false
          }
        }
      },
      "cft": {
        "text": "₹100 for two"
      },
      "cfo": {
        "text": "₹200 for one"
      },
      "locality": {
        "name": "Jama Masjid, New Delhi",
        "address": "Shop 4097/7, Ground Floor, Urdu Bazar, Kotwali, Jama Masjid, New Delhi",
        "localityUrl": "ncr/jama-masjid-delhi-restaurants"
      },
      "timing": {
        "text": "",
        "color": ""
      },
      "cuisine": [
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
          "url": "https://www.zomato.com/ncr/restaurants/kebab/",
          "name": "Kebab"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          "url": "https://www.zomato.com/ncr/restaurants/north-indian/",
          "name": "North Indian"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          "url": "https://www.zomato.com/ncr/restaurants/biryani/",
          "name": "Biryani"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          "url": "https://www.zomato.com/ncr/restaurants/fast-food/",
          "name": "Fast Food"
        }
      ],
      "should_ban_ugc": false,
      "costText": {
        "text": "₹200 for one"
      }
    },
    "order": {
      "deliveryTime": "34 min",
      "isServiceable": true,
      "hasOnlineOrdering": true,
      "actionInfo": {
        "text": "Order Now",
        "clickUrl": "/ncr/abdul-ghani-qureshi-kabab-corner-jama-masjid-jama-masjid-new-delhi/order"
      }
    },
    "gold": [],
    "takeaway": [],
    "cardAction": {
      "text": "",
      "clickUrl": "/ncr/abdul-ghani-qureshi-kabab-corner-jama-masjid-jama-masjid-new-delhi/order",
      "clickActionDeeplink": ""
    },
    "distance": "3.7 km",
    "isPromoted": false,
    "promotedText": "",
    "trackingData": [
      {
        "table_name": "zsearch_events_log",
        "payload": "{\"search_id\":\"57d6bad5-c0ad-478d-b814-f6f7617168ef\",\"location_type\":\"delivery_cell\",\"location_id\":\"4110939063815503872\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18454466\",\"element_type\":\"listing\",\"rank\":4}",
        "event_names": {
          "tap": "{\"action\":\"tap\"}",
          "impression": "{\"action\":\"impression\"}"
        }
      }
    ],
    "allCTA": [],
    "promoOffer": "",
    "checkBulkOffers": true,
    "bulkOffers": [
      {
        "text": "50% OFF",
        "color": {
          "tint": "500",
          "type": "blue"
        }
      }
    ],
    "isDisabled": false,
    "bottomContainers": [
      {
        "image": {
          "url": "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png",
          "aspect_ratio": 2.0625
        },
        "text": "Restaurant partner follows WHO protocol"
      }
    ]
  },
  {
    "type": "restaurant",
    "info": {
      "resId": 20598081,
      "name": "Rajdhani Restaurant",
      "image": {
        "url": "https://b.zmtcdn.com/data/pictures/1/20598081/771e8d8d022b77d620f730664ba4ab6d_o2_featured_v2.jpg"
      },
      "o2FeaturedImage": {
        "url": "https://b.zmtcdn.com/data/pictures/1/20598081/771e8d8d022b77d620f730664ba4ab6d_o2_featured_v2.jpg"
      },
      "rating": {
        "has_fake_reviews": 0,
        "aggregate_rating": "3.2",
        "rating_text": "3.2",
        "rating_subtitle": "Average",
        "rating_color": "CDD614",
        "votes": "683",
        "subtext": "REVIEWS",
        "is_new": false
      },
      "ratingNew": {
        "newlyOpenedObj": null,
        "suspiciousReviewObj": null,
        "ratings": {
          "DINING": {
            "rating_type": "DINING",
            "rating": "3.0",
            "reviewCount": "8",
            "reviewTextSmall": "8 Reviews",
            "subtext": "8 Dining Reviews",
            "color": "#1C1C1C",
            "ratingV2": "3.0",
            "subtitle": "DINING",
            "sideSubTitle": "Dining Ratings",
            "bgColorV2": {
              "type": "green",
              "tint": "500"
            },
            "newOnDining": false
          },
          "DELIVERY": {
            "rating_type": "DELIVERY",
            "rating": "3.4",
            "reviewCount": "675",
            "reviewTextSmall": "675 Reviews",
            "subtext": "675 Delivery Reviews",
            "color": "#E23744",
            "ratingV2": "3.4",
            "subtitle": "DELIVERY",
            "sideSubTitle": "Delivery Ratings",
            "bgColorV2": {
              "type": "green",
              "tint": "500"
            },
            "newOnDelivery": false
          }
        }
      },
      "cft": {
        "text": "₹200 for two"
      },
      "cfo": {
        "text": "₹200 for one"
      },
      "locality": {
        "name": "Paharganj, New Delhi",
        "address": "3850, Opposite Tel Mandi, Paharganj, New Delhi",
        "localityUrl": "ncr/paharganj-delhi-restaurants"
      },
      "timing": {
        "text": "",
        "color": ""
      },
      "cuisine": [
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          "url": "https://www.zomato.com/ncr/restaurants/north-indian/",
          "name": "North Indian"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          "url": "https://www.zomato.com/ncr/restaurants/fast-food/",
          "name": "Fast Food"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
          "url": "https://www.zomato.com/ncr/restaurants/street-food/",
          "name": "Street Food"
        }
      ],
      "should_ban_ugc": false,
      "costText": {
        "text": "₹200 for one"
      }
    },
    "order": {
      "deliveryTime": "40 min",
      "isServiceable": true,
      "hasOnlineOrdering": true,
      "actionInfo": {
        "text": "Order Now",
        "clickUrl": "/ncr/rajdhani-restaurant-1-paharganj-new-delhi/order"
      }
    },
    "gold": [],
    "takeaway": [],
    "cardAction": {
      "text": "",
      "clickUrl": "/ncr/rajdhani-restaurant-1-paharganj-new-delhi/order",
      "clickActionDeeplink": ""
    },
    "distance": "2 km",
    "isPromoted": false,
    "promotedText": "",
    "trackingData": [
      {
        "table_name": "zsearch_events_log",
        "payload": "{\"search_id\":\"57d6bad5-c0ad-478d-b814-f6f7617168ef\",\"location_type\":\"delivery_cell\",\"location_id\":\"4110939063815503872\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20598081\",\"element_type\":\"listing\",\"rank\":5}",
        "event_names": {
          "tap": "{\"action\":\"tap\"}",
          "impression": "{\"action\":\"impression\"}"
        }
      }
    ],
    "allCTA": [],
    "promoOffer": "",
    "checkBulkOffers": true,
    "bulkOffers": [
      {
        "text": "50% OFF",
        "color": {
          "tint": "500",
          "type": "blue"
        }
      }
    ],
    "isDisabled": false,
    "bottomContainers": []
  },
  {
    "type": "restaurant",
    "info": {
      "resId": 20497454,
      "name": "Mashaallah Chicken Corner",
      "image": {
        "url": "https://b.zmtcdn.com/data/pictures/4/20497454/7348cf35be9b2fb33c23685c58f74465_o2_featured_v2.jpg"
      },
      "o2FeaturedImage": {
        "url": "https://b.zmtcdn.com/data/pictures/4/20497454/7348cf35be9b2fb33c23685c58f74465_o2_featured_v2.jpg"
      },
      "rating": {
        "has_fake_reviews": 0,
        "aggregate_rating": "3.7",
        "rating_text": "3.7",
        "rating_subtitle": "Good",
        "rating_color": "9ACD32",
        "votes": "1,779",
        "subtext": "REVIEW",
        "is_new": false
      },
      "ratingNew": {
        "newlyOpenedObj": null,
        "suspiciousReviewObj": null,
        "ratings": {
          "DINING": {
            "rating_type": "DINING",
            "rating": "3.6",
            "reviewCount": "14",
            "reviewTextSmall": "14 Reviews",
            "subtext": "14 Dining Reviews",
            "color": "#1C1C1C",
            "ratingV2": "3.6",
            "subtitle": "DINING",
            "sideSubTitle": "Dining Ratings",
            "bgColorV2": {
              "type": "green",
              "tint": "600"
            },
            "newOnDining": false
          },
          "DELIVERY": {
            "rating_type": "DELIVERY",
            "rating": "3.8",
            "reviewCount": "1,765",
            "reviewTextSmall": "1,765 Reviews",
            "subtext": "1,765 Delivery Reviews",
            "color": "#E23744",
            "ratingV2": "3.8",
            "subtitle": "DELIVERY",
            "sideSubTitle": "Delivery Ratings",
            "bgColorV2": {
              "type": "green",
              "tint": "600"
            },
            "newOnDelivery": false
          }
        }
      },
      "cft": {
        "text": "₹400 for two"
      },
      "cfo": {
        "text": "₹200 for one"
      },
      "locality": {
        "name": "Paharganj, New Delhi",
        "address": "Shop 114, Amrit Kaur Market, Paharganj, New Delhi",
        "localityUrl": "ncr/paharganj-delhi-restaurants"
      },
      "timing": {
        "text": "",
        "color": ""
      },
      "cuisine": [
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          "url": "https://www.zomato.com/ncr/restaurants/north-indian/",
          "name": "North Indian"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          "url": "https://www.zomato.com/ncr/restaurants/biryani/",
          "name": "Biryani"
        }
      ],
      "should_ban_ugc": false,
      "costText": {
        "text": "₹200 for one"
      }
    },
    "order": {
      "deliveryTime": "29 min",
      "isServiceable": true,
      "hasOnlineOrdering": true,
      "actionInfo": {
        "text": "Order Now",
        "clickUrl": "/ncr/mashaallah-chicken-corner-1-paharganj-new-delhi/order"
      }
    },
    "gold": [],
    "takeaway": [],
    "cardAction": {
      "text": "",
      "clickUrl": "/ncr/mashaallah-chicken-corner-1-paharganj-new-delhi/order",
      "clickActionDeeplink": ""
    },
    "distance": "2 km",
    "isPromoted": false,
    "promotedText": "",
    "trackingData": [
      {
        "table_name": "zsearch_events_log",
        "payload": "{\"search_id\":\"57d6bad5-c0ad-478d-b814-f6f7617168ef\",\"location_type\":\"delivery_cell\",\"location_id\":\"4110939063815503872\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20497454\",\"element_type\":\"listing\",\"rank\":6}",
        "event_names": {
          "tap": "{\"action\":\"tap\"}",
          "impression": "{\"action\":\"impression\"}"
        }
      }
    ],
    "allCTA": [],
    "promoOffer": "",
    "checkBulkOffers": true,
    "bulkOffers": [
      {
        "text": "30% OFF",
        "color": {
          "tint": "500",
          "type": "blue"
        }
      }
    ],
    "isDisabled": false,
    "bottomContainers": []
  },
  {
    "type": "restaurant",
    "info": {
      "resId": 1882,
      "name": "Bangla Foods",
      "image": {
        "url": "https://b.zmtcdn.com/data/pictures/chains/2/1882/ce2fffa1d9e4e8593f21fe9b4ded42b0_o2_featured_v2.jpg"
      },
      "o2FeaturedImage": {
        "url": "https://b.zmtcdn.com/data/pictures/chains/2/1882/ce2fffa1d9e4e8593f21fe9b4ded42b0_o2_featured_v2.jpg"
      },
      "rating": {
        "has_fake_reviews": 0,
        "aggregate_rating": "3.7",
        "rating_text": "3.7",
        "rating_subtitle": "Good",
        "rating_color": "9ACD32",
        "votes": "6,137",
        "subtext": "REVIEWS",
        "is_new": false
      },
      "ratingNew": {
        "newlyOpenedObj": null,
        "suspiciousReviewObj": null,
        "ratings": {
          "DINING": {
            "rating_type": "DINING",
            "rating": "3.2",
            "reviewCount": "637",
            "reviewTextSmall": "637 Reviews",
            "subtext": "637 Dining Reviews",
            "color": "#1C1C1C",
            "ratingV2": "3.2",
            "subtitle": "DINING",
            "sideSubTitle": "Dining Ratings",
            "bgColorV2": {
              "type": "green",
              "tint": "500"
            },
            "newOnDining": false
          },
          "DELIVERY": {
            "rating_type": "DELIVERY",
            "rating": "4.2",
            "reviewCount": "5,500",
            "reviewTextSmall": "5,500 Reviews",
            "subtext": "5,500 Delivery Reviews",
            "color": "#E23744",
            "ratingV2": "4.2",
            "subtitle": "DELIVERY",
            "sideSubTitle": "Delivery Ratings",
            "bgColorV2": {
              "type": "green",
              "tint": "700"
            },
            "newOnDelivery": false
          }
        }
      },
      "cft": {
        "text": "₹300 for two"
      },
      "cfo": {
        "text": "₹200 for one"
      },
      "locality": {
        "name": "Gole Market, New Delhi",
        "address": "111-113, Bangla Sahib Marg, Gole Market, New Delhi",
        "localityUrl": "ncr/gole-market-delhi-restaurants"
      },
      "timing": {
        "text": "",
        "color": ""
      },
      "cuisine": [
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          "url": "https://www.zomato.com/ncr/restaurants/north-indian/",
          "name": "North Indian"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          "url": "https://www.zomato.com/ncr/restaurants/south-indian/",
          "name": "South Indian"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          "url": "https://www.zomato.com/ncr/restaurants/fast-food/",
          "name": "Fast Food"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
          "url": "https://www.zomato.com/ncr/restaurants/street-food/",
          "name": "Street Food"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          "url": "https://www.zomato.com/ncr/restaurants/chinese/",
          "name": "Chinese"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
          "url": "https://www.zomato.com/ncr/restaurants/ice-cream/",
          "name": "Ice Cream"
        }
      ],
      "should_ban_ugc": false,
      "costText": {
        "text": "₹200 for one"
      }
    },
    "order": {
      "deliveryTime": "23 min",
      "isServiceable": true,
      "hasOnlineOrdering": true,
      "actionInfo": {
        "text": "Order Now",
        "clickUrl": "/ncr/bangla-foods-gole-market-new-delhi/order"
      }
    },
    "gold": [],
    "takeaway": [],
    "cardAction": {
      "text": "",
      "clickUrl": "/ncr/bangla-foods-gole-market-new-delhi/order",
      "clickActionDeeplink": ""
    },
    "distance": "863 m",
    "isPromoted": false,
    "promotedText": "",
    "trackingData": [
      {
        "table_name": "zsearch_events_log",
        "payload": "{\"search_id\":\"57d6bad5-c0ad-478d-b814-f6f7617168ef\",\"location_type\":\"delivery_cell\",\"location_id\":\"4110939063815503872\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"1882\",\"element_type\":\"listing\",\"rank\":7}",
        "event_names": {
          "tap": "{\"action\":\"tap\"}",
          "impression": "{\"action\":\"impression\"}"
        }
      }
    ],
    "allCTA": [],
    "promoOffer": "",
    "checkBulkOffers": true,
    "bulkOffers": [
      {
        "text": "20% OFF",
        "color": {
          "tint": "500",
          "type": "blue"
        }
      }
    ],
    "isDisabled": false,
    "bottomContainers": [
      {
        "image": {
          "url": "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          "aspect_ratio": 2.66666666667
        },
        "text": "Follows all Max Safety measures to ensure your food is safe"
      }
    ]
  },
  {
    "type": "restaurant",
    "info": {
      "resId": 19677790,
      "name": "Haldiram's",
      "image": {
        "url": "https://b.zmtcdn.com/data/pictures/chains/0/550/9361ee4d0e18519da526b87f81f067ae_o2_featured_v2.jpg"
      },
      "o2FeaturedImage": {
        "url": "https://b.zmtcdn.com/data/pictures/chains/0/550/9361ee4d0e18519da526b87f81f067ae_o2_featured_v2.jpg"
      },
      "rating": {
        "has_fake_reviews": 0,
        "aggregate_rating": "3.5",
        "rating_text": "3.5",
        "rating_subtitle": "Good",
        "rating_color": "9ACD32",
        "votes": "2,804",
        "subtext": "REVIEWS",
        "is_new": false
      },
      "ratingNew": {
        "newlyOpenedObj": null,
        "suspiciousReviewObj": null,
        "ratings": {
          "DINING": {
            "rating_type": "DINING",
            "rating": "2.9",
            "reviewCount": "54",
            "reviewTextSmall": "54 Reviews",
            "subtext": "54 Dining Reviews",
            "color": "#1C1C1C",
            "ratingV2": "2.9",
            "subtitle": "DINING",
            "sideSubTitle": "Dining Ratings",
            "bgColorV2": {
              "type": "yellow",
              "tint": "600"
            },
            "newOnDining": false
          },
          "DELIVERY": {
            "rating_type": "DELIVERY",
            "rating": "4.0",
            "reviewCount": "2,750",
            "reviewTextSmall": "2,750 Reviews",
            "subtext": "2,750 Delivery Reviews",
            "color": "#E23744",
            "ratingV2": "4.0",
            "subtitle": "DELIVERY",
            "sideSubTitle": "Delivery Ratings",
            "bgColorV2": {
              "type": "green",
              "tint": "700"
            },
            "newOnDelivery": false
          }
        }
      },
      "cft": {
        "text": "₹400 for two"
      },
      "cfo": {
        "text": "₹200 for one"
      },
      "locality": {
        "name": "Janpath, New Delhi",
        "address": "70, Janpath, New Delhi",
        "localityUrl": "ncr/janpath-delhi-restaurants"
      },
      "timing": {
        "text": "Closes in 1 hour 27 minutes",
        "color": "#e5521f"
      },
      "cuisine": [
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          "url": "https://www.zomato.com/ncr/restaurants/south-indian/",
          "name": "South Indian"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          "url": "https://www.zomato.com/ncr/restaurants/north-indian/",
          "name": "North Indian"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
          "url": "https://www.zomato.com/ncr/restaurants/street-food/",
          "name": "Street Food"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          "url": "https://www.zomato.com/ncr/restaurants/chinese/",
          "name": "Chinese"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          "url": "https://www.zomato.com/ncr/restaurants/beverages/",
          "name": "Beverages"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          "url": "https://www.zomato.com/ncr/restaurants/desserts/",
          "name": "Desserts"
        }
      ],
      "should_ban_ugc": false,
      "costText": {
        "text": "₹200 for one"
      }
    },
    "order": {
      "deliveryTime": "28 min",
      "isServiceable": true,
      "hasOnlineOrdering": true,
      "actionInfo": {
        "text": "Order Now",
        "clickUrl": "/ncr/haldirams-janpath-new-delhi/order"
      }
    },
    "gold": [],
    "takeaway": [],
    "cardAction": {
      "text": "",
      "clickUrl": "/ncr/haldirams-janpath-new-delhi/order",
      "clickActionDeeplink": ""
    },
    "distance": "959 m",
    "isPromoted": false,
    "promotedText": "",
    "trackingData": [
      {
        "table_name": "zsearch_events_log",
        "payload": "{\"search_id\":\"57d6bad5-c0ad-478d-b814-f6f7617168ef\",\"location_type\":\"delivery_cell\",\"location_id\":\"4110939063815503872\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19677790\",\"element_type\":\"listing\",\"rank\":8}",
        "event_names": {
          "tap": "{\"action\":\"tap\"}",
          "impression": "{\"action\":\"impression\"}"
        }
      }
    ],
    "allCTA": [],
    "promoOffer": "",
    "checkBulkOffers": true,
    "bulkOffers": [
      {
        "text": "50% OFF",
        "color": {
          "tint": "500",
          "type": "blue"
        }
      }
    ],
    "isDisabled": false,
    "bottomContainers": [
      {
        "image": {
          "url": "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          "aspect_ratio": 2.66666666667
        },
        "text": "Follows all Max Safety measures to ensure your food is safe"
      }
    ]
  },
  {
    "type": "restaurant",
    "info": {
      "resId": 18400755,
      "name": "Theobroma",
      "image": {
        "url": "https://b.zmtcdn.com/data/pictures/chains/6/18384116/894c62acdb8f46e04a2e7192de00cb3a_o2_featured_v2.jpg"
      },
      "o2FeaturedImage": {
        "url": "https://b.zmtcdn.com/data/pictures/chains/6/18384116/894c62acdb8f46e04a2e7192de00cb3a_o2_featured_v2.jpg"
      },
      "rating": {
        "has_fake_reviews": 0,
        "aggregate_rating": "4.4",
        "rating_text": "4.4",
        "rating_subtitle": "Very Good",
        "rating_color": "5BA829",
        "votes": "11.7K",
        "subtext": "REVIEWS",
        "is_new": false
      },
      "ratingNew": {
        "newlyOpenedObj": null,
        "suspiciousReviewObj": null,
        "ratings": {
          "DINING": {
            "rating_type": "DINING",
            "rating": "4.3",
            "reviewCount": "920",
            "reviewTextSmall": "920 Reviews",
            "subtext": "920 Dining Reviews",
            "color": "#1C1C1C",
            "ratingV2": "4.3",
            "subtitle": "DINING",
            "sideSubTitle": "Dining Ratings",
            "bgColorV2": {
              "type": "green",
              "tint": "700"
            },
            "newOnDining": false
          },
          "DELIVERY": {
            "rating_type": "DELIVERY",
            "rating": "4.4",
            "reviewCount": "10.8K",
            "reviewTextSmall": "10.8K Reviews",
            "subtext": "10.8K Delivery Reviews",
            "color": "#E23744",
            "ratingV2": "4.4",
            "subtitle": "DELIVERY",
            "sideSubTitle": "Delivery Ratings",
            "bgColorV2": {
              "type": "green",
              "tint": "700"
            },
            "newOnDelivery": false
          }
        }
      },
      "cft": {
        "text": "₹300 for two"
      },
      "cfo": {
        "text": "₹200 for one"
      },
      "locality": {
        "name": "Middle Circle, Connaught Place, New Delhi",
        "address": "D-28, Ground Floor, Mezzanine, Connaught Place, New Delhi",
        "localityUrl": "ncr/restaurants/in/middle-circle-connaught-place"
      },
      "timing": {
        "text": "",
        "color": ""
      },
      "cuisine": [
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
          "url": "https://www.zomato.com/ncr/restaurants/bakery/",
          "name": "Bakery"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          "url": "https://www.zomato.com/ncr/restaurants/desserts/",
          "name": "Desserts"
        }
      ],
      "should_ban_ugc": false,
      "costText": {
        "text": "₹200 for one"
      }
    },
    "order": {
      "deliveryTime": "20 min",
      "isServiceable": true,
      "hasOnlineOrdering": true,
      "actionInfo": {
        "text": "Order Now",
        "clickUrl": "/ncr/theobroma-connaught-place-new-delhi/order"
      }
    },
    "gold": [],
    "takeaway": [],
    "cardAction": {
      "text": "",
      "clickUrl": "/ncr/theobroma-connaught-place-new-delhi/order",
      "clickActionDeeplink": ""
    },
    "distance": "1.4 km",
    "isPromoted": false,
    "promotedText": "",
    "trackingData": [
      {
        "table_name": "zsearch_events_log",
        "payload": "{\"search_id\":\"57d6bad5-c0ad-478d-b814-f6f7617168ef\",\"location_type\":\"delivery_cell\",\"location_id\":\"4110939063815503872\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18400755\",\"element_type\":\"listing\",\"rank\":9}",
        "event_names": {
          "tap": "{\"action\":\"tap\"}",
          "impression": "{\"action\":\"impression\"}"
        }
      }
    ],
    "allCTA": [],
    "promoOffer": "",
    "checkBulkOffers": true,
    "bulkOffers": [
      {
        "text": "50% OFF",
        "color": {
          "tint": "500",
          "type": "blue"
        }
      }
    ],
    "isDisabled": false,
    "bottomContainers": [
      {
        "image": {
          "url": "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          "aspect_ratio": 2.66666666667
        },
        "text": "Follows all Max Safety measures to ensure your food is safe"
      }
    ]
  },
  {
    "type": "restaurant",
    "info": {
      "resId": 3394,
      "name": "Zaffran",
      "image": {
        "url": "https://b.zmtcdn.com/data/pictures/chains/4/3394/aa31776b904cc6e8de321fbe855a7436_o2_featured_v2.jpg"
      },
      "o2FeaturedImage": {
        "url": "https://b.zmtcdn.com/data/pictures/chains/4/3394/aa31776b904cc6e8de321fbe855a7436_o2_featured_v2.jpg"
      },
      "rating": {
        "has_fake_reviews": 0,
        "aggregate_rating": "4.3",
        "rating_text": "4.3",
        "rating_subtitle": "Very Good",
        "rating_color": "5BA829",
        "votes": "2,621",
        "subtext": "REVIEWS",
        "is_new": false
      },
      "ratingNew": {
        "newlyOpenedObj": null,
        "suspiciousReviewObj": null,
        "ratings": {
          "DINING": {
            "rating_type": "DINING",
            "rating": "4.3",
            "reviewCount": "2,186",
            "reviewTextSmall": "2,186 Reviews",
            "subtext": "2,186 Dining Reviews",
            "color": "#1C1C1C",
            "ratingV2": "4.3",
            "subtitle": "DINING",
            "sideSubTitle": "Dining Ratings",
            "bgColorV2": {
              "type": "green",
              "tint": "700"
            },
            "newOnDining": false
          },
          "DELIVERY": {
            "rating_type": "DELIVERY",
            "rating": "4.3",
            "reviewCount": "435",
            "reviewTextSmall": "435 Reviews",
            "subtext": "435 Delivery Reviews",
            "color": "#E23744",
            "ratingV2": "4.3",
            "subtitle": "DELIVERY",
            "sideSubTitle": "Delivery Ratings",
            "bgColorV2": {
              "type": "green",
              "tint": "700"
            },
            "newOnDelivery": false
          }
        }
      },
      "cft": {
        "text": "₹2,800 for two"
      },
      "cfo": {
        "text": "₹200 for one"
      },
      "locality": {
        "name": "Middle Circle, Connaught Place, New Delhi",
        "address": "D-26/28, Hotel Palace Heights, Connaught Place, New Delhi",
        "localityUrl": "ncr/restaurants/in/middle-circle-connaught-place"
      },
      "timing": {
        "text": "",
        "color": ""
      },
      "cuisine": [
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          "url": "https://www.zomato.com/ncr/restaurants/north-indian/",
          "name": "North Indian"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
          "url": "https://www.zomato.com/ncr/restaurants/mughlai/",
          "name": "Mughlai"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          "url": "https://www.zomato.com/ncr/restaurants/biryani/",
          "name": "Biryani"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          "url": "https://www.zomato.com/ncr/restaurants/desserts/",
          "name": "Desserts"
        }
      ],
      "should_ban_ugc": false,
      "costText": {
        "text": "₹200 for one"
      }
    },
    "order": {
      "deliveryTime": "30 min",
      "isServiceable": true,
      "hasOnlineOrdering": true,
      "actionInfo": {
        "text": "Order Now",
        "clickUrl": "/ncr/zaffran-connaught-place-new-delhi/order"
      }
    },
    "gold": [],
    "takeaway": [],
    "cardAction": {
      "text": "",
      "clickUrl": "/ncr/zaffran-connaught-place-new-delhi/order",
      "clickActionDeeplink": ""
    },
    "distance": "1.4 km",
    "isPromoted": false,
    "promotedText": "",
    "trackingData": [
      {
        "table_name": "zsearch_events_log",
        "payload": "{\"search_id\":\"57d6bad5-c0ad-478d-b814-f6f7617168ef\",\"location_type\":\"delivery_cell\",\"location_id\":\"4110939063815503872\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"3394\",\"element_type\":\"listing\",\"rank\":10}",
        "event_names": {
          "tap": "{\"action\":\"tap\"}",
          "impression": "{\"action\":\"impression\"}"
        }
      }
    ],
    "allCTA": [],
    "promoOffer": "",
    "checkBulkOffers": true,
    "bulkOffers": [
      {
        "text": "40% OFF",
        "color": {
          "tint": "500",
          "type": "blue"
        }
      }
    ],
    "isDisabled": false,
    "bottomContainers": [
      {
        "image": {
          "url": "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png",
          "aspect_ratio": 2.0625
        },
        "text": "Restaurant partner follows WHO protocol"
      }
    ]
  },
  {
    "type": "restaurant",
    "info": {
      "resId": 20641915,
      "name": "The Pizza Kings",
      "image": {
        "url": "https://b.zmtcdn.com/data/pictures/5/20641915/057c85ce068b075d4b6ece9dfda62c48_o2_featured_v2.jpg"
      },
      "o2FeaturedImage": {
        "url": "https://b.zmtcdn.com/data/pictures/5/20641915/057c85ce068b075d4b6ece9dfda62c48_o2_featured_v2.jpg"
      },
      "rating": {
        "has_fake_reviews": 0,
        "aggregate_rating": "3.7",
        "rating_text": "3.7",
        "rating_subtitle": "Good",
        "rating_color": "9ACD32",
        "votes": "2,796",
        "subtext": "REVIEWS",
        "is_new": false
      },
      "ratingNew": {
        "newlyOpenedObj": null,
        "suspiciousReviewObj": null,
        "ratings": {
          "DINING": {
            "rating_type": "DINING",
            "rating": "3.4",
            "reviewCount": "4",
            "reviewTextSmall": "4 Reviews",
            "subtext": "4 Dining Reviews",
            "color": "#1C1C1C",
            "ratingV2": "3.4",
            "subtitle": "DINING",
            "sideSubTitle": "Dining Ratings",
            "bgColorV2": {
              "type": "green",
              "tint": "500"
            },
            "newOnDining": false
          },
          "DELIVERY": {
            "rating_type": "DELIVERY",
            "rating": "4.0",
            "reviewCount": "2,792",
            "reviewTextSmall": "2,792 Reviews",
            "subtext": "2,792 Delivery Reviews",
            "color": "#E23744",
            "ratingV2": "4.0",
            "subtitle": "DELIVERY",
            "sideSubTitle": "Delivery Ratings",
            "bgColorV2": {
              "type": "green",
              "tint": "700"
            },
            "newOnDelivery": false
          }
        }
      },
      "cft": {
        "text": "₹600 for two"
      },
      "cfo": {
        "text": "₹200 for one"
      },
      "locality": {
        "name": "Inderlok, New Delhi",
        "address": "945/7B, Shastri Nagar, Inderlok, New Delhi",
        "localityUrl": "ncr/inderlok-delhi-restaurants"
      },
      "timing": {
        "text": "",
        "color": ""
      },
      "cuisine": [
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          "url": "https://www.zomato.com/ncr/restaurants/pizza/",
          "name": "Pizza"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
          "url": "https://www.zomato.com/ncr/restaurants/pasta/",
          "name": "Pasta"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
          "url": "https://www.zomato.com/ncr/restaurants/sandwich/",
          "name": "Sandwich"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
          "url": "https://www.zomato.com/ncr/restaurants/burger/",
          "name": "Burger"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          "url": "https://www.zomato.com/ncr/restaurants/fast-food/",
          "name": "Fast Food"
        }
      ],
      "should_ban_ugc": false,
      "costText": {
        "text": "₹200 for one"
      }
    },
    "order": {
      "deliveryTime": "41 min",
      "isServiceable": true,
      "hasOnlineOrdering": true,
      "actionInfo": {
        "text": "Order Now",
        "clickUrl": "/ncr/the-pizza-kings-1-inderlok-new-delhi/order"
      }
    },
    "gold": [],
    "takeaway": [],
    "cardAction": {
      "text": "",
      "clickUrl": "/ncr/the-pizza-kings-1-inderlok-new-delhi/order",
      "clickActionDeeplink": ""
    },
    "distance": "5.9 km",
    "isPromoted": false,
    "promotedText": "",
    "trackingData": [
      {
        "table_name": "zsearch_events_log",
        "payload": "{\"search_id\":\"57d6bad5-c0ad-478d-b814-f6f7617168ef\",\"location_type\":\"delivery_cell\",\"location_id\":\"4110939063815503872\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20641915\",\"element_type\":\"listing\",\"rank\":11}",
        "event_names": {
          "tap": "{\"action\":\"tap\"}",
          "impression": "{\"action\":\"impression\"}"
        }
      }
    ],
    "allCTA": [],
    "promoOffer": "",
    "checkBulkOffers": true,
    "bulkOffers": [
      {
        "text": "30% OFF",
        "color": {
          "tint": "500",
          "type": "blue"
        }
      }
    ],
    "isDisabled": false,
    "bottomContainers": []
  },
  {
    "type": "restaurant",
    "info": {
      "resId": 2504,
      "name": "Pind Balluchi",
      "image": {
        "url": "https://b.zmtcdn.com/data/pictures/chains/6/836/009ab85645f2fb4cb840face5f99436c_o2_featured_v2.jpg"
      },
      "o2FeaturedImage": {
        "url": "https://b.zmtcdn.com/data/pictures/chains/6/836/009ab85645f2fb4cb840face5f99436c_o2_featured_v2.jpg"
      },
      "rating": {
        "has_fake_reviews": 0,
        "aggregate_rating": "4.0",
        "rating_text": "4.0",
        "rating_subtitle": "Very Good",
        "rating_color": "5BA829",
        "votes": "10.3K",
        "subtext": "REVIEWS",
        "is_new": false
      },
      "ratingNew": {
        "newlyOpenedObj": null,
        "suspiciousReviewObj": null,
        "ratings": {
          "DINING": {
            "rating_type": "DINING",
            "rating": "3.7",
            "reviewCount": "3,764",
            "reviewTextSmall": "3,764 Reviews",
            "subtext": "3,764 Dining Reviews",
            "color": "#1C1C1C",
            "ratingV2": "3.7",
            "subtitle": "DINING",
            "sideSubTitle": "Dining Ratings",
            "bgColorV2": {
              "type": "green",
              "tint": "600"
            },
            "newOnDining": false
          },
          "DELIVERY": {
            "rating_type": "DELIVERY",
            "rating": "4.2",
            "reviewCount": "6,570",
            "reviewTextSmall": "6,570 Reviews",
            "subtext": "6,570 Delivery Reviews",
            "color": "#E23744",
            "ratingV2": "4.2",
            "subtitle": "DELIVERY",
            "sideSubTitle": "Delivery Ratings",
            "bgColorV2": {
              "type": "green",
              "tint": "700"
            },
            "newOnDelivery": false
          }
        }
      },
      "cft": {
        "text": "₹1,600 for two"
      },
      "cfo": {
        "text": "₹200 for one"
      },
      "locality": {
        "name": "Connaught Place, New Delhi",
        "address": "13, Regal Building, Connaught Place, New Delhi",
        "localityUrl": "ncr/connaught-place-delhi-restaurants"
      },
      "timing": {
        "text": "",
        "color": ""
      },
      "cuisine": [
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          "url": "https://www.zomato.com/ncr/restaurants/north-indian/",
          "name": "North Indian"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
          "url": "https://www.zomato.com/ncr/restaurants/mughlai/",
          "name": "Mughlai"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
          "url": "https://www.zomato.com/ncr/restaurants/kebab/",
          "name": "Kebab"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          "url": "https://www.zomato.com/ncr/restaurants/biryani/",
          "name": "Biryani"
        }
      ],
      "should_ban_ugc": false,
      "costText": {
        "text": "₹200 for one"
      }
    },
    "order": {
      "deliveryTime": "35 min",
      "isServiceable": true,
      "hasOnlineOrdering": true,
      "actionInfo": {
        "text": "Order Now",
        "clickUrl": "/ncr/pind-balluchi-connaught-place-new-delhi/order"
      }
    },
    "gold": [],
    "takeaway": [],
    "cardAction": {
      "text": "",
      "clickUrl": "/ncr/pind-balluchi-connaught-place-new-delhi/order",
      "clickActionDeeplink": ""
    },
    "distance": "842 m",
    "isPromoted": false,
    "promotedText": "",
    "trackingData": [
      {
        "table_name": "zsearch_events_log",
        "payload": "{\"search_id\":\"57d6bad5-c0ad-478d-b814-f6f7617168ef\",\"location_type\":\"delivery_cell\",\"location_id\":\"4110939063815503872\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"2504\",\"element_type\":\"listing\",\"rank\":12}",
        "event_names": {
          "tap": "{\"action\":\"tap\"}",
          "impression": "{\"action\":\"impression\"}"
        }
      }
    ],
    "allCTA": [],
    "promoOffer": "",
    "checkBulkOffers": true,
    "bulkOffers": [
      {
        "text": "50% OFF",
        "color": {
          "tint": "500",
          "type": "blue"
        }
      }
    ],
    "isDisabled": false,
    "bottomContainers": []
  }
]
//Header
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://imgs.search.brave.com/jbbnp3P3mUwfHfFBTF8lCyobFF3-gAMgnOyd0eBXbCI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzYwMzc5/ODYvc2NyZWVuc2hv/dHMvMTc2MTcwODIv/bWVkaWEvOTNmMzgw/NGUzOTM4OGZkZTE2/YmI4NjIxYWU2YWYx/YjkuanBnP3Jlc2l6/ZT00MDB4MzAwJnZl/cnRpY2FsPWNlbnRl/cg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
//Restaurant card
const RestaurantCard = (props) => {
  const {resData} = props;
  // const {name,image,rating,order} = resData?.info;
  const {name,rating,image} = resData?.info;
  const {deliveryTime} = resData?.order; 
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={image.url}
      />
      <h3>{name}</h3>
      <h4>{resData.info.cft.text}</h4>
      <h4>{rating.rating_text}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};
//Body
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {
          resList.map((restaurant) => (
            <RestaurantCard key={restaurant.info.resId} resData = {restaurant}/>
          ))
        }
        {/* <RestaurantCard resData = {resData}/> */}
        
        
      </div>
    </div>
  );
};
//Main App Layout
const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
