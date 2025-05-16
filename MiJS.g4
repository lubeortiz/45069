grammar MiJS;

//Gramatica
prog: statement* EOF;

statement
    : whileStatement
    | assignment
    | consoleLog
    ;

whileStatement
    : 'while' '(' expression ')' block
    ;

assignment
    : Identifier '=' expression ';'
    ;

consoleLog
    : 'console' '.' 'log' '(' expression ')' ';'
    ;

block
    : '{' statement* '}'
    ;

expression
    : term (('+'|'-'|'*'|'/') term)*
    ;

term
    : Identifier
    | Number
    | '(' expression ')'
    ;

Identifier: [a-zA-Z] [a-zA-Z0-9_]* ;
Number: [0-9]+ ;

WS: [ \t\r\n]+ -> skip ;
