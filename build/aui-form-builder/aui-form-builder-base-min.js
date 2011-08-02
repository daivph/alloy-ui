AUI.add("aui-form-builder-base",function(p){var k=p.Lang,n=k.isArray,o=k.isString,m=k.isObject,w=k.isValue,t=function(A){return(A instanceof p.Node);},s=function(A){return(A instanceof p.NodeList);},c=function(A){return(A instanceof p.FormBuilder);},q=function(A){return(A instanceof p.FormBuilderField);},e=p.DD.DDM,i="active",x="acceptChildren",r="autoSelectFields",z="availableFields",y="append",B="boundingBox",g="builder",d="button",j="buttons",l="buttonsNode",h="children",b="clonable-portal-layout",v="cloneNode",f=", ";COMPONENT="component",CONTENT="content",CONTENT_BOX="contentBox",CONTAINER="container",DELETE="delete",DD="dd",DEFAULT="default",DEFAULT_MESSAGE="defaultMessage",DEFAULT_MESSAGE_NODE="defaultMessageNode",DOT=".",DUPLICATE="duplicate",DRAG="drag",DRAGGING="dragging",DRAG_CONTAINER="dragContainer",DRAG_CONTAINER_NODE="dragContainerNode",DRAG_NODES_LIST="dragNodesList",DRAG_PORTAL_LAYOUT="dragPortalLayout",DROP="drop",DROP_CONTAINER="dropContainer",DROP_CONTAINER_NODE="dropContainerNode",DROP_PORTAL_LAYOUT="dropPortalLayout",DROP_NODE="dropNode",DROP_ZONE_NODE="dropZoneNode",EDIT="edit",EMPTY_SELECTION="emptySelection",EMPTY_STR="",ENABLE_EDITING="enableEditing",FIELD="field",FIELDS="fields",KEY="key",FIRST="first",FIRST_CHILD="firstChild",FIXED="fixed",FOCUSED="focused",FORM="form",FORM_BUILDER="formBuilder",FORM_LAYOUT="form-layout",ID="id",ICON="icon",INACTIVE="inactive",INDEX="index",INPUT="input",ITEMS="items",LABEL="label",LABEL_NODE="labelNode",LAST="last",LAST_CHILD="lastChild",LIST="list",MESSAGE="message",NAME="name",NESTED_LIST="nestedList",NODE="node",OVER="over",PARENT="parent",PARENT_NODE="parentNode",PLACEHOLDER="placeholder",PLACE_AFTER="placeAfter",PLACE_BEFORE="placeBefore",PREPEND="prepend",HELPER="helper",HIDDEN="hidden",READ_ONLY_ATTRIBUTES="readOnlyAttributes",RENDER="render",SAVE="save",SELECTED="selected",SETTINGS="settings",SETTINGS_FORM_NODE="settingsFormNode",SETTINGS_BUTTONS_NODE="settingsButtonsNode",SRC_NODE="srcNode",SPACE=" ",STATE="state",STRINGS="strings",TABS="tabs",TABS_NODE="tabsNode",TABS_CONTENT_NODE="tabsContentNode",TABS_LIST_NODE="tabsListNode",TABVIEW="tabview",TARGET="target",TEMPLATE_NODE="templateNode",TEXT="text",TYPE="type",UNIQUE="unique",VALUE="value",VALUES="values",ZONE="zone",REGION="region",WIDGET="widget",getCN=p.getClassName,CSS_BUTTON_INPUT=getCN(d,INPUT),CSS_COMPONENT=getCN(COMPONENT),CSS_DD_DRAGGING=getCN(DD,DRAGGING),CSS_HELPER_HIDDEN=getCN(HELPER,HIDDEN),CSS_FORM_BUILDER_BUTTON_DELETE=getCN(FORM,g,d,DELETE),CSS_FORM_BUILDER_BUTTON_DUPLICATE=getCN(FORM,g,d,DUPLICATE),CSS_FORM_BUILDER_BUTTON_EDIT=getCN(FORM,g,d,EDIT),CSS_FORM_BUILDER_BUTTON_SAVE=getCN(FORM,g,d,SAVE),CSS_FORM_BUILDER_DEFAULT_MESSAGE=getCN(FORM,g,DEFAULT,MESSAGE),CSS_FORM_BUILDER_DRAG_CONTAINER=getCN(FORM,g,DRAG,CONTAINER),CSS_FORM_BUILDER_DRAG_NODE=getCN(FORM,g,DRAG,NODE),CSS_FORM_BUILDER_DROP_ACTIVE=getCN(FORM,g,DROP,i),CSS_FORM_BUILDER_DROP_CONTAINER=getCN(FORM,g,DROP,CONTAINER),CSS_FORM_BUILDER_DROP_NODE=getCN(FORM,g,DROP,NODE),CSS_FORM_BUILDER_DROP_ZONE=getCN(FORM,g,DROP,ZONE),CSS_FORM_BUILDER_FIELD=getCN(FORM,g,FIELD),CSS_FORM_BUILDER_FIELD_BUTTONS=getCN(FORM,g,FIELD,j),CSS_FORM_BUILDER_FIELD_CONTENT=getCN(FORM,g,FIELD,CONTENT),CSS_FORM_BUILDER_FIELD_HIDDEN=getCN(FORM,g,FIELD,HIDDEN),CSS_FORM_BUILDER_FIELD_ICON=getCN(FORM,g,FIELD,ICON),CSS_FORM_BUILDER_FIELD_ICON_TEXT=getCN(FORM,g,FIELD,ICON,TEXT),CSS_FORM_BUILDER_FIELD_OVER=getCN(FORM,g,FIELD,OVER),CSS_FORM_BUILDER_FIELD_SELECTED=getCN(FORM,g,FIELD,SELECTED),CSS_FORM_BUILDER_HELPER=getCN(FORM,g,HELPER),CSS_FORM_BUILDER_ICON=getCN(FORM,g,ICON),CSS_FORM_BUILDER_INACTIVE=getCN(FORM,g,INACTIVE),CSS_FORM_BUILDER_LABEL=getCN(FORM,g,LABEL),CSS_FORM_BUILDER_PLACEHOLDER=getCN(FORM,g,PLACEHOLDER),CSS_FORM_BUILDER_SETTINGS=getCN(FORM,g,SETTINGS),CSS_FORM_BUILDER_SETTINGS_BUTTONS=getCN(FORM,g,SETTINGS,j),CSS_FORM_BUILDER_TABS_CONTAINER=getCN(FORM,g,TABS,CONTAINER),CSS_TABVIEW_CONTENT=getCN(TABVIEW,CONTENT),CSS_TABVIEW_LIST=getCN(TABVIEW,LIST),CSS_ICON=getCN(ICON),CSS_WIDGET=getCN(WIDGET),TPL_DEFAULT_MESSAGE='<li class="'+CSS_FORM_BUILDER_DEFAULT_MESSAGE+'"></li>',TPL_DRAG_CONTAINER='<ul class="'+CSS_FORM_BUILDER_DRAG_CONTAINER+'"></ul>',TPL_DRAG_NODE='<li class="'+[CSS_FORM_BUILDER_DRAG_NODE,CSS_FORM_BUILDER_FIELD].join(SPACE)+'" data-key="{key}">'+'<span class="'+[CSS_FORM_BUILDER_ICON,CSS_ICON].join(SPACE)+' {icon}"></span>'+'<span class="'+CSS_FORM_BUILDER_LABEL+'">{label}</span>'+"</li>",TPL_DROP_CONTAINER='<ul class="'+[CSS_FORM_BUILDER_DROP_CONTAINER].join(SPACE)+'"></ul>',TPL_FIELD_BOUNDING_BOX='<li class="'+[CSS_WIDGET,CSS_COMPONENT,CSS_FORM_BUILDER_FIELD,CSS_HELPER_HIDDEN].join(SPACE)+'"></li>',TPL_HELPER='<div class="'+CSS_FORM_BUILDER_HELPER+'"></div>',TPL_PLACEHOLDER='<li class="'+CSS_FORM_BUILDER_PLACEHOLDER+'"></li>',TPL_TABS='<div class="'+CSS_FORM_BUILDER_TABS_CONTAINER+'"></div>',TPL_TABS_CONTENT='<div class="'+CSS_TABVIEW_CONTENT+'"></div>',TPL_TABS_LIST='<ul class="'+CSS_TABVIEW_LIST+'"></ul>',TPL_SETTINGS='<form class="'+CSS_FORM_BUILDER_SETTINGS+'"></form>',TPL_SETTINGS_BUTTONS='<div class="aui-button-row">'+'<span class="aui-button aui-button-submit aui-state-positive aui-priority-primary">'+'<span class="aui-button-content">'+'<input type="button" value="Save" class="aui-button-input aui-form-builder-button-save">'+"</span>"+"</span>"+'<span class="aui-button aui-button-submit aui-state-positive aui-priority-secondary">'+'<span class="aui-button-content">'+'<input type="button" value="Close" class="aui-button-input aui-form-builder-button-close">'+"</span>"+"</span>"+"</div>",TAB_INDEX_DRAG=0,TAB_INDEX_SETTINGS=1,DEFAULT_ICON_CLASS=[CSS_FORM_BUILDER_FIELD_ICON,CSS_FORM_BUILDER_FIELD_ICON_TEXT].join(SPACE),INVALID_CLONE_ATTRS=[B,CONTENT_BOX,SRC_NODE,FIELDS,ID,SELECTED,TEMPLATE_NODE,LABEL_NODE,NAME],INVALID_DBCLICK_TARGETS="button,input,label,select,textarea";var a=function(){};a.ATTRS={fields:{value:[],setter:"_setFields",getter:function(A){return A||[];},validator:n}};p.mix(a.prototype,{addField:function(D){var C=this;
var A=C.get(FIELDS);A=C._removeFromParent(D);A.push(D);C.set(FIELDS,A);},addFields:function(C){var A=this;p.Array.each(A._normalizeFields(C),p.bind(A.addField,A));},contains:function(F,D){var C=this;var A=C.get(FIELDS);if(F===undefined){return false;}if(D){var E=C.get(B);return E.contains(F.get(B));}return(C.indexOf(F)>-1);},eachField:function(F,D){var C=this;var A=C.get(FIELDS);for(var E=0;E<A.length;E++){var G=A[E];if(D){G.eachField(F,D);}if(F.call(C,G,E,A)===false){return false;}}return true;},getField:function(D){var C=this;var A=C.get(FIELDS);return A[D];},getFixedFields:function(){var C=this;var A=[];C.eachField(function(D){if(D.get(FIXED)){A.push(D);}},true);return A;},indexOf:function(D){var C=this;var A=C.get(FIELDS);return p.Array.indexOf(A,D);},insertField:function(D,E){var C=this;var A=C.get(FIELDS);A=C._removeFromParent(E);A.splice(D,0,E);C.set(FIELDS,A);},removeField:function(D){var C=this;var A=C.get(FIELDS);if(q(D)&&(D.get(FIXED)||D.getFixedFields().length>0)){return false;}else{if(D.fixed===true){return false;}}A=C._removeFromParent(D);D.removeTarget(C);C.set(FIELDS,A);},removeFields:function(C){var A=this;p.Array.each(A._normalizeFields(C),p.bind(A.removeField,A));},_getFormBuilder:function(){return(this.get(FORM_BUILDER)||this);},_getRenderedField:function(C,E){var A=this;var D=A._getFormBuilder();if(!q(E)){E=D._renderField(A,C,E);}E.addTarget(D);E.set(PARENT,A);return E;},_normalizeFields:function(C){var A=this;var D=[];var F=A._getFormBuilder();var G=F.get(z);var E=F.uniqueFields;C=p.Array(C);p.Array.each(C,function(J,I){J=A._getRenderedField(I,J);var H=J.get(KEY);var K=J.get(UNIQUE);if(K&&!E.containsKey(H)){E.add(H,J);}if(K&&E.contains(J)){D.push(J);}else{if(K&&!E.contains(J)){J.destroy();}else{D.push(J);}}});return D;},_removeFromParent:function(E){var C=this;var A=C.get(FIELDS);if(q(E)){var D=E.get(PARENT);if(D&&D!=C){D._removeFromParent(E);}else{if(C.contains(E)){p.Array.removeItem(A,E);}}}return A;},_setFields:function(C){var A=this;return A._normalizeFields(C);}});p.FormBuilderFieldSupport=a;var u=p.Component.create({NAME:FORM_BUILDER,ATTRS:{autoSelectFields:{value:false},availableFields:{lazyAdd:false,value:[],validator:n,setter:function(A){p.each(A,function(D,C){D.key=D.key||C;});return A;}},enableEditing:{value:true},nestedList:{setter:function(D){var A=this;var C=p.merge({dd:{plugins:[{cfg:{horizontal:false,scrollDelay:30},fn:p.Plugin.DDWinScroll}]},dropCondition:function(F){var G=false;var E=F.drop.get(NODE);var H=E.getData(FIELD);if(H&&H.get(x)){G=true;}return G;},dropOn:DOT+CSS_FORM_BUILDER_DROP_ZONE,placeholder:p.Node.create(TPL_PLACEHOLDER),sortCondition:function(F){var E=A.get(DROP_CONTAINER_NODE);return E.contains(F.drop.get(NODE));}},D);return C;},value:{}},strings:{value:{button:"Button",defaultMessage:"Drop a field here",emptySelection:"No field selected",large:"Large",medium:"Medium",reset:"Reset",small:"Small",submit:"Submit",type:"Type"}},defaultMessageNode:{valueFn:function(){return p.Node.create(TPL_DEFAULT_MESSAGE);}},dragContainerNode:{valueFn:function(){return p.Node.create(TPL_DRAG_CONTAINER);}},dragNodesList:{setter:function(A){p.each(A,function(D,C){D.setData(INDEX,C);});},valueFn:"_valueDragNodesList"},dropContainerNode:{valueFn:function(){return p.Node.create(TPL_DROP_CONTAINER);}},settingsButtonsNode:{valueFn:function(){return p.Node.create(TPL_SETTINGS_BUTTONS);}},settingsFormNode:{valueFn:function(){return p.Node.create(TPL_SETTINGS);}},tabsNode:{valueFn:function(){return p.Node.create(TPL_TABS);}},tabsContentNode:{valueFn:function(){return p.Node.create(TPL_TABS_CONTENT);}},tabsListNode:{valueFn:function(){return p.Node.create(TPL_TABS_LIST);}}},AUGMENTS:[p.FormBuilderFieldSupport],HTML_PARSER:{defaultMessageNode:DOT+CSS_FORM_BUILDER_DEFAULT_MESSAGE,dragContainerNode:DOT+CSS_FORM_BUILDER_DRAG_CONTAINER,dragNodesList:function(C){var A=C.all(DOT+CSS_FORM_BUILDER_DRAG_NODE);return(A.size()<=0)?null:A;},dropContainerNode:DOT+CSS_FORM_BUILDER_DROP_CONTAINER,settingsFormNode:FORM+DOT+CSS_FORM_BUILDER_SETTINGS,settingsButtonsNode:DOT+CSS_FORM_BUILDER_SETTINGS_BUTTONS,tabsNode:DOT+CSS_FORM_BUILDER_TABS_CONTAINER,tabsContentNode:DOT+CSS_TABVIEW_CONTENT,tabsListNode:DOT+CSS_TABVIEW_LIST},EXTENDS:p.Widget,prototype:{initializer:function(){var A=this;A.boundingBox=A.get(B);A.dragContainerNode=A.get(DRAG_CONTAINER_NODE);A.dragNodesList=A.get(DRAG_NODES_LIST);A.dropContainerNode=A.get(DROP_CONTAINER_NODE);A.settingsButtonsNode=A.get(SETTINGS_BUTTONS_NODE);A.settingsFormNode=A.get(SETTINGS_FORM_NODE);A.tabsNode=A.get(TABS_NODE);A.tabsContentNode=A.get(TABS_CONTENT_NODE);A.tabsListNode=A.get(TABS_LIST_NODE);A._dragNestedList=new p.NestedList(A.get(NESTED_LIST));A._dropNestedList=new p.NestedList(A.get(NESTED_LIST));A._tabs=new p.TabView({boundingBox:A.tabsNode,contentNode:A.tabsContentNode,listNode:A.tabsListNode});if(!A.tabsContentNode.inDoc()){A._tabs.set(ITEMS,[{label:"Add a field",contentNode:A.dragContainerNode},{label:"Field settings",content:A.settingsFormNode}]);}},renderUI:function(){var A=this;A.dragNodesList.appendTo(A.dragContainerNode);A._tabs.render();},bindUI:function(){var A=this;var D=A.boundingBox;var C=A.dropContainerNode;var E=A.settingsButtonsNode;A._dragNestedList.on("drag:end",p.bind(A._onDragEndDragNestedList,A));A._dragNestedList.on("drag:start",p.bind(A._onDragStartDragNestedList,A));A._dropNestedList.on("drag:end",p.bind(A._onDragEndDropNestedList,A));A._tabs.after("activeTabChange",p.bind(A._afterActiveTabChange,A));A.uniqueFields.after("add",p.bind(A._afterUniqueFieldsAdd,A));A.uniqueFields.after("remove",p.bind(A._afterUniqueFieldsRemove,A));C.delegate("click",p.bind(A._onClickFieldDelete,A),DOT+CSS_FORM_BUILDER_BUTTON_DELETE);C.delegate("click",p.bind(A._onClickFieldDuplicate,A),DOT+CSS_FORM_BUILDER_BUTTON_DUPLICATE);C.delegate("click",p.bind(A._onClickFieldEdit,A),DOT+CSS_FORM_BUILDER_BUTTON_EDIT);C.delegate("dblclick",p.bind(A._onDbClickField,A),DOT+CSS_FORM_BUILDER_FIELD);C.delegate("mouseenter",p.bind(A._onMouseEnterField,A),DOT+CSS_FORM_BUILDER_FIELD);
C.delegate("mouseleave",p.bind(A._onMouseLeaveField,A),DOT+CSS_FORM_BUILDER_FIELD);E.delegate("click",p.bind(A._onClickSettingsButton,A),DOT+CSS_BUTTON_INPUT);A.after("*:fieldsChange",p.bind(A._afterFieldsChange,A));A.after("*:selectedChange",p.bind(A._afterSelectedChange,A));},syncUI:function(){var A=this;A.syncFieldsUI();A._syncDefaultMessage();A._syncUniqueFields();A._syncNestedList();},uniqueFields:new p.DataSet(),appendFields:function(C,D){var A=this;D.setContent(EMPTY_STR);p.each(C,function(F){var E=F.get(FIELDS);D.append(F.get(B));A.appendFields(E,F.get(DROP_ZONE_NODE));});},duplicateField:function(F){var A=this;var E=F.get(PARENT);var C=E.indexOf(F);var D=A._cloneField(F,true);E.insertField(++C,D);},selectField:function(D){var A=this;D.set(SELECTED,true);var C=A.settingsFormNode.one(INPUT);if(C){C.focus();C.select();}A._tabs.selectTab(TAB_INDEX_SETTINGS);},syncFieldsUI:function(E){var C=this;var A=C.get(FIELDS);var D=C.get(DROP_CONTAINER_NODE);if(E&&q(E.target)){var F=E.target;A=F.get(FIELDS);D=F.get(DROP_ZONE_NODE);}C.appendFields(A,D);},_afterActiveTabChange:function(G){var C=this;var F=C.selectedField;var D=C.get(SETTINGS_FORM_NODE);var E=C.get(SETTINGS_BUTTONS_NODE);var A=C.get(STRINGS);var H=C.contains(F,true);if(!H){D.setContent(A[EMPTY_SELECTION]);}E.toggleClass(CSS_HELPER_HIDDEN,!H);},_afterFieldsChange:function(){var A=this;A.syncUI();},_afterSelectedChange:function(D){var A=this;var E=D.target;var C=A.selectedField;A._syncSelectedFieldUI(E);if(E.get(SELECTED)){A.selectedField=E;if(C&&C!=E){C.set(SELECTED,false);}E.renderSettings();}},_afterUniqueFieldsAdd:function(D){var A=this;var C=D.attrName;var E=A._getDragNodeByKey(C);E.addClass(CSS_FORM_BUILDER_INACTIVE);E.unselectable();},_afterUniqueFieldsRemove:function(D){var A=this;var C=D.attrName;var E=A._getDragNodeByKey(C);E.removeClass(CSS_FORM_BUILDER_INACTIVE);E.selectable();},_cloneField:function(G,C){var A=this;var F=G.get(TYPE);var D={};p.each(G.getAttrs(),function(I,H){if(p.Array.indexOf(INVALID_CLONE_ATTRS,H)===-1&&!t(I)){D[H]=I;}});if(C){var E=[];p.each(G.get(FIELDS),function(H){E.push(A._cloneField(H,C));});D[FIELDS]=E;}D[TYPE]=F;return D;},_dropField:function(D){var J=this;var E=D.get(PARENT_NODE);var A=E.all("> "+DOT+CSS_FORM_BUILDER_FIELD);var H=D.getData(FIELD);var C=J.get(DEFAULT_MESSAGE_NODE);if(C.inDoc()){C.remove();}var I=J._getFieldParentByNode(D);var F=A.indexOf(D);if(!H){var G=J.get(z);H=G[D.getData(INDEX)];D.remove();}I.insertField(F,H);return I.getField(F);},_getDragNodeByKey:function(D){var A=this;var F=A.get(DRAG_NODES_LIST);var E=A.get(z);for(var C=0;C<E.length;C++){if(D==E[C].key){return F.item(C);}}return null;},_getFieldInstance:function(D,E){var A=this;var E=E||D.type;var C=p.FormBuilder.types;var F=o(E)?C[E]:E;if(F!==undefined){return new F(D);}else{p.log("The field type: ["+E+"] couldn't be found.");}return null;},_getFieldParentByNode:function(D){var C=this;var A=D.ancestor(DOT+CSS_FORM_BUILDER_FIELD);if(A){return A.getData(FIELD);}return C;},_getFieldParentNode:function(D){var A=this;var C=D.get(PARENT);if(q(C)){return C.get(B);}return A.get(DROP_CONTAINER_NODE);},_onClickFieldDelete:function(E){var C=this;var G=E.currentTarget;var A=G.ancestor(DOT+CSS_FORM_BUILDER_FIELD);var F=A.getData(FIELD);if(q(F)){var D=C.selectedField;if(F==D||F.contains(D,true)){C._tabs.selectTab(TAB_INDEX_DRAG);}F.set(SELECTED,false);F.get(PARENT).removeField(F);}},_onClickFieldDuplicate:function(D){var C=this;var F=D.currentTarget;var A=F.ancestor(DOT+CSS_FORM_BUILDER_FIELD);var E=A.getData(FIELD);if(E){C.duplicateField(E);}},_onClickFieldEdit:function(D){var C=this;var F=D.currentTarget;var A=F.ancestor(DOT+CSS_FORM_BUILDER_FIELD);var E=A.getData(FIELD);if(E){C.selectField(E);}},_onClickSettingsButton:function(D){var A=this;var E=D.currentTarget;if(E.hasClass(CSS_FORM_BUILDER_BUTTON_SAVE)){var C=A.selectedField;if(C){C.saveSettings();}}A._tabs.selectTab(TAB_INDEX_DRAG);},_onDbClickField:function(C){var A=this;var E=C.target;if(E.test(INVALID_DBCLICK_TARGETS)){C.stopPropagation();return false;}if(!E.getData(FIELD)){E=E.ancestor(DOT+CSS_FORM_BUILDER_FIELD);}if(E){var D=E.getData(FIELD);if(D){A.selectField(D);}}return false;},_onDragEndDragNestedList:function(F){var A=this;var E=F.target;var G=E.get(NODE);var D=A.dragContainerNode;var C=A.dropContainerNode;var I=C.one(DOT+CSS_FORM_BUILDER_DRAG_NODE);if(I){var H=A._dropField(I);if(A.get(r)){A.selectField(H);}}else{E.set(NODE,A.originalNode);}if(D.contains(G)&&D.contains(A.originalNode)){G.remove();}},_onDragEndDropNestedList:function(D){var A=this;var C=D.target;var E=C.get(NODE);if(E.hasClass(CSS_FORM_BUILDER_FIELD)){A._dropField(E);}},_onDragStartDragNestedList:function(F){var A=this;var E=F.target;var H=E.get(NODE);var D=H.getData(INDEX);var G=H.clone();H.placeBefore(G);G.setData(INDEX,D);E.set(NODE,G);G.attr(ID,EMPTY_STR);G.hide();H.removeClass(CSS_DD_DRAGGING);H.show();A.originalNode=H;var C=p.merge(A.get(NESTED_LIST),{nodes:G});(new p.NestedList(C));},_onMouseEnterField:function(D){var C=this;var A=D.currentTarget;var E=A.getData(FIELD);if(E){C._toggleFieldButtonsNode(E,true);}},_onMouseLeaveField:function(D){var C=this;var A=D.currentTarget;var E=A.getData(FIELD);var F=false;if(E){if(E.get(SELECTED)){F=true;}C._toggleFieldButtonsNode(E,F);}},_renderField:function(H,G,F){var C=this;var D=H.get(DROP_CONTAINER_NODE);if(q(H)){D=H.get(DROP_ZONE_NODE);}var E=p.Node.create(TPL_FIELD_BOUNDING_BOX);var A=H.get(FIELDS);if(A.length>0){D.insert(E,G);}else{D.append(E);}F=p.merge(F,{boundingBox:E,key:F.key,formBuilder:C,render:true,after:{render:function(){E.removeClass(CSS_HELPER_HIDDEN);}}});if(F.disabled===undefined){F.disabled=!C.get(ENABLE_EDITING);}return C._getFieldInstance(F);},_syncDefaultMessage:function(){var C=this;if(!C.dropContainerNode.hasChildNodes()){var A=C.get(STRINGS);var D=C.get(DEFAULT_MESSAGE_NODE);D.setContent(A[DEFAULT_MESSAGE]);C.dropContainerNode.append(D);}},_syncNestedList:function(){var A=this;var D=A.get(z);var C=A.uniqueFields;A._syncNodes();
A.dragNodes.each(function(F,E){var G=D[E];if(!C.containsKey(G.key)){A._dragNestedList.add(F);}});A._dropNestedList.addAll(A.dropNodes);},_syncNodes:function(){var A=this;var D=A.dragContainerNode;var C=A.dropContainerNode;A.dragNodes=D.all(DOT+CSS_FORM_BUILDER_FIELD);A.dropNodes=C.all([DOT+CSS_FORM_BUILDER_FIELD,DOT+CSS_FORM_BUILDER_DEFAULT_MESSAGE].join(f));},_syncSelectedFieldUI:function(F){var C=this;var E=F.get(SELECTED);var A=F.get(B);var D=C.selectedField;A.toggleClass(CSS_FORM_BUILDER_FIELD_SELECTED,E);if(!E&&F.contains(D)){E=true;}C._toggleFieldButtonsNode(F,E);},_syncUniqueFields:function(){var C=this;var E=C.get(z);var A=C.get(FIELDS);var D=C.uniqueFields;D.each(function(G,F){if(!C.contains(G,true)){D.remove(G);}});p.each(E,function(H,F){if(H.unique){var G=H.key;C.eachField(function(J){if(J.get(KEY)==G){var I=p.merge(C._cloneField(J,false),H);J.set(FIXED,I.fixed);J.set(READ_ONLY_ATTRIBUTES,I.readOnlyAttributes);J.set(UNIQUE,true);E[F]=I;D.add(G,J);}},true);}});},_toggleFieldButtonsNode:function(C,D){var A=this;var E=C.get(l);if(E){E.toggleClass(CSS_HELPER_HIDDEN,!D);}},_valueDragNodesList:function(){var A=this;var D=A.get(z);var C=[];p.each(D,function(F,E,G){C.push(p.substitute(TPL_DRAG_NODE,{icon:F.iconClass||DEFAULT_ICON_CLASS,label:F.label,key:F.key||E,type:F.type,unique:F.unique}));});return p.NodeList.create(C.join(EMPTY_STR));}}});p.FormBuilder=u;p.FormBuilder.types={};},"@VERSION@",{requires:["aui-base","aui-button-item","aui-data-set","aui-nested-list","aui-tabs","substitute"],skinnable:true});