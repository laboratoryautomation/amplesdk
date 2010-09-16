/*
 * Ample SDK - JavaScript GUI Framework
 *
 * Copyright (c) 2009 Sergey Ilinsky
 * Dual licensed under the MIT and GPL licenses.
 * See: http://www.amplesdk.com/about/licensing/
 *
 */

function cAMLAttr_resizable(){};
cAMLAttr_resizable.prototype	= new cAMLAttr_prototype("resizable");

// Class Events Handlers
cAMLAttr_resizable.handlers	= {};
cAMLAttr_resizable.handlers["DOMNodeInsertedIntoDocument"]	= function(oEvent) {
	this.ownerElement.$resizable	= this.value == "true";
};
cAMLAttr_resizable.handlers["DOMNodeRemovedFromDocument"]	= function(oEvent) {
	this.ownerElement.$resizable	= false;
};

// Register Attribute
fAmple_extend(cAMLAttr_resizable);
