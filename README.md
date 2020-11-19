# riu-neumorphism
A JavaScript utility framework for neumorphic designs.

Build neumorphic UI that looks good on a wide range of colors. Choose from a wide range of options to customize your designs to your liking. Make your designs look realistic via neumorphism.

![Neumorphism Grid](url)
_Figure x: Neumorphism grid. Code found [here](https://github.io)_

## Installation
a) npm Module

`$ npm i riu-neumorphism --save`

b) CDN

`<script src="https://unpkg.com/riu-neumorphism"></script>`

or

`<script src="https://jsdelivr.com/riu-neumorphism"></script>`


## Usage

### Initialization
a) npm Module
```
import { riuNeumorphism } from "riu-neumorphism";

riuNeumorphism();
```

b) CDN

The framework is initialized automatically. You don't have to do anything.

### Defaults
To add neumorphic style to an element, simply add the attribute "riu-neu" to that element. For example, to style a 'div' element, you add the attribute as follows:

`<div riu-neu>...</div>`

or

`<div riu-neu="">...</div>`

![Default Styling](url)
_Figure x: Default styling. Code found [here](https://github.io)_

Default values will be used in this case. The default values are:

* Border Radius - 8px
* Light Source Position - top-left
* Shadow:
  * Boundary - box
  * Position - outer
  * X-offset and Y-offset - 6px
  * Blur Radius - 12px
  * Spread Radius - 0px
  * Colors - colors are set as described in the __Color Ranges__ section
  * Curvature - Flat
  * Opacity - 0.8 for the light shadow and 1 for the dark shadow

### Customization
Customization of the shadows is done via the "riu-neu" attribute by choosing from pre-defined values and/or using customization functions. All values inside the attribute are seperated by a space.

#### __Border Radius__
All neumorphic elements are required to have a border radius greater than 0. The border radius is customized only via the "radius" function. The function has the form:

`radius(value)`

where `value` is any valid CSS value for "border-radius".

__Example__

`<div riu-neu="radius(16px)">...</div>`

_Figure x shows elements with different radii_

![Radii](url)
_Figure x: Elements at different radii. Code found [here](https://github.io)_


#### __Light Source Position__
The light source position determines where the light and dark shadows are positioned on an element. This is customised only via the 8 pre-defined values; _top-left_, _top-center_, _top-right_, _center-right_, _bottom-right_, _bottom-center_, _bottom-left_ and _center-left_. The default value is _top-left_. Just include any of these values in the "riu-neu" attribute value to set the desired position. _Figure x_ illustrates the available light source positions.

__Example__

`<div riu-neu="top-right">...</div>`

![Light Source Positions](url)
_Figure x: Light source positions. Code found [here](https://github.io)._

#### __Shadow Boundary__
The boundary of the shadow can be customized by using one of three pre-defined values. The values are _box_ for any element, _drop_ for svg and png images and _text_ for text. The default value is _box_. _Figure x_ illustrates the effect of using these values.

__Example__

`<div riu-neu="text">...</div>`

![RIU Neumorphism](url)
_Figure x: Shadow boundaries. Code found [here](https://github.io)._

__Note:__ For _drop_ shadows, make sure the color of the image does not conflict with the background color of its background color.

#### __Shadow Position__
Shadows can be positioned either outside or inside an element. Use the value _inner_ to make the shadows go inside an element. The default value is _outer_. The two shadow positions are illustrated in _Figure x_.

__Example__

`<div riu-neu="inner">...</div>`

![RIU Neumorphism](url)
_Figure x: Shadow positions. Code found [here](https://github.io)._

__Note:__ Inner shadows only work for _box_ shadow. It doesn't work for _drop_ or _text_ shadow.

#### __Shadow Colors__
The colors used by each shadow can be customized via the _colors_ function. It takes the form:

`colors(RL GL BL, RD GD BD)`

where `RL`, `GL` and `BL` are the red, green and blue values of the light shadow respectively, and `RD`, `GD` and `BD` are the red, green and blue values of the dark shadow respectively.

__Example__

`<div riu-neu="colors(255 255 255, 0 0 0)">...</div>`

![RIU Neumorphism](url)
_Figure x: Shadow colors. Code found [here](https://github.io)._

__Note:__ The values for the colors do not include opacities. The opacities are set seperatly as described in the __Opacity__ section.

#### __Shadows__
The X-offset, Y-offset, blur radius and spread readius of the shadows can be customized via the 5 pre-defined values or via the _shadows_ function.

The pre-defined values are _xs_, _sm_, _md_, _lg_ and _xl_. The default value is _md_. _Table x_ shows the values for X-offset, Y-offset, blur radius and spread radius for each one of the pre-defined values. _Figure x_ shows the available sizes.

The _shadows_ function has the form:

`shadow(offset blur spread, offset blur spread)`

where `offset` is the X and Y offsets, `blur` is the blur radius and `spread` is the spread radius. The values on the left side of the comma are for the light shadow and the ones on the right are for the dark shadow. You can use any valid CSS values.

__Example__

`<div riu-neu="shadow(9px 24px 2px, 7px 14px 0)">...</div>`

Value | X-offset  | Y-offset  | Border Radius | Spread Radius
------|-----------|-----------|---------------|--------------
xs    | 2px       | 2px       | 4px           | 0px
sm    | 4px       | 4px       | 8px           | 0px
md    | 6x        | 6px       | 12px          | 0px
lg    | 10px      | 10px      | 20px          | 0px
xl    | 16px      | 16px      | 32px          | 0px
_Table x: Shadow X-offsets, Y-offsets, blur radii and spread radii._

![RIU Neumorphism](url)
_Figure x: Shadow X-offsets, Y-offsets, blur radii and spread radii. Code found [here](https://github.io)._

__Note:__ Only one value is used for both the X and Y offsets because they are always equal.

#### __Curvature__
To give an element a surface curvature, use one of the three pre-defined values; _flat_, _convex_ or _concave_. The _curvature_ function gives you more control over the curvature. Through the function, you can specify the origin and size of curvature. The function has the signature:

`curvature(origin, size)`

where `origin` is any of the 8 values; _top-left_, _top-center_, _top-right_, _center-right_, _bottom-right_, _bottom-center_, _bottom-left_ and _center-left_. And `size` is any integer equal to or greater than 0. The default value for `origin` is _top-left_ and 16 is the default for the `size` (0 means no curvature). _Figure x_ illustrates the different curvature directions.

__Example__

`<div riu-neu="concave">...</div>`

__Example__

`<div riu-neu="convex curvature(center-left, 32)">...</div>`

![RIU Neumorphism](url)
_Figure x: Surface curvature. Code found [here](https://github.io)._

__Note:__ Surface curvature does not work on _text_ and _drop_ shadows. The _curvature_ function does not work without _convex_ or _concave_ value. Using _curvature_ with _flat_ has no effect.

#### __Opacities__
The opacities of the shadows can be customized via the _opacities_ function. The function has the following structure:

`opacities(OL, OD)`

where `OL` is the opacity of the light shadow and `OD` is the opacity of the dark shadow. The values range from 0 to 1 just as it is in CSS. The default value for the light shadow is 0.8 and 1 is the default for the dark shadow.

__Example__

`<div riu-neu="opacities(0.5, 0.1)">...</div>`

![RIU Neumorphism](url)
_Figure x: Opacity. Code found [here](https://github.io)._

## Collection
If you want to create multiple elements with the same style, you can use a collection. Styling is applied on the direct children of a collection. All customization defined on the collection will be applied on all direct children of the element, but not the element itself. You make an element a collection by adding "collection" to the "riu-neu" attribute value. Putting the attribute "riu-neu" on any of the children overrights the collection's style on that child.

__Example__

```
<div riu-neu="collection top-center lg">
  <div>...</div>
  <div>...</div>
</div>
```

![RIU Neumorphism](url)
_Figure x: Collection. Code found [here](https://github.io)._

## Color Ranges
__RIU Neumorphism__ uses the background color of an element to set the shadow colors. To get the light shadow, 24 (18 HEX) is added to the red, green and blue components of the color. To get the dark shadow, 24 (18 HEX) is subtracted from the color components. For consistent design, the background color must leave a space of 24 (or 18 HEX) from the minimum (0) and maximum (255 or FF HEX) values of the color components. Therefore, the recommended range of color component values is 24 to 231 (or 18 to E7 HEX). This means that the recommeded darkest color is (24, 24, 24) or 181818 HEX and the lightest color is (231, 231, 231) or E7E7E7 HEX. This doesn't mean that colors outside the range are forbidden. You can still make it work with colors outside the range, especially through cutomization.

__Note:__ For collections, the background color must be explicitly set on the element. For other elements, the background color must be explicitly set on the parent element. Make sure that the background colors on the target elements do not conflict with the background colors of their parent elements.

## Automatic Update
The styling on neumorphic elements is updated automatically when any of the following occurs:

1. New elements have been added dynamically to the DOM
2. The "riu-neu" attribute has been updated dynamically
3. The background color of a collection or parent element of a neumorphic element has been changed.

## Browser Support


