// Generated from c:/Users/lucia/OneDrive/Documentos/2. SSL/analizador-usar/MiJS.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MiJSListener from './MiJSListener.js';
import MiJSVisitor from './MiJSVisitor.js';

const serializedATN = [4,1,17,74,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,5,0,18,8,0,10,0,12,0,21,9,0,1,0,1,0,1,1,1,1,
1,1,3,1,28,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,
4,1,4,1,4,1,4,1,4,1,5,1,5,5,5,51,8,5,10,5,12,5,54,9,5,1,5,1,5,1,6,1,6,1,
6,5,6,61,8,6,10,6,12,6,64,9,6,1,7,1,7,1,7,1,7,1,7,1,7,3,7,72,8,7,1,7,0,0,
8,0,2,4,6,8,10,12,14,0,1,1,0,11,14,72,0,19,1,0,0,0,2,27,1,0,0,0,4,29,1,0,
0,0,6,35,1,0,0,0,8,40,1,0,0,0,10,48,1,0,0,0,12,57,1,0,0,0,14,71,1,0,0,0,
16,18,3,2,1,0,17,16,1,0,0,0,18,21,1,0,0,0,19,17,1,0,0,0,19,20,1,0,0,0,20,
22,1,0,0,0,21,19,1,0,0,0,22,23,5,0,0,1,23,1,1,0,0,0,24,28,3,4,2,0,25,28,
3,6,3,0,26,28,3,8,4,0,27,24,1,0,0,0,27,25,1,0,0,0,27,26,1,0,0,0,28,3,1,0,
0,0,29,30,5,1,0,0,30,31,5,2,0,0,31,32,3,12,6,0,32,33,5,3,0,0,33,34,3,10,
5,0,34,5,1,0,0,0,35,36,5,15,0,0,36,37,5,4,0,0,37,38,3,12,6,0,38,39,5,5,0,
0,39,7,1,0,0,0,40,41,5,6,0,0,41,42,5,7,0,0,42,43,5,8,0,0,43,44,5,2,0,0,44,
45,3,12,6,0,45,46,5,3,0,0,46,47,5,5,0,0,47,9,1,0,0,0,48,52,5,9,0,0,49,51,
3,2,1,0,50,49,1,0,0,0,51,54,1,0,0,0,52,50,1,0,0,0,52,53,1,0,0,0,53,55,1,
0,0,0,54,52,1,0,0,0,55,56,5,10,0,0,56,11,1,0,0,0,57,62,3,14,7,0,58,59,7,
0,0,0,59,61,3,14,7,0,60,58,1,0,0,0,61,64,1,0,0,0,62,60,1,0,0,0,62,63,1,0,
0,0,63,13,1,0,0,0,64,62,1,0,0,0,65,72,5,15,0,0,66,72,5,16,0,0,67,68,5,2,
0,0,68,69,3,12,6,0,69,70,5,3,0,0,70,72,1,0,0,0,71,65,1,0,0,0,71,66,1,0,0,
0,71,67,1,0,0,0,72,15,1,0,0,0,5,19,27,52,62,71];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MiJSParser extends antlr4.Parser {

    static grammarFileName = "MiJS.g4";
    static literalNames = [ null, "'while'", "'('", "')'", "'='", "';'", 
                            "'console'", "'.'", "'log'", "'{'", "'}'", "'+'", 
                            "'-'", "'*'", "'/'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, "Identifier", 
                             "Number", "WS" ];
    static ruleNames = [ "prog", "statement", "whileStatement", "assignment", 
                         "consoleLog", "block", "expression", "term" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MiJSParser.ruleNames;
        this.literalNames = MiJSParser.literalNames;
        this.symbolicNames = MiJSParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MiJSParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 32834) !== 0)) {
	            this.state = 16;
	            this.statement();
	            this.state = 21;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 22;
	        this.match(MiJSParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MiJSParser.RULE_statement);
	    try {
	        this.state = 27;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 24;
	            this.whileStatement();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 25;
	            this.assignment();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 26;
	            this.consoleLog();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	whileStatement() {
	    let localctx = new WhileStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MiJSParser.RULE_whileStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this.match(MiJSParser.T__0);
	        this.state = 30;
	        this.match(MiJSParser.T__1);
	        this.state = 31;
	        this.expression();
	        this.state = 32;
	        this.match(MiJSParser.T__2);
	        this.state = 33;
	        this.block();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MiJSParser.RULE_assignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.match(MiJSParser.Identifier);
	        this.state = 36;
	        this.match(MiJSParser.T__3);
	        this.state = 37;
	        this.expression();
	        this.state = 38;
	        this.match(MiJSParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	consoleLog() {
	    let localctx = new ConsoleLogContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MiJSParser.RULE_consoleLog);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        this.match(MiJSParser.T__5);
	        this.state = 41;
	        this.match(MiJSParser.T__6);
	        this.state = 42;
	        this.match(MiJSParser.T__7);
	        this.state = 43;
	        this.match(MiJSParser.T__1);
	        this.state = 44;
	        this.expression();
	        this.state = 45;
	        this.match(MiJSParser.T__2);
	        this.state = 46;
	        this.match(MiJSParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MiJSParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.match(MiJSParser.T__8);
	        this.state = 52;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 32834) !== 0)) {
	            this.state = 49;
	            this.statement();
	            this.state = 54;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 55;
	        this.match(MiJSParser.T__9);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MiJSParser.RULE_expression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.term();
	        this.state = 62;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 30720) !== 0)) {
	            this.state = 58;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 30720) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 59;
	            this.term();
	            this.state = 64;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MiJSParser.RULE_term);
	    try {
	        this.state = 71;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 65;
	            this.match(MiJSParser.Identifier);
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 66;
	            this.match(MiJSParser.Number);
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 67;
	            this.match(MiJSParser.T__1);
	            this.state = 68;
	            this.expression();
	            this.state = 69;
	            this.match(MiJSParser.T__2);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MiJSParser.EOF = antlr4.Token.EOF;
MiJSParser.T__0 = 1;
MiJSParser.T__1 = 2;
MiJSParser.T__2 = 3;
MiJSParser.T__3 = 4;
MiJSParser.T__4 = 5;
MiJSParser.T__5 = 6;
MiJSParser.T__6 = 7;
MiJSParser.T__7 = 8;
MiJSParser.T__8 = 9;
MiJSParser.T__9 = 10;
MiJSParser.T__10 = 11;
MiJSParser.T__11 = 12;
MiJSParser.T__12 = 13;
MiJSParser.T__13 = 14;
MiJSParser.Identifier = 15;
MiJSParser.Number = 16;
MiJSParser.WS = 17;

MiJSParser.RULE_prog = 0;
MiJSParser.RULE_statement = 1;
MiJSParser.RULE_whileStatement = 2;
MiJSParser.RULE_assignment = 3;
MiJSParser.RULE_consoleLog = 4;
MiJSParser.RULE_block = 5;
MiJSParser.RULE_expression = 6;
MiJSParser.RULE_term = 7;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiJSParser.RULE_prog;
    }

	EOF() {
	    return this.getToken(MiJSParser.EOF, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiJSListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiJSListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiJSVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiJSParser.RULE_statement;
    }

	whileStatement() {
	    return this.getTypedRuleContext(WhileStatementContext,0);
	};

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
	};

	consoleLog() {
	    return this.getTypedRuleContext(ConsoleLogContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiJSListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiJSListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiJSVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WhileStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiJSParser.RULE_whileStatement;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiJSListener ) {
	        listener.enterWhileStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiJSListener ) {
	        listener.exitWhileStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiJSVisitor ) {
	        return visitor.visitWhileStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiJSParser.RULE_assignment;
    }

	Identifier() {
	    return this.getToken(MiJSParser.Identifier, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiJSListener ) {
	        listener.enterAssignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiJSListener ) {
	        listener.exitAssignment(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiJSVisitor ) {
	        return visitor.visitAssignment(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConsoleLogContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiJSParser.RULE_consoleLog;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiJSListener ) {
	        listener.enterConsoleLog(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiJSListener ) {
	        listener.exitConsoleLog(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiJSVisitor ) {
	        return visitor.visitConsoleLog(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiJSParser.RULE_block;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiJSListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiJSListener ) {
	        listener.exitBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiJSVisitor ) {
	        return visitor.visitBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiJSParser.RULE_expression;
    }

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiJSListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiJSListener ) {
	        listener.exitExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiJSVisitor ) {
	        return visitor.visitExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiJSParser.RULE_term;
    }

	Identifier() {
	    return this.getToken(MiJSParser.Identifier, 0);
	};

	Number() {
	    return this.getToken(MiJSParser.Number, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiJSListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiJSListener ) {
	        listener.exitTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiJSVisitor ) {
	        return visitor.visitTerm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




MiJSParser.ProgContext = ProgContext; 
MiJSParser.StatementContext = StatementContext; 
MiJSParser.WhileStatementContext = WhileStatementContext; 
MiJSParser.AssignmentContext = AssignmentContext; 
MiJSParser.ConsoleLogContext = ConsoleLogContext; 
MiJSParser.BlockContext = BlockContext; 
MiJSParser.ExpressionContext = ExpressionContext; 
MiJSParser.TermContext = TermContext; 
