**Floating point** is a way of representing [[real number]] on a computer with the same general principle as [[scientific notation]]. In this way, it supports a wide range of values with high precision. Whereas scientific notation would write a number like $4.48 \times 10^2$, the floating point number would be representing it in closer to the form $1.101 \times 2^8$.

[[_TOC_]]

# Components
The IEEE 754 standard uses 3 fields:

[[https://fabiensanglard.net/floating_point_visually_explained/floating_point_math.svg]]

|Shorthand|Name|Num Bits|Meaning|
|---------|----|--------|-------|
|**S**|Sign|1 bit|0 = positive number, 1 = negative number|
|**E**|Exponent|8 bits|Control the power / range of numbers we can represent.|
|**M**|Mantissa/Significand|23 bits|Precision of representing the number|

[[https://fabiensanglard.net/floating_point_visually_explained/floating_point_layout.svg]]




Let's just call the number of significand bits $\mathsf{sigfigs}$.


The number is represented in terms of its significant figures (perhaps we could call this the number's energy) and an exponent which controls the 'floating point' (so named because changing the exponent will change the decimal point's location).

# Meaning

The table below tells you how to interpret a floating point number.

|Exponent|Significand|Object|
|--------|-----------|------|
|0|0|$\pm 0$ based on the sign|
|0|nonzero|Denormalized number|
|1-254|anything| $\pm$ normalized number based on the sign|
|255|0|$\pm \infty$|
|255|nonzero|NaN|


How does the number map to an actual value? The following formula captures this.

\begin{equation}
\mathsf{Value} = (-1)^S \times \begin{cases} 1.\mathsf{Significand}_2 \times 2^{\mathsf{Exponent} + \mathsf{Bias}} & \text{normalized} \\\\  0.\mathsf{Significand}_2 \times 2^{\mathsf{Bias} + 1} & \text{denormalized} \end{cases}, \quad \mathsf{Bias} = 1-2^{\mathsf{Exponent Bits} -1}
\end{equation}


## Denormalized numbers

In normalized form, the significand is treated as following a "1."

There could be multiple ways of using a "scientific notation"-style representation for any given number. Therefore, we can normalize the number by asking that we represent it with a prefix of "1." 


When we have an exponent of 0, we are looking at denormalized numbers. In particular, we use them when we want to look at numbers below $2^{1-\mathsf{bias}}$.

When we want to represent numbers without a leading 1, we go to the denormalized numbers.

The smallest denormalized number would be $2^{-\text{significand bits}} \times 2^{\mathsf{bias}+1}$. The next smallest number would be $2^{1-\mathsf{sigfigs}} \times 2^{\mathsf{bias}+1}$

Implicit exponent is -126 and we have no implied leading 1.

A floating-point number is defined in IEEE 754 standard. [This article](https://fabiensanglard.net/floating_point_visually_explained/index.html) provides a good explanation.

## Representable numbers

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

# Consequences

* The distance between floating point numbers increase as the absolute value of the numbers increaes
* Floating point addition is not associative.

# Step size

Floating point is discrete / granular so you can't just add any amount you want to a number. The exponent controls how much of a step a change in the significand will be. For example the difference between $1.0_2 \times 2^k$ and $1.1 \times 2^k$ is equal to $.1 \times 2^k$ or $2^{k-1}$.

So if the mantissa has $n$ bits, then adding 1 is ostensibly adding $2^{-n}$ to the "energy" of the number (i.e. the significant figures). But, in effect, that change is scaled by the exponent, which is $2^{\mathsf{exp} + \mathsf{bias}}$. So we have

$$
\text{step size} = 2^{\mathsf{exp} + \mathsf{bias}-\mathsf{sigfigs}}
$$

As for denormalized numbers, if we take the difference between two consecutive floats, we get

$$
2^{-\mathsf{sigfigs}} \times 2^{\mathsf{Bias}+1}
$$

# Floats in range

Suppose you want to know how many floats there are from $\ell$ to $h$ where $\ell < h$. Suppose you calculate that $\ell$ has a significand of $\ell_{\mathsf{sig}}$ and an exponent of $\ell_{\mathsf{exp}}$ and likewise for $h$.

If $\ell_{\mathsf{exp}} = h_{\mathsf{exp}}$, then the range is the difference between the significands since they're counting on the same scale.

If $\ell_{\mathsf{exp}} < h_{\mathsf{exp}}$, then you need to count 

<<Warning('fill out')>>

# External links

* [[https://www.johnbcoughlin.com/posts/floating-point-axiom/]]
* [[https://docs.google.com/document/d/1IVTwu4_epNdfid0_N-XKm4Fr2E-VGCSUGwsCQCWD0C8/edit]]