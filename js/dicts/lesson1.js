Dicts[1] = Dict_1;
Templates[1] = [
		[3,'<pronoun[x]> (<not>) <verb[?][x]>'],
		[3,'<pronoun[x]> (<not>) <help_verb[x]> <verb_past[?][x]>'],
		
		// // questions in present 
		[1,'<question_neutral[?]> <verb[?][2]>?'],
		[3,'<question_direct[?]> <pronoun[x]> <verb[?][x]>?'],

		// questions in past
		[1,'<question_neutral[?]> (<not>) <help_verb[2]> <verb_past[?][2]>?'],
		[3,'<question_direct[?]> <pronoun[x]> (<not>) <help_verb[x]> <verb_past[?][x]>?'],
	];

function Dict_1() {

	this.helpers = {
		местоимения: [
			['io','я'],
			['tu','ты'],
			['lui','он'],
			['lei','она'],
			['Lei','Вы'],
			['noi','мы'],
			['voi','вы (множ.)'],
			['loro','они'],
		],

		глаголы: [
			['mangiare','есть'],
			['guardare','смотреть'],
			['giocare','играть'],
			['lavorare','работать'],
			['amare','любить'],
			['ascoltare','слушать'],
			['imparare','учить, узнавать'],
			['abitare','жить'],
		],

		вопросы: [
			['Chi','Кто'],
			['Che cosa','Что'],
			['Dove','Где'],
			['Quando','Когда'],
			['Perche','Зачем'],
			['Come','Как'],
			['Quanto','Сколько'],			
		],

		"глагол avere":[
			['io ho','я имею'],
			['tu hai','ты имеешь'],
			['lui ha','он имеет'],
			['lei ha','она имеет'],
			['Lei ha','Вы имеете'],
			['noi abbiamo','мы имеем'],
			['voi avete','вы имеете'],
			['loro hanno','они имеют'],
		]
	}



	this.pronoun = [
		['io','я'],
		['tu','ты'],
		['lui','он'],
		['lei','она'],
		['Lei','Вы (уваж.)'],
		['noi','мы'],
		['voi','вы (множ.)'],
		['loro','они']
	];

	this.help_verb = [
		['ho',''],
		['hai',''],
		['ha',''],
		['ha',''],
		['ha',''],
		['abbiamo',''],
		['avete',''],
		['hanno','']
	];

	this.question_neutral = [
		['Chi','Кто'],
		
	];

	this.question_direct = [
		['Che cosa','Что'],		
		['Dove','Где'],
		['Quando','Когда'],
		['Perche','Зачем'],
		['Come','Как'],
		['Quanto','Сколько'],
	]


	this.verb_inf = [		
			['parla', 'говорит'],		
			['mangiare', 'ест'],		
			['guardare', 'смотрит'],		
			['giocare', 'играет'],		
			['lavorare', 'работает'],		
			['amare', 'любит'],		
			['ascoltare', 'слушает'],		
			['imparare', 'учит'],		
			['abitare', 'живет']		
	]

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
			['mangia', 'ест'],
			['mangia', 'ест'],
			['mangia', 'едите'],
			['mangiamo', 'едим'],
			['mangate', 'едите'],
			['mangano', 'едят']
		],
		[
			['guardato', 'смотрю'],
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

	this.verb_past = [
		[
			['parlato', 'говорил'],
			['parlato', 'говорил'],
			['parlato', 'говорил'],
			['parlato', 'говорилa'],
			['parlato', 'говорили'],
			['parlato', 'говорили'],
			['parlato', 'говорили'],
			['parlato', 'говорили'],
		],
		[
			['mangiato', 'ел'],
			['mangiato', 'ел'],
			['mangiato', 'ел'],
			['mangiato', 'елa'],
			['mangiato', 'ели'],
			['mangiato', 'ели'],
			['mangiato', 'ели'],
			['mangiato', 'ели'],
		],
		[
			['guardato', 'смотрел'],
			['guardato', 'смотрел'],
			['guardato', 'смотрел'],
			['guardato', 'смотрелa'],
			['guardato', 'смотрели'],
			['guardato', 'смотрели'],
			['guardato', 'смотрели'],
			['guardato', 'смотрели'],
		],
		[
			['giocato', 'играл'],
			['giocato', 'играл'],
			['giocato', 'играл'],
			['giocato', 'игралa'],
			['giocato', 'играли'],
			['giocato', 'играли'],
			['giocato', 'играли'],
			['giocato', 'играли'],
		],
		[
			['lavorato', 'работал'],
			['lavorato', 'работал'],
			['lavorato', 'работал'],
			['lavorato', 'работалa'],
			['lavorato', 'работали'],
			['lavorato', 'работали'],
			['lavorato', 'работали'],
			['lavorato', 'работали'],
		],
		[
			['amato', 'любил'],
			['amato', 'любил'],
			['amato', 'любил'],
			['amato', 'любилa'],
			['amato', 'любили'],
			['amato', 'любили'],
			['amato', 'любили'],
			['amato', 'любили'],
		],
		[
			['ascoltato', 'слушал'],
			['ascoltato', 'слушал'],
			['ascoltato', 'слушал'],
			['ascoltato', 'слушалa'],
			['ascoltato', 'слушали'],
			['ascoltato', 'слушали'],
			['ascoltato', 'слушали'],
			['ascoltato', 'слушали'],
		],
		[
			['imparato', 'учил'],
			['imparato', 'учил'],
			['imparato', 'учил'],
			['imparato', 'училa'],
			['imparato', 'учили'],
			['imparato', 'учили'],
			['imparato', 'учили'],
			['imparato', 'учили'],
		],
		[
			['abitato', 'жил'],
			['abitato', 'жил'],
			['abitato', 'жил'],
			['abitato', 'жилa'],
			['abitato', 'жили'],
			['abitato', 'жили'],
			['abitato', 'жили'],
			['abitato', 'жили'],
		]
	];

	this.not = [
		['non','не']
	]
}
