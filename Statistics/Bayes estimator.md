The **Bayes estimator** is an [[estimator]] $\hat{\theta}(x)$ for parameter $\theta$ such that

$$
\hat{\theta}\_{\text{Bayes}} (x) = \arg\min_{\hat\theta} \mathbb{E}_\pi\left[ L(\theta, \hat{\theta}) \right]
$$

With a 0-1 loss, the two-class Bayes optimal classifier classifies points in a way that minimizes the probability of misclassification.

$$
P(\text{error}) = \int\limits_\RR P(\text{error} \mid x) P(x) \dd{x}
$$