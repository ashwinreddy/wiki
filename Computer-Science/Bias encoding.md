**Bias encoding** is a way of representing numbers using an offset.

$$
\text{Actual Value Represented} = \text{Binary Representation} + \text{Bias}
$$

A simple choice for the bias when we have $N$ bits is $-(2^{N-1}-1)$