function l (msg) {
	// console.log(msg);
}

// dictionares container
var Dicts = {}

// templates container
var Templates = {}

function get_val(arr,token,vars) {
	// var assign?
	var var_name = null;
	if(token.match(/^\[\w=/)) {
		var_name = token.match(/^\[(\w)=/)[1];
		token = token.match(/^\[(\w)=(\[[^\[\]]+\])/)[2];
	}
	var parse = /\[[^\[\]]+\]/.exec(token);
	// token
	var part = parse[0];
		
	var res = get_index(part,vars,arr.length);

	if(var_name) {
		vars[var_name] = res[0];
	}

	//get value
	var value = arr[res[0]];
	vars = res[1]

	if (value.constructor === Array && 
		value[0].constructor === String
		) {
		value[2] = vars;
		return value;
	} else {
		return get_val(value,token.replace(part,''),vars);
	}
}


function expand_templates(templates) {
	res = []
	for(var count in templates) {
		for (var i = 0; i <= templates[count][0]; i++) {
			res.push(templates[count][1])
		};
	}

	return res;
}

function get_strings(dict,templates) {
	var templates = expand_templates(templates);
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
		if (word_token.match(/\(.*\)/) && Math.random() >= 0.5) {
			result[0] = result[0].replace(word_token_orig,'');
			result[1] = result[1].replace(word_token_orig,'');
			continue;
		}

		// handle tokens without rect brackets
		word_token = word_token.replace(/(\w)>/,'$1[?]>');
		var type = word_token.match(/<(\w+)\[/)[1];
		var index_token = word_token.match(/\[.*\]/)[0];

		var word = get_val(dict[type],index_token,vars);
		for (var key in vars) {
			l(""+key+":"+vars[key]+";");
		};
		l(vars)
		vars = word[2];

		result[0] = result[0].replace(word_token_orig,word[1-rnd]);
		result[1] = result[1].replace(word_token_orig,word[rnd]);
	}
	result[0] = capitaliseFirstLetter(result[0].replace(/\s+/g,' ')).replace(/\s\?$/g,'?');
	result[1] = capitaliseFirstLetter(result[1].replace(/\s+/g,' ')).replace(/\s\?$/g,'?');
	return result;
}

function gen_norm (verb,verb_r) {
	console.log('[')
	var verb_mod = {
		io:'o',
		tu:'i',
		lui:'a',
		lei:'a',
		Lei:'a',
		noi:'iamo',
		voi:'ate',
		loro:'ano'
	};

	var verb_mod_r = {
		io:'ю',
		tu:'ешь',
		lui:'ет',
		lei:'ет',
		Lei:'ете',
		noi:'ем',
		voi:'ете',
		loro:'ют'
	};

	for (var i in verb_mod) {
		console.log("['"+verb+verb_mod[i]+"', '"+verb_r+verb_mod_r[i]+"'],");
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

function get_index(raw_token,vars,length) {
	// cut brackets
	raw_token = raw_token.match(/^\[(.*)\]$/)[1];
	// split subtokens
	var tokens = raw_token.split(',');

	// build function for each token
	var cherckers = [];
	for (var i = tokens.length - 1; i >= 0; i--) {		
		cherckers.push(get_checker(tokens[i]))
	}

	// get index
	while (true) {
		var x = Math.round(Math.random()*(length-1));

		try {
			for (var i = cherckers.length - 1; i >= 0; i--) {
				if (!cherckers[i](x)) {
					throw '';
				}
			}
		}
		catch(e) {
			x = null;
		}
		finally {
			if (x !== null) {
				return [x,vars];
			}
		}	
	}

	function get_checker(token) {
		// [:123]
		if (token.match(/^:\d+$/)) {
			var bound = parseInt(token.match(/^:(\d+)/)[1],10);

			//TODO throw exception
			if(isNaN(bound))
				throw 'Error parsing token:'+token;

			return (function (x) { return function (index) {
					if (index >= x) {
						return false;
					} else {
						return true;
					}
				}
			})(bound);
		}

		// [123:]
		if (token.match(/^\d+:$/)) {
			var bound = parseInt(token.match(/(\d+):$/)[1],10);

			//TODO throw exception
			if(isNaN(bound))
				throw 'Error parsing token:'+token;

			return (function (x) { 
				return function (index) {
					if (index <= x) {
						return false;
					} else {
						return true;
					}
				}
			})(bound);
		}

		// [123:456]
		if (token.match(/^\d+:\d+$/)) {
			var bound_1 = parseInt(token.match(/(\d+):(\d+)$/)[1],10);
			var bound_2 = parseInt(token.match(/(\d+):(\d+)$/)[2],10);

			//TODO throw exception
			if(isNaN(bound_1) || isNaN(bound_2))
				throw 'Error parsing token:'+token;

			return (function (x,y) { 
				return function (index) {
					if (index >= x && index <= y) {
						return false;
					} else {
						return true;
					}
				}
			})(bound_1,bound_2);
		}

		// [123]
		if (token.match(/^\d+$/)) {
			var index = parseInt(token.match(/\d+/)[0],10);

			//TODO throw exception
			if(isNaN(index))
				throw 'Error parsing token:'+token;

			return (function (x) { return function (index) {
					if (index !== x) {
						return false;
					} else {
						return true;
					}
				}
			})(index);
		}

		// [!subtoken]
		if (token.match(/^!.*/)) {
			
			return (function (token) { return function (index) {
					return !get_checker(token.substring(1),vars,length)(index);
				}
			})(token);
		}

		// [x]
		if (token.match(/^\w$/)) {
			
			if (vars[token] === undefined ) {
				vars[token] = Math.round(Math.random()*(length-1));
			}


			return (function (x) { return function (index) {
					if (index !== x) {
						return false;
					} else {
						return true;
					}
				}
			})(vars[token]);
		}

		// [?]
		if (token.match(/^\?$/)) {
			return (function (x) { return function (index) {					
						return true;				
				}
			})(vars[token]);
		}
	}
}