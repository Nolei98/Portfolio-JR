import https from 'https';
const url1 = `https://itunes.apple.com/search?term=Freudian&entity=album&limit=5`;
https.get(url1, res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
      const json = JSON.parse(data);
      json.results.forEach(r => console.log(r.artistName, r.collectionName, r.artworkUrl100.replace('100x100bb', '600x600bb')));
  });
});
