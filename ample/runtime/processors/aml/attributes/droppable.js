/*
 * Ample SDK - JavaScript GUI Framework
 *
 * Copyright (c) 2009 Sergey Ilinsky
 * Dual licensed under the MIT and GPL licenses.
 * See: http://www.amplesdk.com/about/licensing/
 *
 */

function cAMLAttr_droppable(){};
cAMLAttr_droppable.prototype	= new cAMLAttr_prototype("droppable");

// Class Events Handlers
cAMLAttr_droppable.handlers		= {};
cAMLAttr_droppable.handlers["DOMNodeInsertedIntoDocument"]	= function(oEvent) {
	this.ownerElement.$droppable	= this.value == "true";
};
cAMLAttr_droppable.handlers["DOMNodeRemovedFromDocument"]	= function(oEvent) {
	this.ownerElement.$droppable	= false;
};

// Register Attribute
fAmple_extend(cAMLAttr_droppable);
