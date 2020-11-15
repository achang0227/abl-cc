
const fetchTopAlbums = (function() {
  const ALBUMS_DATA = {
    "feed": {
      "author": {
        "name": {
          "label": "iTunes Store"
        },
        "uri": {
          "label": "http://www.apple.com/itunes/"
        }
      },
      "entry": [{
        "im:name": {
          "label": "Descendants 3 (Original TV Movie Soundtrack)"
        },
        "im:image": [{
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music123/v4/26/8b/7f/268b7f91-f8b1-deff-0bac-cf77834f5f01/19UMGIM47919.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/26/8b/7f/268b7f91-f8b1-deff-0bac-cf77834f5f01/19UMGIM47919.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/26/8b/7f/268b7f91-f8b1-deff-0bac-cf77834f5f01/19UMGIM47919.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "13"
        },
        "im:price": {
          "label": "$7.99",
          "attributes": {
            "amount": "7.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2019 Walt Disney Records"
        },
        "title": {
          "label": "Descendants 3 (Original TV Movie Soundtrack) - Various Artists"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/descendants-3-original-tv-movie-soundtrack/1465832864?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/descendants-3-original-tv-movie-soundtrack/1465832864?uo=2",
          "attributes": {
            "im:id": "1465832864"
          }
        },
        "im:artist": {
          "label": "Various Artists"
        },
        "category": {
          "attributes": {
            "im:id": "16",
            "term": "Soundtrack",
            "scheme": "https://music.apple.com/us/genre/music-soundtrack/id16?uo=2",
            "label": "Soundtrack"
          }
        },
        "im:releaseDate": {
          "label": "2019-08-02T00:00:00-07:00",
          "attributes": {
            "label": "August 2, 2019"
          }
        }
      }, {
        "im:name": {
          "label": "Atonement"
        },
        "im:image": [{
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music123/v4/d4/bb/68/d4bb6807-6f1a-0bec-4555-f7a5d94aa185/Killswitch_Engage_-_Atonement.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/d4/bb/68/d4bb6807-6f1a-0bec-4555-f7a5d94aa185/Killswitch_Engage_-_Atonement.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/d4/bb/68/d4bb6807-6f1a-0bec-4555-f7a5d94aa185/Killswitch_Engage_-_Atonement.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "11"
        },
        "im:price": {
          "label": "$9.99",
          "attributes": {
            "amount": "9.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2019 Metal Blade Records"
        },
        "title": {
          "label": "Atonement - Killswitch Engage"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/atonement/1466701470?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/atonement/1466701470?uo=2",
          "attributes": {
            "im:id": "1466701470"
          }
        },
        "im:artist": {
          "label": "Killswitch Engage",
          "attributes": {
            "href": "https://music.apple.com/us/artist/killswitch-engage/14268438?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "1153",
            "term": "Heavy Metal",
            "scheme": "https://music.apple.com/us/genre/music-rock-metal/id1153?uo=2",
            "label": "Metal"
          }
        },
        "im:releaseDate": {
          "label": "2019-08-16T00:00:00-07:00",
          "attributes": {
            "label": "August 16, 2019"
          }
        }
      }, {
        "im:name": {
          "label": "WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?"
        },
        "im:image": [{
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/a7/31/24/a731244c-e065-2f44-63a2-d15b6b27fefa/00602577427657.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/a7/31/24/a731244c-e065-2f44-63a2-d15b6b27fefa/00602577427657.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/a7/31/24/a731244c-e065-2f44-63a2-d15b6b27fefa/00602577427657.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "14"
        },
        "im:price": {
          "label": "$9.99",
          "attributes": {
            "amount": "9.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2019 Darkroom/Interscope Records"
        },
        "title": {
          "label": "WHEN WE ALL FALL ASLEEP, WHERE DO WE GO? - Billie Eilish"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/when-we-all-fall-asleep-where-do-we-go/1450695723?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/when-we-all-fall-asleep-where-do-we-go/1450695723?uo=2",
          "attributes": {
            "im:id": "1450695723"
          }
        },
        "im:artist": {
          "label": "Billie Eilish",
          "attributes": {
            "href": "https://music.apple.com/us/artist/billie-eilish/1065981054?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "20",
            "term": "Alternative",
            "scheme": "https://music.apple.com/us/genre/music-alternative/id20?uo=2",
            "label": "Alternative"
          }
        },
        "im:releaseDate": {
          "label": "2019-03-29T00:00:00-07:00",
          "attributes": {
            "label": "March 29, 2019"
          }
        }
      }, {
        "im:name": {
          "label": "Look Up Child"
        },
        "im:image": [{
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/ac/3a/5d/ac3a5d41-5bce-4ec2-b795-51d1436c88b4/829619167054.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/ac/3a/5d/ac3a5d41-5bce-4ec2-b795-51d1436c88b4/829619167054.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/ac/3a/5d/ac3a5d41-5bce-4ec2-b795-51d1436c88b4/829619167054.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "13"
        },
        "im:price": {
          "label": "$7.99",
          "attributes": {
            "amount": "7.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2018 Centricity Music, exclusively Marketed & Distributed by 12Tone Music, LLC. All rights reserved."
        },
        "title": {
          "label": "Look Up Child - Lauren Daigle"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/look-up-child/1447184494?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/look-up-child/1447184494?uo=2",
          "attributes": {
            "im:id": "1447184494"
          }
        },
        "im:artist": {
          "label": "Lauren Daigle",
          "attributes": {
            "href": "https://music.apple.com/us/artist/lauren-daigle/722177758?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "22",
            "term": "Christian & Gospel",
            "scheme": "https://music.apple.com/us/genre/music-christian-gospel/id22?uo=2",
            "label": "Christian & Gospel"
          }
        },
        "im:releaseDate": {
          "label": "2018-09-07T00:00:00-07:00",
          "attributes": {
            "label": "September 7, 2018"
          }
        }
      }, {
        "im:name": {
          "label": "NOW That's What I Call Music, Vol. 71"
        },
        "im:image": [{
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/2a/7d/2c/2a7d2c8b-9df7-b145-80df-f26172db3078/886447824429.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/2a/7d/2c/2a7d2c8b-9df7-b145-80df-f26172db3078/886447824429.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music123/v4/2a/7d/2c/2a7d2c8b-9df7-b145-80df-f26172db3078/886447824429.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "20"
        },
        "im:price": {
          "label": "$7.99",
          "attributes": {
            "amount": "7.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2019 UMG Recordings, Inc. and Sony Music Entertainment"
        },
        "title": {
          "label": "NOW That's What I Call Music, Vol. 71 - Various Artists"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/now-thats-what-i-call-music-vol-71/1472053532?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/now-thats-what-i-call-music-vol-71/1472053532?uo=2",
          "attributes": {
            "im:id": "1472053532"
          }
        },
        "im:artist": {
          "label": "Various Artists"
        },
        "category": {
          "attributes": {
            "im:id": "14",
            "term": "Pop",
            "scheme": "https://music.apple.com/us/genre/music-pop/id14?uo=2",
            "label": "Pop"
          }
        },
        "im:releaseDate": {
          "label": "2019-08-02T00:00:00-07:00",
          "attributes": {
            "label": "August 2, 2019"
          }
        }
      }, {
        "im:name": {
          "label": "The Search"
        },
        "im:image": [{
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music113/v4/bb/ef/fb/bbeffb1f-55fa-0a14-ae30-672f804c4d7f/19UMGIM46307.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/bb/ef/fb/bbeffb1f-55fa-0a14-ae30-672f804c4d7f/19UMGIM46307.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/bb/ef/fb/bbeffb1f-55fa-0a14-ae30-672f804c4d7f/19UMGIM46307.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "20"
        },
        "im:price": {
          "label": "$10.99",
          "attributes": {
            "amount": "10.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2019 NF Real Music, LLC"
        },
        "title": {
          "label": "The Search - NF"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/the-search/1470132470?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/the-search/1470132470?uo=2",
          "attributes": {
            "im:id": "1470132470"
          }
        },
        "im:artist": {
          "label": "NF",
          "attributes": {
            "href": "https://music.apple.com/us/artist/nf/898094630?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "18",
            "term": "Hip Hop/Rap",
            "scheme": "https://music.apple.com/us/genre/music-hip-hop-rap/id18?uo=2",
            "label": "Hip-Hop/Rap"
          }
        },
        "im:releaseDate": {
          "label": "2019-07-26T00:00:00-07:00",
          "attributes": {
            "label": "July 26, 2019"
          }
        }
      }, {
        "im:name": {
          "label": "Country Squire"
        },
        "im:image": [{
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/da/b8/04/dab804d9-4e04-68cb-bfbd-c65afa6c3e36/886447696750.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music113/v4/da/b8/04/dab804d9-4e04-68cb-bfbd-c65afa6c3e36/886447696750.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/da/b8/04/dab804d9-4e04-68cb-bfbd-c65afa6c3e36/886447696750.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "9"
        },
        "im:price": {
          "label": "$7.99",
          "attributes": {
            "amount": "7.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2019 Hickman Holler Records, under exclusive license to RCA Records, a division of Sony Music Entertainment."
        },
        "title": {
          "label": "Country Squire - Tyler Childers"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/country-squire/1462929670?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/country-squire/1462929670?uo=2",
          "attributes": {
            "im:id": "1462929670"
          }
        },
        "im:artist": {
          "label": "Tyler Childers",
          "attributes": {
            "href": "https://music.apple.com/us/artist/tyler-childers/473667472?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "6",
            "term": "Country",
            "scheme": "https://music.apple.com/us/genre/music-country/id6?uo=2",
            "label": "Country"
          }
        },
        "im:releaseDate": {
          "label": "2019-08-02T00:00:00-07:00",
          "attributes": {
            "label": "August 2, 2019"
          }
        }
      }, {
        "im:name": {
          "label": "Lateralus"
        },
        "im:image": [{
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music113/v4/fb/99/8c/fb998c1e-1a11-2434-0fa7-0d90beba5d2b/886447824764.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music113/v4/fb/99/8c/fb998c1e-1a11-2434-0fa7-0d90beba5d2b/886447824764.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music113/v4/fb/99/8c/fb998c1e-1a11-2434-0fa7-0d90beba5d2b/886447824764.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "13"
        },
        "im:price": {
          "label": "$11.99",
          "attributes": {
            "amount": "11.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2001 Tool Dissectional, L.L.C./Volcano Entertainment II, L.L.C.."
        },
        "title": {
          "label": "Lateralus - TOOL"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/lateralus/1474185412?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/lateralus/1474185412?uo=2",
          "attributes": {
            "im:id": "1474185412"
          }
        },
        "im:artist": {
          "label": "TOOL",
          "attributes": {
            "href": "https://music.apple.com/us/artist/tool/140870416?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "1153",
            "term": "Heavy Metal",
            "scheme": "https://music.apple.com/us/genre/music-rock-metal/id1153?uo=2",
            "label": "Metal"
          }
        },
        "im:releaseDate": {
          "label": "2001-05-15T00:00:00-07:00",
          "attributes": {
            "label": "May 15, 2001"
          }
        }
      }, {
        "im:name": {
          "label": "Greatest Hits"
        },
        "im:image": [{
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/69/0f/1c/690f1c32-c65d-b4bc-457c-d2682766761b/00050087319175.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music128/v4/69/0f/1c/690f1c32-c65d-b4bc-457c-d2682766761b/00050087319175.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/69/0f/1c/690f1c32-c65d-b4bc-457c-d2682766761b/00050087319175.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "17"
        },
        "im:price": {
          "label": "$10.99",
          "attributes": {
            "amount": "10.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "This Compilation ℗ 2014 Hollywood Records, Inc."
        },
        "title": {
          "label": "Greatest Hits - Queen"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/greatest-hits/1422650667?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/greatest-hits/1422650667?uo=2",
          "attributes": {
            "im:id": "1422650667"
          }
        },
        "im:artist": {
          "label": "Queen",
          "attributes": {
            "href": "https://music.apple.com/us/artist/queen/3296287?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "21",
            "term": "Rock",
            "scheme": "https://music.apple.com/us/genre/music-rock/id21?uo=2",
            "label": "Rock"
          }
        },
        "im:releaseDate": {
          "label": "1981-10-26T00:00:00-07:00",
          "attributes": {
            "label": "October 26, 1981"
          }
        }
      }, {
        "im:name": {
          "label": "The Greatest Showman (Original Motion Picture Soundtrack)"
        },
        "im:image": [{
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/c1/7b/a9/c17ba975-34aa-ee68-d3c9-e1db840fa06b/075679886613.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/c1/7b/a9/c17ba975-34aa-ee68-d3c9-e1db840fa06b/075679886613.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/c1/7b/a9/c17ba975-34aa-ee68-d3c9-e1db840fa06b/075679886613.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "11"
        },
        "im:price": {
          "label": "$9.99",
          "attributes": {
            "amount": "9.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2017 This compilation Atlantic Recording Corporation for the United States and WEA International Inc. for the world outside of the United States. Motion Picture Artwork, Photos, and Fox Trademarks and Logos TM and © 2017 Twentieth Century Fox Film Corporation."
        },
        "title": {
          "label": "The Greatest Showman (Original Motion Picture Soundtrack) - Various Artists"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/the-greatest-showman-original-motion-picture-soundtrack/1299856714?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/the-greatest-showman-original-motion-picture-soundtrack/1299856714?uo=2",
          "attributes": {
            "im:id": "1299856714"
          }
        },
        "im:artist": {
          "label": "Various Artists"
        },
        "category": {
          "attributes": {
            "im:id": "16",
            "term": "Soundtrack",
            "scheme": "https://music.apple.com/us/genre/music-soundtrack/id16?uo=2",
            "label": "Soundtrack"
          }
        },
        "im:releaseDate": {
          "label": "2017-12-08T00:00:00-07:00",
          "attributes": {
            "label": "December 8, 2017"
          }
        }
      }, {
        "im:name": {
          "label": "Victorious"
        },
        "im:image": [{
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music113/v4/f8/45/8c/f8458c86-af38-ed87-09af-413215bb0c18/075679849601.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/f8/45/8c/f8458c86-af38-ed87-09af-413215bb0c18/075679849601.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music113/v4/f8/45/8c/f8458c86-af38-ed87-09af-413215bb0c18/075679849601.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "12"
        },
        "im:price": {
          "label": "$9.99",
          "attributes": {
            "amount": "9.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2019 Atlantic Recording Corporation for the United States and WEA International Inc. for the world outside of the United States. A Warner Music Group Company"
        },
        "title": {
          "label": "Victorious - Skillet"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/victorious/1462648219?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/victorious/1462648219?uo=2",
          "attributes": {
            "im:id": "1462648219"
          }
        },
        "im:artist": {
          "label": "Skillet",
          "attributes": {
            "href": "https://music.apple.com/us/artist/skillet/1750802?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "1152",
            "term": "Hard Rock",
            "scheme": "https://music.apple.com/us/genre/music-rock-hard-rock/id1152?uo=2",
            "label": "Hard Rock"
          }
        },
        "im:releaseDate": {
          "label": "2019-08-02T00:00:00-07:00",
          "attributes": {
            "label": "August 2, 2019"
          }
        }
      }, {
        "im:name": {
          "label": "Happiness Begins"
        },
        "im:image": [{
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/fa/c2/d5/fac2d55b-d2ba-03ab-855b-fb9722419c88/19UMGIM38391.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music113/v4/fa/c2/d5/fac2d55b-d2ba-03ab-855b-fb9722419c88/19UMGIM38391.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/fa/c2/d5/fac2d55b-d2ba-03ab-855b-fb9722419c88/19UMGIM38391.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "14"
        },
        "im:price": {
          "label": "$10.99",
          "attributes": {
            "amount": "10.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2019 Jonas Brothers Recording, Limited Liability Company, under exclusive license to Republic Records, a division of UMG Recordings, Inc."
        },
        "title": {
          "label": "Happiness Begins - Jonas Brothers"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/happiness-begins/1461478261?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/happiness-begins/1461478261?uo=2",
          "attributes": {
            "im:id": "1461478261"
          }
        },
        "im:artist": {
          "label": "Jonas Brothers",
          "attributes": {
            "href": "https://music.apple.com/us/artist/jonas-brothers/114342891?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "14",
            "term": "Pop",
            "scheme": "https://music.apple.com/us/genre/music-pop/id14?uo=2",
            "label": "Pop"
          }
        },
        "im:releaseDate": {
          "label": "2019-06-07T00:00:00-07:00",
          "attributes": {
            "label": "June 7, 2019"
          }
        }
      }, {
        "im:name": {
          "label": "The Platinum Collection (Greatest Hits I, II & III)"
        },
        "im:image": [{
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/9e/65/ef/9e65ef3a-4c0c-ed55-6161-4d2946a9235e/00050087319090.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/9e/65/ef/9e65ef3a-4c0c-ed55-6161-4d2946a9235e/00050087319090.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/9e/65/ef/9e65ef3a-4c0c-ed55-6161-4d2946a9235e/00050087319090.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "51"
        },
        "im:price": {
          "label": "$24.99",
          "attributes": {
            "amount": "24.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2014 Hollywood Records, Inc."
        },
        "title": {
          "label": "The Platinum Collection (Greatest Hits I, II & III) - Queen"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/the-platinum-collection-greatest-hits-i-ii-iii/1440650428?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/the-platinum-collection-greatest-hits-i-ii-iii/1440650428?uo=2",
          "attributes": {
            "im:id": "1440650428"
          }
        },
        "im:artist": {
          "label": "Queen",
          "attributes": {
            "href": "https://music.apple.com/us/artist/queen/3296287?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "21",
            "term": "Rock",
            "scheme": "https://music.apple.com/us/genre/music-rock/id21?uo=2",
            "label": "Rock"
          }
        },
        "im:releaseDate": {
          "label": "2000-11-13T00:00:00-07:00",
          "attributes": {
            "label": "November 13, 2000"
          }
        }
      }, {
        "im:name": {
          "label": "Dragons"
        },
        "im:image": [{
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music123/v4/37/27/75/37277523-da00-cb72-71a4-9940e6e8109a/193483809687.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/37/27/75/37277523-da00-cb72-71a4-9940e6e8109a/193483809687.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/37/27/75/37277523-da00-cb72-71a4-9940e6e8109a/193483809687.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "10"
        },
        "im:price": {
          "label": "$7.99",
          "attributes": {
            "amount": "7.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2019 Magnolia Music marketed and distributed by Thirty Tigers"
        },
        "title": {
          "label": "Dragons - Drew Holcomb & The Neighbors"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/dragons/1462670945?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/dragons/1462670945?uo=2",
          "attributes": {
            "im:id": "1462670945"
          }
        },
        "im:artist": {
          "label": "Drew Holcomb & The Neighbors",
          "attributes": {
            "href": "https://music.apple.com/us/artist/drew-holcomb-the-neighbors/285801696?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "10",
            "term": "Singer/Songwriter",
            "scheme": "https://music.apple.com/us/genre/music-singer-songwriter/id10?uo=2",
            "label": "Singer/Songwriter"
          }
        },
        "im:releaseDate": {
          "label": "2019-08-16T00:00:00-07:00",
          "attributes": {
            "label": "August 16, 2019"
          }
        }
      }, {
        "im:name": {
          "label": "Woodstock: Music from the Original Soundtrack and More, Vol. 1"
        },
        "im:image": [{
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music5/v4/cb/03/35/cb033590-66a8-1b7e-8568-cad468ef2de8/603497897681.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music5/v4/cb/03/35/cb033590-66a8-1b7e-8568-cad468ef2de8/603497897681.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music5/v4/cb/03/35/cb033590-66a8-1b7e-8568-cad468ef2de8/603497897681.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "21"
        },
        "im:price": {
          "label": "$12.99",
          "attributes": {
            "amount": "12.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2009 Rhino Entertainment Company, a Warner Music Group Company."
        },
        "title": {
          "label": "Woodstock: Music from the Original Soundtrack and More, Vol. 1 - Various Artists"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/woodstock-music-from-the-original-soundtrack-and-more-vol-1/903584408?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/woodstock-music-from-the-original-soundtrack-and-more-vol-1/903584408?uo=2",
          "attributes": {
            "im:id": "903584408"
          }
        },
        "im:artist": {
          "label": "Various Artists"
        },
        "category": {
          "attributes": {
            "im:id": "16",
            "term": "Soundtrack",
            "scheme": "https://music.apple.com/us/genre/music-soundtrack/id16?uo=2",
            "label": "Soundtrack"
          }
        },
        "im:releaseDate": {
          "label": "2009-06-01T00:00:00-07:00",
          "attributes": {
            "label": "June 1, 2009"
          }
        }
      }, {
        "im:name": {
          "label": "i,i"
        },
        "im:image": [{
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/5a/f9/16/5af91624-1e75-6f1c-d356-82eeb4c47eb2/656605235066.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/5a/f9/16/5af91624-1e75-6f1c-d356-82eeb4c47eb2/656605235066.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/5a/f9/16/5af91624-1e75-6f1c-d356-82eeb4c47eb2/656605235066.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "13"
        },
        "im:price": {
          "label": "$9.99",
          "attributes": {
            "amount": "9.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2019 Jagjaguwar"
        },
        "title": {
          "label": "i,i - Bon Iver"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/i-i/1470962625?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/i-i/1470962625?uo=2",
          "attributes": {
            "im:id": "1470962625"
          }
        },
        "im:artist": {
          "label": "Bon Iver",
          "attributes": {
            "href": "https://music.apple.com/us/artist/bon-iver/273428126?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "20",
            "term": "Alternative",
            "scheme": "https://music.apple.com/us/genre/music-alternative/id20?uo=2",
            "label": "Alternative"
          }
        },
        "im:releaseDate": {
          "label": "2019-08-09T00:00:00-07:00",
          "attributes": {
            "label": "August 9, 2019"
          }
        }
      }, {
        "im:name": {
          "label": "The Very Best of Fleetwood Mac (Remastered)"
        },
        "im:image": [{
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music/v4/80/e5/bf/80e5bf94-5bf6-f1f5-11a6-46afbe76c85a/603497925599.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music/v4/80/e5/bf/80e5bf94-5bf6-f1f5-11a6-46afbe76c85a/603497925599.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music/v4/80/e5/bf/80e5bf94-5bf6-f1f5-11a6-46afbe76c85a/603497925599.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "36"
        },
        "im:price": {
          "label": "$6.99",
          "attributes": {
            "amount": "6.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 1975 Warner Records Inc."
        },
        "title": {
          "label": "The Very Best of Fleetwood Mac (Remastered) - Fleetwood Mac"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/the-very-best-of-fleetwood-mac-remastered/593327799?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/the-very-best-of-fleetwood-mac-remastered/593327799?uo=2",
          "attributes": {
            "im:id": "593327799"
          }
        },
        "im:artist": {
          "label": "Fleetwood Mac",
          "attributes": {
            "href": "https://music.apple.com/us/artist/fleetwood-mac/158038?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "21",
            "term": "Rock",
            "scheme": "https://music.apple.com/us/genre/music-rock/id21?uo=2",
            "label": "Rock"
          }
        },
        "im:releaseDate": {
          "label": "2002-10-15T00:00:00-07:00",
          "attributes": {
            "label": "October 15, 2002"
          }
        }
      }, {
        "im:name": {
          "label": "20th Century Masters - The Millennium Collection: The Best of Aerosmith"
        },
        "im:image": [{
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music128/v4/d0/f3/30/d0f33059-f676-8a48-4c4d-be1b6c725e37/00602498607510.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/d0/f3/30/d0f33059-f676-8a48-4c4d-be1b6c725e37/00602498607510.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music128/v4/d0/f3/30/d0f33059-f676-8a48-4c4d-be1b6c725e37/00602498607510.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "12"
        },
        "im:price": {
          "label": "$4.99",
          "attributes": {
            "amount": "4.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "This Compilation ℗ 2007 Geffen Records"
        },
        "title": {
          "label": "20th Century Masters - The Millennium Collection: The Best of Aerosmith - Aerosmith"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/20th-century-masters-millennium-collection-best-aerosmith/1440746406?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/20th-century-masters-millennium-collection-best-aerosmith/1440746406?uo=2",
          "attributes": {
            "im:id": "1440746406"
          }
        },
        "im:artist": {
          "label": "Aerosmith",
          "attributes": {
            "href": "https://music.apple.com/us/artist/aerosmith/115386?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "1152",
            "term": "Hard Rock",
            "scheme": "https://music.apple.com/us/genre/music-rock-hard-rock/id1152?uo=2",
            "label": "Hard Rock"
          }
        },
        "im:releaseDate": {
          "label": "2007-11-06T00:00:00-07:00",
          "attributes": {
            "label": "November 6, 2007"
          }
        }
      }, {
        "im:name": {
          "label": "dont smile at me"
        },
        "im:image": [{
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/2e/0d/94/2e0d944c-eb37-e725-70a0-1b11ea3c1843/00602567328056.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/2e/0d/94/2e0d944c-eb37-e725-70a0-1b11ea3c1843/00602567328056.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/2e/0d/94/2e0d944c-eb37-e725-70a0-1b11ea3c1843/00602567328056.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "9"
        },
        "im:price": {
          "label": "$8.99",
          "attributes": {
            "amount": "8.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2017 Darkroom/Interscope Records"
        },
        "title": {
          "label": "dont smile at me - Billie Eilish"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/dont-smile-at-me/1440898929?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/dont-smile-at-me/1440898929?uo=2",
          "attributes": {
            "im:id": "1440898929"
          }
        },
        "im:artist": {
          "label": "Billie Eilish",
          "attributes": {
            "href": "https://music.apple.com/us/artist/billie-eilish/1065981054?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "20",
            "term": "Alternative",
            "scheme": "https://music.apple.com/us/genre/music-alternative/id20?uo=2",
            "label": "Alternative"
          }
        },
        "im:releaseDate": {
          "label": "2017-08-11T00:00:00-07:00",
          "attributes": {
            "label": "August 11, 2017"
          }
        }
      }, {
        "im:name": {
          "label": "Guardians of the Galaxy: Awesome Mix, Vol. 1 (Original Motion Picture Soundtrack)"
        },
        "im:image": [{
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/4b/7f/11/4b7f11b4-f869-af4d-a8c4-809d6395b354/00050087310868.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/4b/7f/11/4b7f11b4-f869-af4d-a8c4-809d6395b354/00050087310868.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/4b/7f/11/4b7f11b4-f869-af4d-a8c4-809d6395b354/00050087310868.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "12"
        },
        "im:price": {
          "label": "$9.99",
          "attributes": {
            "amount": "9.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "This Compilation ℗ 2014 Marvel Music, Inc."
        },
        "title": {
          "label": "Guardians of the Galaxy: Awesome Mix, Vol. 1 (Original Motion Picture Soundtrack) - Various Artists"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/guardians-galaxy-awesome-mix-vol-1-original-motion/1440657117?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/guardians-galaxy-awesome-mix-vol-1-original-motion/1440657117?uo=2",
          "attributes": {
            "im:id": "1440657117"
          }
        },
        "im:artist": {
          "label": "Various Artists"
        },
        "category": {
          "attributes": {
            "im:id": "16",
            "term": "Soundtrack",
            "scheme": "https://music.apple.com/us/genre/music-soundtrack/id16?uo=2",
            "label": "Soundtrack"
          }
        },
        "im:releaseDate": {
          "label": "2014-07-29T00:00:00-07:00",
          "attributes": {
            "label": "July 29, 2014"
          }
        }
      }, {
        "im:name": {
          "label": "The Very Best of Chicago: Only the Beginning"
        },
        "im:image": [{
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/2c/fa/2a/2cfa2ac6-40d7-39d4-3c28-c848129dcbbd/dj.gubbyqzi.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Features/v4/2c/fa/2a/2cfa2ac6-40d7-39d4-3c28-c848129dcbbd/dj.gubbyqzi.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Features/v4/2c/fa/2a/2cfa2ac6-40d7-39d4-3c28-c848129dcbbd/dj.gubbyqzi.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "39"
        },
        "im:price": {
          "label": "$6.99",
          "attributes": {
            "amount": "6.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2004 Warner Strategic Marketing"
        },
        "title": {
          "label": "The Very Best of Chicago: Only the Beginning - Chicago"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/the-very-best-of-chicago-only-the-beginning/28457957?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/the-very-best-of-chicago-only-the-beginning/28457957?uo=2",
          "attributes": {
            "im:id": "28457957"
          }
        },
        "im:artist": {
          "label": "Chicago",
          "attributes": {
            "href": "https://music.apple.com/us/artist/chicago/197043?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "21",
            "term": "Rock",
            "scheme": "https://music.apple.com/us/genre/music-rock/id21?uo=2",
            "label": "Rock"
          }
        },
        "im:releaseDate": {
          "label": "2002-07-02T00:00:00-07:00",
          "attributes": {
            "label": "July 2, 2002"
          }
        }
      }, {
        "im:name": {
          "label": "Wild Blue, Pt. 1"
        },
        "im:image": [{
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/0a/8d/1d/0a8d1d08-cde1-1794-37d9-4b4fdaef45e4/093624898153.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music123/v4/0a/8d/1d/0a8d1d08-cde1-1794-37d9-4b4fdaef45e4/093624898153.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music123/v4/0a/8d/1d/0a8d1d08-cde1-1794-37d9-4b4fdaef45e4/093624898153.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "10"
        },
        "im:price": {
          "label": "$10.99",
          "attributes": {
            "amount": "10.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2019 Warner Music Nashville LLC."
        },
        "title": {
          "label": "Wild Blue, Pt. 1 - Hunter Hayes"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/wild-blue-pt-1/1474601428?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/wild-blue-pt-1/1474601428?uo=2",
          "attributes": {
            "im:id": "1474601428"
          }
        },
        "im:artist": {
          "label": "Hunter Hayes",
          "attributes": {
            "href": "https://music.apple.com/us/artist/hunter-hayes/429231434?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "6",
            "term": "Country",
            "scheme": "https://music.apple.com/us/genre/music-country/id6?uo=2",
            "label": "Country"
          }
        },
        "im:releaseDate": {
          "label": "2019-08-16T00:00:00-07:00",
          "attributes": {
            "label": "August 16, 2019"
          }
        }
      }, {
        "im:name": {
          "label": "Diamonds"
        },
        "im:image": [{
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/30/23/48/302348a1-07d6-ec8b-b801-9ebf7c11c467/00602557998368.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/30/23/48/302348a1-07d6-ec8b-b801-9ebf7c11c467/00602557998368.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/30/23/48/302348a1-07d6-ec8b-b801-9ebf7c11c467/00602557998368.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "17"
        },
        "im:price": {
          "label": "$7.99",
          "attributes": {
            "amount": "7.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "A Virgin EMI Records Release; This Compilation ℗ 2017 Universal Music Operations Limited"
        },
        "title": {
          "label": "Diamonds - Elton John"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/diamonds/1440903115?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/diamonds/1440903115?uo=2",
          "attributes": {
            "im:id": "1440903115"
          }
        },
        "im:artist": {
          "label": "Elton John",
          "attributes": {
            "href": "https://music.apple.com/us/artist/elton-john/54657?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "14",
            "term": "Pop",
            "scheme": "https://music.apple.com/us/genre/music-pop/id14?uo=2",
            "label": "Pop"
          }
        },
        "im:releaseDate": {
          "label": "2017-11-03T00:00:00-07:00",
          "attributes": {
            "label": "November 3, 2017"
          }
        }
      }, {
        "im:name": {
          "label": "Traveller"
        },
        "im:image": [{
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/c8/cc/11/c8cc1138-c040-761e-19d1-63da33ef9a34/00602547223838.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/c8/cc/11/c8cc1138-c040-761e-19d1-63da33ef9a34/00602547223838.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/c8/cc/11/c8cc1138-c040-761e-19d1-63da33ef9a34/00602547223838.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "14"
        },
        "im:price": {
          "label": "$9.99",
          "attributes": {
            "amount": "9.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2015 Mercury Records, a Division of UMG Recordings, Inc."
        },
        "title": {
          "label": "Traveller - Chris Stapleton"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/traveller/1440827477?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/traveller/1440827477?uo=2",
          "attributes": {
            "im:id": "1440827477"
          }
        },
        "im:artist": {
          "label": "Chris Stapleton",
          "attributes": {
            "href": "https://music.apple.com/us/artist/chris-stapleton/1752134?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "6",
            "term": "Country",
            "scheme": "https://music.apple.com/us/genre/music-country/id6?uo=2",
            "label": "Country"
          }
        },
        "im:releaseDate": {
          "label": "2015-05-05T00:00:00-07:00",
          "attributes": {
            "label": "May 5, 2015"
          }
        }
      }, {
        "im:name": {
          "label": "Bohemian Rhapsody (The Original Soundtrack)"
        },
        "im:image": [{
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/02/8f/e4/028fe4bf-2ae8-2492-7f69-927f0216f614/00050087404062.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/02/8f/e4/028fe4bf-2ae8-2492-7f69-927f0216f614/00050087404062.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/02/8f/e4/028fe4bf-2ae8-2492-7f69-927f0216f614/00050087404062.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "22"
        },
        "im:price": {
          "label": "$11.99",
          "attributes": {
            "amount": "11.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2018 Hollywood Records, Inc."
        },
        "title": {
          "label": "Bohemian Rhapsody (The Original Soundtrack) - Queen"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/bohemian-rhapsody-the-original-soundtrack/1434899831?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/bohemian-rhapsody-the-original-soundtrack/1434899831?uo=2",
          "attributes": {
            "im:id": "1434899831"
          }
        },
        "im:artist": {
          "label": "Queen",
          "attributes": {
            "href": "https://music.apple.com/us/artist/queen/3296287?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "16",
            "term": "Soundtrack",
            "scheme": "https://music.apple.com/us/genre/music-soundtrack/id16?uo=2",
            "label": "Soundtrack"
          }
        },
        "im:releaseDate": {
          "label": "2018-10-19T00:00:00-07:00",
          "attributes": {
            "label": "October 19, 2018"
          }
        }
      }, {
        "im:name": {
          "label": "The Prequel - EP"
        },
        "im:image": [{
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/01/3a/f3/013af3cc-11ee-cdcf-7b2b-0bd57d5ceae5/886447669327.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music113/v4/01/3a/f3/013af3cc-11ee-cdcf-7b2b-0bd57d5ceae5/886447669327.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music113/v4/01/3a/f3/013af3cc-11ee-cdcf-7b2b-0bd57d5ceae5/886447669327.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "5"
        },
        "im:price": {
          "label": "$6.45",
          "attributes": {
            "amount": "6.45000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2019 River House Artists LLC, under exclusive license to Sony Music Entertainment. All rights reserved."
        },
        "title": {
          "label": "The Prequel - EP - Luke Combs"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/the-prequel-ep/1466124733?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/the-prequel-ep/1466124733?uo=2",
          "attributes": {
            "im:id": "1466124733"
          }
        },
        "im:artist": {
          "label": "Luke Combs",
          "attributes": {
            "href": "https://music.apple.com/us/artist/luke-combs/815635315?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "6",
            "term": "Country",
            "scheme": "https://music.apple.com/us/genre/music-country/id6?uo=2",
            "label": "Country"
          }
        },
        "im:releaseDate": {
          "label": "2019-06-07T00:00:00-07:00",
          "attributes": {
            "label": "June 7, 2019"
          }
        }
      }, {
        "im:name": {
          "label": "Quality Time"
        },
        "im:image": [{
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music113/v4/e9/90/38/e9903840-5f51-b7b6-d5d5-e63697e45d55/705438070068.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/e9/90/38/e9903840-5f51-b7b6-d5d5-e63697e45d55/705438070068.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/e9/90/38/e9903840-5f51-b7b6-d5d5-e63697e45d55/705438070068.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "19"
        },
        "im:price": {
          "label": "$9.99",
          "attributes": {
            "amount": "9.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2019 Comedy Dynamics"
        },
        "title": {
          "label": "Quality Time - Jim Gaffigan"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/quality-time/1463628884?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/quality-time/1463628884?uo=2",
          "attributes": {
            "im:id": "1463628884"
          }
        },
        "im:artist": {
          "label": "Jim Gaffigan",
          "attributes": {
            "href": "https://music.apple.com/us/artist/jim-gaffigan/24256372?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "1171",
            "term": "Standup Comedy",
            "scheme": "https://music.apple.com/us/genre/music-comedy-standup-comedy/id1171?uo=2",
            "label": "Standup Comedy"
          }
        },
        "im:releaseDate": {
          "label": "2019-08-16T00:00:00-07:00",
          "attributes": {
            "label": "August 16, 2019"
          }
        }
      }, {
        "im:name": {
          "label": "Hadestown (Original Broadway Cast Recording)"
        },
        "im:image": [{
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music113/v4/15/3b/aa/153baaa8-4ebe-0533-aa3d-e0ea3da8822c/093624899273.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/15/3b/aa/153baaa8-4ebe-0533-aa3d-e0ea3da8822c/093624899273.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music113/v4/15/3b/aa/153baaa8-4ebe-0533-aa3d-e0ea3da8822c/093624899273.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "40"
        },
        "im:price": {
          "label": "$19.99",
          "attributes": {
            "amount": "19.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2019 Hadestown Broadway under exclusive license to Sing It Again, LLC.  All Rights Reserved."
        },
        "title": {
          "label": "Hadestown (Original Broadway Cast Recording) - Anaïs Mitchell"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/hadestown-original-broadway-cast-recording/1466351033?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/hadestown-original-broadway-cast-recording/1466351033?uo=2",
          "attributes": {
            "im:id": "1466351033"
          }
        },
        "im:artist": {
          "label": "Anaïs Mitchell",
          "attributes": {
            "href": "https://music.apple.com/us/artist/ana%C3%AFs-mitchell/79166513?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "16",
            "term": "Soundtrack",
            "scheme": "https://music.apple.com/us/genre/music-soundtrack/id16?uo=2",
            "label": "Soundtrack"
          }
        },
        "im:releaseDate": {
          "label": "2019-06-21T00:00:00-07:00",
          "attributes": {
            "label": "June 21, 2019"
          }
        }
      }, {
        "im:name": {
          "label": "This One’s for You Too (Deluxe Edition)"
        },
        "im:image": [{
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music128/v4/fa/8d/22/fa8d22a8-4525-e073-46f7-7f6026578ea6/886447048443.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/fa/8d/22/fa8d22a8-4525-e073-46f7-7f6026578ea6/886447048443.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/fa/8d/22/fa8d22a8-4525-e073-46f7-7f6026578ea6/886447048443.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "17"
        },
        "im:price": {
          "label": "$12.99",
          "attributes": {
            "amount": "12.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2018 River House Artists LLC, under exclusive license to Sony Music Entertainment"
        },
        "title": {
          "label": "This One’s for You Too (Deluxe Edition) - Luke Combs"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/this-ones-for-you-too-deluxe-edition/1376705241?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/this-ones-for-you-too-deluxe-edition/1376705241?uo=2",
          "attributes": {
            "im:id": "1376705241"
          }
        },
        "im:artist": {
          "label": "Luke Combs",
          "attributes": {
            "href": "https://music.apple.com/us/artist/luke-combs/815635315?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "6",
            "term": "Country",
            "scheme": "https://music.apple.com/us/genre/music-country/id6?uo=2",
            "label": "Country"
          }
        },
        "im:releaseDate": {
          "label": "2018-06-01T00:00:00-07:00",
          "attributes": {
            "label": "June 1, 2018"
          }
        }
      }, {
        "im:name": {
          "label": "Foundations Cycle 2, Vol.1 - Weekly Memory Work"
        },
        "im:image": [{
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music113/v4/32/0b/f2/320bf211-4be5-d3e1-86de-bf03205b685e/9780999699546_cover.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/32/0b/f2/320bf211-4be5-d3e1-86de-bf03205b685e/9780999699546_cover.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/32/0b/f2/320bf211-4be5-d3e1-86de-bf03205b685e/9780999699546_cover.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "26"
        },
        "im:price": {
          "label": "$12.99",
          "attributes": {
            "amount": "12.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2019 Classical Conversations MultiMedia"
        },
        "title": {
          "label": "Foundations Cycle 2, Vol.1 - Weekly Memory Work - Classical Conversations"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/foundations-cycle-2-vol-1-weekly-memory-work/1460286842?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/foundations-cycle-2-vol-1-weekly-memory-work/1460286842?uo=2",
          "attributes": {
            "im:id": "1460286842"
          }
        },
        "im:artist": {
          "label": "Classical Conversations",
          "attributes": {
            "href": "https://music.apple.com/us/artist/classical-conversations/1232030006?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "4",
            "term": "Children's Music",
            "scheme": "https://music.apple.com/us/genre/music-childrens-music/id4?uo=2",
            "label": "Children's Music"
          }
        },
        "im:releaseDate": {
          "label": "2019-05-15T00:00:00-07:00",
          "attributes": {
            "label": "May 15, 2019"
          }
        }
      }, {
        "im:name": {
          "label": "Greatest Hits"
        },
        "im:image": [{
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/87/0e/cc/870ecccd-a217-4204-33c0-e2909c35565f/15UMGIM69649.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/87/0e/cc/870ecccd-a217-4204-33c0-e2909c35565f/15UMGIM69649.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/87/0e/cc/870ecccd-a217-4204-33c0-e2909c35565f/15UMGIM69649.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "18"
        },
        "im:price": {
          "label": "$6.99",
          "attributes": {
            "amount": "6.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "This Compilation ℗ 2014 Geffen Records"
        },
        "title": {
          "label": "Greatest Hits - Tom Petty & The Heartbreakers"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/greatest-hits/1469579555?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/greatest-hits/1469579555?uo=2",
          "attributes": {
            "im:id": "1469579555"
          }
        },
        "im:artist": {
          "label": "Tom Petty & The Heartbreakers",
          "attributes": {
            "href": "https://music.apple.com/us/artist/tom-petty-the-heartbreakers/161527?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "21",
            "term": "Rock",
            "scheme": "https://music.apple.com/us/genre/music-rock/id21?uo=2",
            "label": "Rock"
          }
        },
        "im:releaseDate": {
          "label": "1993-11-16T00:00:00-07:00",
          "attributes": {
            "label": "November 16, 1993"
          }
        }
      }, {
        "im:name": {
          "label": "Western Stars"
        },
        "im:image": [{
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music113/v4/a4/ca/24/a4ca24ab-c77c-c088-f769-7685a0b8a046/886447562147.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/a4/ca/24/a4ca24ab-c77c-c088-f769-7685a0b8a046/886447562147.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music113/v4/a4/ca/24/a4ca24ab-c77c-c088-f769-7685a0b8a046/886447562147.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "13"
        },
        "im:price": {
          "label": "$11.99",
          "attributes": {
            "amount": "11.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2019 Bruce Springsteen"
        },
        "title": {
          "label": "Western Stars - Bruce Springsteen"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/western-stars/1459884961?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/western-stars/1459884961?uo=2",
          "attributes": {
            "im:id": "1459884961"
          }
        },
        "im:artist": {
          "label": "Bruce Springsteen",
          "attributes": {
            "href": "https://music.apple.com/us/artist/bruce-springsteen/178834?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "21",
            "term": "Rock",
            "scheme": "https://music.apple.com/us/genre/music-rock/id21?uo=2",
            "label": "Rock"
          }
        },
        "im:releaseDate": {
          "label": "2019-06-14T00:00:00-07:00",
          "attributes": {
            "label": "June 14, 2019"
          }
        }
      }, {
        "im:name": {
          "label": "Quentin Tarantino's Once Upon a Time in Hollywood (Original Motion Picture Soundtrack)"
        },
        "im:image": [{
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/cf/92/f4/cf92f4cf-a03f-5164-15ca-79316a6dd272/886447785546.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/cf/92/f4/cf92f4cf-a03f-5164-15ca-79316a6dd272/886447785546.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/cf/92/f4/cf92f4cf-a03f-5164-15ca-79316a6dd272/886447785546.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "31"
        },
        "im:price": {
          "label": "$16.99",
          "attributes": {
            "amount": "16.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ This Compilation (P) 2019 L. Driver Productions, Inc., under exclusive license to Columbia Records, a division of Sony Music Entertainment"
        },
        "title": {
          "label": "Quentin Tarantino's Once Upon a Time in Hollywood (Original Motion Picture Soundtrack) - Various Artists"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/quentin-tarantinos-once-upon-time-in-hollywood-original/1473875745?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/quentin-tarantinos-once-upon-time-in-hollywood-original/1473875745?uo=2",
          "attributes": {
            "im:id": "1473875745"
          }
        },
        "im:artist": {
          "label": "Various Artists"
        },
        "category": {
          "attributes": {
            "im:id": "16",
            "term": "Soundtrack",
            "scheme": "https://music.apple.com/us/genre/music-soundtrack/id16?uo=2",
            "label": "Soundtrack"
          }
        },
        "im:releaseDate": {
          "label": "2019-07-26T00:00:00-07:00",
          "attributes": {
            "label": "July 26, 2019"
          }
        }
      }, {
        "im:name": {
          "label": "Greatest Hits"
        },
        "im:image": [{
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music42/v4/fe/10/40/fe1040d2-c1e4-30b4-365d-a6533427a5ba/dj.ffczdmqx.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music42/v4/fe/10/40/fe1040d2-c1e4-30b4-365d-a6533427a5ba/dj.ffczdmqx.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music42/v4/fe/10/40/fe1040d2-c1e4-30b4-365d-a6533427a5ba/dj.ffczdmqx.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "19"
        },
        "im:price": {
          "label": "$6.99",
          "attributes": {
            "amount": "6.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2005 Atlantic Recording Corp. Manufactured & Marketed by Warner Strategic Marketing"
        },
        "title": {
          "label": "Greatest Hits - Crosby, Stills & Nash"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/greatest-hits/53381558?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/greatest-hits/53381558?uo=2",
          "attributes": {
            "im:id": "53381558"
          }
        },
        "im:artist": {
          "label": "Crosby, Stills & Nash",
          "attributes": {
            "href": "https://music.apple.com/us/artist/crosby-stills-nash/1008844?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "21",
            "term": "Rock",
            "scheme": "https://music.apple.com/us/genre/music-rock/id21?uo=2",
            "label": "Rock"
          }
        },
        "im:releaseDate": {
          "label": "2005-03-15T00:00:00-07:00",
          "attributes": {
            "label": "March 15, 2005"
          }
        }
      }, {
        "im:name": {
          "label": "The Very Best of Sting & The Police"
        },
        "im:image": [{
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/09/fb/bc/09fbbcfb-9181-9a01-2b7e-d033758e8bd9/00606949325220.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/09/fb/bc/09fbbcfb-9181-9a01-2b7e-d033758e8bd9/00606949325220.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/09/fb/bc/09fbbcfb-9181-9a01-2b7e-d033758e8bd9/00606949325220.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "18"
        },
        "im:price": {
          "label": "$6.99",
          "attributes": {
            "amount": "6.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2002 A&M Records Inc."
        },
        "title": {
          "label": "The Very Best of Sting & The Police - Sting & The Police"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/the-very-best-of-sting-the-police/1440882817?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/the-very-best-of-sting-the-police/1440882817?uo=2",
          "attributes": {
            "im:id": "1440882817"
          }
        },
        "im:artist": {
          "label": "Sting & The Police",
          "attributes": {
            "href": "https://music.apple.com/us/artist/sting/94804?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "21",
            "term": "Rock",
            "scheme": "https://music.apple.com/us/genre/music-rock/id21?uo=2",
            "label": "Rock"
          }
        },
        "im:releaseDate": {
          "label": "1997-11-17T16:00:00-07:00",
          "attributes": {
            "label": "November 17, 1997"
          }
        }
      }, {
        "im:name": {
          "label": "Greatest Hits"
        },
        "im:image": [{
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/d5/96/e5/d596e556-ed06-0d21-141c-c7acab9b54f8/00602557747065.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/d5/96/e5/d596e556-ed06-0d21-141c-c7acab9b54f8/00602557747065.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/d5/96/e5/d596e556-ed06-0d21-141c-c7acab9b54f8/00602557747065.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "14"
        },
        "im:price": {
          "label": "$6.99",
          "attributes": {
            "amount": "6.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "This Compilation ℗ 1994 Hideout Records & Distributors, Inc., under exclusive license to Capitol Records LLC"
        },
        "title": {
          "label": "Greatest Hits - Bob Seger & The Silver Bullet Band"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/greatest-hits/1440879556?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/greatest-hits/1440879556?uo=2",
          "attributes": {
            "im:id": "1440879556"
          }
        },
        "im:artist": {
          "label": "Bob Seger & The Silver Bullet Band",
          "attributes": {
            "href": "https://music.apple.com/us/artist/bob-seger-the-silver-bullet-band/180478133?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "21",
            "term": "Rock",
            "scheme": "https://music.apple.com/us/genre/music-rock/id21?uo=2",
            "label": "Rock"
          }
        },
        "im:releaseDate": {
          "label": "1994-10-25T00:00:00-07:00",
          "attributes": {
            "label": "October 25, 1994"
          }
        }
      }, {
        "im:name": {
          "label": "Greatest Hits"
        },
        "im:image": [{
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/b1/cc/c3/b1ccc3ca-cef3-b072-482b-cf53674a858c/886447315088.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music118/v4/b1/cc/c3/b1ccc3ca-cef3-b072-482b-cf53674a858c/886447315088.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/b1/cc/c3/b1ccc3ca-cef3-b072-482b-cf53674a858c/886447315088.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "18"
        },
        "im:price": {
          "label": "$11.99",
          "attributes": {
            "amount": "11.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 1995 Bruce Springsteen"
        },
        "title": {
          "label": "Greatest Hits - Bruce Springsteen"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/greatest-hits/1435854353?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/greatest-hits/1435854353?uo=2",
          "attributes": {
            "im:id": "1435854353"
          }
        },
        "im:artist": {
          "label": "Bruce Springsteen",
          "attributes": {
            "href": "https://music.apple.com/us/artist/bruce-springsteen/178834?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "21",
            "term": "Rock",
            "scheme": "https://music.apple.com/us/genre/music-rock/id21?uo=2",
            "label": "Rock"
          }
        },
        "im:releaseDate": {
          "label": "1995-02-27T00:00:00-07:00",
          "attributes": {
            "label": "February 27, 1995"
          }
        }
      }, {
        "im:name": {
          "label": "All Time Greatest Hits"
        },
        "im:image": [{
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/29/69/79/29697921-9d5f-9b88-39e9-1b43ee882010/00602567823773.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music118/v4/29/69/79/29697921-9d5f-9b88-39e9-1b43ee882010/00602567823773.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/29/69/79/29697921-9d5f-9b88-39e9-1b43ee882010/00602567823773.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "14"
        },
        "im:price": {
          "label": "$6.99",
          "attributes": {
            "amount": "6.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "A Geffen Records release; This Compilation ℗ 2000 UMG Recordings, Inc."
        },
        "title": {
          "label": "All Time Greatest Hits - Lynyrd Skynyrd"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/all-time-greatest-hits/1413948379?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/all-time-greatest-hits/1413948379?uo=2",
          "attributes": {
            "im:id": "1413948379"
          }
        },
        "im:artist": {
          "label": "Lynyrd Skynyrd",
          "attributes": {
            "href": "https://music.apple.com/us/artist/lynyrd-skynyrd/97262?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "21",
            "term": "Rock",
            "scheme": "https://music.apple.com/us/genre/music-rock/id21?uo=2",
            "label": "Rock"
          }
        },
        "im:releaseDate": {
          "label": "2000-03-14T00:00:00-07:00",
          "attributes": {
            "label": "March 14, 2000"
          }
        }
      }, {
        "im:name": {
          "label": "Made in America"
        },
        "im:image": [{
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/f8/d1/90/f8d1907a-3000-10dc-5505-ec00244d71fd/193483650692.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/f8/d1/90/f8d1907a-3000-10dc-5505-ec00244d71fd/193483650692.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/f8/d1/90/f8d1907a-3000-10dc-5505-ec00244d71fd/193483650692.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "12"
        },
        "im:price": {
          "label": "$9.99",
          "attributes": {
            "amount": "9.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2019 LMG"
        },
        "title": {
          "label": "Made in America - Tracy Lawrence"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/made-in-america/1463411042?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/made-in-america/1463411042?uo=2",
          "attributes": {
            "im:id": "1463411042"
          }
        },
        "im:artist": {
          "label": "Tracy Lawrence",
          "attributes": {
            "href": "https://music.apple.com/us/artist/tracy-lawrence/150022?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "6",
            "term": "Country",
            "scheme": "https://music.apple.com/us/genre/music-country/id6?uo=2",
            "label": "Country"
          }
        },
        "im:releaseDate": {
          "label": "2019-08-16T00:00:00-07:00",
          "attributes": {
            "label": "August 16, 2019"
          }
        }
      }, {
        "im:name": {
          "label": "Gold: Greatest Hits"
        },
        "im:image": [{
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/dc/85/67/dc856796-2dfb-1c17-b87f-162c12185541/00602537784608.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/dc/85/67/dc856796-2dfb-1c17-b87f-162c12185541/00602537784608.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/dc/85/67/dc856796-2dfb-1c17-b87f-162c12185541/00602537784608.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "19"
        },
        "im:price": {
          "label": "$7.99",
          "attributes": {
            "amount": "7.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "This Compilation ℗ 2014 Polar Music International AB"
        },
        "title": {
          "label": "Gold: Greatest Hits - ABBA"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/gold-greatest-hits/1422648512?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/gold-greatest-hits/1422648512?uo=2",
          "attributes": {
            "im:id": "1422648512"
          }
        },
        "im:artist": {
          "label": "ABBA",
          "attributes": {
            "href": "https://music.apple.com/us/artist/abba/372976?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "14",
            "term": "Pop",
            "scheme": "https://music.apple.com/us/genre/music-pop/id14?uo=2",
            "label": "Pop"
          }
        },
        "im:releaseDate": {
          "label": "1992-09-21T00:00:00-07:00",
          "attributes": {
            "label": "September 21, 1992"
          }
        }
      }, {
        "im:name": {
          "label": "Their Greatest Hits 1971-1975"
        },
        "im:image": [{
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music2/v4/45/30/ec/4530eca5-2c0b-0325-6276-ec8131228ef6/081227979379.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music2/v4/45/30/ec/4530eca5-2c0b-0325-6276-ec8131228ef6/081227979379.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music2/v4/45/30/ec/4530eca5-2c0b-0325-6276-ec8131228ef6/081227979379.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "10"
        },
        "im:price": {
          "label": "$9.99",
          "attributes": {
            "amount": "9.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 1976 Elektra Records"
        },
        "title": {
          "label": "Their Greatest Hits 1971-1975 - Eagles"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/their-greatest-hits-1971-1975/635829435?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/their-greatest-hits-1971-1975/635829435?uo=2",
          "attributes": {
            "im:id": "635829435"
          }
        },
        "im:artist": {
          "label": "Eagles",
          "attributes": {
            "href": "https://music.apple.com/us/artist/eagles/1053549?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "21",
            "term": "Rock",
            "scheme": "https://music.apple.com/us/genre/music-rock/id21?uo=2",
            "label": "Rock"
          }
        },
        "im:releaseDate": {
          "label": "1976-02-17T00:00:00-07:00",
          "attributes": {
            "label": "February 17, 1976"
          }
        }
      }, {
        "im:name": {
          "label": "Chronicle: 20 Greatest Hits"
        },
        "im:image": [{
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/e5/a4/f7/e5a4f7b4-b4bc-38ed-58a9-6a61c32a728f/00025218222228.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/e5/a4/f7/e5a4f7b4-b4bc-38ed-58a9-6a61c32a728f/00025218222228.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/e5/a4/f7/e5a4f7b4-b4bc-38ed-58a9-6a61c32a728f/00025218222228.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "20"
        },
        "im:price": {
          "label": "$11.99",
          "attributes": {
            "amount": "11.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "This Compilation ℗ 1976 Fantasy, Inc."
        },
        "title": {
          "label": "Chronicle: 20 Greatest Hits - Creedence Clearwater Revival"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/chronicle-20-greatest-hits/1440489479?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/chronicle-20-greatest-hits/1440489479?uo=2",
          "attributes": {
            "im:id": "1440489479"
          }
        },
        "im:artist": {
          "label": "Creedence Clearwater Revival",
          "attributes": {
            "href": "https://music.apple.com/us/artist/creedence-clearwater-revival/2083606?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "21",
            "term": "Rock",
            "scheme": "https://music.apple.com/us/genre/music-rock/id21?uo=2",
            "label": "Rock"
          }
        },
        "im:releaseDate": {
          "label": "1975-12-31T16:00:00-07:00",
          "attributes": {
            "label": "December 31, 1975"
          }
        }
      }, {
        "im:name": {
          "label": "Greatest Hits"
        },
        "im:image": [{
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/bb/55/9e/bb559e17-1f49-fbe3-55b5-e6d504f75146/05099901568257.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/bb/55/9e/bb559e17-1f49-fbe3-55b5-e6d504f75146/05099901568257.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/bb/55/9e/bb559e17-1f49-fbe3-55b5-e6d504f75146/05099901568257.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "20"
        },
        "im:price": {
          "label": "$6.99",
          "attributes": {
            "amount": "6.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2012 Capitol Records, LLC"
        },
        "title": {
          "label": "Greatest Hits - The Beach Boys"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/greatest-hits/728254629?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/greatest-hits/728254629?uo=2",
          "attributes": {
            "im:id": "728254629"
          }
        },
        "im:artist": {
          "label": "The Beach Boys",
          "attributes": {
            "href": "https://music.apple.com/us/artist/the-beach-boys/562555?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "21",
            "term": "Rock",
            "scheme": "https://music.apple.com/us/genre/music-rock/id21?uo=2",
            "label": "Rock"
          }
        },
        "im:releaseDate": {
          "label": "2012-10-09T00:00:00-07:00",
          "attributes": {
            "label": "October 9, 2012"
          }
        }
      }, {
        "im:name": {
          "label": "Foundations Cycle 2, Vol. 2 - Memory Work by Subject"
        },
        "im:image": [{
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/2c/6c/b4/2c6cb4b3-5e6a-373c-e578-5d58672be2a8/859731750094_cover.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/2c/6c/b4/2c6cb4b3-5e6a-373c-e578-5d58672be2a8/859731750094_cover.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/2c/6c/b4/2c6cb4b3-5e6a-373c-e578-5d58672be2a8/859731750094_cover.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "63"
        },
        "im:price": {
          "label": "$12.99",
          "attributes": {
            "amount": "12.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2019 Classical Conversations MultiMedia"
        },
        "title": {
          "label": "Foundations Cycle 2, Vol. 2 - Memory Work by Subject - Classical Conversations"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/foundations-cycle-2-vol-2-memory-work-by-subject/1460290167?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/foundations-cycle-2-vol-2-memory-work-by-subject/1460290167?uo=2",
          "attributes": {
            "im:id": "1460290167"
          }
        },
        "im:artist": {
          "label": "Classical Conversations",
          "attributes": {
            "href": "https://music.apple.com/us/artist/classical-conversations/1232030006?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "4",
            "term": "Children's Music",
            "scheme": "https://music.apple.com/us/genre/music-childrens-music/id4?uo=2",
            "label": "Children's Music"
          }
        },
        "im:releaseDate": {
          "label": "2019-05-15T00:00:00-07:00",
          "attributes": {
            "label": "May 15, 2019"
          }
        }
      }, {
        "im:name": {
          "label": "Outlaw Gentlemen & Shady Ladies (Deluxe Version)"
        },
        "im:image": [{
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music128/v4/5a/65/9e/5a659ef9-123b-633e-7b78-76d6103b5fdc/00602537342884.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music128/v4/5a/65/9e/5a659ef9-123b-633e-7b78-76d6103b5fdc/00602537342884.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/5a/65/9e/5a659ef9-123b-633e-7b78-76d6103b5fdc/00602537342884.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "16"
        },
        "im:price": {
          "label": "$4.99",
          "attributes": {
            "amount": "4.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2013 VOLBEAT, under exclusive license to Universal Music Domestic Rock/Urban - a division of Universal Music GmbH"
        },
        "title": {
          "label": "Outlaw Gentlemen & Shady Ladies (Deluxe Version) - Volbeat"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/outlaw-gentlemen-shady-ladies-deluxe-version/1440874757?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/outlaw-gentlemen-shady-ladies-deluxe-version/1440874757?uo=2",
          "attributes": {
            "im:id": "1440874757"
          }
        },
        "im:artist": {
          "label": "Volbeat",
          "attributes": {
            "href": "https://music.apple.com/us/artist/volbeat/157709052?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "1153",
            "term": "Heavy Metal",
            "scheme": "https://music.apple.com/us/genre/music-rock-metal/id1153?uo=2",
            "label": "Metal"
          }
        },
        "im:releaseDate": {
          "label": "2013-04-05T00:00:00-07:00",
          "attributes": {
            "label": "April 5, 2013"
          }
        }
      }, {
        "im:name": {
          "label": "Center Point Road"
        },
        "im:image": [{
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/cb/9c/26/cb9c2671-06a1-5fff-8f33-b9b1f0cd4cf6/00843930041176.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/cb/9c/26/cb9c2671-06a1-5fff-8f33-b9b1f0cd4cf6/00843930041176.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/cb/9c/26/cb9c2671-06a1-5fff-8f33-b9b1f0cd4cf6/00843930041176.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "16"
        },
        "im:price": {
          "label": "$11.99",
          "attributes": {
            "amount": "11.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2019 Big Machine Label Group, LLC"
        },
        "title": {
          "label": "Center Point Road - Thomas Rhett"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/center-point-road/1454614683?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/center-point-road/1454614683?uo=2",
          "attributes": {
            "im:id": "1454614683"
          }
        },
        "im:artist": {
          "label": "Thomas Rhett",
          "attributes": {
            "href": "https://music.apple.com/us/artist/thomas-rhett/502541718?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "6",
            "term": "Country",
            "scheme": "https://music.apple.com/us/genre/music-country/id6?uo=2",
            "label": "Country"
          }
        },
        "im:releaseDate": {
          "label": "2019-05-31T00:00:00-07:00",
          "attributes": {
            "label": "May 31, 2019"
          }
        }
      }, {
        "im:name": {
          "label": "The Lion King (Original Motion Picture Soundtrack)"
        },
        "im:image": [{
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/a6/55/7d/a6557dec-b893-ac1f-f702-fc5338fb2023/19UMGIM61863.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/a6/55/7d/a6557dec-b893-ac1f-f702-fc5338fb2023/19UMGIM61863.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/a6/55/7d/a6557dec-b893-ac1f-f702-fc5338fb2023/19UMGIM61863.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "19"
        },
        "im:price": {
          "label": "$9.99",
          "attributes": {
            "amount": "9.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2019 Walt Disney Records"
        },
        "title": {
          "label": "The Lion King (Original Motion Picture Soundtrack) - Various Artists"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/the-lion-king-original-motion-picture-soundtrack/1472083270?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/the-lion-king-original-motion-picture-soundtrack/1472083270?uo=2",
          "attributes": {
            "im:id": "1472083270"
          }
        },
        "im:artist": {
          "label": "Various Artists"
        },
        "category": {
          "attributes": {
            "im:id": "16",
            "term": "Soundtrack",
            "scheme": "https://music.apple.com/us/genre/music-soundtrack/id16?uo=2",
            "label": "Soundtrack"
          }
        },
        "im:releaseDate": {
          "label": "2019-07-11T00:00:00-07:00",
          "attributes": {
            "label": "July 11, 2019"
          }
        }
      }, {
        "im:name": {
          "label": "Weezer (Teal Album)"
        },
        "im:image": [{
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music114/v4/97/e6/70/97e670f6-361b-a23d-617a-52bafcd631cd/075679854247.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/97/e6/70/97e670f6-361b-a23d-617a-52bafcd631cd/075679854247.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music114/v4/97/e6/70/97e670f6-361b-a23d-617a-52bafcd631cd/075679854247.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "10"
        },
        "im:price": {
          "label": "$7.99",
          "attributes": {
            "amount": "7.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2019 Weezer under exclusive license to Crush Music / Atlantic Recording Corporation for the United States and Crush Music / WEA International Inc. for the world excluding the United States. A Warner Music Company."
        },
        "title": {
          "label": "Weezer (Teal Album) - Weezer"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/weezer-teal-album/1450270988?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/weezer-teal-album/1450270988?uo=2",
          "attributes": {
            "im:id": "1450270988"
          }
        },
        "im:artist": {
          "label": "Weezer",
          "attributes": {
            "href": "https://music.apple.com/us/artist/weezer/115234?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "20",
            "term": "Alternative",
            "scheme": "https://music.apple.com/us/genre/music-alternative/id20?uo=2",
            "label": "Alternative"
          }
        },
        "im:releaseDate": {
          "label": "2019-01-24T00:00:00-07:00",
          "attributes": {
            "label": "January 24, 2019"
          }
        }
      }, {
        "im:name": {
          "label": "\"Let's Rock\""
        },
        "im:image": [{
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music113/v4/5f/80/fd/5f80fd7c-2553-f24c-cd8a-4cd78efce869/075597924961.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/5f/80/fd/5f80fd7c-2553-f24c-cd8a-4cd78efce869/075597924961.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music113/v4/5f/80/fd/5f80fd7c-2553-f24c-cd8a-4cd78efce869/075597924961.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "12"
        },
        "im:price": {
          "label": "$9.99",
          "attributes": {
            "amount": "9.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2019 Nonesuch Records Inc. for the United States and WEA International Inc. for the world outside the United States."
        },
        "title": {
          "label": "\"Let's Rock\" - The Black Keys"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/lets-rock/1459700588?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/lets-rock/1459700588?uo=2",
          "attributes": {
            "im:id": "1459700588"
          }
        },
        "im:artist": {
          "label": "The Black Keys",
          "attributes": {
            "href": "https://music.apple.com/us/artist/the-black-keys/5893059?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "20",
            "term": "Alternative",
            "scheme": "https://music.apple.com/us/genre/music-alternative/id20?uo=2",
            "label": "Alternative"
          }
        },
        "im:releaseDate": {
          "label": "2019-06-28T00:00:00-07:00",
          "attributes": {
            "label": "June 28, 2019"
          }
        }
      }, {
        "im:name": {
          "label": "1 (2015 Version)"
        },
        "im:image": [{
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/52/54/0d/52540d65-3476-bb86-832f-16277137e44b/00602547657725.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/52/54/0d/52540d65-3476-bb86-832f-16277137e44b/00602547657725.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/52/54/0d/52540d65-3476-bb86-832f-16277137e44b/00602547657725.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "27"
        },
        "im:price": {
          "label": "$12.99",
          "attributes": {
            "amount": "12.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "This Compilation ℗ 2015 Calderstone Productions Limited (a division of Universal Music Group) / Apple Corps Ltd."
        },
        "title": {
          "label": "1 (2015 Version) - The Beatles"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/1-2015-version/1440833098?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/1-2015-version/1440833098?uo=2",
          "attributes": {
            "im:id": "1440833098"
          }
        },
        "im:artist": {
          "label": "The Beatles",
          "attributes": {
            "href": "https://music.apple.com/us/artist/the-beatles/136975?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "21",
            "term": "Rock",
            "scheme": "https://music.apple.com/us/genre/music-rock/id21?uo=2",
            "label": "Rock"
          }
        },
        "im:releaseDate": {
          "label": "2000-11-13T00:00:00-07:00",
          "attributes": {
            "label": "November 13, 2000"
          }
        }
      }, {
        "im:name": {
          "label": "Vol. 2 Guardians of the Galaxy: Awesome Mix Vol. 2 (Original Motion Picture Soundtrack)"
        },
        "im:image": [{
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/cb/59/f4/cb59f4e3-69b5-f95c-cc5d-22637b29e139/00050087368777.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/cb/59/f4/cb59f4e3-69b5-f95c-cc5d-22637b29e139/00050087368777.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/cb/59/f4/cb59f4e3-69b5-f95c-cc5d-22637b29e139/00050087368777.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "14"
        },
        "im:price": {
          "label": "$9.99",
          "attributes": {
            "amount": "9.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "This Compilation ℗ 2017 Marvel Music, Inc."
        },
        "title": {
          "label": "Vol. 2 Guardians of the Galaxy: Awesome Mix Vol. 2 (Original Motion Picture Soundtrack) - Various Artists"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/vol-2-guardians-galaxy-awesome-mix-vol-2-original-motion/1440629897?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/vol-2-guardians-galaxy-awesome-mix-vol-2-original-motion/1440629897?uo=2",
          "attributes": {
            "im:id": "1440629897"
          }
        },
        "im:artist": {
          "label": "Various Artists"
        },
        "category": {
          "attributes": {
            "im:id": "16",
            "term": "Soundtrack",
            "scheme": "https://music.apple.com/us/genre/music-soundtrack/id16?uo=2",
            "label": "Soundtrack"
          }
        },
        "im:releaseDate": {
          "label": "2017-04-21T00:00:00-07:00",
          "attributes": {
            "label": "April 21, 2017"
          }
        }
      }, {
        "im:name": {
          "label": "Free Spirit"
        },
        "im:image": [{
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/36/94/0e/36940e23-2d97-a7e3-f6e6-a2d365346f6a/886447501610.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/36/94/0e/36940e23-2d97-a7e3-f6e6-a2d365346f6a/886447501610.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/36/94/0e/36940e23-2d97-a7e3-f6e6-a2d365346f6a/886447501610.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "17"
        },
        "im:price": {
          "label": "$11.99",
          "attributes": {
            "amount": "11.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2019 RCA Records, a division of Sony Music Entertainment"
        },
        "title": {
          "label": "Free Spirit - Khalid"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/free-spirit/1455151397?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/free-spirit/1455151397?uo=2",
          "attributes": {
            "im:id": "1455151397"
          }
        },
        "im:artist": {
          "label": "Khalid",
          "attributes": {
            "href": "https://music.apple.com/us/artist/khalid/82842423?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "15",
            "term": "R&B/Soul",
            "scheme": "https://music.apple.com/us/genre/music-r-b-soul/id15?uo=2",
            "label": "R&B/Soul"
          }
        },
        "im:releaseDate": {
          "label": "2019-04-05T00:00:00-07:00",
          "attributes": {
            "label": "April 5, 2019"
          }
        }
      }, {
        "im:name": {
          "label": "Thrashing Thru the Passion"
        },
        "im:image": [{
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/42/1c/2f/421c2f0b-7c13-b551-7ed1-9405c7ae8697/193483857190.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music113/v4/42/1c/2f/421c2f0b-7c13-b551-7ed1-9405c7ae8697/193483857190.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music113/v4/42/1c/2f/421c2f0b-7c13-b551-7ed1-9405c7ae8697/193483857190.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "10"
        },
        "im:price": {
          "label": "$7.99",
          "attributes": {
            "amount": "7.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2019 Frenchkiss Records"
        },
        "title": {
          "label": "Thrashing Thru the Passion - The Hold Steady"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/thrashing-thru-the-passion/1464237035?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/thrashing-thru-the-passion/1464237035?uo=2",
          "attributes": {
            "im:id": "1464237035"
          }
        },
        "im:artist": {
          "label": "The Hold Steady",
          "attributes": {
            "href": "https://music.apple.com/us/artist/the-hold-steady/19552743?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "20",
            "term": "Alternative",
            "scheme": "https://music.apple.com/us/genre/music-alternative/id20?uo=2",
            "label": "Alternative"
          }
        },
        "im:releaseDate": {
          "label": "2019-08-16T00:00:00-07:00",
          "attributes": {
            "label": "August 16, 2019"
          }
        }
      }, {
        "im:name": {
          "label": "Greatest Hits"
        },
        "im:image": [{
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music5/v4/7e/da/88/7eda8885-e40f-9a02-381a-f814bb6da295/dj.bwrsrfzo.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music5/v4/7e/da/88/7eda8885-e40f-9a02-381a-f814bb6da295/dj.bwrsrfzo.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music5/v4/7e/da/88/7eda8885-e40f-9a02-381a-f814bb6da295/dj.bwrsrfzo.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "16"
        },
        "im:price": {
          "label": "$10.99",
          "attributes": {
            "amount": "10.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 1978, 1979, 1980, 1981, 1982, 1983, 1985, 1986, 1996, 2006 Sony Music Entertainment"
        },
        "title": {
          "label": "Greatest Hits - Journey"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/greatest-hits/169003304?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/greatest-hits/169003304?uo=2",
          "attributes": {
            "im:id": "169003304"
          }
        },
        "im:artist": {
          "label": "Journey",
          "attributes": {
            "href": "https://music.apple.com/us/artist/journey/486597?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "21",
            "term": "Rock",
            "scheme": "https://music.apple.com/us/genre/music-rock/id21?uo=2",
            "label": "Rock"
          }
        },
        "im:releaseDate": {
          "label": "1988-11-15T00:00:00-07:00",
          "attributes": {
            "label": "November 15, 1988"
          }
        }
      }, {
        "im:name": {
          "label": "Greatest Hits"
        },
        "im:image": [{
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/4a/ae/bd/4aaebde0-d448-2163-2a49-1ca57e32c571/00602567756798.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/4a/ae/bd/4aaebde0-d448-2163-2a49-1ca57e32c571/00602567756798.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/4a/ae/bd/4aaebde0-d448-2163-2a49-1ca57e32c571/00602567756798.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "14"
        },
        "im:price": {
          "label": "$6.99",
          "attributes": {
            "amount": "6.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "A Geffen Records Release; This Compilation ℗ 2004 UMG Recordings, Inc."
        },
        "title": {
          "label": "Greatest Hits - Guns N' Roses"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/greatest-hits/1390048449?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/greatest-hits/1390048449?uo=2",
          "attributes": {
            "im:id": "1390048449"
          }
        },
        "im:artist": {
          "label": "Guns N' Roses",
          "attributes": {
            "href": "https://music.apple.com/us/artist/guns-n-roses/106621?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "1152",
            "term": "Hard Rock",
            "scheme": "https://music.apple.com/us/genre/music-rock-hard-rock/id1152?uo=2",
            "label": "Hard Rock"
          }
        },
        "im:releaseDate": {
          "label": "2004-03-23T00:00:00-07:00",
          "attributes": {
            "label": "March 23, 2004"
          }
        }
      }, {
        "im:name": {
          "label": "Anthem of the Peaceful Army"
        },
        "im:image": [{
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music128/v4/be/97/03/be970386-b928-1dfc-e779-12c0b8f44bcb/00602577023286.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/be/97/03/be970386-b928-1dfc-e779-12c0b8f44bcb/00602577023286.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/be/97/03/be970386-b928-1dfc-e779-12c0b8f44bcb/00602577023286.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "11"
        },
        "im:price": {
          "label": "$6.99",
          "attributes": {
            "amount": "6.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2018 Republic Records a division of UMG Recordings Inc & Lava Music LLC"
        },
        "title": {
          "label": "Anthem of the Peaceful Army - Greta Van Fleet"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/anthem-of-the-peaceful-army/1435351050?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/anthem-of-the-peaceful-army/1435351050?uo=2",
          "attributes": {
            "im:id": "1435351050"
          }
        },
        "im:artist": {
          "label": "Greta Van Fleet",
          "attributes": {
            "href": "https://music.apple.com/us/artist/greta-van-fleet/646178956?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "21",
            "term": "Rock",
            "scheme": "https://music.apple.com/us/genre/music-rock/id21?uo=2",
            "label": "Rock"
          }
        },
        "im:releaseDate": {
          "label": "2018-10-19T00:00:00-07:00",
          "attributes": {
            "label": "October 19, 2018"
          }
        }
      }, {
        "im:name": {
          "label": "Burn The Ships"
        },
        "im:image": [{
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/66/7c/70/667c70db-eb97-9c59-773d-2b080e2a3cf0/080688962463.png/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/66/7c/70/667c70db-eb97-9c59-773d-2b080e2a3cf0/080688962463.png/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/66/7c/70/667c70db-eb97-9c59-773d-2b080e2a3cf0/080688962463.png/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "11"
        },
        "im:price": {
          "label": "$7.99",
          "attributes": {
            "amount": "7.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2018 Curb | Word Entertainment. 25 Music Square West, Nashville, TN 37203"
        },
        "title": {
          "label": "Burn The Ships - for KING & COUNTRY"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/burn-the-ships/1398353335?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/burn-the-ships/1398353335?uo=2",
          "attributes": {
            "im:id": "1398353335"
          }
        },
        "im:artist": {
          "label": "for KING & COUNTRY",
          "attributes": {
            "href": "https://music.apple.com/us/artist/for-king-country/457871289?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "22",
            "term": "Christian & Gospel",
            "scheme": "https://music.apple.com/us/genre/music-christian-gospel/id22?uo=2",
            "label": "Christian & Gospel"
          }
        },
        "im:releaseDate": {
          "label": "2018-10-05T00:00:00-07:00",
          "attributes": {
            "label": "October 5, 2018"
          }
        }
      }, {
        "im:name": {
          "label": "Greatest Hits"
        },
        "im:image": [{
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music/9a/66/64/mzi.oetoyyot.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music/9a/66/64/mzi.oetoyyot.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music/9a/66/64/mzi.oetoyyot.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "16"
        },
        "im:price": {
          "label": "$6.99",
          "attributes": {
            "amount": "6.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2004 Reprise Records for the U.S. and WEA International Inc. for the world outside the U.S."
        },
        "title": {
          "label": "Greatest Hits - Neil Young"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/greatest-hits/135132797?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/greatest-hits/135132797?uo=2",
          "attributes": {
            "im:id": "135132797"
          }
        },
        "im:artist": {
          "label": "Neil Young",
          "attributes": {
            "href": "https://music.apple.com/us/artist/neil-young/147370?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "21",
            "term": "Rock",
            "scheme": "https://music.apple.com/us/genre/music-rock/id21?uo=2",
            "label": "Rock"
          }
        },
        "im:releaseDate": {
          "label": "2004-11-16T00:00:00-07:00",
          "attributes": {
            "label": "November 16, 2004"
          }
        }
      }, {
        "im:name": {
          "label": "Desperate Man"
        },
        "im:image": [{
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/74/aa/81/74aa817e-e3f3-df72-02fd-29ec685c8e3b/00602567865896.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/74/aa/81/74aa817e-e3f3-df72-02fd-29ec685c8e3b/00602567865896.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/74/aa/81/74aa817e-e3f3-df72-02fd-29ec685c8e3b/00602567865896.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "11"
        },
        "im:price": {
          "label": "$11.99",
          "attributes": {
            "amount": "11.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "An EMI Records Nashville Release; ℗ 2018 UMG Recordings, Inc."
        },
        "title": {
          "label": "Desperate Man - Eric Church"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/desperate-man/1410701556?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/desperate-man/1410701556?uo=2",
          "attributes": {
            "im:id": "1410701556"
          }
        },
        "im:artist": {
          "label": "Eric Church",
          "attributes": {
            "href": "https://music.apple.com/us/artist/eric-church/123055194?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "6",
            "term": "Country",
            "scheme": "https://music.apple.com/us/genre/music-country/id6?uo=2",
            "label": "Country"
          }
        },
        "im:releaseDate": {
          "label": "2018-10-05T00:00:00-07:00",
          "attributes": {
            "label": "October 5, 2018"
          }
        }
      }, {
        "im:name": {
          "label": "If I Know Me"
        },
        "im:image": [{
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/be/9d/e6/be9de62d-d780-de18-f355-da4029f4829c/842812106569_01_img001.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music128/v4/be/9d/e6/be9de62d-d780-de18-f355-da4029f4829c/842812106569_01_img001.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/be/9d/e6/be9de62d-d780-de18-f355-da4029f4829c/842812106569_01_img001.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "14"
        },
        "im:price": {
          "label": "$9.99",
          "attributes": {
            "amount": "9.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2018 Big Loud Records"
        },
        "title": {
          "label": "If I Know Me - Morgan Wallen"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/if-i-know-me/1440111976?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/if-i-know-me/1440111976?uo=2",
          "attributes": {
            "im:id": "1440111976"
          }
        },
        "im:artist": {
          "label": "Morgan Wallen",
          "attributes": {
            "href": "https://music.apple.com/us/artist/morgan-wallen/829142092?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "6",
            "term": "Country",
            "scheme": "https://music.apple.com/us/genre/music-country/id6?uo=2",
            "label": "Country"
          }
        },
        "im:releaseDate": {
          "label": "2018-04-27T00:00:00-07:00",
          "attributes": {
            "label": "April 27, 2018"
          }
        }
      }, {
        "im:name": {
          "label": "Big Little Lies (Music from Season 2 of the HBO Limited Series)"
        },
        "im:image": [{
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/51/4b/1e/514b1e25-c956-c622-e312-ff475ca0a596/19UMGIM61236.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/51/4b/1e/514b1e25-c956-c622-e312-ff475ca0a596/19UMGIM61236.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/51/4b/1e/514b1e25-c956-c622-e312-ff475ca0a596/19UMGIM61236.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "14"
        },
        "im:price": {
          "label": "$9.99",
          "attributes": {
            "amount": "9.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "This Compilation ℗ 2019 ABKCO Music & Records, Inc."
        },
        "title": {
          "label": "Big Little Lies (Music from Season 2 of the HBO Limited Series) - Various Artists"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/big-little-lies-music-from-season-2-of-the-hbo-limited-series/1472440047?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/big-little-lies-music-from-season-2-of-the-hbo-limited-series/1472440047?uo=2",
          "attributes": {
            "im:id": "1472440047"
          }
        },
        "im:artist": {
          "label": "Various Artists"
        },
        "category": {
          "attributes": {
            "im:id": "16",
            "term": "Soundtrack",
            "scheme": "https://music.apple.com/us/genre/music-soundtrack/id16?uo=2",
            "label": "Soundtrack"
          }
        },
        "im:releaseDate": {
          "label": "2019-07-19T00:00:00-07:00",
          "attributes": {
            "label": "July 19, 2019"
          }
        }
      }, {
        "im:name": {
          "label": "Descendants 2 (Original TV Movie Soundtrack)"
        },
        "im:image": [{
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music128/v4/0b/7b/4a/0b7b4aa1-0fb3-348e-883a-57486b81024c/00050087368944.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/0b/7b/4a/0b7b4aa1-0fb3-348e-883a-57486b81024c/00050087368944.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music128/v4/0b/7b/4a/0b7b4aa1-0fb3-348e-883a-57486b81024c/00050087368944.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "11"
        },
        "im:price": {
          "label": "$9.99",
          "attributes": {
            "amount": "9.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "This Compilation ℗ 2017 Walt Disney Records"
        },
        "title": {
          "label": "Descendants 2 (Original TV Movie Soundtrack) - Various Artists"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/descendants-2-original-tv-movie-soundtrack/1440797967?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/descendants-2-original-tv-movie-soundtrack/1440797967?uo=2",
          "attributes": {
            "im:id": "1440797967"
          }
        },
        "im:artist": {
          "label": "Various Artists"
        },
        "category": {
          "attributes": {
            "im:id": "16",
            "term": "Soundtrack",
            "scheme": "https://music.apple.com/us/genre/music-soundtrack/id16?uo=2",
            "label": "Soundtrack"
          }
        },
        "im:releaseDate": {
          "label": "2017-07-21T00:00:00-07:00",
          "attributes": {
            "label": "July 21, 2017"
          }
        }
      }, {
        "im:name": {
          "label": "Live at Woodstock"
        },
        "im:image": [{
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/0e/8e/bd/0e8ebd99-4686-ddcb-d6d8-1945e5de10fd/19CRGIM11430.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music113/v4/0e/8e/bd/0e8ebd99-4686-ddcb-d6d8-1945e5de10fd/19CRGIM11430.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/0e/8e/bd/0e8ebd99-4686-ddcb-d6d8-1945e5de10fd/19CRGIM11430.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "11"
        },
        "im:price": {
          "label": "$9.99",
          "attributes": {
            "amount": "9.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2019 Craft Recordings, a division of Concord Music Group, Inc."
        },
        "title": {
          "label": "Live at Woodstock - Creedence Clearwater Revival"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/live-at-woodstock/1465968247?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/live-at-woodstock/1465968247?uo=2",
          "attributes": {
            "im:id": "1465968247"
          }
        },
        "im:artist": {
          "label": "Creedence Clearwater Revival",
          "attributes": {
            "href": "https://music.apple.com/us/artist/creedence-clearwater-revival/2083606?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "21",
            "term": "Rock",
            "scheme": "https://music.apple.com/us/genre/music-rock/id21?uo=2",
            "label": "Rock"
          }
        },
        "im:releaseDate": {
          "label": "2019-08-02T00:00:00-07:00",
          "attributes": {
            "label": "August 2, 2019"
          }
        }
      }, {
        "im:name": {
          "label": "Hot Rocks 1964-1971"
        },
        "im:image": [{
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music128/v4/b3/a2/32/b3a232da-6c1d-c07e-5633-40e74ad026c2/00018771895725.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/b3/a2/32/b3a232da-6c1d-c07e-5633-40e74ad026c2/00018771895725.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/b3/a2/32/b3a232da-6c1d-c07e-5633-40e74ad026c2/00018771895725.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "21"
        },
        "im:price": {
          "label": "$14.99",
          "attributes": {
            "amount": "14.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2013 ABKCO Music & Records, Inc."
        },
        "title": {
          "label": "Hot Rocks 1964-1971 - The Rolling Stones"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/hot-rocks-1964-1971/1440764786?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/hot-rocks-1964-1971/1440764786?uo=2",
          "attributes": {
            "im:id": "1440764786"
          }
        },
        "im:artist": {
          "label": "The Rolling Stones",
          "attributes": {
            "href": "https://music.apple.com/us/artist/the-rolling-stones/1249595?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "21",
            "term": "Rock",
            "scheme": "https://music.apple.com/us/genre/music-rock/id21?uo=2",
            "label": "Rock"
          }
        },
        "im:releaseDate": {
          "label": "1971-12-20T00:00:00-07:00",
          "attributes": {
            "label": "December 20, 1971"
          }
        }
      }, {
        "im:name": {
          "label": "Dan + Shay"
        },
        "im:image": [{
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/76/b6/e4/76b6e4e2-5d85-1d5c-d524-c3b1f9cb8f8f/093624906407.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/76/b6/e4/76b6e4e2-5d85-1d5c-d524-c3b1f9cb8f8f/093624906407.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music118/v4/76/b6/e4/76b6e4e2-5d85-1d5c-d524-c3b1f9cb8f8f/093624906407.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "11"
        },
        "im:price": {
          "label": "$10.99",
          "attributes": {
            "amount": "10.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2018 Warner Music Nashville LLC for the U.S. and WEA International Inc. for the world outside the U.S."
        },
        "title": {
          "label": "Dan + Shay - Dan + Shay"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/dan-shay/1383989073?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/dan-shay/1383989073?uo=2",
          "attributes": {
            "im:id": "1383989073"
          }
        },
        "im:artist": {
          "label": "Dan + Shay",
          "attributes": {
            "href": "https://music.apple.com/us/artist/dan-shay/690319057?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "6",
            "term": "Country",
            "scheme": "https://music.apple.com/us/genre/music-country/id6?uo=2",
            "label": "Country"
          }
        },
        "im:releaseDate": {
          "label": "2018-06-22T00:00:00-07:00",
          "attributes": {
            "label": "June 22, 2018"
          }
        }
      }, {
        "im:name": {
          "label": "The Definitive Rod Stewart"
        },
        "im:image": [{
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music/79/f9/a4/mzi.fyjtoqdz.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music/79/f9/a4/mzi.fyjtoqdz.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music/79/f9/a4/mzi.fyjtoqdz.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "31"
        },
        "im:price": {
          "label": "$6.99",
          "attributes": {
            "amount": "6.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2008 Warner Records Inc. Marketed by Warner Music Group."
        },
        "title": {
          "label": "The Definitive Rod Stewart - Rod Stewart"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/the-definitive-rod-stewart/295535258?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/the-definitive-rod-stewart/295535258?uo=2",
          "attributes": {
            "im:id": "295535258"
          }
        },
        "im:artist": {
          "label": "Rod Stewart",
          "attributes": {
            "href": "https://music.apple.com/us/artist/rod-stewart/57471?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "21",
            "term": "Rock",
            "scheme": "https://music.apple.com/us/genre/music-rock/id21?uo=2",
            "label": "Rock"
          }
        },
        "im:releaseDate": {
          "label": "2008-11-18T00:00:00-07:00",
          "attributes": {
            "label": "November 18, 2008"
          }
        }
      }, {
        "im:name": {
          "label": "Spider-Man: Into the Spider-Verse (Soundtrack From & Inspired by the Motion Picture)"
        },
        "im:image": [{
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/69/09/dd/6909dd4a-81fc-69ef-2c48-031b1ec2b141/00602577203794.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/69/09/dd/6909dd4a-81fc-69ef-2c48-031b1ec2b141/00602577203794.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music128/v4/69/09/dd/6909dd4a-81fc-69ef-2c48-031b1ec2b141/00602577203794.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "13"
        },
        "im:price": {
          "label": "$11.99",
          "attributes": {
            "amount": "11.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "This Compilation ℗ 2018 Republic Records, a division of UMG Recordings, Inc."
        },
        "title": {
          "label": "Spider-Man: Into the Spider-Verse (Soundtrack From & Inspired by the Motion Picture) - Various Artists"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/spider-man-into-spider-verse-soundtrack-from-inspired/1445949265?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/spider-man-into-spider-verse-soundtrack-from-inspired/1445949265?uo=2",
          "attributes": {
            "im:id": "1445949265"
          }
        },
        "im:artist": {
          "label": "Various Artists"
        },
        "category": {
          "attributes": {
            "im:id": "16",
            "term": "Soundtrack",
            "scheme": "https://music.apple.com/us/genre/music-soundtrack/id16?uo=2",
            "label": "Soundtrack"
          }
        },
        "im:releaseDate": {
          "label": "2018-12-14T00:00:00-07:00",
          "attributes": {
            "label": "December 14, 2018"
          }
        }
      }, {
        "im:name": {
          "label": "No Man's Land"
        },
        "im:image": [{
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/7d/41/9a/7d419ada-dd45-adc9-81e3-30b405311bf2/19UMGIM54886.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/7d/41/9a/7d419ada-dd45-adc9-81e3-30b405311bf2/19UMGIM54886.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/7d/41/9a/7d419ada-dd45-adc9-81e3-30b405311bf2/19UMGIM54886.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "13"
        },
        "im:price": {
          "label": "$9.99",
          "attributes": {
            "amount": "9.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "A Polydor Records Release; ℗ 2019 Xtra Mile Recordings Limited, under exclusive licence to Universal Music Operations Limited"
        },
        "title": {
          "label": "No Man's Land - Frank Turner"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/no-mans-land/1469553725?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/no-mans-land/1469553725?uo=2",
          "attributes": {
            "im:id": "1469553725"
          }
        },
        "im:artist": {
          "label": "Frank Turner",
          "attributes": {
            "href": "https://music.apple.com/us/artist/frank-turner/108696785?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "10",
            "term": "Singer/Songwriter",
            "scheme": "https://music.apple.com/us/genre/music-singer-songwriter/id10?uo=2",
            "label": "Singer/Songwriter"
          }
        },
        "im:releaseDate": {
          "label": "2019-08-16T00:00:00-07:00",
          "attributes": {
            "label": "August 16, 2019"
          }
        }
      }, {
        "im:name": {
          "label": "An Old Memory"
        },
        "im:image": [{
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/69/ac/0e/69ac0e3c-45a0-d400-e012-5b81aea600b2/715187952461.png/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/69/ac/0e/69ac0e3c-45a0-d400-e012-5b81aea600b2/715187952461.png/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/69/ac/0e/69ac0e3c-45a0-d400-e012-5b81aea600b2/715187952461.png/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "7"
        },
        "im:price": {
          "label": "$7.99",
          "attributes": {
            "amount": "7.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2019 Curb Records, Inc. 48 Music Square East, Nashville, TN 37203."
        },
        "title": {
          "label": "An Old Memory - Dylan Scott"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/an-old-memory/1467691757?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/an-old-memory/1467691757?uo=2",
          "attributes": {
            "im:id": "1467691757"
          }
        },
        "im:artist": {
          "label": "Dylan Scott",
          "attributes": {
            "href": "https://music.apple.com/us/artist/dylan-scott/521811408?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "6",
            "term": "Country",
            "scheme": "https://music.apple.com/us/genre/music-country/id6?uo=2",
            "label": "Country"
          }
        },
        "im:releaseDate": {
          "label": "2019-08-16T00:00:00-07:00",
          "attributes": {
            "label": "August 16, 2019"
          }
        }
      }, {
        "im:name": {
          "label": "Metallica"
        },
        "im:image": [{
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music/v4/9a/41/03/9a410309-7dbe-fce4-a6be-43101f0a1352/0093624986553.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music/v4/9a/41/03/9a410309-7dbe-fce4-a6be-43101f0a1352/0093624986553.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music/v4/9a/41/03/9a410309-7dbe-fce4-a6be-43101f0a1352/0093624986553.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "12"
        },
        "im:price": {
          "label": "$9.99",
          "attributes": {
            "amount": "9.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 1991 Blackened Recordings"
        },
        "title": {
          "label": "Metallica - Metallica"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/metallica/579372950?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/metallica/579372950?uo=2",
          "attributes": {
            "im:id": "579372950"
          }
        },
        "im:artist": {
          "label": "Metallica",
          "attributes": {
            "href": "https://music.apple.com/us/artist/metallica/3996865?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "1153",
            "term": "Heavy Metal",
            "scheme": "https://music.apple.com/us/genre/music-rock-metal/id1153?uo=2",
            "label": "Metal"
          }
        },
        "im:releaseDate": {
          "label": "1991-08-12T00:00:00-07:00",
          "attributes": {
            "label": "August 12, 1991"
          }
        }
      }, {
        "im:name": {
          "label": "Delta"
        },
        "im:image": [{
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/47/21/19/472119fe-faab-e48a-418d-cbe729156183/00044003199552.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/47/21/19/472119fe-faab-e48a-418d-cbe729156183/00044003199552.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/47/21/19/472119fe-faab-e48a-418d-cbe729156183/00044003199552.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "14"
        },
        "im:price": {
          "label": "$11.99",
          "attributes": {
            "amount": "11.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2018 Mumford & Sons, under exclusive license to Glassnote Entertainment Group LLC"
        },
        "title": {
          "label": "Delta - Mumford & Sons"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/delta/1436532915?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/delta/1436532915?uo=2",
          "attributes": {
            "im:id": "1436532915"
          }
        },
        "im:artist": {
          "label": "Mumford & Sons",
          "attributes": {
            "href": "https://music.apple.com/us/artist/mumford-sons/307699986?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "20",
            "term": "Alternative",
            "scheme": "https://music.apple.com/us/genre/music-alternative/id20?uo=2",
            "label": "Alternative"
          }
        },
        "im:releaseDate": {
          "label": "2018-11-16T00:00:00-07:00",
          "attributes": {
            "label": "November 16, 2018"
          }
        }
      }, {
        "im:name": {
          "label": "Complete Greatest Hits"
        },
        "im:image": [{
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music49/v4/27/d7/76/27d77620-6402-6406-133c-0bdaba002157/603497879137.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music49/v4/27/d7/76/27d77620-6402-6406-133c-0bdaba002157/603497879137.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music49/v4/27/d7/76/27d77620-6402-6406-133c-0bdaba002157/603497879137.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "20"
        },
        "im:price": {
          "label": "$6.99",
          "attributes": {
            "amount": "6.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2002 Elektra Entertainment.  Marketed by Rhino Entertainment Company, a Warner Music Group Company."
        },
        "title": {
          "label": "Complete Greatest Hits - The Cars"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/complete-greatest-hits/1088530786?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/complete-greatest-hits/1088530786?uo=2",
          "attributes": {
            "im:id": "1088530786"
          }
        },
        "im:artist": {
          "label": "The Cars",
          "attributes": {
            "href": "https://music.apple.com/us/artist/the-cars/5132457?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "21",
            "term": "Rock",
            "scheme": "https://music.apple.com/us/genre/music-rock/id21?uo=2",
            "label": "Rock"
          }
        },
        "im:releaseDate": {
          "label": "2002-02-19T00:00:00-07:00",
          "attributes": {
            "label": "February 19, 2002"
          }
        }
      }, {
        "im:name": {
          "label": "DNA"
        },
        "im:image": [{
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/fb/32/2e/fb322ed2-a171-4909-86f0-7bf487a7b811/886447390108.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/fb/32/2e/fb322ed2-a171-4909-86f0-7bf487a7b811/886447390108.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/fb/32/2e/fb322ed2-a171-4909-86f0-7bf487a7b811/886447390108.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "12"
        },
        "im:price": {
          "label": "$11.99",
          "attributes": {
            "amount": "11.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2018 K-Bahn, LLC & RCA Records, a division of Sony Music Entertainment"
        },
        "title": {
          "label": "DNA - Backstreet Boys"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/dna/1441172028?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/dna/1441172028?uo=2",
          "attributes": {
            "im:id": "1441172028"
          }
        },
        "im:artist": {
          "label": "Backstreet Boys",
          "attributes": {
            "href": "https://music.apple.com/us/artist/backstreet-boys/217039?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "14",
            "term": "Pop",
            "scheme": "https://music.apple.com/us/genre/music-pop/id14?uo=2",
            "label": "Pop"
          }
        },
        "im:releaseDate": {
          "label": "2019-01-25T00:00:00-07:00",
          "attributes": {
            "label": "January 25, 2019"
          }
        }
      }, {
        "im:name": {
          "label": "Greatest Hits 1974-78"
        },
        "im:image": [{
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music118/v4/bc/6e/64/bc6e64fb-4543-122a-b46c-2de1fecf202d/00602547847430.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/bc/6e/64/bc6e64fb-4543-122a-b46c-2de1fecf202d/00602547847430.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/bc/6e/64/bc6e64fb-4543-122a-b46c-2de1fecf202d/00602547847430.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "14"
        },
        "im:price": {
          "label": "$6.99",
          "attributes": {
            "amount": "6.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2016 Capitol Records, LLC"
        },
        "title": {
          "label": "Greatest Hits 1974-78 - Steve Miller Band"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/greatest-hits-1974-78/1440842616?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/greatest-hits-1974-78/1440842616?uo=2",
          "attributes": {
            "im:id": "1440842616"
          }
        },
        "im:artist": {
          "label": "Steve Miller Band",
          "attributes": {
            "href": "https://music.apple.com/us/artist/steve-miller-band/488933?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "21",
            "term": "Rock",
            "scheme": "https://music.apple.com/us/genre/music-rock/id21?uo=2",
            "label": "Rock"
          }
        },
        "im:releaseDate": {
          "label": "1978-11-01T00:00:00-07:00",
          "attributes": {
            "label": "November 1, 1978"
          }
        }
      }, {
        "im:name": {
          "label": "Golden Hour"
        },
        "im:image": [{
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/24/44/a5/2444a523-392d-64c9-73e2-cc07e0400e23/00602567385714.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music116/v4/24/44/a5/2444a523-392d-64c9-73e2-cc07e0400e23/00602567385714.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music116/v4/24/44/a5/2444a523-392d-64c9-73e2-cc07e0400e23/00602567385714.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "13"
        },
        "im:price": {
          "label": "$10.99",
          "attributes": {
            "amount": "10.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "A MCA Nashville Release; ℗ 2018 UMG Recordings, Inc."
        },
        "title": {
          "label": "Golden Hour - Kacey Musgraves"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/golden-hour/1440918116?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/golden-hour/1440918116?uo=2",
          "attributes": {
            "im:id": "1440918116"
          }
        },
        "im:artist": {
          "label": "Kacey Musgraves",
          "attributes": {
            "href": "https://music.apple.com/us/artist/kacey-musgraves/466044182?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "6",
            "term": "Country",
            "scheme": "https://music.apple.com/us/genre/music-country/id6?uo=2",
            "label": "Country"
          }
        },
        "im:releaseDate": {
          "label": "2018-03-30T00:00:00-07:00",
          "attributes": {
            "label": "March 30, 2018"
          }
        }
      }, {
        "im:name": {
          "label": "Best of the Doobies (Remastered)"
        },
        "im:image": [{
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music20/v4/ef/7a/21/ef7a21cd-b609-c73e-087b-c50a47dbb234/603497877812.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music20/v4/ef/7a/21/ef7a21cd-b609-c73e-087b-c50a47dbb234/603497877812.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music20/v4/ef/7a/21/ef7a21cd-b609-c73e-087b-c50a47dbb234/603497877812.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "11"
        },
        "im:price": {
          "label": "$6.99",
          "attributes": {
            "amount": "6.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 1972, 1973, 1974, 1975, 1976 Warner Records Inc. Marketed by Rhino Entertainment Company, a Warner Music Group Company. All Rights Reserved."
        },
        "title": {
          "label": "Best of the Doobies (Remastered) - The Doobie Brothers"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/best-of-the-doobies-remastered/1110961242?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/best-of-the-doobies-remastered/1110961242?uo=2",
          "attributes": {
            "im:id": "1110961242"
          }
        },
        "im:artist": {
          "label": "The Doobie Brothers",
          "attributes": {
            "href": "https://music.apple.com/us/artist/the-doobie-brothers/117992093?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "21",
            "term": "Rock",
            "scheme": "https://music.apple.com/us/genre/music-rock/id21?uo=2",
            "label": "Rock"
          }
        },
        "im:releaseDate": {
          "label": "1976-10-29T00:00:00-07:00",
          "attributes": {
            "label": "October 29, 1976"
          }
        }
      }, {
        "im:name": {
          "label": "Seven Days Walking: Day 6"
        },
        "im:image": [{
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/6c/5a/02/6c5a02b5-c1ae-43f0-b8e5-296322ce2e27/19UMGIM49511.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/6c/5a/02/6c5a02b5-c1ae-43f0-b8e5-296322ce2e27/19UMGIM49511.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/6c/5a/02/6c5a02b5-c1ae-43f0-b8e5-296322ce2e27/19UMGIM49511.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "11"
        },
        "im:price": {
          "label": "$7.99",
          "attributes": {
            "amount": "7.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "A Decca Records Release; ℗ 2019 Ludovico Einaudi, under exclusive licence to Universal Music Operations Limited"
        },
        "title": {
          "label": "Seven Days Walking: Day 6 - Ludovico Einaudi"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/seven-days-walking-day-6/1467733137?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/seven-days-walking-day-6/1467733137?uo=2",
          "attributes": {
            "im:id": "1467733137"
          }
        },
        "im:artist": {
          "label": "Ludovico Einaudi",
          "attributes": {
            "href": "https://music.apple.com/us/artist/ludovico-einaudi/7420827?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "5",
            "term": "Classical",
            "scheme": "https://music.apple.com/us/genre/music-classical/id5?uo=2",
            "label": "Classical"
          }
        },
        "im:releaseDate": {
          "label": "2019-08-16T00:00:00-07:00",
          "attributes": {
            "label": "August 16, 2019"
          }
        }
      }, {
        "im:name": {
          "label": "Descendants (Original TV Movie Soundtrack)"
        },
        "im:image": [{
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/f0/c2/6a/f0c26a92-3a30-60b8-6d13-049e9e615371/00050087328412.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/f0/c2/6a/f0c26a92-3a30-60b8-6d13-049e9e615371/00050087328412.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music118/v4/f0/c2/6a/f0c26a92-3a30-60b8-6d13-049e9e615371/00050087328412.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "13"
        },
        "im:price": {
          "label": "$9.99",
          "attributes": {
            "amount": "9.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "This Compilation ℗ 2015 Walt Disney Records"
        },
        "title": {
          "label": "Descendants (Original TV Movie Soundtrack) - Various Artists"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/descendants-original-tv-movie-soundtrack/1440633212?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/descendants-original-tv-movie-soundtrack/1440633212?uo=2",
          "attributes": {
            "im:id": "1440633212"
          }
        },
        "im:artist": {
          "label": "Various Artists"
        },
        "category": {
          "attributes": {
            "im:id": "16",
            "term": "Soundtrack",
            "scheme": "https://music.apple.com/us/genre/music-soundtrack/id16?uo=2",
            "label": "Soundtrack"
          }
        },
        "im:releaseDate": {
          "label": "2015-07-31T00:00:00-07:00",
          "attributes": {
            "label": "July 31, 2015"
          }
        }
      }, {
        "im:name": {
          "label": "Infest the Rats' Nest"
        },
        "im:image": [{
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/ba/c7/2e/bac72ee6-8eaf-ac10-48e9-a429e78ed6e5/19UMGIM58574.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/ba/c7/2e/bac72ee6-8eaf-ac10-48e9-a429e78ed6e5/19UMGIM58574.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/ba/c7/2e/bac72ee6-8eaf-ac10-48e9-a429e78ed6e5/19UMGIM58574.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "9"
        },
        "im:price": {
          "label": "$9.99",
          "attributes": {
            "amount": "9.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2019 Flightless Records under exclusive license in North America to ATO Records, LLC. All Rights Reserved."
        },
        "title": {
          "label": "Infest the Rats' Nest - King Gizzard & The Lizard Wizard"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/infest-the-rats-nest/1469933446?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/infest-the-rats-nest/1469933446?uo=2",
          "attributes": {
            "im:id": "1469933446"
          }
        },
        "im:artist": {
          "label": "King Gizzard & The Lizard Wizard",
          "attributes": {
            "href": "https://music.apple.com/us/artist/king-gizzard-the-lizard-wizard/440629621?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "1153",
            "term": "Heavy Metal",
            "scheme": "https://music.apple.com/us/genre/music-rock-metal/id1153?uo=2",
            "label": "Metal"
          }
        },
        "im:releaseDate": {
          "label": "2019-08-16T00:00:00-07:00",
          "attributes": {
            "label": "August 16, 2019"
          }
        }
      }, {
        "im:name": {
          "label": "My Songs (Deluxe)"
        },
        "im:image": [{
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music113/v4/12/5c/4d/125c4dad-28c6-b836-ec96-de3cfea893f9/00602577628740.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/12/5c/4d/125c4dad-28c6-b836-ec96-de3cfea893f9/00602577628740.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music113/v4/12/5c/4d/125c4dad-28c6-b836-ec96-de3cfea893f9/00602577628740.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "19"
        },
        "im:price": {
          "label": "$13.99",
          "attributes": {
            "amount": "13.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2019 A&M Records"
        },
        "title": {
          "label": "My Songs (Deluxe) - Sting"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/my-songs-deluxe/1457221745?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/my-songs-deluxe/1457221745?uo=2",
          "attributes": {
            "im:id": "1457221745"
          }
        },
        "im:artist": {
          "label": "Sting",
          "attributes": {
            "href": "https://music.apple.com/us/artist/sting/94804?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "14",
            "term": "Pop",
            "scheme": "https://music.apple.com/us/genre/music-pop/id14?uo=2",
            "label": "Pop"
          }
        },
        "im:releaseDate": {
          "label": "2019-05-24T00:00:00-07:00",
          "attributes": {
            "label": "May 24, 2019"
          }
        }
      }, {
        "im:name": {
          "label": "Back In Black"
        },
        "im:image": [{
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music/v4/18/c1/a4/18c1a4f8-3f50-9ba4-bdf9-b4148efa0564/886443673441.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music/v4/18/c1/a4/18c1a4f8-3f50-9ba4-bdf9-b4148efa0564/886443673441.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music/v4/18/c1/a4/18c1a4f8-3f50-9ba4-bdf9-b4148efa0564/886443673441.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "10"
        },
        "im:price": {
          "label": "$9.99",
          "attributes": {
            "amount": "9.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 1980 Leidseplein Presse B.V."
        },
        "title": {
          "label": "Back In Black - AC/DC"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/back-in-black/574050396?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/back-in-black/574050396?uo=2",
          "attributes": {
            "im:id": "574050396"
          }
        },
        "im:artist": {
          "label": "AC/DC",
          "attributes": {
            "href": "https://music.apple.com/us/artist/ac-dc/5040714?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "1152",
            "term": "Hard Rock",
            "scheme": "https://music.apple.com/us/genre/music-rock-hard-rock/id1152?uo=2",
            "label": "Hard Rock"
          }
        },
        "im:releaseDate": {
          "label": "1980-07-25T00:00:00-07:00",
          "attributes": {
            "label": "July 25, 1980"
          }
        }
      }, {
        "im:name": {
          "label": "Boston"
        },
        "im:image": [{
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music3/v4/3e/e6/29/3ee6298f-217e-c73d-7c3b-a1697bad8f4d/886444824972.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music3/v4/3e/e6/29/3ee6298f-217e-c73d-7c3b-a1697bad8f4d/886444824972.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music3/v4/3e/e6/29/3ee6298f-217e-c73d-7c3b-a1697bad8f4d/886444824972.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "8"
        },
        "im:price": {
          "label": "$6.99",
          "attributes": {
            "amount": "6.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 1976, 2006 Epic Records, a division of Sony Music Entertainment"
        },
        "title": {
          "label": "Boston - Boston"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/boston/913902091?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/boston/913902091?uo=2",
          "attributes": {
            "im:id": "913902091"
          }
        },
        "im:artist": {
          "label": "Boston",
          "attributes": {
            "href": "https://music.apple.com/us/artist/boston/60960?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "21",
            "term": "Rock",
            "scheme": "https://music.apple.com/us/genre/music-rock/id21?uo=2",
            "label": "Rock"
          }
        },
        "im:releaseDate": {
          "label": "1976-08-25T00:00:00-07:00",
          "attributes": {
            "label": "August 25, 1976"
          }
        }
      }, {
        "im:name": {
          "label": "Born In the U.S.A."
        },
        "im:image": [{
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music128/v4/1d/b0/2d/1db02d23-6e40-ae43-29c9-ff31a854e8aa/074643865326.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/1d/b0/2d/1db02d23-6e40-ae43-29c9-ff31a854e8aa/074643865326.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music128/v4/1d/b0/2d/1db02d23-6e40-ae43-29c9-ff31a854e8aa/074643865326.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "12"
        },
        "im:price": {
          "label": "$9.99",
          "attributes": {
            "amount": "9.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 1984 Bruce Springsteen"
        },
        "title": {
          "label": "Born In the U.S.A. - Bruce Springsteen"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/born-in-the-u-s-a/203708420?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/born-in-the-u-s-a/203708420?uo=2",
          "attributes": {
            "im:id": "203708420"
          }
        },
        "im:artist": {
          "label": "Bruce Springsteen",
          "attributes": {
            "href": "https://music.apple.com/us/artist/bruce-springsteen/178834?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "21",
            "term": "Rock",
            "scheme": "https://music.apple.com/us/genre/music-rock/id21?uo=2",
            "label": "Rock"
          }
        },
        "im:releaseDate": {
          "label": "1984-06-04T00:00:00-07:00",
          "attributes": {
            "label": "June 4, 1984"
          }
        }
      }, {
        "im:name": {
          "label": "Trench"
        },
        "im:image": [{
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/ac/67/13/ac671336-bff2-fcc0-3817-bfff5d7e746b/075679864789.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/ac/67/13/ac671336-bff2-fcc0-3817-bfff5d7e746b/075679864789.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/ac/67/13/ac671336-bff2-fcc0-3817-bfff5d7e746b/075679864789.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "14"
        },
        "im:price": {
          "label": "$10.99",
          "attributes": {
            "amount": "10.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2018 Fueled By Ramen LLC for the United States and WEA International Inc. for the world outside of the United States. A Warner Music Group Company"
        },
        "title": {
          "label": "Trench - twenty one pilots"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/trench/1422828208?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/trench/1422828208?uo=2",
          "attributes": {
            "im:id": "1422828208"
          }
        },
        "im:artist": {
          "label": "twenty one pilots",
          "attributes": {
            "href": "https://music.apple.com/us/artist/twenty-one-pilots/349736311?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "20",
            "term": "Alternative",
            "scheme": "https://music.apple.com/us/genre/music-alternative/id20?uo=2",
            "label": "Alternative"
          }
        },
        "im:releaseDate": {
          "label": "2018-10-05T00:00:00-07:00",
          "attributes": {
            "label": "October 5, 2018"
          }
        }
      }, {
        "im:name": {
          "label": "What's Not Inside: The Lost Songs from Waitress (Outtakes and Demos Recorded for the Broadway Musical)"
        },
        "im:image": [{
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/0f/74/88/0f748843-1637-dac3-69e6-eb1e5f1904eb/093624897606.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/0f/74/88/0f748843-1637-dac3-69e6-eb1e5f1904eb/093624897606.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/0f/74/88/0f748843-1637-dac3-69e6-eb1e5f1904eb/093624897606.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "7"
        },
        "im:price": {
          "label": "$7.99",
          "attributes": {
            "amount": "7.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2019 90 Live, Inc. & Waitress, LLC under exclusive license to DMI Soundtracks, LLC"
        },
        "title": {
          "label": "What's Not Inside: The Lost Songs from Waitress (Outtakes and Demos Recorded for the Broadway Musical) - Sara Bareilles"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/whats-not-inside-lost-songs-from-waitress-outtakes/1476317154?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/whats-not-inside-lost-songs-from-waitress-outtakes/1476317154?uo=2",
          "attributes": {
            "im:id": "1476317154"
          }
        },
        "im:artist": {
          "label": "Sara Bareilles",
          "attributes": {
            "href": "https://music.apple.com/us/artist/sara-bareilles/64398046?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "16",
            "term": "Soundtrack",
            "scheme": "https://music.apple.com/us/genre/music-soundtrack/id16?uo=2",
            "label": "Soundtrack"
          }
        },
        "im:releaseDate": {
          "label": "2019-08-16T00:00:00-07:00",
          "attributes": {
            "label": "August 16, 2019"
          }
        }
      }, {
        "im:name": {
          "label": "Legend: The Best of Bob Marley and the Wailers (Remastered)"
        },
        "im:image": [{
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/bf/dd/d3/bfddd300-82bc-c01b-6877-909ea14ed2d4/12UMGIM14712.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music113/v4/bf/dd/d3/bfddd300-82bc-c01b-6877-909ea14ed2d4/12UMGIM14712.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/bf/dd/d3/bfddd300-82bc-c01b-6877-909ea14ed2d4/12UMGIM14712.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "16"
        },
        "im:price": {
          "label": "$9.99",
          "attributes": {
            "amount": "9.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "This Compilation ℗ 2002 The Island Def Jam Music Group"
        },
        "title": {
          "label": "Legend: The Best of Bob Marley and the Wailers (Remastered) - Bob Marley & The Wailers"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/legend-the-best-of-bob-marley-and-the-wailers-remastered/1469575763?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/legend-the-best-of-bob-marley-and-the-wailers-remastered/1469575763?uo=2",
          "attributes": {
            "im:id": "1469575763"
          }
        },
        "im:artist": {
          "label": "Bob Marley & The Wailers",
          "attributes": {
            "href": "https://music.apple.com/us/artist/bob-marley-the-wailers/3174628?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "24",
            "term": "Reggae",
            "scheme": "https://music.apple.com/us/genre/music-reggae/id24?uo=2",
            "label": "Reggae"
          }
        },
        "im:releaseDate": {
          "label": "1984-05-08T00:00:00-07:00",
          "attributes": {
            "label": "May 8, 1984"
          }
        }
      }, {
        "im:name": {
          "label": "I Rise (Remixes)"
        },
        "im:image": [{
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/86/bf/82/86bf8259-1151-5a1e-f3e7-5f10e7249bc1/19UMGIM73108.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music123/v4/86/bf/82/86bf8259-1151-5a1e-f3e7-5f10e7249bc1/19UMGIM73108.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/86/bf/82/86bf8259-1151-5a1e-f3e7-5f10e7249bc1/19UMGIM73108.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "6"
        },
        "im:price": {
          "label": "$5.99",
          "attributes": {
            "amount": "5.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2019 Boy Toy, Inc., Exclu licensed to Live Nation Worldwide, Inc. Exclu licensed to Interscope Records"
        },
        "title": {
          "label": "I Rise (Remixes) - Madonna"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/i-rise-remixes/1475997409?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/i-rise-remixes/1475997409?uo=2",
          "attributes": {
            "im:id": "1475997409"
          }
        },
        "im:artist": {
          "label": "Madonna",
          "attributes": {
            "href": "https://music.apple.com/us/artist/madonna/20044?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "14",
            "term": "Pop",
            "scheme": "https://music.apple.com/us/genre/music-pop/id14?uo=2",
            "label": "Pop"
          }
        },
        "im:releaseDate": {
          "label": "2019-08-16T00:00:00-07:00",
          "attributes": {
            "label": "August 16, 2019"
          }
        }
      }, {
        "im:name": {
          "label": "The Hits--Chapter One"
        },
        "im:image": [{
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/30/c4/ea/30c4ea17-8860-14be-83cb-5016732f58c0/012414177926.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music114/v4/30/c4/ea/30c4ea17-8860-14be-83cb-5016732f58c0/012414177926.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/30/c4/ea/30c4ea17-8860-14be-83cb-5016732f58c0/012414177926.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "13"
        },
        "im:price": {
          "label": "$9.99",
          "attributes": {
            "amount": "9.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2001 Zomba Recording LLC"
        },
        "title": {
          "label": "The Hits--Chapter One - Backstreet Boys"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/the-hits-chapter-one/308522240?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/the-hits-chapter-one/308522240?uo=2",
          "attributes": {
            "im:id": "308522240"
          }
        },
        "im:artist": {
          "label": "Backstreet Boys",
          "attributes": {
            "href": "https://music.apple.com/us/artist/backstreet-boys/217039?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "14",
            "term": "Pop",
            "scheme": "https://music.apple.com/us/genre/music-pop/id14?uo=2",
            "label": "Pop"
          }
        },
        "im:releaseDate": {
          "label": "2001-10-23T00:00:00-07:00",
          "attributes": {
            "label": "October 23, 2001"
          }
        }
      }, {
        "im:name": {
          "label": "Greatest Hits (Remastered)"
        },
        "im:image": [{
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/6d/39/c9/6d39c958-59b4-129a-e986-37025922ae4a/00094636299655.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/6d/39/c9/6d39c958-59b4-129a-e986-37025922ae4a/00094636299655.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/6d/39/c9/6d39c958-59b4-129a-e986-37025922ae4a/00094636299655.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "21"
        },
        "im:price": {
          "label": "$6.99",
          "attributes": {
            "amount": "6.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "This Compilation ℗ 2006 Capitol Records Inc."
        },
        "title": {
          "label": "Greatest Hits (Remastered) - Huey Lewis & The News"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/greatest-hits-remastered/725784933?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/greatest-hits-remastered/725784933?uo=2",
          "attributes": {
            "im:id": "725784933"
          }
        },
        "im:artist": {
          "label": "Huey Lewis & The News",
          "attributes": {
            "href": "https://music.apple.com/us/artist/huey-lewis-the-news/13793427?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "21",
            "term": "Rock",
            "scheme": "https://music.apple.com/us/genre/music-rock/id21?uo=2",
            "label": "Rock"
          }
        },
        "im:releaseDate": {
          "label": "2006-05-23T00:00:00-07:00",
          "attributes": {
            "label": "May 23, 2006"
          }
        }
      }, {
        "im:name": {
          "label": "Diamonds (Deluxe)"
        },
        "im:image": [{
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/02/49/14/0249144b-e948-23e3-5262-0a39ca9623db/17UM1IM17132.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music123/v4/02/49/14/0249144b-e948-23e3-5262-0a39ca9623db/17UM1IM17132.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music123/v4/02/49/14/0249144b-e948-23e3-5262-0a39ca9623db/17UM1IM17132.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "51"
        },
        "im:price": {
          "label": "$24.99",
          "attributes": {
            "amount": "24.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "A Virgin EMI Records Release; This Compilation ℗ 2017 Universal Music Operations Limited"
        },
        "title": {
          "label": "Diamonds (Deluxe) - Elton John"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/diamonds-deluxe/1422632224?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/diamonds-deluxe/1422632224?uo=2",
          "attributes": {
            "im:id": "1422632224"
          }
        },
        "im:artist": {
          "label": "Elton John",
          "attributes": {
            "href": "https://music.apple.com/us/artist/elton-john/54657?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "14",
            "term": "Pop",
            "scheme": "https://music.apple.com/us/genre/music-pop/id14?uo=2",
            "label": "Pop"
          }
        },
        "im:releaseDate": {
          "label": "2017-11-10T00:00:00-07:00",
          "attributes": {
            "label": "November 10, 2017"
          }
        }
      }, {
        "im:name": {
          "label": "Victory (Live)"
        },
        "im:image": [{
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/7f/83/11/7f83119f-c1b8-9a53-c348-8dcebda23817/FINAL_VICTORY_ALBUM_COVER_1.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/7f/83/11/7f83119f-c1b8-9a53-c348-8dcebda23817/FINAL_VICTORY_ALBUM_COVER_1.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/7f/83/11/7f83119f-c1b8-9a53-c348-8dcebda23817/FINAL_VICTORY_ALBUM_COVER_1.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "14"
        },
        "im:price": {
          "label": "$12.99",
          "attributes": {
            "amount": "12.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2019 Bethel Music"
        },
        "title": {
          "label": "Victory (Live) - Bethel Music"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/victory-live/1445055135?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/victory-live/1445055135?uo=2",
          "attributes": {
            "im:id": "1445055135"
          }
        },
        "im:artist": {
          "label": "Bethel Music",
          "attributes": {
            "href": "https://music.apple.com/us/artist/bethel-music/480438107?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "22",
            "term": "Christian & Gospel",
            "scheme": "https://music.apple.com/us/genre/music-christian-gospel/id22?uo=2",
            "label": "Christian & Gospel"
          }
        },
        "im:releaseDate": {
          "label": "2019-01-25T00:00:00-07:00",
          "attributes": {
            "label": "January 25, 2019"
          }
        }
      }, {
        "im:name": {
          "label": "Late Nights and Longnecks"
        },
        "im:image": [{
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/ff/7a/e9/ff7ae9a1-dd52-7463-48a5-0471f3c84e6f/00843930041282.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music114/v4/ff/7a/e9/ff7ae9a1-dd52-7463-48a5-0471f3c84e6f/00843930041282.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/ff/7a/e9/ff7ae9a1-dd52-7463-48a5-0471f3c84e6f/00843930041282.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "10"
        },
        "im:price": {
          "label": "$9.99",
          "attributes": {
            "amount": "9.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2019 Big Machine Label Group, LLC"
        },
        "title": {
          "label": "Late Nights and Longnecks - Justin Moore"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/late-nights-and-longnecks/1454717418?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/late-nights-and-longnecks/1454717418?uo=2",
          "attributes": {
            "im:id": "1454717418"
          }
        },
        "im:artist": {
          "label": "Justin Moore",
          "attributes": {
            "href": "https://music.apple.com/us/artist/justin-moore/272639185?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "6",
            "term": "Country",
            "scheme": "https://music.apple.com/us/genre/music-country/id6?uo=2",
            "label": "Country"
          }
        },
        "im:releaseDate": {
          "label": "2019-07-26T00:00:00-07:00",
          "attributes": {
            "label": "July 26, 2019"
          }
        }
      }, {
        "im:name": {
          "label": "20th Century Masters - The Millennium Collection: The Best of Kiss"
        },
        "im:image": [{
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/80/81/cf/8081cf51-fad2-5f9e-5d4a-c1dab276a46a/00602498604786.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/80/81/cf/8081cf51-fad2-5f9e-5d4a-c1dab276a46a/00602498604786.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/80/81/cf/8081cf51-fad2-5f9e-5d4a-c1dab276a46a/00602498604786.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "12"
        },
        "im:price": {
          "label": "$4.99",
          "attributes": {
            "amount": "4.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "This Compilation ℗ 2003 The Island Def Jam Music Group"
        },
        "title": {
          "label": "20th Century Masters - The Millennium Collection: The Best of Kiss - Kiss"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/20th-century-masters-millennium-collection-best-kiss/1440779755?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/20th-century-masters-millennium-collection-best-kiss/1440779755?uo=2",
          "attributes": {
            "im:id": "1440779755"
          }
        },
        "im:artist": {
          "label": "Kiss",
          "attributes": {
            "href": "https://music.apple.com/us/artist/kiss/118108?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "1152",
            "term": "Hard Rock",
            "scheme": "https://music.apple.com/us/genre/music-rock-hard-rock/id1152?uo=2",
            "label": "Hard Rock"
          }
        },
        "im:releaseDate": {
          "label": "2003-01-01T00:00:00-07:00",
          "attributes": {
            "label": "January 1, 2003"
          }
        }
      }, {
        "im:name": {
          "label": "Naive"
        },
        "im:image": [{
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music113/v4/bd/27/64/bd2764fc-316d-e324-643f-7ad5c502909f/4050538508901.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music113/v4/bd/27/64/bd2764fc-316d-e324-643f-7ad5c502909f/4050538508901.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music113/v4/bd/27/64/bd2764fc-316d-e324-643f-7ad5c502909f/4050538508901.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "13"
        },
        "im:price": {
          "label": "$9.99",
          "attributes": {
            "amount": "9.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2019 S-Curve Records"
        },
        "title": {
          "label": "Naive - Andy Grammer"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/naive/1466172867?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/naive/1466172867?uo=2",
          "attributes": {
            "im:id": "1466172867"
          }
        },
        "im:artist": {
          "label": "Andy Grammer",
          "attributes": {
            "href": "https://music.apple.com/us/artist/andy-grammer/395772279?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "14",
            "term": "Pop",
            "scheme": "https://music.apple.com/us/genre/music-pop/id14?uo=2",
            "label": "Pop"
          }
        },
        "im:releaseDate": {
          "label": "2019-07-26T00:00:00-07:00",
          "attributes": {
            "label": "July 26, 2019"
          }
        }
      }, {
        "im:name": {
          "label": "Evolve"
        },
        "im:image": [{
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/40/46/80/404680b2-9f25-ae64-66ab-91b09666028b/00602567491255.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/40/46/80/404680b2-9f25-ae64-66ab-91b09666028b/00602567491255.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/40/46/80/404680b2-9f25-ae64-66ab-91b09666028b/00602567491255.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "12"
        },
        "im:price": {
          "label": "$9.99",
          "attributes": {
            "amount": "9.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2018 KIDinaKORNER/Interscope Records"
        },
        "title": {
          "label": "Evolve - Imagine Dragons"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/evolve/1411625594?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/evolve/1411625594?uo=2",
          "attributes": {
            "im:id": "1411625594"
          }
        },
        "im:artist": {
          "label": "Imagine Dragons",
          "attributes": {
            "href": "https://music.apple.com/us/artist/imagine-dragons/358714030?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "20",
            "term": "Alternative",
            "scheme": "https://music.apple.com/us/genre/music-alternative/id20?uo=2",
            "label": "Alternative"
          }
        },
        "im:releaseDate": {
          "label": "2017-06-23T00:00:00-07:00",
          "attributes": {
            "label": "June 23, 2017"
          }
        }
      }, {
        "im:name": {
          "label": "His Mercy Is More: The Hymns of Matt Boswell and Matt Papa"
        },
        "im:image": [{
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/98/d6/3c/98d63cc8-2a30-4847-e69a-33425e9560c9/19UMGIM69872.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/98/d6/3c/98d63cc8-2a30-4847-e69a-33425e9560c9/19UMGIM69872.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/98/d6/3c/98d63cc8-2a30-4847-e69a-33425e9560c9/19UMGIM69872.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "13"
        },
        "im:price": {
          "label": "$9.99",
          "attributes": {
            "amount": "9.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2019 Getty Music Label, LLC"
        },
        "title": {
          "label": "His Mercy Is More: The Hymns of Matt Boswell and Matt Papa - Matt Boswell & Matt Papa"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/his-mercy-is-more-the-hymns-of-matt-boswell-and-matt-papa/1475183083?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/his-mercy-is-more-the-hymns-of-matt-boswell-and-matt-papa/1475183083?uo=2",
          "attributes": {
            "im:id": "1475183083"
          }
        },
        "im:artist": {
          "label": "Matt Boswell & Matt Papa",
          "attributes": {
            "href": "https://music.apple.com/us/artist/matt-boswell/167859738?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "22",
            "term": "Christian & Gospel",
            "scheme": "https://music.apple.com/us/genre/music-christian-gospel/id22?uo=2",
            "label": "Christian & Gospel"
          }
        },
        "im:releaseDate": {
          "label": "2019-08-16T00:00:00-07:00",
          "attributes": {
            "label": "August 16, 2019"
          }
        }
      }, {
        "im:name": {
          "label": "Greatest Hits"
        },
        "im:image": [{
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music/fa/e8/30/mzi.izeorbmm.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music/fa/e8/30/mzi.izeorbmm.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music/fa/e8/30/mzi.izeorbmm.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "16"
        },
        "im:price": {
          "label": "$11.99",
          "attributes": {
            "amount": "11.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 1988 Warner Records Inc."
        },
        "title": {
          "label": "Greatest Hits - Fleetwood Mac"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/greatest-hits/202271826?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/greatest-hits/202271826?uo=2",
          "attributes": {
            "im:id": "202271826"
          }
        },
        "im:artist": {
          "label": "Fleetwood Mac",
          "attributes": {
            "href": "https://music.apple.com/us/artist/fleetwood-mac/158038?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "21",
            "term": "Rock",
            "scheme": "https://music.apple.com/us/genre/music-rock/id21?uo=2",
            "label": "Rock"
          }
        },
        "im:releaseDate": {
          "label": "1988-11-22T00:00:00-07:00",
          "attributes": {
            "label": "November 22, 1988"
          }
        }
      }, {
        "im:name": {
          "label": "From A Room, Volume 1"
        },
        "im:image": [{
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music128/v4/3a/be/3f/3abe3fcd-ea28-bc01-1f16-cca5d659e9a6/00602557542783.rgb.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/3a/be/3f/3abe3fcd-ea28-bc01-1f16-cca5d659e9a6/00602557542783.rgb.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/3a/be/3f/3abe3fcd-ea28-bc01-1f16-cca5d659e9a6/00602557542783.rgb.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "9"
        },
        "im:price": {
          "label": "$9.99",
          "attributes": {
            "amount": "9.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2017 Mercury Records, a Division of UMG Recordings, Inc."
        },
        "title": {
          "label": "From A Room, Volume 1 - Chris Stapleton"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/from-a-room-volume-1/1440901944?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/from-a-room-volume-1/1440901944?uo=2",
          "attributes": {
            "im:id": "1440901944"
          }
        },
        "im:artist": {
          "label": "Chris Stapleton",
          "attributes": {
            "href": "https://music.apple.com/us/artist/chris-stapleton/1752134?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "6",
            "term": "Country",
            "scheme": "https://music.apple.com/us/genre/music-country/id6?uo=2",
            "label": "Country"
          }
        },
        "im:releaseDate": {
          "label": "2017-05-05T00:00:00-07:00",
          "attributes": {
            "label": "May 5, 2017"
          }
        }
      }, {
        "im:name": {
          "label": "The Very Best of Jackson Browne"
        },
        "im:image": [{
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music/v4/d0/dc/75/d0dc7566-ead9-d83e-819b-c834195cce8f/081227809126.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music/v4/d0/dc/75/d0dc7566-ead9-d83e-819b-c834195cce8f/081227809126.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is5-ssl.mzstatic.com/image/thumb/Music/v4/d0/dc/75/d0dc7566-ead9-d83e-819b-c834195cce8f/081227809126.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "32"
        },
        "im:price": {
          "label": "$6.99",
          "attributes": {
            "amount": "6.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2004 Elektra Entertainment Group. Marketed by Warner Strategic Marketing."
        },
        "title": {
          "label": "The Very Best of Jackson Browne - Jackson Browne"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/the-very-best-of-jackson-browne/842470967?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/the-very-best-of-jackson-browne/842470967?uo=2",
          "attributes": {
            "im:id": "842470967"
          }
        },
        "im:artist": {
          "label": "Jackson Browne",
          "attributes": {
            "href": "https://music.apple.com/us/artist/jackson-browne/388900?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "21",
            "term": "Rock",
            "scheme": "https://music.apple.com/us/genre/music-rock/id21?uo=2",
            "label": "Rock"
          }
        },
        "im:releaseDate": {
          "label": "2004-03-15T16:00:00-07:00",
          "attributes": {
            "label": "March 15, 2004"
          }
        }
      }, {
        "im:name": {
          "label": "Experiment"
        },
        "im:image": [{
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/51/cd/f6/51cdf669-d810-cb4f-d170-016a5b760f0b/886447273807.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        }, {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/51/cd/f6/51cdf669-d810-cb4f-d170-016a5b760f0b/886447273807.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        }, {
          "label": "https://is3-ssl.mzstatic.com/image/thumb/Music128/v4/51/cd/f6/51cdf669-d810-cb4f-d170-016a5b760f0b/886447273807.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }],
        "im:itemCount": {
          "label": "12"
        },
        "im:price": {
          "label": "$11.99",
          "attributes": {
            "amount": "11.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2018 Sony Music Entertainment"
        },
        "title": {
          "label": "Experiment - Kane Brown"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://music.apple.com/us/album/experiment/1434750138?uo=2"
          }
        },
        "id": {
          "label": "https://music.apple.com/us/album/experiment/1434750138?uo=2",
          "attributes": {
            "im:id": "1434750138"
          }
        },
        "im:artist": {
          "label": "Kane Brown",
          "attributes": {
            "href": "https://music.apple.com/us/artist/kane-brown/930928857?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "6",
            "term": "Country",
            "scheme": "https://music.apple.com/us/genre/music-country/id6?uo=2",
            "label": "Country"
          }
        },
        "im:releaseDate": {
          "label": "2018-11-09T00:00:00-07:00",
          "attributes": {
            "label": "November 9, 2018"
          }
        }
      }],
      "updated": {
        "label": "2019-08-19T14:45:57-07:00"
      },
      "rights": {
        "label": "Copyright 2008 Apple Inc."
      },
      "title": {
        "label": "iTunes Store: Top Albums"
      },
      "icon": {
        "label": "http://itunes.apple.com/favicon.ico"
      },
      "link": [{
        "attributes": {
          "rel": "alternate",
          "type": "text/html",
          "href": "https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewTop?cc=us&id=1&popId=11"
        }
      }, {
        "attributes": {
          "rel": "self",
          "href": "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
        }
      }],
      "id": {
        "label": "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
      }
    }
  };

  return function fetchTopAlbums() {
    // simulate an ajax request
    return new Promise((resolve, reject)=> {
      window.setTimeout(
        ()=> resolve(ALBUMS_DATA),
        500
      );
    });
  };
})();

export default fetchTopAlbums;
