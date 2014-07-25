window.Tooltip = (function()
{
	'use strict';

	function Tooltip(targets, options)
	{
		this.targets = document.querySelectorAll(targets);
		this.options = this.mergeWithDefaults(options || {});
		this.title = null;

		this.context = this.createContext();

		for (var i = 0; i < this.targets.length; i++)
		{
			this.targets[i].addEventListener('mouseover', this.mouseOver.bind(this));
			this.targets[i].addEventListener('mouseout', this.mouseOut.bind(this));
		}
	};

	Tooltip.prototype.mouseOver = function(event)
	{
		this.title = event.target.getAttribute(this.options.attribute);
		event.target.removeAttribute(this.options.attribute);

		if (this.title.length == 0) return;

		this.context.querySelector('.tooltip-content').innerHTML = this.title;

		this.context.style.display = 'block';

		document.body.appendChild(this.context);

		var scroll = {
			top: window.pageYOffset || document.documentElement.scrollTop,
			left: window.pageXOffset || document.documentElement.scrollLeft
		};

		var offsets = event.target.getBoundingClientRect(),
			position = {};

		switch (this.options.position.charAt(0))
		{
			case 'b':
				this.context.classList.add('arrow-bottom');
				
				position = {
					top: (offsets.top + scroll.top + event.target.offsetHeight) + (this.context.querySelector('.tooltip-arrow').offsetHeight / 2) + this.options.offset,
					left: offsets.left + scroll.left + (event.target.offsetWidth / 2) - (this.context.offsetWidth / 2)
				};
			break;
			case 't':
				this.context.classList.add('arrow-top');

				position = {
					top: scroll.top + (offsets.top - this.context.offsetHeight - (this.context.querySelector('.tooltip-arrow').offsetHeight / 2)),
					left: offsets.left + scroll.left + (event.target.offsetWidth / 2) - (this.context.offsetWidth / 2)
				};
			break;
			case 'l':
				this.context.classList.add('arrow-left');

				position = {
					top: scroll.top + offsets.top + (event.target.offsetHeight / 2) - (this.context.offsetHeight / 2),
					left: scroll.left + offsets.left - this.context.offsetWidth - (this.context.querySelector('.tooltip-arrow').offsetWidth / 2) - this.options.offset
				};
			break;
			case 'r':
				this.context.classList.add('arrow-right');

				position = {
					top: scroll.top + offsets.top + (event.target.offsetHeight / 2) - (this.context.offsetHeight / 2),
					left: scroll.left + offsets.left + event.target.offsetWidth + (this.context.querySelector('.tooltip-arrow').offsetWidth / 2) + this.options.offset
				};
			break;
		}

		if (this.options.position == 'topLeft' || this.options.position == 'bottomLeft')
		{
			position.left += (this.context.offsetWidth / 2) - (event.target.offsetWidth / 2);

			this.context.querySelector('.tooltip-arrow').style.left = this.context.querySelector('.tooltip-arrow').offsetWidth+'px';
		}
		else if (this.options.position == 'topRight' || this.options.position == 'bottomRight')
		{
			position.left = (offsets.left + event.target.offsetWidth) - this.context.offsetWidth;

			this.context.querySelector('.tooltip-arrow').style.left = (this.context.offsetWidth - this.context.querySelector('.tooltip-arrow').offsetWidth)+'px';
		}
		else if (this.options.position == 'rightTop' || this.options.position == 'leftTop')
		{
			position.top = offsets.top + scroll.top;

			this.context.querySelector('.tooltip-arrow').style.top = (event.target.offsetHeight / 2)+'px';
		}
		else if (this.options.position == 'rightBottom' || this.options.position == 'leftBottom')
		{
			position.top = offsets.top + scroll.top - this.context.offsetHeight + this.offsetHeight;

			this.context.querySelector('.tooltip-arrow').style.top = this.context.offsetHeight - (event.target.offsetHeight / 2)+'px';
		}

		this.context.style.left = position.left+'px';
		this.context.style.top = position.top+'px';
	};

	Tooltip.prototype.mouseOut = function(event)
	{
		this.context.style.display = 'none';
		event.target.setAttribute(this.options.attribute, this.title);
	};

	Tooltip.prototype.createContext = function()
	{
		var container = document.createElement('div'),
			wrapper = document.createElement('div'),
			arrow = document.createElement('div'),
			content = document.createElement('div');

		container.setAttribute('class', 'tooltip-container');
		wrapper.setAttribute('class', 'tooltip-wrapper');
		arrow.setAttribute('class', 'tooltip-arrow');
		content.setAttribute('class', 'tooltip-content');

		wrapper.appendChild(arrow);
		wrapper.appendChild(content);

		container.appendChild(wrapper);

		container.style['max-width'] = this.options.width;

		return container;
	};

	Tooltip.prototype.mergeWithDefaults = function(object)
	{
		var defaults = {
			width: '300px',
			offset: 0,
			position: 'top',
			attribute: 'data-title'
		};

		var options = {};

		for (var key in defaults)
		{
			if (key in object)
			{
				options[key] = object[key];
			}
			else
			{
				options[key] = defaults[key];
			}
		}

		return options;
	}

	Tooltip.prototype.unbind = function()
	{
		var clone;

		for (var i = 0; i < this.targets.length; i++)
		{
			clone = this.targets[i].cloneNode(true);
			this.targets[i].parentNode.replaceChild(clone, this.targets[i]);
		}
	}

	return {
		new: function(targets, options)
		{
			return new Tooltip(targets, options);
		}
	};
})();
