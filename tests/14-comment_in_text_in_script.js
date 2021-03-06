(function () {

function RunningInNode () {
	return(
		(typeof require) == "function"
		&&
		(typeof exports) == "object"
		&&
		(typeof module) == "object"
		&&
		(typeof __filename) == "string"
		&&
		(typeof __dirname) == "string"
		);
}

if (!RunningInNode()) {
	if (!this.Tautologistics)
		this.Tautologistics = {};
	if (!this.Tautologistics.NodeHtmlParser)
		this.Tautologistics.NodeHtmlParser = {};
	if (!this.Tautologistics.NodeHtmlParser.Tests)
		this.Tautologistics.NodeHtmlParser.Tests = [];
	exports = {};
	this.Tautologistics.NodeHtmlParser.Tests.push(exports);
}

exports.name = "Comment within text within script";
exports.options = {
	  handler: {}
	, parser: {}
};
exports.html = "<script>this is <!-- the comment --> the text</script>";
exports.expected =
[ { raw: 'script'
  , data: 'script'
  , type: 'script'
  , name: 'script'
  , children:
     [ { raw: 'this is '
       , data: 'this is '
       , type: 'text'
       }
       , { raw: ' the comment '
       , data: ' the comment '
       , type: 'comment'
       }
       , { raw: ' the text'
       , data: ' the text'
       , type: 'text'
       }
     ]
  , closed: true
  }
];

})();
