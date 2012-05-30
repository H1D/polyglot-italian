Dicts[3] = Dict_3;
Templates[3] = [
		// [1,'<pronoun[x]> (<not>) <verb[?][x]>'],
		// [1,'<pronoun[x]> (<not>) <help_verb[x]> <verb_past[?][x]>'],
		
		// // // questions in present 
		// [1,'<question_neutral[?]> <verb[?][2]>?'],
		// [1,'<question_direct[?]> <pronoun[x]> <verb[?][x]>?'],

		// // questions in past
		// [1,'<question_neutral[?]> (<not>) <help_verb[2]> <verb_past[?][2]>?'],
		// [1,'<question_direct[?]> <pronoun[x]> (<not>) <help_verb[x]> <verb_past[?][x]>?'],

		// // lesson2
		// [1,'<pronoun[x]> (<not>) <verb[y][x]>, <conjunction[?]> (<pronoun[x]>) (<not>) <verb[!y][x]>?'],
		// [1,'<pronoun[x]> (<not>) <verb[y][x]>, <conjunction[?]> (<pronoun[x]>) (<not>) <verb[!y][x]>'],

		// [1,'<question_neutral[?]> <be[x]> <pronoun[x]>?'],
		// [1,'<question_direct[1]> <be[x=[!2:4]]> <pronoun[x]>?'],
		// [1,'<question_direct[1]> <pronoun[x=[2:4]]> <be[x]>?'],
	
		// new
		[6,'<pronoun[x]> (<not>) <wonna[x]> <verb[?][x]>'],
		[6,'<question_direct> <wonna[x]> <verb_inf>?'],
		[6,'<pronoun[x]> <not> <wonna[x]> <avere un probleme>'],

		[6,'<pronoun[x]> <know[x]> <verb_inf> <adverb[!0,!3]>'],

		[6,'<modi_word[?]>'],
	];


function Dict_3() {

	this.helpers = {
		'глаголы (новые)': [
			['sperare', 'надеяться'],
			['aiutare', 'помогать'],
			['insegnare', 'учить'],
			['provare', 'пробовать'],
			['cercare', 'искать'],
			['trovare', 'находить'],
			['cantare', 'петь'],
			['pensare', 'думать']
		],

		'глагол volere':[
			['io voglio','я хочу'],
			['tu vuoi','ты хочешь'],
			['lui vuole','он хочет'],
			['lei vuole','она хочет'],
			['Lei vuole','Вы хотите'],
			['noi vogliamo','мы хотим'],
			['voi volete','вы хотите'],
			['loro vogliono','они хотят'],
		],

		'глагол sapere':[
			['io so','я знаю'],
			['tu sai','ты знаешь'],
			['lui sa','он знает'],
			['lei sa','она знает'],
			['Lei sa','Вы знаете'],
			['noi sappiamo','мы знаем'],
			['voi sapete','вы знаете'],
			['loro sanno','они знают'],
		],

		'буквосочетания':[
			['~х~', '-'],
			['~кт', 'tt'],
			['~ге~', 'ge'],
			['~ги~', 'gi'],
			['~ция', 'zione'],
			['~зия', 'sione'],
			['~ссия', 'ssione'],
			['~альный', 'ale'],
			['~ивный', 'ivo'],
			['~ический', 'ico'],
			['~ичный', 'ico']			
		]
	}

	this.wonna = [
		['voglio','хочу'],
		['vuoi','хочешь'],
		['vuole','хочет'],
		['vuole','хочет'],
		['vuole','хотите'],
		['vogliamo','хотим'],
		['volete','хотите'],
		['vogliono','хотят'],
	];

	this.know = [
		['so','умею'],
		['sai','умеешь'],
		['sa','умеет'],
		['sa','умеет'],
		['sa','умеете'],
		['sappiamo','умеем'],
		['sapete','умеете'],
		['sanno','умеют'],
	];

	this.conjunction = [
		['e','и'],
		['o','или'],
		['ma','но'],
		['se','если'],
		['perche','потому что'],
	];

	this.modi_word = [
		['modernizzazione', 'модернизация'],
		['innovazione', 'инновация'],
		['emozione', 'эмоция'],
		['nazione', 'нация'],
		['provocazione', 'провокация'],
		['meditazione', 'медитация'],
		['intonazione', 'интонация'],
		['realizazione', 'реализация'],
		['effetivo', 'эффективный'],
		['individuale', 'индивидуальный'],
		['normale', 'нормальный'],
		['ideale', 'идеальный'],
		['professionale', 'профессиональный'],
		['professione', 'профессия'],
		['costruttivo', 'конструктивный'],
		['obiettivo', 'объективный'],
		['logico', 'логический'],
		['tecnico', 'технический'],
		['economico', 'экономический'],
		['politico', 'политический']
	];

	this.stuff = [
		['tavolo','стол'],
		['sedia','стул'],
		['porta','дверь'],
		['letto','кровать'],
		['libro','книгу'],
	];

	this.be = [
		['sono',''],
		['sei',''],
		['é',''],
		['é',''],
		['é',''],
		['siamo',''],
		['siato',''],
		['sono',''],
	],

	this.do = [
		['faccio','делаю'],
		['fai','делаешь'],
		['fa','делает'],
		['fa','делает'],
		['fa','делаете'],
		['facciamo','делаем'],
		['fate','делаете'],
		['fanno','делают'],
	]

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
		['sperare', 'надеяться'],
		['aiutare', 'помогать'],
		['insegnare', 'учить'],
		['provare', 'пробовать'],
		['cercare', 'искать'],
		['trovare', 'находить'],
		['cantare', 'петь'],
		['pensare', 'думать']		
	]

	this.adverb = [
		['molto bene', 'хорошо'],
		['molto bene', 'очень хорошо'],
		['male', 'плохо'],
		['così così', 'так себе'],		
	]

	this.verb = [
		[
			['spero', 'надеяюсь'],
			['speri', 'надеяешься'],
			['spera', 'надеется'],
			['spera', 'надеется'],
			['spera', 'надеетесь'],
			['speriamo', 'надеемся'],
			['sperate', 'надеетесь'],
			['sperano', 'надеются'],
		],
		[ 
			['aiuto', 'помогаю'],
			['aiuti', 'помогаешь'],
			['aiuta', 'помогает'],
			['aiuta', 'помогает'],
			['aiuta', 'помогаете'],
			['aiutiamo', 'помогаем'],
			['aiutate', 'помогаете'],
			['aiutano', 'помогают'],
		],
		[ 
			['insegno', 'обучаю'],
			['insegni', 'обучаешь'],
			['insegna', 'обучает'],
			['insegna', 'учобучаетит'],
			['insegna', 'обучаете'],
			['insegniamo', 'обучаем'],
			['insegnate', 'обучаете'],
			['insegnano', 'обучают'],
		],
		[ 
			['provo', 'пробую'],
			['provi', 'пробуешь'],
			['prova', 'пробует'],
			['prova', 'пробует'],
			['prova', 'пробуете'],
			['proviamo', 'пробуем'],
			['provate', 'пробуете'],
			['provano', 'пробуют'],
		],
		[ 
			['cerco', 'ищу'],
			['cerci', 'ищешь'],
			['cerca', 'ищет'],
			['cerca', 'ищет'],
			['cerca', 'ищете'],
			['cerciamo', 'ищем'],
			['cercate', 'ищете'],
			['cercano', 'ищут'],
		],
		[ 
			['trovo', 'нахожу'],
			['trovi', 'находишь'],
			['trova', 'находит'],
			['trova', 'находит'],
			['trova', 'находите'],
			['troviamo', 'находим'],
			['trovate', 'находите'],
			['trovano', 'находят'],
		],
		[ 
			['canto', 'пою'],
			['canti', 'поёшь'],
			['canta', 'поёт'],
			['canta', 'поёт'],
			['canta', 'поёте'],
			['cantiamo', 'поём'],
			['cantate', 'поёте'],
			['cantano', 'поют'],
		],
		[ 
			['penso', 'думаю'],
			['pensi', 'думаешь'],
			['pensa', 'думает'],
			['pensa', 'думает'],
			['pensa', 'думаете'],
			['pensiamo', 'думаем'],
			['pensate', 'думаете'],
			['pensano', 'думают'],
		]
	];

	this.verb_past = [
		[
			['sperato', 'надеялся'],
			['sperato', 'надеялся'],
			['sperato', 'надеялся'],
			['sperato', 'надеялась'],
			['sperato', 'надеялись'],
			['sperato', 'надеялись'],
			['sperato', 'надеялись'],
			['sperato', 'надеялись'],
		],
		[
			['aiutato', 'помогал'],
			['aiutato', 'помогал'],
			['aiutato', 'помогал'],
			['aiutato', 'помогалa'],
			['aiutato', 'помогали'],
			['aiutato', 'помогали'],
			['aiutato', 'помогали'],
			['aiutato', 'помогали'],
		],
		[
			['insegnato', 'учил'],
			['insegnato', 'учил'],
			['insegnato', 'учил'],
			['insegnato', 'училa'],
			['insegnato', 'учили'],
			['insegnato', 'учили'],
			['insegnato', 'учили'],
			['insegnato', 'учили'],
		],
		[
			['provato', 'пробовал'],
			['provato', 'пробовал'],
			['provato', 'пробовал'],
			['provato', 'пробовалa'],
			['provato', 'пробовали'],
			['provato', 'пробовали'],
			['provato', 'пробовали'],
			['provato', 'пробовали'],
		],
		[
			['cercato', 'искал'],
			['cercato', 'искал'],
			['cercato', 'искал'],
			['cercato', 'искалa'],
			['cercato', 'искали'],
			['cercato', 'искали'],
			['cercato', 'искали'],
			['cercato', 'искали'],
		],
		[
			['trovato', 'находил'],
			['trovato', 'находил'],
			['trovato', 'находил'],
			['trovato', 'находилa'],
			['trovato', 'находили'],
			['trovato', 'находили'],
			['trovato', 'находили'],
			['trovato', 'находили'],
		],
		[
			['cantato', 'пел'],
			['cantato', 'пел'],
			['cantato', 'пел'],
			['cantato', 'пелa'],
			['cantato', 'пели'],
			['cantato', 'пели'],
			['cantato', 'пели'],
			['cantato', 'пели'],
		],
		[
			['pensato', 'думал'],
			['pensato', 'думал'],
			['pensato', 'думал'],
			['pensato', 'думалa'],
			['pensato', 'думали'],
			['pensato', 'думали'],
			['pensato', 'думали'],
			['pensato', 'думали'],
		]
	];

	this.not = [
		['non','не']
	];

	this.qst = [
		['?','?']
	]

	this['avere un probleme'] = [
		['avere un probleme', 'меть проблем']
	];
}
