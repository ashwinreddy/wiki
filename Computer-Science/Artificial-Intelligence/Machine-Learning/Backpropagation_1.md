**Backpropagation** is an [[algorithm]] for training an [[artificial neural network]], nowadays enabled by [[automatic differentiation]].

# Linear Layer

Let us consider a very simple linear layer $Y=XW$ for inputs $X \in \mathbb{R}^{N \times D}$ and $W \in \mathbb{R}^{D \times M}$ so that $Y \in \mathbb{R}^{N \times M}$. When we do this backward pass, assume we have $\pdv{L}{Y}$ in hand. We want to then compute $\pdv{L}{W}$ and chain rule tells us that

$$
\pdv{L}{W} = \pdv{L}{Y}\pd{Y}{W}
$$

---

<<Series("Backpropagation_")>>