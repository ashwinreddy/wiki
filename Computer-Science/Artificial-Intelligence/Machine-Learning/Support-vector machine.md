A **support-vector machine** is a binary classifier with a linear decision boundary. The data is given by $(\vec{x}_1, y_1), \dots, (\vec{x}_n, y_n)$ with $y_i \in \\{+1,-1\\}$. We want to find

$$
f(\vec{x}) = \vec{w}^\top \vec{x} - b
$$

such that 

$$
f(\vec{x}_i) = \begin{cases}
 \vec{w}^\top \vec{x}_i - b > 0 & y_i = +1 \\
\vec{w}^\top \vec{x}_i - b > 0 & y_i = +1
\end{cases}
$$