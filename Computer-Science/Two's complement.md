The **two's complement** of a [[binary number]] is one plus its [[ones' complement]]. 

$$
\mathsf{Twos Complement}(n) \equiv 1 + \mathsf{NOT}(n)
$$

The two's complement of a number can be used as a convenient way to represent signed [[integer]]. The first bit is taken to be a sign bit: 1 means negative, 0 means positive. Then we simply allow the operation

$$
\mathsf{Negate}(n) \equiv \mathsf{TwosComplement}(n).
$$

to fill in the rest.

> Negative 1 in two's complement is always represented as all 1s in two's complement notation.

# Range

Say you have $N$ bits to represent a two's complement number. Then, you can represent [[integer]] in the range $[-2^{n-1}, 2^{n-1}-1]$ where the smallest value corresponds to a 1 followed by all 0s and the largest is a 0 followed by all 1s.

# Properties

The operation is an [[involution]]:

\begin{align\*}
\mathsf{Twos Complement}(\mathsf{Twos Complement}(n)) &= \mathsf{Twos Complement}(1 + \mathsf{NOT}(n)) \\\\
&= 1 + \mathsf{NOT}(1 + \mathsf{NOT}(n)) \\\\
&= 1 + \mathsf{NOT}(\mathsf{NOT}(n)) - 1 \\\\
&= n
\end{align\*}