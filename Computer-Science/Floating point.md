**Floating point** is a way of representing [[real number]] on a computer with the same general principle as [[scientific notation]]. In this way, it supports a wide range of values with high precision. The IEEE 754 standard uses 3 parts:

* A sign bit, which is 0 for positive numbers and 1 for negative numbers
* 8 bits for the exponent with a bias of -127
* The significand storing the fraction of a number
 

The number is represented in terms of its significant figures (perhaps we could call this the number's energy) and an exponent which controls the 'floating point' (so named because changing the exponent will change the decimal point's location).

[[https://fabiensanglard.net/floating_point_visually_explained/floating_point_math.svg]]
[[https://fabiensanglard.net/floating_point_visually_explained/floating_point_layout.svg]]


|Exponent|Significand|Object|
|--------|-----------|------|
|0|0|$\pm 0$ based on the sign|
|0|nonzero|Denormalized number|
|1-254|anything| $\pm$ floating point based on the sign|
|255|0|$\pm \infty$|
|255|nonzero|NaN|


In normalized form, the significand is treated as following a "1."


$$
\mathsf{Value} = (-1)^S \times \begin{cases} (1 + \mathsf{Significand}) \times 2^{\mathsf{Exponent} + \mathsf{Bias}} & \text{normalized} \\\\  \mathsf{Significand} \times 2^{\mathsf{Exponent} + \mathsf{Bias} + 1} & \text{denormalized} \end{cases}, \quad \mathsf{Bias} = -127
$$

# Denormalized number

Implicit exponent is -126 and we have no implied leading 1.

A floating-point number is defined in IEEE 754 standard. [This article](https://fabiensanglard.net/floating_point_visually_explained/index.html) provides a good explanation.

https://www.johnbcoughlin.com/posts/floating-point-axiom/

# Consequences

* The distance between floating point numbers increase as the absolute value of the numbers increaes
* Floating point addition is not associative.