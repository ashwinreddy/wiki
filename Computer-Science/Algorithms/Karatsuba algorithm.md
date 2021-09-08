**Karatsuba algorithm** for multiplying $n$-bit numbers in base $b$ $x$ and $y$ has runtime complexity $\order{n^{\lg 3}}$.

$$
x = x_H b^{n/2} + x_L, \qquad y = y_H b^{n/2} + y_L
$$

$$
xy = x_H y_H b^n + (x_H y_L + x_L y_H)b^{n/2} + x_L y_L
$$