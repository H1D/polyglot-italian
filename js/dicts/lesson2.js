Dicts[2] = Dict_2;
Templates[2] = [
		[1,'<pronoun[x]> (<not>) <verb[?][x]>'],
		[1,'<pronoun[x]> (<not>) <help_verb[x]> <verb_past[?][x]>'],
		
		// // questions in present 
		[1,'<question_neutral[?]> <verb[?][2]>?'],
		[1,'<question_direct[?]> <pronoun[x]> <verb[?][x]>?'],

		// questions in past
		[1,'<question_neutral[?]> (<not>) <help_verb[2]> <verb_past[?][2]>?'],
		[1,'<question_direct[?]> <pronoun[x]> (<not>) <help_verb[x]> <verb_past[?][x]>?'],

		// new
		[6,'<pronoun[x]> (<not>) <verb[y][x]>, <conjunction[?]> (<pronoun[x]>) (<not>) <verb[!y][x]>?'],
		[6,'<pronoun[x]> (<not>) <verb[y][x]>, <conjunction[?]> (<pronoun[x]>) (<not>) <verb[!y][x]>'],

		[1,'<question_neutral[?]> <be[x]> <pronoun[x]>?'],
		[1,'<question_direct[1]> <be[x=[!2:4]]> <pronoun[x]>?'],
		[1,'<question_direct[1]> <pronoun[x=[2:4]]> <be[x]>?'],

		// male
		[4,'<pronoun[x=[!3,!5,!6,!7]]> <be[x]> <occupation[!1,!4]>?'],
		[4,'<pronoun[x=[!3,!5,!6,!7]]> <be[x]> <occupation[!1,!4]>'],

		// female
		[1,'<pronoun[x=[3]]> <be[x]> <occupation[!1,!3]>?'],
		[1,'<pronoun[x=[3]]> <be[x]> <occupation[!1,!3]>'],

		[6,'<phrase[?]>']
	];


function Dict_2() {

	this.helpers = {
		'глаголы (новые)': [
			['lasciare','позволять'],
			['chiamare','звать'],
			['cantare','петь'],
			['scusare','извинять'],
			['scrivere','писать']
		],

		'союзы': [
			['e','и'],
			['o','или'],
			['ma','но'],
			['se','если'],
			['perche','потому что'],
		],

		'глагол essere (быть)':[
			['io sono',''],
			['tu sei',''],
			['lui é',''],
			['lei é',''],
			['Lei é',''],
			['noi siamo',''],
			['voi siato',''],
			['loro sono',''],
		],

		'глагол fare':[
			['io faccio','я делаю'],
			['tu fai','ты делаешь'],
			['lui fa','он делает'],
			['lei fa','она делает'],
			['Lei fa','Вы делаете'],
			['noi facciamo','мы делаем'],
			['voi fate','вы делаете'],
			['loro fanno','они делают'],
		],

		'выражения':[
			['Ciao','привет или пока'],
			['Buon giorno','добрый день'],
			['Buona sera','добрый вечер'],
			['Buona notte','доброй ночи'],
			['Arrivederci','до свидания'],
			['Piacere','удовольствие'],
			['Come sta?','Как Ваши дела?'],
			['Come stai?','Как дела?'],
			['Io sto bene','Всё хорошо'],			
			['Io sto molto bene','Всё отлично'],
			['Io sto male bene','Очень плохо'],
			['Io sto cosi-cosi','Дела так себе'],
			['Grazie','Спасибо'],
			['Prego','Пожалуйста'],
			['Scusi','прошу прощения'],			
		],

		'род деятельности':[
			['attore','актер'],
			['attrice','актриса'],
			['scrittore','писатель'],
			['studente','студент'],
			['studentessa','студентка'],
			['regista','режисер'],
			['contabile','бухгалтер'],
			['impiegato','офисный работник'],
			['finanziere','финансист'],
			['programmatore','программист'],
		]
	}

	this.conjunction = [
		['e','и'],
		['o','или'],
		['ma','но'],
		['se','если'],
		['perche','потому что'],
	];

	this.occupation = [
		['attore','актер'],
		['attrice','актриса'],
		['scrittore','писатель'],
		['studente','студент'],
		['studentessa','студентка'],
		['regista','режисер'],
		['contabile','бухгалтер'],
		['impiegato','офисный работник'],
		['finanziere','финансист'],
		['programmatore','программист'],
	];

	this.phrase = [
		['Ciao','привет или пока'],
		['Buon giorno','добрый день'],
		['Buona sera','добрый вечер'],
		['Buona notte','доброй ночи'],
		['Arrivederci','до свидания'],
		['Piacere','удовольствие'],
		['Come sta?','Как Ваши дела?'],
		['Come stai?','Как дела?'],
		['Io sto bene','Всё хорошо'],			
		['Io sto molto bene','Всё отлично'],
		['Io sto male bene','Очень плохо'],
		['Io sto cosi-cosi','Дела так себе'],
		['Grazie','Спасибо'],
		['Prego','Пожалуйста'],
		['Scusi','прошу прощения'],
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
			['lasciare','позволяет'],
			['chiamasdare','зовёт'],
			['cantare','поёт'],
			['scusare','извиняет'],
			['scrivere','пишет']		
	]

	this.verb = [
		[ 
			['lascio', 'позволяю'], 
			['lasci', 'позволяешь'], 
			['lascia', 'позволяет'], 
			['lascia', 'позволяет'], 
			['lascia', 'позволяете'], 
			['lasciamo', 'позволяем'], 
			['lasciate', 'позволяете'], 
			['lasciano', 'позволяют'], 
		], 
		[ 
			['chiamo', 'зову'], 
			['chiami', 'зовешь'], 
			['chiama', 'зовет'], 
			['chiama', 'зовет'], 
			['chiama', 'зовете'], 
			['chiamiamo', 'зовем'], 
			['chiamate', 'зовете'], 
			['chiamano', 'зовут'], 
		], 	

		[ 
			['canto', 'пою'], 
			['canti', 'поешь'], 
			['canta', 'поет'], 
			['canta', 'поет'], 
			['canta', 'поете'], 
			['cantiamo', 'поем'], 
			['cantate', 'поете'], 
			['cantano', 'поют'], 
		], 	

		[ 
			['scuso', 'извиняю'], 
			['scusi', 'извиняешь'], 
			['scusa', 'извиняет'], 
			['scusa', 'извиняет'], 
			['scusa', 'извиняете'], 
			['scusiamo', 'извиняем'], 
			['scusate', 'извиняете'], 
			['scusano', 'извиняют'], 
		],	

		[ 
			['scrivo', 'пишу'], 
			['scrivi', 'пишешь'], 
			['scriva', 'пишет'], 
			['scriva', 'пишет'], 
			['scriva', 'пишете'], 
			['scriviamo', 'пишем'], 
			['scrivate', 'пишете'], 
			['scrivano', 'пишут'], 
		],		  	
	];

	this.verb_past = [		
		[ 
			['lasciato', 'позволил'], 
			['lasciato', 'позволил'], 
			['lasciato', 'позволил'], 
			['lasciato', 'позволилa'], 
			['lasciato', 'позволили'], 
			['lasciato', 'позволили'], 
			['lasciato', 'позволили'], 
			['lasciato', 'позволили'], 
		], 
		[ 
			['chiamato', 'звал'], 
			['chiamato', 'звал'], 
			['chiamato', 'звал'], 
			['chiamato', 'звалa'], 
			['chiamato', 'звали'], 
			['chiamato', 'звали'], 
			['chiamato', 'звали'], 
			['chiamato', 'звали'], 
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
			['scusato', 'извинил'], 
			['scusato', 'извинил'], 
			['scusato', 'извинил'], 
			['scusato', 'извинилa'], 
			['scusato', 'извинили'], 
			['scusato', 'извинили'], 
			['scusato', 'извинили'], 
			['scusato', 'извинили'], 
		],
		[ 
			['scrivato', 'писал'], 
			['scrivato', 'писал'], 
			['scrivato', 'писал'], 
			['scrivato', 'писалa'], 
			['scrivato', 'писали'], 
			['scrivato', 'писали'], 
			['scrivato', 'писали'], 
			['scrivato', 'писали'], 
		], 
	];

	this.not = [
		['non','не']
	];

	this.qst = [
		['?','?']
	]
}
