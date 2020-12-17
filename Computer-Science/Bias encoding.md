**Bias encoding** is a way of representing numbers using an offset.

$$
\text{Actual Value Represented} = \text{Binary Representation} + \text{Bias}
$$

Typically, when we have $N$ bits,

$$
\mathsf{Bias} = -2^{N-1}-1
$$

The range of values we can represent with $N$ bits is $[\mathsf{Bias}, 2^N - 1 + \mathsf{Bias}]$