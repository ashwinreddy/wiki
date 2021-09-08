**Karatsuba algorithm** for multiplying $n$-bit numbers in base $b$ $x$ and $y$ has runtime complexity $\order{n^{\lg 3}}$.

$$
a = x_H y_H, \qquad d = x_L y_L
$$

$$
e = (x_H  + x_L)(y_H + y_L) - a - d
$$

$$
xy = ab^n + eb^{n/2} + d
$$