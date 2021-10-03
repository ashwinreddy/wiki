An **affine function** is a vector-valued function of the form

$$
f(x_1, \dots, x_n) = A_1 x_1 + \dots + A_n x_n + b
$$

In a [[artificial neural network]], these come up often. Remember that

$$
\pdv{}{W} \left(XW + b \right) = \left[ \pdv{}{w_{ij} } \left( \sum_k x_{ik}w_{kj} + b_j \right) \right]
$$