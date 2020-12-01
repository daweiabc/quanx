/*

Quantumult X 脚本:

[rewrite_local]
# tz
^http:\/\/api\.a68d07d\.xyz\/fast-cloud\/user\/info url script-response-body tz.js

[mitm]
hostname = api.a68d07d.xyz,

*/

let obj = JSON.parse($response.body);
obj = {
  "code" : "0000",
  "message" : "",
  "result" : {
    "account" : "20203810646",
    "nickName" : null,
    "stars" : 0,
    "channelCode" : null,
    "vipValidDate" : 4092579678000,
    "bindStatus" : 1,
    "sex" : null,
    "invitationCode" : "EGFGKHK",
    "vipType" : 1,
    "accessToken" : "QBEJ42HGG6DAP4XX3XXOVDOZ616OHXR9",
    "id" : 2434858,
    "tokenValidDate" : 1608652800000,
    "phone" : "20203810646",
    "gold" : 9999,
    "avatar" : null,
    "fans" : 0,
    "createDate" : 1606139671000,
    "newUser" : false,
    "accountLevel" : null,
    "authType" : 1,
    "machineCode" : "iPhone 7|13.5"
  },
  "data" : null,
  "total" : null
};

$done({body: JSON.stringify(obj)});