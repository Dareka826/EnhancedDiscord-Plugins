const Plugin = require('../plugin');

module.exports = new Plugin({
	name: 'ISO8601 dates',
	author: 'Rin UmU#----',
	description: 'Replaces discord message timestamps with ISO8601 standard compliant ones',
	color: '#6633FF',
	
	load: async function()
	{
		this._convert_dates = function()
		{
			let timestamps = [];
			
			for(let s of document.getElementsByTagName("span"))
    			if(s.className.match(/timestamp-.*/) != null)
        			timestamps.push(s.children[0]);
			
			for(let t of timestamps)
			{
    			let d = new Date(t.getAttribute("aria-label"));
    			let mon = d.getMonth()+1;
    			let day = d.getDate();
    			let hou = d.getHours();
    			let min = d.getMinutes();
    			if(mon < 10) mon = "0" + mon;
    			if(day < 10) day = "0" + day;
    			if(hou < 10) hou = "0" + hou;
    			if(min < 10) min = "0" + min;
    			let isodate = d.getFullYear() + "-" + mon + "-" + day + "T" + hou + ":" + min;
    			t.setAttribute("aria-label", isodate);
    			t.innerText = isodate;
    			t.style.fontFamily = "Monospace";
			}
		};

		this._convert_dates_interval = setInterval(this._convert_dates, 100);
	},
	
	unload: async function()
	{
		clearInterval(this._convert_dates_interval);
		delete this._convert_dates;
	}
});
