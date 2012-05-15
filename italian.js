function l (msg) {
	// console.log(msg);
}

function Dict() {
	this.pronoun = [
		['io','я'],
		['tu','ты'],
		['lui','он'],
		['lei','она'],
		['lei','Вы'],
		['noi','мы'],
		['voi','вы (множ.)'],
		['loro','они']
	];

	this.verb = [
		[
			['parlo', 'говорю'],
			['parli', 'говоришь'],
			['parla', 'говорит'],
			['parla', 'говорит'],
			['parla', 'говорите'],
			['parliamo', 'говорим'],
			['parlate', 'говорите'],
			['parlano', 'говорят'],
		],
		[
			['mango', 'ем'],
			['mangi', 'ешь'],
			['manga', 'ест'],
			['manga', 'ест'],
			['manga', 'едите'],
			['mangiamo', 'едим'],
			['mangate', 'едите'],
			['mangano', 'едят']
		],
		[
			['guardo', 'смотрю'],
			['guardi', 'смотришь'],
			['guarda', 'смотрит'],
			['guarda', 'смотрит'],
			['guarda', 'смотрите'],
			['guardiamo', 'смотрим'],
			['guardate', 'смотрите'],
			['guardano', 'смотрят']
		],
		[
			['gioco', 'играю'],
			['gioci', 'играешь'],
			['gioca', 'играет'],
			['gioca', 'играет'],
			['gioca', 'играете'],
			['giociamo', 'играем'],
			['giocate', 'играете'],
			['giocano', 'играют']
		],
		[
			['lavoro', 'работаю'],
			['lavori', 'работаешь'],
			['lavora', 'работает'],
			['lavora', 'работает'],
			['lavora', 'работаете'],
			['lavoriamo', 'работаем'],
			['lavorate', 'работаете'],
			['lavorano', 'работают']
		],
		[
			['amo', 'люблю'],
			['ami', 'любишь'],
			['ama', 'любит'],
			['ama', 'любит'],
			['ama', 'любите'],
			['amiamo', 'любим'],
			['amate', 'любите'],
			['amano', 'любят']
		],
		[
			['ascolto', 'слушаю'],
			['ascolti', 'слушаешь'],
			['ascolta', 'слушает'],
			['ascolta', 'слушает'],
			['ascolta', 'слушаете'],
			['ascoltiamo', 'слушаем'],
			['ascoltate', 'слушаете'],
			['ascoltano', 'слушают']
		],
		[
			['imparo', 'учу'],
			['impari', 'учишь'],
			['impara', 'учит'],
			['impara', 'учит'],
			['impara', 'учите'],
			['impariamo', 'учим'],
			['imparate', 'учите'],
			['imparano', 'учат']
		],
		[
			['abito', 'живу'],
			['abiti', 'живешь'],
			['abita', 'живет'],
			['abita', 'живет'],
			['abita', 'живете'],
			['abitiamo', 'живем'],
			['abitate', 'живете'],
			['abitano', 'живут']
		]
	];

	this.not = [
		['non','не']
	]
}




function get_val(arr,token,vars) {
	var parse = /\[(\d+|\?|\w)\]/.exec(token);
	// token
	var part = parse[0];
	// index
	var index = parse[1];
	if (index === '?') {
		index = Math.round(Math.random()*(arr.length-1));
	}
	// handle vars
	if (isNaN(index)) {
		// fucking magic!! cuz' 0 is false but '0' is true
		vars[index] = vars[index] || (vars[index] == 0 && '0') || Math.round(Math.random()*(arr.length-1));
		l(index+':'+vars[index]);
		index = vars[index];		

	}

	// cut parsed
	var token = token.replace(part,'');

	//get value
	var value = arr[index];

	if (value.constructor === Array && 
		value[0].constructor === String
		) {
		value[2] = vars;
		return value;
	} else {
		return get_val(value,token,vars);
	}
}


function get_strings(dict) {
	var templates = [
		'<pronoun[x]> <not> <verb[?][x]>',
		'<pronoun[x]> <verb[?][x]>'
	];

	var template = templates[Math.round(Math.random()*(templates.length-1))];	
	var vars = {};
	l(template);

	var words = template.match(/<\S+>/g);
	var result = {
		0:template,
		1:template,
	}

	var rnd = 0;//Math.round(Math.random())

	for (var i=0;i<words.length;i++) {
		var word_token_orig = words[i];
		var word_token = words[i];
		// handle tokens without brackets
		word_token = word_token.replace(/(\w)>/,'$1[?]>');
		var type = word_token.match(/<(\w+)\[/)[1];
		var index_token = word_token.match(/\[.*\]/)[0];

		var word = get_val(dict[type],index_token,vars);
		vars = word[2];

		result[0] = result[0].replace(word_token_orig,word[1-rnd]);
		result[1] = result[1].replace(word_token_orig,word[rnd]);
	}
	return result;
}


// utils
var verb_root = ['mang', 'guard', 'gioc', 'lavor', 'am', 'ascolt', 'impar', 'abit'];

function gen (verb) {
	console.log('[')
	var verb_mod = {
		io:'o',
		tu:'i',
		lei:'a',
		Lei:'a',
		noi:'iamo',
		voi:'ate',
		loro:'ano'
	};

	for (var i in verb_mod) {
		console.log("['"+verb+verb_mod[i]+"', ''],");
	};
	console.log('],')
}