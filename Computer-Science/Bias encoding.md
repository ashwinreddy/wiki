**Bias encoding** is a way of representing numbers using an offset.

$$
\text{Actual Value Represented} = \text{Binary Representation} + \text{Bias}
$$

Typically, when we have $N$ bits,

$$
\mathsf{Bias} = 1-2^{N-1}
$$

The range of values we can represent with $N$ bits is $[\mathsf{Bias}, 2^N - 1 + \mathsf{Bias}]$. So if you pick the usual bias, you would have $\left[-2^{N-1}+1, 2^{N-1}\right]$