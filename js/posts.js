
export const posts = () => {
  return Promise
    .resolve()
    .then(() => fetch(`https://blog.lsong.org/feed.xml`))
    .then(res => res.text())
};

export const render = () => {
  return Promise
    .resolve()
    .then(() => posts())
    .then(parseXmlToJson)
    .then(doc => console.log(doc))
};