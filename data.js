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
    label: "Videos",
    name: "videos"
  }, {
    label: "Albums",
    name: "albums"
  }
];

var navLinksMobile = navLinks.concat([
  {
    label: "Social",
    name: "social"
  }
]);

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
    name: 'vanilla',
    id: 'e0cwXTL6atI',
    title: 'Vanilla',
    album: '',
    img: require('./img/vanilla.jpg')
  }, {
    name: 'pedal',
    id: 'HzciuwwOr2k',
    title: 'Pedal',
    album: '',
    img: require('./img/pedal.jpg')
  }, {
    name: 'bandaids',
    id: 'GMlVauePrEU',
    title: 'Bandaids',
    album: 'hypoxia',
    img: require('./img/bandaids.jpg')
  }, {
    name: 'winds',
    id: 'a7CpqhOF0hM',
    title: 'Winds',
    album: 'Idiosyncrasy',
    img: require('./img/winds.jpg')
  }, {
    name: 'basketcase',
    id: 'wd68CnQy3UQ',
    title: 'Basket Case',
    album: 'Idiosyncrasy',
    img: require('./img/basketcase.jpg')
  }, {
    name: 'thesetup',
    id: 'ri_z3AGjxNo',
    title: 'The Setup',
    album: 'hypoxia',
    img: require('./img/thesetup.jpg')
  }, {
    name: 'rar',
    id: 'CrPr0rQlTrs',
    title: 'Live at Radio-Active Records',
    album: '',
    img: require('./img/rar.jpg')
  }
];


module.exports = {
  albums,
  navLinks,
  navLinksMobile,
  social,
  videos
}
