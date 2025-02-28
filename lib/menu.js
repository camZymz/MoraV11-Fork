const chalk = require('chalk');
const fs = require('fs');

global.allMenu = (prefix) => {
return`
╭─ׁ ࣪ ִֶָ☾. *GROUP MENU* ໒  ֵ  ׄ 
┃ お ─· .pushcontact
┃ お ─· .savecontact
┃ お ─· .sendcontact
┃ お ─· .getcontact
┃ お ─· .contacttag
┃ お ─· .antibadword
┃ お ─· .nsfw
┃ お ─· .antiaudio
┃ お ─· .antiforeign
┃ お ─· .antisticker
┃ お ─· .antiimage
┃ お ─· .antivideo
┃ お ─· .antiviewonce
┃ お ─· .antispam
┃ お ─· .antimedia
┃ お ─· .antidocument
┃ お ─· .anticontact
┃ お ─· .antilocation
┃ お ─· .antilocation
┃ お ─· .antilink
┃ お ─· .antilinkgc
┃ お ─· .groupinfo
┃ お ─· .mute
┃ お ─· .welcome
┃ お ─· .left
┃ お ─· .adminevent
┃ お ─· .groupevent
┃ お ─· .kick
┃ お ─· .add
┃ お ─· .promote
┃ お ─· .demote
┃ お ─· .setnamegc
┃ お ─· .setppgc
┃ お ─· .deleteppgc
┃ お ─· .setdesk
┃ お ─· .hidetag
┃ お ─· .tagall
┃ お ─· .listonline
┃ お ─· .group
┃ お ─· .editinfo
┃ お ─· .linkgc
┃ お ─· .resetlink
┃ お ─· .afk
┃ お ─· .addlist
┃ お ─· .dellist
┃ お ─· .ceklist
╰──────────── •

╭─ׁ ࣪ ִֶָ☾. *SEARCH MENU* ໒  ֵ  ׄ 
┃ お ─· .anime
┃ お ─· kusonimeinfo
┃ お ─· kusonimesearch
┃ お ─· otakudesu
┃ お ─· jkt48news
┃ お ─· mangainfo
┃ お ─· mangadetail
┃ お ─· .imdb
┃ お ─· .bukalapak
┃ お ─· .playstore
┃ お ─· .umma
┃ お ─· .happymod
┃ お ─· .ytsearch
┃ お ─· .tiktoksearch
┃ お ─· .pinterest
┃ お ─· .wallpaper
┃ お ─· .wikipedia
┃ お ─· .wikimedia
┃ お ─· .ringtone
┃ お ─· .traceanime
┃ お ─· .weather
┃ お ─· .presetam
┃ お ─· .soundcloud
┃ お ─· .lyrics
╰──────────── •

╭─ׁ ࣪ ִֶָ☾. *DOWNLOAD MENU* ໒  ֵ  ׄ 
┃ お ─· .play
┃ お ─· .ytaudio
┃ お ─· .ytvideo
┃ お ─· .tiktokmp4
┃ お ─· .tiktokmp3
┃ お ─· .tiktokslide
┃ お ─· .instagram
┃ お ─· .facebook
┃ お ─· .fdown
┃ お ─· .gitclone
┃ お ─· .gdrive
┃ お ─· .savepin
┃ お ─· .mediafire
╰──────────── •

╭─ׁ ࣪ ִֶָ☾. *CONVERTER/TOOLS* ໒  ֵ  ׄ 
┃ お ─· .brat
┃ お ─· .ssweb
┃ お ─· .qc
┃ お ─· .s
┃ お ─· .swm
┃ お ─· .tourl
┃ お ─· .toimage
┃ お ─· .remini
┃ お ─· .upscale
┃ お ─· .fetch
┃ お ─· .toaudio
┃ お ─· .bass
┃ お ─· .blown
┃ お ─· .deep
┃ お ─· .earrape
┃ お ─· .fast
┃ お ─· .fat
┃ お ─· .nightcore
┃ お ─· .reverse
┃ お ─· .robot
┃ お ─· .slow
┃ お ─· .smooth
┃ お ─· .squirrel
╰──────────── •

╭─ׁ ࣪ ִֶָ☾. *STORE MENU* ໒  ֵ  ׄ 
┃ お ─· .updatelist
┃ お ─· .jpm
┃ お ─· .jpm2
┃ お ─· .addlist
┃ お ─· .dellist
┃ お ─· .store
┃ お ─· .list
┃ お ─· .bagi
┃ お ─· .kali
┃ お ─· .kurang
┃ お ─· .tambah
╰──────────── •

╭─ׁ ࣪ ִֶָ☾. *PANEL MENU* ໒  ֵ  ׄ 
┃ お ─· .addsrv
┃ お ─· .addusr
┃ お ─· .listsrv
┃ お ─· .listusr
┃ お ─· .addusradmin
┃ お ─· .restartsrv
┃ お ─· .stopsrv
┃ お ─· .startsrv
┃ お ─· .delusr
┃ お ─· .delsrv
┃ お ─· .1gb - 10gb
┃ お ─· .unli
╰──────────── •

╭─ׁ ࣪ ִֶָ☾. *GAME MENU* ໒  ֵ  ׄ 
┃ お ─· .tebakkabupaten
┃ お ─· .tebakjkt48
┃ お ─· .tebakhewan
┃ お ─· .tebakml
┃ お ─· .tebakchara
┃ お ─· .tebaklogo
┃ お ─· .tebakaplikasi
┃ お ─· .tebakff
┃ お ─· .tebakhero
┃ お ─· .tebakgame
┃ お ─· .tebakgambar
┃ お ─· .tebakbendera
┃ お ─· .lengkapikalimat
┃ お ─· .asahotak
┃ お ─· .tebakkata
┃ お ─· .tebaktebakan
┃ お ─· .tebaklirik
┃ お ─· .tebakkimia
┃ お ─· .tebaksiapa
┃ お ─· .tebakkalimat
╰──────────── •

╭─ׁ ࣪ ִֶָ☾. *FUN MENU* ໒  ֵ  ׄ 
┃ お ─· .checkme
┃ お ─· .mitos
┃ お ─· .faktaunik
┃ お ─· .faktakucing
┃ お ─· .joke
┃ お ─· .suit
┃ お ─· .cekganteng
┃ お ─· .cekcantik
┃ お ─· .cekimut
┃ お ─· .cekjomok
┃ お ─· .cekwaifu
┃ お ─· .cekkpribadian
┃ お ─· .cekmasadepan
┃ お ─· .quotesgalau
┃ お ─· .truth
┃ お ─· .dare
┃ お ─· .apakah
┃ お ─· .bisakah
┃ お ─· .kapankah
┃ お ─· .dimana
┃ お ─· .bagaimana
┃ お ─· .rate
┃ お ─· .soulmate
┃ お ─· .couple
╰──────────── •

╭─ׁ ࣪ ִֶָ☾. *RANDOM ANIME MENU* ໒  ֵ  ׄ 
┃ お ─· .akira
┃ お ─· .akiyama
┃ お ─· .ana
┃ お ─· .art
┃ お ─· .asuna
┃ お ─· .ayuzawa
┃ お ─· .boruto
┃ お ─· .bts
┃ お ─· .chiho
┃ お ─· .chitoge
┃ お ─· .cosplay
┃ お ─· .cosplayloli
┃ お ─· .cosplaysagiri
┃ お ─· .cyber
┃ お ─· .deidara
┃ お ─· .doraemon
┃ お ─· .elaina
┃ お ─· .emilia
┃ お ─· .erza
┃ お ─· .exo
┃ お ─· .gamewallpaper
┃ お ─· .gremory
┃ お ─· .hacker
┃ お ─· .hestia
┃ お ─· .husbu
┃ お ─· .inori
┃ お ─· .islamic
┃ お ─· .isuzu
┃ お ─· .itachi
┃ お ─· .itori
┃ お ─· .jennie
┃ お ─· .jiso
┃ お ─· .justina
┃ お ─· .kaga
┃ お ─· .kagura
┃ お ─· .kakasih
┃ お ─· .kaori
┃ お ─· .cartoon
┃ お ─· .shortquote
┃ お ─· .keneki
┃ お ─· .kotori
┃ お ─· .kurumi
┃ お ─· .lisa
┃ お ─· .loli2
┃ お ─· .madara
┃ お ─· .megumin
┃ お ─· .mikasa
┃ お ─· .mikey
┃ お ─· .miku
┃ お ─· .minato
┃ お ─· .mountain
┃ お ─· .naruto
┃ お ─· .nekonime
┃ お ─· .nezuko
┃ お ─· .onepiece
┃ お ─· .pentol
┃ お ─· .pokemon
┃ お ─· .programming
┃ お ─· .randomnime
┃ お ─· .randomnime2
┃ お ─· .rize
┃ お ─· .rose
┃ お ─· .sagiri
┃ お ─· .sakura
┃ お ─· .sasuke
┃ お ─· .satanic
┃ お ─· .shina
┃ お ─· .shinka
┃ お ─· .shinomiya
┃ お ─· .shizuka
┃ お ─· .shota
┃ お ─· .space
┃ お ─· .technology
┃ お ─· .tejina
┃ お ─· .toukachan
┃ お ─· .tsunade
┃ お ─· .waifu2
┃ お ─· .yotsuba
┃ お ─· .yuki
┃ お ─· .yulibocil
┃ お ─· .yumeko
╰──────────── •

╭─ׁ ࣪ ִֶָ☾. *BUG MENU* ໒  ֵ  ׄ 
┃ お ─· .xandroid
┃ お ─· .xandroid2
┃ お ─· .xios
┃ お ─· .xios2
┃ お ─· .xgc
┃ お ─· .systemuicrash
┃ お ─· .xsysui
╰──────────── •

╭─ׁ ࣪ ִֶָ☾. *RPG MENU* ໒  ֵ  ׄ 
┃ お ─· .daily
┃ お ─· .crafting
┃ お ─· .heal
┃ お ─· .joinrpg
┃ お ─· .kerja
┃ お ─· .merampok
┃ お ─· .memancing
┃ お ─· .repair
┃ お ─· .adventure
┃ お ─· .mining
┃ お ─· .jual
┃ お ─· .beli
┃ お ─· .berburu
┃ お ─· .nebang
┃ お ─· .berlayar
┃ お ─· .inventory
┃ お ─· .redeemdel
┃ お ─· .redeemset
┃ お ─· .redeem
╰──────────── •

╭─ׁ ࣪ ִֶָ☾. PRIVACY MENU ໒  ֵ  ׄ
┃ お ─· .setcallprivacy
┃ お ─· .setlastprivacy
┃ お ─· .setonlineprivacy
┃ お ─· .setprofileprivacy
┃ お ─· .setstatusprivacy
┃ お ─· .setreadreceiptsprivacy
┃ お ─· .setreactionmode
╰──────────── •

╭─ׁ ࣪ ִֶָ☾. NEWSLETTER MENU ໒  ֵ  ׄ
┃ お ─· .setnewsletterdesc
┃ お ─· .setnewslettername
┃ お ─· .setnewsletterpic
┃ お ─· .follownewsletter
┃ お ─· .unfollownewsletter
┃ お ─· .mutenewsletter
┃ お ─· .unmutenewsletter
┃ お ─· .createnewsletter
┃ お ─· .newsletterinfo
╰──────────── •

╭─ׁ ࣪ ִֶָ☾. *AI MENU* ໒  ֵ  ׄ 
┃ お ─· .deepseek
┃ お ─· .dreamshaper
┃ お ─· .flux
┃ お ─· .felo
┃ お ─· .gandalf
┃ お ─· .gemini
┃ お ─· .gemma
┃ お ─· .gpt3
┃ お ─· .gita
┃ お ─· .naw
┃ お ─· .muslimai
┃ お ─· .mistral7b
┃ お ─· .metaai
┃ お ─· .blackboxai
┃ お ─· .claudeai
┃ お ─· .jokoai
┃ お ─· .aishepherd
┃ お ─· .bardai
┃ お ─· .bibleai
┃ お ─· .blackboxai-pro
┃ お ─· .claude-sonnet
┃ お ─· .dbrx-instruct
┃ お ─· .deepseek-llm
┃ お ─· .dreamshaper
┃ お ─· .flux
┃ お ─· .felo
┃ お ─· .gandalf
┃ お ─· .gemini-pro
┃ お ─· .gpt3
┃ お ─· .gita
┃ お ─· .naw
╰──────────── •

╭─ׁ ࣪ ִֶָ☾. *OTHERS MENU* ໒  ֵ  ׄ 
┃ お ─· .daftar
┃ お ─· .unreg
┃ お ─· .ping
┃ お ─· .ipwhois
┃ お ─· .speedtest
┃ お ─· .otakudesu
┃ お ─· .gempa
┃ お ─· .quotesanime
┃ お ─· .githubstalk
┃ お ─· .npmstalk
┃ お ─· .mlstalk
┃ お ─· .runtime
┃ お ─· .donate
┃ お ─· .script
┃ お ─· .repository
┃ お ─· .infobot
┃ お ─· .owner
┃ お ─· .jadibot
┃ お ─· .stopjadibot
┃ お ─· .listjadibot
╰──────────── •
`}

global.ownerMenu = (prefix) => {
return`
╭─ׁ ࣪ ִֶָ☾. *OWNER MENU* ໒  ֵ  ׄ 
┃ お ─· .backup
┃ お ─· .addbadword
┃ お ─· .delbadword
┃ お ─· .listbadword
┃ お ─· .resetdbuser
┃ お ─· .resethit
┃ お ─· .setmenu
┃ お ─· .setreply
┃ お ─· .statustext
┃ お ─· .statusvideo
┃ お ─· .statusimage
┃ お ─· .statusaudio
┃ お ─· .upsaluran
┃ お ─· .setimgmenu
┃ お ─· .setvidmenu
┃ お ─· .addtitle
┃ お ─· .deltitle
┃ お ─· .addlimit
┃ お ─· .dellimit
┃ お ─· .resetlimit
┃ お ─· .resetdblimit
┃ お ─· .adduang
┃ お ─· .deluang
┃ お ─· .resetuang
┃ お ─· .resetdbmoney
┃ お ─· .addpremium
┃ お ─· .delpremium
┃ お ─· .listpremium
┃ お ─· .addowner
┃ お ─· .delowner
┃ お ─· .clearsession
┃ お ─· .clearmedia
┃ お ─· .joingroup
┃ お ─· .outgroup
┃ お ─· .joinchannel
┃ お ─· .outchannel
┃ お ─· .getsession
┃ お ─· .myip
┃ お ─· .shutdown
┃ お ─· .restart
┃ お ─· .kill
┃ お ─· .autoread
┃ お ─· .unavailable
┃ お ─· .autorecordtype
┃ お ─· .autorecord
┃ お ─· .autotype
┃ お ─· .autobio
┃ お ─· .autosticker
┃ お ─· .safesearch
┃ お ─· .autodownload
┃ お ─· .autoblock
┃ お ─· .onlygc
┃ お ─· .onlypc
┃ お ─· .self
┃ お ─· .public
┃ お ─· .setexif
┃ お ─· .setprefix
┃ お ─· .setautoblock
┃ お ─· .setantiforeign
┃ お ─· .pushcontact
┃ お ─· .savecontact
┃ お ─· .sendcontact
┃ お ─· .getcontact
┃ お ─· .contacttag
┃ お ─· .ban
┃ お ─· .unban
┃ お ─· .getcase
┃ お ─· .setppbot
┃ お ─· .deleteppbot
┃ お ─· .setbiobot
┃ お ─· .listpc
┃ お ─· .listgc
┃ お ─· .creategc
┃ お ─· .autoswview
┃ お ─· .anticall
┃ お ─· .addvideo
┃ お ─· .delvideo
┃ お ─· .listvideo
┃ お ─· .addimage
┃ お ─· .delimage
┃ お ─· .listimage
┃ お ─· .addsticker
┃ お ─· .delsticker
┃ お ─· .liststicker
┃ お ─· .addaudio
┃ お ─· .delaudio
┃ お ─· .listaudio
┃ お ─· .addlist
┃ お ─· .dellist
┃ お ─· .ceklist
╰──────────── •
`}

global.groupMenu = (prefix) => {
return`
╭─ׁ ࣪ ִֶָ☾. *GROUP MENU* ໒  ֵ  ׄ 
┃ お ─· .pushcontact
┃ お ─· .savecontact
┃ お ─· .sendcontact
┃ お ─· .getcontact
┃ お ─· .contacttag
┃ お ─· .antibadword
┃ お ─· .nsfw
┃ お ─· .antiaudio
┃ お ─· .antiforeign
┃ お ─· .antisticker
┃ お ─· .antiimage
┃ お ─· .antivideo
┃ お ─· .antiviewonce
┃ お ─· .antispam
┃ お ─· .antimedia
┃ お ─· .antidocument
┃ お ─· .anticontact
┃ お ─· .antilocation
┃ お ─· .antilocation
┃ お ─· .antilink
┃ お ─· .antilinkgc
┃ お ─· .groupinfo
┃ お ─· .mute
┃ お ─· .welcome
┃ お ─· .left
┃ お ─· .adminevent
┃ お ─· .groupevent
┃ お ─· .kick
┃ お ─· .add
┃ お ─· .promote
┃ お ─· .demote
┃ お ─· .setnamegc
┃ お ─· .setppgc
┃ お ─· .deleteppgc
┃ お ─· .setdesk
┃ お ─· .hidetag
┃ お ─· .tagall
┃ お ─· .listonline
┃ お ─· .group
┃ お ─· .editinfo
┃ お ─· .linkgc
┃ お ─· .resetlink
┃ お ─· .afk
┃ お ─· .addlist
┃ お ─· .dellist
┃ お ─· .ceklist
╰──────────── •
`}

global.searchMenu = (prefix) => {
return`
╭─ׁ ࣪ ִֶָ☾. *SEARCH MENU* ໒  ֵ  ׄ 
┃ お ─· .anime
┃ お ─· kusonimeinfo
┃ お ─· kusonimesearch
┃ お ─· otakudesu
┃ お ─· jkt48news
┃ お ─· mangainfo
┃ お ─· mangadetail
┃ お ─· .imdb
┃ お ─· .bukalapak
┃ お ─· .playstore
┃ お ─· .umma
┃ お ─· .happymod
┃ お ─· .ytsearch
┃ お ─· .tiktoksearch
┃ お ─· .pinterest
┃ お ─· .wallpaper
┃ お ─· .wikipedia
┃ お ─· .wikimedia
┃ お ─· .ringtone
┃ お ─· .traceanime
┃ お ─· .weather
┃ お ─· .presetam
┃ お ─· .soundcloud
┃ お ─· .lyrics
╰──────────── •
`}

global.downloadMenu = (prefix) => {
return`
╭─ׁ ࣪ ִֶָ☾. *DOWNLOAD MENU* ໒  ֵ  ׄ 
┃ お ─· .play
┃ お ─· .ytaudio
┃ お ─· .ytvideo
┃ お ─· .tiktokmp4
┃ お ─· .tiktokmp3
┃ お ─· .tiktokslide
┃ お ─· .instagram
┃ お ─· .facebook
┃ お ─· .fdown
┃ お ─· .gitclone
┃ お ─· .gdrive
┃ お ─· .savepin
┃ お ─· .mediafire
╰──────────── •
`}

global.convertMenu = (prefix) => {
return`
╭─ׁ ࣪ ִֶָ☾. *CONVERTER/TOOLS* ໒  ֵ  ׄ 
┃ お ─· .brat
┃ お ─· .ssweb
┃ お ─· .qc
┃ お ─· .s
┃ お ─· .swm
┃ お ─· .tourl
┃ お ─· .toimage
┃ お ─· .remini
┃ お ─· .fetch
┃ お ─· .toaudio
┃ お ─· .bass
┃ お ─· .blown
┃ お ─· .deep
┃ お ─· .earrape
┃ お ─· .fast
┃ お ─· .fat
┃ お ─· .nightcore
┃ お ─· .reverse
┃ お ─· .robot
┃ お ─· .slow
┃ お ─· .smooth
┃ お ─· .squirrel
╰──────────── •
`}

global.storeMenu = (prefix) => {
return`
╭─ׁ ࣪ ִֶָ☾. *STORE MENU* ໒  ֵ  ׄ 
┃ お ─· .updatelist
┃ お ─· .jpm
┃ お ─· .jpm2
┃ お ─· .addlist
┃ お ─· .dellist
┃ お ─· .store
┃ お ─· .list
┃ お ─· .bagi
┃ お ─· .kali
┃ お ─· .kurang
┃ お ─· .tambah
╰──────────── •
`}

global.panelMenu = (prefix) => {
return`
╭─ׁ ࣪ ִֶָ☾. *PANEL MENU* ໒  ֵ  ׄ 
┃ お ─· .addsrv
┃ お ─· .addusr
┃ お ─· .listsrv
┃ お ─· .listusr
┃ お ─· .addusradmin
┃ お ─· .restartsrv
┃ お ─· .stopsrv
┃ お ─· .startsrv
┃ お ─· .delusr
┃ お ─· .delsrv
┃ お ─· .1gb - 10gb
┃ お ─· .unli
╰──────────── •
`}

global.gameMenu = (prefix) => {
return`
╭─ׁ ࣪ ִֶָ☾. *GAME MENU* ໒  ֵ  ׄ 
┃ お ─· .tebakkabupaten
┃ お ─· .tebakjkt48
┃ お ─· .tebakhewan
┃ お ─· .tebakml
┃ お ─· .tebakchara
┃ お ─· .tebaklogo
┃ お ─· .tebakaplikasi
┃ お ─· .tebakff
┃ お ─· .tebakhero
┃ お ─· .tebakgame
┃ お ─· .tebakgambar
┃ お ─· .tebakbendera
┃ お ─· .lengkapikalimat
┃ お ─· .asahotak
┃ お ─· .tebakkata
┃ お ─· .tebaktebakan
┃ お ─· .tebaklirik
┃ お ─· .tebakkimia
┃ お ─· .tebaksiapa
┃ お ─· .tebakkalimat
╰──────────── •
`}

global.funMenu = (prefix) => {
return`
╭─ׁ ࣪ ִֶָ☾. *FUN MENU* ໒  ֵ  ׄ 
┃ お ─· .checkme
┃ お ─· .mitos
┃ お ─· .faktaunik
┃ お ─· .faktakucing
┃ お ─· .joke
┃ お ─· .suit
┃ お ─· .cekganteng
┃ お ─· .cekcantik
┃ お ─· .cekimut
┃ お ─· .cekjomok
┃ お ─· .cekwaifu
┃ お ─· .cekkpribadian
┃ お ─· .cekmasadepan
┃ お ─· .quotesgalau
┃ お ─· .truth
┃ お ─· .dare
┃ お ─· .apakah
┃ お ─· .bisakah
┃ お ─· .kapankah
┃ お ─· .dimana
┃ お ─· .bagaimana
┃ お ─· .rate
┃ お ─· .soulmate
┃ お ─· .couple
╰──────────── •
`}

global.randomAnimeMenu = (prefix) => {
return`
╭─ׁ ࣪ ִֶָ☾. *RANDOM ANIME MENU* ໒  ֵ  ׄ 
┃ お ─· .akira
┃ お ─· .akiyama
┃ お ─· .ana
┃ お ─· .art
┃ お ─· .asuna
┃ お ─· .ayuzawa
┃ お ─· .boruto
┃ お ─· .bts
┃ お ─· .chiho
┃ お ─· .chitoge
┃ お ─· .cosplay
┃ お ─· .cosplayloli
┃ お ─· .cosplaysagiri
┃ お ─· .cyber
┃ お ─· .deidara
┃ お ─· .doraemon
┃ お ─· .elaina
┃ お ─· .emilia
┃ お ─· .erza
┃ お ─· .exo
┃ お ─· .gamewallpaper
┃ お ─· .gremory
┃ お ─· .hacker
┃ お ─· .hestia
┃ お ─· .husbu
┃ お ─· .inori
┃ お ─· .islamic
┃ お ─· .isuzu
┃ お ─· .itachi
┃ お ─· .itori
┃ お ─· .jennie
┃ お ─· .jiso
┃ お ─· .justina
┃ お ─· .kaga
┃ お ─· .kagura
┃ お ─· .kakasih
┃ お ─· .kaori
┃ お ─· .cartoon
┃ お ─· .shortquote
┃ お ─· .keneki
┃ お ─· .kotori
┃ お ─· .kurumi
┃ お ─· .lisa
┃ お ─· .loli2
┃ お ─· .madara
┃ お ─· .megumin
┃ お ─· .mikasa
┃ お ─· .mikey
┃ お ─· .miku
┃ お ─· .minato
┃ お ─· .mountain
┃ お ─· .naruto
┃ お ─· .nekonime
┃ お ─· .nezuko
┃ お ─· .onepiece
┃ お ─· .pentol
┃ お ─· .pokemon
┃ お ─· .programming
┃ お ─· .randomnime
┃ お ─· .randomnime2
┃ お ─· .rize
┃ お ─· .rose
┃ お ─· .sagiri
┃ お ─· .sakura
┃ お ─· .sasuke
┃ お ─· .satanic
┃ お ─· .shina
┃ お ─· .shinka
┃ お ─· .shinomiya
┃ お ─· .shizuka
┃ お ─· .shota
┃ お ─· .space
┃ お ─· .technology
┃ お ─· .tejina
┃ お ─· .toukachan
┃ お ─· .tsunade
┃ お ─· .waifu2
┃ お ─· .yotsuba
┃ お ─· .yuki
┃ お ─· .yulibocil
┃ お ─· .yumeko
╰──────────── •
`}

global.bugMenu = (prefix) => {
return`
╭─ׁ ࣪ ִֶָ☾. *BUG MENU* ໒  ֵ  ׄ 
┃ お ─· .xandroid
┃ お ─· .xandroid2
┃ お ─· .xios
┃ お ─· .xios2
┃ お ─· .xgc
┃ お ─· .systemuicrash
┃ お ─· .xsysui
╰──────────── •
`}

global.rpgMenu = (prefix) => {
return`
╭─ׁ ࣪ ִֶָ☾. *RPG MENU* ໒  ֵ  ׄ 
┃ お ─· .daily
┃ お ─· .crafting
┃ お ─· .heal
┃ お ─· .joinrpg
┃ お ─· .kerja
┃ お ─· .merampok
┃ お ─· .memancing
┃ お ─· .repair
┃ お ─· .adventure
┃ お ─· .mining
┃ お ─· .jual
┃ お ─· .beli
┃ お ─· .berburu
┃ お ─· .nebang
┃ お ─· .berlayar
┃ お ─· .inventory
┃ お ─· .redeemdel
┃ お ─· .redeemset
┃ お ─· .redeem
╰──────────── •
`}

global.privacyMenu = (prefix) => {
return`
╭─ׁ ࣪ ִֶָ☾. PRIVACY MENU ໒  ֵ  ׄ
┃ お ─· .setcallprivacy
┃ お ─· .setlastprivacy
┃ お ─· .setonlineprivacy
┃ お ─· .setprofileprivacy
┃ お ─· .setstatusprivacy
┃ お ─· .setreadreceiptsprivacy
┃ お ─· .setreactionmode
╰──────────── •
`}

global.newsletterMenu = (prefix) => {
return`
╭─ׁ ࣪ ִֶָ☾. NEWSLETTER MENU ໒  ֵ  ׄ
┃ お ─· .setnewsletterdesc
┃ お ─· .setnewslettername
┃ お ─· .setnewsletterpic
┃ お ─· .follownewsletter
┃ お ─· .unfollownewsletter
┃ お ─· .mutenewsletter
┃ お ─· .unmutenewsletter
┃ お ─· .createnewsletter
┃ お ─· .newsletterinfo
╰──────────── •
`}

global.aiMenu = (prefix) => {
return`
╭─ׁ ࣪ ִֶָ☾. *AI MENU* ໒  ֵ  ׄ 
┃ お ─· .deepseek
┃ お ─· .dreamshaper
┃ お ─· .flux
┃ お ─· .felo
┃ お ─· .gandalf
┃ お ─· .gemini
┃ お ─· .gemma
┃ お ─· .gpt3
┃ お ─· .gita
┃ お ─· .naw
┃ お ─· .muslimai
┃ お ─· .mistral7b
┃ お ─· .metaai
┃ お ─· .blackboxai
┃ お ─· .claudeai
┃ お ─· .jokoai
┃ お ─· .aishepherd
┃ お ─· .bardai
┃ お ─· .bibleai
┃ お ─· .blackboxai-pro
┃ お ─· .claude-sonnet
┃ お ─· .dbrx-instruct
┃ お ─· .deepseek-llm
┃ お ─· .dreamshaper
┃ お ─· .flux
┃ お ─· .felo
┃ お ─· .gandalf
┃ お ─· .gemini-pro
┃ お ─· .gpt3
┃ お ─· .gita
┃ お ─· .naw
╰──────────── •
`}

global.otherMenu = (prefix) => {
return`
╭─ׁ ࣪ ִֶָ☾. *OTHERS MENU* ໒  ֵ  ׄ 
┃ お ─· .daftar
┃ お ─· .unreg
┃ お ─· .ping
┃ お ─· .ipwhois
┃ お ─· .speedtest
┃ お ─· .otakudesu
┃ お ─· .kusonimeinfo
┃ お ─· .kusonimesearch
┃ お ─· .quotesanime
┃ お ─· .gempa
┃ お ─· .githubstalk
┃ お ─· .npmstalk
┃ お ─· .mlstalk
┃ お ─· .runtime
┃ お ─· .donate
┃ お ─· .script
┃ お ─· .repository
┃ お ─· .infobot
┃ お ─· .owner
┃ お ─· .jadibot
┃ お ─· .stopjadibot
┃ お ─· .listjadibot
╰──────────── •
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})