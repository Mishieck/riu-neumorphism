# riu-neumorphism
A JavaScript utility framework for neumorphic designs.

With a wild range of options, style and customize your UI using neumorphic design. __RIU Neumorphism__ works on almost any color. Make your designs look realistic via neumorphism.

<img src="https://user-images.githubusercontent.com/57598264/99809149-8c847f80-2b4a-11eb-8ac9-2dd853ec1f24.png" alt="Neumorphism Grid">

_Figure 1.0: Neumorphism grid. Code found [here](https://github.com/Mishieck/riu-neumorphism-demos/blob/main/neumorphism-grid.htm)._

## Installation
a) npm Module

`$ npm i riu-neumorphism --save`

b) CDN

`<script src="https://unpkg.com/riu-neumorphism"></script>`

or

`<script src="https://cdn.jsdelivr.net/npm/riu-neumorphism"></script>`


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

_Figure 2.1_ shows the default styling.

<img src="https://user-images.githubusercontent.com/57598264/99809596-3106c180-2b4b-11eb-9c83-59481fdc1495.png" alt="Default Styling">

_Figure 2.1: Default styling. Code found [here](https://github.com/Mishieck/riu-neumorphism-demos/blob/main/defaults.htm)._

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
  * Opacities - 0.8 for the light shadow and 1 for the dark shadow

### Customization
Customization of the shadows is done via the "riu-neu" attribute by choosing from pre-defined values and/or using customization functions. All values inside the attribute are seperated by a space.

#### __Border Radius__
All neumorphic elements are required to have a border radius greater than 0. The border radius is customized only via the _radius_ function. The function has the form:

`radius(value)`

where `value` is any valid CSS value for "border-radius".

__Example 3.1__

`<div riu-neu="radius(16px)">...</div>`

_Figure 3.1_ shows elements with different radii.

<img src="https://user-images.githubusercontent.com/57598264/99809691-54ca0780-2b4b-11eb-86fa-c4eca321a232.png" alt="Radii">

_Figure 3.1: Elements at different radii. Code found [here](https://github.com/Mishieck/riu-neumorphism-demos/blob/main/radius.htm)._


#### __Light Source Position__
The light source position determines where the light and dark shadows are positioned on an element. This is customized only via the 8 pre-defined values; _top-left_, _top-center_, _top-right_, _center-right_, _bottom-right_, _bottom-center_, _bottom-left_ and _center-left_. The default value is _top-left_. Just include any of these values in the "riu-neu" attribute value to set the desired position. _Figure 3.2_ illustrates the available light source positions.

__Example 3.2__

`<div riu-neu="top-right">...</div>`

<img src="https://user-images.githubusercontent.com/57598264/99809990-c3a76080-2b4b-11eb-9a32-e682b7fca847.png" alt="Light Source Positions">

_Figure 3.2: Light source positions. Code found [here](https://github.com/Mishieck/riu-neumorphism-demos/blob/main/light.htm)._

#### __Shadow Boundary__
The boundary of the shadow can be customized by using one of three pre-defined values. The values are _box_ for any element, _drop_ for svg and png images, and _text_ for text. The default value is _box_. _Figure 3.3_ illustrates the effect of using these values.

__Example 3.3__

`<div riu-neu="text">...</div>`

<img src="https://user-images.githubusercontent.com/57598264/99810147-f8b3b300-2b4b-11eb-99b2-fe2837c0c79d.png" alt="Shadow Boundaries">

_Figure 3.3: Shadow boundaries. Code found [here](https://github.com/Mishieck/riu-neumorphism-demos/blob/main/boundary.htm)._

__Note:__ For _drop_ shadows, make sure the color of the image does not conflict with the background color of its background color.

#### __Shadow Position__
Shadows can be positioned either outside or inside an element. Use the value _inner_ to make the shadows go inside an element. The default value is _outer_. The two shadow positions are illustrated in _Figure 3.4_.

__Example 3.4__

`<div riu-neu="inner">...</div>`

<img src="https://user-images.githubusercontent.com/57598264/99810232-1b45cc00-2b4c-11eb-9006-ccf4de1007ab.png" alt="Shadow Positions">

_Figure 3.4: Shadow positions. Code found [here](https://github.com/Mishieck/riu-neumorphism-demos/blob/main/shadow-pisitions.htm)._

__Note:__ Inner shadows only work for _box_ shadow. It doesn't work for _drop_ or _text_ shadow.

#### __Shadow Colors__
The colors used by each shadow can be customized via the _colors_ function. It takes the form:

`colors(RL GL BL, RD GD BD)`

where `RL`, `GL` and `BL` are the red, green and blue values of the light shadow respectively, and `RD`, `GD` and `BD` are the red, green and blue values of the dark shadow respectively.

__Example 3.5__

`<div riu-neu="colors(255 255 255, 0 0 0)">...</div>`

_Figure 3.5_ shows shadows with customized colors.

<img src="https://user-images.githubusercontent.com/57598264/99810360-49c3a700-2b4c-11eb-9122-908f02e7f854.png" alt="Shadow Colors">

_Figure 3.5: Shadow colors. Code found [here](https://github.com/Mishieck/riu-neumorphism-demos/blob/main/colors.htm)._

__Note:__ The values for the colors do not include opacities. The opacities are set seperatly as described in the __Opacities__ section.

#### __Shadows__
The X-offset, Y-offset, blur radius and spread readius of the shadows can be customized via the 5 pre-defined values or via the _shadows_ function.

The pre-defined values are _xs_, _sm_, _md_, _lg_ and _xl_. The default value is _md_. _Table 3.6_ shows the values for X-offset, Y-offset, blur radius and spread radius for each one of the pre-defined values. _Figure 3.6_ shows the available sizes.

The _shadows_ function has the form:

`shadow(offset blur spread, offset blur spread)`

where `offset` is the X and Y offsets, `blur` is the blur radius and `spread` is the spread radius. The values on the left side of the comma are for the light shadow and the ones on the right are for the dark shadow. You can use any valid CSS values.

__Example 3.6__

`<div riu-neu="shadow(9px 24px 2px, 7px 14px 0)">...</div>`

Value | X-offset  | Y-offset  | Border Radius | Spread Radius
------|-----------|-----------|---------------|--------------
xs    | 2px       | 2px       | 4px           | 0px
sm    | 4px       | 4px       | 8px           | 0px
md    | 6x        | 6px       | 12px          | 0px
lg    | 10px      | 10px      | 20px          | 0px
xl    | 16px      | 16px      | 32px          | 0px

_Table 3.6: Shadow X-offsets, Y-offsets, blur radii and spread radii._

<img src="https://user-images.githubusercontent.com/57598264/99810498-7677be80-2b4c-11eb-9ca0-44bdd130b38f.png" alt="Shadows">

_Figure 3.6: Shadow X-offsets, Y-offsets, blur radii and spread radii. Code found [here](https://github.com/Mishieck/riu-neumorphism-demos/blob/main/shadows.htm)._

__Note:__ Only one value is used for both the X and Y offsets because they are always equal.

#### __Curvature__
To give an element a surface curvature, use one of the three pre-defined values; _flat_, _convex_ or _concave_. The _curvature_ function gives you more control over the curvature. Through the function, you can specify the origin and size of curvature. The function has the signature:

`curvature(origin, size)`

where `origin` is any of the 8 values; _top-left_, _top-center_, _top-right_, _center-right_, _bottom-right_, _bottom-center_, _bottom-left_ and _center-left_. And `size` is any integer equal to or greater than 0. The default value for `origin` is _top-left_ and 16 is the default for the `size` (0 means no curvature). _Figure 3.7_ illustrates the different curvature directions.

__Example 3.7a__

`<div riu-neu="concave">...</div>`

__Example 3.7b__

`<div riu-neu="convex curvature(center-left, 32)">...</div>`

<img src="https://user-images.githubusercontent.com/57598264/99810581-98714100-2b4c-11eb-960d-7229ac99226b.png" alt="Curvature">

_Figure 3.7: Surface curvature. Code found [here](https://github.com/Mishieck/riu-neumorphism-demos/blob/main/curvature.htm)._

__Note:__ Surface curvature does not work on _text_ and _drop_ shadows. The _curvature_ function does not work without _convex_ or _concave_ value. Using _curvature_ with _flat_ has no effect.

#### __Opacities__
The opacities of the shadows can be customized via the _opacities_ function. The function has the following structure:

`opacities(OL, OD)`

where `OL` is the opacity of the light shadow and `OD` is the opacity of the dark shadow. The values range from 0 to 1 just as it is in CSS. The default value for the light shadow is 0.8 and 1 is for the dark shadows.

__Example 3.8__

`<div riu-neu="opacities(0.5, 0.1)">...</div>`

_Figure 3.8_ shows elements with customized opacities.

<img src="https://user-images.githubusercontent.com/57598264/99810658-b9d22d00-2b4c-11eb-804e-b910b29d2a95.png" alt="Opacities">

_Figure 3.8: Opacities. Code found [here](https://github.com/Mishieck/riu-neumorphism-demos/blob/main/opacities.htm)._

## Collection
If you want to create multiple elements with the same style, you can use a collection. Styling is applied on the direct children of a collection. All customization defined on the collection will be applied on all direct children of the element, but not the element itself. You make an element a collection by adding "collection" to the "riu-neu" attribute value. Putting the attribute "riu-neu" on any of the direct children overrights the collection's style on that child. _Figure 4.1_ shows a collection of elements.

__Example 4.1__

```
<div riu-neu="collection top-center lg">
  <div>...</div>
  <div>...</div>
</div>
```

<img src="https://user-images.githubusercontent.com/57598264/99810730-d0788400-2b4c-11eb-8ece-13d86ef01a49.png" alt="Collection">

_Figure 4.1: Collection. Code found [here](https://github.com/Mishieck/riu-neumorphism-demos/blob/main/collection.htm)._

## Color Ranges
__RIU Neumorphism__ adjusts the background color of an element to set the shadow colors. To get the light shadow, the color is lightened. To get the dark shadow, the color is darkened. RIU Neumorphism works for every color except _black_ and _white_. _figure 5.1_ shows neumorphic elements at different shades of gray.

<img src="https://user-images.githubusercontent.com/57598264/99806928-63aebb00-2b47-11eb-80d7-1b5332643277.png" width="608" height="640">

_Figure 5.1: Color ranges - shades of gray. Code found [here](https://github.com/Mishieck/riu-neumorphism-demos/blob/main/backgrounds.htm)._

__Note:__ If the background color is not explicitly set on an element or is out of range (black or white), the background color of the closest ancester with a color explicitly set will be used instead. If no such ancenster is found, the styles will not be set. Make sure that the background colors on the target elements do not conflict with the background colors of their parent elements.

## Automatic Update
The styling on neumorphic elements is updated automatically when any of the following occurs:

1. New elements have been added dynamically to the DOM
2. The "riu-neu" attribute has been updated dynamically
3. The background color of a neumorphic element has been changed.

## Reporting Issues
Use the official GitHub bug tracker to report issues.


