**Floating point** is a way of representing [[real number]] on a computer with the same general principle as [[scientific notation]]. In this way, it supports a wide range of values with high precision.


The number is represented in terms of its significant figures and an exponent which controls the 'floating point' (so named because changing the exponent will change the decimal point's location).





A **float** is a datatype representing a real number with a "floating point." We have to specify the "energy" (the significant figures) and the exponent which floats the point appropriately. It's [[scientific notation]]. The standard is the IEEE 754 format.

[[https://fabiensanglard.net/floating_point_visually_explained/floating_point_layout.svg]]

[[https://fabiensanglard.net/floating_point_visually_explained/floating_point_math.svg]]

In normalized form, the significand is treated as following a "1."


$$
(-1)^S \times (1 + \mathsf{Significand}) \times 2^{\mathsf{Exponent} - \mathsf{Bias}}, \quad \mathsf{Bias} = 127
$$

|Exponent|Significand|Object|
|--------|-----------|------|
|0|0|0|
|0|nonzero|Denormalized number|
|1-254|anything| +/- floating point|
|255|0|$\pm \infty$|
|255|nonzero|NaN|

[[Floating-point arithmetic]]

# Denormalized number

Implicit exponent is -126 and we have no implied leading 1.

**Floating-point arithmetic** is the arithmetic that follows when storing [[real number]] in essentially the same way that people write down numbers in [[scientific notation]]. 

* It is not add associative.


A floating-point number is defined in IEEE 754 standard. [This article](https://fabiensanglard.net/floating_point_visually_explained/index.html) provides a good explanation.

https://www.johnbcoughlin.com/posts/floating-point-axiom/