const Plugin = require('../plugin');

module.exports = new Plugin({
	name: 'NOCALL',
	author: 'Rin UmU#----',
	description: 'Remove the call option from user\'s context menu.',
	color: '#6633FF',
	
	load: async function()
	{
		this._remove_context_calls = function()
		{
			try
			{
				document.getElementById("user-context-call").remove();
			} catch {}
		};

		this._remove_context_calls_interval = setInterval(this._remove_context_calls, 50);
	},
	
	unload: async function()
	{
		clearInterval(this._remove_context_calls_interval);
		delete this._remove_context_calls;
	}
});
