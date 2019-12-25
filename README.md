# ***JS Cube Rotation 3D:***

----------
### *Aim*:

----------


To code a 3D cube using javascript.

-------------
### *Softwares Used*:

-------------



-------------
### *Language Written*:

-------------
Javascript


-------------
### *Introduction*:

-------------
I attended an on site interview for JUST Pay where they gave me a day long coding question to design and implement a cube that can be rotated along X, Y, Z axis.



-------------
### *Algorithm*:

-------------
Using polar cooardinates, we can calculate the new location of the 8 vertices when it is rotated by an angle theta.

Rotation along X axis:
```
y6 = y6*Math.cos(toRadians(theta)) - z6*Math.sin(toRadians(theta));
z6 = y6*Math.sin(toRadians(theta)) + z6*Math.cos(toRadians(theta));
y1 = y1*Math.cos(toRadians(theta)) - z1*Math.sin(toRadians(theta));
z1 = y1*Math.sin(toRadians(theta)) + z1*Math.cos(toRadians(theta));
y2 = y2*Math.cos(toRadians(theta)) - z2*Math.sin(toRadians(theta));
z2 = y2*Math.sin(toRadians(theta)) + z2*Math.cos(toRadians(theta));
y3 = y3*Math.cos(toRadians(theta)) - z3*Math.sin(toRadians(theta));
z3 = y3*Math.sin(toRadians(theta)) + z3*Math.cos(toRadians(theta));
y4 = y4*Math.cos(toRadians(theta)) - z4*Math.sin(toRadians(theta));
z4 = y4*Math.sin(toRadians(theta)) + z4*Math.cos(toRadians(theta));
y5 = y5*Math.cos(toRadians(theta)) - z5*Math.sin(toRadians(theta));
z5 = y5*Math.sin(toRadians(theta)) + z5*Math.cos(toRadians(theta));
y7 = y7*Math.cos(toRadians(theta)) - z7*Math.sin(toRadians(theta));
z7 = y7*Math.sin(toRadians(theta)) + z7*Math.cos(toRadians(theta));
y8 = y8*Math.cos(toRadians(theta)) - z8*Math.sin(toRadians(theta));
z8 = y8*Math.sin(toRadians(theta)) + z8*Math.cos(toRadians(theta));
```
Rotation along Y axis:
```
x6 = x6*Math.cos(toRadians(theta)) - z6*Math.sin(toRadians(theta));
z6 = x6*Math.sin(toRadians(theta)) + z6*Math.cos(toRadians(theta));
x1 = x1*Math.cos(toRadians(theta)) - z1*Math.sin(toRadians(theta));
z1 = x1*Math.sin(toRadians(theta)) + z1*Math.cos(toRadians(theta));
x2 = x2*Math.cos(toRadians(theta)) - z2*Math.sin(toRadians(theta));
z2 = x2*Math.sin(toRadians(theta)) + z2*Math.cos(toRadians(theta));
x3 = x3*Math.cos(toRadians(theta)) - z3*Math.sin(toRadians(theta));
z3 = x3*Math.sin(toRadians(theta)) + z3*Math.cos(toRadians(theta));
x4 = x4*Math.cos(toRadians(theta)) - z4*Math.sin(toRadians(theta));
z4 = x4*Math.sin(toRadians(theta)) + z4*Math.cos(toRadians(theta));
x5 = x5*Math.cos(toRadians(theta)) - z5*Math.sin(toRadians(theta));
z5 = x5*Math.sin(toRadians(theta)) + z5*Math.cos(toRadians(theta));
x7 = x7*Math.cos(toRadians(theta)) - z7*Math.sin(toRadians(theta));
z7 = x7*Math.sin(toRadians(theta)) + z7*Math.cos(toRadians(theta));
x8 = x8*Math.cos(toRadians(theta)) - z8*Math.sin(toRadians(theta));
z8 = x8*Math.sin(toRadians(theta)) + z8*Math.cos(toRadians(theta));
```
-------------
### *Usage*:

-------------
Open Cube.html file in a browser.


This code is edited using Sublime text