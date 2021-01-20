**Normalized maximum likelihood** is a Bayesian classification algorithm, that is a classifier whose probabilities actually represent uncertainty. First, we pick a statistical model with parameter family $\Theta$, which could be a [[artificial neural network]] or anything else. Then, we train it on the data.

When we want to classify a point $x$, we then consider how easily the classifier could accomodate each possible label $y$. We retrain the model as if it were part of that class and see what probability it outputs. Then, the actual output is normalized:

$$
p_{\text{NML}}( y \mid x) \propto \max_{\theta \in \Theta} p\left(y \mid \mathcal{D}, x, y\right)
$$

# Algorithm

1. Train a classifier with SGD normally.
2. When it comes to evaluate/use your model, do the following.
    1. Append the point with one of the labels, and then do more training steps. Then, record the probability.
    2. Repeat for every other label it could be. Now you have a set of unnormalized probabilities.

