"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[8768],{98768:(t,i,n)=>{n.d(i,{diagram:()=>h});var s=n(24028),e=(n(27693),n(7608),n(23617),n(31699),function(){var t=function(t,i,n,s){for(n=n||{},s=t.length;s--;n[t[s]]=i);return n},i=[6,9,10],n={trace:function(){},yy:{},symbols_:{error:2,start:3,info:4,document:5,EOF:6,line:7,statement:8,NL:9,showInfo:10,$accept:0,$end:1},terminals_:{2:"error",4:"info",6:"EOF",9:"NL",10:"showInfo"},productions_:[0,[3,3],[5,0],[5,2],[7,1],[7,1],[8,1]],performAction:function(t,i,n,s,e,r,h){switch(r.length,e){case 1:return s;case 4:break;case 6:s.setInfo(!0)}},table:[{3:1,4:[1,2]},{1:[3]},t(i,[2,2],{5:3}),{6:[1,4],7:5,8:6,9:[1,7],10:[1,8]},{1:[2,1]},t(i,[2,3]),t(i,[2,4]),t(i,[2,5]),t(i,[2,6])],defaultActions:{4:[2,1]},parseError:function(t,i){if(!i.recoverable){var n=new Error(t);throw n.hash=i,n}this.trace(t)},parse:function(t){var i=[0],n=[],s=[null],e=[],r=this.table,h="",o=0,l=0,c=e.slice.call(arguments,1),a=Object.create(this.lexer),y={yy:{}};for(var u in this.yy)Object.prototype.hasOwnProperty.call(this.yy,u)&&(y.yy[u]=this.yy[u]);a.setInput(t,y.yy),y.yy.lexer=a,y.yy.parser=this,void 0===a.yylloc&&(a.yylloc={});var p=a.yylloc;e.push(p);var f=a.options&&a.options.ranges;"function"==typeof y.yy.parseError?this.parseError=y.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var g,_,m,d,k,x,b,v,E,w={};;){if(_=i[i.length-1],this.defaultActions[_]?m=this.defaultActions[_]:(null==g&&(E=void 0,"number"!=typeof(E=n.pop()||a.lex()||1)&&(E instanceof Array&&(E=(n=E).pop()),E=this.symbols_[E]||E),g=E),m=r[_]&&r[_][g]),void 0===m||!m.length||!m[0]){var I;for(k in v=[],r[_])this.terminals_[k]&&k>2&&v.push("'"+this.terminals_[k]+"'");I=a.showPosition?"Parse error on line "+(o+1)+":\n"+a.showPosition()+"\nExpecting "+v.join(", ")+", got '"+(this.terminals_[g]||g)+"'":"Parse error on line "+(o+1)+": Unexpected "+(1==g?"end of input":"'"+(this.terminals_[g]||g)+"'"),this.parseError(I,{text:a.match,token:this.terminals_[g]||g,line:a.yylineno,loc:p,expected:v})}if(m[0]instanceof Array&&m.length>1)throw new Error("Parse Error: multiple actions possible at state: "+_+", token: "+g);switch(m[0]){case 1:i.push(g),s.push(a.yytext),e.push(a.yylloc),i.push(m[1]),g=null,l=a.yyleng,h=a.yytext,o=a.yylineno,p=a.yylloc;break;case 2:if(x=this.productions_[m[1]][1],w.$=s[s.length-x],w._$={first_line:e[e.length-(x||1)].first_line,last_line:e[e.length-1].last_line,first_column:e[e.length-(x||1)].first_column,last_column:e[e.length-1].last_column},f&&(w._$.range=[e[e.length-(x||1)].range[0],e[e.length-1].range[1]]),void 0!==(d=this.performAction.apply(w,[h,l,o,y.yy,m[1],s,e].concat(c))))return d;x&&(i=i.slice(0,-1*x*2),s=s.slice(0,-1*x),e=e.slice(0,-1*x)),i.push(this.productions_[m[1]][0]),s.push(w.$),e.push(w._$),b=r[i[i.length-2]][i[i.length-1]],i.push(b);break;case 3:return!0}}return!0}},s={EOF:1,parseError:function(t,i){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,i)},setInput:function(t,i){return this.yy=i||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var i=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-i),this.offset-=i;var s=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var e=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===s.length?this.yylloc.first_column:0)+s[s.length-n.length].length-n[0].length:this.yylloc.first_column-i},this.options.ranges&&(this.yylloc.range=[e[0],e[0]+this.yyleng-i]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),i=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+i+"^"},test_match:function(t,i){var n,s,e;if(this.options.backtrack_lexer&&(e={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(e.yylloc.range=this.yylloc.range.slice(0))),(s=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=s.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:s?s[s.length-1].length-s[s.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,i,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var r in e)this[r]=e[r];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,i,n,s;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var e=this._currentRules(),r=0;r<e.length;r++)if((n=this._input.match(this.rules[e[r]]))&&(!i||n[0].length>i[0].length)){if(i=n,s=r,this.options.backtrack_lexer){if(!1!==(t=this.test_match(n,e[r])))return t;if(this._backtrack){i=!1;continue}return!1}if(!this.options.flex)break}return i?!1!==(t=this.test_match(i,e[s]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,i,n,s){switch(n){case 0:return 4;case 1:return 9;case 2:return"space";case 3:return 10;case 4:return 6;case 5:return"TXT"}},rules:[/^(?:info\b)/i,/^(?:[\s\n\r]+)/i,/^(?:[\s]+)/i,/^(?:showInfo\b)/i,/^(?:$)/i,/^(?:.)/i],conditions:{INITIAL:{rules:[0,1,2,3,4,5],inclusive:!0}}};function e(){this.yy={}}return n.lexer=s,e.prototype=n,n.Parser=e,new e}());e.parser=e;let r=false;const h={parser:e,db:{clear:()=>{r=false},setInfo:t=>{r=t},getInfo:()=>r},renderer:{draw:(t,i,n)=>{s.l.debug("rendering info diagram\n"+t);const e=(0,s.z)(i);(0,s.i)(e,100,400,!0),e.append("g").append("text").attr("x",100).attr("y",40).attr("class","version").attr("font-size",32).style("text-anchor","middle").text(`v${n}`)}}}}}]);
//# sourceMappingURL=8768.cd685a6.js.map