(this["webpackJsonpjigsaw-game"]=this["webpackJsonpjigsaw-game"]||[]).push([[0],{15:function(e,t,n){e.exports=n(29)},20:function(e,t,n){},21:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(1),o=n.n(i),s=(n(20),n(3)),c=n(4),l=n(5),d=n(7),u=n(6),m=n(13),p=n(14),f=(n(21),n(2)),g=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"onDragEnd",value:function(e){e.destination}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(f.c,{droppableId:this.props.blockId,direction:"horizontal"},(function(t,n){return r.a.createElement("div",Object.assign({},t.droppableProps,{ref:t.innerRef,style:(a=n.isDraggingOver,{background:a?"lightblue":"lightgrey",display:"flex",flexWrap:"wrap"})}),e.props.items.map((function(e,t){return r.a.createElement(f.b,{key:e.id,draggableId:e.id,index:t},(function(t,n){return r.a.createElement("div",Object.assign({className:e.className,ref:t.innerRef},t.draggableProps,t.dragHandleProps,{style:(n.isDragging,a=t.draggableProps.style,Object(p.a)({display:"flex",flexWrap:"wrap"},a))}));var a}))})),t.placeholder);var a})))}}]),n}(r.a.Component),b=(n(28),function(e){for(var t=[],n=0;n<e;n++)t[n]=h(4,n);return t}),h=function(e,t){return Array.from({length:e},(function(e,t){return t})).map((function(e){return{id:"item-".concat(t,"-").concat(10*t+e),className:"puzzle piece".concat(10*t+e)}}))},v=0,E=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={items:b(2),platformOnDragEnd:e.onDragEnd,moveCount:v},a.onDragEnd=a.onDragEnd.bind(Object(l.a)(a)),a}return Object(c.a)(n,[{key:"onDragEnd",value:function(e){if(e.destination)if(v++,e.destination.droppableId===e.source.droppableId){var t=this.state.items,n=function(e,t,n){var a=Array.from(e),r=a.splice(t,1),i=Object(m.a)(r,1)[0];return a.splice(n,0,i),a}(this.state.items[e.source.droppableId],e.source.index,e.destination.index);t[e.source.droppableId]=n,this.setState({items:t,moveCount:v})}else{var a=this.state.items;!function(e,t){var n=e[t.source.droppableId].splice(e[t.source.droppableId].indexOf(e[t.source.droppableId][t.source.index]),1);e[t.destination.droppableId].splice(t.destination.index,0,n[0])}(a,e),this.setState({items:a,moveCount:v})}}},{key:"render",value:function(){return r.a.createElement("div",{className:"pad"},r.a.createElement("div",{className:"headerContainer"},r.a.createElement("h1",null,"Jigsaw"),r.a.createElement("h2",null,"Number of moves: ",this.state.moveCount)),r.a.createElement("div",{className:"container"},r.a.createElement(f.a,{onDragEnd:this.onDragEnd},r.a.createElement(g,{items:this.state.items[0],blockId:"0"}),r.a.createElement(g,{items:this.state.items[1],blockId:"1"}))))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.a4341f85.chunk.js.map