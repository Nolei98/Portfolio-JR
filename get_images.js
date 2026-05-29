import https from 'https';

async function searchSpotifyImage(artist, album) {
  const url = `https://itunes.apple.com/search?term=${encodeURIComponent(artist + ' ' + album)}&entity=album&limit=1`;
  return new Promise((resolve) => {
    https.get(url, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.results && json.results[0]) {
            resolve(json.results[0].artworkUrl100.replace('100x100bb', '600x600bb'));
          } else {
            resolve('Not found');
          }
        } catch(e) {
          resolve('Error');
        }
      });
    });
  });
}

(async () => {
  const albums = [
    { title: "Born to Die", artist: "Lana Del Rey" },
    { title: "Indigo Borboleta Anil", artist: "Liniker" },
    { title: "Freudian", artist: "Daniel Caesar" },
    { title: "Atrás/Além", artist: "O Terno" },
    { title: "The Gods We Can Touch", artist: "AURORA" },
    { title: "Blonde", artist: "Frank Ocean" },
    { title: "AM", artist: "Arctic Monkeys" },
    { title: "SOS", artist: "SZA" }
  ];
  for (const a of albums) {
    const url = await searchSpotifyImage(a.artist, a.title);
    console.log(`${a.title}: ${url}`);
  }
})();
