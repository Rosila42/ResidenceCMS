(self.webpackChunk=self.webpackChunk||[]).push([[871],{854:()=>{$(document).ready((function(){"use strict";$("#name input").keyup((function(){let e=function(e){let t=[],a={а:"a",б:"b",в:"v",г:"g",д:"d",е:"e",ё:"e",ж:"zh",з:"z",и:"i",й:"y",к:"k",л:"l",м:"m",н:"n",о:"o",п:"p",р:"r",с:"s",т:"t",у:"u",ф:"f",х:"h",ц:"ts",ч:"ch",ш:"sh",щ:"shch",ы:"y",э:"e",ю:"iu",я:"ya",ь:"",ъ:""};for(let n=0;n<e.length;++n)t.push(a[e[n]]||void 0===a[e[n].toLowerCase()]&&e[n]||a[e[n].toLowerCase()].replace(/^(.)/,(function(e){return e.toUpperCase()})));return t.join("")}($("#name input").val());$("#slug input").val(e.replace(/^\s+|\s+$/g,"").toLowerCase().replace(/[^a-z0-9 -]/g,"-").replace(/\s+/g,"-").replace(/-+/g,"-").replace(/^-/,"").replace(/-$/,""))}))}))}},e=>{"use strict";var t;t=854,e(e.s=t)}]);