(this["webpackJsonpmeal-generator"]=this["webpackJsonpmeal-generator"]||[]).push([[0],{13:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(6),c=n.n(l),s=n(1),i=n(2),u=n(4),m=n(3),o=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"navbar bg-primary"},r.a.createElement("h1",null,"Get your meal now !"),r.a.createElement("button",{className:"btn btn-light",onClick:this.props.onClick,name:"randomize"},"Get meal !")))}}]),n}(r.a.Component),f=(n(13),function(e){var t=e.youtube;return r.a.createElement("div",null,r.a.createElement("iframe",{width:"420",height:"315",src:t}))}),d=function(e){var t=e.thumb,n=e.title;return r.a.createElement("div",{className:"card all-center grid-2"},r.a.createElement("h1",{className:"py-2 text-center ",style:{fontSize:"1.5em"}},n),r.a.createElement("img",{className:"round-img",src:t,alt:"meal",style:{width:"300px"}}))},h=function(e){var t=e.instructions;return r.a.createElement("div",{className:"p-1 my-1"},r.a.createElement("h1",{className:"text-center py-1"},"Steps"),r.a.createElement("ol",null,t.map((function(e,t){return r.a.createElement("li",{key:t},e)}))))},p=function(e){var t=e.ingredients;return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center py-1 my-1"},"Ingredients"),r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement("li",{key:t},e)}))))},E=n(7),b=n.n(E),v=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).ingredients=function(e){return console.log(e),Object.entries(e).map((function(e){return e})).filter((function(e){return e[0].includes("Ingredient")})).filter((function(e){return""!==e[1]&&" "!==e[1]})).map((function(e){return e[1]}))},a.measures=function(e){return Object.entries(e).map((function(e){return e})).filter((function(e){return e[0].includes("Measure")})).filter((function(e){return""!==e[1]&&" "!==e[1]})).map((function(e){return e[1]}))},a.formatIngredients=function(e,t){return t.map((function(t,n){return"".concat(t," ").concat(e[n])}))},a.formatInstructions=function(e){var t=e.split(".");return t.pop(),t},a.onClick=function(){fetch("https://www.themealdb.com/api/json/v1/1/random.php").then((function(e){return e.json()})).then((function(e){a.setState({meal:{strMeal:e.meals[0].strMeal,strMealThumb:e.meals[0].strMealThumb,strInstructions:a.formatInstructions(e.meals[0].strInstructions),strYouTube:e.meals[0].strYoutube.replace(e.meals[0].strYoutube.split("=")[0],"https://www.youtube.com/embed/").split("").filter((function(e){return"="!==e})).join(""),strIngredients:a.formatIngredients(a.ingredients(e.meals[0]),a.measures(e.meals[0]))}})})).catch((function(e){console.warn(e)}))},a.state={meal:{}},a}return Object(i.a)(n,[{key:"render",value:function(){return b.a.isEmpty(this.state.meal)?r.a.createElement("section",null,r.a.createElement(o,{res:this.state.meal,onClick:this.onClick})):r.a.createElement("section",null,r.a.createElement("section",{className:"header"},r.a.createElement(o,{res:this.state.meal,onClick:this.onClick})),r.a.createElement("section",{className:"container"},r.a.createElement("div",{className:"title"},r.a.createElement(d,{thumb:this.state.meal.strMealThumb,title:this.state.meal.strMeal})),r.a.createElement("div",{className:"grid-2"},r.a.createElement("div",{className:"card all-center"},r.a.createElement(f,{youtube:this.state.meal.strYouTube})),r.a.createElement("div",{className:"card "},r.a.createElement(p,{ingredients:this.state.meal.strIngredients}))),r.a.createElement("div",{className:"card"},r.a.createElement(h,{instructions:this.state.meal.strInstructions}))),r.a.createElement("footer",{className:" all-center p-1"},r.a.createElement("p",null,"By Julien")))}}]),n}(r.a.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root"))},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.53b68cff.chunk.js.map