var albums = [
  {
    id: 3006483678,
    label: "Anhedonia",
    name: "anhedonia"
  }, {
    id: 2241975830,
    label: "Idiosyncrasy",
    name: "idiosyncrasy"
  }, {
    id: 87131651,
    label: "Hypoxia",
    name: "hypoxia"
  }
];

var navLinks = [
  {
    href: "#",
    label: "Videos",
    name: "videos"
  }, {
    href: "#",
    label: "Discography",
    name: "discography"
  }
];

var social = [
  {
    href: "https://www.youtube.com/channel/UCvxQy1NnFoVGUvuBdddG8jg",
    text: "YouTube"
  }, {
    href: "https://soundcloud.com/mass-hollow",
    text: "Soundcloud"
  }, {
    href: "https://masshollow.bandcamp.com/",
    text: "Bandcamp"
  }, {
    href: "https://twitter.com/MassHollow",
    text: "Twitter"
  }, {
    href: "https://www.facebook.com/MassHollow/",
    text: "Facebook"
  }
];

var videos = [
  {
    name: 'pedal',
    id: 'HzciuwwOr2k',
    text: 'Pedal',
    album: '',
    img: require('./img/pedal.jpg')
  }, {
    name: 'bandaids',
    id: 'GMlVauePrEU',
    text: 'Bandaids',
    album: 'hypoxia',
    img: require('./img/bandaids.jpg')
  }, {
    name: 'winds',
    id: 'a7CpqhOF0hM',
    text: 'Winds',
    album: 'Idiosyncrasy',
    img: require('./img/winds.jpg')
  }, {
    name: 'basketcase',
    id: 'wd68CnQy3UQ',
    text: 'Basket Case',
    album: 'Idiosyncrasy',
    img: require('./img/basketcase.jpg')
  }, {
    name: 'thesetup',
    id: 'ri_z3AGjxNo',
    text: 'The Setup',
    album: 'hypoxia',
    img: require('./img/thesetup.jpg')
  }, {
    name: 'rar',
    id: 'CrPr0rQlTrs',
    text: 'Live at Radio-Active Records',
    album: '',
    img: require('./img/rar.jpg')
  }
];


module.exports = {
  albums,
  navLinks,
  social,
  videos
}
