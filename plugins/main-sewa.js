let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'Sewa'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `Hallo mypren ๐
โโโใ ฤฑll *Sewa Bot* llฤฑ ใโโ๊ฅ
โโโโโโโโโโโโโโโโโโโโ
โโโใ ฤฑll *HARGA* llฤฑ ใโโ๊ฅ
โฌก *5 Hari:* *5.000*
โฌก *1 BULAN:* *15.000*
โฌก *PERMANEN 1 grup:* *20.000*
โฌก *PERMANEN 3-6 grup:* *35.000*
โฌก *lebih dari 6 tambah +10.000*
โโโโโโโโโโโโโโโโ๊ฅ
โโโโใ ฤฑll *PAYMENT* llฤฑ ใโโ๊ฅ
โฌก *DANA:* ${dana}
โฌก *GOPAY:* ${gopay}
โฌก *OVO:* ${pulsa}
โโโโโโโโโโโโโโโโโโโ๊ฅ
โโโใ ฤฑll *RULES* llฤฑ ใโ๊ฅ
โฌก [โ] *Dana yang sudah masuk tidak bisa di kembalikan*
โฌก [โ] *Kalau akunmu ke banned atau sebagainya bukan urusan saya*
โโโโโโโโโโโ๊ฅ
Jika anda berminat hubungi nomor di bawah!!

โฉยป *jangan lupa donasi kak* ยซโจ
Terimakasih yang sudah mendonasikan untuk bot

Contact person Sewa Bot:
wa.me/${numberowner} (Owner)

*Follow Instagram ku juga kak๐ผ*`
  conn.send3ButtonImg(m.chat, fla + teks, anu, instagram, 'Donasi', '.donasi', 'Owner', '.owner', 'Menu', '.menu', m) 
}
handler.help = ['sewazifa']
handler.tags = ['info']
handler.command = /^(zifasewa|sewazifa|sewa|sewabot)$/i

module.exports = handler