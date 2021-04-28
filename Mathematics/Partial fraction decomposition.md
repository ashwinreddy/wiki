**Partial fraction decomposition or expansion (PFD/PFE)** is taking a rational expression and turning it into a sum of simpler rational expressions.

$$
X(s) = \frac{N(s)}{D(s)} = \frac{b_m s^m + \dots + b_0}{a_ns^n + \dots + a_0}
$$

So $m$ is the degree of numerator and $n$ for the denominator.

|Condition|Name|
|---------|----|
|$m<n$|strictly proper rational function|
|$m=n$|proper rational function|
|$m>n$|improper rational function|

# Example

Take 

$$
X(s) = \frac{1}{(s+1)(s+2)}
$$

We propose a decomposition

\begin{align}
X(s) &= \frac{A}{s+1} + \frac{B}{s+2} \\\\
&= \frac{A(s+2)+B(s+1)}{(s+1)(s+2)} \\\\
&= \frac{(A+B)s + (2A+B)}{(s+1)(s+2)}
\end{align}

That tells us $A+B=0$ and $2A+B=1$, so $A=1$ and $B=-1$.