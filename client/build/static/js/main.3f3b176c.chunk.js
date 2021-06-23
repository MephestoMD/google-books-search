(this["webpackJsonpgoogle-books-search"]=this["webpackJsonpgoogle-books-search"]||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n(30),s=n.n(a),o=n(9),r=(n(37),n(2)),i=(n(38),n(0)),l=function(){return Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)(o.b,{className:"navbar-brand",to:"/search",children:"Google Books"}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(i.jsxs)("ul",{className:"navbar-nav",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(o.c,{className:"nav-link","aria-current":"page",to:"/search",children:"Search"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(o.c,{className:"nav-link",to:"/saved",children:"Saved"})})]})})]})})},d=n(13),j=n(14),b=n(16),h=n(15),u=function(){return Object(i.jsx)("div",{className:"jumbotron jumbotron-fluid",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{className:"display-4",children:"Saved Books"}),Object(i.jsx)("p",{className:"lead",children:"Here are all of your saved books."})]})})},m=n(32);function O(e){return Object(m.a)(e).length>100?e.slice(0,99)+"...":e}n(47);var v=function(e){var t=e.id,n=e.onDelete;return console.log(t),Object(i.jsx)("span",{onClick:function(){return n(t)},className:"delete-btn",role:"button",tabIndex:"0",children:"\u2717"})},x=(n(48),function(e){var t=e.book,n=t.authors,c=t.description,a=t.image,s=t.link,o=t.title,r=t._id,l=e.onDelete;return Object(i.jsx)("div",{className:"card w-90 mb-5",children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsxs)("div",{className:"col",children:[Object(i.jsx)("img",{className:"img-thumbnail img-fluid",src:a||"https://img.icons8.com/pastel-glyph/64/000000/image--v1.png",alt:o}),Object(i.jsx)("div",{className:"card-body",children:Object(i.jsx)("h5",{className:"card-title",children:O(o)})}),Object(i.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(i.jsx)("h6",{className:"list-group-item",children:"Author(s):"}),n.map((function(e){return Object(i.jsx)("li",{className:"list-group-item list-group-item-secondary",children:e})})),Object(i.jsx)("li",{id:"list-link",className:"list-group-item",children:Object(i.jsx)("a",{href:s,children:Object(i.jsx)("button",{id:"card-link",children:"Google Books Link"})})})]})]}),Object(i.jsxs)("div",{className:"col-8",children:[Object(i.jsx)(v,{id:r,onDelete:l}),Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("p",{id:"desc-title",children:"------------------------------------"})}),Object(i.jsx)("div",{className:"row",id:"desc",children:Object(i.jsx)("p",{id:"description",children:c||"<No description found>"})})]})]})})}),f=n(11),g=n.n(f),p=function(e){return g.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(e))},k=function(){return g.a.get("/api/books/")},N=function(e){return g.a.delete("/api/books/"+e)},y=function(e){return g.a.post("/api/books/",e)},S=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={books:[]},e.getSavedBooks=function(){k().then((function(t){return e.setState({books:t.data})}))},e.handleDelete=function(t){N(t).then((function(){return e.getSavedBooks()})).catch((function(e){return console.log(e)}))},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.getSavedBooks()}},{key:"render",value:function(){var e=this;console.log(this.state.books);var t=this.state.books;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(u,{}),Object(i.jsx)("div",{className:"fluid container",children:t.length?t.map((function(t){return Object(i.jsx)(x,{onDelete:e.handleDelete,book:t},t._id)})):Object(i.jsx)("h1",{children:"No books to display"})})]})}}]),n}(c.Component),w=function(){return Object(i.jsx)("div",{className:"jumbotron jumbotron-fluid",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{className:"display-4",children:"(React) Google Books Search"}),Object(i.jsx)("p",{className:"lead",children:"Search and save books from the Google Books API using the form below."})]})})},B=function(e){var t=e.value,n=e.onChange;return Object(i.jsx)("form",{className:"form-inline my-2 my-lg-4",children:Object(i.jsx)("input",{className:"form-control mr-sm-2",type:"search",name:"query",placeholder:"Search for a book here...","aria-label":"Search",value:t,onChange:function(e){return n(e.currentTarget.value)}})})},D=(n(67),function(e){var t=e.bookData,n=e.onSave;return Object(i.jsx)("span",{onClick:function(){return n(t)},className:"save-btn",role:"button",tabIndex:"0",children:"\ud83d\udcbe"})}),I=(n(68),function(e){console.log(e);var t,n=e.onSave,c=(e.book.id,e.book.volumeInfo),a=c.title,s=c.description,o=c.infoLink,r=c.authors;e.book.volumeInfo.imageLinks&&(t=e.book.volumeInfo.imageLinks.thumbnail);var l={title:a,description:s,infoLink:o,authors:r,thumbnail:t};return console.log(l),Object(i.jsx)("div",{className:"card w-90 mb-5",children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsxs)("div",{className:"col",children:[Object(i.jsx)("img",{className:"img-thumbnail img-fluid",src:t||"https://img.icons8.com/pastel-glyph/64/000000/image--v1.png",alt:a}),Object(i.jsx)("div",{className:"card-body",children:Object(i.jsx)("h5",{className:"card-title",children:O(a)})}),Object(i.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(i.jsx)("h6",{className:"list-group-item",children:"Author(s):"}),r.map((function(e){return Object(i.jsx)("li",{className:"list-group-item list-group-item-secondary",children:e})})),Object(i.jsx)("li",{id:"list-link",className:"list-group-item",children:Object(i.jsx)("a",{href:o,children:Object(i.jsx)("button",{id:"card-link",children:"Google Books Link"})})})]})]}),Object(i.jsxs)("div",{className:"col-8",children:[Object(i.jsx)(D,{bookData:l,onSave:n}),Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("p",{id:"desc-title",children:"------------------------------------"})}),Object(i.jsx)("div",{className:"row",id:"desc",children:Object(i.jsx)("p",{id:"description",children:s||"<No description found>"})})]})]})})}),A=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={books:[],searchQuery:""},e.handleSearch=function(t){e.loadBooks(),e.setState({searchQuery:t})},e.loadBooks=function(){var t=e.state.searchQuery;console.log(t),t&&p(t).then((function(t){return e.setState({books:t.data.items.filter((function(e){return e.volumeInfo.authors}))})}))},e.handleQueryData=function(){return{searchQuery:e.state.searchQuery}},e.handleSave=function(t){var n=t.description,c=t.title,a=t.infoLink,s=t.authors,o=t.thumbnail;console.log(o,n,c,a,s),y({title:c,authors:s,description:n,image:o,link:a}).then((function(){return e.loadBooks()})).catch((function(e){return console.log(e)}))},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){var e=this,t=this.handleQueryData().searchQuery,n=this.state.books;return console.log(n),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(w,{}),Object(i.jsx)(B,{value:t,onChange:this.handleSearch}),Object(i.jsx)("div",{className:"fluid container",children:n.length?n.map((function(t){return Object(i.jsx)(I,{onSave:e.handleSave,book:t})})):Object(i.jsx)("h1",{children:"No books to display"})})]})}}]),n}(c.Component),C=function(){return Object(i.jsxs)("body",{children:[Object(i.jsx)("h1",{children:"404"}),Object(i.jsx)("h2",{children:"PAGE NOT FOUND"}),Object(i.jsx)("h3",{children:"BACK TO HOME?"}),Object(i.jsx)("a",{href:"/",class:"yes",children:"YES"}),Object(i.jsx)("br",{}),Object(i.jsx)("a",{href:"https://www.youtube.com/watch?v=G3AfIvJBcGo",children:"NO"})]})};var G=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l,{}),Object(i.jsx)("main",{className:"container",children:Object(i.jsxs)(r.d,{children:[Object(i.jsx)(r.b,{path:"/search",component:A}),Object(i.jsx)(r.b,{path:"/saved",component:S}),Object(i.jsx)(r.b,{path:"/not-found",component:C}),Object(i.jsx)(r.a,{from:"/",exact:!0,to:"/search"}),Object(i.jsx)(r.a,{to:"/not-found"})]})})]})};n(69);s.a.render(Object(i.jsx)(o.a,{children:Object(i.jsx)(G,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.3f3b176c.chunk.js.map