# Tooltip for jQuery

Tooltip for jQuery is a simple yet elegant tooltip plugin for jQuery. Please see the examples folder for an idea of how to use the plugin.

## Usage

You can add a tooltip to any element you like. For example, we could add a tooltip to any element with a `tooltip` class.

    $('.tooltip').tooltip();

By default it will assume you have a `title` attribute that will be used for the tooltips contents.

    <span class="tooltip" title="Hello, World">This will have a tooltip!</span>

### Options

You can pass options to the `tooltip` function. The options are as follows.

#### `width`

The maximum width of the tooltip container.

#### `offset`

The offset of the tooltip from the element it is attached too. Can be a positive or negative number.

#### `position`

The position of the arrow. Available options are: `top`, `topLeft`, `topRight`, `right`, `left`, `bottomRight`, `bottomLeft`, `bottom`

#### `attr`

The attribute that contains the tooltip contents. Defaults to `title`.

### Example

Here is an example using the available options.

    $('.tooltip').tooltip({
    	width: 400,
    	offset: 2,
    	position: 'bottomLeft',
    	attr: 'data-tooltip'
    });

    <span class="tooltip" data-tooltip="Hello, World">This will have a tooltip!</span>

## Compatibility

Works in modern browsers like Chrome and Firefox. Haven't tested it thoroughly in IE although it now doubt breaks in anything less then IE 8 or 9.

## License

Like most of my code this is licensed under the 2-clause BSD. Enjoy it!