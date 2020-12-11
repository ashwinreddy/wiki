The **softmax function** takes a vector of values and produces a probability distribution from them (all numbers are non-negative and sum to 1). It is normalized [[exponential function]].

$$
\mathsf{softmax}\left(\begin{bmatrix} z_1 \\\\\ \vdots \\\\\ z_n \end{bmatrix}\right) = { 1 \over \sum_{i=1}^n e^{z_i} } \begin{bmatrix} e^{z_1} \\\\\ \vdots \\\\\ e^{z_n} \end{bmatrix}
$$

This is a [[probability mass function]]. It is related to the [[LogSumExp]]