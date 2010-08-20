/*
 * Ample SDK - JavaScript GUI Framework
 *
 * Copyright (c) 2009 Sergey Ilinsky
 * Dual licensed under the MIT and GPL licenses.
 * See: http://www.amplesdk.com/about/licensing/
 *
 */

var cSMILElement_set	= function(){};
cSMILElement_set.prototype	= new cSMILAnimationElement("set");

// Class Event Handlers
cSMILElement_set.handlers	= {};
cSMILElement_set.handlers["DOMNodeInsertedIntoDocument"]	= function(oEvent) {
	fSMILAnimationElement_init(this);
};

// Register Element
fAmple_extend(cSMILElement_set);