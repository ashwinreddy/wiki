A **support vector machine (SVM)** is a [[linear classifier]] that takes a training set $\\{(\mathbf{x}\_i, y\_i)\\}_{i=1}^n$ with $y_i \in \\{-1, +1\\}$ and finds the weight and bias for decision rule

$$
r(x) = \operatorname{sgn}\left( \mathbf{w}^\mathsf{T}\mathbf{x} - b \right) 
$$

However, that on its own is underconstrained. SVM tries to maximize margin, the distance from the decision boundary $H =\\{\mathbf{x}: \mathbf{w}^\mathsf{T}\mathbf{x} - b = 0\\}$ to each point. Note that we have a degree of freedom to play with in the scaling. Generally, we pick $\lVert w \rVert = \frac{1}{m}$ for convenience.

[[_TOC_]]

# Margin

What is the margin for some point $\mathbf{z}$?  Well, we need to see the distance from $\mathbf{z}$ to $H$ which would be the projection of $\mathbf{z} - \mathbf{x}_0$ onto $\mathbf{w}$

$$
\operatorname{margin}(\mathbf{z}) = \frac{|\mathbf{w}^\mathsf{T}(\mathbf{z} - \mathbf{x}_0) |}{\lVert \mathbf{w} \rVert_2} = \frac{|\mathbf{w}^\mathsf{T}\mathbf{z} - b |}{\lVert \mathbf{w} \rVert_2} 
$$

# Hard Margin

\begin{equation}
\begin{aligned}
\max_{m, \mathbf{w}, b} \quad & m \\\\
\textrm{s.t.} \quad & y_i\frac{\left(\mathbf{w}^\mathsf{T}\mathbf{x}_i - b\right)}{\lVert \mathbf{w} \rVert_2} \geqslant m,\quad \forall i \\\\
& m \geqslant 0
\end{aligned}
\tag{Intuitive Formulation}
\end{equation}


The [[quadratic programming]]

\begin{equation}
\begin{aligned}
\arg\min_{\mathbf{w}, b} \quad & \lVert \mathbf{w} \rVert^2 \\\\
\textrm{s.t.} \quad & y_i\left(\mathbf{w}^\mathsf{T}\mathbf{x}_i - b\right) \geqslant 1,\quad \forall i
\end{aligned}
\tag{Hard SVM}
\end{equation}

# Soft Margin

The soft-margin SVM comes into play when the data is not linearly separable. We allow each point a transgression budget of $\xi$. We introduce a hyperparameter $C$ that controls how much we punish points for spending $\sum_i \xi$.

\begin{equation}
\begin{aligned}
\arg\min_{\mathbf{w}, b} \quad & \lVert \mathbf{w} \rVert^2 + C\sum_{i=1}^n \xi_n \\\\
\textrm{s.t.} \quad & y_i\left(\mathbf{w}^\mathsf{T}\mathbf{x}_i - b\right) \geqslant 1 - \xi_i ,\quad \forall i \\\\
& \xi_i \geqslant 0
\end{aligned}
\tag{Soft SVM}
\end{equation}

Clearly, as $C \to 0$ we recover the hard-margin SVM.