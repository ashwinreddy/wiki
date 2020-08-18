**Normalized maximum likelihood** is a Bayesian classification algorithm, that is a classifier whose probabilities actually represent uncertainty. First, we pick a statistical model with parameter family $\Theta$, which could be a [[artificial neural network]] or anything else. Then, we train it on the data.

When we want to classify a point $x$, we then consider how easily the classifier could accomodate each possible label $y$. 

$$
\hat\theta = \arg\max_\theta p_\theta(x, y)
$$



for each possible label $y$ we retrain the model as if it were part of that class and see what probability it outputs. Then, the actual output is normalized:

$$
p_{\text{NML}}( y \mid x) \propto \max_{\theta \in \Theta} p\left(y \mid \mathcal{D}, x, y\right)
$$

This algorithm is very slow because it requires training to convergence for each possible label on each example.



for a [[statistical model]] $M$ is a [[probability distribution]]

$$
p_{\text{NML}}(x^n) = { p_{\hat\theta(x\^n)}(\tilde{x}^n)  \over \sum_{\tilde{x}^n \in \mathcal{X}^n} p_{\hat\theta(x\^n)}(\tilde{x}^n) }
$$

The NML distribution minimizes regret in the worse case:

$$
p_{\text{NML}} = \arg\min_q \max_{x^n \in \mathcal{X}^n} R(q, \Theta, x^n)
$$

The regret corresponds to excess number of bits $q$ uses compared to the the maximum likelihood estimator $\hat\theta(x^n)$

$$
R(q, \Theta, x^n) = \log p_{\hat\theta(x\^n)}(x^n) - \log q\left(x^n\right)
$$

# Algorithm

1. Train a classifier with SGD normally.
2. When it comes to evaluate/use your model, do the following.
    1. Append the point with one of the labels, and then do more training steps. Then, record the probability.
    2. Repeat for every other label it could be. Now you have a set of unnormalized probabilities.