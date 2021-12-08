A **support vector machine (SVM)** is a [[linear classifier]] takes a training set $\\{(\mathbf{x}\_i, y\_i)\\}_{i=1}^n$ with $y_i \in \\{-1, +1\\}$. The goal is to find the maximum-margin hyperplane $\mathbf{w}^\mathsf{T}\mathbf{x} - b=0$

$$
H =\\{\mathbf{x}: \mathbf{w}^\mathsf{T}\mathbf{x} - b = 0\\}
$$

$$
\begin{aligned}
\min_{\mathbf{w}, b} \frac{1}{2}\lVert \mathbf{w} \rVert^2
\end{aligned}
$$