/*
 * Ample SDK - JavaScript GUI Framework
 *
 * Copyright (c) 2009 Sergey Ilinsky
 * Dual licensed under the MIT and GPL licenses.
 * See: http://www.amplesdk.com/about/licensing/
 *
 */

function cSMILElement_animateTransform(){};
cSMILElement_animateTransform.prototype	= new cSMILAnimationElement("animateTransform");

// Class Event Handlers
cSMILElement_animateTransform.handlers	= {};
cSMILElement_animateTransform.handlers["DOMNodeInsertedIntoDocument"]	= fSMILAnimationElement_init;

// Register Element
fAmple_extend(cSMILElement_animateTransform);
