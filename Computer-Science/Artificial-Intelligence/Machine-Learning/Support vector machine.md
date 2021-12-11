A **support vector machine (SVM)** is a [[linear classifier]] that takes a training set $\\{(\mathbf{x}\_i, y\_i)\\}_{i=1}^n$ with $y_i \in \\{-1, +1\\}$ and finds a decision rule

$$
r(x) = \begin{cases} 1 & \mathbf{w}^\mathsf{T}\mathbf{x} - b \geqslant 0 \\\\ -1 & \text{otherwise} \end{cases}
$$

while trying to maximize margin.


\begin{equation}
\begin{aligned}
\max_{m, \mathbf{w}, b} \quad & m \\\\
\textrm{s.t.} \quad & y_i\left(\mathbf{w}^\mathsf{T}\mathbf{x}_i - b\right) \geqslant 1,\quad \forall i \\\\
& m \geqslant 0
\end{aligned}
\tag{Intuitive Formulation}
\end{equation}

The maximum-margin hyperplane decision boundary is $\mathbf{w}^\mathsf{T}\mathbf{x} - b=0$.

$$
H =\\{\mathbf{x}: \mathbf{w}^\mathsf{T}\mathbf{x} - b = 0\\}
$$

What is the margin $m$ for some point $\mathbf{z}$? Well, we need to see the distance from $\mathbf{z}$ to $H$ which would be the projection of $\mathbf{z} - \mathbf{x}_0$ onto $\mathbf{w}$

$$
m = \frac{|\mathbf{w}^\mathsf{T}(\mathbf{z} - \mathbf{x}_0) |}{\lVert \mathbf{w} \rVert_2} = \frac{|\mathbf{w}^\mathsf{T}\mathbf{z} - b |}{\lVert \mathbf{w} \rVert_2} 
$$

We can pick $\lVert w \rVert_2$ to be something like 1 or $\frac{1}{m}$.

The [[quadratic program]]

\begin{equation}
\begin{aligned}
\min_{\mathbf{w}, b} \quad & \frac{1}{2}\lVert \mathbf{w} \rVert^2 \\\\
\textrm{s.t.} \quad & y_i\left(\mathbf{w}^\mathsf{T}\mathbf{x}_i - b\right) \geqslant 1,\quad \forall i
\end{aligned}
\tag{Hard SVM}
\end{equation}

\begin{equation}
\begin{aligned}
\min_{\mathbf{w}, b} \quad & \frac{1}{2}\lVert \mathbf{w} \rVert^2 + C\sum_{i=1}^n \xi_n \\\\
\textrm{s.t.} \quad & y_i\left(\mathbf{w}^\mathsf{T}\mathbf{x}_i - b\right) \geqslant 1 - \xi_i ,\quad \forall i \\\\
& \xi_i \geqslant 0
\end{aligned}
\tag{Soft SVM}
\end{equation}