**Backpropagation** is an [[algorithm]] for training an [[artificial neural network]], nowadays enabled by [[automatic differentiation]].

# Simple Feedforward Example

Let $x\^{(\ell)}_j$ denote output of neuron $j$ in layer $\ell$. Let $d^{(\ell)}$ be the number of nodes in layer $\ell$. We know that for [[activation function]] $g$ and weights $w_{ij}$, we will have the output of a neuron be

$$
x_j^{(\ell)} = g\left( \sum_{i=0}\^{d^{(\ell -1 )}} w_{ij}^{(\ell)} x_i^{(\ell -1)}\right)
$$