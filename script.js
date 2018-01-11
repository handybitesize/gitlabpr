//shamelessly stolen from https://github.com/panicsteve/cloud-to-butt/
if (document.domain.indexOf('gitlab.com') !== -1) {
	walk(document.body);

	function walk(node)  
	{
		var child, next;
		switch ( node.nodeType )  
		{
			case 1: 
			case 9:  
			case 11: 
				child = node.firstChild;
				while ( child ) 
				{
					next = child.nextSibling; 
					walk(child);
					child = next;
				}
				break;
			case 3: 
				switchText(node);
				break;
		}
	}

	function switchText(textNode) 
	{
		var v = textNode.nodeValue;

		v = v.replace(/\bmerge request/g, "pull request");
		v = v.replace(/\bMerge Request/g, "Pull Request");
		textNode.nodeValue = v;
	}
}