(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{149:function(e,t,n){},150:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(13),s=n.n(r),i=(n(92),n(24)),o=n(27),l=n(25),u=n(7),m=n(28),d=(n(93),n(30)),h=n(8),p=n.n(h),f=n(16),g=(n(95),n(96),n(164)),b=n(84),E={display:"inline-block",margin:"30px auto"},w=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(o.a)(this,Object(l.a)(t).call(this,e))).componentWillReceiveProps=function(e){n.setState({menu:e.menu.menu,store:e.menu.name,numberOfPages:e.menu.pagination.pages,actualPage:1,limit:e.menu.pagination.limit,itemsCount:e.menu.pagination.elementsCount})},n.handleSwitchForPagination=function(){n.setState({switch:!n.state.switch,menu:[],actualPage:1},function(){n.loading=!0,n.state.switch?n.fetchMoreItems():n.fetchMoreItems(1)})},n.componentDidMount=Object(f.a)(p.a.mark(function e(){var t;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=document.getElementById("loading"),window.addEventListener("scroll",function(e){var a=t.offsetTop-600;window.pageYOffset+window.innerHeight>=a&&!n.loading&&n.state.switch&&(n.loading=!0,n.fetchMoreItems())});case 2:case"end":return e.stop()}},e)})),n.fetchMoreItems=function(){var e=Object(f.a)(p.a.mark(function e(t){var a,c,r,s;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.state.actualPage,t&&(a=t),e.prev=2,c=n.state.store,e.next=6,fetch("".concat(n.props.HOSTNAME,"/partnerships/").concat(c,"/menu?skip=").concat(10*(a-1)));case 6:return r=e.sent,e.next=9,r.json();case 9:s=e.sent,s.success&&(t?n.setState({menu:Object(d.a)(s.menu),numberOfPages:s.pagination.pages,switch:n.state.switch,actualPage:t},function(){document.body.scrollTop=document.documentElement.scrollTop=0,n.loading=!1}):n.setState({menu:[].concat(Object(d.a)(n.state.menu),Object(d.a)(s.menu)),numberOfPages:s.pagination.pages,switch:n.state.switch,actualPage:n.state.actualPage+1},function(){n.loading=!1})),n.loading=!1,e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0);case 18:case"end":return e.stop()}},e,null,[[2,15]])}));return function(t){return e.apply(this,arguments)}}(),n.render=function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"infinite"},c.a.createElement("div",null,c.a.createElement("p",null,"Infinite Scroll"),c.a.createElement(g.a,{checked:n.state.switch,color:"primary",onChange:n.handleSwitchForPagination}))),c.a.createElement("section",null,c.a.createElement("div",{className:"menuSections"},c.a.createElement("ul",null,c.a.createElement("div",{className:"arrow"},">"),c.a.createElement("li",null,"Popular Items"),c.a.createElement("li",null,"Value Menu"),c.a.createElement("li",null,"Drinks"),c.a.createElement("li",null,"Chicken"),c.a.createElement("li",null,"Sanswiches"),c.a.createElement("li",null,"Chicken"),c.a.createElement("li",null,"Sanswiches"))),c.a.createElement("div",{className:"menuContainer"},n.state.menu.map(function(e){var t=e.title,a=e.description,r=e.price,s=e.banner_image,i=e._id;return s?c.a.createElement("div",{className:"menuCards",key:n.state.store+i},c.a.createElement("img",{src:s,alt:s}),c.a.createElement("h2",{className:"title"},t),c.a.createElement("p",null,a),c.a.createElement("span",{className:"price"},r)):c.a.createElement("div",{className:"menuCards no_img",key:n.state.store+i},c.a.createElement("img",{alt:"",src:"https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.puella-magi.net%2Fthumb%2F2%2F27%2FNo_Image_Wide.svg%2F800px-No_Image_Wide.svg.png%3F20110202071158&f=1"}),c.a.createElement("h2",{className:"title"},t),c.a.createElement("p",null,a),c.a.createElement("span",{className:"price"},r))}),0===n.state.menu.length&&c.a.createElement("div",{className:"menuCards"},c.a.createElement("h2",{className:"title"},"This section or entire website is having big changes by the original source (Doordash.com). These problems will be fixed soon, please come back later")))),c.a.createElement("div",{id:"loading"},!n.state.switch&&c.a.createElement(b.a,{current:n.state.actualPage,total:n.state.itemsCount,limit:10,onChange:n.fetchMoreItems,centerRipple:!0,style:E})))},n.state={menu:[],store:"",switch:!1,numberOfPages:0,actualPage:1,limit:10,itemsCount:0},n.loading=!1,n.fetchMoreItems=n.fetchMoreItems.bind(Object(u.a)(n)),n.handleSwitchForPagination=n.handleSwitchForPagination.bind(Object(u.a)(n)),n}return Object(m.a)(t,e),t}(a.Component),S=n(29),v=(n(149),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(o.a)(this,Object(l.a)(t).call(this,e))).componentDidMount=Object(f.a)(p.a.mark(function e(){var t,a;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(n.props.HOSTNAME,"/partnerships"));case 2:if(t=e.sent,a=[],200!==t.status){e.next=9;break}return e.next=7,t.json();case 7:a=e.sent,n.setState({fetchedStoreData:a,selectedMenu:a[0].name},function(){n.fetchMenuFromSelectedStore(n.state.selectedMenu,!0)});case 9:case"end":return e.stop()}},e)})),n.fetchMenuFromSelectedStore=function(){var e=Object(f.a)(p.a.mark(function e(t){var a,c=arguments;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=c.length>1&&void 0!==c[1]&&c[1],c.length>2&&void 0!==c[2]&&c[2],(t!==n.state.selectedMenu||a)&&n.setState({selectedMenu:t},Object(f.a)(p.a.mark(function e(){var t,a,c,r,s;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state,a=t.selectedMenu,c=t.query,e.next=3,fetch("".concat(n.props.HOSTNAME,"/partnerships/").concat(a,"/menu/").concat(c));case 3:if(r=e.sent,s={_id:"",name:"",menu:[],pagination:{elementsCount:0,pages:0,skip:0,limit:10,actualPage:1}},200!==r.status){e.next=9;break}return e.next=8,r.json();case 8:s=e.sent;case 9:n.setState({fetchedStoreMenu:s},function(){n.props.onSelectedStore(n.state.fetchedStoreMenu)});case 10:case"end":return e.stop()}},e)})));case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.handleNewFetch=function(e){n.fetchMenuFromSelectedStore(e.currentTarget.dataset.storeName)},n.state={fetchedStoreData:[],fetchedStoreMenu:[],selectedMenu:"",query:"",banner_image:""},n.fetchMenuFromSelectedStore=n.fetchMenuFromSelectedStore.bind(Object(u.a)(n)),n.handleNewFetch=n.handleNewFetch.bind(Object(u.a)(n)),n}return Object(m.a)(t,e),Object(S.a)(t,[{key:"Menu",value:function(e){}},{key:"render",value:function(){for(var e=[],t=0;t<this.state.fetchedStoreData.length;t++){var n=this.state.fetchedStoreData[t],a=n.banner_image,r=n.title,s=n._id,i=n.name;null!=a?e.push(c.a.createElement("li",{key:s,className:"storesCard",onClick:this.handleNewFetch,"data-store-name":i},c.a.createElement("img",{src:a,alt:i+"_logo",className:"img"}))):e.push(c.a.createElement("li",{key:s,className:"storesCard",onClick:this.handleNewFetch,"data-store-name":i},c.a.createElement("p",null,r)))}return c.a.createElement("div",{id:"storesSection"},c.a.createElement("ul",null,e.map(function(e){return e})))}}]),t}(a.Component)),O=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(l.a)(t).call(this))).handleMenu=function(t){e.setState({menu:t})},e.render=function(){return c.a.createElement("div",null,c.a.createElement(v,{name:"Stores",onSelectedStore:e.handleMenu,HOSTNAME:e.HOSTNAME}),c.a.createElement(w,{menu:e.state.menu,HOSTNAME:e.HOSTNAME}))},e.state={menu:[]},e.handleMenu=e.handleMenu.bind(Object(u.a)(e)),e.HOSTNAME="https://doorflash-api.azurewebsites.net/v1",e}return Object(m.a)(t,e),t}(a.Component);s.a.render(c.a.createElement(O,{name:"Bryan"}),document.getElementById("root"))},87:function(e,t,n){e.exports=n(150)},92:function(e,t,n){},93:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){}},[[87,1,2]]]);
//# sourceMappingURL=main.2683188e.chunk.js.map