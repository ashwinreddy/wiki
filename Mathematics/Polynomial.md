**Polynomial**

# Properties

* A non-zero polynomial of degree _d_ has at most _d_ roots
* Given _d+1_ pairs of points $(x_1, y_1),\ldots, (x_{d+1}, y_{d+1})$ with $x_i$ distinct, there is a unique polynomial _P(x)_ of degree at most $d$ such that $p(x_i)=y_i$ for $1 \leq i \leq d+1$. In a nutshell,

$$
\text{degree } d \text{ polynomial} \iff d+1 \text{ points/coefficients}
$$

[[Lagrange interpolation]] is an algorithm that constructs such a polynomial from the points.