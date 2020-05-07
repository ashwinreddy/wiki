A **support-vector machine** is a binary classifier with a linear decision boundary called the maximum margin hyperplane.




The data is given by $(\vec{x}_1, y_1), \dots, (\vec{x}_n, y_n)$ with $y_i \in \\{+1,-1\\}$. A linear model gives us

$$
f(\vec{x}) = \vec{w}^\top \vec{x} - b
$$

The decision boundary is given by $f(\vec{x})=0$.

A correct classifier would have

$$
\begin{cases}
f(\vec{x}_i) > 0 & y_i =+1\\
f(\vec{x}_i) < 0 & y_i = -1
\end{cases} \implies y_i\left( \vec{w}^\top \vec{x}_i  - b \right) \geq 0
$$

Margin
: The distance between closest point to the hyperplane and the hyperplane

We prefer a larger margin

# Hard-Margin SVM

The hard margin SVM assumes that the data is linearly separable. We want 

$$
\frac{y_i\left(\vec{w}^\top \vec{x}_i - b  \right)}{\lVert \vec{w} \rVert_2 } \geq m
$$

The decision boundary is not affected by the norm of $\vec{w}$, so we just pick it to be $1/m$ and then we can say

\begin{equation}
\label{eq:soft-svm}
y_i\left(\vec{w}^\top \vec{x}_i - b  \right) \geq 1
\end{equation}

# Soft-Margin SVM

We relax the constraint in Equation \ref{eq:soft-svm} by introducing slack variables

$$
y_i\left(\vec{w}^\top \vec{x}_i - b  \right) \geq 1 - \xi_i, \quad \xi_i \geq 0 
$$