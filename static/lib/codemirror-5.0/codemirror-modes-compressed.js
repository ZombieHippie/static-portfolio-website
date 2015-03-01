/* CodeMirror - Minified & Bundled
   Generated on 2/28/2015 with http://codemirror.net/doc/compress.html
   Version: 5.0

   Modes:
   - clike.js
   - coffeescript.js
   - jade.js
   - javascript.js
 */

!function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],a):a(CodeMirror)}(function(a){"use strict";function b(a){for(var b={},c=a.split(" "),d=0;d<c.length;++d)b[c[d]]=!0;return b}function d(a,b){if(!b.startOfLine)return!1;for(;;){if(!a.skipTo("\\")){a.skipToEnd(),b.tokenize=null;break}if(a.next(),a.eol()){b.tokenize=d;break}}return"meta"}function e(a,b){if(a.backUp(1),a.match(/(R|u8R|uR|UR|LR)/)){var c=a.match(/"([^\s\\()]{0,16})\(/);return c?(b.cpp11RawStringDelim=c[1],b.tokenize=g,g(a,b)):!1}return a.match(/(u8|u|U|L)/)?a.match(/["']/,!1)?"string":!1:(a.next(),!1)}function f(a,b){for(var c;null!=(c=a.next());)if('"'==c&&!a.eat('"')){b.tokenize=null;break}return"string"}function g(a,b){var c=b.cpp11RawStringDelim.replace(/[^\w\s]/g,"\\$&"),d=a.match(new RegExp(".*?\\)"+c+'"'));return d?b.tokenize=null:a.skipToEnd(),"string"}function h(b,c){function e(a){if(a)for(var b in a)a.hasOwnProperty(b)&&d.push(b)}"string"==typeof b&&(b=[b]);var d=[];e(c.keywords),e(c.builtin),e(c.atoms),d.length&&(c.helperType=b[0],a.registerHelper("hintWords",b[0],d));for(var f=0;f<b.length;++f)a.defineMIME(b[f],c)}function i(a,b){for(var c=!1;!a.eol();){if(!c&&a.match('"""')){b.tokenize=null;break}c="\\"==a.next()&&!c}return"string"}a.defineMode("clike",function(b,c){function p(a,b){var c=a.next();if(k[c]){var d=k[c](a,b);if(d!==!1)return d}if('"'==c||"'"==c)return b.tokenize=q(c),b.tokenize(a,b);if(/[\[\]{}\(\),;\:\.]/.test(c))return o=c,null;if(/\d/.test(c))return a.eatWhile(/[\w\.]/),"number";if("/"==c){if(a.eat("*"))return b.tokenize=r,r(a,b);if(a.eat("/"))return a.skipToEnd(),"comment"}if(n.test(c))return a.eatWhile(n),"operator";a.eatWhile(/[\w\$_\xa1-\uffff]/);var e=a.current();return g.propertyIsEnumerable(e)?(i.propertyIsEnumerable(e)&&(o="newstatement"),"keyword"):h.propertyIsEnumerable(e)?(i.propertyIsEnumerable(e)&&(o="newstatement"),"builtin"):j.propertyIsEnumerable(e)?"atom":"variable"}function q(a){return function(b,c){for(var e,d=!1,f=!1;null!=(e=b.next());){if(e==a&&!d){f=!0;break}d=!d&&"\\"==e}return(f||!d&&!l)&&(c.tokenize=null),"string"}}function r(a,b){for(var d,c=!1;d=a.next();){if("/"==d&&c){b.tokenize=null;break}c="*"==d}return"comment"}function s(a,b,c,d,e){this.indented=a,this.column=b,this.type=c,this.align=d,this.prev=e}function t(a,b,c){var d=a.indented;return a.context&&"statement"==a.context.type&&(d=a.context.indented),a.context=new s(d,b,c,null,a.context)}function u(a){var b=a.context.type;return(")"==b||"]"==b||"}"==b)&&(a.indented=a.context.indented),a.context=a.context.prev}var o,d=b.indentUnit,e=c.statementIndentUnit||d,f=c.dontAlignCalls,g=c.keywords||{},h=c.builtin||{},i=c.blockKeywords||{},j=c.atoms||{},k=c.hooks||{},l=c.multiLineStrings,m=c.indentStatements!==!1,n=/[+\-*&%=<>!?|\/]/;return{startState:function(a){return{tokenize:null,context:new s((a||0)-d,0,"top",!1),indented:0,startOfLine:!0}},token:function(a,b){var c=b.context;if(a.sol()&&(null==c.align&&(c.align=!1),b.indented=a.indentation(),b.startOfLine=!0),a.eatSpace())return null;o=null;var d=(b.tokenize||p)(a,b);if("comment"==d||"meta"==d)return d;if(null==c.align&&(c.align=!0),";"!=o&&":"!=o&&","!=o||"statement"!=c.type)if("{"==o)t(b,a.column(),"}");else if("["==o)t(b,a.column(),"]");else if("("==o)t(b,a.column(),")");else if("}"==o){for(;"statement"==c.type;)c=u(b);for("}"==c.type&&(c=u(b));"statement"==c.type;)c=u(b)}else o==c.type?u(b):m&&(("}"==c.type||"top"==c.type)&&";"!=o||"statement"==c.type&&"newstatement"==o)&&t(b,a.column(),"statement");else u(b);return b.startOfLine=!1,d},indent:function(b,c){if(b.tokenize!=p&&null!=b.tokenize)return a.Pass;var g=b.context,h=c&&c.charAt(0);"statement"==g.type&&"}"==h&&(g=g.prev);var i=h==g.type;return"statement"==g.type?g.indented+("{"==h?0:e):!g.align||f&&")"==g.type?")"!=g.type||i?g.indented+(i?0:d):g.indented+e:g.column+(i?0:1)},electricChars:"{}",blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//",fold:"brace"}});var c="auto if break int case long char register continue return default short do sizeof double static else struct entry switch extern typedef float union for unsigned goto while enum void const signed volatile";h(["text/x-csrc","text/x-c","text/x-chdr"],{name:"clike",keywords:b(c),blockKeywords:b("case do else for if switch while struct"),atoms:b("null"),hooks:{"#":d},modeProps:{fold:["brace","include"]}}),h(["text/x-c++src","text/x-c++hdr"],{name:"clike",keywords:b(c+" asm dynamic_cast namespace reinterpret_cast try bool explicit new "+"static_cast typeid catch operator template typename class friend private "+"this using const_cast inline public throw virtual delete mutable protected "+"wchar_t alignas alignof constexpr decltype nullptr noexcept thread_local final "+"static_assert override"),blockKeywords:b("catch class do else finally for if struct switch try while"),atoms:b("true false null"),hooks:{"#":d,u:e,U:e,L:e,R:e},modeProps:{fold:["brace","include"]}}),h("text/x-java",{name:"clike",keywords:b("abstract assert boolean break byte case catch char class const continue default do double else enum extends final finally float for goto if implements import instanceof int interface long native new package private protected public return short static strictfp super switch synchronized this throw throws transient try void volatile while"),blockKeywords:b("catch class do else finally for if switch try while"),atoms:b("true false null"),hooks:{"@":function(a){return a.eatWhile(/[\w\$_]/),"meta"}},modeProps:{fold:["brace","import"]}}),h("text/x-csharp",{name:"clike",keywords:b("abstract as base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in interface internal is lock namespace new operator out override params private protected public readonly ref return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield"),blockKeywords:b("catch class do else finally for foreach if struct switch try while"),builtin:b("Boolean Byte Char DateTime DateTimeOffset Decimal Double Guid Int16 Int32 Int64 Object SByte Single String TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong"),atoms:b("true false null"),hooks:{"@":function(a,b){return a.eat('"')?(b.tokenize=f,f(a,b)):(a.eatWhile(/[\w\$_]/),"meta")}}}),h("text/x-scala",{name:"clike",keywords:b("abstract case catch class def do else extends false final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try trye type val var while with yield _ : = => <- <: <% >: # @ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector :: #:: Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"),multiLineStrings:!0,blockKeywords:b("catch class do else finally for forSome if match switch try while"),atoms:b("true false null"),indentStatements:!1,hooks:{"@":function(a){return a.eatWhile(/[\w\$_]/),"meta"},'"':function(a,b){return a.match('""')?(b.tokenize=i,b.tokenize(a,b)):!1},"'":function(a){return a.eatWhile(/[\w\$_\xa1-\uffff]/),"atom"}}}),h(["x-shader/x-vertex","x-shader/x-fragment"],{name:"clike",keywords:b("float int bool void vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 mat2 mat3 mat4 sampler1D sampler2D sampler3D samplerCube sampler1DShadow sampler2DShadow const attribute uniform varying break continue discard return for while do if else struct in out inout"),blockKeywords:b("for while do if else struct"),builtin:b("radians degrees sin cos tan asin acos atan pow exp log exp2 sqrt inversesqrt abs sign floor ceil fract mod min max clamp mix step smoothstep length distance dot cross normalize ftransform faceforward reflect refract matrixCompMult lessThan lessThanEqual greaterThan greaterThanEqual equal notEqual any all not texture1D texture1DProj texture1DLod texture1DProjLod texture2D texture2DProj texture2DLod texture2DProjLod texture3D texture3DProj texture3DLod texture3DProjLod textureCube textureCubeLod shadow1D shadow2D shadow1DProj shadow2DProj shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod dFdx dFdy fwidth noise1 noise2 noise3 noise4"),atoms:b("true false gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_FogCoord gl_PointCoord gl_Position gl_PointSize gl_ClipVertex gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor gl_TexCoord gl_FogFragCoord gl_FragCoord gl_FrontFacing gl_FragData gl_FragDepth gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse gl_TexureMatrixTranspose gl_ModelViewMatrixInverseTranspose gl_ProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixInverseTranspose gl_TextureMatrixInverseTranspose gl_NormalScale gl_DepthRange gl_ClipPlane gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel gl_FrontLightModelProduct gl_BackLightModelProduct gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ gl_FogParameters gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits gl_MaxDrawBuffers"),hooks:{"#":d},modeProps:{fold:["brace","include"]}}),h("text/x-nesc",{name:"clike",keywords:b(c+"as atomic async call command component components configuration event generic "+"implementation includes interface module new norace nx_struct nx_union post provides "+"signal task uses abstract extends"),blockKeywords:b("case do else for if switch while struct"),atoms:b("null"),hooks:{"#":d},modeProps:{fold:["brace","include"]}}),h("text/x-objectivec",{name:"clike",keywords:b(c+"inline restrict _Bool _Complex _Imaginery BOOL Class bycopy byref id IMP in "+"inout nil oneway out Protocol SEL self super atomic nonatomic retain copy readwrite readonly"),atoms:b("YES NO NULL NILL ON OFF"),hooks:{"@":function(a){return a.eatWhile(/[\w\$]/),"keyword"},"#":d},modeProps:{fold:"brace"}})}),function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],a):a(CodeMirror)}(function(a){"use strict";a.defineMode("coffeescript",function(a,b){function d(a){return new RegExp("^(("+a.join(")|(")+"))\\b")}function q(a,b){if(a.sol()){null===b.scope.align&&(b.scope.align=!1);var d=b.scope.offset;if(a.eatSpace()){var j=a.indentation();return j>d&&"coffee"==b.scope.type?"indent":d>j?"dedent":null}d>0&&u(a,b)}if(a.eatSpace())return null;var k=a.peek();if(a.match("####"))return a.skipToEnd(),"comment";if(a.match("###"))return b.tokenize=s,b.tokenize(a,b);if("#"===k)return a.skipToEnd(),"comment";if(a.match(/^-?[0-9\.]/,!1)){var o=!1;if(a.match(/^-?\d*\.\d+(e[\+\-]?\d+)?/i)&&(o=!0),a.match(/^-?\d+\.\d*/)&&(o=!0),a.match(/^-?\.\d+/)&&(o=!0),o)return"."==a.peek()&&a.backUp(1),"number";var q=!1;if(a.match(/^-?0x[0-9a-f]+/i)&&(q=!0),a.match(/^-?[1-9]\d*(e[\+\-]?\d+)?/)&&(q=!0),a.match(/^-?0(?![\dx])/i)&&(q=!0),q)return"number"}if(a.match(m))return b.tokenize=r(a.current(),!1,"string"),b.tokenize(a,b);if(a.match(n)){if("/"!=a.current()||a.match(/^.*\//,!1))return b.tokenize=r(a.current(),!0,"string-2"),b.tokenize(a,b);a.backUp(1)}return a.match(e)||a.match(i)?"operator":a.match(f)?"punctuation":a.match(p)?"atom":a.match(l)?"keyword":a.match(g)?"variable":a.match(h)?"property":(a.next(),c)}function r(a,d,e){return function(f,g){for(;!f.eol();)if(f.eatWhile(/[^'"\/\\]/),f.eat("\\")){if(f.next(),d&&f.eol())return e}else{if(f.match(a))return g.tokenize=q,e;f.eat(/['"\/]/)}return d&&(b.singleLineStringErrors?e=c:g.tokenize=q),e}}function s(a,b){for(;!a.eol();){if(a.eatWhile(/[^#]/),a.match("###")){b.tokenize=q;break}a.eatWhile("#")}return"comment"}function t(b,c,d){d=d||"coffee";for(var e=0,f=!1,g=null,h=c.scope;h;h=h.prev)if("coffee"===h.type||"}"==h.type){e=h.offset+a.indentUnit;break}"coffee"!==d?(f=null,g=b.column()+b.current().length):c.scope.align&&(c.scope.align=!1),c.scope={offset:e,type:d,prev:c.scope,align:f,alignOffset:g}}function u(a,b){if(b.scope.prev){if("coffee"===b.scope.type){for(var c=a.indentation(),d=!1,e=b.scope;e;e=e.prev)if(c===e.offset){d=!0;break}if(!d)return!0;for(;b.scope.prev&&b.scope.offset!==c;)b.scope=b.scope.prev;return!1}return b.scope=b.scope.prev,!1}}function v(a,b){var d=b.tokenize(a,b),e=a.current();if("."===e)return d=b.tokenize(a,b),e=a.current(),/^\.[\w$]+$/.test(e)?"variable":c;"return"===e&&(b.dedent=!0),("->"!==e&&"=>"!==e||b.lambda||a.peek())&&"indent"!==d||t(a,b);var f="[({".indexOf(e);if(-1!==f&&t(a,b,"])}".slice(f,f+1)),j.exec(e)&&t(a,b),"then"==e&&u(a,b),"dedent"===d&&u(a,b))return c;if(f="])}".indexOf(e),-1!==f){for(;"coffee"==b.scope.type&&b.scope.prev;)b.scope=b.scope.prev;b.scope.type==e&&(b.scope=b.scope.prev)}return b.dedent&&a.eol()&&("coffee"==b.scope.type&&b.scope.prev&&(b.scope=b.scope.prev),b.dedent=!1),d}var c="error",e=/^(?:->|=>|\+[+=]?|-[\-=]?|\*[\*=]?|\/[\/=]?|[=!]=|<[><]?=?|>>?=?|%=?|&=?|\|=?|\^=?|\~|!|\?|(or|and|\|\||&&|\?)=)/,f=/^(?:[()\[\]{},:`=;]|\.\.?\.?)/,g=/^[_A-Za-z$][_A-Za-z$0-9]*/,h=/^(@|this\.)[_A-Za-z$][_A-Za-z$0-9]*/,i=d(["and","or","not","is","isnt","in","instanceof","typeof"]),j=["for","while","loop","if","unless","else","switch","try","catch","finally","class"],k=["break","by","continue","debugger","delete","do","in","of","new","return","then","this","@","throw","when","until","extends"],l=d(j.concat(k));j=d(j);var m=/^('{3}|\"{3}|['\"])/,n=/^(\/{3}|\/)/,o=["Infinity","NaN","undefined","null","true","false","on","off","yes","no"],p=d(o),w={startState:function(a){return{tokenize:q,scope:{offset:a||0,type:"coffee",prev:null,align:!1},lastToken:null,lambda:!1,dedent:0}},token:function(a,b){var c=null===b.scope.align&&b.scope;c&&a.sol()&&(c.align=!1);var d=v(a,b);return c&&d&&"comment"!=d&&(c.align=!0),b.lastToken={style:d,content:a.current()},a.eol()&&a.lambda&&(b.lambda=!1),d},indent:function(a,b){if(a.tokenize!=q)return 0;var c=a.scope,d=b&&"])}".indexOf(b.charAt(0))>-1;if(d)for(;"coffee"==c.type&&c.prev;)c=c.prev;var e=d&&c.type===b.charAt(0);return c.align?c.alignOffset-(e?1:0):(e?c.prev:c).offset},lineComment:"#",fold:"indent"};return w}),a.defineMIME("text/x-coffeescript","coffeescript")}),function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror"),require("../javascript/javascript"),require("../css/css"),require("../htmlmixed/htmlmixed")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../javascript/javascript","../css/css","../htmlmixed/htmlmixed"],a):a(CodeMirror)}(function(a){"use strict";a.defineMode("jade",function(b){function i(){this.javaScriptLine=!1,this.javaScriptLineExcludesColon=!1,this.javaScriptArguments=!1,this.javaScriptArgumentsDepth=0,this.isInterpolating=!1,this.interpolationNesting=0,this.jsState=h.startState(),this.restOfLine="",this.isIncludeFiltered=!1,this.isEach=!1,this.lastTag="",this.scriptType="",this.isAttrs=!1,this.attrsNest=[],this.inAttributeName=!0,this.attributeIsType=!1,this.attrValue="",this.indentOf=1/0,this.indentToken="",this.innerMode=null,this.innerState=null,this.innerModeForLine=!1}function j(a,b){if(a.sol()&&(b.javaScriptLine=!1,b.javaScriptLineExcludesColon=!1),b.javaScriptLine){if(b.javaScriptLineExcludesColon&&":"===a.peek())return b.javaScriptLine=!1,b.javaScriptLineExcludesColon=!1,void 0;var c=h.token(a,b.jsState);return a.eol()&&(b.javaScriptLine=!1),c||!0}}function k(a,b){if(b.javaScriptArguments){if(0===b.javaScriptArgumentsDepth&&"("!==a.peek())return b.javaScriptArguments=!1,void 0;if("("===a.peek()?b.javaScriptArgumentsDepth++:")"===a.peek()&&b.javaScriptArgumentsDepth--,0===b.javaScriptArgumentsDepth)return b.javaScriptArguments=!1,void 0;var c=h.token(a,b.jsState);return c||!0}}function l(a){return a.match(/^yield\b/)?"keyword":void 0}function m(a){return a.match(/^(?:doctype) *([^\n]+)?/)?d:void 0}function n(a,b){return a.match("#{")?(b.isInterpolating=!0,b.interpolationNesting=0,"punctuation"):void 0}function o(a,b){if(b.isInterpolating){if("}"===a.peek()){if(b.interpolationNesting--,b.interpolationNesting<0)return a.next(),b.isInterpolating=!1,"puncutation"}else"{"===a.peek()&&b.interpolationNesting++;return h.token(a,b.jsState)||!0}}function p(a,b){return a.match(/^case\b/)?(b.javaScriptLine=!0,c):void 0}function q(a,b){return a.match(/^when\b/)?(b.javaScriptLine=!0,b.javaScriptLineExcludesColon=!0,c):void 0}function r(a){return a.match(/^default\b/)?c:void 0}function s(a,b){return a.match(/^extends?\b/)?(b.restOfLine="string",c):void 0}function t(a,b){return a.match(/^append\b/)?(b.restOfLine="variable",c):void 0}function u(a,b){return a.match(/^prepend\b/)?(b.restOfLine="variable",c):void 0}function v(a,b){return a.match(/^block\b *(?:(prepend|append)\b)?/)?(b.restOfLine="variable",c):void 0}function w(a,b){return a.match(/^include\b/)?(b.restOfLine="string",c):void 0}function x(a,b){return a.match(/^include:([a-zA-Z0-9\-]+)/,!1)&&a.match("include")?(b.isIncludeFiltered=!0,c):void 0}function y(a,b){if(b.isIncludeFiltered){var c=H(a,b);return b.isIncludeFiltered=!1,b.restOfLine="string",c}}function z(a,b){return a.match(/^mixin\b/)?(b.javaScriptLine=!0,c):void 0}function A(a,b){return a.match(/^\+([-\w]+)/)?(a.match(/^\( *[-\w]+ *=/,!1)||(b.javaScriptArguments=!0,b.javaScriptArgumentsDepth=0),"variable"):a.match(/^\+#{/,!1)?(a.next(),b.mixinCallAfter=!0,n(a,b)):void 0}function B(a,b){return b.mixinCallAfter?(b.mixinCallAfter=!1,a.match(/^\( *[-\w]+ *=/,!1)||(b.javaScriptArguments=!0,b.javaScriptArgumentsDepth=0),!0):void 0}function C(a,b){return a.match(/^(if|unless|else if|else)\b/)?(b.javaScriptLine=!0,c):void 0}function D(a,b){return a.match(/^(- *)?(each|for)\b/)?(b.isEach=!0,c):void 0}function E(a,b){if(b.isEach){if(a.match(/^ in\b/))return b.javaScriptLine=!0,b.isEach=!1,c;if(a.sol()||a.eol())b.isEach=!1;else if(a.next()){for(;!a.match(/^ in\b/,!1)&&a.next(););return"variable"}}}function F(a,b){return a.match(/^while\b/)?(b.javaScriptLine=!0,c):void 0}function G(a,b){var c;return(c=a.match(/^(\w(?:[-:\w]*\w)?)\/?/))?(b.lastTag=c[1].toLowerCase(),"script"===b.lastTag&&(b.scriptType="application/javascript"),"tag"):void 0}function H(c,d){if(c.match(/^:([\w\-]+)/)){var e;return b&&b.innerModes&&(e=b.innerModes(c.current().substring(1))),e||(e=c.current().substring(1)),"string"==typeof e&&(e=a.getMode(b,e)),U(c,d,e),"atom"}}function I(a,b){return a.match(/^(!?=|-)/)?(b.javaScriptLine=!0,"punctuation"):void 0}function J(a){return a.match(/^#([\w-]+)/)?e:void 0}function K(a){return a.match(/^\.([\w-]+)/)?f:void 0}function L(a,b){return"("==a.peek()?(a.next(),b.isAttrs=!0,b.attrsNest=[],b.inAttributeName=!0,b.attrValue="",b.attributeIsType=!1,"punctuation"):void 0}function M(a,b){if(b.isAttrs){if(g[a.peek()]&&b.attrsNest.push(g[a.peek()]),b.attrsNest[b.attrsNest.length-1]===a.peek())b.attrsNest.pop();else if(a.eat(")"))return b.isAttrs=!1,"punctuation";if(b.inAttributeName&&a.match(/^[^=,\)!]+/))return("="===a.peek()||"!"===a.peek())&&(b.inAttributeName=!1,b.jsState=h.startState(),b.attributeIsType="script"===b.lastTag&&"type"===a.current().trim().toLowerCase()?!0:!1),"attribute";var c=h.token(a,b.jsState);if(b.attributeIsType&&"string"===c&&(b.scriptType=a.current().toString()),0===b.attrsNest.length&&("string"===c||"variable"===c||"keyword"===c))try{return Function("","var x "+b.attrValue.replace(/,\s*$/,"").replace(/^!/,"")),b.inAttributeName=!0,b.attrValue="",a.backUp(a.current().length),M(a,b)}catch(d){}return b.attrValue+=a.current(),c||!0}}function N(a,b){return a.match(/^&attributes\b/)?(b.javaScriptArguments=!0,b.javaScriptArgumentsDepth=0,"keyword"):void 0}function O(a){return a.sol()&&a.eatSpace()?"indent":void 0}function P(a,b){return a.match(/^ *\/\/(-)?([^\n]*)/)?(b.indentOf=a.indentation(),b.indentToken="comment","comment"):void 0}function Q(a){return a.match(/^: */)?"colon":void 0}function R(a,b){return a.match(/^(?:\| ?| )([^\n]+)/)?"string":a.match(/^(<[^\n]*)/,!1)?(U(a,b,"htmlmixed"),b.innerModeForLine=!0,V(a,b,!0)):void 0}function S(a,b){if(a.eat(".")){var c=null;return"script"===b.lastTag&&-1!=b.scriptType.toLowerCase().indexOf("javascript")?c=b.scriptType.toLowerCase().replace(/"|'/g,""):"style"===b.lastTag&&(c="css"),U(a,b,c),"dot"}}function T(a){return a.next(),null}function U(c,d,e){e=a.mimeModes[e]||e,e=b.innerModes?b.innerModes(e)||e:e,e=a.mimeModes[e]||e,e=a.getMode(b,e),d.indentOf=c.indentation(),e&&"null"!==e.name?d.innerMode=e:d.indentToken="string"}function V(a,b,c){return a.indentation()>b.indentOf||b.innerModeForLine&&!a.sol()||c?b.innerMode?(b.innerState||(b.innerState=b.innerMode.startState?b.innerMode.startState(a.indentation()):{}),a.hideFirstChars(b.indentOf+2,function(){return b.innerMode.token(a,b.innerState)||!0})):(a.skipToEnd(),b.indentToken):(a.sol()&&(b.indentOf=1/0,b.indentToken=null,b.innerMode=null,b.innerState=null),void 0)}function W(a,b){if(a.sol()&&(b.restOfLine=""),b.restOfLine){a.skipToEnd();var c=b.restOfLine;return b.restOfLine="",c}}function X(){return new i}function Y(a){return a.copy()}function Z(a,b){var c=V(a,b)||W(a,b)||o(a,b)||y(a,b)||E(a,b)||M(a,b)||j(a,b)||k(a,b)||B(a,b)||l(a,b)||m(a,b)||n(a,b)||p(a,b)||q(a,b)||r(a,b)||s(a,b)||t(a,b)||u(a,b)||v(a,b)||w(a,b)||x(a,b)||z(a,b)||A(a,b)||C(a,b)||D(a,b)||F(a,b)||G(a,b)||H(a,b)||I(a,b)||J(a,b)||K(a,b)||L(a,b)||N(a,b)||O(a,b)||R(a,b)||P(a,b)||Q(a,b)||S(a,b)||T(a,b);return c===!0?null:c}var c="keyword",d="meta",e="builtin",f="qualifier",g={"{":"}","(":")","[":"]"},h=a.getMode(b,"javascript");return i.prototype.copy=function(){var b=new i;return b.javaScriptLine=this.javaScriptLine,b.javaScriptLineExcludesColon=this.javaScriptLineExcludesColon,b.javaScriptArguments=this.javaScriptArguments,b.javaScriptArgumentsDepth=this.javaScriptArgumentsDepth,b.isInterpolating=this.isInterpolating,b.interpolationNesting=this.intpolationNesting,b.jsState=a.copyState(h,this.jsState),b.innerMode=this.innerMode,this.innerMode&&this.innerState&&(b.innerState=a.copyState(this.innerMode,this.innerState)),b.restOfLine=this.restOfLine,b.isIncludeFiltered=this.isIncludeFiltered,b.isEach=this.isEach,b.lastTag=this.lastTag,b.scriptType=this.scriptType,b.isAttrs=this.isAttrs,b.attrsNest=this.attrsNest.slice(),b.inAttributeName=this.inAttributeName,b.attributeIsType=this.attributeIsType,b.attrValue=this.attrValue,b.indentOf=this.indentOf,b.indentToken=this.indentToken,b.innerModeForLine=this.innerModeForLine,b},{startState:X,copyState:Y,token:Z}}),a.defineMIME("text/x-jade","jade")}),function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],a):a(CodeMirror)}(function(a){"use strict";a.defineMode("javascript",function(b,c){function m(a){for(var c,b=!1,d=!1;null!=(c=a.next());){if(!b){if("/"==c&&!d)return;"["==c?d=!0:d&&"]"==c&&(d=!1)}b=!b&&"\\"==c}}function p(a,b,c){return n=a,o=c,b}function q(a,b){var c=a.next();if('"'==c||"'"==c)return b.tokenize=r(c),b.tokenize(a,b);if("."==c&&a.match(/^\d+(?:[eE][+\-]?\d+)?/))return p("number","number");if("."==c&&a.match(".."))return p("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(c))return p(c);if("="==c&&a.eat(">"))return p("=>","operator");if("0"==c&&a.eat(/x/i))return a.eatWhile(/[\da-f]/i),p("number","number");if(/\d/.test(c))return a.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/),p("number","number");if("/"==c)return a.eat("*")?(b.tokenize=s,s(a,b)):a.eat("/")?(a.skipToEnd(),p("comment","comment")):"operator"==b.lastType||"keyword c"==b.lastType||"sof"==b.lastType||/^[\[{}\(,;:]$/.test(b.lastType)?(m(a),a.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/),p("regexp","string-2")):(a.eatWhile(k),p("operator","operator",a.current()));if("`"==c)return b.tokenize=t,t(a,b);if("#"==c)return a.skipToEnd(),p("error","error");if(k.test(c))return a.eatWhile(k),p("operator","operator",a.current());if(i.test(c)){a.eatWhile(i);var d=a.current(),e=j.propertyIsEnumerable(d)&&j[d];return e&&"."!=b.lastType?p(e.type,e.style,d):p("variable","variable",d)}}function r(a){return function(b,c){var e,d=!1;if(f&&"@"==b.peek()&&b.match(l))return c.tokenize=q,p("jsonld-keyword","meta");for(;null!=(e=b.next())&&(e!=a||d);)d=!d&&"\\"==e;return d||(c.tokenize=q),p("string","string")}}function s(a,b){for(var d,c=!1;d=a.next();){if("/"==d&&c){b.tokenize=q;break}c="*"==d}return p("comment","comment")}function t(a,b){for(var d,c=!1;null!=(d=a.next());){if(!c&&("`"==d||"$"==d&&a.eat("{"))){b.tokenize=q;break}c=!c&&"\\"==d}return p("quasi","string-2",a.current())}function v(a,b){b.fatArrowAt&&(b.fatArrowAt=null);var c=a.string.indexOf("=>",a.start);if(!(0>c)){for(var d=0,e=!1,f=c-1;f>=0;--f){var g=a.string.charAt(f),h=u.indexOf(g);if(h>=0&&3>h){if(!d){++f;break}if(0==--d)break}else if(h>=3&&6>h)++d;else if(i.test(g))e=!0;else{if(/["'\/]/.test(g))return;if(e&&!d){++f;break}}}e&&!d&&(b.fatArrowAt=f)}}function x(a,b,c,d,e,f){this.indented=a,this.column=b,this.type=c,this.prev=e,this.info=f,null!=d&&(this.align=d)}function y(a,b){for(var c=a.localVars;c;c=c.next)if(c.name==b)return!0;for(var d=a.context;d;d=d.prev)for(var c=d.vars;c;c=c.next)if(c.name==b)return!0}function z(a,b,c,d,e){var f=a.cc;for(A.state=a,A.stream=e,A.marked=null,A.cc=f,A.style=b,a.lexical.hasOwnProperty("align")||(a.lexical.align=!0);;){var h=f.length?f.pop():g?L:K;if(h(c,d)){for(;f.length&&f[f.length-1].lex;)f.pop()();return A.marked?A.marked:"variable"==c&&y(a,d)?"variable-2":b}}}function B(){for(var a=arguments.length-1;a>=0;a--)A.cc.push(arguments[a])}function C(){return B.apply(null,arguments),!0}function D(a){function b(b){for(var c=b;c;c=c.next)if(c.name==a)return!0;return!1}var d=A.state;if(d.context){if(A.marked="def",b(d.localVars))return;d.localVars={name:a,next:d.localVars}}else{if(b(d.globalVars))return;c.globalVars&&(d.globalVars={name:a,next:d.globalVars})}}function F(){A.state.context={prev:A.state.context,vars:A.state.localVars},A.state.localVars=E}function G(){A.state.localVars=A.state.context.vars,A.state.context=A.state.context.prev}function H(a,b){var c=function(){var c=A.state,d=c.indented;if("stat"==c.lexical.type)d=c.lexical.indented;else for(var e=c.lexical;e&&")"==e.type&&e.align;e=e.prev)d=e.indented;c.lexical=new x(d,A.stream.column(),a,null,c.lexical,b)};return c.lex=!0,c}function I(){var a=A.state;a.lexical.prev&&(")"==a.lexical.type&&(a.indented=a.lexical.indented),a.lexical=a.lexical.prev)}function J(a){function b(c){return c==a?C():";"==a?B():C(b)}return b}function K(a,b){return"var"==a?C(H("vardef",b.length),eb,J(";"),I):"keyword a"==a?C(H("form"),L,K,I):"keyword b"==a?C(H("form"),K,I):"{"==a?C(H("}"),bb,I):";"==a?C():"if"==a?("else"==A.state.lexical.info&&A.state.cc[A.state.cc.length-1]==I&&A.state.cc.pop()(),C(H("form"),L,K,I,jb)):"function"==a?C(pb):"for"==a?C(H("form"),kb,K,I):"variable"==a?C(H("stat"),W):"switch"==a?C(H("form"),L,H("}","switch"),J("{"),bb,I,I):"case"==a?C(L,J(":")):"default"==a?C(J(":")):"catch"==a?C(H("form"),F,J("("),qb,J(")"),K,I,G):"module"==a?C(H("form"),F,vb,G,I):"class"==a?C(H("form"),rb,I):"export"==a?C(H("form"),wb,I):"import"==a?C(H("form"),xb,I):B(H("stat"),L,J(";"),I)}function L(a){return N(a,!1)}function M(a){return N(a,!0)}function N(a,b){if(A.state.fatArrowAt==A.stream.start){var c=b?V:U;if("("==a)return C(F,H(")"),_(fb,")"),I,J("=>"),c,G);if("variable"==a)return B(F,fb,J("=>"),c,G)}var d=b?R:Q;return w.hasOwnProperty(a)?C(d):"function"==a?C(pb,d):"keyword c"==a?C(b?P:O):"("==a?C(H(")"),O,Cb,J(")"),I,d):"operator"==a||"spread"==a?C(b?M:L):"["==a?C(H("]"),Ab,I,d):"{"==a?ab(Y,"}",null,d):"quasi"==a?B(S,d):C()}function O(a){return a.match(/[;\}\)\],]/)?B():B(L)}function P(a){return a.match(/[;\}\)\],]/)?B():B(M)}function Q(a,b){return","==a?C(L):R(a,b,!1)}function R(a,b,c){var d=0==c?Q:R,e=0==c?L:M;return"=>"==a?C(F,c?V:U,G):"operator"==a?/\+\+|--/.test(b)?C(d):"?"==b?C(L,J(":"),e):C(e):"quasi"==a?B(S,d):";"!=a?"("==a?ab(M,")","call",d):"."==a?C(X,d):"["==a?C(H("]"),O,J("]"),I,d):void 0:void 0}function S(a,b){return"quasi"!=a?B():"${"!=b.slice(b.length-2)?C(S):C(L,T)}function T(a){return"}"==a?(A.marked="string-2",A.state.tokenize=t,C(S)):void 0}function U(a){return v(A.stream,A.state),B("{"==a?K:L)}function V(a){return v(A.stream,A.state),B("{"==a?K:M)}function W(a){return":"==a?C(I,K):B(Q,J(";"),I)}function X(a){return"variable"==a?(A.marked="property",C()):void 0}function Y(a,b){return"variable"==a||"keyword"==A.style?(A.marked="property","get"==b||"set"==b?C(Z):C($)):"number"==a||"string"==a?(A.marked=f?"property":A.style+" property",C($)):"jsonld-keyword"==a?C($):"["==a?C(L,J("]"),$):void 0}function Z(a){return"variable"!=a?B($):(A.marked="property",C(pb))}function $(a){return":"==a?C(M):"("==a?B(pb):void 0}function _(a,b){function c(d){if(","==d){var e=A.state.lexical;return"call"==e.info&&(e.pos=(e.pos||0)+1),C(a,c)}return d==b?C():C(J(b))}return function(d){return d==b?C():B(a,c)}}function ab(a,b,c){for(var d=3;d<arguments.length;d++)A.cc.push(arguments[d]);return C(H(b,c),_(a,b),I)}function bb(a){return"}"==a?C():B(K,bb)}function cb(a){return h&&":"==a?C(db):void 0}function db(a){return"variable"==a?(A.marked="variable-3",C()):void 0}function eb(){return B(fb,cb,hb,ib)}function fb(a,b){return"variable"==a?(D(b),C()):"["==a?ab(fb,"]"):"{"==a?ab(gb,"}"):void 0}function gb(a,b){return"variable"!=a||A.stream.match(/^\s*:/,!1)?("variable"==a&&(A.marked="property"),C(J(":"),fb,hb)):(D(b),C(hb))}function hb(a,b){return"="==b?C(M):void 0}function ib(a){return","==a?C(eb):void 0}function jb(a,b){return"keyword b"==a&&"else"==b?C(H("form","else"),K,I):void 0}function kb(a){return"("==a?C(H(")"),lb,J(")"),I):void 0}function lb(a){return"var"==a?C(eb,J(";"),nb):";"==a?C(nb):"variable"==a?C(mb):B(L,J(";"),nb)}function mb(a,b){return"in"==b||"of"==b?(A.marked="keyword",C(L)):C(Q,nb)}function nb(a,b){return";"==a?C(ob):"in"==b||"of"==b?(A.marked="keyword",C(L)):B(L,J(";"),ob)}function ob(a){")"!=a&&C(L)}function pb(a,b){return"*"==b?(A.marked="keyword",C(pb)):"variable"==a?(D(b),C(pb)):"("==a?C(F,H(")"),_(qb,")"),I,K,G):void 0}function qb(a){return"spread"==a?C(qb):B(fb,cb)}function rb(a,b){return"variable"==a?(D(b),C(sb)):void 0}function sb(a,b){return"extends"==b?C(L,sb):"{"==a?C(H("}"),tb,I):void 0}function tb(a,b){return"variable"==a||"keyword"==A.style?(A.marked="property","get"==b||"set"==b?C(ub,pb,tb):C(pb,tb)):"*"==b?(A.marked="keyword",C(tb)):";"==a?C(tb):"}"==a?C():void 0}function ub(a){return"variable"!=a?B():(A.marked="property",C())}function vb(a,b){return"string"==a?C(K):"variable"==a?(D(b),C(zb)):void 0}function wb(a,b){return"*"==b?(A.marked="keyword",C(zb,J(";"))):"default"==b?(A.marked="keyword",C(L,J(";"))):B(K)}function xb(a){return"string"==a?C():B(yb,zb)}function yb(a,b){return"{"==a?ab(yb,"}"):("variable"==a&&D(b),C())
}function zb(a,b){return"from"==b?(A.marked="keyword",C(L)):void 0}function Ab(a){return"]"==a?C():B(M,Bb)}function Bb(a){return"for"==a?B(Cb,J("]")):","==a?C(_(P,"]")):B(_(M,"]"))}function Cb(a){return"for"==a?C(kb,Cb):"if"==a?C(L,Cb):void 0}function Db(a,b){return"operator"==a.lastType||","==a.lastType||k.test(b.charAt(0))||/[,.]/.test(b.charAt(0))}var n,o,d=b.indentUnit,e=c.statementIndent,f=c.jsonld,g=c.json||f,h=c.typescript,i=c.wordCharacters||/[\w$\xa1-\uffff]/,j=function(){function a(a){return{type:a,style:"keyword"}}var b=a("keyword a"),c=a("keyword b"),d=a("keyword c"),e=a("operator"),f={type:"atom",style:"atom"},g={"if":a("if"),"while":b,"with":b,"else":c,"do":c,"try":c,"finally":c,"return":d,"break":d,"continue":d,"new":d,"delete":d,"throw":d,"debugger":d,"var":a("var"),"const":a("var"),let:a("var"),"function":a("function"),"catch":a("catch"),"for":a("for"),"switch":a("switch"),"case":a("case"),"default":a("default"),"in":e,"typeof":e,"instanceof":e,"true":f,"false":f,"null":f,undefined:f,NaN:f,Infinity:f,"this":a("this"),module:a("module"),"class":a("class"),"super":a("atom"),yield:d,"export":a("export"),"import":a("import"),"extends":d};if(h){var i={type:"variable",style:"variable-3"},j={"interface":a("interface"),"extends":a("extends"),constructor:a("constructor"),"public":a("public"),"private":a("private"),"protected":a("protected"),"static":a("static"),string:i,number:i,bool:i,any:i};for(var k in j)g[k]=j[k]}return g}(),k=/[+\-*&%=<>!?|~^]/,l=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/,u="([{}])",w={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,"this":!0,"jsonld-keyword":!0},A={state:null,column:null,marked:null,cc:null},E={name:"this",next:{name:"arguments"}};return I.lex=!0,{startState:function(a){var b={tokenize:q,lastType:"sof",cc:[],lexical:new x((a||0)-d,0,"block",!1),localVars:c.localVars,context:c.localVars&&{vars:c.localVars},indented:0};return c.globalVars&&"object"==typeof c.globalVars&&(b.globalVars=c.globalVars),b},token:function(a,b){if(a.sol()&&(b.lexical.hasOwnProperty("align")||(b.lexical.align=!1),b.indented=a.indentation(),v(a,b)),b.tokenize!=s&&a.eatSpace())return null;var c=b.tokenize(a,b);return"comment"==n?c:(b.lastType="operator"!=n||"++"!=o&&"--"!=o?n:"incdec",z(b,c,n,o,a))},indent:function(b,f){if(b.tokenize==s)return a.Pass;if(b.tokenize!=q)return 0;var g=f&&f.charAt(0),h=b.lexical;if(!/^\s*else\b/.test(f))for(var i=b.cc.length-1;i>=0;--i){var j=b.cc[i];if(j==I)h=h.prev;else if(j!=jb)break}"stat"==h.type&&"}"==g&&(h=h.prev),e&&")"==h.type&&"stat"==h.prev.type&&(h=h.prev);var k=h.type,l=g==k;return"vardef"==k?h.indented+("operator"==b.lastType||","==b.lastType?h.info+1:0):"form"==k&&"{"==g?h.indented:"form"==k?h.indented+d:"stat"==k?h.indented+(Db(b,f)?e||d:0):"switch"!=h.info||l||0==c.doubleIndentSwitch?h.align?h.column+(l?0:1):h.indented+(l?0:d):h.indented+(/^(?:case|default)\b/.test(f)?d:2*d)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:g?null:"/*",blockCommentEnd:g?null:"*/",lineComment:g?null:"//",fold:"brace",helperType:g?"json":"javascript",jsonldMode:f,jsonMode:g}}),a.registerHelper("wordChars","javascript",/[\w$]/),a.defineMIME("text/javascript","javascript"),a.defineMIME("text/ecmascript","javascript"),a.defineMIME("application/javascript","javascript"),a.defineMIME("application/x-javascript","javascript"),a.defineMIME("application/ecmascript","javascript"),a.defineMIME("application/json",{name:"javascript",json:!0}),a.defineMIME("application/x-json",{name:"javascript",json:!0}),a.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),a.defineMIME("text/typescript",{name:"javascript",typescript:!0}),a.defineMIME("application/typescript",{name:"javascript",typescript:!0})});