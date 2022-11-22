#!name=ShadowLink VPN
#!desc=ShadowLink VPN解锁会员节点
#!icon=https://raw.githubusercontent.com/deezertidal/private/main/icons/shadowlinkvpn.png
#!homepage=https://github.com/deezertidal
#!author=Marol62926

[rewrite_local]
https://buy.itunes.apple.com/verifyReceipt url script-response-body https://raw.githubusercontent.com/Marol62926/MarScrpt/main/shadowlink.js

[mitm]
hostname = buy.itunes.apple.com