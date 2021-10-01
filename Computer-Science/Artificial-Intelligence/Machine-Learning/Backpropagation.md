**Backpropagation** is an [[algorithm]] for training an [[artificial neural network]], nowadays enabled by [[automatic differentiation]].

# Simple Feedforward Example

Let $x^{(\ell)}\_j$ denote output of neuron $j$ in layer $\ell$. Let $d^{(\ell)}$ be the number of nodes in layer $\ell$. We know that for [[activation function]] $g$ and weights $w_{ij}$, we will have the output of a neuron be

\begin{align\*}
x_j^{(\ell)} &= g\left( \sum_{i=0}\^{d^{(\ell -1 )}} w_{ij}^{(\ell)} x_i^{(\ell -1)}\right) \\\\
&= g\left(S_j^{(\ell)}\right).
\end{align\*}

In the last step, we have defined shorthand $S_j^{(\ell)} \triangleq \sum_{i=0}\^{d^{(\ell -1 )}} w_{ij}^{(\ell)} x_i^{(\ell -1)}$ means the weighted input to node $j$ in layer $\ell$. We will now use $\delta_j$ to represent the partial derivative of error $e$ w.r.t $S_j$.

\begin{align\*}
\nabla_w e(w) &= \left[ \pdv{e(w)}{w_{ij}^{(\ell)}} \right] \\\\
&= \pdv{e(w)}{S_j\^{(\ell)}}\times\pdv{S_j\^{(\ell)}}{w_{ij}^{(\ell)}} \\\\
&= \delta_j^{(\ell)} x_{i}^{(\ell -1)}
\end{align\*}

We can now use [[induction|mathematical induction]]. For example, if we have a MSE loss for a single output neural network, then the final layer $L$ would have

$$
\pdv{e(w)}{S_1^{(L)}} = \pdv{}{S_1^{(L)}} \left [ \frac{1}{2}\left( g(S_1^{(L)}) - y \right)^2 \right ],
$$

which is easy enough to compute. For the inductive step, we note that

\begin{align\*}
\delta_{i}^{(\ell - 1)} &= \pdv{e(w)}{s_i^{\ell -1 }}  \\\\
&= \sum_j \pdv{e(w)}{S_j^{(\ell)}} \pdv{S_j\^{(\ell)}}{x_i^{(\ell -1)}} \pdv{x_i^{(\ell -1)}}{S_i^{(\ell - 1)}}
\end{align\*}

What this tells us is that

\begin{align*}
\delta_{i}^{(\ell -1)} &= \sum_j \delta_j^{(\ell)} w_{ij}^{(\ell)} g'\left(S_i^{(\ell - 1)}\right) \\\\
&= g'\left(S_i^{(\ell - 1)}\right) \sum_j w_{ij}^{(\ell)} \delta_{j}^{(\ell)}
\end{align*}