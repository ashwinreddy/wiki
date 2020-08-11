---
bibliography: "./Computer-Science/Artificial-Intelligence/Machine-Learning/papers.bib"
---

**Bayes by Backprop** is an algorithm introduced in @blundell2015weight that puts uncertainty on the weights of a [[artificial neural network]]. 

We treat the neural network as a probabilistic model $P(y \mid x, w)$ with weights $w$ and input $x$ and output $y$. Given a set of examples $\mathcal{D}$, we then do [[maximum likelihood estimation]]:

$$
w_{\text{MLE}} = \arg\max_w \log P(\mathcal{D} \mid w)
$$

Regularization is the result of [[maximum a posteriori]] estimation

$$
w_{\text{MAP}} = \arg\max_w \log P(w \mid \mathcal{D})
$$

---