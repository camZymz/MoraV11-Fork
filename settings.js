const fs = require('fs');
const chalk = require('chalk');

global.botName = 'moraAI version 11'; // Nama Bot Kamu
global.ownerNumber = '6285520728156'; // Nomor Kamu
global.ownerName = 'Your Name'; // Nama Kamu
global.website = 'https://www.example.my.id'; // Web Kamu
global.wagc = 'https://www.example.my.id'; // Web Kamu

global.packname = botName; // Nama Pack
global.author = ownerName; // Nama Author
global.footer = '© 2025 • K.R team';
global.creator = '6283119115977@s.whatsapp.net'; // Nomor Creator
global.premium = ['6285520728156']; // User Premium
global.prefa = '.'; // Prefix
global.tempatDB = 'database.json'; // Tempat Database

global.saluran = '0@newsletter'; // ID Saluran Kamu
global.saluranName = ownerName; // Nama Saluran Kamu
global.sessionName = 'session'; // Nama Folder Sesi Bot Kamu

global.panel = ''; // Link Panel Kamu
global.cred = ''; // API PTLA Kamu
global.apiuser = ''; // API PTLC Kamu
global.eggs = '15'; // Eggs Number (Recommended)
global.nets = '5'; // Nets Number (Recommended)
global.location = '1'; // Location Number (Recommended)

global.typereply = 'v4'; // Gaya Reply v1-v4
global.autoblocknumber = '62'; // Auto Block Number
global.antiforeignnumber = '62'; // Anti Foreign Number
global.welcome = false // Auto Welcome Msg
global.anticall = true // Anti Call
global.autoswview = true // Auto View Status
global.adminevent = false // Admin Event Msg
global.groupevent = false // Group Event Msg
global.notifRegister = false // Notif Register
global.onlyRegister = false // Hanya Pendaftar
global.autoClearSesi = false // Otomatis hapus file sesi setiap 1 jam
global.autoClearTmp = true // Otomatis hapus file temp setiap 1 jam

global.payment = {
	dana: "0815-4849-6371",
	gopay: "0855-2072-8156",
	ovo: "0855-2072-8156",
	qris: "https://files.catbox.moe/sofmb4.jpg",
	shopeePay: "0855-2072-8156",
	seabank: "0855-2072-8156"
};

global.limit = {
	free: 20, // Limit User Non-premium
	premium: 1000, // Limit User Premium
	vip: "VIP" // Limit User VIP 👑
};

global.uang = {
	free: 1000, // Uang User Non-premium
	premium: 1000000, // Uang User Premium
	vip: 1000000 // Uang User VIP 👑
};

global.bot = {
	limit: 0, // Limit Awal Bot
	uang: 0 // Uang Awal Bot
};

global.game = {
	suit: {}, // Sesi Game Suit
	menfes: {}, // Sesi Menfess
	tictactoe: {}, // Sesi Tictactoe
	kuismath: {}, // Sesi Kuis Mathematics
	tebakbom: {}, // Sesi Tebak Bom
};

global.mess = {
	admin: "Fitur ini khusus buat admin aja ya, Kak! 🫢",
	botAdmin: "Mora harus jadi admin dulu biar bisa jalanin ini! 😭",
	done: "Done Kak! ✨",
	error: "Eh, ada yang salah nih... coba lagi ya, Kak! 😖",
	group: "Eits, fitur ini cuma bisa dipakai di grup~ 🫡",
	limit: "Yah, limit penggunaan kakak udah habis... 😢\n\nCoba ketik .buy untuk membeli dan menambah limit, atau upgrade ke premium untuk mendapat limit banyak dan akses ke fitur spesial! ✨",
	noCmd: "Hmm... perintahnya gak ada di daftar Mora nih. Coba cek lagi ya, Kak! 🤔",
	nsfw: "Fitur NSFW dimatikan di grup ini, coba minta izin ke admin dulu ya~ 🫣",
	owner: "Hanya pemilik yang bisa akses fitur ini, Kak! 👑",
	premium: "Fitur ini cuma buat pengguna premium, Kak! 🌟",
	private: "Fitur ini cuma bisa dipakai di chat pribadi, Kak! 💌",
	success: "Yeay, berhasil! 🎉",
	wait: "Tunggu sebentar ya, Kak... Mora lagi proses nih! ⏳🤗"
};

global.imageDonasi = "https://files.catbox.moe/sofmb4.jpg"; // Url Image Donasi (dana, qris etc..)
global.imageUrl = "https://files.catbox.moe/9elez2.jpg"; // Url Image
global.imageBuffer = fs.readFileSync("./media/image.jpg"); // Buffer Image

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})