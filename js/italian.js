function l (msg) {
	 // console.log(msg);
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
		'<pronoun[x]> (<not>) <verb[?][x]>',
		'<pronoun[x]> (<not>) <help_verb[x]> <verb_past[?][x]>',
		
		// // questions in present 
		'<question_neutral[?]> <verb[?][2]>?',
		'<question_direct[?]> <pronoun[x]> <verb[?][x]>?',

		// questions in past
		'<question_neutral[?]> (<not>) <help_verb[2]> <verb_past[?][2]>?',
		'<question_direct[?]> <pronoun[x]> (<not>) <help_verb[x]> <verb_past[?][x]>?',
	];

	var template = templates[Math.round(Math.random()*(templates.length-1))];	
	var vars = {};
	l(template);

	var words = template.match(/\(?<\S+>\)?/g);
	var result = {
		0:template,
		1:template,
	}

	var rnd = 0;//Math.round(Math.random())

	for (var i=0;i<words.length;i++) {
		var word_token_orig = words[i];
		var word_token = words[i];
		// handle optional words
		if (word_token.match(/\(\w+\)/) && Math.random() >= 0.5) {
			result[0] = result[0].replace(word_token_orig,'');
			result[1] = result[1].replace(word_token_orig,'');
			continue;
		}

		// handle tokens without rect brackets
		word_token = word_token.replace(/(\w)>/,'$1[?]>');
		var type = word_token.match(/<(\w+)\[/)[1];
		var index_token = word_token.match(/\[.*\]/)[0];

		var word = get_val(dict[type],index_token,vars);
		vars = word[2];

		result[0] = result[0].replace(word_token_orig,word[1-rnd]);
		result[1] = result[1].replace(word_token_orig,word[rnd]);
	}
	result[0] = capitaliseFirstLetter(result[0].replace(/\s+/g,' '));
	result[1] = capitaliseFirstLetter(result[1].replace(/\s+/g,' '));
	return result;
}


// utils
var verb_root = [
	['parl','говорил'],
	['mang','ел'],
	['guard','смотрел'],
	['gioc','играл'],
	['lavor','работал'],
	['am','любил'],
	['ascolt','слушал'],
	['impar','учил'],
	['abit','жил']
];

function gen_norm (verb) {
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

function gen_past (verb,verb_r) {
	console.log('[')
	

	
	console.log("['"+verb+"ato', '"+verb_r+"'],");
	console.log("['"+verb+"ato', '"+verb_r+"'],");
	console.log("['"+verb+"ato', '"+verb_r+"'],");
	console.log("['"+verb+"ato', '"+verb_r+"a'],");

	console.log("['"+verb+"ato', '"+verb_r+"и'],");
	console.log("['"+verb+"ato', '"+verb_r+"и'],");
	console.log("['"+verb+"ato', '"+verb_r+"и'],");
	console.log("['"+verb+"ato', '"+verb_r+"и'],");
	
	
	console.log('],')
}
function capitaliseFirstLetter(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function get_index(token,vars) {
	// cut brackets

	// split subtokens

	// build function for each token
	var cherckers = [];
	for (var token in tokens) {
		// [:123]
		if (token.match(/$:.*/)) {
			var bound = parseInt(token.match(/^:(\d+)/)[1],10);

			//TODO throw exception
			if(isNaN(bound))
				continue;

			(function (x) {})();
		}

		// [123:]

		// [123]

		// [!subtoken]

		// [x]
	}
}