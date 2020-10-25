**Floating point** is a way of representing [[real number]] on a computer with the same general principle as [[scientific notation]]. In this way, it supports a wide range of values with high precision. 

# Format

The IEEE 754 standard uses 3 parts:

|Shorthand|Name|Num Bits|Meaning|
|---------|----|--------|-------|
|**S**|Sign|1 bit|0 = +, 1 = -|
|**E**|Exponent|8 bits|Control the power / range of numbers we can represent.|
|**M**|Mantissa/Significand|23 bits|Precision of representing the number|

Let's just call the number of significand bits $\mathsf{sigfigs}$.

The number is represented in terms of its significant figures (perhaps we could call this the number's energy) and an exponent which controls the 'floating point' (so named because changing the exponent will change the decimal point's location).

[[https://fabiensanglard.net/floating_point_visually_explained/floating_point_math.svg]]
[[https://fabiensanglard.net/floating_point_visually_explained/floating_point_layout.svg]]


|Exponent|Significand|Object|
|--------|-----------|------|
|0|0|$\pm 0$ based on the sign|
|0|nonzero|Denormalized number|
|1-254|anything| $\pm$ normalized number based on the sign|
|255|0|$\pm \infty$|
|255|nonzero|NaN|


In normalized form, the significand is treated as following a "1."


$$
\mathsf{Value} = (-1)^S \times \begin{cases} 1.\mathsf{Significand}_2 \times 2^{\mathsf{Exponent} + \mathsf{Bias}} & \text{normalized} \\\\  0.\mathsf{Significand}_2 \times 2^{\mathsf{Bias} + 1} & \text{denormalized} \end{cases}, \quad \mathsf{Bias} = -127
$$

[[_TOC_]]

# Representable numbers

The largest representable number would have maximum exponent and a mantissa of all 1s. Therefore, the mantissa on its own looks like

\begin{align}
0.\underbrace{11\dots 11}\_{23 \text{ bits}} &= 2^{-1} + \dots + 2^{-23}  \\\\
&= 2\^{-23}\left(2^{22} + \dots + 1\right) \\\\
&= 2^{-23}\left( 2^{23} - 1 \right) \\\\
&= 1 - 2^{-23}
\end{align}

Then we tag on the exponent, so we have $ \left( 1 + \left(1 - 2^{-23} \right) \right) \times 2^{127}$.

The smallest representable number would be a denormalized number, so we would have $2^{-23} \times 2^{-126}$. The smallest representable _normalized_ number would be $\left(1\right) \times 2^{1 - 127} = 2^{-126}$.

The smallest positive _integer_ we cannot represent is $2^{\mathsf{sigfigs}+1}+1$.

# Exponent Bias

For a $k$ bit exponent, the bias is given by

$$
\mathsf{Bias} = -\left(2^{k-1}-1\right)
$$

# Denormalized number

When we want to represent numbers without a leading 1, we go to the denormalized numbers.

The smallest denormalized number would be $2^{-\text{significand bits}} \times 2^{\mathsf{bias}+1}$. The next smallest number would be $2^{1-\mathsf{sigfigs}} \times 2^{\mathsf{bias}+1}$

Implicit exponent is -126 and we have no implied leading 1.

A floating-point number is defined in IEEE 754 standard. [This article](https://fabiensanglard.net/floating_point_visually_explained/index.html) provides a good explanation.

https://www.johnbcoughlin.com/posts/floating-point-axiom/

# Consequences

* The distance between floating point numbers increase as the absolute value of the numbers increaes
* Floating point addition is not associative.

# Step size

Floating point is discrete / granular so you can't just add any amount you want to a number. The exponent controls how much of a step a change in the significand will be. For example the difference between $1.0_2 \times 2^k$ and $1.1 \times 2^k$ is equal to $.1 \times 2^k$ or $2^{k-1}$.

So if the mantissa has $n$ bits, then adding 1 is ostensibly adding $2^{-n}$ to the "energy" of the number (i.e. the significant figures). But, in effect, that change is scaled by the exponent, which is $2^{\mathsf{exp} + \mathsf{bias}}$. So we have

$$
\text{step size} = 2^{\mathsf{exp} + \mathsf{bias}-\mathsf{sigfigs}}
$$

# See also

* [[https://docs.google.com/document/d/1IVTwu4_epNdfid0_N-XKm4Fr2E-VGCSUGwsCQCWD0C8/edit]]