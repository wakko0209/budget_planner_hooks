(this.webpackJsonp20211201_budget_planner=this.webpackJsonp20211201_budget_planner||[]).push([[0],{22:function(e,n,t){},23:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var a,i,c=t(1),s=t.n(c),r=t(14),d=t.n(r),o=(t(22),t(12)),u=t(8),l=t(4),b=t(5),p=t(2),m=(t(23),t(3)),j=t(0),g=m.a.div(a||(a=Object(p.a)(["\n    display: grid;\n    grid-template-columns: auto;\n    grid-gap: 1rem;\n\n    div {\n        padding: 0 1.25rem;\n        display: flex;\n        align-items: center;\n        height: 4.5em;\n    }\n      \n    #budgetRemaining {\n        background-color: #d5eddb;\n    }\n      \n    #budgetSpent {\n        background-color: #cbe5ff;\n    }\n\n    .negative {\n        color: #ea1f25;\n    }\n\n    @media screen and (min-width: 575px) {\n        grid-template-columns: repeat(3, 1fr);\n    }\n"]))),x=m.a.div(i||(i=Object(p.a)(["\n    background-color: #e1e3e4;\n    justify-content: space-between;\n    column-gap: .5rem;\n\n    input {\n        background-color: #fff;\n    }\n      \n    .fas {\n        margin-top: .4rem;\n    }\n      \n    .fa-check-circle {\n        color: #43af49;\n    }\n      \n    .fa-times-circle {\n        color: #ea1f25;\n    }\n"])));var h,O,f=function(e){var n=Object(j.jsxs)(x,{children:["Budget:\u2002$",e.budgetTotal,Object(j.jsx)("button",{className:"formBtn",onClick:e.switchBudgetMode,children:"Edit"})]}),t=Object(j.jsxs)(x,{children:[Object(j.jsx)("label",{htmlFor:"newBudget",children:"Budget:"}),Object(j.jsx)("input",{type:"number",name:"newBudget",id:"newBudget",min:"1",value:e.newBudget,onChange:e.handleChange}),Object(j.jsx)("button",{className:"iconBtn",onClick:e.saveNewBudget,children:Object(j.jsx)("i",{className:"fas fa-check-circle"})}),Object(j.jsx)("button",{className:"iconBtn",onClick:e.cancelNewBudget,children:Object(j.jsx)("i",{className:"fas fa-times-circle"})})]});return Object(j.jsxs)(g,{children:[e.budgetMode?t:n,e.budgetRemaining>0?Object(j.jsxs)("div",{id:"budgetRemaining",children:["Remaining:\u2002$",e.budgetRemaining]}):Object(j.jsxs)("div",{id:"budgetRemaining",children:["Remaining:\u2002$",Object(j.jsxs)("span",{className:"negative",children:["(",Math.abs(e.budgetRemaining),")"]})]}),Object(j.jsxs)("div",{id:"budgetSpent",children:["Spent so far:\u2002$",e.budgetSpent]})]})},v=m.a.div(h||(h=Object(p.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    > div {\n        display: flex;\n        column-gap: 1.25rem;\n    }\n"]))),C=m.a.div(O||(O=Object(p.a)(['\n    background-color: #007dfe;\n    color: #fff;\n    height: 1.5em;\n    font-size: small;\n    position: relative;\n    display:flex;\n    align-items: center;\n\n    &::before, &::after {\n        content: "";\n        background-color: #007dfe;\n        border-radius: 50%;\n        position: absolute;\n        height: 1.5em;\n        width: 1.5em;\n        z-index: -1;\n    }\n\n    &::before {\n        left: -.75em;\n    }\n      \n    &::after {\n        right: -.75em;\n    }\n'])));var E,w=function(e){var n=Object(c.useContext)(R);return Object(j.jsxs)(v,{children:[Object(j.jsx)("div",{children:e.name}),Object(j.jsxs)("div",{children:[Object(j.jsxs)(C,{children:["$",e.cost,n]}),Object(j.jsx)("button",{className:"iconBtn",onClick:n,children:Object(j.jsx)("i",{className:"fas fa-times-circle"})})]})]})},N=m.a.ul(E||(E=Object(p.a)(["\n  margin: .75rem 0 1rem;\n  list-style-type: none;\n  height: 15em;\n  overflow: auto;\n\n  li {\n    padding: .75rem;\n    border: 1px solid #e1e3e4;\n  }\n"])));var B,y=function(e){var n=(e.searchMode?e.expenseList.filter((function(n){return n.name.toLowerCase().includes(e.inputSearch.toLowerCase())})):e.expenseList).map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)(w,{name:e.name,cost:e.cost})},e.name.toLowerCase().replace(/\s/g,"-"))}));return Object(j.jsxs)("div",{className:"ExpenseList",children:[Object(j.jsx)("h2",{children:"Expenses"}),Object(j.jsx)("input",{type:"text",name:"inputSearch",id:"inputSearch",placeholder:"Type to search...",style:{marginTop:".75rem"},value:e.inputSearch,onChange:e.searchExpense}),Object(j.jsx)(N,{children:n})]})},S=m.a.ul(B||(B=Object(p.a)(["\n    margin: .75rem 0 1rem;\n    list-style-type: none;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-column-gap: 1rem;\n\n    @media screen and (min-width: 575px) {\n        grid-template-columns: repeat(3, 1fr);\n    }\n"])));var k,L=function(e){return Object(j.jsxs)("div",{className:"AddExpense",children:[Object(j.jsx)("h2",{children:"Add Expense"}),Object(j.jsxs)(S,{children:[Object(j.jsxs)("li",{children:[Object(j.jsx)("label",{htmlFor:"inputExpenseName",children:"Name"}),Object(j.jsx)("input",{type:"text",name:"inputExpenseName",id:"inputExpenseName",value:e.inputExpenseName,onChange:e.handleChange})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("label",{htmlFor:"inputExpenseCost",children:"Cost"}),Object(j.jsx)("input",{type:"number",name:"inputExpenseCost",id:"inputExpenseCost",min:"1",value:e.inputExpenseCost,onChange:e.handleChange})]})]}),Object(j.jsx)("button",{className:"formBtn",onClick:e.addExpense,children:"Save"})]})},M=m.a.div(k||(k=Object(p.a)(["\n  width: 100%;\n  margin: auto;\n\n  > * {\n    margin: 1.5rem 1rem;\n  }\n\n  @media screen and (min-width: 575px) {\n    max-width: 800px;\n  }\n"]))),R=Object(c.createContext)();var T=function(e){var n=Object(c.useState)(!1),t=Object(b.a)(n,2),a=t[0],i=t[1],s=Object(c.useState)(2e3),r=Object(b.a)(s,2),d=r[0],p=r[1],m=Object(c.useState)(""),g=Object(b.a)(m,2),x=g[0],h=g[1],O=Object(c.useState)(!1),v=Object(b.a)(O,2),C=v[0],E=v[1],w=Object(c.useState)({newBudget:d,inputExpenseName:"",inputExpenseCost:""}),N=Object(b.a)(w,2),B=N[0],S=N[1],k=Object(c.useState)([{name:"Shopping",cost:50},{name:"Vacation",cost:300},{name:"Transportation",cost:70},{name:"Gas",cost:400},{name:"Child Care",cost:500}]),T=Object(b.a)(k,2),F=T[0],$=T[1],P=function(e){S((function(n){return Object(l.a)(Object(l.a)({},n),{},Object(u.a)({},e.target.name,e.target.value))}))},_=F.reduce((function(e,n){return e+n.cost}),0),A=d-_;return Object(j.jsxs)(M,{children:[Object(j.jsx)("h1",{children:"My Budget Planner"}),Object(j.jsx)(f,{budgetMode:a,newBudget:B.newBudget,budgetTotal:d,budgetRemaining:A,budgetSpent:_,handleChange:P,switchBudgetMode:function(){i(!0)},cancelNewBudget:function(){S((function(e){return Object(l.a)(Object(l.a)({},e),{},{newBudget:d})})),i(!1)},saveNewBudget:function(){Number(B.newBudget)<1?alert("Budget must be at least $1"):(p(B.newBudget),i(!1))}}),Object(j.jsx)(R.Provider,{value:function(e){if(window.confirm("Are you sure you want to delete this expense?")){var n=e.target.parentElement.parentElement.previousElementSibling.innerHTML,t=Number(e.target.parentElement.previousElementSibling.innerHTML.slice(1)),a=Object(o.a)(F),i=a.findIndex((function(e){return e.name===n&&e.cost===t}));a.splice(i,1),$(a)}},children:Object(j.jsx)(y,{searchMode:C,inputSearch:x,expenseList:F,searchExpense:function(e){var n=!!e.target.value;h(e.target.value),E(n)}})}),Object(j.jsx)(L,{inputExpenseName:B.inputExpenseName,inputExpenseCost:B.inputExpenseCost,handleChange:P,addExpense:function(){if(B.inputExpenseName&&""!==B.inputExpenseCost)if(Number(B.inputExpenseCost)<1)alert("Cost must be at least $1");else{var e={name:B.inputExpenseName,cost:Number(B.inputExpenseCost)},n=Object(o.a)(F);n.push(e),$(n),S((function(e){return Object(l.a)(Object(l.a)({},e),{},{inputExpenseName:"",inputExpenseCost:""})}))}else alert("Cannot add expense without a name and cost")}})]})},F=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,30)).then((function(n){var t=n.getCLS,a=n.getFID,i=n.getFCP,c=n.getLCP,s=n.getTTFB;t(e),a(e),i(e),c(e),s(e)}))};d.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(T,{})}),document.getElementById("root")),F()}},[[29,1,2]]]);
//# sourceMappingURL=main.55be8b05.chunk.js.map