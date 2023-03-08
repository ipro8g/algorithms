const map1 = [
        {
            "index":0,
            "connect":[
                {
                    "index":3,
                    "distance":1
                },
                {
                    "index":1,
                    "distance":6
                }
            ]
        },
        {
            "index":1,
            "connect":[
                {
                    "index":0,
                    "distance":6
                },
                {
                    "index":2,
                    "distance":5
                },
                {
                    "index":4,
                    "distance":2
                },
                {
                    "index":3,
                    "distance":2
                }
            ]
        },
        {
            "index":2,
            "connect":[
                {
                    "index":1,
                    "distance":5
                },
                {
                    "index":4,
                    "distance":5
                }
            ]
        },
        {
            "index":3,
            "connect":[
                {
                    "index":0,
                    "distance":1
                },
                {
                    "index":4,
                    "distance":1
                },
                {
                    "index":1,
                    "distance":2
                }
            ]
        },
        {
            "index":4,
            "connect":[
                {
                    "index":1,
                    "distance":2
                },
                {
                    "index":2,
                    "distance":5
                },
                {
                    "index":3,
                    "distance":1
                }
            ]
        }
    ];
    
const map2 = [
    {
        "name":"a",
        "connect":[
                    {
                        "name":"b",
                        "distance":2
                    },
                    {
                        "name":"d",
                        "distance":1
                    },
                    {
                        "name":"c",
                        "distance":4
                    }
                  ]
    },
    {
        "name":"b",
        "connect":[
                    {
                        "name":"a",
                        "distance":2
                    },
                    {
                        "name":"c",
                        "distance":3
                    },
                    {
                        "name":"e",
                        "distance":1
                    }
                  ]
    },
    {
        "name":"c",
        "connect":[
                    {
                        "name":"a",
                        "distance":4
                    },
                    {
                        "name":"b",
                        "distance":3
                    },
                    {
                        "name":"e",
                        "distance":2
                    },
                    {
                        "name":"f",
                        "distance":2
                    }
                  ]
    },
    {
        "name":"d",
        "connect":[
                    {
                        "name":"a",
                        "distance":1
                    },
                    {
                        "name":"f",
                        "distance":5
                    },
                    {
                        "name":"g",
                        "distance":4
                    }
                  ]
    },
    {
        "name":"e",
        "connect":[
                    {
                        "name":"b",
                        "distance":1
                    },
                    {
                        "name":"c",
                        "distance":2
                    },
                    {
                        "name":"h",
                        "distance":3
                    }
                  ]
    },
    {
        "name":"f",
        "connect":[
                    {
                        "name":"c",
                        "distance":2
                    },
                    {
                        "name":"d",
                        "distance":5
                    },
                    {
                        "name":"h",
                        "distance":3
                    },
                    {
                        "name":"i",
                        "distance":2
                    },
                    {
                        "name":"j",
                        "distance":4
                    },
                    {
                        "name":"g",
                        "distance":3
                    }
                  ]
    },
    {
        "name":"g",
        "connect":[
                    {
                        "name":"d",
                        "distance":4
                    },
                    {
                        "name":"f",
                        "distance":3
                    },
                    {
                        "name":"k",
                        "distance":2
                    }
                  ]
    },
    {
        "name":"h",
        "connect":[
                    {
                        "name":"e",
                        "distance":3
                    },
                    {
                        "name":"f",
                        "distance":3
                    },
                    {
                        "name":"o",
                        "distance":8
                    },
                    {
                        "name":"l",
                        "distance":1
                    }
                  ]
    },
    {
        "name":"i",
        "connect":[
                    {
                        "name":"f",
                        "distance":2
                    },
                    {
                        "name":"l",
                        "distance":3
                    },
                    {
                        "name":"j",
                        "distance":3
                    },
                    {
                        "name":"m",
                        "distance":2
                    }
                  ]
    },
    {
        "name":"j",
        "connect":[
                    {
                        "name":"i",
                        "distance":3
                    },
                    {
                        "name":"f",
                        "distance":4
                    },
                    {
                        "name":"m",
                        "distance":6
                    },
                    {
                        "name":"n",
                        "distance":3
                    },
                    {
                        "name":"k",
                        "distance":6
                    }
                  ]
    },
    {
        "name":"k",
        "connect":[
                    {
                        "name":"g",
                        "distance":2
                    },
                    {
                        "name":"r",
                        "distance":2
                    },
                    {
                        "name":"n",
                        "distance":4
                    },
                    {
                        "name":"j",
                        "distance":6
                    }
                  ]
    },
    {
        "name":"l",
        "connect":[
                    {
                        "name":"o",
                        "distance":6
                    },
                    {
                        "name":"h",
                        "distance":1
                    },
                    {
                        "name":"i",
                        "distance":3
                    },
                    {
                        "name":"m",
                        "distance":3
                    }
                  ]
    },
    {
        "name":"m",
        "connect":[
                    {
                        "name":"l",
                        "distance":3
                    },
                    {
                        "name":"p",
                        "distance":2
                    },
                    {
                        "name":"i",
                        "distance":2
                    },
                    {
                        "name":"o",
                        "distance":4
                    },
                    {
                        "name":"j",
                        "distance":6
                    },
                    {
                        "name":"n",
                        "distance":5
                    }
                  ]
    },
    {
        "name":"n",
        "connect":[
                    {
                        "name":"m",
                        "distance":5
                    },
                    {
                        "name":"q",
                        "distance":2
                    },
                    {
                        "name":"j",
                        "distance":3
                    },
                    {
                        "name":"k",
                        "distance":4
                    },
                    {
                        "name":"r",
                        "distance":1
                    }
                  ]
    },
    {
        "name":"o",
        "connect":[
                    {
                        "name":"s",
                        "distance":6
                    },
                    {
                        "name":"h",
                        "distance":8
                    },
                    {
                        "name":"l",
                        "distance":6
                    },
                    {
                        "name":"p",
                        "distance":2
                    },
                    {
                        "name":"m",
                        "distance":4
                    }
                  ]
    },
    {
        "name":"p",
        "connect":[
                    {
                        "name":"o",
                        "distance":2
                    },
                    {
                        "name":"s",
                        "distance":2
                    },
                    {
                        "name":"m",
                        "distance":2
                    },
                    {
                        "name":"t",
                        "distance":1
                    },
                    {
                        "name":"q",
                        "distance":1
                    }
                  ]
    },
    {
        "name":"q",
        "connect":[
                    {
                        "name":"p",
                        "distance":1
                    },
                    {
                        "name":"t",
                        "distance":3
                    },
                    {
                        "name":"n",
                        "distance":2
                    },
                    {
                        "name":"r",
                        "distance":8
                    }
                  ]
    },
    {
        "name":"r",
        "connect":[
                    {
                        "name":"t",
                        "distance":5
                    },
                    {
                        "name":"q",
                        "distance":8
                    },
                    {
                        "name":"n",
                        "distance":1
                    },
                    {
                        "name":"k",
                        "distance":2
                    }
                  ]
    },
    {
        "name":"s",
        "connect":[
                    {
                        "name":"o",
                        "distance":6
                    },
                    {
                        "name":"u",
                        "distance":2
                    },
                    {
                        "name":"p",
                        "distance":2
                    }
                  ]
    },
    {
        "name":"t",
        "connect":[
                    {
                        "name":"u",
                        "distance":8
                    },
                    {
                        "name":"p",
                        "distance":1
                    },
                    {
                        "name":"q",
                        "distance":3
                    },
                    {
                        "name":"r",
                        "distance":5
                    }
                  ]
    },
    {
        "name":"u",
        "connect":[
                    {
                        "name":"s",
                        "distance":2
                    },
                    {
                        "name":"t",
                        "distance":8
                    }
                  ]
    }
];