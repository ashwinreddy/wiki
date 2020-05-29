The **vector projection** of $\vec{a}$ onto $\vec{b}$ finds the closest representation of $\vec{a}$ as $k\vec{b}$. The projection can be computed using dot products and vector scaling.

$$
\operatorname{proj} \vec{a} \text{ onto } \vec{b} = { \vec{a}\cdot\vec{b} \over \vec{b}\cdot\vec{b}}\vec{b}
$$

# Scalar Projection

We start by considering the scalar projection $\lVert \vec{a} \rVert \cos\theta$. We can compute this by

$$
\lVert \vec{a} \rVert \cos\theta = \frac{\vec{a} \cdot \vec{b}}{\lVert \vec{b} \rVert}
$$

The vector projection is just the scalar projection in the direction $\vec{b}$:

$$
\lVert \vec{a} \rVert \cos\theta \frac{\vec{b}}{\lVert \vec{b} \rVert} = \frac{\vec{a} \cdot \vec{b}}{\lVert \vec{b} \rVert}\frac{\vec{b}}{\lVert \vec{b} \rVert}
$$

# Least Squares

Recall the [[least squares|Ordinary least squares]] formula and demote matrix $A$ to a column vector $\vec{a}$. If we want to find $x$ so that $\vec{a}x=\vec{b}$, then

$$
x=\left(\vec{a}^\top \vec{a} \right)^{-1} \vec{a}^\top \vec{b}
$$

<<Warn("$\vec{a}$ and $\vec{b}$ have switched places in this section!")>>