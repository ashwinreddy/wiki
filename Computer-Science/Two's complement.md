The **two's complement** of a binary number is one plus its [[ones' complement]]. It's one convenient way of trying to represent a negative number.

$$
d_{n} \times (- 2^n) \sum_{i=1}^{n-1} d_i \times 2^i
$$



In fact, all 1s in two's complement system corresponds to -1.

$$
\mathsf{Two's Complement}(n) = 1 + \mathsf{NOT}(n)
$$

# Representing negative numbers

The first bit is reserved for the sign. 0 is positive, 1 is negative. 

When you want a number's negative, you take its two's complement.