**Backpropagation** is a [[dynamic programming]] [[algorithm]] for training an [[artificial neural network]], nowadays enabled by [[automatic differentiation]].

# Linear Layer

Let us consider a very simple single layer neural network that's just linear: $Y=XW$ for inputs $X \in \mathbb{R}^{N \times D}$ and $W \in \mathbb{R}^{D \times M}$ so that $Y \in \mathbb{R}^{N \times M}$. When we do this backward pass, assume we have $\pdv{L}{Y}$ in hand. We want to then compute $\pdv{L}{W}$ and chain rule tells us that

\begin{align*}
\pdv{L}{W} &= \pdv{L}{Y}\times\underbrace{\pdv{Y}{W}}_{\text{Jacobian}} \\\\
&= X^\mathsf{T} \pdv{L}{Y}
\end{align*}

# Matrix-matrix gradient

Suppose we have the matrix product $D=WX$ and we have a loss $L$. Then,

$$
\pdv{L}{W} = \pdv{L}{D}\times X^\mathsf{T}, \quad \pdv{L}{X} = W^\mathsf{T} \times \pdv{L}{D}
$$

---

<<Series("Backpropagation_")>>