**Cross entropy** is an [[entropy]] measure of the average number of bits needed to identify an event drawn from one set using a coding scheme for another set.

$$
\mathrm{CrossEntropy}(p,q) = \mathbb{E}_p\left[-\log q\right] = - \sum_x p(x) \log q(x)
$$

$$
\mathsf{CrossEntropy}(p, q) = H(p) + D_{KL}(p \parallel q)
$$

$$
\mathsf{CrossEntropy}(p, p) = H(p)
$$

In machine learning, we can use the cross entropy as a loss. For example, suppose we're doing binary classification.