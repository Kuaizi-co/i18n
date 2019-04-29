const request = require('request')
const MD5 = require('./md5')
const fetch = require('node-fetch')
const Bluebird = require('bluebird')
const crypto = require('crypto')
const bdTranslate = require('./translate')

fetch.Promise = Bluebird

const appid = '20190423000290765'
const key = 'oHDZfgnlghY3vSl9nSUP'
const salt = (new Date).getTime()
const API_URL = 'http://api.fanyi.baidu.com/api/trans/vip/translate'

function signature(appid, query, salt, key){
	let string = appid + query + salt + key
	const md5 = crypto.createHash('md5')
	md5.update(string)
	return md5.digest('hex')
}


var query = 'apple\norange\nbanana\npear';
// 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
const translate = ({ query, from }) => {
  const sign = signature(appid, query, salt +key)
  const data = {
    q: query,
    appid: appid,
    salt: salt,
    from,
    to: 'zh',
    sign
  }
  console.log(JSON.stringify(data))
  fetch(API_URL, {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      'Content-Type':'application/x-www-form-urlencoded',
      'Content-Length': data.length
    }
  })
  .then(res => {
    console.log(res)
    return res.json()
  })
  .then(data => {
    console.log('data')
    console.log(data)
  })
}

// translate({ query, from: 'en' })
bdTranslate('你好中国', function(result) {
	console.log(result);
});
