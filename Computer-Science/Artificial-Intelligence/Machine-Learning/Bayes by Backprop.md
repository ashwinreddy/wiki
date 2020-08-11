---
bibliography: "./Computer-Science/Artificial-Intelligence/Machine-Learning/papers.bib"
---

**Bayes by Backprop** is an algorithm introduced in @blundell2015weight that puts uncertainty on the weights of a [[artificial neural network]]. We treat the neural network as a probabilistic model $P(y \mid x, w)$ with weights $w$ and input $x$ and output $y$. Given a set of examples $\mathcal{D}$, we then do [[maximum likelihood estimation]]:

$$
w_{\text{MLE}} = \arg\max_w \log P(\mathcal{D} \mid w)
$$

Regularization is the result of [[Maximum a posteriori estimation]]:

$$
w_{\text{MAP}} = \arg\max_w \log P(w \mid \mathcal{D})
$$

Since we have uncertainty in the weights, we have a distribution $P( w \mid \mathcal{D})$ and the outputs of the network will need to be taken in expectation:

$$
P(\hat{y} \mid \hat{x}) = \mathbb{E}_{ P(w \mid \mathcal{D} ) } \left[ P(\hat{y} \mid \hat{x}, w) \right]
$$

An intuitive way to think about it is to see that we've got an ensemble of infinitely many neural networks. But this also makes it intractable. We could try to approximate the posterior by minimizing [[Kullback-Leibler divergence]]:

$$
\theta^\star = \arg\min_\theta D_{KL}( q(w \mid \theta) \parallel P(w \mid \mathcal{D}) )
$$

---