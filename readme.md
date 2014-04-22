# Tooltip

A simple JavaScript tooltip library.

## Usage

You can add a tooltip to any element you like. For example, we could add a tooltip to any element with a `tooltip` class.

    Tooltip.new('.tooltip');

By default it will assume you have a `data-title` attribute that will be used for the tooltips contents.

    <span class="tooltip" data-title="Hello, World">This will have a tooltip!</span>

## Options

You can pass options to the `new` function as the second argument. The options are as follows.

#### `width`

The maximum width of the tooltip container.

#### `offset`

The offset of the tooltip from the element it is attached too. Can be a positive or negative number.

#### `position`

The position of the tooltip. Available options are: `top`, `topLeft`, `topRight`, `right`, `left`, `bottomRight`, `bottomLeft`, `bottom`

#### `attribute`

The attribute that contains the tooltip contents. Defaults to `data-title`.

### Example

Here is an example using the available options.

    Tooltip.new('.tooltip', {
    	width: 400,
    	offset: 2,
    	position: 'bottomLeft',
    	attribute: 'data-tooltip'
    });

    <span class="tooltip" data-tooltip="Hello, World">This will have a tooltip!</span>

## Compatibility

Should work in all modern browsers. Not tested in IE although it should work in IE10+.

## License

Released under the [BSD 2-Clause License](http://opensource.org/licenses/BSD-2-Clause).
