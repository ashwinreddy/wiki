A **support-vector machine** is a binary classifier with a linear decision boundary. The data is given by $(\vec{x}_1, y_1), \dots, (\vec{x}_n, y_n)$ with $y_i \in \\{+1,-1\\}$. A linear model gives us

$$
f(\vec{x}) = \vec{w}^\top \vec{x} - b
$$

A correct classifier would have

$$
\begin{cases}
f(\vec{x}_i) > 0 & y_i =+1\\
f(\vec{x}_i) < 0 & y_i = -1
\end{cases} \implies y_i\left( \vec{w}^\top \vec{x}_i  - b \right) \geq 0
$$

Margin
: The distance between closest point to the hyperplane and the hyperplane

So we want a classifier that maximizes the margin.