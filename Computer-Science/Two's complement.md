The **two's complement** of a [[binary number]] is one plus its [[ones' complement]]. 

$$
\mathsf{Twos Complement}(n) \equiv 1 + \mathsf{NOT}(n)
$$

The two's complement of a number can be used as a convenient way to represent its negative. The first bit is taken to be a sign bit: 1 means negative, 0 means positive.

Say you have $N$ bits to represent a two's complement number. Then, you can represent [[integer]] in the range $[-2^{n-1}, 2^{n-1}-1]$

> Negative 1 in two's complement is always represented as all 1s in two's complement notation.