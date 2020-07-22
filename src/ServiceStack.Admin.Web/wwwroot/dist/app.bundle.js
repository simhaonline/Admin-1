webpackJsonp([0],{100:function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(5),i=r(102),a=r(21),s=r(22),l=function(e){function t(t,r){var n=e.call(this,t,r)||this;return n.state={results:null},n}return n(t,e),t.prototype.selectField=function(e){var t=e.target.options[e.target.selectedIndex].value,r=this.props.values.searchType,n=this.props.values.searchText,o=this.getSearchField(t);if(this.isIntField(o)){isNaN(n)&&(n="");var i=this.props.conventions.filter(function(e){return e.name===r})[0];this.matchesConvention(i,o.type)||(r="")}this.props.onChange({searchField:t,searchType:r,searchText:n})},t.prototype.selectOperand=function(e){this.props.onChange({searchType:e.target.options[e.target.selectedIndex].value})},t.prototype.changeText=function(e){this.props.onChange({searchText:e.target.value})},t.prototype.selectFormat=function(e){e===this.props.values.format&&(e=""),this.props.onChange({format:e})},t.prototype.clear=function(){this.props.onChange({searchField:null,searchType:null,searchText:"",format:"",orderBy:"",offset:0,fields:[],conditions:[]})},t.prototype.getAutoQueryUrl=function(e){var t=(this.props.selected.operation.routes||[]).filter(function(e){return-1===e.path.indexOf("{")})[0],r=t?t.path:"/"+(e||"html")+"/reply/"+this.props.selected.requestType.name,n=a.combinePaths(this.props.config.servicebaseurl,r);return t&&e&&(n+="."+e),this.getArgs().forEach(function(e){return n=a.createUrl(n,e)}),this.props.values.offset&&(n=a.createUrl(n,{skip:this.props.values.offset})),this.props.values.orderBy&&(n=a.createUrl(n,{orderBy:this.props.values.orderBy})),(this.props.values.fields||[]).length>0&&(n=a.createUrl(n,{fields:this.props.values.fields.join(",")}),e&&"html"!==e||(n=a.createUrl(n,{jsconfig:"edv"}))),n=a.createUrl(n,{include:"Total"}),n=n.replace(/%2C/g,",")},t.prototype.isValidCondition=function(){var e=this.props.values,t=e.searchField,r=e.searchType,n=e.searchText;return t&&r&&n&&("between"!==r.toLowerCase()||n.indexOf(",")>0&&n.indexOf(",")<n.length-1)},t.prototype.isDirty=function(){return this.isValidCondition()||this.props.values.format||this.props.values.offset||(this.props.values.fields||[]).length>0||this.props.values.orderBy||(this.props.values.conditions||[]).length>0},t.prototype.getArgs=function(){var e=this,t=[],r=(this.props.values.conditions||[]).slice(0);return this.isValidCondition()&&r.push(this.props.values),r.forEach(function(r){var n=r.searchField,o=r.searchType,i=r.searchText,a=e.props.conventions.filter(function(e){return e.name===o})[0];if(a){var s=a.value.replace("%",n);t.push((l={},l[s]=i,l))}var l}),t},t.prototype.getSearchField=function(e){return this.props.selected.fromTypeFields.filter(function(t){return t.name===e})[0]},t.prototype.isIntField=function(e){return e&&(e.type||"").toLowerCase().startsWith("int")},t.prototype.matchesConvention=function(e,t){return!e||!e.types||!t||e.types.replace(/ /g,"").toLowerCase().split(",").indexOf(t.toLowerCase())>=0},t.prototype.getConventions=function(){var e=this,t=this.props.values;if(t&&t.searchField){var r=this.getSearchField(t.searchField);if(r)return this.props.conventions.filter(function(t){return e.matchesConvention(t,r.type)})}return this.props.conventions},t.prototype.renderResults=function(e){var t=this,r=null,n=null,s=(this.props.viewerArgs.DefaultFields||"").split(",").filter(function(e){return e.trim().length>0});s.length>0&&(r=[],n={},s.forEach(function(e){var t=a.splitOnFirst(e,":");r.push(t[0]),t.length>1&&(n[t[0]]=t[1])}));var l=e.offset,c=e.results,u=e.total,p=this.props.config.maxlimit,d=function(e,r,n){return r?o.createElement("i",{className:"material-icons",style:{cursor:"pointer"},onClick:function(e){return t.props.onChange({offset:n})}},e):o.createElement("i",{className:"material-icons",style:{color:"#ccc"}},e)},f=o.createElement("span",{className:"paging",style:{padding:"0 10px 0 0"}},d("skip_previous",l>0,0),d("chevron_left",l>0,Math.max(l-p,0)),d("chevron_right",l+p<u,l+p),d("skip_next",l+p<u,Math.floor((u-1)/p)*p));return 0===e.results.length?o.createElement("div",{className:"results-none"},"There were no results"):o.createElement("div",null,o.createElement("div",{className:"noselect",style:{color:"#757575",padding:"15px 0"}},f,o.createElement("span",null,"Showing Results ",l+1," - ",l+c.length," of ",u),o.createElement("i",{className:"material-icons",title:"show/hide columns",onClick:function(e){return t.props.onShowDialog("column-prefs-dialog")},style:{verticalAlign:"text-bottom",margin:"0 0 0 10px",cursor:"pointer",fontSize:"20px"}},"view_list")),o.createElement(i.default,{results:e.results,fieldNames:r,fieldWidths:n,selected:this.props.selected,values:this.props.values,onOrderByChange:function(e){return t.props.onChange({orderBy:e})}}))},t.prototype.renderBody=function(e,t){var r=this,n=this.getAutoQueryUrl(this.props.values.format),i=this.props.selected.name,l=this.state.url!==n;if(l){var c=this.getAutoQueryUrl("json");c=a.createUrl(c,{jsconfig:"DateHandler:ISO8601DateOnly,TimeSpanHandler:StandardFormat"}),s.client.get(c).then(function(e){var t=s.normalize(e);t.url=n,r.setState({url:n,name:i,response:t,error:null})}).catch(function(e){var t=e.responseStatus;r.setState({url:n,name:i,response:null,error:t.errorCode+": "+t.message})})}var u=this.props.values.queries||[];return o.createElement("div",null,o.createElement("div",{id:"query-title"},this.props.viewerArgs.Description),o.createElement("div",{id:"url",style:{padding:"0 0 10px 0",whiteSpace:"nowrap"}},o.createElement("a",{href:n,target:"_blank"},n),this.isDirty()?o.createElement("i",{className:"material-icons noselect",title:"reset query",onClick:function(e){return r.clear()},style:{padding:"0 0 0 5px",color:"#757575",fontSize:"16px",verticalAlign:"bottom",cursor:"pointer"}},"clear"):null),o.createElement("select",{value:t.searchField,onChange:function(e){return r.selectField(e)}},o.createElement("option",null),e.fromTypeFields.map(function(e){return o.createElement("option",{key:e.name},e.name)})),o.createElement("select",{value:t.searchType,onChange:function(e){return r.selectOperand(e)}},o.createElement("option",null),this.getConventions().map(function(e){return o.createElement("option",{key:e.name},e.name)})),o.createElement("input",{type:"text",id:"txtSearch",value:t.searchText,autoComplete:"off",onChange:function(e){return r.changeText(e)},onKeyDown:function(e){return 13===e.keyCode?r.props.onAddCondition():null}}),this.isValidCondition()?o.createElement("i",{className:"material-icons",style:{fontSize:"30px",verticalAlign:"bottom",color:"#00C853",cursor:"pointer"},onClick:function(e){return r.props.onAddCondition()},title:"Add condition"},"add_circle"):o.createElement("i",{className:"material-icons",style:{fontSize:"30px",verticalAlign:"bottom",color:"#ccc"},title:"Incomplete condition"},"add_circle"),this.props.config.formats&&0!==this.props.config.formats.length?o.createElement("span",{className:"formats noselect"},this.props.config.formats.map(function(e){return o.createElement("span",{key:e,className:t.format===e?"active":"",onClick:function(t){return r.selectFormat(e)}},e)})):null,this.props.values.conditions.length+u.length>0?o.createElement("div",null,o.createElement("div",{className:"conditions"},this.props.values.conditions.map(function(e){return o.createElement("div",{key:e.id},o.createElement("i",{className:"material-icons",style:{color:"#db4437",cursor:"pointer",padding:"0 5px 0 0"},title:"remove condition",onClick:function(t){return r.props.onRemoveCondition(e)}},"remove_circle"),e.searchField," ",e.searchType," ",e.searchText)})),this.props.values.conditions.length>0?o.createElement("div",{style:{display:"inline-block",verticalAlign:"top",padding:10}},o.createElement("i",{title:"Save Query",className:"material-icons",style:{fontSize:"24px",color:"#444",cursor:"pointer"},onClick:function(e){return r.props.onSaveQuery()}},"save")):null,o.createElement("div",{className:"queries"},u.map(function(e){return o.createElement("div",null,o.createElement("i",{className:"material-icons",style:{color:"#db4437",cursor:"pointer",padding:"0 5px 0 0"},title:"remove query",onClick:function(t){return r.props.onRemoveQuery(e)}},"remove_circle"),o.createElement("span",{className:"lnk",title:"load query",onClick:function(t){return r.props.onLoadQuery(e)}},e.name))}))):null,this.state.response?l&&i!==this.state.name?o.createElement("div",{style:{color:"#757575",padding:"20px 0 0 0"}},o.createElement("i",{className:"material-icons spin",style:{fontSize:"20px",verticalAlign:"text-bottom"}},"cached"),o.createElement("span",{style:{padding:"0 0 0 5px"}},"loading results...")):this.renderResults(this.state.response):this.state.error?o.createElement("div",{style:{color:"#db4437",padding:5}},this.state.error):null)},t.prototype.render=function(){var e=/Edge/.test(navigator.userAgent);return o.createElement("div",{id:"content"},o.createElement("div",{className:"inner"},o.createElement("table",null,o.createElement("tbody",null,o.createElement("tr",null,e?o.createElement("td",{style:{minWidth:"20px"}}):null,o.createElement("td",null,this.props.selected?this.renderBody(this.props.selected,this.props.values):o.createElement("div",{style:{padding:"15px 0",fontSize:"20px",color:"#757575"}},o.createElement("i",{className:"material-icons",style:{verticalAlign:"bottom",margin:"0 10px 0 0"}},"arrow_back"),this.props.userinfo.querycount>0?"Please Select a Query":this.props.userinfo.isauthenticated?"There are no queries available":"Please Sign In to see your available queries")),e?null:o.createElement("td",{style:{minWidth:"20px"}}))))))},t}(o.Component);t.default=l},101:function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(5),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){var e=this;return o.createElement("div",{id:"header",style:{margin:"auto",display:"flex",flexDirection:"row"}},o.createElement("i",{className:"material-icons",style:{cursor:"pointer"},onClick:function(t){return e.props.onSidebarToggle()}},"menu"),o.createElement("h1",null,"AutoQuery"),null==this.props.title?o.createElement("div",{style:{flex:1}}):o.createElement("div",{id:"header-content",style:{display:"flex",flex:1}},o.createElement("div",null,o.createElement("div",{className:"seperator"})),o.createElement("h2",null,this.props.title),o.createElement("div",{style:{margin:"auto",flex:1}})))},t}(o.Component);t.default=i},102:function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(5),i=r(22),a=r(21),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.renderValue=function(e){return Array.isArray(e)?e.join(", "):void 0===e?"":"object"==typeof e?JSON.stringify(e):e+""},t.prototype.formatString=function(e){if(e){if(e.startsWith("http"))return o.createElement("a",{href:e,target:"_blank"},e.substring(e.indexOf("://")+3));if("false"===e.toLowerCase())return o.createElement("i",{className:"material-icons",style:{color:"#757575",fontSize:"14px"}},"check_box_outline_blank");if("true"===e.toLowerCase())return o.createElement("i",{className:"material-icons",style:{color:"#66BB6A",fontSize:"14px"}},"check_box")}return o.createElement("span",null,e)},t.prototype.render=function(){var e=this,t=o.createElement("div",{className:"results-none"},"There were no results"),r=this.props.results;if(r&&r.length>0){var n=this.props.values.fields||[];0===n.length&&(n=this.props.fieldNames||this.props.selected.toTypeFields.map(function(e){return e.name}));var s=this.props.fieldWidths||{},l=this.props.values.orderBy||"",c=l.startsWith("-")?l.substr(1):l;t=o.createElement("table",{className:"results"},o.createElement("thead",null,o.createElement("tr",{className:"noselect"},n.map(function(t){return o.createElement("th",{key:t,style:{cursor:"pointer"},onClick:function(r){return e.props.onOrderByChange(t!==c?"-"+t:l.startsWith("-")?c:"")}},a.humanize(t),t!==c?null:o.createElement("i",{className:"material-icons",style:{fontSize:"18px",verticalAlign:"bottom"}},l.startsWith("-")?"arrow_drop_down":"arrow_drop_up"))}))),o.createElement("tbody",null,r.map(function(t,r){return o.createElement("tr",{key:r},n.map(function(r,n){return o.createElement("td",{key:n,title:e.renderValue(i.getField(t,r)),style:i.getField(s,r)?{maxWidth:parseInt(i.getField(s,r))}:{}},e.formatString(e.renderValue(i.getField(t,r))))}))})))}return t},t}(o.Component);t.default=s},103:function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(5),i=r(36),a=r(21),s=r(22),l=function(e){function t(t,r){var n=e.call(this,t,r)||this;return n.state={filter:void 0},n}return n(t,e),t.prototype.handleFilter=function(e){this.setState({filter:e.target.value.toLowerCase()})},t.prototype.renderIcon=function(e){var t=this.props.viewerArgs[e].IconUrl;return t?t.startsWith("material-icons:")?o.createElement("i",{className:"material-icons"},a.splitOnFirst(t,":")[1]):t.startsWith("octicon:")?o.createElement("span",{className:"mega-octicon octicon-"+a.splitOnFirst(t,":")[1]}):o.createElement("img",{src:t}):o.createElement("i",{className:"material-icons"},"search")},t.prototype.render=function(){var e=this;return o.createElement("div",{id:"sidebar"},o.createElement("div",{className:"inner"},o.createElement("div",{id:"aq-filter"},o.createElement("input",{type:"text",placeholder:"filter",style:{margin:"10px 15px"},onChange:function(t){return e.handleFilter(t)},value:this.state.filter})),o.createElement("div",{id:"aq-list"},Object.keys(this.props.operations).filter(function(t){return null==e.state.filter||t.toLowerCase().indexOf(e.state.filter)>=0}).map(function(t,r){return o.createElement("div",{key:r,className:"aq-item"+(t===e.props.name?" active":"")},e.renderIcon(t),o.createElement(i.Link,{to:s.BasePath+"ss_admin/autoquery/"+t},e.props.viewerArgs[t].Name||t))}))))},t}(o.Component);t.default=l},104:function(e,t){},105:function(e,t){},106:function(e,t){},22:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=r(21);t.BasePath=location.pathname.substring(0,location.pathname.indexOf("/ss_admin")+1),t.client=new n.JsonServiceClient(e.BaseUrl||t.BasePath),t.normalizeKey=function(e){return e.toLowerCase().replace(/_/g,"")};var o=function(e){return"[object Array]"===Object.prototype.toString.call(e)};t.normalize=function(e,r){if(null==e)return e;if(o(e)){if(!r)return e;for(var n=[],i=0;i<e.length;i++)n[i]=t.normalize(e[i],r);return n}if("object"!=typeof e)return e;var a={};for(var s in e)a[t.normalizeKey(s)]=r?t.normalize(e[s],r):e[s];return a},t.getField=function(e,r){return null==e||null==r?null:e[r]||e[Object.keys(e).filter(function(e){return t.normalizeKey(e)===t.normalizeKey(r)})[0]||""]},t.parseResponseStatus=function(e,t){void 0===t&&(t=null);try{var r=JSON.parse(e);return n.sanitize(r.ResponseStatus||r.responseStatus)}catch(r){return{message:t,__error:{error:r,json:e}}}}}).call(t,r(59))},230:function(e,t,r){e.exports=r(95)},95:function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0}),r(105),r(106),r(104);var o=r(5),i=r(60),a=r(7),s=r(36),l=r(22),c=r(98),u=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}n(t,e),t.prototype.render=function(){return o.createElement(c.default,{match:{params:{name:""}}})}}(o.Component),l.BasePath+"ss_admin"),p=u+"/autoquery";i.render(o.createElement(s.BrowserRouter,null,o.createElement("div",null,o.createElement(s.Route,{exact:!0,path:u,render:function(){return o.createElement(a.Redirect,{from:u,to:p})}}),o.createElement(s.Route,{exact:!0,path:p,component:c.default}),o.createElement(s.Route,{path:p+"/:name",component:c.default}))),document.getElementById("app"))},98:function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(5),i=r(101),a=r(103),s=r(100),l=r(99),c=r(22),u=function(e){function t(t,r){var n=e.call(this,t,r)||this;return n.state={metadata:null},c.client.get("/autoquery/metadata").then(function(e){var t=c.normalize(e,!0);n.setState({metadata:t,name:n.getName()})}),n}return n(t,e),t.prototype.render=function(){return this.state.metadata?o.createElement(p,{metadata:this.state.metadata,name:this.getName()}):null},t.prototype.getName=function(){return this.props.match.params.name||""},t}(o.Component);t.default=u;var p=function(e){function t(t,r){var n=e.call(this,t,r)||this,o=n.props.metadata.operations.map(function(e){return e.request}),i={},a={},s={};o.forEach(function(e){i[e]={};var t=n.getAutoQueryViewer(e);t&&t.args&&t.args.forEach(function(t){return i[e][t.name]=t.value}),a[e]=n.props.metadata.operations.filter(function(t){return t.request===e})[0]}),console.log(n.props.metadata),n.props.metadata.types.forEach(function(e){return s[e.name]=e});var l={},c=localStorage.getItem("v1/operationState");return c&&(l=JSON.parse(c)),n.state={sidebarHidden:!1,selected:null,operationState:l,operationNames:o,viewerArgs:i,operations:a,types:s},n}return n(t,e),t.prototype.resolveProperties=function(e){for(var t=(e.properties||[]).slice(0),r=e.inherits;r;){var n=this.state.types[r.name];n&&n.properties&&(n.properties.forEach(function(e){return t.push(e)}),r=n.inherits)}return t},t.prototype.toggleSidebar=function(){this.setState({sidebarHidden:!this.state.sidebarHidden})},t.prototype.getType=function(e){return this.props.metadata.types.filter(function(t){return t.name===e})[0]},t.prototype.getAutoQueryViewer=function(e){var t=this.getType(e);return null!=t&&null!=t.attributes?t.attributes.filter(function(e){return"AutoQueryViewer"===e.name})[0]:null},t.prototype.getAutoQueryViewerArgValue=function(e,t){var r=this.getAutoQueryViewer(e),n=r?r.args.filter(function(e){return e.name===t})[0]:null;return null!=n?n.value:null},t.prototype.getTitle=function(e){return e?this.getAutoQueryViewerArgValue(e.name,"Title")||e.name:null},t.prototype.getOperationValues=function(e){var t=this.state.viewerArgs[e]||{};return Object.assign({searchField:t.DefaultSearchField||"",searchType:t.DefaultSearchType||"",searchText:t.DefaultSearchText,conditions:[],queries:[]},this.state.operationState[e]||{})},t.prototype.getSelected=function(e){var t=this.state.operations[e];if(null==t)return null;var r=this.state.types[e],n=this.state.types[t.from],o=this.state.types[t.to];return{name:e,operation:t,requestType:r,fromType:n,fromTypeFields:this.resolveProperties(o),toType:o,toTypeFields:this.resolveProperties(o)}},t.prototype.onOperationChange=function(e,t){var r=this.getOperationValues(e);Object.keys(t).forEach(function(e){null!=t[e]&&(r[e]=t[e])}),this.setOperationValues(e,r)},t.prototype.addCondition=function(e){var t=this.getOperationValues(e),r={id:t.searchField+"|"+t.searchType+"|"+t.searchText,searchField:t.searchField,searchType:t.searchType,searchText:t.searchText};t.conditions.some(function(e){return e.id===r.id})||(t.searchText="",t.conditions.push(r),this.setOperationValues(e,t))},t.prototype.removeCondition=function(e,t){var r=this.getOperationValues(e);r.conditions=r.conditions.filter(function(e){return e.id!==t.id}),this.setOperationValues(e,r)},t.prototype.setOperationValues=function(e,t){var r=Object.assign({},this.state.operationState);r[e]=t,this.setState({operationState:r}),localStorage.setItem("v1/operationState",JSON.stringify(r))},t.prototype.showDialog=function(e){this.setState({dialog:e}),setTimeout(function(){return document.getElementById(e).classList.toggle("active")},0)},t.prototype.hideDialog=function(){this.setState({dialog:null})},t.prototype.saveQuery=function(e){var t=prompt("Save Query as:","My Query");if(t){var r=this.getOperationValues(e);r.queries||(r.queries=[]),r.queries.push({name:t,searchField:r.searchField,searchType:r.searchType,searchText:r.searchText,conditions:r.conditions.map(function(e){return Object.assign({},e)})}),this.setOperationValues(e,r)}},t.prototype.removeQuery=function(e,t){var r=this.getOperationValues(e);r.queries&&(r.queries=r.queries.filter(function(e){return e.name!=t.name}),this.setOperationValues(e,r))},t.prototype.loadQuery=function(e,t){var r=this.getOperationValues(e);r.searchField=t.searchField,r.searchType=t.searchType,r.searchText=t.searchText,r.conditions=t.conditions,this.setOperationValues(e,r)},t.prototype.render=function(){var e=this,t=this.getSelected(this.props.name),r=t&&t.name;return o.createElement("div",{style:{height:"100%"}},o.createElement(i.default,{title:this.getTitle(t),onSidebarToggle:function(t){return e.toggleSidebar()}}),o.createElement("div",{id:"body",className:this.state.sidebarHidden?"hide-sidebar":""},o.createElement("div",{className:"inner"},o.createElement(a.default,{name:r,viewerArgs:this.state.viewerArgs,operations:this.state.operations}),o.createElement(s.default,{config:this.props.metadata.config,userinfo:this.props.metadata.userinfo,selected:t,values:this.getOperationValues(this.props.name),conventions:this.props.metadata.config.implicitconventions,viewerArgs:this.state.viewerArgs[r],onChange:function(t){return e.onOperationChange(r,t)},onAddCondition:function(t){return e.addCondition(r)},onRemoveCondition:function(t){return e.removeCondition(r,t)},onShowDialog:function(t){return e.showDialog(t)},onSaveQuery:function(){return e.saveQuery(r)},onRemoveQuery:function(t){return e.removeQuery(r,t)},onLoadQuery:function(t){return e.loadQuery(r,t)}}))),"column-prefs-dialog"!==this.state.dialog?null:o.createElement(l.default,{onClose:function(t){return e.hideDialog()},fields:t.toTypeFields,values:this.getOperationValues(this.props.name),onChange:function(t){return e.onOperationChange(r,t)}}))},t}(o.Component)},99:function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(5),i=function(e){function t(t,r){var n=e.call(this,t,r)||this;return n.state={},n}return n(t,e),t.prototype.resetFields=function(){var e=[];this.props.onChange({fields:e})},t.prototype.selectField=function(e){var t=this.props.values.fields||[];t.indexOf(e)>=0?t=t.filter(function(t){return t!==e}):t.push(e),this.props.onChange({fields:t})},t.prototype.render=function(){var e=this,t=this.props.values.fields||[],r={verticalAlign:"text-bottom",fontSize:"20px",margin:"0 5px 0 0"};return o.createElement("div",{id:"column-prefs-dialog"},o.createElement("div",{className:"dialog-wrapper",onClick:function(t){return e.props.onClose()}},o.createElement("div",{className:"dialog",onClick:function(e){return e.stopPropagation()}},o.createElement("div",{className:"dialog-header"},o.createElement("h3",null,"Column Preferences")),o.createElement("div",{className:"dialog-body"},o.createElement("div",{onClick:function(t){return e.resetFields()},style:{borderBottom:"1px solid #ccc",padding:"0 0 10px 0",margin:"0 0 15px 0",cursor:"pointer"}},o.createElement("i",{className:"material-icons",style:r},0===t.length?"radio_button_checked":"radio_button_unchecked"),o.createElement("span",null,"Show all columns")),this.props.fields.map(function(n){return o.createElement("div",{onClick:function(t){return e.selectField(n.name)},style:{margin:"0 0 5px 0",cursor:"pointer"}},o.createElement("i",{className:"material-icons",style:r},t.indexOf(n.name)>=0?"check_box":"check_box_outline_blank"),o.createElement("span",null,n.name))})),o.createElement("div",{className:"dialog-footer",style:{textAlign:"right"}},o.createElement("div",{className:"btnText",onClick:function(t){return e.props.onClose()}},o.createElement("span",null,"DONE"))))))},t}(o.Component);t.default=i}},[230]);
//# sourceMappingURL=app.bundle.js.map